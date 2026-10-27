import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    id: "full-stack-web",
    number: "01",
    title: "Full-Stack Web Engineering",
    subtitle: "From ideation to high-availability production",
    description:
      "Architecting end-to-end web applications with Next.js App Router, secure auth, robust database schemas, and clean state management.",
    deliverables: [
      "Custom Next.js & TypeScript Applications",
      "Database schema modeling with Prisma/PostgreSQL",
      "Authentication & Role-Based Access Control",
      "Production-ready deployment on Vercel or AWS",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
  },
  {
    id: "frontend-ui-ux",
    number: "02",
    title: "High-Performance Frontend & UI/UX",
    subtitle: "Pixel-perfect, fluid, and accessible interfaces",
    description:
      "Crafting tactile web interfaces packed with micro-interactions, silky smooth 60fps animations, keyboard navigation, and WCAG AA compliance.",
    deliverables: [
      "Design system development and component library",
      "Framer Motion physics and micro-interactions",
      "Lighthouse 95+ score optimization",
      "Responsive layout for mobile, tablet, and desktop",
    ],
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Radix UI", "Lighthouse"],
  },
  {
    id: "backend-api-design",
    number: "03",
    title: "API Engineering & Backend Architecture",
    subtitle: "Scalable endpoints, caching & background workers",
    description:
      "Designing type-safe RESTful and tRPC APIs, resilient webhook listeners, caching tiers with Redis, and message queue worker setups.",
    deliverables: [
      "Type-safe REST / tRPC / GraphQL endpoints",
      "Sub-millisecond Redis caching strategies",
      "Third-party integrations (Stripe, GitHub, Resend)",
      "Automated testing with Jest & Supertest",
    ],
    technologies: ["Node.js", "Express", "tRPC", "Redis", "Docker"],
  },
  {
    id: "cloud-devops",
    number: "04",
    title: "Cloud Deployment & DevOps Automation",
    subtitle: "Continuous delivery and automated pipelines",
    description:
      "Building seamless CI/CD delivery pipelines, Docker containerized services, preview branches, and automated health monitoring.",
    deliverables: [
      "GitHub Actions workflow automation",
      "Docker & multi-stage container optimization",
      "Environment variable configuration & security",
      "Serverless and Edge compute distribution",
    ],
    technologies: ["Docker", "GitHub Actions", "Vercel", "AWS", "Linux"],
  },
];

