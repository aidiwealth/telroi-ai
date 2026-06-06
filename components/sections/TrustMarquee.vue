<template>
  <section class="trust">
    <div class="wrap">
      <div class="trust-label">{{ t('trust.label') }}</div>
      <div class="trust-marquee">
        <div class="trust-track">
          <img v-for="logo in logos" :key="`a-${logo.alt}`" :src="logo.src" :alt="logo.alt" />
          <img v-for="logo in logos" :key="`b-${logo.alt}`" :src="logo.src" alt="" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const R2 = 'https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/';
const logos = [
  { src: `${R2}termii-full.png`, alt: 'Termii' },
  { src: `${R2}busha.png`, alt: 'Busha' },
  { src: `${R2}meta4.png`, alt: 'Meta4' },
  { src: `${R2}carbon-2.png`, alt: 'Carbon' },
  { src: `${R2}omnibiz.png`, alt: 'OmniBiz' },
  { src: `${R2}juicyway.png`, alt: 'JuicyWay' },
  { src: `${R2}sotel.png`, alt: 'Sotel' }
];
</script>

<style scoped>
.trust { padding: 90px 0 70px; }
.trust-label {
  text-align: center;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 40px;
}
.trust-marquee {
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}
.trust-track {
  display: flex;
  gap: 72px;
  animation: marquee 30s linear infinite;
  width: max-content;
}
.trust-marquee:hover .trust-track { animation-play-state: paused; }
.trust-track img {
  height: 26px;
  width: auto;
  opacity: 0.55;
  filter: grayscale(100%);
  transition: opacity 0.2s, filter 0.2s;
}
.trust-track img:hover { opacity: 1; filter: none; }
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>
