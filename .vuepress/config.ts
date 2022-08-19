import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export default defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
  theme: "vt",
  title: "Aurevo",
  themeConfig: {
    enableDarkMode: true,
    repo: "https://github.com/aurevodev/docs",
    logo: "/logo.png",
    nav: [
      { text: "Dashboard", link: "https://dashboard.aurevo.us/" },
    ],
    sidebar: {
      "/": [
        {
          title: "Overview",
          collapsable: true,
          children: [
            "/overview/getting-started",
            "/overview/edge",
            "/overview/regions"
          ],
        },
        {
          title: "Contact",
          collapsable: false,
          children: [
            ['https://aurevo.us/invite', 'Discord'],
          ],
        },
      ],
      // "/api/": [
      //   {
      //     title: "Config",
      //     path: "/api/",
      //     collapsable: false,
      //     children: [
      //       "/api/config-theme",
      //       "/api/config-frontmatter",
      //       "/api/config-home",
      //     ],
      //   },
      // ],
    },
    codeSwitcher: {
      groups: {
        default: {
          ts: 'TypeScript',
          js: 'JavaScript',
          go: 'Golang',
          rs: 'Rust',
        },
        'plugin-usage': { tuple: 'Tuple', object: 'Object' },
      }
    }
  },
}));
