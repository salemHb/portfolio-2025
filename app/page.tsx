import Navigation from "@/components/navigation";
import ScatterPage from "@/components/scatter-page";

import { getLatestPosts } from "@/lib/blog"; // this can use fs because it's server-side

export default function Home() {
  const latestPosts = getLatestPosts(3); // runs on server

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <ScatterPage posts={latestPosts} />
    </main>
  );
}
