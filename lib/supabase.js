import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://svldscoxhoojmkhtbzbq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2bGRzY294aG9vam1raHRiemJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NzcwMTcsImV4cCI6MjA5NDM1MzAxN30.F2Sfsrzcsxbb40evWuGzNDjFTeGYv_lyTMT_7VIcU0A";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);