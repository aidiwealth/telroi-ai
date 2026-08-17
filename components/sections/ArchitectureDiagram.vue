<template>
  <section class="diagram-section">
    <div class="wrap">
      <div class="panel">
        <div class="panel-inner">
          <div class="sec-head reveal">
            <div class="kicker">Architecture</div>
            <h2 class="sec-title">
              <span>One programmable layer between</span> <em>your business</em> <span>and voice networks.</span>
            </h2>
            <p class="sec-lede">
              Every call — inbound, outbound, AI-handled or human-answered — flows through a
              single layer that routes, automates and monitors in real time.
            </p>
          </div>

          <div class="diagram-wrap reveal">
            <svg class="arch-svg" viewBox="0 0 1100 620" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="tile-shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000" flood-opacity="0.35"/>
                </filter>
                <linearGradient id="card-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#1a1a22"/>
                  <stop offset="100%" stop-color="#0e0e14"/>
                </linearGradient>
              </defs>

              <!-- Side labels -->
              <text x="32" y="310" class="side-label" transform="rotate(-90 32 310)" text-anchor="middle">150+ SOURCES</text>
              <text x="1068" y="310" class="side-label" transform="rotate(90 1068 310)" text-anchor="middle">550+ DESTINATIONS</text>

              <!-- LEFT SOURCES -->
              <text x="170" y="118" class="tile-name" text-anchor="middle">Carrier Networks</text>
              <g filter="url(#tile-shadow)">
                <rect x="125" y="130" width="90" height="90" rx="16" fill="#ffffff"/>
                <g transform="translate(143 148)">
                  <rect x="0" y="0" width="54" height="54" rx="6" fill="none" stroke="#1a4b72" stroke-width="3"/>
                  <rect x="12" y="14" width="30" height="22" rx="2" fill="#1a4b72" opacity="0.15"/>
                  <path d="M12 20 L42 20 M12 26 L42 26 M22 14 L22 36 M32 14 L32 36" stroke="#1a4b72" stroke-width="2"/>
                </g>
              </g>

              <text x="170" y="288" class="tile-name" text-anchor="middle">Your Business</text>
              <g filter="url(#tile-shadow)">
                <rect x="125" y="300" width="90" height="90" rx="16" fill="#ffffff"/>
                <g transform="translate(140 318)">
                  <rect x="8" y="6" width="44" height="48" rx="3" fill="none" stroke="#1a4b72" stroke-width="2.5"/>
                  <rect x="14" y="14" width="6" height="6" fill="#1a4b72"/>
                  <rect x="26" y="14" width="6" height="6" fill="#1a4b72"/>
                  <rect x="38" y="14" width="6" height="6" fill="#1a4b72"/>
                  <rect x="14" y="26" width="6" height="6" fill="#1a4b72"/>
                  <rect x="26" y="26" width="6" height="6" fill="#1a4b72"/>
                  <rect x="38" y="26" width="6" height="6" fill="#1a4b72"/>
                  <rect x="14" y="38" width="6" height="6" fill="#1a4b72"/>
                  <rect x="38" y="38" width="6" height="6" fill="#1a4b72"/>
                  <rect x="24" y="40" width="12" height="14" fill="#1a4b72"/>
                </g>
              </g>

              <text x="170" y="458" class="tile-name" text-anchor="middle">AI Voice Agents</text>
              <g filter="url(#tile-shadow)">
                <rect x="125" y="470" width="90" height="90" rx="16" fill="#ffffff"/>
                <g transform="translate(140 488)">
                  <path d="M10 30 Q10 10 30 10 Q50 10 50 30 L50 42" fill="none" stroke="#1a4b72" stroke-width="2.5" stroke-linecap="round"/>
                  <rect x="6" y="30" width="12" height="20" rx="3" fill="#1a4b72"/>
                  <rect x="42" y="30" width="12" height="20" rx="3" fill="#1a4b72"/>
                  <path d="M48 50 Q48 56 42 56 L34 56" fill="none" stroke="#1a4b72" stroke-width="2.5" stroke-linecap="round"/>
                  <circle cx="30" cy="22" r="2.5" fill="#1a4b72"/>
                </g>
              </g>

              <!-- CENTER CARD -->
              <rect x="370" y="125" width="360" height="380" rx="22" class="center-card-glow" opacity="0.6"/>
              <rect x="375" y="130" width="350" height="370" rx="20" class="center-card-glow" opacity="0.3"/>
              <rect x="380" y="135" width="340" height="360" rx="18" fill="url(#card-grad)" stroke="rgba(255,255,255,0.10)" stroke-width="1" filter="url(#tile-shadow)"/>

              <g transform="translate(404 165)">
                <circle cx="6" cy="6" r="5" fill="#00d28a">
                  <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite"/>
                </circle>
                <text x="20" y="10" style="font-family: 'Geist', sans-serif; font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; fill: #00d28a;">LIVE INBOUND CALL</text>
              </g>

              <g transform="translate(404 200)">
                <circle cx="28" cy="28" r="28" fill="#4d83b3" opacity="0.15"/>
                <circle cx="28" cy="28" r="27" fill="none" stroke="#4d83b3" stroke-width="1.5"/>
                <circle cx="28" cy="22" r="8" fill="#7fa8c5"/>
                <path d="M12 48 Q12 36 28 36 Q44 36 44 48 Z" fill="#7fa8c5"/>
                <text x="72" y="22" class="card-name">Nicola Davis</text>
                <text x="72" y="44" class="card-meta">+1 (415) 555 · 0142</text>
              </g>

              <line x1="400" y1="290" x2="700" y2="290" class="center-divider"/>

              <g transform="translate(404 312)">
                <g class="card-icon">
                  <circle cx="3" cy="6" r="2.4" fill="none" stroke="#4d83b3" stroke-width="1.8"/>
                  <circle cx="3" cy="18" r="2.4" fill="none" stroke="#4d83b3" stroke-width="1.8"/>
                  <circle cx="20" cy="12" r="2.4" fill="#4d83b3"/>
                  <path d="M6 6 H12 a4 4 0 0 1 4 4" stroke="#4d83b3" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                  <path d="M6 18 H12 a4 4 0 0 0 4 -4" stroke="#4d83b3" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                </g>
                <text x="36" y="14" class="card-row-label">Routed to</text>
                <text x="36" y="34" class="card-row-value">Sales · Lagos team</text>
              </g>

              <line x1="400" y1="360" x2="700" y2="360" class="center-divider"/>

              <g transform="translate(404 382)">
                <g class="card-icon">
                  <path d="M2 4 a2 2 0 0 1 2 -2 h3 l2 5 l-3 2 a12 12 0 0 0 6 6 l2 -3 l5 2 v3 a2 2 0 0 1 -2 2 a18 18 0 0 1 -15 -15 z"
                        fill="none" stroke="#4d83b3" stroke-width="1.8" stroke-linejoin="round"/>
                </g>
                <text x="36" y="14" class="card-row-label">Last interaction</text>
                <text x="36" y="34" class="card-row-value">Inbound call · 3 days ago</text>
              </g>

              <line x1="400" y1="430" x2="700" y2="430" class="center-divider"/>

              <g transform="translate(404 452)">
                <g class="card-icon">
                  <path d="M12 0 L22 4 V12 C 22 18 18 22 12 24 C 6 22 2 18 2 12 V4 Z" fill="none" stroke="#4d83b3" stroke-width="1.8" stroke-linejoin="round"/>
                  <path d="M7 12 l3 3 l6 -7" stroke="#4d83b3" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <text x="36" y="14" class="card-row-label">Quality score</text>
                <text x="36" y="34" class="card-row-value">98 · trusted route</text>
              </g>

              <!-- RIGHT DESTINATIONS -->
              <text x="930" y="68" class="tile-name" text-anchor="middle">Pipedrive</text>
              <g filter="url(#tile-shadow)">
                <rect x="885" y="80" width="90" height="90" rx="16" fill="#ffffff"/>
                <image href="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/pipedrive.png" x="900" y="95" width="60" height="60" preserveAspectRatio="xMidYMid meet"/>
              </g>

              <text x="930" y="238" class="tile-name" text-anchor="middle">Zoho</text>
              <g filter="url(#tile-shadow)">
                <rect x="885" y="250" width="90" height="90" rx="16" fill="#ffffff"/>
                <image href="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/zoho.png" x="900" y="265" width="60" height="60" preserveAspectRatio="xMidYMid meet"/>
              </g>

              <text x="930" y="468" class="tile-name" text-anchor="middle">Webhooks</text>
              <g filter="url(#tile-shadow)">
                <rect x="885" y="480" width="90" height="90" rx="16" fill="#ffffff"/>
                <g transform="translate(908 504)">
                  <circle cx="12" cy="14" r="6" fill="none" stroke="#1a4b72" stroke-width="2.5"/>
                  <circle cx="32" cy="32" r="6" fill="none" stroke="#1a4b72" stroke-width="2.5"/>
                  <circle cx="36" cy="8" r="6" fill="none" stroke="#1a4b72" stroke-width="2.5"/>
                  <path d="M16 18 L28 28" stroke="#1a4b72" stroke-width="2.5" stroke-linecap="round"/>
                  <path d="M16 14 L32 8" stroke="#1a4b72" stroke-width="2.5" stroke-linecap="round"/>
                </g>
              </g>

              <!-- CURVED CONNECTORS -->
              <path class="link-curve" d="M 215 175 C 290 175 320 250 380 250"/>
              <path class="link-curve" d="M 215 345 C 290 345 320 320 380 320"/>
              <path class="link-curve" d="M 215 515 C 290 515 320 400 380 400"/>
              <path class="link-curve" d="M 720 220 C 790 220 815 125 885 125"/>
              <path class="link-curve" d="M 720 300 C 790 300 815 295 885 295"/>
              <path class="link-curve" d="M 720 400 C 790 400 815 525 885 525"/>

              <!-- Animated traveling dots -->
              <circle r="3.5" fill="#7fa8c5">
                <animateMotion dur="3.4s" repeatCount="indefinite" path="M 215 175 C 290 175 320 250 380 250"/>
                <animate attributeName="opacity" values="0;1;1;0" dur="3.4s" repeatCount="indefinite"/>
              </circle>
              <circle r="3.5" fill="#7fa8c5">
                <animateMotion dur="4s" repeatCount="indefinite" begin="0.5s" path="M 215 345 C 290 345 320 320 380 320"/>
                <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="0.5s" repeatCount="indefinite"/>
              </circle>
              <circle r="3.5" fill="#7fa8c5">
                <animateMotion dur="3.8s" repeatCount="indefinite" begin="1s" path="M 215 515 C 290 515 320 400 380 400"/>
                <animate attributeName="opacity" values="0;1;1;0" dur="3.8s" begin="1s" repeatCount="indefinite"/>
              </circle>
              <circle r="3.5" fill="#7fa8c5">
                <animateMotion dur="3.2s" repeatCount="indefinite" path="M 720 220 C 790 220 815 125 885 125"/>
                <animate attributeName="opacity" values="0;1;1;0" dur="3.2s" repeatCount="indefinite"/>
              </circle>
              <circle r="3.5" fill="#7fa8c5">
                <animateMotion dur="3.6s" repeatCount="indefinite" begin="0.4s" path="M 720 300 C 790 300 815 295 885 295"/>
                <animate attributeName="opacity" values="0;1;1;0" dur="3.6s" begin="0.4s" repeatCount="indefinite"/>
              </circle>
              <circle r="3.5" fill="#7fa8c5">
                <animateMotion dur="4.2s" repeatCount="indefinite" begin="0.8s" path="M 720 400 C 790 400 815 525 885 525"/>
                <animate attributeName="opacity" values="0;1;1;0" dur="4.2s" begin="0.8s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.diagram-section { padding: 80px 0; }
