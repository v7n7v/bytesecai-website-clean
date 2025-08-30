import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, sessionId, timestamp } = body;

    // Validate required fields
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Try to store in Supabase, but don't fail if table doesn't exist
    let chatLog = null;
    
    if (supabase) {
      try {
        // Store in Supabase
        const { data: newChatLog, error: insertError } = await supabase
          .from('chat_sessions')
          .insert([
            {
              session_id: sessionId || 'unknown',
              user_id: 'anonymous',
              message: message,
              message_timestamp: timestamp || new Date().toISOString(),
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
          chatLog = newChatLog;
        }
      } catch (tableError) {
        console.warn('Chat logs table may not exist yet:', tableError);
        // Continue without database storage
      }
    } else {
      console.warn('Supabase not available, skipping database storage');
    }

    // Prepare webhook payload
    const webhookPayload = {
      type: 'chat_message',
      timestamp: timestamp || new Date().toISOString(),
      sessionId: sessionId || 'unknown',
      data: {
        message,
        source: 'website',
        userAgent: request.headers.get('user-agent') || 'Unknown',
        ip: request.headers.get('x-forwarded-for') || 'Unknown',
        supabase_id: chatLog?.id || 'not_stored'
      }
    };

    // Send to webhook if configured
    const webhookUrl = process.env.CHAT_WEBHOOK_URL;
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
          console.error('Chat webhook failed:', webhookResponse.status, webhookResponse.statusText);
        }
      } catch (webhookError) {
        console.error('Chat webhook error:', webhookError);
        // Don't fail the request if webhook fails
      }
    }

    // Log the chat message
    if (chatLog) {
      console.log('Chat message stored in Supabase:', {
        message: message.substring(0, 100) + (message.length > 100 ? '...' : ''),
        sessionId,
        timestamp,
        id: chatLog.id
      });
    } else {
      console.log('Chat message processed (database storage skipped):', {
        message: message.substring(0, 100) + (message.length > 100 ? '...' : ''),
        sessionId,
        timestamp
      });
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Message received successfully',
      id: chatLog?.id || 'webhook_only'
    });

  } catch (error) {
    console.error('Chat message error:', error);
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
