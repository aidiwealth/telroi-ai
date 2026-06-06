<template>
  <svg viewBox="0 0 420 420" style="width:100%; height:100%; position:relative; z-index:1;">
    <defs>
      <linearGradient id="comp-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1a4b72" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#1a4b72" stop-opacity="0"/>
      </linearGradient>
    </defs>

    <!-- Soft framed background -->
    <rect x="40" y="40" width="340" height="340" rx="14" fill="url(#comp-bg)"/>

    <!-- Background grid lines -->
    <g stroke="#e8e8ea" stroke-width="1" opacity="0.5">
      <line x1="40" y1="140" x2="380" y2="140"/>
      <line x1="40" y1="210" x2="380" y2="210"/>
      <line x1="40" y1="280" x2="380" y2="280"/>
    </g>

    <!-- 01 PARTNER attestations card (top, slightly rotated for stack feel) -->
    <g :opacity="activeStep === '01' ? 1 : 0.55" transform="rotate(-2 210 130)">
      <rect x="65" y="85" width="290" height="90" rx="12" fill="#fff" :stroke="activeStep === '01' ? '#1a4b72' : '#e8e8ea'" stroke-width="1.5" filter="url(#comp-shadow)"/>
      <!-- Badge ribbon with check -->
      <g transform="translate(95 120)">
        <circle r="20" fill="rgba(26,75,114,0.08)" :stroke="activeStep === '01' ? '#1a4b72' : '#a1bdd4'" stroke-width="1.5"/>
        <path d="M -8 -2 l5 5 l11 -11" stroke="#1a4b72" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <text x="135" y="115" font-family="Geist" font-size="9" :fill="activeStep === '01' ? '#1a4b72' : '#6b6b73'" font-weight="500" letter-spacing="1.5">01 · {{ items[0].label }}</text>
      <text x="135" y="135" font-family="Fraunces" font-size="16" fill="#0A0A0B" font-weight="500">Partner attestations</text>
      <text x="135" y="155" font-family="Geist" font-size="10" fill="#6b6b73">SOC 2 · ISO 27001 · GDPR — held today</text>
    </g>

    <!-- 02 IN PROGRESS card (middle, straight) — with transparent progress indicator -->
    <g :opacity="activeStep === '02' ? 1 : 0.55">
      <rect x="55" y="180" width="310" height="90" rx="12" fill="#fff" :stroke="activeStep === '02' ? '#1a4b72' : '#e8e8ea'" stroke-width="1.5"/>
      <!-- Hourglass / progress badge -->
      <g transform="translate(85 225)">
        <circle r="20" fill="rgba(26,75,114,0.08)" :stroke="activeStep === '02' ? '#1a4b72' : '#a1bdd4'" stroke-width="1.5"/>
        <!-- Hourglass icon -->
        <path d="M -7 -8 H 7 L -7 8 H 7 Z" :stroke="activeStep === '02' ? '#1a4b72' : '#a1bdd4'" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
        <line x1="-9" y1="-8" x2="9" y2="-8" :stroke="activeStep === '02' ? '#1a4b72' : '#a1bdd4'" stroke-width="1.5"/>
        <line x1="-9" y1="8"  x2="9" y2="8"  :stroke="activeStep === '02' ? '#1a4b72' : '#a1bdd4'" stroke-width="1.5"/>
      </g>
      <text x="125" y="210" font-family="Geist" font-size="9" :fill="activeStep === '02' ? '#1a4b72' : '#6b6b73'" font-weight="500" letter-spacing="1.5">02 · {{ items[1].label }}</text>
      <text x="125" y="230" font-family="Fraunces" font-size="16" fill="#0A0A0B" font-weight="500">Telroi SOC 2 &amp; ISO 27001</text>
      <text x="125" y="250" font-family="Geist" font-size="10" fill="#6b6b73">Actively in progress — DPAs available today</text>
    </g>

    <!-- 03 TELECOM card (bottom, slight opposite rotation) -->
    <g :opacity="activeStep === '03' ? 1 : 0.55" transform="rotate(2 210 320)">
      <rect x="65" y="275" width="290" height="90" rx="12" fill="#fff" :stroke="activeStep === '03' ? '#1a4b72' : '#e8e8ea'" stroke-width="1.5"/>
      <!-- Globe/region badge -->
      <g transform="translate(95 320)">
        <circle r="20" fill="rgba(26,75,114,0.08)" :stroke="activeStep === '03' ? '#1a4b72' : '#a1bdd4'" stroke-width="1.5"/>
        <circle r="12" fill="none" :stroke="activeStep === '03' ? '#1a4b72' : '#a1bdd4'" stroke-width="1.2"/>
        <ellipse cx="0" cy="0" rx="12" ry="5" fill="none" :stroke="activeStep === '03' ? '#1a4b72' : '#a1bdd4'" stroke-width="1.2"/>
        <line x1="-12" y1="0" x2="12" y2="0" :stroke="activeStep === '03' ? '#1a4b72' : '#a1bdd4'" stroke-width="1.2"/>
      </g>
      <text x="135" y="305" font-family="Geist" font-size="9" :fill="activeStep === '03' ? '#1a4b72' : '#6b6b73'" font-weight="500" letter-spacing="1.5">03 · {{ items[2].label }}</text>
      <text x="135" y="325" font-family="Fraunces" font-size="16" fill="#0A0A0B" font-weight="500">Regional regulations</text>
      <text x="135" y="345" font-family="Geist" font-size="10" fill="#6b6b73">CLI compliance · recording rules · per market</text>
    </g>

    <!-- Active indicator dot — animates between the three rows -->
    <circle r="3" fill="#00d28a">
      <animate
        attributeName="cy"
        :values="activeStep === '01' ? '130;130' : activeStep === '02' ? '225;225' : '320;320'"
        dur="0.4s"
        fill="freeze"
      />
      <animate attributeName="cx" values="370;370" dur="0.4s" fill="freeze"/>
      <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite"/>
    </circle>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  activeStep: '01' | '02' | '03';
  items: { label: string }[];
}>();
</script>
