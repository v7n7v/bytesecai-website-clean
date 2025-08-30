import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    
    const debug = {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      hasResendApiKey: !!resendApiKey,
      resendApiKeyPrefix: resendApiKey ? resendApiKey.substring(0, 8) + '...' : 'NOT_SET',
      siteUrl: siteUrl || 'NOT_SET',
      availableEnvVars: Object.keys(process.env).filter(key => 
        key.includes('RESEND') || key.includes('SITE_URL') || key.includes('SUPABASE')
      ),
      nodeEnv: process.env.NODE_ENV,
    };

    console.log('🐛 Email Debug Info:', debug);

    return NextResponse.json(debug);
  } catch (error) {
    console.error('Debug endpoint error:', error);
    return NextResponse.json(
      { error: 'Debug failed', details: error },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { testEmail } = body;

    if (!testEmail) {
      return NextResponse.json(
        { error: 'testEmail is required' },
        { status: 400 }
      );
    }

    // Test the email sending directly
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    
    console.log('🧪 Testing email send to:', testEmail);
    console.log('🧪 Using base URL:', baseUrl);
    
    const emailResponse = await fetch(`${baseUrl}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: testEmail,
        subject: 'ByteSecAI Newsletter Test Email 🧪',
        template: 'newsletter-confirmation',
        data: {
          name: 'Test User',
          email: testEmail,
          unsubscribeUrl: `${baseUrl}/unsubscribe?email=${encodeURIComponent(testEmail)}`
        }
      }),
    });

    const responseText = await emailResponse.text();
    
    const result = {
      success: emailResponse.ok,
      status: emailResponse.status,
      statusText: emailResponse.statusText,
      responseBody: responseText,
      testEmail: testEmail,
      baseUrl: baseUrl,
    };

    console.log('🧪 Email test result:', result);

    return NextResponse.json(result);

  } catch (error) {
    console.error('Email test error:', error);
    return NextResponse.json(
      { error: 'Email test failed', details: error },
      { status: 500 }
    );
  }
}
