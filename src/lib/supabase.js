import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://aidighmswvkcdvgoxeze.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZGlnaG1zd3ZrY2R2Z294ZXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMzY1OTIsImV4cCI6MjA1NDYxMjU5Mn0.3ulXeKuuItshDTz_Nt1ZkN_khNMDKqMdFxuvOlwR4Sg";
export const supabase = createClient(supabaseUrl, supabaseKey);
