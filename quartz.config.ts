import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "gabriela vázquez",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Lora",
    body: "Source Serif 4",
    code: "IBM Plex Mono",
  },
  colors: {
    lightMode: {
      light: "#faf7f2",
      lightgray: "#ede5d8",
      gray: "#b5a08a",
      darkgray: "#5c4a32",
      dark: "#2d2010",
      secondary: "#6b5c3e",
      tertiary: "#7a9e7e",
      highlight: "rgba(181, 160, 138, 0.15)",
      textHighlight: "#f0e0c088",
    },
    darkMode: {
      light: "#1e1a14",
      lightgray: "#2e2820",
      gray: "#6b5c3e",
      darkgray: "#c8b89a",
      dark: "#f0e8d8",
      secondary: "#a8c5a0",
      tertiary: "#7a9e7e",
      highlight: "rgba(107, 92, 62, 0.25)",
      textHighlight: "#6b5c3e55",
      },
  },
  },
},
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
