import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Only create client if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    })
  : null;

// Helper function to check if Supabase is available
export const isSupabaseAvailable = () => !!supabase;

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
