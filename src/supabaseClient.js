// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "supabase-url"; 
const SUPABASE_ANON_KEY = "anon-key";

export const supabase = createClient("https://lwpfoywjhvelvwilggse.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3cGZveXdqaHZlbHZ3aWxnZ3NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MTU2MDcsImV4cCI6MjA1ODM5MTYwN30.9YFZjdbKNB6NxfKgCmckBG4h1zFUh1UM2LVdfm14Qss");
