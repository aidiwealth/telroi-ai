<template>
  <div>
    <ProductHero
      kicker="Telroi VAN"
      video-url="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/9113598-hd_1920_1080_30fps.mp4"
      title-start="Every business number,"
      title-em="now AI-powered."
      lede="Answer every call. In any language."
    />

    <section class="showcase">
      <div class="wrap">
        <div class="showcase-grid">
          <div class="showcase-text reveal">
            <div class="kicker-text">A number that picks up</div>
            <h2>First-ring pickup. <em>Every conversation captured.</em></h2>
            <p>A Virtual AI Number is a real business number with an AI assistant attached. Answers in local languages, captures intent, writes to your CRM, escalates to a human when needed.</p>
            <ul class="showcase-mini-list">
              <li>Live conversation in 30+ languages</li>
              <li>Automatic transcript and CRM writeback</li>
              <li>Human escalation always one event away</li>
            </ul>
          </div>
          <div class="showcase-viz reveal reveal-delay-1">
            <VanConversationVisual />
          </div>
        </div>
      </div>
    </section>

    <CapabilityRail
      kicker="Capabilities"
      title-start="Built around"
      title-em="virtual ai numbers"
      :capabilities="capabilities"
    />
    <EditorialCallout
      label="Why Telroi VAN"
      text="VAN is what Telroi looks like when the entire voice stack <em>lands as a single product</em>. Numbers, AI, routing, recording, escalation — one phone number, ready to use."
    />
    <ClosingCta
      title-start="Voice infrastructure for"
      title-em="businesses that pick up."
      body="Talk to our team about how Telroi fits your stack. Sandbox keys available for testing."
      cta-text="Talk to sales"
      cal-popup
    />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Telroi VAN — Virtual AI Numbers' });

const capabilities = [
  { title: 'Always answered', body: 'First-ring pickup, 24/7.', icon: '<path d="M6 11 a6 6 0 0 1 12 0 V17 L20 19 H4 L6 17 Z"/><path d="M10 22 a2 2 0 0 0 4 0"/>' },
  { title: 'Local languages', body: 'Speaks the way your customers speak.', icon: '<path d="M3 5 H13"/><path d="M11 5 c0 4 -3 7 -7 9"/><path d="M11 21 L15 11 L19 21"/><path d="M12.5 17 H17.5"/>' },
  { title: 'Human escalation', body: 'One-event handoff to a real person.', icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21 V19 a6 6 0 0 1 12 0"/><path d="M18 14 L20 16 L18 18"/>' },
  { title: 'Voice-configurable', body: 'Set up your assistant by talking to it.', icon: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M19 11 a7 7 0 0 1 -14 0"/><path d="M12 18 V22"/>' }
];
</script>

<style scoped>
.showcase { padding: 130px 0 120px; background: #fff; overflow: hidden; }
.showcase-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 72px; align-items: center; }
.showcase-text .kicker-text {
  font-family: var(--font-mono); font-size: 11.5px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--signal); margin-bottom: 22px;
}
.showcase-text h2 {
  font-family: var(--font-display); font-weight: 400;
  font-size: clamp(32px, 4vw, 52px); letter-spacing: -0.025em;
  line-height: 1.05; margin: 0 0 24px;
}
.showcase-text h2 em { font-style: normal; color: var(--ink-soft); font-weight: 300; }
.showcase-text p { font-size: 17px; line-height: 1.55; color: var(--ink-soft); margin: 0 0 24px; }
.showcase-mini-list { margin: 28px 0 0; }
.showcase-mini-list li {
  padding: 12px 0; border-top: 1px solid var(--rule-2);
  font-size: 14.5px; color: var(--ink);
  display: flex; gap: 12px; align-items: flex-start;
}
.showcase-mini-list li:last-child { border-bottom: 1px solid var(--rule-2); }
.showcase-mini-list li::before {
  content: ""; flex-shrink: 0; margin-top: 7px;
  width: 6px; height: 6px; background: var(--signal); border-radius: 999px;
}
@media (max-width: 980px) { .showcase-grid { grid-template-columns: 1fr; gap: 48px; } }
</style>
