import type { Metadata } from "next";
import BlogEditor from "./post-editor";
export const metadata: Metadata = { title: "Blog editor | Hussein Salim", robots: { index: false, follow: false } };
export default function AdminPage() { return <BlogEditor />; }
