import { defineConfig } from "vitepress";

const pkg = require("../../package.json");

export default defineConfig({
  // 部署站点的基础路径
  base: "/blog-next",
  // 标题
  title: "Yanxu Gong's Blog",
  lang: "zh-CN",
  // 描述
  description: "Personal blog based on Github Action + VitePress",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  themeConfig: {
    repo: pkg.repository,
    logo: "/logo.svg",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "为此页提供修改建议",

    // TODO: 配置 Algolia 搜索
    algolia: {
      apiKey: "your_api_key",
      indexName: "index_name",
    },

    nav: [
      { text: "学习", link: "/study/" },
      { text: "摄影", link: "/photography/" },
      { text: "情感", link: "/emotion/" },
      { text: "关于", link: "/about/" },
    ],
  },
});
