/**
 * JSON-LD Schema Markup for SEO
 * Structured data for The Bison Group website
 */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Bison Group',
  alternateName: 'Bison Group',
  url: 'https://thebisongroup.io',
  logo: 'https://thebisongroup.io/logo.png',
  description:
    'Leading AI-powered consulting firm specializing in Leadership 2.0, digital transformation, behavioral analytics, and organizational development for the Fourth Industrial Revolution.',
  foundingDate: '2020',
  email: 'support@thebisongroup.io',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@thebisongroup.io',
    contactType: 'Customer Service',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/the-bison-group',
    'https://twitter.com/thebisongroup',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Digital Transformation',
    'Leadership Development',
    'Organizational Behavior',
    'Change Management',
    'Business Consulting',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'The Bison Group',
  url: 'https://thebisongroup.io',
  description:
    'AI-powered consulting for Leadership 2.0, digital transformation, and organizational development.',
  publisher: organizationSchema,
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://thebisongroup.io/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export function createArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  url: string;
  imageUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: 'https://thebisongroup.io',
    },
    publisher: organizationSchema,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    image: article.imageUrl || 'https://thebisongroup.io/og-image.jpg',
  };
}

export function createBlogPostingSchema(post: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  url: string;
  imageUrl?: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://thebisongroup.io',
    },
    publisher: organizationSchema,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate || post.publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
    image: post.imageUrl || 'https://thebisongroup.io/og-image.jpg',
    keywords: post.keywords || [],
    articleSection: 'Leadership and Business Transformation',
    inLanguage: 'en-US',
  };
}

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'The Bison Group',
  url: 'https://thebisongroup.io',
  description:
    'Professional consulting services in AI, digital transformation, and organizational development.',
  priceRange: '$$$',
  areaServed: 'Worldwide',
  serviceType: [
    'AI Consulting',
    'Digital Transformation',
    'Leadership Development',
    'Organizational Change Management',
    'Behavioral Analytics',
  ],
  provider: organizationSchema,
};

export function createServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: organizationSchema,
    url: service.url,
    serviceType: 'Consulting',
    areaServed: 'Worldwide',
  };
}

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
