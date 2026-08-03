<template>
  <section class="cap-rail">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="kicker">{{ kicker }}</div>
        <h2 class="sec-title">
          <span>{{ titleStart }}</span> <span>{{ titleEm }}</span>
        </h2>
      </div>
      <div class="cap-rail-grid">
        <div
          v-for="(cap, i) in capabilities"
          :key="i"
          class="cap-rail-cell reveal"
          :class="i ? `reveal-delay-${i}` : ''"
        >
          <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="cap.icon" />
          <h5>{{ cap.title }}</h5>
          <p>{{ cap.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  kicker: string;
  titleStart: string;
  titleEm: string;
  capabilities: { title: string; body: string; icon: string }[];
}>();
</script>

<style scoped>
.cap-rail { padding: 110px 0; }
.cap-rail-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin-top: 56px;
  border-top: 1px solid var(--rule);
}
.cap-rail-cell {
  padding: 36px 28px 36px 28px;
  border-right: 1px solid var(--rule);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 200px;
}
.cap-rail-cell:first-child { padding-left: 0; }
.cap-rail-cell:last-child { border-right: 0; padding-right: 0; }
.cap-rail-cell .ic {
  width: 28px; height: 28px;
  color: var(--signal);
  margin-bottom: 28px;
  flex-shrink: 0;
}
.cap-rail-cell h5 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 17px;
  letter-spacing: -0.015em;
  margin: 0 0 10px;
  color: var(--ink);
}
.cap-rail-cell p {
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--ink-soft);
  margin: 0;
}

@media (max-width: 980px) {
  .cap-rail-grid { grid-template-columns: 1fr 1fr; }
  .cap-rail-cell {
    padding: 32px 24px;
    border-right: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    min-height: 180px;
  }
  .cap-rail-cell:nth-child(odd) { padding-left: 0; }
  .cap-rail-cell:nth-child(even) { padding-right: 0; border-right: 0; }
  .cap-rail-cell:nth-child(3),
  .cap-rail-cell:nth-child(4) { border-bottom: 0; }
}
@media (max-width: 560px) {
  .cap-rail-grid { grid-template-columns: 1fr; }
  .cap-rail-cell {
    padding: 28px 0;
    border-right: 0 !important;
    border-bottom: 1px solid var(--rule) !important;
    min-height: 0;
  }
  .cap-rail-cell:last-child { border-bottom: 0 !important; }
}
</style>
