import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://peaksandpuddles.co.uk/",
    title: "Peaks + Puddles",
    description: "Alpine layering logic, Nordic outdoor philosophy, and real-world Scottish mud—practical gear, forest nursery kit lists and family adventure guides.",
    author: "Peaks + Puddles",
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
    { name: "instagram", url: "https://www.instagram.com/peaks.and.puddles" },
    { name: "mail", url: "mailto:hello@peaksandpuddles.co.uk" },
  ],
  shareLinks: [
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});