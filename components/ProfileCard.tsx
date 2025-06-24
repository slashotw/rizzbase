'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Minimize2, Maximize2, Mail, Github, Globe, FileText } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

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
                  <AvatarImage src="/images/Buroguru.png" alt="Buroguru" />
                  <AvatarFallback>BG</AvatarFallback>
                </Avatar>
                <h3 className="font-serif text-xl font-semibold mt-4">Buroguru</h3>
                <p className="text-sm text-muted-foreground font-serif mt-1">Notion-powered Blog Framework</p>
              </div>

              {/* Bio */}
              <p className="text-sm text-center text-muted-foreground font-serif mb-6">
                A modern blog framework that transforms <br />
                your Notion workspace into a beautiful blog. <br />
                Automatically syncs content, handles images!
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <Link 
                  href="mailto:contact@buroguru.dev"
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                  title="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://github.com/buroguru/buroguru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                  title="GitHub Repository"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://notion.so"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                  title="Notion"
                >
                  <Globe className="h-5 w-5" />
                </Link>
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
              <AvatarImage src="/images/Buroguru.png" alt="Buroguru" />
              <AvatarFallback>BG</AvatarFallback>
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