export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  repoUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: 'Remote' | 'On-site' | 'Hybrid';
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  logoUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}