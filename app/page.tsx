import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BlogSection from "@/components/blog-section";
import { getLatestPosts } from "@/lib/blog";
import { BlogPost } from "@/lib/blog";

export default function Home() {
  const latestPosts: BlogPost[] = getLatestPosts(3);

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
      <BlogSection posts={latestPosts} />
      <Contact />
      <Footer />
    </main>
  );
}
