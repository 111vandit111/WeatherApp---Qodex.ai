import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zlzdrmiuajvziblingmb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsemRybWl1YWp2emlibGluZ21iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MDI1NTcsImV4cCI6MjA2NTM3ODU1N30.9gHU5gdE7kYWVD-YweHLXqdnaI5eV8czbJNugsqkps8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);