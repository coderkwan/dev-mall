import { SupabaseClient } from "@supabase/supabase-js";

export const supabase = new SupabaseClient(
  process.env.SUPABESE_URL,
  process.env.SUPABESE_ANON
);
