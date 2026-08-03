<template>
  <section class="van-section" id="van">
    <div class="wrap">
      <div class="van-wrap">

        <div class="van-content reveal">
          <div class="kicker">Telroi VAN</div>
          <h2 class="sec-title">
            <span>Every business number,</span> <em>now AI-powered.</em>
          </h2>
          <p class="sec-lede">Answer every call. In any language.</p>

          <div style="margin-top: 32px;">
            <a href="#contact" class="btn btn-dark">
              <span>Get a VAN number</span> <span class="arrow">→</span>
            </a>
          </div>
        </div>

        <div class="van-visual reveal reveal-delay-1">
          <div class="v-content">
            <div class="v-meta">Inbound · 09:42</div>

            <div class="v-transcript" ref="transcriptEl">
              <div
                v-for="(line, i) in lines"
                :key="i"
                class="v-msg"
                :class="line.from === 'caller' ? 'from-caller' : 'from-agent'"
                :style="{ opacity: dimOthers && activeLine !== i ? 0.35 : 1 }"
                :data-line="line.from"
              >{{ line.text }}</div>
            </div>

            <div class="v-waveform" aria-hidden="true">
              <svg viewBox="0 0 320 60" preserveAspectRatio="none" width="100%" height="100%">
                <path fill="none" stroke="#7fa8c5" stroke-width="1" stroke-linecap="round" opacity="0.35"
                      d="M 10 30 Q 40 12 70 24 T 130 30 T 190 36 T 250 24 T 310 30">
                  <animate attributeName="d"
                    values="M 10 30 Q 40 12 70 24 T 130 30 T 190 36 T 250 24 T 310 30;M 10 30 Q 40 48 70 36 T 130 30 T 190 24 T 250 36 T 310 30;M 10 30 Q 40 12 70 24 T 130 30 T 190 36 T 250 24 T 310 30"
                    dur="3.6s" repeatCount="indefinite"/>
                </path>
                <path fill="none" stroke="#7fa8c5" stroke-width="1.2" stroke-linecap="round" opacity="0.55"
                      d="M 10 30 Q 40 8 70 22 T 130 30 T 190 38 T 250 22 T 310 30">
                  <animate attributeName="d"
                    values="M 10 30 Q 40 8 70 22 T 130 30 T 190 38 T 250 22 T 310 30;M 10 30 Q 40 52 70 38 T 130 30 T 190 22 T 250 38 T 310 30;M 10 30 Q 40 8 70 22 T 130 30 T 190 38 T 250 22 T 310 30"
                    dur="3.2s" repeatCount="indefinite"/>
                </path>
                <path fill="none" stroke="#a1bdd4" stroke-width="1.4" stroke-linecap="round" opacity="0.75"
                      d="M 10 30 Q 40 4 70 20 T 130 30 T 190 40 T 250 20 T 310 30">
                  <animate attributeName="d"
                    values="M 10 30 Q 40 4 70 20 T 130 30 T 190 40 T 250 20 T 310 30;M 10 30 Q 40 56 70 40 T 130 30 T 190 20 T 250 40 T 310 30;M 10 30 Q 40 4 70 20 T 130 30 T 190 40 T 250 20 T 310 30"
                    dur="2.8s" repeatCount="indefinite"/>
                </path>
                <path fill="none" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" opacity="0.95"
                      d="M 10 30 Q 40 2 70 18 T 130 30 T 190 42 T 250 18 T 310 30">
                  <animate attributeName="d"
                    values="M 10 30 Q 40 2 70 18 T 130 30 T 190 42 T 250 18 T 310 30;M 10 30 Q 40 58 70 42 T 130 30 T 190 18 T 250 42 T 310 30;M 10 30 Q 40 2 70 18 T 130 30 T 190 42 T 250 18 T 310 30"
                    dur="2.4s" repeatCount="indefinite"/>
                </path>
                <path fill="none" stroke="#ffffff" stroke-width="0.8" stroke-linecap="round" opacity="0.7"
                      d="M 10 30 Q 40 16 70 26 T 130 30 T 190 34 T 250 26 T 310 30">
                  <animate attributeName="d"
                    values="M 10 30 Q 40 16 70 26 T 130 30 T 190 34 T 250 26 T 310 30;M 10 30 Q 40 44 70 34 T 130 30 T 190 26 T 250 34 T 310 30;M 10 30 Q 40 16 70 26 T 130 30 T 190 34 T 250 26 T 310 30"
                    dur="2s" repeatCount="indefinite"/>
                </path>
              </svg>
            </div>

            <div v-if="speechSupported" class="v-play-wrap">
              <button
                class="v-play-btn"
                :class="{ playing }"
                type="button"
                :aria-label="playing ? 'Pause conversation' : 'Play conversation'"
                @click="togglePlay"
              >
                <svg v-if="!playing" class="icon-mic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="3" width="6" height="11" rx="3"/>
                  <path d="M19 11a7 7 0 0 1-14 0"/>
                  <line x1="12" y1="19" x2="12" y2="22"/>
                  <line x1="9" y1="22" x2="15" y2="22"/>
                </svg>
                <svg v-else class="icon-pause" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="6" y="5" width="4" height="14" rx="1"/>
                  <rect x="14" y="5" width="4" height="14" rx="1"/>
                </svg>
              </button>
              <div class="v-play-label">
                <span class="lead">{{ playing ? 'Now playing…' : 'Hear the conversation' }}</span>
                <span class="hint">Tap to listen</span>
              </div>
            </div>

            <div class="v-phone-card">
              <div class="v-phone-num">+1 (800) TEL-ROI8</div>
              <div class="v-phone-label">Dedicated AI business number · live</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

