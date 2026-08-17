// plugins/cal.client.ts
//
// Loads the Cal.com embed so any element with data-cal-link / data-cal-namespace
// opens the booking popup — but only once the visitor has allowed it. The embed
// is a third-party script that sets its own cookies, so loading it on page load
// would be collecting consent after the fact.
//
// Until it is allowed, a click on a booking button reopens the consent chooser
// rather than doing nothing, so the button never looks broken.

let loaded = false;

function loadCalEmbed() {
  if (loaded) return;
  loaded = true;

  ;(function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) { a.q.push(ar); };
    const d = C.document;
    C.Cal = C.Cal || function () {
      const cal = C.Cal; const ar = arguments;
      if (!cal.loaded) {
        cal.ns = {}; cal.q = cal.q || [];
        d.head.appendChild(d.createElement('script')).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ['initNamespace', namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');

  const Cal = (window as any).Cal;
  Cal('init', '30min', { origin: 'https://app.cal.com' });
  Cal.ns['30min']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
}

export default defineNuxtPlugin(() => {
  if (import.meta.server) return;

  const { categories, reopen } = useCookieConsent();

  // Load as soon as booking is allowed — on this page view if consent was
  // stored earlier, or the moment the visitor allows it, with no reload.
  watch(
    () => categories.value.booking,
    (allowed) => { if (allowed) loadCalEmbed(); },
    { immediate: true }
  );

  // Capture phase, so this runs before Cal's own delegated handler would.
  document.addEventListener('click', (e) => {
    if (categories.value.booking) return;
    const el = (e.target as HTMLElement | null)?.closest?.('[data-cal-link]');
    if (!el) return;
    e.preventDefault();
    e.stopPropagation();
    // A decision may not have been made yet, or booking may have been declined.
    // Either way, ask — the visitor is trying to use the thing it gates.
    reopen();
  }, true);
});
