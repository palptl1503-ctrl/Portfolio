import { Profile } from "@/types";

export const profileData: Profile = {
  name: "Pal Patel",
  initials: "PP",
  headlineRole: "Full-Stack Developer",
  subRole: "Software Engineer & System Architect",
  college: "Gujarat Technological University",
  education: "B.Tech in Computer Engineering (2022 - 2026)",
  location: "Ahmedabad, Gujarat, India",
  city: "Ahmedabad",
  country: "India",
  timezone: "Asia/Kolkata",
  timezoneAbbr: "IST (UTC+5:30)",
  availability: "Available for freelance, internships & full-time roles",
  availableForHire: true,
  yearsOfExperience: "3+ Years",
  stats: [
    { label: "Projects Completed", value: "15+" },
    { label: "Production Uptime", value: "99.9%" },
    { label: "Open Source PRs", value: "40+" },
    { label: "Clean Codebase", value: "100k+" },
  ],
  email: "palpatel.dev@gmail.com",
  github: "https://github.com/palptl1503-ctrl",
  linkedin: "https://www.linkedin.com/in/pal-patel-3a6712447",
  x: "https://x.com/palpatel_dev",
  instagram: "https://www.instagram.com/pall_patel_1513",
  resumeUrl: "/resume.pdf",
  bio: "Full-Stack Developer focused on building high-performance web systems and resilient cloud backends from code to deployment. Obsessed with clean code, modern typography, and fluid micro-interactions.",
  fullBio: [
    "I am Pal Patel, a passionate Full-Stack Developer and computer engineering scholar based in Ahmedabad, India. My journey in software engineering revolves around turning complex architectural challenges into elegant, intuitive digital experiences.",
    "Over the past 3+ years, I have architected and deployed modern web platforms, distributed APIs, and scalable cloud solutions. I believe high craft in software means harmonizing sub-millisecond execution speeds with frictionless user experiences.",
    "When I'm not writing TypeScript or tuning database queries, you can find me contributing to open source, exploring system design patterns, or mentoring junior developers in the university community.",
  ],
  focusAreas: [
    {
      title: "Scalable Full-Stack Systems",
      description:
        "Building resilient end-to-end architectures with Next.js App Router, Node.js/Go microservices, and high-concurrency database backends.",
      iconName: "Cpu",
    },
    {
      title: "Interaction & Visual Design",
      description:
        "Translating complex data workflows into fluid, accessible, and responsive user interfaces with Framer Motion, Tailwind, and strict WCAG AA adherence.",
      iconName: "Sparkles",
    },
    {
      title: "Cloud & Production Delivery",
      description:
        "Automated CI/CD deployment pipelines, containerization with Docker, edge serverless computing, and robust observability from day one.",
      iconName: "Cloud",
    },
  ],
  idCard: {
    idNumber: "PP-2026-X9",
    specialization: "Full-Stack & Cloud Architecture",
    issuedYear: "2026",
    status: "ACTIVE // AVAILABLE",
  },
};

