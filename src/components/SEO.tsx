import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  schema?: object;
}

export default function SEO({
  title = 'The Bison Group - AI-Powered Leadership & Digital Transformation Consulting',
  description = 'Transform your organization with AI-powered consulting services. Specializing in Leadership 2.0, behavioral analytics, and next-level operations for the Fourth Industrial Revolution.',
  keywords = 'AI consulting, digital transformation, Leadership 2.0, behavioral change management, enterprise AI solutions, organizational development, business consulting, Fourth Industrial Revolution',
  image = 'https://thebisongroup.io/og-image.jpg',
  url = 'https://thebisongroup.io',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'The Bison Group',
  schema,
}: SEOProps) {
  const siteTitle = 'The Bison Group';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  // Default Organization Schema
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Bison Group',
    url: 'https://thebisongroup.io',
    logo: 'https://thebisongroup.io/logo.png',
    description:
      'Leading AI-powered consulting firm specializing in Leadership 2.0, digital transformation, and organizational development.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@thebisongroup.io',
      contactType: 'Customer Service',
    },
    sameAs: [
      'https://www.linkedin.com/company/the-bison-group',
      'https://twitter.com/thebisongroup',
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
}
