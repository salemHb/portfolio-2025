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
    description: "Explore the work of Elijah Ondiek, a passionate software engineer specializing in scalable, high-performance full-stack applications built with React, Next.js, TypeScript, and Python. Delivering user-centric digital solutions with clean code and modern architecture.",
    
    keywords: [
      "Elijah Ondiek",
      "Software Engineer",
      "Web Engineer",
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "React Developer",
      "Next.js Developer",
      "JavaScript Developer",
      "TypeScript Developer",
      "Python Developer",
      "Node.js Developer",
      "Tailwind CSS",
      "Web Performance Optimization",
      "Open Source Contributor",
      "Modern Software Development",
      "Web Applications",
      "Clean Code Architecture",
      "Digital Solutions",
      "Kenya Software Engineer",
      "East Africa Developer",
      "Scalable Web Apps"
    ],
    
    authors: [{ name: "Elijah Ondiek", url: baseUrl }],
    creator: "Elijah Ondiek",
    publisher: "Elijah Ondiek",
    generator: 'Next.js',
    applicationName: "Elijah Ondiek - Software Engineer",
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
      description: "Discover Elijah Ondiek, a dedicated software engineer crafting innovative full-stack web solutions with React, Next.js, and Python.",
      siteName: "Elijah Ondiek - Software Engineer",
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: "Elijah Ondiek - Professional Software Engineer",  
          type: 'image/jpeg',
        },
        {
          url: '/og-image-square.jpg',
          width: 1200,
          height: 1200,
          alt: "Elijah Ondiek - Software & Web Engineer",
          type: 'image/jpeg',
        }
      ],
    },
  
    // Twitter metadata
    twitter: {
      card: 'summary_large_image',
      title: "Elijah Ondiek | Software Engineer",
      description: "Professional software engineer specializing in modern web technologies, scalable full-stack solutions, and clean architecture.",
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
  };
  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Comprehensive Favicon Configuration */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        
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