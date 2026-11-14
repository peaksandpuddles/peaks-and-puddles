import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://peaksandpuddles.co.uk/",
    title: "Peaks and Puddles",
    description: "Alpine layering logic, Nordic outdoor philosophy, and real-world Scottish mud—practical gear, forest nursery kit lists, and family adventure guides.",
    author: "Peaks and Puddles",
    profile: "https://peaksandpuddles.co.uk/about",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/London",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 6,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "mail", url: "mailto:hello@peaksandpuddles.co.uk" },
  ],
  shareLinks: [
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "instagram", url: "https://instagram.com/peaks.and.puddles" },
    { name: "mail", url: "mailto:hello@peaksandpuddles.co.uk" },
  ],
});