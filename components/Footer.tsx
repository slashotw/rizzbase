import { footer, shouldShowBuiltWith } from '@/lib/config'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 bg-background">
      <div className="max-w-6xl mx-4 md:mx-auto px-4">
        <div className="text-center text-sm text-muted-foreground font-serif">
          {shouldShowBuiltWith() && (
            <p>Built with Next.js and Notion as CMS</p>
          )}
          <p className={shouldShowBuiltWith() ? "mt-2" : ""}>
            © {currentYear}{" "}
            {footer.text && (
              footer.links && footer.links.length > 0 ? (
                <a 
                  href={footer.links[0].href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors underline decoration-1 underline-offset-2"
                >
                  {footer.text}
                </a>
              ) : (
                <span>{footer.text}</span>
              )
            )}
            . All rights reserved.
          </p>
          {shouldShowBuiltWith() && (
            <p className="mt-2">
              <a 
                href="https://github.com/WuSandWitch/Buroguru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline decoration-1 underline-offset-2"
              >
                Built with Buroguru
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  )
} 