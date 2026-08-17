<template>
  <div class="content-page">
    <ProductHero
      kicker="Compliance"
      video-url="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/iStock-1480311246.mp4"
      title-start="Built for "
      title-em="regulated voice."
      cta-primary="Request compliance docs"
    />

    <ContentLoop
      kicker="Compliance overview"
      title-start="Transparent about what's"
      title-em="ours, and what's in progress."
      lede="Our infrastructure partners hold the major audit certifications today. Telroi's own are in progress, and we'd rather say so."
      :items="items"
    >
      <template #visual="{ activeStep }">
        <ComplianceBadgeVisual :active-step="activeStep" :items="items" />
      </template>
    </ContentLoop>

    <ClosingCta
      title-start="Questions about a specific"
      title-em="audit or framework?"
      body="Happy to walk through partner attestations, our roadmap, and what we can sign today."
      cta-text="compliance@telroi.ai"
      cta-href="mailto:compliance@telroi.ai"
    />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Telroi — Compliance' });

const items = [
  {
    num: '01' as const,
    label: 'PARTNERS',
    title: 'Partner infrastructure: SOC 2, ISO 27001 & GDPR',
    body: 'The carriers, cloud providers and payment processors we run on hold current attestations. Voice, hosting and data sit on compliant foundations from day one.'
  },
  {
    num: '02' as const,
    label: 'TELROI · IN PROGRESS',
    title: "Telroi-level SOC 2 & ISO 27001 in progress",
    body: "We're working toward our own attestations and will publish them the moment they land. DPAs are available to sign today."
  },
  {
    num: '03' as const,
    label: 'TELECOM',
    title: 'Regional regulations, handled in-house',
    body: 'CLI compliance, anonymous-call blocking, recording rules and number portability. Handled per jurisdiction across FCC, Ofcom, NCC and beyond.'
  }
];
</script>

<style scoped>
/* Override shared component backgrounds for this page:
   ContentLoop section -> white, ClosingCta section -> cream */
.content-page :deep(.content-loop) { background: #fff; }
.content-page :deep(.closing) { background: var(--paper-2); }
</style>
