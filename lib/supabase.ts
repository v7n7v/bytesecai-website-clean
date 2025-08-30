import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Check your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Database types for TypeScript
export interface NewsletterSubscription {
  id: string;
  email: string;
  created_at: string;
  source: string;
  user_agent?: string;
  ip_address?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  created_at: string;
  source: string;
  user_agent?: string;
  ip_address?: string;
}

export interface ChatLog {
  id: string;
  message: string;
  session_id: string;
  timestamp: string;
  source: string;
  user_agent?: string;
  ip_address?: string;
}
