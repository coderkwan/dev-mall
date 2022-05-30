import { SupabaseClient } from "@supabase/supabase-js";

export const supabase = new SupabaseClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON
);

export const allTechFetcher = async () => {
  const { data, error } = await supabase.from("tech").select();
  return data;
};
