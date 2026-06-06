<template>
  <div class="content-page">
    <ProductHero
      kicker="Customers"
      video-url="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/iStock-2180538267.mp4"
      title-start="Voice infrastructure"
      title-em="for every business."
      lede="Banks, fintechs, CPaaS and beyond."
    />

    <ContentLoop
      kicker="By segment"
      title-start="One voice layer,"
      title-em="every kind of business."
      lede="From regulated banks to high-volume e-commerce platforms, Telroi powers voice for businesses that depend on every call landing — at every scale, in every market we serve."
      :items="items"
    >
      <template #visual="{ activeStep }">
        <CustomersConstellationVisual :active-step="activeStep" :items="items" />
      </template>
    </ContentLoop>

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
useHead({ title: 'Telroi — Customers' });

const items = [
  {
    num: '01' as const,
    label: 'BANKS & FINTECH',
    title: 'Banks & fintechs',
    body: 'Compliant call recording, regional CIDs, blacklist enforcement and anonymous-call blocking — regulated voice that satisfies your audit team without slowing your customers down.'
  },
  {
    num: '02' as const,
    label: 'CPAAS PLATFORMS',
    title: 'CPaaS platforms',
    body: 'Aggregator-grade routing, programmable SIP, white-label deployments and webhook firehose. Build voice products on top of our infrastructure and resell under your brand.'
  },
  {
    num: '03' as const,
    label: 'HIGH-VOLUME BIZ',
    title: 'High-volume businesses',
    body: 'E-commerce, logistics, real estate, healthcare — any business where every missed call is a missed customer. Telroi answers them all, in every language they speak.'
  }
];
</script>

<style scoped>
/* Override shared component backgrounds for this page:
   ContentLoop section -> white, ClosingCta section -> cream */
.content-page :deep(.content-loop) { background: #fff; }
.content-page :deep(.closing) { background: var(--paper-2); }
</style>
