import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://palpatel.dev"),
  title: {
    default: `${profileData.name} | ${profileData.headlineRole}`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.bio,
  keywords: [
    "Pal Patel",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Ahmedabad Developer",
    "India",
    "Vercel",
  ],
  authors: [{ name: profileData.name, url: "https://palpatel.dev" }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://palpatel.dev",
    title: `${profileData.name} | ${profileData.headlineRole}`,
    description: profileData.bio,
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: "/profile-card.svg",
        width: 1200,
        height: 630,
        alt: `${profileData.name} - ${profileData.headlineRole}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | ${profileData.headlineRole}`,
    description: profileData.bio,
    creator: "@palpatel_dev",
    images: ["/profile-card.svg"],
  },
  alternates: {
    canonical: "https://palpatel.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    url: "https://palpatel.dev",
    image: "https://palpatel.dev/profile-card.svg",
    jobTitle: profileData.headlineRole,
    description: profileData.bio,
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      name: profileData.college,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: profileData.city,
      addressCountry: profileData.country,
    },
    email: profileData.email,
    sameAs: [
      profileData.github,
      profileData.linkedin,
      profileData.x,
      profileData.instagram,
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#07080c] text-slate-100 font-sans antialiased selection:bg-emerald-500/30 selection:text-white">
        <ThemeProvider>
          {/* Skip to Main Content Accessibility Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[9999] px-4 py-2 bg-emerald-500 text-black font-mono text-xs font-bold rounded-md shadow-lg outline-none ring-2 ring-white"
          >
            Skip to main content
          </a>

          <Navbar />

          <main id="main-content" className="relative z-10">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

