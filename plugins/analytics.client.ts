// plugins/analytics.client.ts
//
// Google Analytics 4 with Consent Mode v2.
//
// The tag loads on every page, but denied by default: no analytics cookies and
// no identifiers until the visitor allows it. That is Google's own documented
// pattern for consent, and it means the tag is detectable — a tag that only
// appears after a click is invisible to Google's checker, which never clicks.
//
// The order below matters. `consent default` has to be pushed before the gtag
// script runs, or the script starts up already assuming permission.

const GA_ID = 'G-9GPN9TSFTM';
const STORAGE_KEY = 'telroi.cookie-consent';

/** Reads stored consent synchronously, so a returning visitor who already
 *  allowed analytics is granted before the first hit rather than after. */
function storedAnalyticsConsent(): boolean {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return parsed?.version === 1 && parsed?.categories?.analytics === true;
  } catch {
    return false;
  }
}

function clearGaCookies() {
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

  const w = window as any;
  const granted = storedAnalyticsConsent();

  w.dataLayer = w.dataLayer || [];
  function gtag(..._args: any[]) { w.dataLayer.push(arguments); }
  w.gtag = w.gtag || gtag;

  // Denied unless this visitor has already said otherwise. wait_for_update
  // holds hits briefly so a decision made straight away is not missed.
  w.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
    wait_for_update: 500
  });

  w.gtag('js', new Date());
  w.gtag('config', GA_ID);

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  const { categories } = useCookieConsent();

  watch(
    () => categories.value.analytics,
    (allowed, was) => {
      w.gtag('consent', 'update', { analytics_storage: allowed ? 'granted' : 'denied' });
      // Withdrawing should remove what was already written, not merely stop
      // new hits. Skip on first run so we do not clear on a normal page load.
      if (was === true && !allowed) clearGaCookies();
    }
  );

  // GA4 counts a page_view per config call; SPA route changes need one each.
  const router = useRouter();
  router.afterEach((to) => {
    w.gtag?.('event', 'page_view', {
      page_path: to.fullPath,
      page_location: window.location.href,
      page_title: document.title
    });
  });
});
