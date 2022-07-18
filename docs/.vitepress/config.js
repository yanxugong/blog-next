import { defineConfig } from "vitepress";

export default defineConfig({
  // 部署站点的基础路径
  base: "/blog-next",
  lang: "zh-CN",
  // 标题
  title: "Yanxu Gong's Blog",
  // 描述
  description: "Personal blog based on Github Action + VitePress",

  lastUpdated: true,

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "学习", link: "/study/" },
      { text: "摄影", link: "/photography/" },
      { text: "情感", link: "/emotion/" },
      { text: "关于", link: "/about/" },
    ],

    editLink: {
      pattern: "https://github.com/yanxugong/blog-next/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/yanxugong/blog-next" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Yanxu Gong",
    },

    // TODO: 配置 Algolia 搜索
    algolia: {
      apiKey: "your_api_key",
      indexName: "index_name",
    },
  },
});
