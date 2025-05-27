import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import CursorSpotlight from "@/components/cursor-spotlight"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// Base URL for your site - use relative URLs for local development
const isProduction = process.env.NODE_ENV === 'production';
const baseUrl = isProduction 
  ? 'https://elijah-ondiek.com' 
  : ''; // Use relative URLs in development

export const metadata: Metadata = {
  title: {
    default: "Elijah Ondiek | Software Engineer",
    template: "%s | Elijah Ondiek"
  },
  description: "Explore the personal portfolio of Elijah Ondiek, a passionate and results-driven software engineer with expertise in modern web technologies including React, Next.js, TypeScript, and Python. Focused on building high-performance, user-centric full-stack applications and scalable digital solutions.",

  keywords: [
    "Elijah Ondiek",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Python Developer",
    "Node.js",
    "Tailwind CSS",
    "Web Performance",
    "Open Source Contributor",
    "Tech Portfolio",
    "Modern Web Development",
    "Clean Code",
    "Software Architecture",
  ],
  
  authors: [{ name: "Elijah Ondiek", url: baseUrl }],
  creator: "Elijah Ondiek",
  publisher: "Elijah Ondiek",
  generator: 'Elijah Ondiek',
  applicationName: "Elijah Ondiek Portfolio",
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: baseUrl ? new URL(baseUrl) : new URL('http://localhost:3000'),
  alternates: {
    canonical: baseUrl,
  },
  
  // OpenGraph metadata
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: "Elijah Ondiek | Software Engineer",
    description: "Personal portfolio of Elijah Ondiek, a passionate software engineer specializing in modern web development, React, Next.js, and full-stack solutions.",
    siteName: "Elijah Ondiek Portfolio",
    images: [
      {
        url: '/og-image.jpg', // Use relative path for images
        width: 1200,
        height: 630,
        alt: "Elijah Ondiek - Software Engineer",
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg', // Square version for some platforms
        width: 1200,
        height: 1200,
        alt: "Elijah Ondiek - Software Engineer",
        type: 'image/jpeg',
      }
    ],
  },

  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: "Elijah Ondiek | Software Engineer",
    description: "Personal portfolio of Elijah Ondiek, a passionate software engineer specializing in web engineering.",
    creator: '@0chibo_',
    site: '@0chibo_',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Elijah Ondiek - Software Engineer",
      }
    ],
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification (add these if you have them)
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },

  // Category for the site
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Elijah Ondiek",
              "jobTitle": "Software Engineer",
              "description": "Passionate software engineer specializing in modern web engineering",
              "url": baseUrl,
              "sameAs": [
                process.env.NEXT_PUBLIC_GITHUB_URL,
                process.env.NEXT_PUBLIC_LINKEDIN_URL,
                process.env.NEXT_PUBLIC_TWITTER_URL,
              ].filter(Boolean),
              "email": process.env.NEXT_PUBLIC_EMAIL,
              "knowsAbout": [
                "JavaScript",
                "TypeScript", 
                "React",
                "Next.js",
                "Web Development",
                "Software Engineering"
              ],
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <CursorSpotlight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}