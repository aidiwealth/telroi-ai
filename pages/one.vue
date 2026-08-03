<template>
  <div>
    <ProductHero
      kicker="Telroi One"
      video-url="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/iStock-1488638224.mp4"
      title-start="Your whole team,"
      title-em="one voice platform."
      lede="CRM, desktop dialer, live call widget and AI voice — everything a business needs to answer every customer, in one place."
      :download-mode="true"
    />

    <!-- Suite overview -->
    <section class="suite-section">
      <div class="wrap">
        <div class="sec-head reveal">
          <div class="kicker">The suite</div>
          <h2 class="sec-title">Everything connected. <em>Nothing missing.</em></h2>
          <p class="sec-lede">Telroi One bundles the full communications stack under one brand, one login, and one support line — built on top of the same AI-native voice infrastructure that powers our API clients.</p>
        </div>

        <div class="suite-grid">
          <div v-for="(tool, i) in tools" :key="tool.name"
            class="suite-card reveal"
            :class="i ? `reveal-delay-${Math.min(i,3)}` : ''"
          >
            <div class="suite-icon" v-html="tool.icon"/>
            <h3>{{ tool.name }}</h3>
            <p>{{ tool.body }}</p>
            <ul class="suite-list">
              <li v-for="feat in tool.features" :key="feat">{{ feat }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Subdomain section -->
    <section class="one-integrations-section">
      <div class="wrap">
        <div class="sec-head reveal">
          <div class="kicker">Integrations</div>
          <h2 class="sec-title"><span>Seamless</span> <em>integrations.</em></h2>
          <p class="sec-lede">Plug voice directly into the CRM and automation tools your team already runs. Bring your own AI on top.</p>
        </div>

        <div class="one-int-grid">
          <div
            v-for="(int, i) in integrations"
            :key="int.name"
            class="one-int-card reveal"
            :class="i % 3 === 1 ? 'reveal-delay-1' : i % 3 === 2 ? 'reveal-delay-2' : ''"
          >
            <div class="one-int-head">
              <div class="one-int-logo">
                <img :src="int.logo" :alt="int.name" />
              </div>
              <span class="one-int-tag">{{ int.tag }}</span>
            </div>
            <h4>{{ int.name }}</h4>
            <p>{{ int.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it compares to the API -->
    <section class="compare-section">
      <div class="wrap">
        <div class="compare-grid reveal">
          <div class="compare-col">
            <div class="kicker">Telroi One</div>
            <h3>For teams who need it working <em>today</em></h3>
            <p>No engineering required. Your team gets a phone system, CRM, dialer and live call widget — configured and ready. We handle the setup.</p>
            <ul class="compare-list">
              <li>Full CRM with call logging and contact management</li>
              <li>Desktop and mobile dialer</li>
              <li>Live Call — website call widget</li>
              <li>AI call answering via VAN</li>
              <li>White-glove onboarding included</li>
            </ul>
            <button
              type="button"
              class="btn btn-signal"
              data-cal-link="telroiai/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              <span>Talk to our team</span> <span class="arrow">→</span>
            </button>
          </div>
          <div class="compare-divider"/>
          <div class="compare-col">
            <div class="kicker">Telroi API</div>
            <h3>For teams who want to <em>build on top</em></h3>
            <p>Full programmable access to Telroi's voice infrastructure. Connect, route, optimize and extend — all via API, with your own frontend on top.</p>
            <ul class="compare-list">
              <li>Voice routing and SIP trunking</li>
              <li>Webhooks and real-time events</li>
              <li>AI optimization and anomaly detection</li>
              <li>VAN number provisioning</li>
              <li>SDKs and full API documentation</li>
            </ul>
            <NuxtLink to="/connect" class="btn btn-outline">
              <span>Explore the API</span> <span class="arrow">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <DesktopDialer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Telroi One — The complete communications suite for your team',
  meta: [{ name: 'description', content: 'Telroi One gives your team a complete CRM, desktop dialer, live call widget and AI voice system — all under one brand, configured and ready.' }]
});

const R2 = 'https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/';

const integrations = [
  { name: 'Pipedrive', tag: 'CRM',        logo: `${R2}pipedrive.png`,    body: 'Trigger automated outbound calls and track voice interactions directly from your sales pipelines.' },
  { name: 'Zoho',      tag: 'CRM',        logo: `${R2}zoho.png`,         body: 'Embed compliant voice calling into Zoho workflows to power sales, support, and customer engagement.' },
  { name: 'Termii',    tag: 'CPaaS',      logo: `${R2}termii-wht-2.png`, body: 'Bridge messaging and voice infrastructure to deliver unified, reliable customer communications.' },
  { name: 'Zapier',    tag: 'Automation', logo: `${R2}zapier.svg`,       body: 'Automate voice workflows across thousands of apps to trigger calls and alerts without writing code.' }
];

const tools = [
  {
    name: 'CRM',
    icon: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="6" width="24" height="20" rx="3"/>
      <path d="M4 12h24"/>
      <circle cx="12" cy="20" r="3"/>
      <path d="M7 26v-1a5 3 0 0 1 10 0v1"/>
      <path d="M20 17h6M20 21h4"/>
    </svg>`,
    body: 'A full contact and deal management system built around voice. Every call is automatically logged, transcribed and scored against the contact.',
    features: [
      'Contact and company records',
      'Deal pipelines and task management',
      'Automatic call logging and transcription',
      'AI call summaries written to every record',
      'Activity history and reporting'
    ]
  },
  {
    name: 'Desktop',
    icon: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="5" width="26" height="18" rx="2"/>
      <path d="M11 27h10M16 23v4"/>
      <circle cx="16" cy="14" r="4"/>
      <path d="M10 21a6 6 0 0 1 12 0"/>
    </svg>`,
    body: 'A branded desktop application for making and receiving calls from your computer. Click to call, transfer, hold — everything a team needs.',
    features: [
      'Click-to-call from any contact',
      'Inbound call handling and transfer',
      'Call recording and playback',
      'Presence and availability status',
      'Mac and Windows support'
    ]
  },
  {
    name: 'Live Call',
    icon: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="4" width="24" height="18" rx="3"/>
      <path d="M4 10h24"/>
      <circle cx="16" cy="17" r="3"/>
      <path d="M11 26 Q 16 22 21 26"/>
    </svg>`,
    body: 'A call button for your website and apps. Visitors click to call — they enter their details and connect directly to an agent or your AI. Every caller is automatically captured as a CRM lead.',
    features: [
      'Embeddable call widget for any website or app',
      'Caller details captured as CRM leads automatically',
      'Routes to an agent, department or AI number',
      'Customisable appearance to match your brand',
      'Full call recording and CRM timeline entry'
    ]
  },
  {
    name: 'Virtual AI Numbers',
    icon: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="2" width="14" height="28" rx="3"/>
      <path d="M13 8h6M13 13h6"/>
      <circle cx="16" cy="24" r="1.2" fill="currentColor"/>
    </svg>`,
    body: 'Every business number becomes AI-powered. Inbound calls are answered, routed and resolved by your AI — in any language, 24/7.',
    features: [
      'AI answers every inbound call',
      'Local language support',
      'Intelligent routing and escalation',
      'Call logs written to the CRM',
      'Available on all your Telroi numbers'
    ]
  }
];
</script>

<style scoped>
/* Suite section */
.suite-section { padding: 110px 0; background: #fff; }
.suite-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  margin-top: 64px;
}
.suite-card {
  background: var(--paper-2);
  border: 1px solid var(--rule);
  border-radius: var(--radius-lg);
  padding: 40px;
  transition: border-color 0.2s, transform 0.2s;
}
.suite-card:hover { border-color: var(--ink); transform: translateY(-2px); }
.suite-icon {
  width: 48px; height: 48px;
  color: var(--signal);
  margin-bottom: 20px;
}
.suite-icon :deep(svg) { width: 100%; height: 100%; }
.suite-card h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 26px;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}
.suite-card > p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--ink-soft);
  margin: 0 0 24px;
}
.suite-list {
  list-style: none;
  padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 10px;
}
.suite-list li {
  font-size: 14px;
  color: var(--ink-soft);
  padding-left: 18px;
  position: relative;
  line-height: 1.4;
}
.suite-list li::before {
  content: "";
  position: absolute; left: 0; top: 7px;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--signal);
}

