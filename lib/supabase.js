import { createClient } from '@supabase/supabase-js';

const NEXT_PUBLIC_SUPABASE_URL ="https://poqpyqfqypgzkugesoth.supabase.co";
const NEXT_PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvcXB5cWZxeXBnemt1Z2Vzb3RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MjA5OTMsImV4cCI6MjAxNjA5Njk5M30.UCkX-nNor0j6XLRKiHqAqNe24yc6NyzYQSfuxmcK31o"

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default supabase;