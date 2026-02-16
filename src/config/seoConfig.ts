/**
 * SEO Configuration for The Bison Group
 * Centralized SEO settings for all pages
 */

import {
  organizationSchema,
  websiteSchema,
  professionalServiceSchema,
  createBlogPostingSchema,
} from '../utils/schemas';

export const siteConfig = {
  siteName: 'The Bison Group',
  siteUrl: 'https://thebisongroup.io',
  defaultImage: 'https://thebisongroup.io/og-image.jpg',
  twitterHandle: '@thebisongroup',
  author: 'The Bison Group',
  email: 'support@thebisongroup.io',
};

export const pageSEO = {
  home: {
    title: 'AI-Powered Leadership & Digital Transformation Consulting',
    description:
      'Transform your organization with AI-powered consulting services. Specializing in Leadership 2.0, behavioral analytics, and next-level operations for the Fourth Industrial Revolution.',
    keywords:
      'AI consulting, digital transformation, Leadership 2.0, behavioral change management, enterprise AI solutions, organizational development, business consulting, Fourth Industrial Revolution',
    url: siteConfig.siteUrl,
    schema: [organizationSchema, websiteSchema],
  },

  about: {
    title: 'About The Bison Group | AI & Leadership Consulting Experts',
    description:
      'Learn about The Bison Group, a leading AI-powered consulting firm specializing in Leadership 2.0, digital transformation, and organizational excellence.',
    keywords:
      'about Bison Group, AI consulting firm, Leadership 2.0 experts, consulting company, organizational development experts',
    url: `${siteConfig.siteUrl}/about`,
    schema: organizationSchema,
  },

  services: {
    title: 'AI Consulting Services | Leadership 2.0 & Digital Transformation',
    description:
      'Expert consulting services in AI implementation, Leadership 2.0, FAST-Galloping Ghost framework, behavioral analytics, and organizational transformation for the modern enterprise.',
    keywords:
      'AI consulting services, digital transformation consulting, Leadership 2.0 framework, behavioral analytics, organizational development, change management consulting, enterprise AI implementation',
    url: `${siteConfig.siteUrl}/services`,
    schema: professionalServiceSchema,
  },

  blog: {
    title: 'Leading Today Initiative | AI & Leadership Insights Blog',
    description:
      'Stay ahead with monthly insights on AI, Leadership 2.0, digital transformation, and organizational excellence. Download comprehensive strategy guides and research reports.',
    keywords:
      'leadership blog, AI insights, digital transformation blog, Leadership 2.0 articles, business transformation insights, Leading Today Initiative',
    url: `${siteConfig.siteUrl}/blog`,
    schema: organizationSchema,
  },

  contact: {
    title: 'Contact The Bison Group | Schedule Your Consultation',
    description:
      'Ready to transform your organization? Contact The Bison Group for expert AI consulting, Leadership 2.0 development, and digital transformation services.',
    keywords:
      'contact AI consultant, schedule consultation, business transformation contact, AI consulting inquiry, Leadership 2.0 consultation',
    url: `${siteConfig.siteUrl}/contact`,
    schema: organizationSchema,
  },
};

// Helper function to get blog post SEO
export function getBlogPostSEO(post: {
  title: string;
  excerpt: string;
  slug: string;
  published_date: string;
  updated_at?: string;
  author: string;
  volume?: string;
}) {
  const url = `${siteConfig.siteUrl}/blog/${post.slug}`;

  // Keywords based on volume
  const volumeKeywords: { [key: string]: string[] } = {
    '01': [
      'digital transformation leadership',
      'AI impact on behavior',
      'technology adoption strategies',
    ],
    '02': [
      'organizational resilience',
      'leadership development 2026',
      'growth strategies',
      'women in leadership',
    ],
    '03': [
      'behavioral change management',
      'adaptive leadership',
      'leadership flexibility',
      'technological revolution',
    ],
  };

  const keywords = volumeKeywords[post.volume || ''] || [
    'leadership insights',
    'business transformation',
    'AI consulting',
  ];

  return {
    title: post.title,
    description: post.excerpt,
    keywords: ['Leadership 2.0', 'The Bison Group', ...keywords].join(', '),
    url,
    type: 'article' as const,
    publishedTime: post.published_date,
    modifiedTime: post.updated_at || post.published_date,
    author: post.author,
    schema: createBlogPostingSchema({
      title: post.title,
      description: post.excerpt,
      author: post.author,
      publishedDate: post.published_date,
      modifiedDate: post.updated_at,
      url,
      keywords,
    }),
  };
}

// Keywords by topic for content creation
export const topicKeywords = {
  leadership: [
    'Leadership 2.0',
    'adaptive leadership',
    'transformational leadership',
    'executive coaching',
    'leadership development',
    'FAST-Galloping Ghost',
    'situational leadership',
  ],

  ai: [
    'artificial intelligence consulting',
    'AI implementation',
    'enterprise AI',
    'AI strategy',
    'machine learning consulting',
    'AI-powered solutions',
    'intelligent automation',
  ],

  digitalTransformation: [
    'digital transformation',
    'business transformation',
    'organizational change',
    'technology adoption',
    'digital strategy',
    'innovation consulting',
    'Fourth Industrial Revolution',
  ],

  behavioral: [
    'behavioral analytics',
    'behavior change management',
    'organizational behavior',
    'workplace culture',
    'employee engagement',
    'psychological safety',
  ],

  strategy: [
    'business strategy',
    'strategic planning',
    'competitive advantage',
    'disruptive innovation',
    'growth strategy',
    'operational excellence',
  ],
};

// Meta descriptions by page type
export const metaDescriptionTemplates = {
  blogPost: (title: string) =>
    `${title} - Expert insights from The Bison Group on Leadership 2.0, AI, and organizational transformation. Download the full research report.`,

  service: (serviceName: string) =>
    `${serviceName} services from The Bison Group. Expert AI-powered consulting for Leadership 2.0 and digital transformation.`,

  caseStudy: (companyName: string) =>
    `How ${companyName} achieved breakthrough results with The Bison Group's Leadership 2.0 and AI consulting services.`,
};

// Social sharing defaults
export const socialDefaults = {
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.siteName,
  },
};
