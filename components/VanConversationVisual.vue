<template>
  <div class="viz-card dark">
    <span class="viz-label">Inbound · 09:42</span>
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <!-- Conversation bubbles -->
      <g transform="translate(40 60)">
        <g>
          <rect x="0" y="0" width="240" height="42" rx="14" fill="rgba(255,255,255,0.08)"/>
          <text x="16" y="26" font-family="Geist" font-size="11.5" fill="rgba(255,255,255,0.85)">Hey, are you guys open this Sunday?</text>
        </g>
        <g transform="translate(140 60)">
          <rect x="0" y="0" width="280" height="62" rx="14" fill="#1a4b72"/>
          <text x="16" y="24" font-family="Geist" font-size="11.5" fill="#fff">Hi there! Yes, we're open Sunday</text>
          <text x="16" y="44" font-family="Geist" font-size="11.5" fill="#fff">from 10 to 4. Want me to book you?</text>
        </g>
        <g transform="translate(0 140)">
          <rect x="0" y="0" width="210" height="42" rx="14" fill="rgba(255,255,255,0.08)"/>
          <text x="16" y="26" font-family="Geist" font-size="11.5" fill="rgba(255,255,255,0.85)">That'd be great. Around eleven works.</text>
        </g>
        <g transform="translate(140 200)">
          <rect x="0" y="0" width="280" height="62" rx="14" fill="#1a4b72"/>
          <text x="16" y="24" font-family="Geist" font-size="11.5" fill="#fff">You're all set for 11 AM. I'll text</text>
          <text x="16" y="44" font-family="Geist" font-size="11.5" fill="#fff">you a confirmation in a sec.</text>
        </g>
      </g>

      <!-- Animated waveform -->
      <g transform="translate(60 340)">
        <path d="M 0 0 Q 50 -16 100 0 T 200 0 T 300 0 T 380 0" stroke="#7fa8c5" stroke-width="1.5" fill="none" opacity="0.5">
          <animate attributeName="d"
                   values="M 0 0 Q 50 -16 100 0 T 200 0 T 300 0 T 380 0;M 0 0 Q 50 16 100 0 T 200 0 T 300 0 T 380 0;M 0 0 Q 50 -16 100 0 T 200 0 T 300 0 T 380 0"
                   dur="2.4s" repeatCount="indefinite"/>
        </path>
        <path d="M 0 0 Q 50 -10 100 0 T 200 0 T 300 0 T 380 0" stroke="#fff" stroke-width="1.2" fill="none" opacity="0.7">
          <animate attributeName="d"
                   values="M 0 0 Q 50 -10 100 0 T 200 0 T 300 0 T 380 0;M 0 0 Q 50 10 100 0 T 200 0 T 300 0 T 380 0;M 0 0 Q 50 -10 100 0 T 200 0 T 300 0 T 380 0"
                   dur="1.8s" repeatCount="indefinite"/>
        </path>
        <path d="M 0 0 Q 50 -6 100 0 T 200 0 T 300 0 T 380 0" stroke="#a1bdd4" stroke-width="1" fill="none" opacity="0.4">
          <animate attributeName="d"
                   values="M 0 0 Q 50 -6 100 0 T 200 0 T 300 0 T 380 0;M 0 0 Q 50 6 100 0 T 200 0 T 300 0 T 380 0;M 0 0 Q 50 -6 100 0 T 200 0 T 300 0 T 380 0"
                   dur="3s" repeatCount="indefinite"/>
        </path>
      </g>

      <!-- Phone number card -->
      <g transform="translate(40 400)">
        <rect width="420" height="70" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <text x="22" y="32" font-family="Fraunces" font-size="22" fill="#fff">+1 (800) TEL-ROI8</text>
        <text x="22" y="54" font-family="Geist" font-size="9.5" fill="rgba(255,255,255,0.5)" letter-spacing="1">DEDICATED AI BUSINESS NUMBER · LIVE</text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.viz-card { position: relative; aspect-ratio: 1 / 1; border-radius: 24px; overflow: hidden; isolation: isolate; }
.viz-card.dark { background: #0A0A0B; color: #fff; border: 1px solid rgba(255,255,255,0.08); }
.viz-card::before {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(80% 80% at 50% 50%, black, transparent 95%);
}
.viz-card::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(50% 80% at 30% 20%, rgba(26,75,114,0.35), transparent 70%),
    radial-gradient(60% 80% at 90% 90%, rgba(0,210,138,0.10), transparent 70%);
}
.viz-card svg { position: relative; z-index: 1; width: 100%; height: 100%; }
.viz-label {
  position: absolute; top: 28px; left: 28px; z-index: 2;
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em;
  text-transform: uppercase; color: rgba(255,255,255,0.55);
}
</style>
