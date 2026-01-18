import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://oszrpsjgeirmwralazua.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVkYjBjMGVjLWQwNTctNDk0ZS1hYmYyLTE0ZWQ2ZDA3MTBkMCJ9.eyJwcm9qZWN0SWQiOiJvc3pycHNqZ2Vpcm13cmFsYXp1YSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzY4NTY1NjMwLCJleHAiOjIwODM5MjU2MzAsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.do5yPSYUz9LanN13xaAfNXDQd8dcmwlt-vVG8Gvxy2U';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };