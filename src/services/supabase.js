import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://aledbhdodqicjzlgddak.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZWRiaGRvZHFpY2p6bGdkZGFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3NjgwODMsImV4cCI6MjAxNDM0NDA4M30.F9R9NnK5UWU4iJYAuYjN4ArbsmZYydCLwLRLftDYwDg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
