/*
  # Create Blog Posts Table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text, not null) - Blog post title
      - `slug` (text, unique, not null) - URL-friendly slug
      - `content` (text, not null) - Full blog post content
      - `excerpt` (text) - Short description/summary
      - `volume` (text) - Volume number (e.g., "01")
      - `published_date` (timestamptz, not null) - Publication date
      - `author` (text, default 'The Bison Group') - Author name
      - `is_published` (boolean, default true) - Publication status
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())
  
  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access to published posts
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  volume text,
  published_date timestamptz NOT NULL DEFAULT now(),
  author text DEFAULT 'The Bison Group',
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (is_published = true);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_date ON blog_posts(published_date DESC);