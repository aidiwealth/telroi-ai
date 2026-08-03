<template>
  <section class="integrations-section" id="integrations">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="kicker">Integrations</div>
        <h2 class="sec-title"><span>Seamless</span> <em>integrations.</em></h2>
        <p class="sec-lede">Plug voice directly into the CRM and automation tools your team already runs. Bring your own AI on top.</p>
      </div>

      <div class="int-grid">
        <div
          v-for="(int, i) in integrations"
          :key="int.name"
          class="int-card reveal"
          :class="i % 3 === 1 ? 'reveal-delay-1' : i % 3 === 2 ? 'reveal-delay-2' : ''"
        >
          <div class="int-head">
            <div class="int-logo">
              <img :src="int.logo" :alt="int.name" />
            </div>
            <span class="int-tag">{{ int.tag }}</span>
          </div>
          <h4>{{ int.name }}</h4>
          <p>{{ int.body }}</p>
        </div>
      </div>

      <!-- AI voice provider sub-divider -->
      <div class="int-divider reveal">
        <div class="sublabel">AI voice providers</div>
        <h3><span>Connect your preferred</span> <em>AI voice provider.</em></h3>
        <p>
          Telroi integrates with modern AI voice platforms so businesses can bring their own
          speech, reasoning and voice generation stack — while Telroi powers the voice
          infrastructure underneath.
        </p>
      </div>

      <div class="ai-grid">
        <div
          v-for="(ai, i) in aiProviders"
          :key="ai.name"
          class="ai-card reveal"
          :class="i % 3 === 1 ? 'reveal-delay-1' : i % 3 === 2 ? 'reveal-delay-2' : ''"
        >
          <div class="ai-head">
            <div class="ai-logo">
              <svg
                v-if="ai.svg"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#1a4b72"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                v-html="ai.svg"
              />
              <img v-else :src="ai.logo" :alt="ai.name" />
            </div>
            <span class="ai-tag">{{ ai.tag }}</span>
          </div>
          <div>
            <p class="ai-name">{{ ai.name }}</p>
            <p class="ai-desc">{{ ai.body }}</p>
          </div>
        </div>
      </div>

      <!-- BYOAI ribbon -->
      <div class="byoai-ribbon reveal">
        <div class="ribbon-text">
          <div class="ribbon-title">Bring your AI. Telroi powers the voice infrastructure layer.</div>
          <div class="ribbon-sub">Voice routing, SIP, PBX, recordings, analytics and escalation. Model-agnostic from the ground up.</div>
        </div>
        <button
          type="button"
          class="ribbon-link ribbon-link-btn"
          data-cal-link="telroiai/30min"
          data-cal-namespace="30min"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        ><span>Talk to an engineer</span> <span class="arrow">→</span></button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const R2 = 'https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/';

const integrations = [
  { name: 'Pipedrive', tag: 'CRM',        logo: `${R2}pipedrive.png`,    body: 'Trigger automated outbound calls and track voice interactions directly from your sales pipelines.' },
  { name: 'Zoho',      tag: 'CRM',        logo: `${R2}zoho.png`,         body: 'Embed compliant voice calling into Zoho workflows to power sales, support, and customer engagement.' },
  { name: 'Termii',    tag: 'CPaaS',      logo: `${R2}termii-wht-2.png`, body: 'Bridge messaging and voice infrastructure to deliver unified, reliable customer communications.' },
  { name: 'Zapier',    tag: 'Automation', logo: `${R2}zapier.svg`,       body: 'Automate voice workflows across thousands of apps to trigger calls and alerts without writing code.' }
];