interface Line { from: 'caller' | 'agent'; text: string; }

const lines: Line[] = [
  { from: 'caller', text: "Hey, are you guys open this Sunday?" },
  { from: 'agent',  text: "Hi there! Yes, we're open Sunday from 10 to 4. Want me to book you a spot?" },
  { from: 'caller', text: "That'd be great. Around eleven works." },
  { from: 'agent',  text: "You're all set for 11 AM. I'll text you a confirmation in just a sec. Have a good one!" }
];

const playing = ref(false);
const activeLine = ref<number>(-1);
const dimOthers = ref(false);
const speechSupported = ref(true);
const transcriptEl = ref<HTMLElement | null>(null);

let synth: SpeechSynthesis | null = null;
let callerVoice: SpeechSynthesisVoice | null = null;
let agentVoice: SpeechSynthesisVoice | null = null;

function pickVoices() {
  if (!synth) return;
  const voices = synth.getVoices();
  if (!voices.length) return;

  const PREFERRED: RegExp[] = [
    /^Google US English$/i,
    /^Microsoft Aria.*Neural/i,
    /^Microsoft Jenny.*Neural/i,
    /^Microsoft Guy.*Neural/i,
    /Samantha.*Enhanced/i,
    /Samantha.*Premium/i,
    /^Samantha$/i,
    /Ava.*Enhanced/i,
    /Allison.*Enhanced/i,
    /Karen.*Enhanced/i,
    /^Google.*en-US/i,
    /Microsoft (Aria|Jenny|Guy|Davis|Sara|Tony|Nancy|Jane|Christopher)/i
  ];
  const ROBOTIC: RegExp[] = [
    /Microsoft David/i,
    /Microsoft Zira(?!.*Neural)/i,
    /Microsoft Mark(?!.*Neural)/i,
    /^Fred$/i, /^Albert$/i, /^Bahh$/i, /^Bells$/i, /^Boing$/i,
    /^Bubbles$/i, /^Cellos$/i, /^Deranged$/i, /^Hysterical$/i,
    /^Whisper$/i, /^Trinoids$/i, /^Zarvox$/i, /^Bad News$/i,
    /^Good News$/i, /^Junior$/i, /^Kathy$/i, /^Princess$/i,
    /^Ralph$/i, /^Vicki$/i, /^Victoria$/i, /espeak/i, /pico/i
  ];

  const isPreferred = (v: SpeechSynthesisVoice) => PREFERRED.some(rx => rx.test(v.name));
  const isRobotic = (v: SpeechSynthesisVoice) => ROBOTIC.some(rx => rx.test(v.name));
  const langScore = (v: SpeechSynthesisVoice) => {
    const lang = (v.lang || '').toLowerCase();
    if (lang.startsWith('en-us')) return 4;
    if (lang.startsWith('en-ca')) return 3;
    if (lang.startsWith('en-gb')) return 2;
    if (lang.startsWith('en'))    return 1;
    return 0;
  };

  const ranked = voices
    .filter(v => /^en/i.test(v.lang || ''))
    .filter(v => !isRobotic(v))
    .sort((a, b) => {
      const ap = isPreferred(a) ? 1 : 0;
      const bp = isPreferred(b) ? 1 : 0;
      if (ap !== bp) return bp - ap;
      return langScore(b) - langScore(a);
    });

  const best = ranked[0] || voices.find(v => /^en/i.test(v.lang || '')) || voices[0];
  callerVoice = best;
  agentVoice = best;
}

