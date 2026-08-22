// plugins/cal.client.ts
//
// The Cal.com booking embed loads on the first click of a booking button, not
// on page load and not behind a consent toggle.
//
// Loading it for every visitor would set third-party cookies on people who
// never book. Putting it behind a toggle meant a visitor who wanted to book had
// to find and flip a cookie setting first, which cost us the booking. Clicking
// "Book a demo" is itself an explicit request for the booking service, so the
// embed loads at that moment and the popup opens straight away.

const CAL_LINK = 'telroiai/30min';
const CAL_NS = '30min';

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
  Cal('init', CAL_NS, { origin: 'https://app.cal.com' });
  Cal.ns[CAL_NS]('ui', { hideEventTypeDetails: false, layout: 'month_view' });
}

export default defineNuxtPlugin(() => {
  if (import.meta.server) return;

  // Capture phase, so this runs before Cal's own delegated handler exists.
  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement | null)?.closest?.('[data-cal-link]');
    if (!el) return;

    // Once the embed is present, Cal handles its own buttons.
    if (loaded) return;

    e.preventDefault();
    e.stopPropagation();

    loadCalEmbed();

    // Calls made before the script finishes are queued by the snippet above
    // and run on load, so the popup opens without a second click.
    const link = el.getAttribute('data-cal-link') || CAL_LINK;
    const ns = el.getAttribute('data-cal-namespace') || CAL_NS;
    const Cal = (window as any).Cal;
    const api = Cal?.ns?.[ns];
    if (api) {
      api('modal', {
        calLink: link,
        config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }
      });
    }
  }, true);
});
