import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Github } from "lucide-react";
import { PostsManager } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export default async function Home() {
  // Get recent posts
  const recentPosts = PostsManager.getAllPosts().slice(0, 3);

  return (
    <div>
      <Navbar />
      <section className="h-[calc(100vh-4rem)] flex items-center justify-center relative">
        <div className="max-w-6xl mx-4 md:mx-auto px-4 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 md:gap-16">
            <div className="text-center md:text-left max-w-xl">
              <h1 className="text-4xl font-serif md:text-6xl mb-4 md:mb-6">
                Buroguru
              </h1>
              <p className="text-lg font-serif md:text-xl text-muted-foreground mb-4 md:mb-6">
                Documenting blog using <strong>Notion</strong> as CMS.
              </p>
                            <Button variant="outline" className="font-serif">
                <Github className="w-4 h-4 mr-2" />
                <Link href="https://github.com" target="_blank">Deploy your own</Link>
              </Button>
            </div>
            <div className="flex justify-center md:justify-end -mt-8 md:mt-0">
              <Image className="rounded-full" src="/images/Buroguru.png" alt="Owen Wu" width={500} height={500} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="animate-bounce">
            <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-6xl mx-4 md:mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif">Recent Posts</h2>
          <Link 
            href="/posts" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-serif"
          >
            View all posts
          </Link>
        </div>

        <div className="space-y-0">
          {recentPosts.map((post, index) => (
            <Link 
              key={post.id} 
              href={`/posts/${post.id}`}
              className="block group"
            >
              <article className={`flex items-start gap-6 py-4 ${index !== recentPosts.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="flex-1 min-w-0">
                  <div className="flex gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs text-muted-foreground font-serif"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-serif mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-serif mb-2 line-clamp-2">
                    {post.description}
                  </p>
                  <time className="text-xs text-muted-foreground font-serif">
                    {formatDate(post.date)}
                  </time>
                </div>
                
                {post.thumbnail && (
                  <div className="relative w-32 h-24 shrink-0">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
