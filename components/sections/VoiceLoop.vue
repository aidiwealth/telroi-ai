<template>
  <section class="loop-section">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="kicker">{{ t('loop.kicker') }}</div>
        <h2 class="sec-title">
          <span>{{ t('loop.title') }}</span> <span>{{ t('loop.titleEm') }}</span>
        </h2>
        <p class="sec-lede">{{ t('loop.lede') }}</p>
      </div>

      <div class="loop-wrap">
        <div class="loop-steps reveal">
          <div
            v-for="step in steps"
            :key="step.num"
            class="loop-step"
            :class="{ 'is-active': activeStep === step.num }"
            @click="activeStep = step.num"
          >
            <div class="num">{{ step.num }}</div>
            <div class="body">
              <h4>{{ t(step.titleKey) }}</h4>
              <p>{{ t(step.bodyKey) }}</p>
            </div>
          </div>
        </div>

        <div class="loop-visual reveal reveal-delay-1">
          <svg viewBox="0 0 420 420" style="width:100%; height:100%; position:relative; z-index:1;">
            <defs>
              <radialGradient id="loopRing" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#1a4b72" stop-opacity="0.15"/>
                <stop offset="100%" stop-color="#1a4b72" stop-opacity="0"/>
              </radialGradient>
            </defs>

            <circle cx="210" cy="210" r="190" fill="url(#loopRing)"/>
            <circle cx="210" cy="210" r="150" stroke="#e8e8ea" stroke-width="1" fill="none"/>
            <circle cx="210" cy="210" r="110" stroke="#e8e8ea" stroke-width="1" fill="none" stroke-dasharray="2 4"/>
            <circle cx="210" cy="210" r="70" stroke="#e8e8ea" stroke-width="1" fill="none"/>

            <!-- Node 01 -->
            <g transform="translate(210 60)" :class="{ active: activeStep === '01' }">
              <circle r="22" fill="#fff" :stroke="activeStep === '01' ? '#1a4b72' : '#e8e8ea'" stroke-width="1.5"/>
              <text y="5" text-anchor="middle" font-family="Geist" font-size="12" :fill="activeStep === '01' ? '#1a4b72' : '#6b6b73'" font-weight="500">01</text>
              <text y="44" text-anchor="middle" font-family="Geist" font-size="10" fill="#3a3a3f" letter-spacing="1">LISTEN &amp; UNDERSTAND</text>
            </g>
            <!-- Node 02 -->
            <g transform="translate(340 285)">
              <circle r="22" fill="#fff" :stroke="activeStep === '02' ? '#1a4b72' : '#e8e8ea'" stroke-width="1.5"/>
              <text y="5" text-anchor="middle" font-family="Geist" font-size="12" :fill="activeStep === '02' ? '#1a4b72' : '#6b6b73'" font-weight="500">02</text>
              <text y="44" text-anchor="middle" font-family="Geist" font-size="10" fill="#3a3a3f" letter-spacing="1">ACT &amp; RESPOND</text>
            </g>
            <!-- Node 03 -->
            <g transform="translate(80 285)">
              <circle r="22" fill="#fff" :stroke="activeStep === '03' ? '#1a4b72' : '#e8e8ea'" stroke-width="1.5"/>
              <text y="5" text-anchor="middle" font-family="Geist" font-size="12" :fill="activeStep === '03' ? '#1a4b72' : '#6b6b73'" font-weight="500">03</text>
              <text y="44" text-anchor="middle" font-family="Geist" font-size="10" fill="#3a3a3f" letter-spacing="1">MONITOR &amp; IMPROVE</text>
            </g>

            <!-- Center speech wave -->
            <g transform="translate(210 210)">
              <circle r="58" fill="#0A0A0B"/>
              <circle r="58" fill="none" stroke="#4d83b3" stroke-width="1.5" opacity="0.5">
                <animate attributeName="r" values="58;82;58" dur="2.4s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite"/>
              </circle>
              <circle r="58" fill="none" stroke="#4d83b3" stroke-width="1.5" opacity="0.3">
                <animate attributeName="r" values="58;94;58" dur="2.4s" begin="0.8s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0;0.3" dur="2.4s" begin="0.8s" repeatCount="indefinite"/>
              </circle>

              <path d="M -48 0 Q -36 -14 -24 -6 T 0 0 T 24 6 T 48 0" fill="none" stroke="#7fa8c5" stroke-width="1" stroke-linecap="round" opacity="0.35">
                <animate attributeName="d" values="M -48 0 Q -36 -14 -24 -6 T 0 0 T 24 6 T 48 0;M -48 0 Q -36 14 -24 6 T 0 0 T 24 -6 T 48 0;M -48 0 Q -36 -14 -24 -6 T 0 0 T 24 6 T 48 0" dur="3.6s" repeatCount="indefinite"/>
              </path>
              <path d="M -46 0 Q -34 -18 -22 -8 T 0 0 T 22 8 T 46 0" fill="none" stroke="#7fa8c5" stroke-width="1.2" stroke-linecap="round" opacity="0.55">
                <animate attributeName="d" values="M -46 0 Q -34 -18 -22 -8 T 0 0 T 22 8 T 46 0;M -46 0 Q -34 18 -22 8 T 0 0 T 22 -8 T 46 0;M -46 0 Q -34 -18 -22 -8 T 0 0 T 22 8 T 46 0" dur="3.2s" repeatCount="indefinite"/>
              </path>
              <path d="M -44 0 Q -32 -22 -20 -10 T 0 0 T 20 10 T 44 0" fill="none" stroke="#a1bdd4" stroke-width="1.4" stroke-linecap="round" opacity="0.75">
                <animate attributeName="d" values="M -44 0 Q -32 -22 -20 -10 T 0 0 T 20 10 T 44 0;M -44 0 Q -32 22 -20 10 T 0 0 T 20 -10 T 44 0;M -44 0 Q -32 -22 -20 -10 T 0 0 T 20 10 T 44 0" dur="2.8s" repeatCount="indefinite"/>
              </path>
              <path d="M -42 0 Q -30 -24 -18 -12 T 0 0 T 18 12 T 42 0" fill="none" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" opacity="0.95">
                <animate attributeName="d" values="M -42 0 Q -30 -24 -18 -12 T 0 0 T 18 12 T 42 0;M -42 0 Q -30 24 -18 12 T 0 0 T 18 -12 T 42 0;M -42 0 Q -30 -24 -18 -12 T 0 0 T 18 12 T 42 0" dur="2.4s" repeatCount="indefinite"/>
              </path>
              <circle cx="-48" cy="0" r="1.5" fill="#7fa8c5" opacity="0.6"/>
              <circle cx="48" cy="0" r="1.5" fill="#7fa8c5" opacity="0.6"/>
            </g>

            <!-- Orbiting dot -->
            <circle r="4" fill="#1a4b72">
              <animateMotion dur="6s" repeatCount="indefinite" path="M 210 60 A 150 150 0 1 1 209.9 60"/>
            </circle>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
