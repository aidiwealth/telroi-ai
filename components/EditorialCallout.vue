<template>
  <section class="editorial">
    <div class="wrap">
      <div class="inner reveal">
        <div class="label">{{ label }}</div>
        <p v-html="text" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ label: string; text: string }>();
</script>

<style scoped>
.editorial { padding: 110px 0; background: var(--paper-2); }
.editorial .inner {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.editorial .label {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--signal);
  margin-bottom: 22px;
}
.editorial p {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(22px, 2.4vw, 32px);
  line-height: 1.35;
  letter-spacing: -0.015em;
  color: var(--ink);
  margin: 0;
}
.editorial p :deep(em) {
  font-style: italic;
  color: var(--ink-soft);
}
</style>
