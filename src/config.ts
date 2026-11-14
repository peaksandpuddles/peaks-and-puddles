import { getAstroPaperConfig } from "./types/config";

const config = getAstroPaperConfig();

export const SITE = {
  website: config.site.url,
  author: config.site.author,
  profile: config.site.profile,
  desc: config.site.description,
  title: config.site.title,
  ogImage: config.site.ogImage,
  lightAndDarkMode: config.features.lightAndDarkMode,
  postPerIndex: config.posts.perIndex,
  postPerPage: config.posts.perPage,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: config.features.showArchives,
  showBackButton: config.features.showBackButton,
  editPost: config.features.editPost,
  dynamicOgImage: config.features.dynamicOgImage,
  dir: config.site.dir,
  lang: config.site.lang,
  timezone: config.site.timezone,
} as const;