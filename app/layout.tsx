import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";

export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL), alternates: { canonical: "/" } } : {}),
  title: "Hussein Salim | Senior Software & Infrastructure Engineer",
  description: "Hussein Salim builds software and operates infrastructure, with experience in backend engineering, cloud, automation, and security-minded operations.",
  authors: [{ name: "Hussein Salim" }],
  openGraph: {
    type: "website",
    title: "Hussein Salim | Senior Software & Infrastructure Engineer",
    description: "Software, infrastructure, automation, and security-minded operations.",
    siteName: "Hussein Salim",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={GeistSans.variable}>{children}</body></html>;
}
