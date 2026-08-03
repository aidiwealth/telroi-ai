<template>
  <section class="pillars-section">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="kicker">{{ t('pillars.kicker') }}</div>
        <h2 class="sec-title">
          <span>{{ t('pillars.title') }}</span> <em>{{ t('pillars.titleEm') }}</em>
        </h2>
        <p class="sec-lede">{{ t('pillars.lede') }}</p>
      </div>
      <div class="pillars-grid reveal">
        <div v-for="p in pillars" :key="p.num" class="pillar">
          <div class="p-num">{{ p.num }}</div>
          <h5>{{ t(p.titleKey) }}</h5>
          <p>{{ t(p.bodyKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const pillars = [
  { num: '01', titleKey: 'pillars.1.title', bodyKey: 'pillars.1.body' },
  { num: '02', titleKey: 'pillars.2.title', bodyKey: 'pillars.2.body' },
  { num: '03', titleKey: 'pillars.3.title', bodyKey: 'pillars.3.body' },
  { num: '04', titleKey: 'pillars.4.title', bodyKey: 'pillars.4.body' },
];
</script>

<style scoped>
.pillars-section { background: var(--paper-2); padding: 110px 0; }
.pillars-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 0; border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule);
}
.pillar { padding: 36px 28px; border-right: 1px solid var(--rule); background: #fff; }
.pillar:last-child { border-right: 0; }
.p-num { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; color: var(--ink-soft); margin-bottom: 16px; }
.pillar h5 { font-family: var(--font-display); font-weight: 400; font-size: 18px; letter-spacing: -0.015em; margin: 0 0 10px; }
.pillar p { font-size: 14.5px; line-height: 1.55; color: var(--ink-soft); margin: 0; }
@media (max-width: 820px) { .pillars-grid { grid-template-columns: repeat(2, 1fr); } .pillar:nth-child(2) { border-right: 0; } .pillar:nth-child(3) { border-top: 1px solid var(--rule); } }
</style>
