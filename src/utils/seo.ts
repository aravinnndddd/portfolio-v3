/**
 * SEO, OpenGraph, Twitter Cards, Social Links, and JSON-LD Structured Data Utility
 * Engineered for maximum search engine indexing, rich snippets, and social card previews.
 */

interface MetaTagsConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
}

export const SITE_URL = "https://aravind-p.me";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const SOCIAL_LINKS = {
  github: "https://github.com/aravinnndddd",
  linkedin: "https://www.linkedin.com/in/aravind-p-832849331/",
  instagram: "https://instagram.com/aravinnndddd",
};

const ensureMetaTag = (
  selector: string,
  attributeName: "name" | "property",
  attributeValue: string,
) => {
  let tag = document.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attributeName, attributeValue);
    document.head.appendChild(tag);
  }
  return tag;
};

const ensureRelMeLink = (href: string) => {
  let link = document.querySelector(`link[rel="me"][href="${href}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "me");
    link.setAttribute("href", href);
    document.head.appendChild(link);
  }
};

export const updateMetaTags = (config: MetaTagsConfig) => {
  document.title = config.title;

  // Description
  const metaDescription = ensureMetaTag(
    'meta[name="description"]',
    "name",
    "description",
  );
  metaDescription.setAttribute("content", config.description);

  // Canonical URL
  const canonicalUrl = config.url || window.location.href;
  let canonicalTag = document.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;
  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute("href", canonicalUrl);

  // Social Identity rel="me" link verification
  Object.values(SOCIAL_LINKS).forEach((linkUrl) => {
    ensureRelMeLink(linkUrl);
  });

  // Keywords
  if (config.keywords && config.keywords.length > 0) {
    const metaKeywords = ensureMetaTag(
      'meta[name="keywords"]',
      "name",
      "keywords",
    );
    metaKeywords.setAttribute("content", config.keywords.join(", "));
  }

  // Open Graph
  const ogTags = [
    { property: "og:title", content: config.title },
    { property: "og:description", content: config.description },
    { property: "og:image", content: config.image || DEFAULT_OG_IMAGE },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: config.type || "website" },
    { property: "og:site_name", content: "Aravind P - Portfolio" },
    { property: "og:locale", content: "en_US" },
  ];

  ogTags.forEach(({ property, content }) => {
    const tag = ensureMetaTag(`meta[property="${property}"]`, "property", property);
    tag.setAttribute("content", content);
  });

  // Open Graph See Also (Social Profiles)
  Object.values(SOCIAL_LINKS).forEach((linkUrl) => {
    let tag = document.querySelector(`meta[property="og:see_also"][content="${linkUrl}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", "og:see_also");
      tag.setAttribute("content", linkUrl);
      document.head.appendChild(tag);
    }
  });

  // Twitter Cards
  const twitterTags = [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: config.title },
    { name: "twitter:description", content: config.description },
    { name: "twitter:image", content: config.image || DEFAULT_OG_IMAGE },
    { name: "twitter:site", content: "@aravinnndddd" },
    { name: "twitter:creator", content: "@aravinnndddd" },
  ];

  twitterTags.forEach(({ name, content }) => {
    const tag = ensureMetaTag(`meta[name="${name}"]`, "name", name);
    tag.setAttribute("content", content);
  });
};

/**
 * Add or update JSON-LD structured data script
 */
export const addStructuredData = (data: object, id = "structured-data") => {
  const existingScript = document.getElementById(id);
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Person Schema for Google Knowledge Graph & Search
 */
export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Aravind P",
  alternateName: ["aravinnndddd", "Aravind P Developer"],
  description:
    "Web Developer and GDG On Campus Lead (2025-2026) at College of Engineering Perumon, building high-performance React, Next.js, and TypeScript web applications.",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  sameAs: Object.values(SOCIAL_LINKS),
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Frontend Architecture",
    "Web Performance Optimization",
    "UI/UX Design",
    "JavaScript",
    "Python",
    "GDG On Campus Organizing",
  ],
  affiliation: [
    {
      "@type": "CollegeOrUniversity",
      name: "College of Engineering Perumon",
    },
    {
      "@type": "Organization",
      name: "Google Developer Groups On Campus (GDGoC) CEP",
    },
    {
      "@type": "Organization",
      name: "IEEE Student Branch CEP",
    },
    {
      "@type": "Organization",
      name: "TinkerHub CEP",
    },
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "GDG On Campus (Google Developer Groups On Campus)",
      startDate: "2025",
      endDate: "2026",
      roleName: "Organizer / Campus Lead",
    },
    {
      "@type": "Organization",
      name: "IEEE Student Branch CEP",
      startDate: "2026",
      roleName: "Technical Coordinator",
    },
    {
      "@type": "Organization",
      name: "TinkerHub CEP",
      startDate: "2026",
      roleName: "Volunteer",
    },
  ],
});

/**
 * WebSite Schema for site indexing
 */
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Aravind P | Frontend Developer & GDG On Campus Lead",
  url: SITE_URL,
  description:
    "Official portfolio of Aravind P, Web Developer & GDG On Campus Lead (2025-2026) at College of Engineering Perumon.",
  publisher: {
    "@id": `${SITE_URL}/#person`,
  },
});

/**
 * ItemList Schema for showcased projects (Google Rich Snippet Carousel)
 */
export const getItemListSchema = (projects: Array<{ title: string; description: string; image: string; liveUrl?: string; githubUrl?: string }>) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured Software Projects by Aravind P",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.description,
      image: project.image.startsWith("http") ? project.image : `${SITE_URL}${project.image}`,
      url: project.liveUrl || project.githubUrl || `${SITE_URL}/#works`,
      applicationCategory: "WebApplication",
      operatingSystem: "All",
      author: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  })),
});

/**
 * BreadcrumbList Schema for navigation structure
 */
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
  })),
});