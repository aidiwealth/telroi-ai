<template>
  <div>
    <ProductHero
      kicker="Telroi Optimize"
      video-url="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/iStock-1796562885.mp4"
      title-start="The brain behind"
      title-em="your voice traffic."
      lede="Network-level intelligence, by default."
    />

    <section class="showcase">
      <div class="wrap">
        <div class="showcase-grid">
          <div class="showcase-text reveal">
            <div class="kicker-text">Network-level intelligence</div>
            <h2>Live signal across <span>every route, every call.</span></h2>
            <p>Optimize sits at the network layer — scoring routes, catching fraud and predicting quality drops before they reach your customers. The intelligence under the calls, not in them.</p>
            <ul class="showcase-mini-list">
              <li>Average customer sees 15–30% answer-rate lift</li>
              <li>IRSF &amp; traffic-pumping detection that catches what rules miss</li>
              <li>Real-time route re-scoring on every call event</li>
            </ul>
          </div>
          <div class="showcase-viz reveal reveal-delay-1">
            <OptimizeAnalyticsVisual />
          </div>
        </div>
      </div>
    </section>

    <CapabilityRail
      kicker="Capabilities"
      title-start="Built around"
      title-em="voice intelligence"
      :capabilities="capabilities"
    />
    <EditorialCallout
      label="Why Telroi Optimize"
      text="Optimize is what makes Telroi <span>AI-native</span>. The routing and quality layer is intelligent by default — not an add-on, not a feature. You just see better numbers."
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
useHead({ title: 'Telroi Optimize — Voice intelligence' });

const capabilities = [
  { title: 'Live route scoring', body: 'Every route scored on answer rate, MOS and post-dial delay.', icon: '<path d="M4 4 V20 H20"/><path d="M7 16 L11 11 L14 14 L19 7"/>' },
  { title: 'Fraud detection', body: 'IRSF and traffic-pumping patterns caught in real time.', icon: '<path d="M12 3 L20 6 V12 C 20 17 16.5 20 12 21 C 7.5 20 4 17 4 12 V6 Z"/><path d="M9 12 H15"/>' },
  { title: 'Route intelligence', body: 'Score and grade every route based on real call data.', icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7 V12 L15 14"/>' },
  { title: 'Network-level AI', body: 'AI that sits under the call, not inside it.', icon: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="10" y="10" width="4" height="4"/>' }
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
.showcase-text h2 em { font-style: italic; color: var(--ink-soft); font-weight: 300; }
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
