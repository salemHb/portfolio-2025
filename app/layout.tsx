import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hussein Salim | Fullstack Software Developer",
  description:
    "Software developer crafting digital experiences with precision and purpose. Specializing in full-stack development and modern web technologies.",
  keywords: [
    "Hussein Salim",
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Hussein Salim" }],
  creator: "Hussein Salim",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Hussein Salim | Senior Software Developer",
    description:
      "Software developer crafting digital experiences with precision and purpose.",
    siteName: "Hussein Salim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussein Salim | Software Developer",
    description:
      "Senior Software Developer crafting digital experiences with precision and purpose.",
    creator: "@salemshadyy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
