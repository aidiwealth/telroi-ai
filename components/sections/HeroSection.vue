<template>
  <section class="hero">
    <div class="hero-frame">
      <video class="hero-video" autoplay muted loop playsinline preload="auto">
        <source src="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/iStock-2256457406.mp4" type="video/mp4" />
      </video>

      <div class="hero-content">
        <h1 class="hero-title">
          <span>{{ t('hero.title1') }}</span><br/>
          <span>{{ t('hero.titleEm') }}</span> <span>{{ t('hero.title2') }}</span>
        </h1>
        <p class="hero-sub">
          <span>{{ t('hero.sub1') }}</span><br/>
          <span>{{ t('hero.sub2') }}</span>
        </p>
        <div class="hero-ctas">
          <a href="https://app.telroi.ai/login?mode=signup" class="btn btn-signal">
            <span>{{ t('hero.cta1') }}</span> <span class="arrow">→</span>
          </a>
          <button
            type="button"
            class="btn btn-line"
            data-cal-link="telroiai/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >{{ t('hero.cta2') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped>
.hero { position: relative; padding: 28px 72px 0; }
.hero-frame {
  position: relative; max-width: var(--container);
  margin: 0 auto; border-radius: 24px;
  overflow: hidden; isolation: isolate;
  min-height: 620px;
  display: flex; flex-direction: column; justify-content: flex-end;
  color: #fff;
}
@media (max-width: 1100px) { .hero { padding: 24px 56px 0; } }
@media (max-width: 820px) { .hero { padding: 20px 32px 0; } }
@media (max-width: 520px) { .hero { padding: 16px 22px 0; } }

.hero-video {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; z-index: -2;
}
.hero-frame::before {
  content: ""; position: absolute; inset: 0;
  background:
    linear-gradient(180deg, rgba(10,10,11,0.55) 0%, rgba(10,10,11,0.70) 60%, rgba(10,10,11,0.92) 100%),
    radial-gradient(60% 80% at 70% 30%, rgba(26,75,114,0.28), transparent 70%);
  z-index: -1;
}
.hero-frame::after {
  content: ""; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: linear-gradient(180deg, rgba(0,0,0,0.5), transparent 70%);
  z-index: -1;
  pointer-events: none;
}
.hero-content { position: relative; padding: 0 56px 80px; max-width: 980px; }
h1.hero-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(40px, 6.2vw, 84px);
  line-height: 0.98;
  letter-spacing: -0.035em;
  margin: 0 0 22px;
}
h1.hero-title em { font-style: italic; font-weight: 300; color: #a1bdd4; }
.hero-sub {
  font-size: clamp(16px, 1.5vw, 19px);
  line-height: 1.55;
  color: rgba(255,255,255,0.78);
  max-width: 640px;
  margin: 0 0 32px;
}
.hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-ctas .btn-signal { box-shadow: 0 6px 22px -6px rgba(26,75,114,0.55); }
@media (max-width: 720px) {
  .hero-content { padding: 0 28px 40px; }
  .hero-frame { min-height: 580px; border-radius: 18px; }
}
</style>