/* Compare section */
.compare-section { padding: 110px 0; background: var(--paper-2); }
.compare-grid {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: 72px;
  align-items: start;
}
.compare-divider { background: var(--rule); align-self: stretch; }
.compare-col .kicker { margin-bottom: 16px; }
.compare-col h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 28px;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.compare-col h3 em {
  font-style: normal;
  color: var(--signal);
}
.compare-col > p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--ink-soft);
  margin: 0 0 28px;
}
.compare-list {
  list-style: none;
  padding: 0; margin: 0 0 36px;
  display: flex; flex-direction: column; gap: 10px;
}
.compare-list li {
  font-size: 14.5px;
  color: var(--ink-soft);
  padding-left: 20px;
  position: relative;
}
.compare-list li::before {
  content: "";
  position: absolute; left: 0; top: 7px;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--signal);
}
.btn-outline {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 22px;
  border-radius: 999px;
  border: 1.5px solid var(--ink);
  font-size: 15px; font-weight: 500;
  color: var(--ink);
  transition: border-color 0.2s, color 0.2s;
}
.btn-outline:hover { border-color: var(--signal); color: var(--signal); }

.content-page :deep(.closing) { background: var(--paper-2); }

@media (max-width: 900px) {
  .suite-grid { grid-template-columns: 1fr; }
  .compare-grid { grid-template-columns: 1fr; gap: 48px; }
  .compare-divider { display: none; }
}

/* Integrations section */
.one-integrations-section { padding: 110px 0; background: #fff; }
.one-int-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 56px;
}
.one-int-card {
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: var(--radius);
  padding: 22px;
  display: flex; flex-direction: column;
  transition: border-color 0.2s, transform 0.2s;
  min-height: 170px;
}
.one-int-card:hover { border-color: var(--ink); transform: translateY(-2px); }
.one-int-head {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}
.one-int-logo { height: 36px; display: flex; align-items: center; }
.one-int-logo img { max-height: 36px; max-width: 130px; object-fit: contain; }
.one-int-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-soft);
  padding: 4px 8px;
  border: 1px solid var(--rule);
  border-radius: 6px;
  white-space: nowrap;
}
.one-int-card h4 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 17px;
  letter-spacing: -0.015em;
  margin: 0 0 8px;
}
.one-int-card p {
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--ink-soft);
  margin: 0;
}
@media (max-width: 1024px) { .one-int-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 700px)  { .one-int-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 460px)  { .one-int-grid { grid-template-columns: 1fr; } }

</style>
