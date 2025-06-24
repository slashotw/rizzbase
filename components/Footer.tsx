export function Footer() {
  return (
    <footer className="py-12 bg-background">
      <div className="max-w-6xl mx-4 md:mx-auto px-4">
        <div className="text-center text-sm text-muted-foreground font-serif">
          <p>Built with Next.js and Notion as CMS</p>
          <p className="mt-2">
            © 2024{" "}
            <a 
              href="https://WuSandWitch.zudo.cc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline decoration-1 underline-offset-2"
            >
              WuSandWitch
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 