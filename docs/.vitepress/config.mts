import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notes",
  description: "Class Notes",

  base: "/notes/",

  cleanUrls: true,
  lastUpdated: true,

  head: [["link", { rel: "icon", href: "icon.webp" }]],

  markdown: {
    math: true,
  },

  themeConfig: {
    // logo: "/icon.webp",

    search: {
      provider: "local",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Class Index", link: "/classIndex" },
    ],

    sidebar: [
      {
        text: "Notes",
        items: [
          { text: "Remote Sensing Index", link: "/remoteSensing/" },
          { text: "Governance Index", link: "/governance/" },
          {
            text: "Innovation Project",
            link: "/digitalInnovationProjects/",
          },
        ],
      },
    ],

    outline: "deep",

    socialLinks: [{ icon: "github", link: "https://github.com/lcarvas/notes" }],
  },
});
