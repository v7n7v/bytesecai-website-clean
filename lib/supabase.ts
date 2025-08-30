import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Use placeholder values during build time to prevent build failures
const buildTimeUrl = 'https://placeholder.supabase.co';
const buildTimeKey = 'placeholder-anon-key-for-build';

if (!supabaseUrl || !supabaseAnonKey) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('Missing Supabase environment variables. Using placeholder values for build.');
  }
}

export const supabase = createClient(
  supabaseUrl || buildTimeUrl, 
  supabaseAnonKey || buildTimeKey, 
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);

// Helper to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return !!(supabaseUrl && supabaseAnonKey && supabaseUrl !== buildTimeUrl);
};

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
