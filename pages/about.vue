<template>
  <div class="content-page">
    <ProductHero
      kicker="About"
      video-url="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/iStock-2223261305.mp4"
      title-start="Voice infrastructure for"
      title-em="the next generation."
      lede="Built for the markets that need it most."
      cta-primary="Talk to our team"
    />

    <ContentLoop
      title-start="Our Story"
      lede="Voice still matters. Most businesses outside the US and Europe were left running it on infrastructure that wasn't built for them. Telroi is different: we own the voice infrastructure end-to-end, built for the markets that mattered to us first."
      :items="items"
    >
      <template #visual="{ activeStep }">
        <AboutTimelineVisual :active-step="activeStep" :items="items" />
      </template>
    </ContentLoop>

    <section class="founder-note">
      <div class="wrap">
        <div class="fn-inner reveal">
          <div class="fn-quote-mark">"</div>
          <p class="fn-lede">We're not your standard tech company.</p>
          <p class="fn-body">We are 100% founder and employee owned, profitable, and we don't hire a lot. Over time, we will make this particular page more impressive, but at this time we are focused on shipping for our customers.</p>
          <div class="fn-rule"/>
          <button
            type="button"
            class="fn-cta fn-cta-btn"
            data-cal-link="telroiai/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            <span>Talk to our team</span> <span class="arrow">→</span>
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'About Telroi' });

const items = [
  {
    num: '01' as const,
    label: 'THE PROBLEM',
    title: 'Voice was broken outside the West',
    body: 'Most voice infrastructure was built for North American and European carrier topologies. Businesses in Africa, LATAM and Asia ended up stitching together patchwork stacks with poor call quality, no CLI compliance, and no local market access.'
  },
  {
    num: '02' as const,
    label: 'PARTNERSHIPS',
    title: 'Secured key partnerships',
    body: "We worked directly with regional carriers, CPaaS platforms and regulators to set up compliant, high-quality voice routes across growing markets. Those are the foundations the platform now runs on."
  },
  {
    num: '03' as const,
    label: 'MVP',
    title: 'Platform launched',
    body: 'Telroi went live as one AI-native voice layer: routing, SIP, numbers, PBX, recordings, escalation and AI optimization, all behind a single API. Customers bring their own conversational AI on top.'
  }
];
</script>

<style scoped>
.content-page :deep(.content-loop) { background: #fff; }
.content-page :deep(.closing) { background: var(--paper-2); }

.founder-note {
  padding: 110px 0 120px;
  background: var(--paper-2);
  text-align: center;
}
.fn-inner {
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}
.fn-quote-mark {
  font-family: var(--font-display);
  font-size: 84px;
  line-height: 0.6;
  color: var(--signal);
  opacity: 0.3;
  margin-bottom: 28px;
  user-select: none;
}
.fn-lede {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(23px, 2.64vw, 33px);
  letter-spacing: -0.025em;
  line-height: 1.15;
  color: var(--ink);
  margin: 0 0 22px;
}
.fn-body {
  font-size: 17px;
  line-height: 1.7;
  color: var(--ink-soft);
  margin: 0;
  max-width: 560px;
}
.fn-rule {
  width: 40px;
  height: 1.5px;
  background: var(--rule);
  margin: 36px auto;
}
.fn-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: var(--ink);
  border-bottom: 1px solid var(--ink);
  padding-bottom: 3px;
  transition: color 0.15s, border-color 0.15s, gap 0.15s;
}
.fn-cta-btn {
  background: none;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  cursor: pointer;
  font-family: inherit;
}
.fn-cta:hover {
  color: var(--signal);
  border-color: var(--signal);
  gap: 13px;
}
.fn-cta .arrow { transition: transform 0.18s; }
.fn-cta:hover .arrow { transform: translateX(2px); }
</style>
