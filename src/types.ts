export interface Project {
  id: string;
  number: string;

  title: string;
  image: string;
  editorialImage?: string;
  tagline?: string;
  tags: string[];
  description: string;

  year: string;

  client?: string;
  liveUrl?: string;
  githubUrl?: string;
  articleUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage?: string;
  publishedAt: string;
  readTime: string;
  url: string;
  tags: string[];
  platform: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: { name: string; }[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface JourneyItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  category?: string;
}
