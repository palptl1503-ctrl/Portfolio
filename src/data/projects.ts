import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "nexus-ai-orchestrator",
    title: "Nexus AI Orchestrator",
    tagline: "Visual canvas for chaining multi-model LLM workflows with sub-second streaming.",
    category: "Full-Stack",
    year: "2026",
    role: "Lead Full-Stack Architect",
    featured: true,
    order: 1,
    overview:
      "Nexus is an enterprise-grade AI pipeline orchestrator that allows engineering teams to construct, benchmark, and deploy multi-model LLM workflows visually. Built on Next.js 15 and WebSocket streaming, Nexus handles dynamic branching, token accounting, and fallback providers with zero vendor lock-in.",
    problem:
      "Modern AI product teams spend hundreds of hours maintaining brittle glue code between OpenAI, Anthropic, and local models without standardized observability, retry policies, or visual debugging tools.",
    solution:
      "Engineered an infinite node-based workflow builder with state-preserving execution trees, optimistic UI updates, and an edge-distributed proxy that dynamically reroutes requests to the fastest available LLM endpoint.",
    keyFeatures: [
      "Infinite nodal drag-and-drop workflow canvas with custom bezier curve routing",
      "Real-time token streaming with server-sent events (SSE) and WebSocket recovery",
      "Dynamic cost & latency telemetry with sub-millisecond aggregation",
      "Zero-downtime webhook execution engine with automatic backoff retry policies",
      "Role-based workspace collaboration with instant team sync",
    ],
    challenges: [
      {
        title: "Node Canvas Performance at Scale",
        description:
          "Rendering 200+ connected nodes caused layout thrashing in standard React state. Migrated the canvas engine to an off-screen coordinate space with virtualization and memoized connection paths, achieving a steady 60 FPS.",
      },
      {
        title: "Backpressure in Concurrent LLM Streams",
        description:
          "Multiple users streaming simultaneously threatened to exhaust backend worker sockets. Implemented a Redis-backed token bucket rate limiter paired with edge stream multiplexing.",
      },
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "PostgreSQL", "Redis", "Prisma"],
    metrics: [
      { label: "Stream Latency", value: "< 45ms" },
      { label: "Active Workflows", value: "1,200+" },
      { label: "Render Frame Rate", value: "60 FPS" },
    ],
    githubUrl: "https://github.com/palptl1503-ctrl/nexus-ai-orchestrator",
    liveUrl: "https://nexus-ai-orchestrator.vercel.app",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "pulsecloud-metrics-engine",
    title: "PulseCloud Metrics Engine",
    tagline: "High-throughput serverless telemetry dashboard with sub-second alert dispatching.",
    category: "Cloud / DevOps",
    year: "2025",
    role: "Backend & Systems Engineer",
    featured: true,
    order: 2,
    overview:
      "PulseCloud is an ultra-fast telemetry and APM monitoring dashboard designed for microservice ecosystems. It processes millions of time-series data points per minute, producing instant anomaly detection graphs and multi-channel incident alerts.",
    problem:
      "Traditional cloud observability tools are prohibitively expensive for growing startups and introduce heavy client-side bundle bloat, leading to sluggish dashboard rendering during active production incidents.",
    solution:
      "Developed a columnar time-series backend paired with a lightweight Next.js client that streams compressed metric deltas over WebSockets, minimizing bandwidth by 74% and rendering live charts instantly.",
    keyFeatures: [
      "Live time-series chart rendering with WebGL-accelerated canvas layers",
      "Sub-second incident alerting across Slack, Discord, and PagerDuty webhooks",
      "Anomaly detection engine calculating moving averages and percentile spikes",
      "Distributed tracing collector with OpenTelemetry standard ingestion",
      "Self-hosted and cloud-ready Docker deployment manifests",
    ],
    challenges: [
      {
        title: "High Ingestion Pressure Under Peak Traffic",
        description:
          "Burst traffic during service outages overwhelmed direct database inserts. Created an in-memory buffer queue that batches inserts every 250ms, boosting ingestion throughput by 4.8x.",
      },
      {
        title: "Interactive Time-Window Queries",
        description:
          "Querying multi-gigabyte log tables over custom date ranges caused query timeouts. Implemented partitioned hyper-tables and pre-aggregated rollups for 1m, 5m, and 1h intervals.",
      },
    ],
    techStack: ["React", "TypeScript", "Node.js", "Docker", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    metrics: [
      { label: "Events Ingested / Sec", value: "85,000" },
      { label: "Alert Dispatch Speed", value: "320ms" },
      { label: "Network Bandwidth Saved", value: "74%" },
    ],
    githubUrl: "https://github.com/palptl1503-ctrl/pulsecloud-metrics",
    liveUrl: "https://pulsecloud-metrics.vercel.app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "hyperstore-commerce-engine",
    title: "HyperStore Commerce Engine",
    tagline: "Headless e-commerce platform with edge geolocation, instant cart sync, and Stripe checkout.",
    category: "Full-Stack",
    year: "2025",
    role: "Full-Stack Developer",
    featured: true,
    order: 3,
    overview:
      "HyperStore is a next-generation headless commerce platform built for high-conversion retail brands. Utilizing Next.js Server Components and edge caching, it achieves 100/100 Core Web Vitals with instantaneous page transitions and localized catalog pricing.",
    problem:
      "Legacy monolithic commerce engines suffer from high time-to-first-byte (TTFB), brittle checkout checkout pipelines, and awkward localized currency conversion.",
    solution:
      "Architected a modular Jamstack e-commerce system with edge-computed geo-pricing, optimistic cart mutation states, and PCI-compliant Stripe Payment Element integration.",
    keyFeatures: [
      "Instantaneous catalog navigation powered by Incremental Static Regeneration (ISR)",
      "Multi-currency conversion with automatic geo-IP detection at the edge",
      "Optimistic cart drawer with instant offline persistence and syncing",
      "Integrated Stripe webhook reconciliation for zero lost orders",
      "Full search filtering with faceted attributes and instant debounce",
    ],
    challenges: [
      {
        title: "Inventory Race Conditions During Flash Sales",
        description:
          "Simultaneous checkouts caused inventory over-allocation. Solved using atomic database transactions with row-level locks and Redis inventory reservations with a 10-minute TTL.",
      },
      {
        title: "Core Web Vitals On Image-Heavy Catalogs",
        description:
          "High-resolution product imagery impacted Largest Contentful Paint (LCP). Implemented dynamic WebP/AVIF generation and blur-up placeholder hashes.",
      },
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe API"],
    metrics: [
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Cart Abandonment Drop", value: "-18%" },
      { label: "Average Checkout Time", value: "24s" },
    ],
    githubUrl: "https://github.com/palptl1503-ctrl/hyperstore-commerce",
    liveUrl: "https://hyperstore-commerce.vercel.app",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "kubepilot-cli-dashboard",
    title: "KubePilot CLI & Dashboard",
    tagline: "Lightweight multi-cluster Kubernetes visualizer and operational telemetry monitor.",
    category: "Backend",
    year: "2025",
    role: "Systems & DevOps Engineer",
    featured: true,
    order: 4,
    overview:
      "KubePilot bridges the gap between terminal CLI speed and visual cluster monitoring. It enables developers to inspect pod health, stream container logs, forward ports, and inspect YAML manifests across multiple staging and production clusters from a single unified interface.",
    problem:
      "Official Kubernetes dashboards are resource-heavy to deploy in-cluster and complex for non-specialist engineers to navigate during emergency rollbacks.",
    solution:
      "Created a standalone, zero-cluster-agent desktop and web visualizer that communicates directly with standard kubeconfig credentials over client-side HTTPS and local socket proxies.",
    keyFeatures: [
      "Instant cluster switching with automatic kubeconfig parsing",
      "Live multi-pod log multiplexing with regex filtering and color syntax highlighting",
      "One-click pod port-forwarding and service endpoint discovery",
      "Interactive workload topology visualization showing pods, replica sets, and ingresses",
      "YAML manifest diff inspector before executing deployments",
    ],
    challenges: [
      {
        title: "Multiplexing Massive Log Streams",
        description:
          "Streaming stdout from 50+ pods concurrently caused browser tab memory leaks. Engineered a virtualized circular buffer in WebAssembly to keep RAM capped below 80MB.",
      },
      {
        title: "Secure Kubeconfig Credential Handling",
        description:
          "Ensured credentials never leave the user's local machine by building an isolated local proxy bridge using Go and WebSockets.",
      },
    ],
    techStack: ["TypeScript", "React", "Go", "Docker", "Tailwind CSS", "WebSockets"],
    metrics: [
      { label: "Memory Footprint", value: "< 75MB" },
      { label: "Startup Time", value: "180ms" },
      { label: "Clusters Supported", value: "Unlimited" },
    ],
    githubUrl: "https://github.com/palptl1503-ctrl/kubepilot",
    liveUrl: "https://kubepilot.dev",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "aura-ui-design-system",
    title: "Aura UI Design System",
    tagline: "Accessible, component-driven design system with 40+ primitives and theme customization.",
    category: "Frontend",
    year: "2024",
    role: "Frontend Architect",
    featured: true,
    order: 5,
    overview:
      "Aura UI is an open-source, production-ready React component library crafted for developers building modern SaaS interfaces. It provides unstyled, headless primitives paired with a customizable Tailwind CSS styling layer and built-in keyboard navigation.",
    problem:
      "Many UI component libraries are either too rigid to re-theme or bloated with excessive CSS runtimes that degrade page load metrics.",
    solution:
      "Built a composable component system based on Radix UI primitives and Tailwind CSS with first-class TypeScript typing, full ARIA compliance, and zero CSS-in-JS runtime overhead.",
    keyFeatures: [
      "40+ accessible UI components including dialogs, tooltips, data tables, and comboboxes",
      "Strict WAI-ARIA and WCAG 2.1 AA keyboard navigation built into every primitive",
      "Dark mode and multi-theme tokens powered by CSS variables",
      "Storybook documentation with live interactive props playground",
      "Zero runtime CSS footprint with full tree-shaking support",
    ],
    challenges: [
      {
        title: "Keyboard Focus Management in Nested Modals",
        description:
          "Complex nested popovers and dialogs lost focus trapping when closed via escape keys. Developed a resilient focus restoration stack using React refs and synthetic event traps.",
      },
      {
        title: "Tree-Shaking and Bundle Size Optimization",
        description:
          "Consumers were importing unused icons and helper functions. Restructured the package into granular ES modules, dropping average consumer bundle impact to 4.2kb.",
      },
    ],
    techStack: ["TypeScript", "React", "Tailwind CSS", "Framer Motion", "Storybook", "Radix UI"],
    metrics: [
      { label: "NPM Downloads", value: "14,000+" },
      { label: "Accessibility Score", value: "100%" },
      { label: "Gzipped Bundle Size", value: "4.2 KB" },
    ],
    githubUrl: "https://github.com/palptl1503-ctrl/aura-ui",
    liveUrl: "https://aura-ui.vercel.app",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "devsync-collaborative-canvas",
    title: "DevSync Collaborative Canvas",
    tagline: "Real-time collaborative workspace with CRDT synchronization and infinite canvas whiteboard.",
    category: "Full-Stack",
    year: "2024",
    role: "Full-Stack Developer",
    featured: true,
    order: 6,
    overview:
      "DevSync is a high-speed collaborative whiteboard and diagramming workspace designed for remote engineering teams. Featuring Conflict-Free Replicated Data Types (CRDTs), developers can brainstorm architecture diagrams, embed code snippets, and review PR flows together in real time.",
    problem:
      "Collaborative drawing tools often suffer from desynchronization conflicts when multiple engineers sketch architecture diagrams at the exact same millisecond.",
    solution:
      "Built a decentralized CRDT document engine using Yjs and WebRTC peer channels with WebSocket fallback, guaranteeing conflict-free state resolution even across intermittent network disconnections.",
    keyFeatures: [
      "Infinite 2D pan & zoom canvas with sub-pixel vector rendering",
      "Conflict-free real-time multi-cursor awareness and live presence avatars",
      "Integrated markdown cards, UML shapes, and syntax-highlighted code blocks",
      "Offline-first sync: continue drafting offline and automatically merge upon reconnection",
      "One-click high-resolution PNG, SVG, and JSON export",
    ],
    challenges: [
      {
        title: "Canvas Rendering Under 10,000+ Vector Elements",
        description:
          "DOM-based nodes became laggy with large architecture diagrams. Converted the rendering pipeline to an HTML5 Canvas viewport with quadtree spatial partitioning for frustum culling.",
      },
      {
        title: "Peer-to-Peer NAT Traversal",
        description:
          "Corporate firewalls blocked direct WebRTC data channels. Configured TURN/STUN relay servers with automated fallback to secure WebSockets without data loss.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Yjs / CRDT", "WebRTC", "Canvas API"],
    metrics: [
      { label: "Sync Latency", value: "< 25ms" },
      { label: "Concurrent Peers", value: "50+ / Room" },
      { label: "Offline Merge Success", value: "100%" },
    ],
    githubUrl: "https://github.com/palptl1503-ctrl/devsync-canvas",
    liveUrl: "https://devsync-canvas.vercel.app",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
  },
];

