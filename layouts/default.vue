<template>
  <div>
    <TheNav />
    <main>
      <slot />
    </main>
    <TheFooter />

    <CookieConsent />

    <!-- Back to top. Shifts right while the consent card occupies this corner. -->
    <Transition name="btt">
      <button
        v-if="showBtt"
        class="btt-btn"
        :class="{ 'btt-shifted': consentDecided === false }"
        type="button"
        aria-label="Back to top"
        @click="scrollToTop"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

useScrollReveal();

const showBtt = ref(false);

// The consent card is bottom-left too, so the button steps aside while it shows.
const { decided: consentDecided, hydrate } = useCookieConsent();
onMounted(hydrate);

function onScroll() {
  showBtt.value = window.scrollY > 600;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));
</script>

<style>
.btt-btn {
  position: fixed;
  bottom: 32px;
  left: 32px;
  z-index: 200;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--ink);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px -4px rgba(10,10,11,0.3);
  transition: background 0.15s, transform 0.15s;
}
.btt-btn:hover {
  background: var(--signal);
  transform: translateY(-2px);
}
.btt-shifted { left: auto; right: 32px; }
.btt-btn svg {
  width: 18px;
  height: 18px;
  stroke: #fff;
}

/* Fade + slide transition */
.btt-enter-active,
.btt-leave-active { transition: opacity 0.2s, transform 0.2s; }
.btt-enter-from,
.btt-leave-to { opacity: 0; transform: translateY(8px); }
</style>
