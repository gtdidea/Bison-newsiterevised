/*
  # Create Assessments Table

  1. New Tables
    - `assessments`
      - `id` (uuid, primary key) - Unique identifier for each assessment
      - `created_at` (timestamptz) - Timestamp when assessment was submitted
      - `user_name` (text) - Full name of the person taking the assessment
      - `user_email` (text) - Email address for sending report
      - `company` (text) - Company name
      - `role` (text) - User's role/position
      - `industry` (text) - Industry sector
      - `challenges` (text[]) - Array of selected challenges
      - `strategic_priorities` (text[]) - Array of selected priorities
      - `team_size` (text) - Size of their team
      - `current_tools` (text[]) - Array of tools currently using
      - `biggest_pain_point` (text) - Open text response about main pain point
      - `report_content` (text) - Generated assessment report content

  2. Security
    - Enable RLS on `assessments` table
    - Add policy for service role to insert assessments (Edge Function access)
    - Add policy for authenticated admin users to read assessments

  3. Important Notes
    - This table stores all strategic assessment submissions
    - Data is used to send personalized reports to users
    - Email notifications are sent to both user and info@thebisongroup.io
*/

CREATE TABLE IF NOT EXISTS assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_name text NOT NULL,
  user_email text NOT NULL,
  company text NOT NULL,
  role text NOT NULL,
  industry text NOT NULL,
  challenges text[] DEFAULT '{}',
  strategic_priorities text[] DEFAULT '{}',
  team_size text NOT NULL,
  current_tools text[] DEFAULT '{}',
  biggest_pain_point text NOT NULL,
  report_content text NOT NULL
);

ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert assessments"
  ON assessments
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can read assessments"
  ON assessments
  FOR SELECT
  TO service_role
  USING (true);

CREATE INDEX IF NOT EXISTS idx_assessments_created_at ON assessments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_assessments_email ON assessments(user_email);