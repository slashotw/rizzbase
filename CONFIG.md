# Buroguru Configuration Guide

Buroguru allows you to easily customize your blog by editing the `buroguru-config.ts` file in your project root.

## Quick Start

1. Open `buroguru-config.ts` in your project
2. Modify the configuration object to match your preferences
3. Restart your development server to see changes

## Configuration Options

### Site Settings

```typescript
site: {
  name: "Your Blog Name",           // Appears in browser title and metadata
  description: "Your blog description", // Used for SEO and social sharing
  url: "https://yourdomain.com",    // Your blog's URL
  favicon: "/favicon.ico"           // Optional: custom favicon path
}
```

### Author Settings

```typescript
author: {
  name: "Your Name",
  bio: "A short description about yourself",
  avatar: "/images/your-avatar.png",
  email: "your@email.com",          // Optional: shows email icon in profile
  social: {
    github: "https://github.com/username",
    twitter: "https://twitter.com/username", 
    linkedin: "https://linkedin.com/in/username",
    notion: "https://notion.so/username",
    website: "https://yourwebsite.com"
  }
}
```

### Appearance

```typescript
appearance: {
  fontFamily: 'serif',              // 'serif', 'sans', or 'mono'
  customFont: "Playfair Display",   // Optional: Google Font name
  primaryColor: 'hsl(222.2 84% 4.9%)', // CSS color value
  secondaryColor: 'hsl(210 40% 98%)',  // Optional: secondary color
  logo: "/images/logo.png"          // Optional: brand logo
}
```

### Blog Settings

```typescript
blog: {
  postsPerPage: 10,                 // Number of posts per page
  showExcerpt: true,                // Show post excerpts in list
  showReadingTime: true,            // Show estimated reading time
  showTags: true,                   // Show post tags
  defaultThumbnail: "/images/default.png" // Optional: fallback image
}
```

### Navigation

```typescript
navigation: {
  links: [
    { name: "Home", href: "/" },
    { name: "Posts", href: "/posts" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact", external: true }
  ]
}
```

### Footer

```typescript
footer: {
  text: "Your Name",                // Copyright text
  showBuiltWith: true,              // Show "Built with Buroguru" link
  links: [                          // Optional: additional footer links
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" }
  ]
}
```

## Font Customization

### Built-in Font Families
- `serif`: Traditional serif fonts (Georgia, Times)
- `sans`: Modern sans-serif fonts (Helvetica, Arial)
- `mono`: Monospace fonts (Courier, Monaco)

### Custom Google Fonts
Set `customFont` to any Google Font name:
```typescript
appearance: {
  fontFamily: 'serif',
  customFont: "Playfair Display" // Will load from Google Fonts
}
```

## Color Customization

Use HSL, RGB, or hex values for colors:
```typescript
appearance: {
  primaryColor: 'hsl(222.2 84% 4.9%)',
  // Or: primaryColor: '#1a202c',
  // Or: primaryColor: 'rgb(26, 32, 44)'
}
```

## Social Icons

Supported social platforms with automatic icons:
- `github` - GitHub icon
- `twitter` - Twitter/X icon  
- `linkedin` - LinkedIn icon
- `notion` - Notion icon
- `website` - Globe icon (for personal websites)

Other platforms will use a generic globe icon.

## Tips

1. **Images**: Place custom images in the `public/images/` directory
2. **Colors**: Use your brand colors for consistent theming
3. **Fonts**: Google Fonts load automatically when specified
4. **Testing**: Use `npm run dev` to preview changes locally
5. **Build**: Run `npm run build` to ensure configuration is valid

## Example Configuration

```typescript
const config: BuroguruConfig = {
  site: {
    name: "My Tech Blog",
    description: "Sharing insights about web development and design",
    url: "https://myblog.com"
  },
  
  author: {
    name: "Jane Developer",
    bio: "Full-stack developer passionate about creating beautiful web experiences.",
    avatar: "/images/jane-avatar.jpg",
    email: "jane@example.com",
    social: {
      github: "https://github.com/janedev",
      twitter: "https://twitter.com/janedev",
      website: "https://janedev.com"
    }
  },
  
  appearance: {
    fontFamily: 'sans',
    customFont: "Inter",
    primaryColor: 'hsl(200 95% 25%)'
  },
  
  blog: {
    postsPerPage: 12,
    showExcerpt: true,
    showReadingTime: false,
    showTags: true
  },
  
  navigation: {
    links: [
      { name: "Home", href: "/" },
      { name: "Blog", href: "/posts" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" }
    ]
  },
  
  footer: {
    text: "Jane Developer",
    showBuiltWith: true
  }
}
```

## Need Help?

- Check out the [documentation](https://buroguru.zudo.cc/get-started-en)
- View the [example configuration](./buroguru-config.ts)
- Report issues on [GitHub](https://github.com/WuSandWitch/Buroguru) 