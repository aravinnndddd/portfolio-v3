export interface Project {
  id: string;
  number: string;

  title: string;
  image: string;
  tags: string[];
  description: string;
  client: string;
  year: string;

  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: { name: string;}[];
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

}
