// 🎯 Look for environment files, but fallback to your actual project domain name strings!
const rawSiteUrl = (process.env.SITE_URL ?? 'https://babyrobot.org').trim();
const siteUrl = rawSiteUrl ? rawSiteUrl.replace(/\/+$/, '') : '';
const hasSiteUrl = true; // Force compilation active for local feed checking
const fallbackSiteUrl = 'https://babyrobot.org';

if (
  !hasSiteUrl &&
  process.env.NODE_ENV === 'production' &&
  process.env[siteUrlWarningFlag] !== '1'
) {
  process.env[siteUrlWarningFlag] = '1';
  console.warn(
    '[astro-whono] SITE_URL is not set. RSS will use example.invalid; canonical/og will be omitted; sitemap will not be generated and robots will not include Sitemap.'
  );
}

export const site = {
  url: hasSiteUrl ? siteUrl : fallbackSiteUrl,
  title: 'Baby Robot',
  brandTitle: 'Baby Robot',
  author: 'Kelly & Leo',
  authorAvatar: 'author/avatar.webp',
  description: 'Baby Robot is an art collective and experimental art laboratory that focuses on AI collaboration, philosophy, news, and partnership.'
};

export const PAGE_SIZE_ARCHIVE = 12;
export const PAGE_SIZE_ESSAY = 12;
export const PAGE_SIZE_BITS = 20;

export { hasSiteUrl, siteUrl };
