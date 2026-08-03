<template>
  <section class="product-hero">
    <div class="product-hero-frame">
      <video autoplay muted loop playsinline preload="auto">
        <source :src="videoUrl" type="video/mp4" />
      </video>
      <div class="product-hero-content">
        <div class="product-hero-kicker">{{ kicker }}</div>
        <h1>
          <span>{{ titleStart }}</span><br/>
          <em>{{ titleEm }}</em>
        </h1>
        <p class="lede">{{ lede }}</p>
        <div class="product-hero-ctas">
          <!-- Download mode: iOS + Android, not yet shipped -->
          <template v-if="downloadMode">
            <span class="btn btn-line dl-hero-btn is-soon">
              <svg viewBox="0 0 24 24" fill="currentColor" class="os-icon"><path d="M17.05 12.04c-.03-3.16 2.58-4.67 2.69-4.74-1.46-2.14-3.74-2.43-4.55-2.47-1.94-.2-3.78 1.14-4.77 1.14-.99 0-2.5-1.11-4.11-1.08-2.12.03-4.07 1.23-5.16 3.12-2.2 3.82-.56 9.47 1.59 12.57 1.05 1.52 2.3 3.22 3.93 3.16 1.58-.06 2.17-1.02 4.08-1.02 1.91 0 2.45 1.02 4.12 1 1.7-.03 2.78-1.55 3.82-3.07 1.2-1.76 1.69-3.47 1.71-3.56-.04-.02-3.28-1.26-3.31-5.05zM14.05 3.07c.87-1.06 1.46-2.53 1.3-4-1.25.05-2.77.83-3.67 1.89-.8.93-1.51 2.43-1.32 3.87 1.4.11 2.82-.71 3.69-1.76z"/></svg>
              <span>iOS &mdash; coming soon</span>
            </span>
            <span class="btn btn-line dl-hero-btn is-soon">
              <svg viewBox="0 0 24 24" fill="currentColor" class="os-icon"><path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.26l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.71a.637.637 0 0 0-.83-.26c-.3.16-.42.54-.26.85L6.4 9.48A10.78 10.78 0 0 0 1 18h22a10.78 10.78 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/></svg>
              <span>Android &mdash; coming soon</span>
            </span>
          </template>
          <!-- Default mode: single CTA → Cal popup -->
          <template v-else>
            <button
              type="button"
              class="btn btn-signal"
              data-cal-link="telroiai/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              <span>{{ ctaPrimary }}</span> <span class="arrow">→</span>
            </button>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    kicker: string;
    titleStart: string;
    titleEm: string;
    lede: string;
    ctaPrimary?: string;
    downloadMode?: boolean;
    videoUrl?: string;
  }>(),
  {
    ctaPrimary: 'Talk to sales',
    downloadMode: false,
    videoUrl: 'https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/iStock-1702872444.mp4'
  }
);
</script>

<style scoped>
.product-hero { position: relative; padding: 28px 72px 0; }
.product-hero-frame {
  position: relative;
  max-width: var(--container);
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  isolation: isolate;
  min-height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
}
.product-hero-frame video {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  z-index: -2;
}
.product-hero-frame::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.80) 100%);
  z-index: -1;
}
.product-hero-content {
  position: relative;
  padding: 0 56px 72px;
  max-width: 980px;
}
.product-hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 22px;
  padding: 6px 12px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  backdrop-filter: blur(6px);
}
.product-hero h1 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(40px, 6vw, 72px);
  letter-spacing: -0.03em;
  line-height: 1.04;
  margin: 0 0 24px;
}
.product-hero h1 em {
  font-style: normal;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
}
.product-hero p.lede {
  font-size: 19px;
  color: rgba(255, 255, 255, 0.82);
  max-width: 620px;
  line-height: 1.5;
  margin: 0 0 36px;
}
.product-hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
.dl-hero-btn { display: inline-flex; align-items: center; gap: 9px; }
.os-icon { width: 17px; height: 17px; flex-shrink: 0; }
.is-soon { opacity: 0.72; cursor: default; pointer-events: none; border-style: dashed; }

@media (max-width: 1100px) { .product-hero { padding: 24px 56px 0; } }
@media (max-width: 820px) {
  .product-hero { padding: 20px 32px 0; }
  .product-hero-content { padding: 0 32px 56px; }
}
@media (max-width: 520px) {
  .product-hero { padding: 16px 22px 0; }
  .product-hero-content { padding: 0 24px 40px; }
}
</style>