.diagram-section .panel {
  background: var(--ink);
  color: #fff;
  padding: 100px 56px;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
}
.diagram-section .panel-inner {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}
@media (max-width: 820px) {
  .diagram-section { padding: 56px 0; }
  .diagram-section .panel { padding: 64px 16px; border-radius: 22px; }

  /* The diagram is 1100x620. Scaled to a phone's width it came out about
     150px tall, inside a wrap still holding min-height 580px — a tall empty
     box around a diagram too small to read. Drop the reserved height and let
     it keep a legible size, scrolling sideways instead of shrinking. */
  .diagram-wrap {
    min-height: 0;
    margin-top: 36px;
    padding: 28px 0;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }
  .arch-svg { min-width: 640px; }
}
.diagram-section :deep(.kicker) { color: #7fa8c5; }
.diagram-section :deep(.sec-title) { color: #fff; }
.diagram-section :deep(.sec-title em) { color: rgba(255,255,255,0.5); }
.diagram-section :deep(.sec-lede) { color: rgba(255,255,255,0.7); }
.diagram-section .panel::before {
  content: ""; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
  mask-image: radial-gradient(60% 80% at 50% 50%, black, transparent 90%);
}
.diagram-wrap {
  position: relative;
  margin-top: 60px;
  border-radius: 16px;
  background: radial-gradient(80% 100% at 50% 0%, rgba(26,75,114,0.14), transparent 70%);
  padding: 56px 24px;
  min-height: 580px;
}
.arch-svg { width: 100%; height: auto; display: block; }
.arch-svg :deep(.side-label) {
  fill: rgba(255,255,255,0.55);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 500;
}
.arch-svg :deep(.tile-name) {
  fill: rgba(255,255,255,0.85);
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.005em;
}
.arch-svg :deep(.link-curve) {
  stroke: #4d83b3;
  stroke-width: 2;
  fill: none;
  filter: drop-shadow(0 0 4px rgba(77, 131, 179, 0.5));
}
.arch-svg :deep(.center-divider) {
  stroke: rgba(255,255,255,0.10);
  stroke-width: 1;
}
.arch-svg :deep(.card-name) {
  fill: #fff;
  font-family: var(--font-display);
  font-size: 21px;
  font-weight: 500;
  letter-spacing: -0.015em;
}
.arch-svg :deep(.card-meta) {
  fill: rgba(255,255,255,0.55);
  font-family: var(--font-sans);
  font-size: 12px;
}
.arch-svg :deep(.card-row-label) {
  fill: #fff;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
}
.arch-svg :deep(.card-row-value) {
  fill: rgba(255,255,255,0.6);
  font-family: var(--font-sans);
  font-size: 12px;
}
.arch-svg :deep(.card-icon) { fill: #4d83b3; }
.arch-svg :deep(.center-card-glow) {
  fill: none;
  stroke: rgba(77, 131, 179, 0.25);
  stroke-width: 1;
}
</style>
