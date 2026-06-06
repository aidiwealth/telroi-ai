<template>
  <div class="viz-card light">
    <span class="viz-label">Voice workflow</span>
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="ext-bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1a4b72" stop-opacity="0.10"/>
          <stop offset="100%" stop-color="#1a4b72" stop-opacity="0"/>
        </radialGradient>
        <filter id="ext-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Center radial glow behind hub -->
      <circle cx="255" cy="250" r="160" fill="url(#ext-bg-glow)"/>

      <!-- Inbound call node -->
      <g transform="translate(40 220)">
        <rect width="100" height="60" rx="10" fill="#fff" stroke="#1a4b72" stroke-width="1.5"/>
        <text x="50" y="26" font-family="Geist" font-size="9" fill="#6b6b73" text-anchor="middle" letter-spacing="1">INBOUND</text>
        <text x="50" y="46" font-family="Fraunces" font-size="14" fill="#0A0A0B" text-anchor="middle">+1 800 ···</text>
      </g>

      <!-- Connection to splitter -->
      <path d="M 140 250 L 180 250" stroke="#7fa8c5" stroke-width="2" fill="none" stroke-dasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1s" repeatCount="indefinite"/>
      </path>

      <!-- Center IVR hub with Telroi logo -->
      <g transform="translate(220 215)" filter="url(#ext-glow)">
        <circle cx="35" cy="35" r="34" fill="#fff" stroke="#1a4b72" stroke-width="1.6"/>
        <circle cx="35" cy="35" r="34" fill="none" stroke="#4d83b3" stroke-width="1" opacity="0.5">
          <animate attributeName="r" values="34;46;34" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <image
          href="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/telroi-v1%20logo.png"
          x="8" y="8" width="54" height="54"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>

      <!-- Three branch routes -->
      <g stroke="#7fa8c5" stroke-width="1.6" fill="none" opacity="0.75">
        <path d="M 290 230 Q 330 180 380 130" stroke-dasharray="3 4"><animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.2s" repeatCount="indefinite"/></path>
        <path d="M 290 250 L 380 250" stroke-dasharray="3 4"><animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1s" repeatCount="indefinite"/></path>
        <path d="M 290 270 Q 330 320 380 370" stroke-dasharray="3 4"><animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.4s" repeatCount="indefinite"/></path>
      </g>

      <!-- Three destination cards -->
      <g transform="translate(380 100)">
        <rect width="90" height="60" rx="10" fill="#fff" stroke="#e8e8ea" stroke-width="1"/>
        <text x="45" y="22" font-family="Geist" font-size="9" fill="#6b6b73" text-anchor="middle" letter-spacing="1">DEPT</text>
        <text x="45" y="42" font-family="Fraunces" font-size="13" fill="#0A0A0B" text-anchor="middle">Sales</text>
      </g>
      <g transform="translate(380 220)">
        <rect width="90" height="60" rx="10" fill="#fff" stroke="#e8e8ea" stroke-width="1"/>
        <text x="45" y="22" font-family="Geist" font-size="9" fill="#6b6b73" text-anchor="middle" letter-spacing="1">AI AGENT</text>
        <text x="45" y="42" font-family="Fraunces" font-size="13" fill="#0A0A0B" text-anchor="middle">Triage</text>
      </g>
      <g transform="translate(380 340)">
        <rect width="90" height="60" rx="10" fill="#fff" stroke="#e8e8ea" stroke-width="1"/>
        <text x="45" y="22" font-family="Geist" font-size="9" fill="#6b6b73" text-anchor="middle" letter-spacing="1">WEBHOOK</text>
        <text x="45" y="42" font-family="Fraunces" font-size="13" fill="#0A0A0B" text-anchor="middle">CRM</text>
      </g>

      <!-- Event pills -->
      <g transform="translate(40 410)">
        <text x="0" y="0" font-family="Geist" font-size="10" fill="#6b6b73" letter-spacing="1">EVENTS EMITTED</text>
        <g transform="translate(0 12)">
          <g>
            <rect x="0" y="0" width="100" height="26" rx="13" fill="rgba(26,75,114,0.06)" stroke="rgba(26,75,114,0.25)" stroke-width="1"/>
            <circle cx="14" cy="13" r="3" fill="#1a4b72"/>
            <text x="26" y="17" font-family="Geist" font-size="10" fill="#1a4b72">call.answered</text>
          </g>
          <g transform="translate(110 0)">
            <rect x="0" y="0" width="100" height="26" rx="13" fill="rgba(26,75,114,0.06)" stroke="rgba(26,75,114,0.25)" stroke-width="1"/>
            <circle cx="14" cy="13" r="3" fill="#1a4b72"/>
            <text x="26" y="17" font-family="Geist" font-size="10" fill="#1a4b72">ivr.matched</text>
          </g>
          <g transform="translate(220 0)">
            <rect x="0" y="0" width="100" height="26" rx="13" fill="rgba(26,75,114,0.06)" stroke="rgba(26,75,114,0.25)" stroke-width="1"/>
            <circle cx="14" cy="13" r="3" fill="#1a4b72"/>
            <text x="26" y="17" font-family="Geist" font-size="10" fill="#1a4b72">crm.written</text>
          </g>
        </g>
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
