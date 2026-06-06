<template>
  <section class="faq-section" id="faq">
    <div class="wrap">
      <div class="faq-wrap">
        <div class="faq-aside reveal">
          <div class="kicker">{{ t('faq.kicker') }}</div>
          <h3>{{ t('faq.aside.title') }}</h3>
          <p>{{ t('faq.aside.body') }}</p>
          <button
            type="button"
            class="closing-link closing-link-btn"
            data-cal-link="telroiai/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            <span>{{ t('faq.aside.cta') }}</span> <span class="arrow">→</span>
          </button>
        </div>

        <div class="faq-list reveal reveal-delay-1">
          <div
            v-for="(item, i) in itemKeys"
            :key="i"
            class="faq-item"
            :class="{ open: openIndex === i }"
          >
            <button class="faq-q" type="button" @click="toggle(i)">
              <span>{{ t(item.qk) }}</span>
              <span class="faq-icon" aria-hidden="true"></span>
            </button>
            <div class="faq-a" :style="{ maxHeight: openIndex === i ? '400px' : '0' }">
              <div class="faq-a-inner">{{ t(item.ak) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
import { ref } from 'vue';

const openIndex = ref<number | null>(0);

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i;
}

const itemKeys = [
  { qk: 'faq.q1', ak: 'faq.a1' },
  { qk: 'faq.q2', ak: 'faq.a2' },
  { qk: 'faq.q3', ak: 'faq.a3' },
  { qk: 'faq.q4', ak: 'faq.a4' },
  { qk: 'faq.q5', ak: 'faq.a5' },
  { qk: 'faq.q6', ak: 'faq.a6' },
  { qk: 'faq.q7', ak: 'faq.a7' },
];
</script>

<style scoped>
.faq-section { padding: 110px 0; background: var(--paper-2); }
.faq-wrap {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 80px;
  align-items: start;
}
.faq-list { display: flex; flex-direction: column; }
.faq-item {
  border-top: 1px solid var(--rule);
  padding: 0;
}
.faq-item:last-child { border-bottom: 1px solid var(--rule); }
.faq-q {
  display: flex; justify-content: space-between; align-items: flex-start;
  gap: 24px;
  padding: 24px 0;
  cursor: pointer;
  background: none; border: 0;
  width: 100%;
  text-align: left;
  color: var(--ink);
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 19px;
  letter-spacing: -0.015em;
  line-height: 1.3;
  transition: color 0.2s;
}
.faq-q:hover { color: var(--signal); }
.faq-icon {
  flex-shrink: 0;
  width: 22px; height: 22px;
  margin-top: 2px;
  position: relative;
}
.faq-icon::before,
.faq-icon::after {
  content: ""; position: absolute; left: 50%; top: 50%;
  background: var(--ink);
  border-radius: 1px;
  transition: transform 0.25s ease, background 0.2s;
}
.faq-icon::before { width: 14px; height: 1.5px; transform: translate(-50%, -50%); }
.faq-icon::after  { width: 1.5px; height: 14px; transform: translate(-50%, -50%); }
.faq-item.open .faq-icon::after { transform: translate(-50%, -50%) scaleY(0); }
.faq-item.open .faq-icon::before { background: var(--signal); }
.faq-item.open .faq-q { color: var(--signal); }
.faq-a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.faq-a-inner {
  padding: 0 36px 28px 0;
  font-size: 15.5px;
  line-height: 1.6;
  color: var(--ink-soft);
}
.faq-aside { position: sticky; top: 96px; }
.faq-aside h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 28px;
  letter-spacing: -0.02em;
  margin: 24px 0 12px;
}
.faq-aside p {
  font-size: 15px;
  color: var(--ink-soft);
  margin: 0 0 24px;
  max-width: 320px;
}
.faq-aside :deep(.closing-link) { font-size: 15px; }
.closing-link-btn {
  background: none;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  cursor: pointer;
  font-family: inherit;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}

@media (max-width: 960px) {
  .faq-wrap { grid-template-columns: 1fr; gap: 48px; }
  .faq-aside { position: static; }
}
</style>
