import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wxosyfkrnsuptzysqvux.supabase.co";
const supabaseKey = "sb_publishable_V5UukqCNnjHQOncESrw3qg_4MzhE2h4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
