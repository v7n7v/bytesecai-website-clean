import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

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

    // Check if email exists in database
    let subscriber;
    
    try {
      const { data: existingSubscriber, error: fetchError } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .eq('email', email)
        .single();

      if (fetchError) {
        if (fetchError.code === 'PGRST116') {
          return NextResponse.json(
            { error: 'Email not found in our newsletter list' },
            { status: 404 }
          );
        }
        console.error('Supabase fetch error:', fetchError);
        return NextResponse.json(
          { error: 'Database error' },
          { status: 500 }
        );
      }

      subscriber = existingSubscriber;
    } catch (error) {
      console.error('Unsubscribe fetch error:', error);
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      );
    }

    if (!subscriber) {
      return NextResponse.json(
        { error: 'Email not found in our newsletter list' },
        { status: 404 }
      );
    }

    // Remove subscriber from database
    try {
      const { error: deleteError } = await supabase
        .from('newsletter_subscribers')
        .delete()
        .eq('email', email);

      if (deleteError) {
        console.error('Error unsubscribing user:', deleteError);
        return NextResponse.json(
          { error: 'Failed to unsubscribe. Please try again.' },
          { status: 500 }
        );
      }
    } catch (error) {
      console.error('Unsubscribe delete error:', error);
      return NextResponse.json(
        { error: 'Database error. Please try again.' },
        { status: 500 }
      );
    }

    console.log('✅ User unsubscribed successfully:', email);

    return NextResponse.json({
      success: true,
      message: 'You have been successfully unsubscribed from ByteSecAI newsletter.'
    });

  } catch (error) {
    console.error('Unsubscribe error:', error);
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
