import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌱 Mila Mavens",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "milamavens.github.io/quartz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Wix Madefor Text",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fff6ee",
          lightgray: "#e6ded7",
          gray: "#b9b2a9",
          darkgray: "#4f4c48",
          dark: "#342f2a",
          secondary: "#e7732e",
          tertiary: "#ac7d68",
          highlight: "rgba(159, 113, 73, 0.15)",
        },
        darkMode: {
          light: "#16202e",
          lightgray: "#303344",
          gray: "#4a4e5d",
          darkgray: "#cfdfe3",
          dark: "#efeff0",
          secondary: "#85edb4",
          tertiary: "#65abd7",
          highlight: "rgba(201, 204, 228, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config