import { ref, onMounted, onBeforeUnmount } from 'vue';

const activeStep = ref<'01' | '02' | '03'>('01');

const steps = [
  { num: '01', titleKey: 'loop.step1.title', bodyKey: 'loop.step1.body' },
  { num: '02', titleKey: 'loop.step2.title', bodyKey: 'loop.step2.body' },
  { num: '03', titleKey: 'loop.step3.title', bodyKey: 'loop.step3.body' },
];

let interval: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  interval = setInterval(() => {
    const order: ('01' | '02' | '03')[] = ['01', '02', '03'];
    const idx = order.indexOf(activeStep.value);
    activeStep.value = order[(idx + 1) % order.length];
  }, 4500);
});

onBeforeUnmount(() => {
  if (interval) clearInterval(interval);
});
</script>

<style scoped>
.loop-section { background: #fff; padding: 110px 0; }
.loop-wrap {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: center;
}
.loop-steps { display: flex; flex-direction: column; gap: 4px; }
.loop-step {
  display: flex;
  gap: 18px;
  padding: 22px 0;
  border-bottom: 1px solid var(--rule);
  cursor: pointer;
  transition: padding 0.2s;
}
.loop-step:last-child { border-bottom: 0; }
.loop-step .num {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ink-soft);
  padding-top: 3px;
  min-width: 32px;
}
.loop-step .body h4 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 24px;
  margin: 0 0 6px;
  letter-spacing: -0.02em;
}
.loop-step .body p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 15px;
  max-width: 480px;
}
.loop-step.is-active .num { color: var(--signal); }
.loop-step.is-active .body h4 { color: var(--signal); }

.loop-visual {
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 18px;
  background: #fff;
  border: 1px solid var(--rule);
  box-shadow: var(--shadow-card);
  padding: 28px;
  overflow: hidden;
}
.loop-visual::before {
  content: "";
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--rule-2) 1px, transparent 1px),
    linear-gradient(90deg, var(--rule-2) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  mask-image: radial-gradient(60% 80% at 50% 50%, black, transparent 90%);
}

@media (max-width: 960px) {
  .loop-wrap { grid-template-columns: 1fr; gap: 40px; }
}
</style>
