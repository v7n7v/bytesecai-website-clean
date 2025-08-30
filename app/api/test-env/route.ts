import { NextResponse } from 'next/server';
import { isSupabaseConfigured } from '../../../lib/supabase';

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  return NextResponse.json({
    environment: process.env.NODE_ENV,
    supabaseConfigured: isSupabaseConfigured(),
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
    urlPreview: supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : 'Not set',
    timestamp: new Date().toISOString()
  });
}
