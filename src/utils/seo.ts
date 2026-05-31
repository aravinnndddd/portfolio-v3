/**
 * SEO and Meta Tags Utility
 * Dynamically update page title, description, canonical, and OG tags.
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

export const updateMetaTags = (config: MetaTagsConfig) => {
  document.title = config.title;

  const metaDescription = ensureMetaTag(
    'meta[name="description"]',
    "name",
    "description",
  );
  metaDescription.setAttribute("content", config.description);

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

  if (config.keywords && config.keywords.length > 0) {
    const metaKeywords = ensureMetaTag(
      'meta[name="keywords"]',
      "name",
      "keywords",
    );
    metaKeywords.setAttribute("content", config.keywords.join(", "));
  }

  const ogTags = [
    { property: "og:title", content: config.title },
    { property: "og:description", content: config.description },
    { property: "og:image", content: config.image || DEFAULT_OG_IMAGE },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: config.type || "website" },
  ];

  ogTags.forEach(({ property, content }) => {
    const tag = ensureMetaTag(`meta[property="${property}"]`, "property", property);
    tag.setAttribute("content", content);
  });

  const twitterTags = [
    { name: "twitter:title", content: config.title },
    { name: "twitter:description", content: config.description },
    { name: "twitter:image", content: config.image || DEFAULT_OG_IMAGE },
  ];

  twitterTags.forEach(({ name, content }) => {
    const tag = ensureMetaTag(`meta[name="${name}"]`, "name", name);
    tag.setAttribute("content", content);
  });
};

/**
 * Add JSON-LD structured data
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
 * Person Schema for homepage
 */
export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aravind P",
  alternateName: "aravinnndddd",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  sameAs: [
    "https://www.linkedin.com/in/aravind-p-832849331/",
    "https://github.com/aravinnndddd",
    "https://instagram.com/aravinnndddd",
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
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.name,
  description: project.description,
  image: project.image,
  url: project.url,
});