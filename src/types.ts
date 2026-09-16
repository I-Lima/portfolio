export type Language = 'pt' | 'en';

export type ProjectCategory = 'all' | 'mobile' | 'web' | 'backend';

export interface Project {
  id: string;
  title: string;
  category: 'mobile' | 'web' | 'backend';
  subtitle: { pt: string; en: string };
  description: { pt: string; en: string };
  longDescription: { pt: string; en: string };
  keyHighlights: { pt: string[]; en: string[] };
  architectureNotes?: { pt: string; en: string };
  tags: string[];
  role: { pt: string; en: string };
  status: { pt: string; en: string };
  badge?: string;
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  accentColor: string;
  iconName: string;
}

export interface Experience {
  id: string;
  company: string;
  role: { pt: string; en: string };
  period: { pt: string; en: string };
  location: string;
  type: string;
  description: { pt: string; en: string };
  highlights: { pt: string[]; en: string[] };
  technologies: string[];
  projects?: {
    name: string;
    period?: string;
    details: { pt: string[]; en: string[] };
    techs: string[];
  }[];
}

export interface Education {
  institution: string;
  degree: { pt: string; en: string };
  period: string;
  details?: { pt: string; en: string };
}

export interface Certification {
  title: string;
  issuer: string;
  code: string;
  description: { pt: string; en: string };
  skillsCovered: string[];
  link?: string;
}

export interface SkillCategory {
  category: { pt: string; en: string };
  icon: string;
  items: {
    name: string;
    level?: string;
    highlight?: boolean;
    years?: string;
  }[];
}

export interface LanguageSkill {
  name: { pt: string; en: string };
  level: { pt: string; en: string };
  flag: string;
  flagImage?: string;
}
