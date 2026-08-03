<template>
  <section class="api-section" id="developers">
    <div class="wrap">
      <div class="api-wrap">

        <div class="api-left reveal">
          <div class="kicker">{{ t('dev.kicker') }}</div>
          <h2 class="sec-title">
            <span>{{ t('dev.title') }}</span> <span>{{ t('dev.titleEm') }}</span>
          </h2>
          <p class="sec-lede">
            {{ t('dev.lede') }}
          </p>
          <div class="dev-ctas">
            <a href="https://app.telroi.ai/api/docs" target="_blank" rel="noopener noreferrer" class="dev-docs-link">
              <span>{{ t('dev.cta') }}</span> <span class="arrow">→</span>
            </a>
          </div>
        </div>

        <div class="reveal reveal-delay-1">
          <div class="code-card">
            <div class="code-tabs" role="tablist">
              <button
                v-for="tab in tabs"
                :key="tab.id"
                class="code-tab"
                :class="{ active: activeTab === tab.id }"
                @click="activeTab = tab.id"
                role="tab"
                :aria-selected="activeTab === tab.id"
              >{{ tab.label }}</button>
            </div>
            <div class="code-body" role="tabpanel">
              <pre v-show="activeTab === 'otp'"><span class="ln-cmt"># Place a call that reads a one-time passcode aloud.</span>
