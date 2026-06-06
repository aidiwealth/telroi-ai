<template>
  <svg viewBox="0 0 420 420" style="width:100%; height:100%; position:relative; z-index:1;">
    <defs>
      <radialGradient id="sec-bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#1a4b72" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#1a4b72" stop-opacity="0"/>
      </radialGradient>
      <filter id="sec-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <circle cx="210" cy="210" r="195" fill="url(#sec-bg)"/>

    <!-- Outer monitoring layer (03) — dashed broken arc -->
    <g :opacity="activeStep === '03' ? 1 : 0.45">
      <circle cx="210" cy="210" r="170" fill="none" :stroke="activeStep === '03' ? '#1a4b72' : '#c8d0d8'" stroke-width="1.5" stroke-dasharray="10 6"/>
      <!-- Sentry dots distributed around the perimeter (kept clear of label slot at top) -->
      <g :fill="activeStep === '03' ? '#1a4b72' : '#a1bdd4'">
        <circle cx="370" cy="170" r="4"/>
        <circle cx="320" cy="340" r="4"/>
        <circle cx="100" cy="340" r="4"/>
        <circle cx="50" cy="170" r="4"/>
      </g>
    </g>

    <!-- Mid access-control layer (02) — solid ring with notches -->
    <g :opacity="activeStep === '02' ? 1 : 0.45">
      <circle cx="210" cy="210" r="125" fill="none" :stroke="activeStep === '02' ? '#1a4b72' : '#c8d0d8'" stroke-width="1.5"/>
      <!-- Access "gates" -->
      <g :fill="activeStep === '02' ? '#1a4b72' : '#a1bdd4'">
        <rect x="206" y="80" width="8" height="12" rx="2"/>
        <rect x="206" y="328" width="8" height="12" rx="2"/>
        <rect x="80" y="206" width="12" height="8" rx="2"/>
      </g>
    </g>

    <!-- Inner encryption layer (01) — solid filled ring -->
    <g :opacity="activeStep === '01' ? 1 : 0.55">
      <circle cx="210" cy="210" r="82" fill="rgba(26,75,114,0.06)" :stroke="activeStep === '01' ? '#1a4b72' : '#a1bdd4'" stroke-width="1.5"/>
      <!-- Encryption "lock bumps" around the ring -->
      <g :fill="activeStep === '01' ? '#1a4b72' : '#a1bdd4'">
        <circle cx="262" cy="148" r="3"/>
        <circle cx="292" cy="210" r="3"/>
        <circle cx="262" cy="272" r="3"/>
        <circle cx="210" cy="292" r="3"/>
        <circle cx="158" cy="272" r="3"/>
        <circle cx="128" cy="210" r="3"/>
        <circle cx="158" cy="148" r="3"/>
        <circle cx="210" cy="128" r="3"/>
      </g>
    </g>

    <!-- Labels: numbered circle marker + caption below, all centered.
         Slot allocation:
           01 ENCRYPTION  → top-center (above the outer ring)
           02 ACCESS      → right edge
           03 MONITORING  → left edge
         This avoids overlap with ring strokes and keeps captions roomy. -->

    <!-- 01 label (top) -->
    <g :opacity="activeStep === '01' ? 1 : 0.6" transform="translate(210 35)">
      <circle r="14" fill="#fff" :stroke="activeStep === '01' ? '#1a4b72' : '#a1bdd4'" stroke-width="1.5"/>
      <text y="4" text-anchor="middle" font-family="Geist" font-size="11" :fill="activeStep === '01' ? '#1a4b72' : '#6b6b73'" font-weight="500">01</text>
      <text y="35" text-anchor="middle" font-family="Geist" font-size="9" fill="#3a3a3f" letter-spacing="0.8">{{ items[0].label }}</text>
    </g>

    <!-- 02 label (right) — pulled inward, smaller text to keep ACCESS CONTROL fully visible -->
    <g :opacity="activeStep === '02' ? 1 : 0.6" transform="translate(360 210)">
      <circle r="14" fill="#fff" :stroke="activeStep === '02' ? '#1a4b72' : '#a1bdd4'" stroke-width="1.5"/>
      <text y="4" text-anchor="middle" font-family="Geist" font-size="11" :fill="activeStep === '02' ? '#1a4b72' : '#6b6b73'" font-weight="500">02</text>
      <text y="35" text-anchor="middle" font-family="Geist" font-size="9" fill="#3a3a3f" letter-spacing="0.8">{{ items[1].label }}</text>
    </g>

    <!-- 03 label (left) — pulled inward, smaller text to keep MONITORING fully visible -->
    <g :opacity="activeStep === '03' ? 1 : 0.6" transform="translate(60 210)">
      <circle r="14" fill="#fff" :stroke="activeStep === '03' ? '#1a4b72' : '#a1bdd4'" stroke-width="1.5"/>
      <text y="4" text-anchor="middle" font-family="Geist" font-size="11" :fill="activeStep === '03' ? '#1a4b72' : '#6b6b73'" font-weight="500">03</text>
      <text y="35" text-anchor="middle" font-family="Geist" font-size="9" fill="#3a3a3f" letter-spacing="0.8">{{ items[2].label }}</text>
    </g>

    <!-- Central protected asset — Telroi logo -->
    <g transform="translate(210 210)" filter="url(#sec-glow)">
      <circle r="44" fill="#fff" stroke="#e8e8ea" stroke-width="1.5"/>
      <circle r="44" fill="none" stroke="#4d83b3" stroke-width="1.2" opacity="0.5">
        <animate attributeName="r" values="44;64;44" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite"/>
      </circle>
      <image
        href="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/telroi-v1%20logo.png"
        x="-26" y="-26" width="52" height="52"
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  activeStep: '01' | '02' | '03';
  items: { label: string }[];
}>();
</script>
