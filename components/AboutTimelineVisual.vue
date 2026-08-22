<template>
  <svg viewBox="0 0 420 420" style="width:100%; height:100%; position:relative; z-index:1;">
    <!-- Rail runs through the three story steps and ends at a fixed "today"
         marker, which is a state rather than a step you land on. -->
    <line x1="46" y1="96" x2="46" y2="324" stroke="#e8e8ea" stroke-width="1"/>
    <rect
      x="43" y="96" width="6" rx="3" fill="#1a4b72"
      :height="railHeight"
      style="transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
    />

    <g v-for="(s, i) in steps" :key="s.num">
      <circle
        cx="46" :cy="96 + i * 76"
        :r="activeStep === s.num ? 6 : 3.5"
        :fill="isDone(s.num) ? '#1a4b72' : '#fff'"
        :stroke="isDone(s.num) ? '#1a4b72' : '#c9c9cf'"
        stroke-width="1.5"
        style="transition: r 0.35s ease, fill 0.35s ease, stroke 0.35s ease"
      />
    </g>

    <!-- Terminal marker: always present, always live -->
    <circle cx="46" cy="324" r="5" fill="#00a872"/>
    <circle cx="46" cy="324" r="5" fill="none" stroke="#00a872" stroke-width="1.5">
      <animate attributeName="r" values="5;11;5" dur="2.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite"/>
    </circle>

    <!-- Ghosted step numeral -->
    <text
      x="86" y="196"
      font-family="var(--font-display)" font-size="100" font-weight="500"
      fill="#1a4b72" opacity="0.13"
    >{{ activeStep }}</text>

    <text x="228" y="140" font-family="var(--font-mono)" font-size="10.5"
      fill="#6b6b73" letter-spacing="1.6">{{ current.year }}</text>
    <line x1="228" y1="154" x2="400" y2="154" stroke="#e8e8ea" stroke-width="1"/>

    <g v-for="(tag, i) in current.tags" :key="tag">
      <rect
        x="228" :y="176 + i * 38" width="172" height="28" rx="14"
        fill="#fff" stroke="#e8e8ea" stroke-width="1"
      />
      <text
        x="248" :y="194 + i * 38"
        font-family="var(--font-sans)" font-size="11.5" fill="#3a3a3f"
      >{{ tag }}</text>
    </g>

    <!-- Today, stated once and permanently -->
    <text x="72" y="316" font-family="var(--font-mono)" font-size="9"
      fill="#00a872" letter-spacing="1.5">TODAY</text>
    <text x="72" y="336" font-family="var(--font-sans)" font-size="11.5" fill="#3a3a3f">
      Live and serving fast-growing
    </text>
    <text x="72" y="352" font-family="var(--font-sans)" font-size="11.5" fill="#3a3a3f">
      businesses globally
    </text>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  activeStep: '01' | '02' | '03' | '04';
  items: { label: string }[];
}>();

const steps = [
  { num: '01', year: '2024', tags: ['Patchwork stacks', 'No CLI compliance', 'No local access'] },
  { num: '02', year: '2025', tags: ['Carrier interconnects', 'Regulatory coverage', 'Compliant routes'] },
  { num: '03', year: '2026', tags: ['Routing and SIP', 'Numbers and PBX', 'AI voice layer'] }
] as const;

const current = computed(() => steps.find((s) => s.num === props.activeStep) ?? steps[0]);
const index = computed(() => steps.findIndex((s) => s.num === props.activeStep));
const railHeight = computed(() => Math.max(index.value, 0) * 76 + 6);
const isDone = (num: string) => steps.findIndex((s) => s.num === num) <= index.value;
</script>