function speakLine(i: number) {
  if (!synth || !playing.value || i >= lines.length) {
    stop();
    return;
  }
  const line = lines[i];
  activeLine.value = i;
  dimOthers.value = true;

  const u = new SpeechSynthesisUtterance(line.text);
  u.rate = 1.0;
  u.pitch = line.from === 'agent' ? 0.85 : 1.15;
  u.volume = 1;
  u.lang = 'en-US';
  if (line.from === 'agent' && agentVoice) u.voice = agentVoice;
  if (line.from === 'caller' && callerVoice) u.voice = callerVoice;
  u.onend = () => {
    if (playing.value) setTimeout(() => speakLine(i + 1), 300);
  };
  u.onerror = () => {
    if (playing.value) setTimeout(() => speakLine(i + 1), 300);
  };
  synth.speak(u);
}

function start() {
  if (!synth) return;
  try { synth.cancel(); } catch {}
  playing.value = true;
  pickVoices();
  speakLine(0);
}

function stop() {
  if (synth) {
    try { synth.cancel(); } catch {}
  }
  playing.value = false;
  activeLine.value = -1;
  dimOthers.value = false;
}

function togglePlay() {
  if (playing.value) stop();
  else start();
}

onMounted(() => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    speechSupported.value = false;
    return;
  }
  synth = window.speechSynthesis;
  pickVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = pickVoices;
  }
});

onBeforeUnmount(() => {
  stop();
});
</script>

<style scoped>
.van-section { background: var(--paper); padding: 110px 0; }
.van-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.van-content :deep(h2.sec-title) { margin-top: 8px; }

.van-visual {
  aspect-ratio: 4 / 5;
  border-radius: 20px;
  background: var(--ink);
  color: #fff;
  padding: 32px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.van-visual::before {
  content: ""; position: absolute; inset: 0;
  background:
    radial-gradient(50% 80% at 30% 20%, rgba(26,75,114,0.30), transparent 70%),
    radial-gradient(60% 80% at 90% 90%, rgba(0,210,138,0.10), transparent 70%);
  pointer-events: none;
}
.van-visual::after {
  content: ""; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  mask-image: radial-gradient(70% 80% at 50% 50%, black, transparent 95%);
}
.van-visual .v-content {
  position: relative; z-index: 1;
  height: 100%;
  display: flex; flex-direction: column;
}
.v-meta {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
}

@media (max-width: 960px) {
  .van-visual { aspect-ratio: auto; padding: 28px; }
  .van-visual .v-content { height: auto; }
  .v-phone-card { margin-top: 20px; }
}
@media (max-width: 520px) {
  .van-visual { padding: 24px; border-radius: 16px; }
  .v-msg { max-width: 90% !important; }
}

.v-phone-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 12px;
  padding: 20px;
  margin-top: auto;
  backdrop-filter: blur(6px);
}
.v-phone-num {
  font-family: var(--font-display);
  font-size: 25px;
  letter-spacing: -0.02em;
  margin-bottom: 6px;
}
.v-phone-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
}
.v-transcript {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.v-msg {
  font-size: 13px;
  line-height: 1.45;
  padding: 10px 14px;
  border-radius: 12px;
  max-width: 80%;
  transition: opacity 0.25s;
}
.v-msg.from-caller {
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.85);
  align-self: flex-start;
  border-bottom-left-radius: 4px;
}
.v-msg.from-agent {
  background: var(--signal);
  color: #fff;
  align-self: flex-end;
  border-bottom-right-radius: 4px;
}
.v-waveform {
  margin-top: 16px;
  height: 60px;
  width: 100%;
  display: block;
}

.v-play-wrap {
  position: relative;
  margin-top: 18px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.v-play-btn {
  flex-shrink: 0;
  width: 56px; height: 56px;
  border-radius: 50%;
  border: 0;
  background: var(--signal);
  color: #fff;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.15s, transform 0.15s, box-shadow 0.25s;
  position: relative;
  box-shadow: 0 0 0 0 rgba(77, 131, 179, 0.55);
}
.v-play-btn:hover { background: #4d83b3; transform: scale(1.04); }
.v-play-btn svg { width: 22px; height: 22px; }
.v-play-btn.playing {
  background: #4d83b3;
  animation: pulse-ring 1.6s ease-out infinite;
}
@keyframes pulse-ring {
  0%   { box-shadow: 0 0 0 0    rgba(77, 131, 179, 0.55); }
  70%  { box-shadow: 0 0 0 14px rgba(77, 131, 179, 0); }
  100% { box-shadow: 0 0 0 0    rgba(77, 131, 179, 0); }
}
.v-play-label { display: flex; flex-direction: column; gap: 2px; }
.v-play-label .lead {
  font-size: 13px;
  color: rgba(255,255,255,0.92);
  font-weight: 500;
}
.v-play-label .hint {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
}

@media (max-width: 960px) {
  .van-wrap { grid-template-columns: 1fr; gap: 40px; }
}
</style>
