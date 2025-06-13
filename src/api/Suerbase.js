import { createClient } from '@supabase/supabase-js';
const supabaseKey = import.meta.env.VITE_SUPABASE;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON;

export const supabase = createClient( supabaseKey, supabaseAnonKey);