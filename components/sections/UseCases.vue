<template>
  <section class="uc-section" id="use-cases">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="kicker">Use cases</div>
        <h2 class="sec-title">
          <span>Voice infrastructure that fits</span> <em>where you operate.</em>
        </h2>
        <p class="sec-lede">
          From a single AI receptionist for a small business to high-volume traffic for fintechs,
          banks and CPaaS platforms. Telroi runs the same primitives at every scale.
        </p>
      </div>

      <div class="uc-grid">
        <div
          v-for="(uc, i) in useCases"
          :key="uc.title"
          class="uc-card reveal"
          :class="i % 3 === 1 ? 'reveal-delay-1' : i % 3 === 2 ? 'reveal-delay-2' : ''"
        >
          <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-html="uc.icon"
          />
          <h4>{{ uc.title }}</h4>
          <p>{{ uc.body }}</p>
          <div class="uc-tags">
            <span v-for="tag in uc.tags" :key="tag" class="uc-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const useCases = [
  {
    title: 'AI voice agents',
    body: 'Inbound answering, outbound campaigns and 24/7 receptionists with human escalation always one event away.',
    tags: ['VAN', 'Connect', 'Inbound'],
    icon: `<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><path d="M4 15v2a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2z"/><path d="M20 15v2a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2z"/><path d="M17 19v1a2 2 0 0 1-2 2h-3"/>`
  },
  {
    title: 'SIP trunks & CLI routing',
    body: 'CLI-compliant programmable trunks with route scoring, anomaly detection and global termination.',
    tags: ['Connect', 'Optimize'],
    icon: `<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 6h4a4 4 0 0 1 4 4v0"/><path d="M7 18h4a4 4 0 0 0 4-4v0"/>`
  },
  {
    title: 'Hosted PBX & IVR',
    body: 'Departments, extensions, schedules, off-hours routing and voicemail. Fully API-driven.',
    tags: ['Connect', 'PBX'],
    icon: `<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6"/><circle cx="9" cy="12" r="0.6" fill="currentColor"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/><circle cx="15" cy="12" r="0.6" fill="currentColor"/><circle cx="9" cy="16" r="0.6" fill="currentColor"/><circle cx="12" cy="16" r="0.6" fill="currentColor"/><circle cx="15" cy="16" r="0.6" fill="currentColor"/>`
  },
  {
    title: 'Voice analytics & QoS',
    body: 'Live route scoring, fraud detection, ASR, wait times and ratings. Streamed via webhooks.',
    tags: ['Optimize', 'Webhooks'],
    icon: `<path d="M4 4v16h16"/><path d="M7 15l4-5 3 3 6-7"/>`
  },
  {
    title: 'CPaaS & carrier infrastructure',
    body: 'Aggregator-grade voice routing, SIP registrations, branch-PBX bridging and webhook firehose for high-volume traffic.',
    tags: ['Connect', 'CPaaS'],
    icon: `<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/><path d="M12 3v6"/><path d="M12 15v6"/><path d="M3 12h6"/><path d="M15 12h6"/>`
  },
  {
    title: 'Banks & regulated voice',
    body: 'Compliant call recording, blacklists, anonymous-call blocking, region-specific outgoing CIDs.',
    tags: ['Optimize', 'Compliance'],
    icon: `<path d="M12 3 L20 6 V12 C 20 17 16.5 20.5 12 22 C 7.5 20.5 4 17 4 12 V6 Z"/><path d="M9 12 l2.5 2.5 L16 10"/>`
  }
];
</script>

<style scoped>
.uc-section { background: var(--paper-2); padding: 110px 0; }
.uc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.uc-card {
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: var(--radius);
  padding: 28px;
  transition: border-color 0.2s, transform 0.2s;
  min-height: 240px;
  display: flex;
  flex-direction: column;
}
.uc-card:hover { border-color: var(--ink); transform: translateY(-2px); }
.uc-card .icon {
  width: 36px; height: 36px;
  margin-bottom: 22px;
  color: var(--signal);
  flex-shrink: 0;
}
.uc-card h4 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 19px;
  letter-spacing: -0.02em;
  margin: 0 0 10px;
}
.uc-card p {
  font-size: 14.5px;
  color: var(--ink-soft);
  margin: 0 0 18px;
}
.uc-tags { margin-top: auto; display: flex; flex-wrap: wrap; gap: 6px; }
.uc-tag {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-soft);
  padding: 4px 8px;
  background: var(--paper-3);
  border-radius: 6px;
}
@media (max-width: 960px) { .uc-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 620px) { .uc-grid { grid-template-columns: 1fr; } }
</style>
