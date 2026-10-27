# Pal Patel — Premium Developer Portfolio

A modern, high-performance developer portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with an editorial technical aesthetic, WCAG AA compliance, and ready for instant deployment on **Vercel**.

---

## 🚀 Features

- **Next.js 15 App Router Architecture**: Fast SSR, SSG with `generateStaticParams`, and Edge-ready API routes.
- **Developer Identity 3D Card**: Interactive flip card with 3D perspective transforms, verified developer credentials, and system telemetry.
- **Full Case Studies Engine**: Dynamic `/projects/[slug]` pages with problem breakdowns, engineering solutions, metrics, architecture diagrams, and GitHub/Live links.
- **5-Layer Technical Stack**: Structured breakdown across Languages, Frontend, Backend, Database/Cloud, and DevOps Tools.
- **Interactive Contact Form**: Client-side & server-side validation, error handling, and support for Resend / Nodemailer email forwarding.
- **Live Timezone Clock**: Real-time second-by-second clock for `Asia/Kolkata (IST)`.
- **Infinite Marquee & Micro-Interactions**: Smooth 60fps animations with Framer Motion.
- **Search & Category Filtering**: Instant debounce filtering across projects by name, tags, and technologies.
- **Accessibility & SEO**: Semantic HTML5, "Skip to main content" link, WCAG AA contrast, JSON-LD Person schema, dynamic OpenGraph / Twitter tags, `sitemap.ts`, and `robots.ts`.
- **Dual Visual Theme**: Dark mode default with light mode switch.

---

## 📁 Project Structure

```
├── public/                     # Static assets (profile-card.svg, resume.pdf, icons)
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # /about page
│   │   ├── contact/            # /contact page
│   │   ├── projects/           # /projects catalog
│   │   │   └── [slug]/         # Dynamic case study detail
│   │   ├── privacy/            # /privacy page
│   │   ├── terms/              # /terms page
│   │   ├── api/contact/        # /api/contact endpoint
│   │   ├── globals.css         # Tailwind & custom 3D / grid utilities
│   │   ├── layout.tsx          # Root layout with SEO & JSON-LD
│   │   ├── page.tsx            # Home page
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   └── sitemap.ts          # Dynamic sitemap.xml
│   ├── components/             # Reusable UI components
│   │   ├── home/               # Home sections (Hero, IdentityCard, About, TechStack, etc.)
│   │   ├── navbar.tsx          # Sticky navigation with status badge
│   │   ├── footer.tsx          # Footer with live IST clock & numbered links
│   │   └── theme-provider.tsx  # Theme context provider
│   ├── data/                   # Typed centralized data
│   │   ├── profile.ts          # Personal info, bio, stats & social links
│   │   ├── projects.ts         # Case study projects
│   │   ├── skills.ts           # 5-layer tech stack
│   │   └── services.ts         # 4 capability service cards
│   ├── lib/
│   │   └── utils.ts            # Formatting & class merging helpers
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 🛠️ Local Development

### 1. Prerequisites
- Node.js 18.18+ or 20+ installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for Production
```bash
npm run build
```

---

## 🌐 Deploy to Vercel

The portfolio is pre-configured for zero-config deployment on [Vercel](https://vercel.com):

### Option A: Via GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Pal Patel Portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Click **"Import Project"** and select your repository.
4. Framework Preset will auto-detect **Next.js**.
5. (Optional) Add Environment Variables:
   - `RESEND_API_KEY`: Your Resend API key to receive emails from the contact form.
   - `CONTACT_EMAIL`: Email destination (`palpatel.dev@gmail.com`).
6. Click **Deploy**. Your portfolio will be live in seconds with global edge CDN caching!

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## ⚙️ Customization

All personal information, links, and text are isolated in single data files:
- **Profile & Bio**: Edit `src/data/profile.ts`
- **Projects & Case Studies**: Edit `src/data/projects.ts`
- **Technical Skills**: Edit `src/data/skills.ts`
- **Services & Offerings**: Edit `src/data/services.ts`
- **Resume**: Replace `public/resume.pdf` with your updated resume file.

---

## 📄 License
© 2026 Pal Patel. Built with Next.js and Tailwind CSS.

