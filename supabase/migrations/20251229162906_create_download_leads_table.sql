/*
  # Create Download Leads Table

  1. New Tables
    - `download_leads`
      - `id` (uuid, primary key)
      - `name` (text) - User's name
      - `email` (text) - User's email
      - `phone` (text) - User's telephone number
      - `document_name` (text) - Name of downloaded document
      - `source` (text) - Source of the download (blog post slug)
      - `created_at` (timestamptz) - When the lead was captured

  2. Security
    - Enable RLS on `download_leads` table
    - Add policy for service role only (backend access only)
    
  3. Indexes
    - Add index on email for quick lookups
    - Add index on created_at for sorting
*/

-- Create download_leads table
CREATE TABLE IF NOT EXISTS download_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  document_name text NOT NULL,
  source text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE download_leads ENABLE ROW LEVEL SECURITY;

-- Create policy - only service role can access (used by edge function)
CREATE POLICY "Service role can insert download leads"
  ON download_leads
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can read download leads"
  ON download_leads
  FOR SELECT
  TO service_role
  USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_download_leads_email ON download_leads(email);
CREATE INDEX IF NOT EXISTS idx_download_leads_created_at ON download_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_download_leads_source ON download_leads(source);