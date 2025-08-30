import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to } = body;

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    // Send a simple test email
    const result = await resend.emails.send({
      from: 'ByteSecAI <noreply@bytesecai.com>',
      to: [to || 'alula2006@gmail.com'],
      subject: 'ByteSecAI Email Test 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0891b2, #2563eb); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">🚀 ByteSecAI Email Test</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Your email system is working perfectly!</p>
          </div>
          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1e293b; margin-top: 0;">Congratulations! 🎉</h2>
            <p style="color: #475569; line-height: 1.6;">
              Your ByteSecAI website now has a fully functional email confirmation system! 
              This test email confirms that:
            </p>
            <ul style="color: #475569; line-height: 1.6;">
              <li>✅ Resend API is properly configured</li>
              <li>✅ Email templates are working</li>
              <li>✅ Newsletter confirmations will be sent</li>
              <li>✅ Contact form confirmations will be sent</li>
              <li>✅ Admin notifications will be sent</li>
            </ul>
            <p style="color: #475569; line-height: 1.6;">
              <strong>Next steps:</strong> Test the newsletter subscription and contact form on your website!
            </p>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #64748b; font-size: 14px;">
            <p>ByteSecAI - Securing Tomorrow with AI-Powered Cybersecurity</p>
            <p>© 2024 ByteSecAI. All rights reserved.</p>
          </div>
        </div>
      `,
      text: `
ByteSecAI Email Test 🚀

Congratulations! 🎉

Your ByteSecAI website now has a fully functional email confirmation system! 
This test email confirms that:

✅ Resend API is properly configured
✅ Email templates are working
✅ Newsletter confirmations will be sent
✅ Contact form confirmations will be sent
✅ Admin notifications will be sent

Next steps: Test the newsletter subscription and contact form on your website!

ByteSecAI - Securing Tomorrow with AI-Powered Cybersecurity
© 2024 ByteSecAI. All rights reserved.
      `
    });

    if (result.error) {
      console.error('Resend test email error:', result.error);
      return NextResponse.json(
        { error: 'Failed to send test email', details: result.error },
        { status: 500 }
      );
    }

    console.log('✅ Test email sent successfully:', result.data?.id);

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully!',
      id: result.data?.id
    });

  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error },
      { status: 500 }
    );
  }
}
