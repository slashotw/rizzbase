import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProfileCard } from '@/components/ProfileCard'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center max-w-4xl mx-4 md:mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8 font-serif">
            The post you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link 
            href="/posts" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-serif"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Posts
          </Link>
        </div>
      </div>
      <Footer />
      <ProfileCard />
    </div>
  )
} 