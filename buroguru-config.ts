export interface BuroguruConfig {
  // Site Settings
  site: {
    name: string
    description: string
    url: string
    favicon?: string
  }
  
  // Author Settings
  author: {
    name: string
    bio: string
    avatar: string
    email?: string
    social: {
      github?: string
      twitter?: string
      linkedin?: string
      notion?: string
      website?: string
    }
  }
  
  // Appearance
  appearance: {
    // Primary font family
    fontFamily: 'serif' | 'sans' | 'mono'
    // Custom font from Google Fonts
    customFont?: string
    // Primary color scheme
    primaryColor: string
    // Secondary color
    secondaryColor?: string
    // Logo/Brand image
    logo?: string
  }
  
  // Blog Settings
  blog: {
    // Posts per page
    postsPerPage: number
    // Show excerpt on post list
    showExcerpt: boolean
    // Show tags
    showTags: boolean
    // Default thumbnail for posts without image
    defaultThumbnail?: string
  }
  

  
  // Homepage
  homepage: {
    // Hero section
    hero: {
      title: string
      description: string
      primaryButton: {
        text: string
        href: string
      }
      secondaryButton: {
        text: string
        href: string
      }
    }
    // Recent posts section
    recentPosts: {
      title: string
      viewAllText: string
      count: number
    }
  }
  
  // Footer
  footer: {
    // Custom footer text
    text?: string
    // Show "Built with Buroguru" link
    showBuiltWith: boolean
    // Additional footer links
    links?: Array<{
      name: string
      href: string
    }>
  }
}

// Default configuration
export const defaultConfig: BuroguruConfig = {
  site: {
    name: "Rizzbase",
    description: "A database for Rizz",
    url: "https://rizzbase.vercel.app"
  },
  
  author: {
    name: "slasho",
    bio: "welcome to my rizzbase...",
    avatar: "/images/avatar.png",
    social: {
      github: "https://github.com/yourusername",
      notion: "https://notion.so/yourusername"
    }
  },
  
  appearance: {
    fontFamily: 'serif',
    primaryColor: '222.2 84% 4.9%', // Default shadcn primary
    logo: "/images/image.png"
  },
  
  blog: {
    postsPerPage: 10,
    showExcerpt: true,
    showTags: true
  },
  
  homepage: {
    hero: {
      title: "Your Blog Title",
      description: "A brief description of your blog",
      primaryButton: {
        text: "Get Started",
        href: "/posts/get-started"
      },
      secondaryButton: {
        text: "About",
        href: "/about"
      }
    },
    recentPosts: {
      title: "Recent Posts",
      viewAllText: "View all posts",
      count: 3
    }
  },
  
  footer: {
    text: "Built with ❤️",
    showBuiltWith: true
  }
}

// User's custom configuration
const config: BuroguruConfig = {
  site: {
    name: "Rizzbase",
    description: "A database for Rizz",
    url: "https://rizzbase.vercel.app"
  },
  
  author: {
    name: "slasho",
    bio: "下頭土味情話大師",
    avatar: "/images/image.png",
    email: "",
    social: {
      github: "https://github.com/slashotw"
    }
  },
  
  appearance: {
    fontFamily: 'serif',
    primaryColor: '222.2 84% 4.9%',
    secondaryColor: '210 40% 96%',
    logo: '/images/image.png'
  },
  
  blog: {
    postsPerPage: 10,
    showExcerpt: true,
    showTags: true
  },
  
  homepage: {
    hero: {
      title: "Rizzbase",
      description: "一款超下頭正體中文的土味情話資料庫。",
      primaryButton: {
        text: "Get Started",
        href: "/posts/get-started-en"
      },
      secondaryButton: {
        text: "啥是Rizzbase✋😭🤚",
        href: "/posts/intro"
      }
    },
    recentPosts: {
      title: "Recent Posts",
      viewAllText: "View all posts",
      count: 3
    }
  },
  
  footer: {
    text: "slasho",
    showBuiltWith: true,
    links: [
      { name: "slasho", href: "https://github.com/slashotw" }
    ]
  }
}

export default config 