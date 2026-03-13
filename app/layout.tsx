import type React from "react";
import type { Metadata } from "next";
import { GeistMono, GeistSans } from "geist/font";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Hussein Salim | Senior Technical SEO Software Developer",
  description:
    "Senior software developer focused on technical SEO, frontend architecture, web performance, and scalable product systems.",
  keywords: [
    "Hussein Salim",
    "Technical SEO Developer",
    "Senior Software Developer",
    "Frontend Architecture",
    "Next.js",
    "React",
    "Core Web Vitals",
    "Web Performance",
  ],
  authors: [{ name: "Hussein Salim" }],
  creator: "Hussein Salim",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Hussein Salim | Senior Technical SEO Software Developer",
    description:
      "Technical SEO, frontend architecture, and performance-focused product engineering.",
    siteName: "Hussein Salim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussein Salim | Senior Technical SEO Software Developer",
    description:
      "Senior software developer building performant, crawlable, scalable web products.",
    creator: "@salemshadyy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
