---
title: "Buroguru 配置指南：自定義你的博客"
description: "完整的 Buroguru 配置教學，讓你輕鬆自定義博客的外觀、功能和內容設定。"
date: "2024-12-19"
tags: ["教學", "配置", "自定義"]
thumbnail: ""
---

# Buroguru 配置指南：自定義你的博客

Buroguru 提供了強大而靈活的配置系統，讓你可以輕鬆自定義博客的各個方面。所有配置都集中在 `buroguru-config.ts` 文件中，讓管理變得簡單直觀。

## 配置文件結構

配置文件分為以下幾個主要部分：

- **網站設定** (Site Settings)
- **作者資訊** (Author Settings)  
- **外觀設定** (Appearance)
- **博客功能** (Blog Settings)
- **導航設定** (Navigation)
- **首頁設定** (Homepage)
- **頁腳設定** (Footer)

## 網站基本設定

```typescript
site: {
  name: "你的博客名稱",
  description: "博客描述",
  url: "https://yourblog.com"
}
```

這些設定會影響：
- 瀏覽器標題和 SEO
- 導航欄中的網站名稱
- 社交媒體分享時的資訊

## 作者資訊配置

```typescript
author: {
  name: "你的名字",
  bio: "個人簡介",
  avatar: "/images/avatar.png",
  email: "your@email.com",
  social: {
    github: "https://github.com/username",
    twitter: "https://twitter.com/username",
    linkedin: "https://linkedin.com/in/username",
    notion: "https://notion.so/username",
    website: "https://yourwebsite.com"
  }
}
```

作者資訊會顯示在：
- 文章詳情頁
- 個人資料卡片
- 頁腳區域

## 外觀自定義

### 字體設定

```typescript
appearance: {
  fontFamily: 'serif', // 'serif' | 'sans' | 'mono'
  customFont: 'Inter', // Google Fonts 字體名稱（可選）
}
```

- `fontFamily`: 選擇基本字體類型
- `customFont`: 使用 Google Fonts 自定義字體

### 顏色主題

```typescript
appearance: {
  primaryColor: '222.2 84% 4.9%', // HSL 格式
  secondaryColor: '210 40% 96%',  // HSL 格式
}
```

顏色值使用 HSL 格式（色相 飽和度 明度），會自動適配深色和淺色模式。

### 標誌設定

```typescript
appearance: {
  logo: '/images/logo.png'
}
```

如果設定了 logo，會在導航欄和首頁中優先使用，否則使用作者頭像。

## 博客功能設定

```typescript
blog: {
  postsPerPage: 10,     // 每頁顯示文章數量
  showExcerpt: true,    // 是否在列表中顯示摘要
  showTags: true,       // 是否顯示標籤
  defaultThumbnail: "/images/default.png" // 預設縮圖（可選）
}
```

這些設定控制：
- 文章列表的顯示方式
- 分頁行為
- 標籤和摘要的顯示

## 導航選單

```typescript
navigation: {
  links: [
    { name: "首頁", href: "/" },
    { name: "文章", href: "/posts" },
    { name: "關於", href: "/about" },
    { name: "外部連結", href: "https://external.com", external: true }
  ]
}
```

- `external: true` 表示外部連結，會在新標籤頁開啟

## 首頁自定義

### 英雄區塊設定

```typescript
homepage: {
  hero: {
    title: "博客標題",
    description: "博客描述文字",
    primaryButton: {
      text: "開始閱讀",
      href: "/posts/get-started"
    },
    secondaryButton: {
      text: "了解更多",
      href: "/about"
    }
  }
}
```

### 最新文章區塊

```typescript
homepage: {
  recentPosts: {
    title: "最新文章",
    viewAllText: "查看所有文章",
    count: 3  // 顯示最新文章數量
  }
}
```

## 頁腳設定

```typescript
footer: {
  text: "© 2024 你的名字",
  showBuiltWith: true,  // 是否顯示 "Built with Buroguru"
  links: [
    { name: "隱私政策", href: "/privacy" },
    { name: "聯絡我們", href: "/contact" }
  ]
}
```

## 完整配置範例

```typescript
const config: BuroguruConfig = {
  site: {
    name: "我的技術博客",
    description: "分享程式設計和技術心得",
    url: "https://myblog.com"
  },
  
  author: {
    name: "張小明",
    bio: "全端工程師，熱愛分享技術知識",
    avatar: "/images/avatar.jpg",
    email: "contact@myblog.com",
    social: {
      github: "https://github.com/username",
      twitter: "https://twitter.com/username"
    }
  },
  
  appearance: {
    fontFamily: 'sans',
    customFont: 'Noto Sans TC',
    primaryColor: '200 100% 50%',
    logo: '/images/logo.png'
  },
  
  blog: {
    postsPerPage: 8,
    showExcerpt: true,
    showTags: true
  },
  
  navigation: {
    links: [
      { name: "首頁", href: "/" },
      { name: "技術文章", href: "/posts" },
      { name: "關於我", href: "/about" }
    ]
  },
  
  homepage: {
    hero: {
      title: "歡迎來到我的技術博客",
      description: "在這裡分享程式設計經驗和技術見解",
      primaryButton: {
        text: "開始閱讀",
        href: "/posts"
      },
      secondaryButton: {
        text: "關於我",
        href: "/about"
      }
    },
    recentPosts: {
      title: "最新文章",
      viewAllText: "查看全部",
      count: 4
    }
  },
  
  footer: {
    text: "張小明的技術博客",
    showBuiltWith: true
  }
}
```

## 進階技巧

### 條件式配置

你可以根據環境變數或其他條件動態調整配置：

```typescript
const isDev = process.env.NODE_ENV === 'development'

const config: BuroguruConfig = {
  site: {
    name: "我的博客",
    url: isDev ? "http://localhost:3000" : "https://myblog.com"
  },
  // ... 其他配置
}
```

### 配置驗證

建議在配置文件頂部添加類型檢查：

```typescript
import { BuroguruConfig } from './lib/config'

// 確保配置符合類型定義
const config: BuroguruConfig = {
  // 你的配置
}
```

## 常見問題

### Q: 修改配置後沒有生效？
A: 確保重新啟動開發伺服器，配置變更需要重新編譯。

### Q: 自定義字體沒有顯示？
A: 檢查字體名稱是否正確，確保網路連接正常以載入 Google Fonts。

### Q: 顏色在深色模式下顯示異常？
A: 確保使用 HSL 格式的顏色值，系統會自動為深色模式調整對比度。

### Q: 如何使用本地字體？
A: 將字體文件放在 `public/fonts/` 目錄下，然後在 `globals.css` 中使用 `@font-face` 聲明。

## 下一步

配置完成後，你可以：
1. 測試各種設定組合
2. 檢查響應式設計
3. 驗證 SEO 設定
4. 部署到生產環境

有任何問題歡迎查看文檔或聯繫支援！ 