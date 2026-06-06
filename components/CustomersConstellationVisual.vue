<template>
  <svg viewBox="0 0 420 420" style="width:100%; height:100%; position:relative; z-index:1;">
    <defs>
      <radialGradient id="cust-bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#1a4b72" stop-opacity="0.10"/>
        <stop offset="100%" stop-color="#1a4b72" stop-opacity="0"/>
      </radialGradient>
      <filter id="cust-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.5" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <!-- Background field -->
    <circle cx="210" cy="210" r="195" fill="url(#cust-bg)"/>

    <!-- Lat/long-style grid arcs (a faint globe vibe) -->
    <g stroke="#e8e8ea" stroke-width="0.8" fill="none" opacity="0.7">
      <ellipse cx="210" cy="210" rx="170" ry="170"/>
      <ellipse cx="210" cy="210" rx="170" ry="100"/>
      <ellipse cx="210" cy="210" rx="170" ry="40"/>
      <line x1="40" y1="210" x2="380" y2="210" stroke-dasharray="2 5"/>
      <line x1="210" y1="40" x2="210" y2="380" stroke-dasharray="2 5"/>
    </g>

    <!-- Distributed micro-dots scattered across the field (constellation) -->
    <g fill="#c8d0d8">
      <circle cx="90" cy="120" r="1.5"/>
      <circle cx="130" cy="100" r="1"/>
      <circle cx="290" cy="105" r="1.5"/>
      <circle cx="330" cy="135" r="1"/>
      <circle cx="65" cy="225" r="1.5"/>
      <circle cx="355" cy="220" r="1"/>
      <circle cx="100" cy="320" r="1.5"/>
      <circle cx="140" cy="345" r="1"/>
      <circle cx="290" cy="335" r="1.5"/>
      <circle cx="325" cy="305" r="1"/>
      <circle cx="195" cy="80" r="1"/>
      <circle cx="225" cy="355" r="1"/>
    </g>

    <!-- Segment clusters — three customer types -->
    <!-- 01 BANKS & FINTECH (top) -->
    <g :opacity="activeStep === '01' ? 1 : 0.55">
      <!-- cluster of 4 satellite dots -->
      <g fill="#4d83b3">
        <circle cx="170" cy="95" r="3"/>
        <circle cx="195" cy="78" r="3"/>
        <circle cx="225" cy="78" r="3"/>
        <circle cx="250" cy="95" r="3"/>
      </g>
      <!-- main labeled node -->
      <g transform="translate(210 65)">
        <circle r="22" fill="#fff" :stroke="activeStep === '01' ? '#1a4b72' : '#e8e8ea'" stroke-width="1.5"/>
        <text y="5" text-anchor="middle" font-family="Geist" font-size="12" :fill="activeStep === '01' ? '#1a4b72' : '#6b6b73'" font-weight="500">01</text>
        <text y="-30" text-anchor="middle" font-family="Geist" font-size="10" fill="#3a3a3f" letter-spacing="1">{{ items[0].label }}</text>
      </g>
    </g>

    <!-- 02 CPAAS (bottom-right) -->
    <g :opacity="activeStep === '02' ? 1 : 0.55">
      <g fill="#4d83b3">
        <circle cx="298" cy="225" r="3"/>
        <circle cx="320" cy="245" r="3"/>
        <circle cx="345" cy="270" r="3"/>
        <circle cx="320" cy="295" r="3"/>
      </g>
      <g transform="translate(340 300)">
        <circle r="22" fill="#fff" :stroke="activeStep === '02' ? '#1a4b72' : '#e8e8ea'" stroke-width="1.5"/>
        <text y="5" text-anchor="middle" font-family="Geist" font-size="12" :fill="activeStep === '02' ? '#1a4b72' : '#6b6b73'" font-weight="500">02</text>
        <text y="44" text-anchor="middle" font-family="Geist" font-size="10" fill="#3a3a3f" letter-spacing="1">{{ items[1].label }}</text>
      </g>
    </g>

    <!-- 03 HIGH-VOLUME (bottom-left) -->
    <g :opacity="activeStep === '03' ? 1 : 0.55">
      <g fill="#4d83b3">
        <circle cx="122" cy="225" r="3"/>
        <circle cx="100" cy="245" r="3"/>
        <circle cx="75" cy="270" r="3"/>
        <circle cx="100" cy="295" r="3"/>
      </g>
      <g transform="translate(80 300)">
        <circle r="22" fill="#fff" :stroke="activeStep === '03' ? '#1a4b72' : '#e8e8ea'" stroke-width="1.5"/>
        <text y="5" text-anchor="middle" font-family="Geist" font-size="12" :fill="activeStep === '03' ? '#1a4b72' : '#6b6b73'" font-weight="500">03</text>
        <text y="44" text-anchor="middle" font-family="Geist" font-size="10" fill="#3a3a3f" letter-spacing="1">{{ items[2].label }}</text>
      </g>
    </g>

    <!-- Animated curved connectors from segments to center -->
    <g stroke="#4d83b3" stroke-width="1.2" fill="none" opacity="0.55">
      <path d="M 210 87 Q 210 140, 210 180" stroke-dasharray="3 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2.5s" repeatCount="indefinite"/>
      </path>
      <path d="M 318 292 Q 280 270, 240 230" stroke-dasharray="3 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2.2s" repeatCount="indefinite"/>
      </path>
      <path d="M 102 292 Q 140 270, 180 230" stroke-dasharray="3 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2.8s" repeatCount="indefinite"/>
      </path>
    </g>

    <!-- Central Telroi hub with logo image -->
    <g transform="translate(210 210)" filter="url(#cust-glow)">
      <circle r="40" fill="#fff" stroke="#e8e8ea" stroke-width="1.5"/>
      <circle r="40" fill="none" stroke="#4d83b3" stroke-width="1.2" opacity="0.5">
        <animate attributeName="r" values="40;58;40" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle r="30" fill="none" stroke="#7fa8c5" stroke-width="0.8" opacity="0.55"/>
      <image
        href="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/telroi-v1%20logo.png"
        x="-22" y="-22" width="44" height="44"
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
