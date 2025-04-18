/*
  # Fix Trading Sessions RLS Policies

  1. Changes
    - Drop existing RLS policy
    - Add separate policies for INSERT, SELECT, UPDATE, and DELETE operations
    - Ensure user_id is properly enforced for new sessions
  
  2. Security
    - Enable RLS (already enabled)
    - Add granular policies for each operation type
    - Ensure users can only manage their own sessions
*/

-- Drop existing policy
DROP POLICY IF EXISTS "Users can manage their own trading sessions" ON trading_sessions;

-- Create separate policies for each operation
CREATE POLICY "Enable insert for authenticated users only" 
ON trading_sessions FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Enable select for users based on user_id" 
ON trading_sessions FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

CREATE POLICY "Enable update for users based on user_id" 
ON trading_sessions FOR UPDATE 
TO authenticated 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Enable delete for users based on user_id" 
ON trading_sessions FOR DELETE 
TO authenticated 
USING (auth.uid() = user_id);