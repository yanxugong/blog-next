import { defineConfig } from "vitepress";

export default defineConfig({
  // 部署站点的基础路径
  // base: "",
  // 标题
  title: "Yanxu Gong's Blog",
  lang: "zh-CN",
  // 描述
  description: "Personal blog based on Github Action + Vuepress",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav: [
      { text: "学习", link: "/study/" },
      { text: "摄影", link: "/photography/" },
      { text: "情感", link: "/emotion/" },
      { text: "关于", link: "/about" },
    ],
    sidebar: {},
    lastUpdated: "上次更新",
    repo: "yanxugong/blog",
    docsRepo: "yanxugong/blog",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
  },
});
