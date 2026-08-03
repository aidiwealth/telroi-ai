<template>
  <section class="closing" :id="anchorId">
    <div class="wrap">
      <h2>
        <span>{{ titleStart || t('closing.title1') }}</span><br/>
        <em>{{ titleEm || t('closing.titleEm') }}</em>
      </h2>
      <p>{{ body || t('closing.body') }}</p>
      <button
        v-if="calPopup"
        type="button"
        class="closing-link closing-link-btn"
        data-cal-link="telroiai/30min"
        data-cal-namespace="30min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      >
        <span>{{ ctaText || t('closing.cta') }}</span> <span class="arrow">→</span>
      </button>
      <a v-else :href="ctaHref" class="closing-link">
        <span>{{ ctaText || t('closing.cta') }}</span> <span class="arrow">→</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

withDefaults(
  defineProps<{
    titleStart?: string;
    titleEm?: string;
    body?: string;
    ctaText?: string;
    ctaHref?: string;
    anchorId?: string;
    calPopup?: boolean;
  }>(),
  {
    ctaHref: 'https://app.telroi.ai/login?mode=signup',
    anchorId: 'contact',
    calPopup: false
  }
);
</script>

<style scoped>
.closing {
  padding: 140px 0 120px;
  text-align: center;
}
.closing h2 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(27px, 3.7vw, 45px);
  letter-spacing: -0.03em;
  line-height: 1.04;
  margin: 0 0 24px;
  color: var(--ink);
}
.closing h2 em {
  font-style: normal;
  font-weight: 300;
  color: var(--ink-soft);
}
.closing p {
  font-size: 18px;
  color: var(--ink-soft);
  max-width: 560px;
  margin: 0 auto 40px;
  line-height: 1.55;
}
.closing-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 500;
  color: var(--ink);
  border-bottom: 1px solid var(--ink);
  padding-bottom: 4px;
  transition: color 0.2s, border-color 0.2s, gap 0.2s;
}
.closing-link-btn {
  background: none;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  cursor: pointer;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}
.closing-link:hover {
  color: var(--signal);
  border-color: var(--signal);
  gap: 14px;
}
@media (max-width: 720px) {
  .closing { padding: 80px 0 80px; }
}
</style>
