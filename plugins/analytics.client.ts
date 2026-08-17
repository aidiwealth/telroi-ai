// plugins/analytics.client.ts
//
// Google Analytics 4, loaded only after the visitor allows it.
//
// The tag is deliberately NOT in nuxt.config's head. A script tag there runs on
// every page load, which would set _ga cookies before anyone had been asked —
// the consent banner would then be decoration rather than a control.
//
// Revoking works too: gtag has no unload, so we set Google's documented
// ga-disable flag, drop the cookies it wrote, and stop sending.

const GA_ID = 'G-9GPN9TSFTM';

let injected = false;

function loadGa() {
  const w = window as any;

  // Re-enable if this visitor had previously revoked in the same session.
  w['ga-disable-' + GA_ID] = false;

  if (injected) {
    // Script is already on the page; just resume collection for this visit.
    w.gtag?.('config', GA_ID);
    return;
  }
  injected = true;

  w.dataLayer = w.dataLayer || [];
  function gtag(...args: any[]) { w.dataLayer.push(arguments); }
  w.gtag = w.gtag || gtag;

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  w.gtag('js', new Date());
  w.gtag('config', GA_ID);
}

function unloadGa() {
  const w = window as any;
  // Documented opt-out flag: gtag checks it before sending anything.
  w['ga-disable-' + GA_ID] = true;

  // Remove what it already wrote, so declining actually clears the cookies
  // rather than merely stopping new hits.
  const host = location.hostname;
  const domains = [host, '.' + host, '.' + host.split('.').slice(-2).join('.')];
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim();
    if (!/^_ga/.test(name) && name !== '_gid') return;
    domains.forEach((d) => {
      document.cookie = `${name}=; path=/; domain=${d}; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    });
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  });
}

export default defineNuxtPlugin(() => {
  if (import.meta.server) return;

  const { categories } = useCookieConsent();

  watch(
    () => categories.value.analytics,
    (allowed) => { allowed ? loadGa() : unloadGa(); },
    { immediate: true }
  );

  // GA4 counts a page_view per config call; SPA route changes need one each.
  const router = useRouter();
  router.afterEach((to) => {
    if (!categories.value.analytics) return;
    (window as any).gtag?.('event', 'page_view', {
      page_path: to.fullPath,
      page_location: window.location.href,
      page_title: document.title
    });
  });
});
