<template>
  <div class="viz-card light">
    <span class="viz-label">Live routing</span>
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="conn-bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1a4b72" stop-opacity="0.10"/>
          <stop offset="100%" stop-color="#1a4b72" stop-opacity="0"/>
        </radialGradient>
        <filter id="conn-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Center radial glow behind hub -->
      <circle cx="250" cy="250" r="170" fill="url(#conn-bg-glow)"/>

      <!-- Source nodes (left column) — 4 nodes, 80px spacing, centered at y=250 -->
      <g stroke="#1a4b72" stroke-width="1.5" fill="#fff">
        <circle cx="110" cy="130" r="18"/>
        <circle cx="110" cy="210" r="18"/>
        <circle cx="110" cy="290" r="18"/>
        <circle cx="110" cy="370" r="18"/>
      </g>
      <g fill="#1a4b72">
        <circle cx="110" cy="130" r="3.5"/>
        <circle cx="110" cy="210" r="3.5"/>
        <circle cx="110" cy="290" r="3.5"/>
        <circle cx="110" cy="370" r="3.5"/>
      </g>
      <!-- Source labels centered above each node -->
      <g font-family="Geist" font-size="10" fill="#3a3a3f" text-anchor="middle" letter-spacing="0.8">
        <text x="110" y="104">LAGOS</text>
        <text x="110" y="184">SAN JOSE</text>
        <text x="110" y="264">ABIDJAN</text>
        <text x="110" y="344">NAIROBI</text>
      </g>

      <!-- Connections from sources to hub -->
      <g stroke="#7fa8c5" stroke-width="1.5" fill="none" opacity="0.7">
        <path d="M 128 130 C 200 130, 230 220, 250 235" stroke-dasharray="3 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.05s" repeatCount="indefinite"/>
        </path>
        <path d="M 128 210 C 200 210, 230 240, 250 245" stroke-dasharray="3 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.2s" repeatCount="indefinite"/>
        </path>
        <path d="M 128 290 C 200 290, 230 260, 250 255" stroke-dasharray="3 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="0.95s" repeatCount="indefinite"/>
        </path>
        <path d="M 128 370 C 200 370, 230 280, 250 265" stroke-dasharray="3 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.15s" repeatCount="indefinite"/>
        </path>
      </g>

      <!-- Central hub with Telroi logo -->
      <g filter="url(#conn-glow)">
        <circle cx="250" cy="250" r="56" stroke="#a1bdd4" stroke-width="0.8" fill="none" opacity="0.55"/>
        <circle cx="250" cy="250" r="44" fill="#fff" stroke="#1a4b72" stroke-width="1.5"/>
        <circle cx="250" cy="250" r="44" fill="none" stroke="#4d83b3" stroke-width="1.2" opacity="0.5">
          <animate attributeName="r" values="44;62;44" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite"/>
        </circle>
        <image
          href="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/telroi-v1%20logo.png"
          x="222" y="222" width="56" height="56"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>

      <!-- Destination nodes (right column) — 3 nodes, 100px spacing, centered at y=250 -->
      <g stroke="#1a4b72" stroke-width="1.5" fill="#fff">
        <circle cx="390" cy="150" r="18"/>
        <circle cx="390" cy="250" r="18"/>
        <circle cx="390" cy="350" r="18"/>
      </g>
      <g fill="#1a4b72">
        <circle cx="390" cy="150" r="3.5"/>
        <circle cx="390" cy="250" r="3.5"/>
        <circle cx="390" cy="350" r="3.5"/>
      </g>
      <!-- Destination labels centered above each node -->
      <g font-family="Geist" font-size="10" fill="#3a3a3f" text-anchor="middle" letter-spacing="0.8">
        <text x="390" y="124">PSTN</text>
        <text x="390" y="224">SIP</text>
        <text x="390" y="324">MOBILE</text>
      </g>

      <!-- Output connections (hub to destinations) -->
      <g stroke="#7fa8c5" stroke-width="1.5" fill="none" opacity="0.75">
        <path d="M 280 235 C 320 200, 350 165, 372 150" stroke-dasharray="3 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.05s" repeatCount="indefinite"/>
        </path>
        <path d="M 280 250 C 320 250, 350 250, 372 250" stroke-dasharray="3 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.25s" repeatCount="indefinite"/>
        </path>
        <path d="M 280 265 C 320 300, 350 335, 372 350" stroke-dasharray="3 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="0.95s" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.viz-card { position: relative; aspect-ratio: 1 / 1; border-radius: 24px; overflow: hidden; isolation: isolate; }
.viz-card.light { background: #fff; color: var(--ink); border: 1px solid var(--rule); box-shadow: 0 18px 50px -22px rgba(10,10,11,0.18), 0 4px 14px -6px rgba(10,10,11,0.06); }
.viz-card::before {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(26,75,114,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26,75,114,0.06) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(80% 80% at 50% 50%, black, transparent 95%);
}
.viz-card svg { position: relative; z-index: 1; width: 100%; height: 100%; }
.viz-label {
  position: absolute; top: 28px; left: 28px; z-index: 2;
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--ink-soft);
}
</style>
