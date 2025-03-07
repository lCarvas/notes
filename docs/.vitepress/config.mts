import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notes",
  description: "Class Notes",

  base: "/notes/",

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    search: {
      provider: "local",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Notes",
        items: [
          { text: "Remote Sensing Index", link: "/remoteSensing/index" },
          { text: "Governance Index", link: "/governance/index" },
        ],
      },
    ],

    outline: "deep",

    socialLinks: [{ icon: "github", link: "https://github.com/lcarvas/notes" }],
  },
});
