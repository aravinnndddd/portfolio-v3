/**
 * SEO and Meta Tags Utility
 * Dynamically update page title, description, and OG tags
 */

interface MetaTagsConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SITE_URL = 'https://aravind-p.me';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const updateMetaTags = (config: MetaTagsConfig) => {
  // Update title
  document.title = config.title;
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', config.description);

  // Update OG tags
  const ogTags = [
    { property: 'og:title', content: config.title },
    { property: 'og:description', content: config.description },
    { property: 'og:image', content: config.image || DEFAULT_OG_IMAGE },
    { property: 'og:url', content: config.url || window.location.href },
    { property: 'og:type', content: config.type || 'website' },
  ];

  ogTags.forEach(({ property, content }) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  });

  // Update Twitter Card tags
  const twitterTags = [
    { name: 'twitter:title', content: config.title },
    { name: 'twitter:description', content: config.description },
    { name: 'twitter:image', content: config.image || DEFAULT_OG_IMAGE },
  ];

  twitterTags.forEach(({ name, content }) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  });
};

/**
 * Add JSON-LD structured data
 */
export const addStructuredData = (data: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Person Schema for homepage
 */
export const getPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aravind P',
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  sameAs: [
    'https://www.linkedin.com/in/aravind-p-832849331/',
    'https://github.com/aravinnndddd',
  
  ],

});

/**
 * Portfolio Project Schema
 */
export const getProjectSchema = (project: {
  name: string;
  description: string;
  image: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.name,
  description: project.description,
  image: project.image,
  url: project.url,
});


