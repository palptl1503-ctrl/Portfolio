export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "Full-Stack" | "Frontend" | "Backend" | "Cloud / DevOps" | "AI & Tools";
  year: string;
  role: string;
  featured: boolean;
  order: number;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  challenges: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  gallery?: string[];
}

export interface SkillCategory {
  id: string;
  number: string;
  name: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface Profile {
  name: string;
  initials: string;
  headlineRole: string;
  subRole: string;
  college: string;
  education: string;
  location: string;
  city: string;
  country: string;
  timezone: string;
  timezoneAbbr: string;
  availability: string;
  availableForHire: boolean;
  yearsOfExperience: string;
  stats: {
    label: string;
    value: string;
  }[];
  email: string;
  github: string;
  linkedin: string;
  x: string;
  instagram: string;
  resumeUrl: string;
  bio: string;
  fullBio: string[];
  focusAreas: {
    title: string;
    description: string;
    iconName: string;
  }[];
  idCard: {
    idNumber: string;
    specialization: string;
    issuedYear: string;
    status: string;
  };
}

