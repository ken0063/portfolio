import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Project = {
  id: string;
  created_at: string;
  title: string;
  description: string;
  image_url: string;
  demo_url: string;
  repo_url: string;
  is_visible: boolean;
  tech_stack: string[];
};
