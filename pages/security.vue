<template>
  <div class="content-page">
    <ProductHero
      kicker="Security"
      video-url="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/iStock-1480311246.mp4"
      title-start="Security at"
      title-em="Telroi."
      lede="Carrier-grade, end to end."
      cta-primary="Talk to security team"
    />

    <ContentLoop
      kicker="Security overview"
      title-start="Security built into"
      title-em="every layer."
      lede="Telroi runs voice infrastructure for banks, fintechs and high-volume businesses. Security is built into every layer of the stack — from SIP signalling and encryption to access control and continuous monitoring."
      :items="items"
    >
      <template #visual="{ activeStep }">
        <SecurityShieldVisual :active-step="activeStep" :items="items" />
      </template>
    </ContentLoop>

    <ClosingCta
      title-start="Questions about this document?"
      title-em="Talk to our team."
      body="For security disclosures, compliance reviews or privacy requests, we're one message away."
      cta-text="support@telroi.ai"
      cta-href="mailto:support@telroi.ai"
    />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Telroi — Security' });

const items = [
  {
    num: '01' as const,
    label: 'ENCRYPTION',
    title: 'End-to-end encryption',
    body: 'TLS for SIP signalling in transit. SRTP for media. AES-256 at rest for recordings, transcripts and call metadata. Every connection between every component of the platform encrypted by default — no opt-in required.'
  },
  {
    num: '02' as const,
    label: 'ACCESS CONTROL',
    title: 'Least-privilege by default',
    body: 'RBAC across the entire admin console. SSO and SAML for enterprise tenants. IP allowlisting for operations access. Comprehensive audit logs streamed to your SIEM. Engineers never get standing access to customer data.'
  },
  {
    num: '03' as const,
    label: 'MONITORING',
    title: '24/7 monitoring',
    body: 'SOC 2 controls enforced continuously. Intrusion detection across signalling, media and admin planes. Incident response runbooks rehearsed quarterly. Status page and security advisories published for every event that affects customers.'
  }
];
</script>

<style scoped>
/* Override shared component backgrounds for this page:
   ContentLoop section -> white, ClosingCta section -> cream */
.content-page :deep(.content-loop) { background: #fff; }
.content-page :deep(.closing) { background: var(--paper-2); }
</style>
