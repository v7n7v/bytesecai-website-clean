import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Store in Supabase
    let contactMessage = null;
    
    if (supabase) {
      const { data: newContactMessage, error: supabaseError } = await supabase
        .from('contacts')
        .insert([
          {
            name,
            email,
            company: company || 'Not specified',
            message,
            source: 'website',
            user_agent: request.headers.get('user-agent') || 'Unknown',
            ip_address: request.headers.get('x-forwarded-for') || 'Unknown'
          }
        ])
        .select()
        .single();

      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        return NextResponse.json(
          { error: 'Database error' },
          { status: 500 }
        );
      }
      
      contactMessage = newContactMessage;
    } else {
      console.warn('Supabase not available, skipping database storage');
      // Create a mock contact message for email functionality
      contactMessage = { id: 'mock-' + Date.now() };
    }

    // Send confirmation email to user
    try {
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
      const emailResponse = await fetch(`${baseUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: 'Thank you for contacting ByteSecAI! 🛡️',
          template: 'contact-confirmation',
          data: {
            name: name,
            email: email,
            company: company || 'Not specified',
            message: message,
            contactId: contactMessage.id
          }
        }),
      });

      if (emailResponse.ok) {
        console.log('✅ Thank you email sent to:', email);
      } else {
        console.warn('⚠️ Failed to send thank you email to:', email);
      }
    } catch (emailError) {
      console.warn('⚠️ Email service error:', emailError);
      // Don't fail the contact form if email fails
    }

    // Send notification email to admin
    try {
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
      const adminEmailResponse = await fetch(`${baseUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'newsletter@bytesecai.com',
          subject: 'New Contact Form Submission - ByteSecAI',
          template: 'admin-notification',
          data: {
            name: name,
            email: email,
            company: company || 'Not specified',
            message: message,
            contactId: contactMessage.id,
            timestamp: new Date().toISOString(),
            userAgent: request.headers.get('user-agent') || 'Unknown',
            ipAddress: request.headers.get('x-forwarded-for') || 'Unknown'
          }
        }),
      });

      if (adminEmailResponse.ok) {
        console.log('✅ Admin notification sent to newsletter@bytesecai.com');
      } else {
        console.warn('⚠️ Failed to send admin notification');
      }
    } catch (emailError) {
      console.warn('⚠️ Admin email service error:', emailError);
      // Don't fail the contact form if admin email fails
    }

    // Prepare webhook payload
    const webhookPayload = {
      type: 'contact_form',
      timestamp: new Date().toISOString(),
      data: {
        name,
        email,
        company: company || 'Not specified',
        message,
        source: 'website',
        supabase_id: contactMessage.id
      }
    };

    // Send to webhook if configured
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
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
          console.error('Webhook failed:', webhookResponse.status, webhookResponse.statusText);
        }
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
        // Don't fail the request if webhook fails
      }
    }

    // Log the contact form submission
    console.log('Contact form stored in Supabase:', {
      name,
      email,
      company,
      message: message.substring(0, 100) + (message.length > 100 ? '...' : ''),
      id: contactMessage.id
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
      id: contactMessage.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
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
