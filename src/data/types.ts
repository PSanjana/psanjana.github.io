export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  imageFit?: "cover" | "contain";
  github?: string;
  demo?: string;
  featured?: boolean;
  award?: string;
  metrics?: ProjectMetric[];
}

export interface ExperienceRole {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  achievements: string[];
  technologies?: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}
