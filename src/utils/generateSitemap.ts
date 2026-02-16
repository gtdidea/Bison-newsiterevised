/**
 * Sitemap Generator Utility
 * Generates XML sitemap for The Bison Group website
 */

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateSitemap(urls: SitemapUrl[]): string {
  const urlEntries = urls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority !== undefined ? `<priority>${url.priority}</priority>` : ''}
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;
}

export async function generateDynamicSitemap(supabaseClient: any): Promise<string> {
  const baseUrl = 'https://thebisongroup.io';
  const now = new Date().toISOString();

  // Static pages
  const staticUrls: SitemapUrl[] = [
    {
      loc: baseUrl,
      lastmod: now,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/services`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: now,
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.7,
    },
  ];

  // Fetch blog posts from database
  const { data: posts } = await supabaseClient
    .from('blog_posts')
    .select('slug, updated_at, published_date')
    .eq('is_published', true)
    .order('published_date', { ascending: false });

  const blogUrls: SitemapUrl[] =
    posts?.map((post: any) => ({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: post.updated_at || post.published_date,
      changefreq: 'weekly' as const,
      priority: 0.8,
    })) || [];

  return generateSitemap([...staticUrls, ...blogUrls]);
}

// For build-time generation
export const staticSitemapUrls: SitemapUrl[] = [
  {
    loc: 'https://thebisongroup.io',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    loc: 'https://thebisongroup.io/about',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: 'https://thebisongroup.io/services',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    loc: 'https://thebisongroup.io/blog',
    changefreq: 'daily',
    priority: 0.9,
  },
  {
    loc: 'https://thebisongroup.io/contact',
    changefreq: 'monthly',
    priority: 0.7,
  },
  // Blog posts (will be added dynamically)
  {
    loc: 'https://thebisongroup.io/blog/leading-today-initiative',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: 'https://thebisongroup.io/blog/leading-today-initiative-vol-02',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: 'https://thebisongroup.io/blog/leading-today-initiative-vol-03',
    changefreq: 'monthly',
    priority: 0.8,
  },
];
