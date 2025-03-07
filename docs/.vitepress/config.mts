import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notes",
  description: "Class Notes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Remote Sensing Index", link: "/remoteSensing/index" },
          { text: "Governance Index", link: "/governance/index" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/lcarvas/notes" }],
  },
});
