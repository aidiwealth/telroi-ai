<template>
  <div class="notice">
    <span>
      <span>{{ t('notice') }}</span>
      <NuxtLink to="/van">{{ t('notice.link') }} →</NuxtLink>
    </span>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped>
.notice {
  background: var(--ink);
  color: rgba(255, 255, 255, 0.85);
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.05em;
  padding: 10px 0;
  text-align: center;
}
.notice span { display: inline-flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: center; }
.notice a { color: #fff; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 1px; transition: border-color 0.18s; }
.notice a:hover { border-bottom-color: #fff; }
.notice::before {
  content: "";
  display: inline-block;
  width: 6px; height: 6px;
  background: #00d28a;
  border-radius: 999px;
  margin-right: 10px;
  vertical-align: middle;
  animation: livepulse 1.5s ease-in-out infinite;
}
</style>
