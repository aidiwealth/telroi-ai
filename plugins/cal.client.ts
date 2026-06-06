// plugins/cal.client.ts
// Loads the Cal.com embed once on the client so any element with
// data-cal-link / data-cal-namespace attributes opens the booking popup.
export default defineNuxtPlugin(() => {
  if (import.meta.server) return;

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
});
