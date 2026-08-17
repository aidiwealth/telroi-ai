<template>
  <div>
    <ProductHero
      kicker="Telroi Connect"
      video-url="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/iStock-2260311647.mp4"
      title-start="Reach every"
      title-em="customer."
      lede="Voice connectivity, programmable workflows <br>and business logic. One API."
    />

    <!-- SHOWCASE 1: routing visual -->
    <section class="showcase">
      <div class="wrap">
        <div class="showcase-grid">
          <div class="showcase-text reveal">
            <div class="kicker-text">Built on a router that scales</div>
            <h2>Every call, <em>routed through one layer.</em></h2>
            <p>Telroi's routing layer sits between your applications and the global voice network. SIP, PSTN, mobile. One API, real-time delivery analytics, no vendor stitching.</p>
            <ul class="showcase-mini-list">
              <li>2,800+ active routes across our termination footprint</li>
              <li>Direct carrier interconnects in Africa and growing markets</li>
              <li>Sub-200ms median answer times where it matters</li>
            </ul>
          </div>
          <div class="showcase-viz reveal reveal-delay-1">
            <ConnectRoutingVisual />
          </div>
        </div>
      </div>
    </section>

    <CapabilityRail
      kicker="Connectivity"
      title-start="Built around"
      title-em="voice connectivity"
      :capabilities="connectCapabilities"
    />

    <!-- SHOWCASE 2: workflow visual (absorbed from Extend) -->
    <section class="showcase showcase--alt">
      <div class="wrap">
        <div class="showcase-grid">
          <div class="showcase-text reveal">
            <div class="kicker-text">Voice meets business logic</div>
            <h2>Calls that <em>write back to your systems.</em></h2>
            <p>Connect takes a voice call and turns it into something your business can act on — a CRM write, a calendar booking, a workflow trigger. The conversation drives the system, not the other way around.</p>
            <ul class="showcase-mini-list">
              <li>Native integrations with Pipedrive, Zoho, Zapier and more</li>
              <li>Speech-first IVR: customers describe intent, not press digits</li>
              <li>Webhooks for every IVR turn, transfer and outcome</li>
            </ul>
          </div>
          <div class="showcase-viz reveal reveal-delay-1">
            <ExtendWorkflowVisual />
          </div>
        </div>
      </div>
    </section>

    <CapabilityRail
      kicker="Workflows"
      title-start="Built around"
      title-em="voice workflows"
      :capabilities="workflowCapabilities"
    />


    <ClosingCta
      title-start="Voice infrastructure for"
      title-em="businesses that pick up."
      body="Talk to our team about how Telroi fits your stack. Sandbox keys available for testing."
      cta-text="Talk to sales"
      tinted
      cal-popup
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Telroi Connect — Voice connectivity & workflows',
  meta: [
    {
      name: 'description',
      content:
        'CLI-compliant routing, SIP trunking, programmable IVR, CRM integrations and voice workflow automation. One API, carrier-grade scale.'
    }
  ]
});

const connectCapabilities = [
  {
    title: 'CLI-compliant routing',
    body: 'Correct CLI on every route. Outbound calls actually get answered.',
    icon: `<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 6 H12 a4 4 0 0 1 4 4"/><path d="M7 18 H12 a4 4 0 0 0 4 -4"/>`
  },
  {
    title: 'Programmable SIP',
    body: 'Trunks via API. No tickets, no manual reconfigs.',
    icon: `<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10 H21"/>`
  },
  {
    title: 'Direct carrier access',
    body: 'Routes negotiated direct with regional carriers.',
    icon: `<circle cx="12" cy="12" r="9"/><path d="M3 12 H21"/><path d="M12 3 a14 14 0 0 1 0 18 a14 14 0 0 1 0 -18"/>`
  },
  {
    title: 'Global termination',
    body: 'One API for PSTN, mobile and SIP.',
    icon: `<path d="M2 18 L8 12 L12 16 L22 6"/>`
  }
];

const workflowCapabilities = [
  {
    title: 'Intelligent IVR',
    body: 'Speech-first menus that route by intent.',
    icon: `<path d="M4 7 H20 V14 H13 L9 18 V14 H4 Z"/>`
  },
  {
    title: 'Workflow automation',
    body: 'Trigger CRM, calendar and payment actions from a call.',
    icon: `<rect x="3" y="4" width="6" height="6" rx="1.5"/><rect x="15" y="4" width="6" height="6" rx="1.5"/><rect x="9" y="14" width="6" height="6" rx="1.5"/>`
  },
  {
    title: 'Carrier-grade rails',
    body: 'Connect runs the same SIP infrastructure that powers fast-growing platforms. Build on rails already proven at scale.',
    icon: `<circle cx="12" cy="12" r="9"/><path d="M3 12 H21"/><path d="M12 3 a14 14 0 0 1 0 18 a14 14 0 0 1 0 -18"/>`
  },
  {
    title: 'One API, full stack',
    body: 'Voice workflows and business logic included in the same API — no separate integration layer needed.',
    icon: `<path d="M4 4 H20 V8 H4 Z"/><path d="M4 11 H14"/><path d="M4 15 H17"/><path d="M4 19 H11"/>`
  }
];
</script>

<style scoped>
.showcase { padding: 130px 0 120px; background: #fff; overflow: hidden; }
.showcase--alt { background: var(--paper-2); }
.showcase-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 72px; align-items: center; }
.showcase-text .kicker-text {
  font-family: var(--font-mono); font-size: 11.5px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--signal); margin-bottom: 22px;
}
.showcase-text h2 {
  font-family: var(--font-display); font-weight: 400;
  font-size: clamp(28px, 3.52vw, 46px); letter-spacing: -0.025em;
  line-height: 1.05; margin: 0 0 24px;
}
.showcase-text h2 em { font-style: normal; color: var(--ink-soft); font-weight: 300; }
.showcase-text p { font-size: 17px; line-height: 1.55; color: var(--ink-soft); margin: 0 0 24px; }
.showcase-mini-list { margin: 28px 0 0; }
.showcase-mini-list li {
  padding: 12px 0; border-top: 1px solid var(--rule-2);
  font-size: 14.5px; color: var(--ink); display: flex; gap: 12px; align-items: flex-start;
}
.showcase-mini-list li:last-child { border-bottom: 1px solid var(--rule-2); }
.showcase-mini-list li::before {
  content: ""; flex-shrink: 0; margin-top: 7px;
  width: 6px; height: 6px; background: var(--signal); border-radius: 999px;
}
@media (max-width: 980px) { .showcase-grid { grid-template-columns: 1fr; gap: 48px; } }
</style>
