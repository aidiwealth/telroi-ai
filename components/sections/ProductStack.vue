<template>
  <section id="stack" class="product-stack">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="kicker">The Stack</div>
        <h2 class="sec-title">Four products. <span>One voice layer.</span></h2>
        <p class="sec-lede">
          From SIP trunks and programmable voice workflows to AI-native numbers and a full business communications suite —
          Telroi gives every team the infrastructure to build voice systems that hold up in the real world.
        </p>
      </div>

      <div class="stack-grid">
        <NuxtLink
          v-for="(product, i) in products"
          :key="product.slug"
          :to="`/${product.slug}`"
          class="product-card reveal"
          :class="i ? `reveal-delay-${Math.min(i,3)}` : ''"
        >
          <div class="label">{{ product.label }}</div>
          <h3>{{ product.title }}</h3>
          <p>{{ product.body }}</p>
          <span class="pc-link">
            <span>Explore {{ product.shortName }}</span> <span class="arrow">→</span>
          </span>
          <div class="visual" v-html="product.svg" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const products = [
  {
    slug: 'connect',
    label: 'Telroi Connect',
    title: 'Voice connectivity',
    shortName: 'Connect',
    body: 'CLI-compliant routing, SIP trunking, direct voice access and programmable SIP infrastructure to anywhere your customers actually pick up.',
    svg: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="50" r="6" fill="#1a4b72"/>
      <circle cx="30" cy="80" r="6" fill="#1a4b72"/>
      <circle cx="30" cy="110" r="6" fill="#1a4b72"/>
      <path d="M36 50 C 70 50 70 65 80 65" stroke="#1a4b72" stroke-width="1.2" fill="none"/>
      <path d="M36 80 C 60 80 60 65 80 65" stroke="#1a4b72" stroke-width="1.2" fill="none"/>
      <path d="M36 110 C 70 110 70 95 80 95" stroke="#1a4b72" stroke-width="1.2" fill="none"/>
      <path d="M36 80 C 60 80 60 95 80 95" stroke="#1a4b72" stroke-width="1.2" fill="none" opacity="0.4"/>
      <circle cx="80" cy="65" r="5" fill="none" stroke="#1a4b72" stroke-width="1.5"/>
      <circle cx="80" cy="95" r="5" fill="none" stroke="#1a4b72" stroke-width="1.5"/>
      <path d="M85 65 C 110 65 110 75 125 80" stroke="#1a4b72" stroke-width="1.2" fill="none"/>
      <path d="M85 95 C 110 95 110 85 125 80" stroke="#1a4b72" stroke-width="1.2" fill="none"/>
      <circle cx="130" cy="80" r="7" fill="#1a4b72"/>
      <circle cx="130" cy="80" r="12" stroke="#1a4b72" stroke-width="0.8" fill="none" opacity="0.3"/>
    </svg>`
  },
  {
    slug: 'optimize',
    label: 'Telroi Optimize',
    title: 'Voice intelligence',
    shortName: 'Optimize',
    body: 'Route scoring, fraud detection and traffic anomaly monitoring. The intelligence layer that keeps your routes reliable and profitable.',
    svg: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="140" x2="20" y2="20" stroke="#1a4b72" stroke-width="0.8" opacity="0.25"/>
      <line x1="20" y1="140" x2="150" y2="140" stroke="#1a4b72" stroke-width="0.8" opacity="0.25"/>
      <line x1="20" y1="110" x2="150" y2="110" stroke="#1a4b72" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.2"/>
      <line x1="20" y1="80" x2="150" y2="80" stroke="#1a4b72" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.2"/>
      <line x1="20" y1="50" x2="150" y2="50" stroke="#1a4b72" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.2"/>
      <path d="M28 118 L55 95 L82 85 L109 52 L136 38" stroke="#1a4b72" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="28"  cy="118" r="3" fill="#1a4b72"/>
      <circle cx="55"  cy="95"  r="3" fill="#1a4b72"/>
      <circle cx="82"  cy="85"  r="3" fill="#1a4b72"/>
      <circle cx="109" cy="52"  r="3" fill="#1a4b72"/>
      <circle cx="136" cy="38"  r="4" fill="#1a4b72"/>
      <circle cx="136" cy="38"  r="9" stroke="#1a4b72" stroke-width="0.8" fill="none" opacity="0.35"/>
    </svg>`
  },
  {
    slug: 'van',
    label: 'Telroi VAN',
    title: 'Virtual AI Numbers',
    shortName: 'VAN',
    body: 'Dedicated AI-native business numbers. Inbound answering, local language support, voice-based configuration. Built for MSMEs and enterprises alike.',
    svg: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="10" fill="#1a4b72"/>
      <path d="M80 80 m-22 0 a22 22 0 1 1 0 0.01" stroke="#1a4b72" stroke-width="1.4" fill="none" opacity="0.85"/>
      <path d="M80 80 m-38 0 a38 38 0 1 1 0 0.01" stroke="#1a4b72" stroke-width="1.2" fill="none" opacity="0.55"/>
      <path d="M80 80 m-54 0 a54 54 0 1 1 0 0.01" stroke="#1a4b72" stroke-width="1" fill="none" opacity="0.3"/>
      <path d="M80 80 m-70 0 a70 70 0 1 1 0 0.01" stroke="#1a4b72" stroke-width="0.8" fill="none" opacity="0.15"/>
      <line x1="80" y1="10"  x2="80"  y2="20"  stroke="#1a4b72" stroke-width="1.2" opacity="0.5"/>
      <line x1="80" y1="140" x2="80"  y2="150" stroke="#1a4b72" stroke-width="1.2" opacity="0.5"/>
      <line x1="10" y1="80"  x2="20"  y2="80"  stroke="#1a4b72" stroke-width="1.2" opacity="0.5"/>
      <line x1="140" y1="80" x2="150" y2="80"  stroke="#1a4b72" stroke-width="1.2" opacity="0.5"/>
    </svg>`
  },
  {
    slug: 'one',
    label: 'Telroi One',
    title: 'The complete suite',
    shortName: 'One',
    body: 'CRM, dialer, live call widget and AI call answering. All in one app, set up for your team today.',
    svg: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 52 L20 20 L52 20" stroke="#1a4b72" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M108 20 L140 20 L140 52" stroke="#1a4b72" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M140 108 L140 140 L108 140" stroke="#1a4b72" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M52 140 L20 140 L20 108" stroke="#1a4b72" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="50" y="50" width="60" height="60" rx="6" stroke="#1a4b72" stroke-width="1" fill="none" opacity="0.25"/>
      <rect x="63" y="63" width="34" height="34" rx="4" fill="#1a4b72" opacity="0.12"/>
      <circle cx="80" cy="80" r="8" fill="#1a4b72" opacity="0.7"/>
    </svg>`
  }
];
</script>

<style scoped>
.product-stack { padding: 110px 0; }
.stack-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}
.product-card {
  position: relative;
  background: var(--paper-2);
  border: 1px solid var(--rule);
  border-radius: var(--radius-lg);
  padding: 40px;
  transition: border-color 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 320px;
}
.product-card:hover { border-color: var(--ink); transform: translateY(-2px); }
.product-card .label {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 14px;
}
.product-card h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 32px;
  letter-spacing: -0.025em;
  margin: 0 0 16px;
}
.product-card p {
  font-size: 15.5px;
  line-height: 1.55;
  color: var(--ink-soft);
  margin: 0 0 24px;
  max-width: 60%;
}
.product-card .pc-link {
  margin-top: auto;
  font-size: 14px;
  color: var(--signal);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
}
.product-card .pc-link .arrow { transition: transform 0.18s var(--motion-ease); }
.product-card:hover .pc-link .arrow { transform: translateX(3px); }
.product-card .visual {
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: 160px;
  height: 160px;
  opacity: 0.35;
  pointer-events: none;
}
.product-card .visual :deep(svg) { width: 100%; height: 100%; }
@media (max-width: 820px) { .stack-grid { grid-template-columns: 1fr; } }
</style>
