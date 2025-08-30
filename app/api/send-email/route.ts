import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, subject, template, data } = body;

    // Validate required fields
    if (!to || !subject || !template) {
      return NextResponse.json(
        { error: 'Missing required fields: to, subject, template' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn('⚠️ RESEND_API_KEY not configured, skipping email send');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(resendApiKey);

    // Generate email content based on template
    const emailContent = generateEmailContent(template, data);

    // Send email using Resend SDK
    const result = await resend.emails.send({
      from: 'ByteSecAI <noreply@bytesecai.com>',
      to: [to],
      subject: subject,
      html: emailContent.html,
      text: emailContent.text,
    });

    if (result.error) {
      console.error('Resend SDK error:', result.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('✅ Email sent successfully:', result.data?.id);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      id: result.data?.id
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function generateEmailContent(template: string, data: any) {
  switch (template) {
    case 'newsletter-confirmation':
      return {
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to ByteSecAI Newsletter</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0891b2, #2563eb); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
              .button { display: inline-block; background: #0891b2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
              .footer { text-align: center; margin-top: 30px; color: #64748b; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚀 Welcome to ByteSecAI!</h1>
                <p>You're now part of the future of cybersecurity</p>
              </div>
              <div class="content">
                <h2>Hi ${data.name},</h2>
                <p>Thank you for subscribing to the ByteSecAI newsletter! You're now part of an exclusive community of cybersecurity professionals and enthusiasts.</p>
                
                <p><strong>What you'll receive:</strong></p>
                <ul>
                  <li>🔒 Latest cybersecurity threats and solutions</li>
                  <li>🤖 AI-powered security insights</li>
                  <li>📊 Industry trends and analysis</li>
                  <li>💡 Exclusive startup updates</li>
                  <li>🎯 Expert tips and best practices</li>
                </ul>
                
                <p>We're excited to share our journey in revolutionizing cybersecurity with artificial intelligence!</p>
                
                <a href="https://bytesecai.com" class="button">Visit Our Website</a>
                
                <p><small>If you didn't sign up for this newsletter, you can <a href="${data.unsubscribeUrl}">unsubscribe here</a>.</small></p>
              </div>
              <div class="footer">
                <p>ByteSecAI - Securing Tomorrow with AI-Powered Cybersecurity</p>
                <p>© 2024 ByteSecAI. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `
Welcome to ByteSecAI Newsletter!

Hi ${data.name},

Thank you for subscribing to the ByteSecAI newsletter! You're now part of an exclusive community of cybersecurity professionals and enthusiasts.

What you'll receive:
- Latest cybersecurity threats and solutions
- AI-powered security insights
- Industry trends and analysis
- Exclusive startup updates
- Expert tips and best practices

We're excited to share our journey in revolutionizing cybersecurity with artificial intelligence!

Visit our website: https://bytesecai.com

If you didn't sign up for this newsletter, you can unsubscribe here: ${data.unsubscribeUrl}

ByteSecAI - Securing Tomorrow with AI-Powered Cybersecurity
© 2024 ByteSecAI. All rights reserved.
        `
      };

    case 'contact-confirmation':
      return {
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank you for contacting ByteSecAI</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0891b2, #2563eb); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
              .message-box { background: white; padding: 20px; border-left: 4px solid #0891b2; margin: 20px 0; }
              .footer { text-align: center; margin-top: 30px; color: #64748b; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🛡️ Thank You for Contacting ByteSecAI!</h1>
                <p>We've received your message and will respond soon</p>
              </div>
              <div class="content">
                <h2>Hi ${data.name},</h2>
                <p>Thank you for reaching out to ByteSecAI! We've received your message and our cybersecurity experts will review it within the next 24 hours.</p>
                
                <div class="message-box">
                  <p><strong>Your Message:</strong></p>
                  <p>"${data.message}"</p>
                </div>
                
                <p><strong>Reference ID:</strong> ${data.contactId}</p>
                <p><strong>Company:</strong> ${data.company}</p>
                
                <p>In the meantime, feel free to explore our website to learn more about our AI-powered cybersecurity solutions.</p>
                
                <p>Best regards,<br>The ByteSecAI Team</p>
              </div>
              <div class="footer">
                <p>ByteSecAI - Securing Tomorrow with AI-Powered Cybersecurity</p>
                <p>© 2024 ByteSecAI. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `
Thank You for Contacting ByteSecAI!

Hi ${data.name},

Thank you for reaching out to ByteSecAI! We've received your message and our cybersecurity experts will review it within the next 24 hours.

Your Message:
"${data.message}"

Reference ID: ${data.contactId}
Company: ${data.company}

In the meantime, feel free to explore our website to learn more about our AI-powered cybersecurity solutions.

Best regards,
The ByteSecAI Team

ByteSecAI - Securing Tomorrow with AI-Powered Cybersecurity
© 2024 ByteSecAI. All rights reserved.
        `
      };

    case 'admin-notification':
      return {
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission - ByteSecAI</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
              .message-box { background: white; padding: 20px; border-left: 4px solid #dc2626; margin: 20px 0; }
              .details { background: #f1f5f9; padding: 20px; border-radius: 6px; margin: 20px 0; }
              .footer { text-align: center; margin-top: 30px; color: #64748b; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📧 New Contact Form Submission</h1>
                <p>ByteSecAI Website</p>
              </div>
              <div class="content">
                <h2>New Contact Form Submission</h2>
                <p>A new contact form has been submitted on your ByteSecAI website.</p>
                
                <div class="details">
                  <p><strong>Name:</strong> ${data.name}</p>
                  <p><strong>Email:</strong> ${data.email}</p>
                  <p><strong>Company:</strong> ${data.company}</p>
                  <p><strong>Contact ID:</strong> ${data.contactId}</p>
                  <p><strong>Timestamp:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
                  <p><strong>IP Address:</strong> ${data.ipAddress}</p>
                </div>
                
                <div class="message-box">
                  <p><strong>Message:</strong></p>
                  <p>"${data.message}"</p>
                </div>
                
                <p><strong>Action Required:</strong> Please respond to this inquiry within 24 hours.</p>
              </div>
              <div class="footer">
                <p>ByteSecAI - Securing Tomorrow with AI-Powered Cybersecurity</p>
                <p>© 2024 ByteSecAI. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `
New Contact Form Submission - ByteSecAI

New Contact Form Submission

A new contact form has been submitted on your ByteSecAI website.

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Contact ID: ${data.contactId}
Timestamp: ${new Date(data.timestamp).toLocaleString()}
IP Address: ${data.ipAddress}

Message:
"${data.message}"

Action Required: Please respond to this inquiry within 24 hours.

ByteSecAI - Securing Tomorrow with AI-Powered Cybersecurity
© 2024 ByteSecAI. All rights reserved.
        `
      };

    default:
      return {
        html: '<p>Email template not found</p>',
        text: 'Email template not found'
      };
  }
}
