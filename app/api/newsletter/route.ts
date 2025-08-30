import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    let existingSubscription = null;
    let subscription = null;
    
    if (supabase) {
      try {
        const { data: existing } = await supabase
          .from('newsletter_subscribers')
          .select('*')
          .eq('email', email)
          .single();

        existingSubscription = existing;
      } catch {
        // Email not found, which is fine
      }

      if (existingSubscription) {
        return NextResponse.json(
          { error: 'Email already subscribed' },
          { status: 400 }
        );
      }

      // Store in Supabase
      try {
        const { data: newSubscription, error: insertError } = await supabase
          .from('newsletter_subscribers')
          .insert([
            {
              email,
              name: name || 'Subscriber',
              source: 'website',
              user_agent: request.headers.get('user-agent') || 'Unknown',
              ip_address: request.headers.get('x-forwarded-for') || 'Unknown'
            }
          ])
          .select()
          .single();

        if (insertError) {
          console.warn('Supabase insert failed (table may not exist):', insertError);
        } else {
          subscription = newSubscription;
        }
      } catch (tableError) {
        console.warn('Newsletter subscribers table may not exist yet:', tableError);
        // Continue without database storage
      }
    } else {
      console.warn('Supabase not available, skipping database storage');
    }

    // Send confirmation email
    try {
      // Use localhost in development, production URL otherwise
      const isDevelopment = process.env.NODE_ENV === 'development';
      const baseUrl = isDevelopment ? 'http://localhost:3000' : (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000');
      const emailResponse = await fetch(`${baseUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: 'Welcome to ByteSecAI Newsletter! 🚀',
          template: 'newsletter-confirmation',
          data: {
            name: name || 'there',
            email: email,
            unsubscribeUrl: `${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}`
          }
        }),
      });

      if (emailResponse.ok) {
        console.log('✅ Confirmation email sent to:', email);
      } else {
        const errorText = await emailResponse.text();
        console.warn('⚠️ Failed to send confirmation email to:', email);
        console.warn('⚠️ Email API response:', emailResponse.status, errorText);
      }
    } catch (emailError) {
      console.warn('⚠️ Email service error:', emailError);
      // Don't fail the subscription if email fails
    }

    // Prepare webhook payload
    const webhookPayload = {
      type: 'newsletter_subscription',
      timestamp: new Date().toISOString(),
      data: {
        email,
        name: name || 'Subscriber',
        source: 'website',
        supabase_id: subscription?.id || 'not_stored'
      }
    };

    // Send to webhook if configured
    const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'ByteSecAI-Website/1.0'
          },
          body: JSON.stringify(webhookPayload)
        });

        if (!webhookResponse.ok) {
          console.warn('Newsletter webhook failed:', webhookResponse.status, webhookResponse.statusText);
        }
      } catch (webhookError) {
        console.warn('Newsletter webhook error:', webhookError);
        // Don't fail the request if webhook fails
      }
    }

    // Log the newsletter subscription
    if (subscription) {
      console.log('Newsletter subscription stored in Supabase:', {
        email,
        name: name || 'Subscriber',
        id: subscription.id
      });
    } else {
      console.log('Newsletter subscription processed (database storage skipped):', {
        email,
        name: name || 'Subscriber'
      });
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing to ByteSecAI! Please check your email for confirmation.',
      id: subscription?.id || 'webhook_only'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
