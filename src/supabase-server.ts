import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hbffpvolyfiubsuhxaqo.supabase.co";
const supabaseSecret = process.env.SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl!, supabaseSecret!, {
  auth: {
    persistSession: false,
  },
});
