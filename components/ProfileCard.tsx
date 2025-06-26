'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Minimize2, Maximize2, Mail, Github, Globe, FileText } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { author, getSocialLinks } from '@/lib/config'

export function ProfileCard() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={cn(
        "relative transition-all duration-300 ease-in-out",
        isCollapsed ? "w-12 h-12" : "w-80"
      )}>
        {/* Expanded Card */}
        {!isCollapsed && (
          <div className="rounded-lg border bg-background/80 backdrop-blur shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
            {/* Header with Minimize Button */}
            <div className="p-4 flex justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-accent"
                onClick={() => setIsCollapsed(true)}
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Profile Content */}
            <div className="px-6 pb-6">
              {/* Avatar */}
              <div className="flex flex-col items-center -mt-4 mb-4">
                <Avatar className="h-24 w-24 ring-4 ring-background">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <h3 className="font-serif text-xl font-semibold mt-4">{author.name}</h3>
                <p className="text-sm text-muted-foreground font-serif mt-1">Blog Author</p>
              </div>

              {/* Bio */}
              <p className="text-sm text-center text-muted-foreground font-serif mb-6">
                {author.bio}
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center gap-4">
                {author.email && (
                  <Link 
                    href={`mailto:${author.email}`}
                    className="p-2 rounded-full hover:bg-accent transition-colors"
                    title="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                )}
                {getSocialLinks().map(({ platform, url }) => (
                  <Link 
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-accent transition-colors"
                    title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  >
                    {platform === 'github' && <Github className="h-5 w-5" />}
                    {platform === 'website' && <Globe className="h-5 w-5" />}
                    {platform === 'notion' && <FileText className="h-5 w-5" />}
                    {!['github', 'website', 'notion'].includes(platform) && <Globe className="h-5 w-5" />}
                  </Link>
                ))}
                <Link 
                  href="/posts"
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                  title="View Posts"
                >
                  <FileText className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Collapsed State (Avatar with Expand Icon) */}
        {isCollapsed && (
          <div
            className="cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => setIsCollapsed(false)}
          >
            <Avatar className="h-12 w-12">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              {/* Expand Icon Overlay */}
              <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
                <Maximize2 className="h-5 w-5 text-white" />
              </div>
            </Avatar>
          </div>
        )}
      </div>
    </div>
  )
} 