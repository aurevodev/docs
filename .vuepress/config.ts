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
      { text: "Dashboard", link: "https://dashboard.aurevo.org/" },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Overview",
          collapsable: false,
          children: ["/guide/", "/guide/getting-started"],
        },
        {
          title: "Guide",
          collapsable: true,
          children: [
            "/guide/home",
            "/guide/regions",
            "/guide/edge_network"
          ],
        },
        {
          title: "Legal",
          collapsable: false,
          children: [
            "/guide/legal/privacy_policy",
          ],
        },
        {
          title: "Contact",
          collapsable: false,
          children: [
            ['https://aurevo.org.invite', 'Discord'],
            ['https://aurevo.org.invite', 'Contact Support'],
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
