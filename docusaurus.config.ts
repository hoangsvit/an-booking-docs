import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "AnBooking Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://anbooking-docs.eplus.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hoangsvit", // Usually your GitHub org/user name.
  projectName: "an-booking-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "vi",
    locales: ["vi", "en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/hoangsvit/an-booking-docs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/hoangsvit/an-booking-docs/edit/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
    },
  ],
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
  themeConfig: {
    // Replace with your project's social card
    image: "img/cover.png",
    navbar: {
      title: "AnBooking Docs",
      logo: {
        alt: "AnBooking Docs Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Hướng dẫn",
        },
        {
          href: "https://eplus.dev",
          label: "ePlus.DEV",
          position: "left",
        },
        {
          href: "https://github.com/hoangsvit/an-booking-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Thông tin",
          items: [
            {
              label: "ePlus.DEV",
              to: "https://eplus.dev",
            },
          ],
        },
        {
          title: "Mạng xã hội",
          items: [
            {
              label: "Discord",
              href: "https://eplus.dev/discord",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/david_nguyen94",
            },
          ],
        },
        {
          title: "Mở rộng",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/ePlus-DEV/news",
            },
          ],
        },
      ],
      copyright: `© 2019-${new Date().getFullYear()}. ePlus.DEV Labs điều hành & phát triển.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: ".markdown :not(em) > img",
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