<span class="ln-meta">curl</span> --location --request <span class="ln-key">POST</span> \
  <span class="ln-str">'https://app.telroi.ai/v1/otp'</span> \
  --header <span class="ln-str">'Authorization: Bearer tlr_live_xxx'</span> \
  --header <span class="ln-str">'Content-Type: application/json'</span> \
  --data <span class="ln-str">'{{ '{' }}
    "to": "+2348012345678",
    "code_length": 6
  {{ '}' }}'</span>

<span class="ln-cmt"># →</span>
<span class="ln-pun">{{ '{' }}</span>
  <span class="ln-key">"object"</span><span class="ln-pun">:</span> <span class="ln-str">"otp"</span><span class="ln-pun">,</span>
  <span class="ln-key">"id"</span><span class="ln-pun">:</span>     <span class="ln-str">"otp_8f3c..."</span><span class="ln-pun">,</span>
  <span class="ln-key">"to"</span><span class="ln-pun">:</span>     <span class="ln-str">"+2348012345678"</span><span class="ln-pun">,</span>
  <span class="ln-key">"status"</span><span class="ln-pun">:</span> <span class="ln-str">"delivered"</span>
<span class="ln-pun">{{ '}' }}</span></pre>

              <pre v-show="activeTab === 'calls'"><span class="ln-cmt"># Originate an outbound voice call via the API.</span>
<span class="ln-meta">curl</span> --location --request <span class="ln-key">POST</span> \
  <span class="ln-str">'https://app.telroi.ai/v1/calls'</span> \
  --header <span class="ln-str">'Authorization: Bearer tlr_live_xxx'</span> \
  --header <span class="ln-str">'Content-Type: application/json'</span> \
  --data <span class="ln-str">'{{ '{' }}
    "to":   "+2348012345678",
    "from": "+15551234567"
  {{ '}' }}'</span>

<span class="ln-cmt"># →</span>
<span class="ln-pun">{{ '{' }}</span>
  <span class="ln-key">"object"</span><span class="ln-pun">:</span> <span class="ln-str">"call"</span><span class="ln-pun">,</span>
  <span class="ln-key">"id"</span><span class="ln-pun">:</span>     <span class="ln-str">"call_2015..."</span><span class="ln-pun">,</span>
  <span class="ln-key">"status"</span><span class="ln-pun">:</span> <span class="ln-str">"ringing"</span>
<span class="ln-pun">{{ '}' }}</span></pre>

              <pre v-show="activeTab === 'tts'"><span class="ln-cmt"># Turn text into natural-sounding speech audio.</span>
<span class="ln-meta">curl</span> --location --request <span class="ln-key">POST</span> \
  <span class="ln-str">'https://app.telroi.ai/v1/speech/tts'</span> \
  --header <span class="ln-str">'Authorization: Bearer tlr_live_xxx'</span> \
  --header <span class="ln-str">'Content-Type: application/json'</span> \
  --data <span class="ln-str">'{{ '{' }}
    "text":     "Your appointment is confirmed.",
    "language": "en-US"
  {{ '}' }}'</span>

<span class="ln-cmt"># → returns an audio URL you can stream or play on a call.</span>
<span class="ln-pun">{{ '{' }}</span>
  <span class="ln-key">"object"</span><span class="ln-pun">:</span> <span class="ln-str">"speech"</span><span class="ln-pun">,</span>
  <span class="ln-key">"audio_url"</span><span class="ln-pun">:</span> <span class="ln-str">"https://..."</span>
<span class="ln-pun">{{ '}' }}</span></pre>

              <pre v-show="activeTab === 'numbers'"><span class="ln-cmt"># List the phone numbers provisioned to your workspace.</span>
<span class="ln-meta">curl</span> --location --request <span class="ln-key">GET</span> \
  <span class="ln-str">'https://app.telroi.ai/v1/numbers'</span> \
  --header <span class="ln-str">'Authorization: Bearer tlr_live_xxx'</span>

<span class="ln-cmt"># →</span>
<span class="ln-pun">{{ '{' }}</span>
  <span class="ln-key">"object"</span><span class="ln-pun">:</span> <span class="ln-str">"list"</span><span class="ln-pun">,</span>
  <span class="ln-key">"data"</span><span class="ln-pun">: [</span>
    <span class="ln-pun">{{ '{' }}</span>
      <span class="ln-key">"object"</span><span class="ln-pun">:</span> <span class="ln-str">"number"</span><span class="ln-pun">,</span>
      <span class="ln-key">"e164"</span><span class="ln-pun">:</span>   <span class="ln-str">"+2348012345678"</span><span class="ln-pun">,</span>
      <span class="ln-key">"type"</span><span class="ln-pun">:</span>   <span class="ln-str">"local"</span>
    <span class="ln-pun">{{ '}' }}</span>
  <span class="ln-pun">]</span>
<span class="ln-pun">{{ '}' }}</span></pre>
            </div>
            <div class="code-foot">
              <span class="live-dot">Sandbox · sub-200ms response</span>
              <span>cURL · Node · Python · Go</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
import { ref } from 'vue';

type TabId = 'otp' | 'calls' | 'tts' | 'numbers';
const activeTab = ref<TabId>('otp');

const tabs: { id: TabId; label: string }[] = [
  { id: 'otp',     label: 'POST /v1/otp' },
  { id: 'calls',   label: 'POST /v1/calls' },
  { id: 'tts',     label: 'POST /v1/speech/tts' },
  { id: 'numbers', label: 'GET /v1/numbers' }
];
</script>

<style scoped>
.api-section { background: var(--paper-2); padding: 110px 0; }
.api-wrap {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 56px;
  align-items: stretch;
}
.api-left { display: flex; flex-direction: column; }

.code-card {
  background: #0b0b0e;
  border-radius: var(--radius);
  border: 1px solid #1d1d22;
  overflow: hidden;
  color: #e6e6ea;
  font-family: var(--font-mono);
  font-size: 13.5px;
  line-height: 1.6;
  box-shadow: 0 20px 50px -20px rgba(10,10,11,0.25);
}
.code-tabs {
  display: flex;
  border-bottom: 1px solid #1d1d22;
  background: #08080a;
}
.code-tab {
  padding: 14px 18px;
  font-size: 12.5px;
  color: rgba(255,255,255,0.5);
  cursor: pointer;
  border-right: 1px solid #1d1d22;
  background: transparent;
  font-family: var(--font-mono);
  letter-spacing: 0.02em;
  transition: color 0.15s, background 0.15s;
}
.code-tab:hover { color: #fff; }
.code-tab.active { color: #fff; background: #0b0b0e; position: relative; }
.code-tab.active::after {
  content: ""; position: absolute;
  left: 0; right: 0; bottom: -1px;
  height: 1px;
  background: var(--signal);
}
.code-body { padding: 22px 24px; overflow-x: auto; }
.code-body pre { margin: 0; font-family: inherit; }
.code-body :deep(.ln-meta) { color: rgba(255,255,255,0.35); }
.code-body :deep(.ln-cmt)  { color: #6b8a6f; }
.code-body :deep(.ln-str)  { color: #b6e3a0; }
.code-body :deep(.ln-key)  { color: #a1bdd4; }
.code-body :deep(.ln-fn)   { color: #c8a8ff; }
.code-body :deep(.ln-pun)  { color: rgba(255,255,255,0.55); }
.code-foot {
  padding: 14px 24px;
  border-top: 1px solid #1d1d22;
  background: #08080a;
  display: flex; align-items: center; justify-content: space-between;
  font-size: 12px;
  color: rgba(255,255,255,0.5);
}
.code-foot .live-dot { display: inline-flex; align-items: center; gap: 8px; }
.code-foot .live-dot::before {
  content: ""; width: 6px; height: 6px; border-radius: 50%;
  background: #00d28a;
  box-shadow: 0 0 0 3px rgba(0,210,138,0.2);
}
@media (max-width: 960px) {
  .api-wrap { grid-template-columns: 1fr; }
}
.dev-ctas {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 32px;
  flex-wrap: wrap;
}
.dev-docs-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  font-weight: 500;
  color: var(--ink);
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
  transition: border-color 0.15s, gap 0.15s, color 0.15s;
}
.dev-docs-link:hover { border-color: var(--signal); color: var(--signal); gap: 10px; }
.dev-docs-link .arrow { transition: transform 0.18s; }
.dev-docs-link:hover .arrow { transform: translateX(2px); }
</style>
