<template>
  <svg viewBox="0 0 420 420" style="width:100%; height:100%; position:relative; z-index:1;">
    <!-- Four cards at 78px pitch. The previous layout hardcoded three at 95px
         and left the fourth item with nowhere to render. -->
    <g v-for="(card, i) in cards" :key="card.num" :opacity="activeStep === card.num ? 1 : 0.5">
      <rect
        x="52" :y="46 + i * 90" width="316" height="74" rx="12" fill="#fff"
        :stroke="activeStep === card.num ? '#1a4b72' : '#e8e8ea'"
        stroke-width="1.5"
        style="transition: stroke 0.3s ease"
      />

      <g :transform="`translate(90 ${83 + i * 90})`">
        <circle
          r="18" fill="rgba(26,75,114,0.08)"
          :stroke="activeStep === card.num ? '#1a4b72' : '#a1bdd4'"
          stroke-width="1.4"
        />
        <!-- Certificate -->
        <g v-if="i === 0" :stroke="activeStep === card.num ? '#1a4b72' : '#a1bdd4'" stroke-width="1.3" fill="none">
          <rect x="-7" y="-8" width="14" height="12" rx="1.5"/>
          <line x1="-4" y1="-4" x2="4" y2="-4"/>
          <line x1="-4" y1="-1" x2="2" y2="-1"/>
          <path d="M -3 4 L -3 9 L 0 7 L 3 9 L 3 4" stroke-linejoin="round"/>
        </g>
        <!-- In progress -->
        <g v-else-if="i === 1" :stroke="activeStep === card.num ? '#1a4b72' : '#a1bdd4'" stroke-width="1.3" fill="none">
          <circle r="8"/>
          <path d="M 0 -8 A 8 8 0 0 1 8 0" stroke-width="2.2" stroke-linecap="round"/>
        </g>
        <!-- Globe -->
        <g v-else-if="i === 2" :stroke="activeStep === card.num ? '#1a4b72' : '#a1bdd4'" stroke-width="1.2" fill="none">
          <circle r="9"/>
          <ellipse rx="9" ry="4"/>
          <line x1="-9" y1="0" x2="9" y2="0"/>
        </g>
        <!-- Signed document -->
        <g v-else :stroke="activeStep === card.num ? '#1a4b72' : '#a1bdd4'" stroke-width="1.3" fill="none">
          <path d="M -6 -9 H 3 L 7 -5 V 9 H -6 Z" stroke-linejoin="round"/>
          <line x1="-3" y1="-2" x2="4" y2="-2"/>
          <path d="M -3 4 Q -1 1 1 4 T 5 4" stroke-linecap="round"/>
        </g>
      </g>

      <text
        x="124" :y="74 + i * 90" font-family="var(--font-mono)" font-size="8.5"
        :fill="activeStep === card.num ? '#1a4b72' : '#6b6b73'"
        font-weight="500" letter-spacing="1.4"
      >{{ card.num }} · {{ items[i]?.label ?? card.fallback }}</text>

      <text x="124" :y="94 + i * 90" font-family="var(--font-display)" font-size="14.5"
        fill="#0A0A0B" font-weight="500">{{ card.title }}</text>

      <text x="124" :y="111 + i * 90" font-family="var(--font-sans)" font-size="9.5"
        fill="#6b6b73">{{ card.sub }}</text>
    </g>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  activeStep: '01' | '02' | '03' | '04';
  items: { label: string }[];
}>();

const cards = [
  { num: '01', fallback: 'PARTNERS', title: 'Partner attestations',
    sub: 'SOC 2 · ISO 27001 · GDPR' },
  { num: '02', fallback: 'IN PROGRESS', title: 'Telroi-level audits',
    sub: 'Underway · DPAs available today' },
  { num: '03', fallback: 'TELECOM', title: 'Regional regulations',
    sub: 'CLI · recording rules · per market' },
  { num: '04', fallback: 'NUMBERS', title: 'Number indemnity',
    sub: 'Executed before sensitive traffic' }
] as const;
</script>