const aiProviders = [
  { name: 'Google Voice AI', tag: 'Speech AI',    logo: `${R2}Google_logo.png`,                body: "Stream Telroi calls into Google's speech, translation and conversational AI services." },
  { name: 'Deepgram',        tag: 'Transcription', logo: `${R2}deepgram.svg`,                  body: "Real-time, multilingual transcription on top of Telroi's PSTN, SIP and mobile call legs." },
  { name: 'ElevenLabs',      tag: 'Voice TTS',     logo: `${R2}elevenlabs-symbol.png`,         body: 'Lifelike voice generation in local languages, synthesised directly into the call audio path.' },
  { name: 'OpenAI',          tag: 'Reasoning',     logo: `${R2}openai.png`,                    body: 'GPT-class models reason over call context, drive AI agents and write back to your systems.' },
  { name: 'Grok',            tag: 'Reasoning',     logo: `${R2}grok-logo.png`,                 body: 'Grok models from xAI power call reasoning, intent handling and agent decisions across the Telroi voice path.' },
  { name: 'Twilio',          tag: 'CPaaS',         logo: `${R2}twilio-logo-png-transparent.png`, body: 'Bridge Twilio voice services with Telroi routing for hybrid global termination and AI workflows.' },
  {
    name: 'Custom AI models',
    tag: 'Custom',
    svg: `<circle cx="16" cy="16" r="6"/><circle cx="16" cy="16" r="12" stroke-dasharray="2 3"/><circle cx="16" cy="4"  r="1.6" fill="#1a4b72"/><circle cx="28" cy="16" r="1.6" fill="#1a4b72"/><circle cx="16" cy="28" r="1.6" fill="#1a4b72"/><circle cx="4"  cy="16" r="1.6" fill="#1a4b72"/>`,
    body: 'Plug in your in-house models or fine-tuned LLMs over websocket. Telroi handles voice, you handle intelligence.'
  }
];
</script>

<style scoped>
.integrations-section { padding: 110px 0; background: var(--paper); }

.int-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 56px;
}
.int-card {
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: var(--radius);
  padding: 22px;
  display: flex; flex-direction: column;
  transition: border-color 0.2s, transform 0.2s;
  min-height: 170px;
}
.int-card:hover { border-color: var(--ink); transform: translateY(-2px); }
.int-head {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}
.int-logo { height: 36px; display: flex; align-items: center; }
.int-logo img { max-height: 36px; max-width: 130px; object-fit: contain; }
.int-tag {
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
.int-card h4 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 17px;
  letter-spacing: -0.015em;
  margin: 0 0 8px;
}
.int-card p {
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--ink-soft);
  margin: 0;
}
@media (max-width: 1024px) { .int-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 700px)  { .int-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 460px)  { .int-grid { grid-template-columns: 1fr; } }

.int-divider {
  margin-top: 100px;
  margin-bottom: 48px;
  text-align: left;
  max-width: 680px;
}
.int-divider .sublabel {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--signal);
  margin-bottom: 16px;
}
.int-divider h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(26px, 3vw, 36px);
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin: 0 0 14px;
  color: var(--ink);
}
.int-divider h3 em { font-style: normal; font-weight: 300; color: var(--ink-soft); }
.int-divider p {
  font-size: 16px;
  line-height: 1.55;
  color: var(--ink-soft);
  margin: 0;
  max-width: 620px;
}

.ai-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.ai-card {
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: var(--radius);
  padding: 22px;
  display: flex; flex-direction: column;
  gap: 14px;
  transition: border-color 0.2s, transform 0.2s;
  min-height: 170px;
}
.ai-card:hover { border-color: var(--ink); transform: translateY(-2px); }
.ai-card .ai-head {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px;
}
.ai-card .ai-logo {
  height: 28px;
  display: flex; align-items: center;
  color: var(--ink);
}
.ai-card .ai-logo img { max-height: 28px; max-width: 110px; object-fit: contain; }
.ai-card .ai-logo svg { height: 26px; width: auto; }
.ai-card .ai-name {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 17px;
  letter-spacing: -0.015em;
  margin: 0;
  color: var(--ink);
}
.ai-card .ai-desc {
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--ink-soft);
  margin: 6px 0 0;
}
.ai-card .ai-tag {
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
@media (max-width: 1024px) { .ai-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 700px)  { .ai-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 460px)  { .ai-grid { grid-template-columns: 1fr; } }

.byoai-ribbon {
  margin-top: 56px;
  padding: 24px 32px;
  border: 1px solid var(--rule);
  border-radius: 14px;
  background: var(--paper-2);
  display: flex; align-items: center; justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.byoai-ribbon .ribbon-text { display: flex; flex-direction: column; gap: 4px; }
.byoai-ribbon .ribbon-title {
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.015em;
  color: var(--ink);
}
.byoai-ribbon .ribbon-sub { font-size: 14px; color: var(--ink-soft); }
.byoai-ribbon .ribbon-link {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ink);
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
  transition: color 0.15s, border-color 0.15s, gap 0.15s;
  white-space: nowrap;
}
.byoai-ribbon .ribbon-link:hover {
  color: var(--signal);
  border-color: var(--signal);
  gap: 12px;
}
.byoai-ribbon .ribbon-link-btn {
  background: none;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  cursor: pointer;
  font-family: inherit;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}
</style>
