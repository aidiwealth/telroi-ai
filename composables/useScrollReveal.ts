// composables/useScrollReveal.ts
// Sets up an IntersectionObserver that adds `is-visible` to any `.reveal`
// element. Re-scans the DOM after every route navigation so client-side
// nav into a new page doesn't leave its reveal elements stuck at opacity 0.

import { onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null;
  const route = useRoute();

  function scan() {
    if (!observer) return;
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
      // Guard against re-observing — IntersectionObserver dedupes anyway,
      // but this keeps the work minimal.
      observer!.observe(el);
    });
  }

  // Fallback for elements already in view at mount/navigation time:
  // mark them visible immediately so above-the-fold content shows without
  // waiting for a scroll event.
  function markInitiallyVisible() {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        el.classList.add('is-visible');
      }
    });
  }

  onMounted(() => {
    if (!process.client) return;

    // Activate the CSS-driven reveal state. Until this class is present on
    // <html>, all `.reveal` elements render at full opacity — so even if
    // the observer is slow or fails, content is never invisible.
    document.documentElement.classList.add('reveal-ready');

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Initial pass
    nextTick(() => {
      markInitiallyVisible();
      scan();
    });

    // Re-scan on every route change. Wait for the new page DOM to be
    // committed (nextTick) before scanning so we pick up the freshly
    // mounted `.reveal` nodes.
    watch(
      () => route.fullPath,
      () => {
        nextTick(() => {
          markInitiallyVisible();
          scan();
          // Some sections animate in just after route mount; do a second
          // pass on the next frame to catch anything that mounted late.
          requestAnimationFrame(() => {
            markInitiallyVisible();
            scan();
          });
        });
      }
    );
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    observer = null;
  });
}
