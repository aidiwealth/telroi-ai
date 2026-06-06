<template>
  <div class="viz-card light">
    <span class="viz-label">Optimize · live signal</span>
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="opt-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#4d83b3" stop-opacity="0.4"/>
          <stop offset="50%" stop-color="#1a4b72" stop-opacity="1"/>
          <stop offset="100%" stop-color="#4d83b3" stop-opacity="0.5"/>
        </linearGradient>
        <linearGradient id="opt-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4d83b3" stop-opacity="0.18"/>
          <stop offset="100%" stop-color="#4d83b3" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <!-- KPI cards -->
      <g transform="translate(40 50)">
        <rect width="130" height="80" rx="12" fill="#fff" stroke="#e8e8ea"/>
        <text x="16" y="24" font-family="Geist" font-size="9" fill="#6b6b73" letter-spacing="1">ANSWER RATE</text>
        <text x="16" y="55" font-family="Fraunces" font-size="28" fill="#0A0A0B">94.2%</text>
        <text x="16" y="72" font-family="Geist" font-size="10" fill="#00d28a">↑ +6.4%</text>
      </g>
      <g transform="translate(185 50)">
        <rect width="130" height="80" rx="12" fill="#fff" stroke="#e8e8ea"/>
        <text x="16" y="24" font-family="Geist" font-size="9" fill="#6b6b73" letter-spacing="1">MOS QUALITY</text>
        <text x="16" y="55" font-family="Fraunces" font-size="28" fill="#0A0A0B">4.31</text>
        <text x="16" y="72" font-family="Geist" font-size="10" fill="#00d28a">↑ +0.18</text>
      </g>
      <g transform="translate(330 50)">
        <rect width="130" height="80" rx="12" fill="#fff" stroke="#e8e8ea"/>
        <text x="16" y="24" font-family="Geist" font-size="9" fill="#6b6b73" letter-spacing="1">FRAUD BLOCKED</text>
        <text x="16" y="55" font-family="Fraunces" font-size="28" fill="#0A0A0B">142</text>
        <text x="16" y="72" font-family="Geist" font-size="10" fill="#6b6b73">last 24h</text>
      </g>

      <!-- Chart area -->
      <g transform="translate(40 170)">
        <rect width="420" height="220" rx="12" fill="#fff" stroke="#e8e8ea"/>
        <text x="16" y="24" font-family="Geist" font-size="9" fill="#6b6b73" letter-spacing="1">ROUTE SCORE · 24H</text>

        <g font-family="Geist" font-size="9" fill="#a1a1a8">
          <text x="16" y="58">100</text>
          <text x="16" y="108">75</text>
          <text x="16" y="158">50</text>
          <text x="16" y="208">25</text>
        </g>
        <g stroke="#f0f0f2" stroke-width="1">
          <line x1="44" y1="55" x2="404" y2="55"/>
          <line x1="44" y1="105" x2="404" y2="105"/>
          <line x1="44" y1="155" x2="404" y2="155"/>
          <line x1="44" y1="205" x2="404" y2="205"/>
        </g>

        <path d="M 50 130 L 90 110 L 130 120 L 170 90 L 210 95 L 250 75 L 290 80 L 330 60 L 370 65 L 400 50 L 400 210 L 50 210 Z" fill="url(#opt-area)" opacity="0.85"/>
        <path d="M 50 130 L 90 110 L 130 120 L 170 90 L 210 95 L 250 75 L 290 80 L 330 60 L 370 65 L 400 50" stroke="url(#opt-line)" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <g fill="#1a4b72">
          <circle cx="90" cy="110" r="2.5"/>
          <circle cx="170" cy="90" r="2.5"/>
          <circle cx="250" cy="75" r="2.5"/>
          <circle cx="330" cy="60" r="2.5"/>
        </g>
        <circle cx="400" cy="50" r="5" fill="#1a4b72">
          <animate attributeName="r" values="5;9;5" dur="1.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="400" cy="50" r="3" fill="#fff" stroke="#1a4b72" stroke-width="1.2"/>
      </g>

      <!-- Anomaly histogram -->
      <g transform="translate(40 420)">
        <text x="0" y="0" font-family="Geist" font-size="10" fill="#6b6b73" letter-spacing="1">ANOMALY DETECTION</text>
        <g transform="translate(0 12)">
          <rect x="0"   y="20" width="14" height="20" rx="2" fill="#4d83b3" opacity="0.55"><animate attributeName="height" values="20;36;20" dur="2.4s" repeatCount="indefinite"/><animate attributeName="y" values="20;4;20" dur="2.4s" repeatCount="indefinite"/></rect>
          <rect x="20"  y="14" width="14" height="26" rx="2" fill="#4d83b3" opacity="0.55"><animate attributeName="height" values="26;18;26" dur="1.8s" repeatCount="indefinite"/><animate attributeName="y" values="14;22;14" dur="1.8s" repeatCount="indefinite"/></rect>
          <rect x="40"  y="10" width="14" height="30" rx="2" fill="#4d83b3" opacity="0.55"><animate attributeName="height" values="30;38;30" dur="2.1s" repeatCount="indefinite"/><animate attributeName="y" values="10;2;10" dur="2.1s" repeatCount="indefinite"/></rect>
          <rect x="60"  y="14" width="14" height="26" rx="2" fill="#4d83b3" opacity="0.55"><animate attributeName="height" values="26;14;26" dur="1.7s" repeatCount="indefinite"/><animate attributeName="y" values="14;26;14" dur="1.7s" repeatCount="indefinite"/></rect>
          <rect x="80"  y="18" width="14" height="22" rx="2" fill="#4d83b3" opacity="0.55"><animate attributeName="height" values="22;30;22" dur="2.3s" repeatCount="indefinite"/><animate attributeName="y" values="18;10;18" dur="2.3s" repeatCount="indefinite"/></rect>
          <rect x="100" y="22" width="14" height="18" rx="2" fill="#4d83b3" opacity="0.55"><animate attributeName="height" values="18;28;18" dur="2s" repeatCount="indefinite"/><animate attributeName="y" values="22;12;22" dur="2s" repeatCount="indefinite"/></rect>
          <rect x="120" y="6"  width="14" height="34" rx="2" fill="#e85a5a"><animate attributeName="opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite"/></rect>
          <rect x="140" y="18" width="14" height="22" rx="2" fill="#4d83b3" opacity="0.55"><animate attributeName="height" values="22;16;22" dur="2.5s" repeatCount="indefinite"/><animate attributeName="y" values="18;24;18" dur="2.5s" repeatCount="indefinite"/></rect>
          <rect x="160" y="22" width="14" height="18" rx="2" fill="#4d83b3" opacity="0.55"><animate attributeName="height" values="18;28;18" dur="2.2s" repeatCount="indefinite"/><animate attributeName="y" values="22;12;22" dur="2.2s" repeatCount="indefinite"/></rect>
          <rect x="180" y="16" width="14" height="24" rx="2" fill="#4d83b3" opacity="0.55"><animate attributeName="height" values="24;32;24" dur="1.9s" repeatCount="indefinite"/><animate attributeName="y" values="16;8;16" dur="1.9s" repeatCount="indefinite"/></rect>
          <rect x="200" y="20" width="14" height="20" rx="2" fill="#4d83b3" opacity="0.55"><animate attributeName="height" values="20;14;20" dur="2.6s" repeatCount="indefinite"/><animate attributeName="y" values="20;26;20" dur="2.6s" repeatCount="indefinite"/></rect>
          <rect x="220" y="14" width="14" height="26" rx="2" fill="#4d83b3" opacity="0.55"><animate attributeName="height" values="26;20;26" dur="2.1s" repeatCount="indefinite"/><animate attributeName="y" values="14;20;14" dur="2.1s" repeatCount="indefinite"/></rect>
          <rect x="240" y="18" width="14" height="22" rx="2" fill="#4d83b3" opacity="0.55"><animate attributeName="height" values="22;30;22" dur="1.8s" repeatCount="indefinite"/><animate attributeName="y" values="18;10;18" dur="1.8s" repeatCount="indefinite"/></rect>
          <text x="127" y="0" font-family="Geist" font-size="9" fill="#e85a5a" text-anchor="middle">ANOMALY</text>
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
