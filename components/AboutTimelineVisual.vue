<template>
  <svg viewBox="0 0 420 420" style="width:100%; height:100%; position:relative; z-index:1;">
    <defs>
      <linearGradient id="about-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#1a4b72" stop-opacity="0.15"/>
        <stop offset="50%" stop-color="#4d83b3" stop-opacity="1"/>
        <stop offset="100%" stop-color="#1a4b72" stop-opacity="0.3"/>
      </linearGradient>
    </defs>

    <!-- Year markers across the top -->
    <g font-family="Geist" font-size="9" fill="#6b6b73" letter-spacing="1.5" text-anchor="middle">
      <text x="80"  y="50">2024</text>
      <text x="210" y="50">2025</text>
      <text x="340" y="50">2026</text>
    </g>
    <g stroke="#e8e8ea" stroke-width="1" stroke-dasharray="2 4">
      <line x1="80"  y1="62" x2="80"  y2="380"/>
      <line x1="210" y1="62" x2="210" y2="380"/>
      <line x1="340" y1="62" x2="340" y2="380"/>
    </g>

    <!-- Center horizontal axis -->
    <line x1="50" y1="210" x2="370" y2="210" stroke="url(#about-line)" stroke-width="2"/>

    <!-- Animated traveling pulse along the axis -->
    <circle r="4" fill="#4d83b3">
      <animateMotion dur="6s" repeatCount="indefinite" path="M 50 210 L 370 210"/>
      <animate attributeName="opacity" values="0;1;1;0" dur="6s" repeatCount="indefinite"/>
    </circle>

    <!-- Background context: layered axis bands -->
    <g opacity="0.5">
      <rect x="50" y="195" width="320" height="2" fill="#e8e8ea"/>
      <rect x="50" y="223" width="320" height="2" fill="#e8e8ea"/>
    </g>

    <!-- 01 milestone (left) — 2024 The problem -->
    <g :opacity="activeStep === '01' ? 1 : 0.55">
      <line x1="80" y1="100" x2="80" y2="200" stroke="#1a4b72" stroke-width="1.2" stroke-dasharray="2 3"/>
      <rect x="10" y="100" width="140" height="56" rx="8" fill="#fff" :stroke="activeStep === '01' ? '#1a4b72' : '#e8e8ea'" stroke-width="1.5"/>
      <text x="80" y="124" font-family="Geist" font-size="10.5" :fill="activeStep === '01' ? '#1a4b72' : '#6b6b73'" font-weight="500" text-anchor="middle" letter-spacing="0.5">{{ items[0].label }}</text>
      <text x="80" y="142" font-family="Geist" font-size="9.5" fill="#3a3a3f" text-anchor="middle">Problem identified</text>
      <circle cx="80" cy="210" r="9" fill="#fff" :stroke="activeStep === '01' ? '#1a4b72' : '#a1bdd4'" stroke-width="2"/>
      <text x="80" y="214" font-family="Geist" font-size="9" :fill="activeStep === '01' ? '#1a4b72' : '#6b6b73'" font-weight="500" text-anchor="middle">01</text>
    </g>

    <!-- 02 milestone (center) — 2025 Partnerships -->
    <g :opacity="activeStep === '02' ? 1 : 0.55">
      <line x1="210" y1="220" x2="210" y2="320" stroke="#1a4b72" stroke-width="1.2" stroke-dasharray="2 3"/>
      <rect x="140" y="320" width="140" height="56" rx="8" fill="#fff" :stroke="activeStep === '02' ? '#1a4b72' : '#e8e8ea'" stroke-width="1.5"/>
      <text x="210" y="344" font-family="Geist" font-size="10.5" :fill="activeStep === '02' ? '#1a4b72' : '#6b6b73'" font-weight="500" text-anchor="middle" letter-spacing="0.5">{{ items[1].label }}</text>
      <text x="210" y="362" font-family="Geist" font-size="9.5" fill="#3a3a3f" text-anchor="middle">Secured key partnerships</text>
      <circle cx="210" cy="210" r="9" fill="#fff" :stroke="activeStep === '02' ? '#1a4b72' : '#a1bdd4'" stroke-width="2"/>
      <text x="210" y="214" font-family="Geist" font-size="9" :fill="activeStep === '02' ? '#1a4b72' : '#6b6b73'" font-weight="500" text-anchor="middle">02</text>
    </g>

    <!-- 03 milestone (right) — 2026 MVP -->
    <g :opacity="activeStep === '03' ? 1 : 0.55">
      <line x1="340" y1="100" x2="340" y2="200" stroke="#1a4b72" stroke-width="1.2" stroke-dasharray="2 3"/>
      <rect x="270" y="100" width="140" height="56" rx="8" fill="#fff" :stroke="activeStep === '03' ? '#1a4b72' : '#e8e8ea'" stroke-width="1.5"/>
      <text x="340" y="124" font-family="Geist" font-size="10.5" :fill="activeStep === '03' ? '#1a4b72' : '#6b6b73'" font-weight="500" text-anchor="middle" letter-spacing="0.5">{{ items[2].label }}</text>
      <text x="340" y="142" font-family="Geist" font-size="9.5" fill="#3a3a3f" text-anchor="middle">Platform launched</text>
      <circle cx="340" cy="210" r="9" fill="#fff" :stroke="activeStep === '03' ? '#1a4b72' : '#a1bdd4'" stroke-width="2"/>
      <text x="340" y="214" font-family="Geist" font-size="9" :fill="activeStep === '03' ? '#1a4b72' : '#6b6b73'" font-weight="500" text-anchor="middle">03</text>
    </g>

    <!-- "Today" indicator next to the rightmost milestone -->
    <g transform="translate(340 245)">
      <circle r="4" fill="#00d28a">
        <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite"/>
      </circle>
      <text x="0" y="22" font-family="Geist" font-size="9" fill="#00d28a" letter-spacing="1" text-anchor="middle">TODAY</text>
    </g>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  activeStep: '01' | '02' | '03';
  items: { label: string }[];
}>();
</script>
