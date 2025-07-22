// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://xmehbzjwltytccwbllft.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtZWhiemp3bHR5dGNjd2JsbGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNDExMjQsImV4cCI6MjA2ODYxNzEyNH0.bxj780HzAaX45oY2EKZWny5xn4KruFUMCG3Y4_HGbhc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)