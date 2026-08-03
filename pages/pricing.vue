<template>
  <div>
    <!-- Page header -->
    <section class="pricing-head">
      <div class="wrap">
        <div class="kicker reveal">Pricing</div>
        <h1 class="reveal">Simple, transparent <em>pricing.</em></h1>
        <p class="lede reveal">One plan fee per workspace, plus usage-based rates for voice infrastructure. Every plan starts with a 7-day trial.</p>

        <!-- Currency switcher -->
        <div class="currency-switcher reveal">
          <button
            v-for="c in currencies"
            :key="c.code"
            class="currency-btn"
            :class="{ active: currency.code === c.code }"
            @click="currencyCode = c.code"
            type="button"
          >
            <span class="currency-flag">{{ c.flag }}</span>
            <span class="currency-code">{{ c.code }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Tier cards -->
    <section class="tiers">
      <div class="wrap">
        <div class="tier-grid">
          <div
            v-for="(tier, i) in tiers"
            :key="tier.name"
            class="tier-card reveal"
            :class="[i ? `reveal-delay-${i}` : '', { featured: tier.featured }]"
          >
            <div v-if="tier.featured" class="tier-flag">Most popular</div>
            <div class="tier-name">{{ tier.name }}</div>
            <div class="tier-price">
              <span class="symbol">{{ tier.price === 'Custom' ? '' : currency.symbol }}</span>
              <span class="amount">{{ tier.price === 'Custom' ? 'Custom' : formatPrice(tier.usd) }}</span>
            </div>
            <div class="tier-period">{{ tier.period }}</div>
            <button
              v-if="tier.cta === 'Talk to sales'"
              type="button"
              class="btn"
              :class="tier.featured ? 'btn-signal' : 'btn-dark'"
              data-cal-link="telroiai/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              <span>{{ tier.cta }}</span> <span class="arrow">→</span>
            </button>
            <a v-else href="https://app.telroi.ai/login?mode=signup" class="btn" :class="tier.featured ? 'btn-signal' : 'btn-dark'">
              <span>{{ tier.cta }}</span> <span class="arrow">→</span>
            </a>
            <div class="tier-fine">{{ tier.fine }}</div>
          </div>
        </div>

        <!-- Usage rates strip -->
        <div class="addons reveal">
          <div class="addons-label">Same usage rates on every plan</div>
          <div class="addons-grid">
            <div class="addon">
              <div class="addon-rate">{{ currency.symbol }}{{ formatUsage(rates.channelMonthly) }}</div>
              <div class="addon-meta">per voice channel / month</div>
            </div>
            <div class="addon">
              <div class="addon-rate">{{ currency.symbol }}{{ formatUsage(rates.numberMonthly) }}</div>
              <div class="addon-meta">per DID number / month</div>
            </div>
            <div class="addon">
              <div class="addon-rate">{{ currency.symbol }}{{ formatUsage(rates.voiceMinute) }}</div>
              <div class="addon-meta">per minute of airtime</div>
            </div>
            <div class="addon addon--highlight">
              <div class="addon-rate">Included</div>
              <div class="addon-meta">Telroi Optimize — on all plans</div>
            </div>
          </div>
        </div>

        <!-- AI usage — billed from wallet, not bundled into the plan fee -->
        <div class="ai-note reveal">
          <div class="ai-note-head">
            <div class="addons-label">AI usage — billed separately</div>
            <div class="ai-note-rate">
              ~{{ currency.symbol }}{{ formatUsage(rates.aiPerMinute) }}<span class="ai-note-unit"> / minute</span>
            </div>
          </div>
          <p class="ai-note-body">
            Speech-to-text, text-to-speech and language model usage are charged from your
            wallet as you use them. The figure above is
            indicative for a typical conversational minute — your actual cost depends on how
            much your agents speak and listen.
            <strong>Bring your own provider keys and you pay those providers directly instead.</strong>
          </p>
          <div class="ai-units">
            <div class="ai-unit">
              <span class="ai-unit-rate">{{ currency.symbol }}{{ formatUsage(rates.aiSttPerMinute) }}</span>
              <span class="ai-unit-meta">speech-to-text / minute</span>
            </div>
            <div class="ai-unit">
              <span class="ai-unit-rate">{{ currency.symbol }}{{ formatUsage(rates.aiTtsPerMillionChars, 0) }}</span>
              <span class="ai-unit-meta">text-to-speech / 1M characters</span>
            </div>
            <div class="ai-unit">
              <span class="ai-unit-rate">{{ currency.symbol }}{{ formatUsage(rates.aiLlmInPerMillionTokens) }}</span>
              <span class="ai-unit-meta">model input / 1M tokens</span>
            </div>
            <div class="ai-unit">
              <span class="ai-unit-rate">{{ currency.symbol }}{{ formatUsage(rates.aiLlmOutPerMillionTokens) }}</span>
              <span class="ai-unit-meta">model output / 1M tokens</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature matrix -->
    <section class="features-section">
      <div class="wrap">
        <div class="sec-head reveal">
          <div class="kicker">What's included</div>
          <h2 class="sec-title">Compare plans.</h2>
          <p class="sec-lede">Core voice infrastructure is available on all plans. The full Telroi One suite unlocks on Growth and above.</p>
        </div>
        <div class="feature-matrix reveal">
          <table>
            <thead>
              <tr>
                <th class="th-label">Feature</th>
                <th v-for="tier in tiers" :key="tier.name" class="th-plan">
                  <span class="th-plan-name">{{ tier.name }}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="feature in features"
                :key="feature.label"
                :class="{ 'section-break': feature.sectionBreak }"
              >
                <td class="td-label">{{ feature.label }}</td>
                <td v-for="(tier, i) in tiers" :key="`${tier.name}-${feature.label}`" class="td-check">
                  <svg v-if="feature.tiers[i]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Included">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                  <span v-else class="td-dash" aria-label="Not included">—</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Pricing FAQ -->
    <section class="faq-section" id="pricing-faq">
      <div class="wrap">
        <div class="faq-wrap">
          <div class="faq-aside reveal">
            <div class="kicker">FAQs</div>
            <h3>Pricing questions?</h3>
            <p>Everything you need to know about plans, billing, and what's included.</p>
            <button
              type="button"
              class="closing-link closing-link-btn"
              data-cal-link="telroiai/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              <span>Talk to sales</span> <span class="arrow">→</span>
            </button>
          </div>
          <div class="faq-list reveal reveal-delay-1">
            <div
              v-for="(item, i) in pricingFaqs"
              :key="i"
              class="faq-item"
              :class="{ open: openFaq === i }"
            >
              <button class="faq-q" type="button" @click="openFaq = openFaq === i ? null : i">
                <span>{{ item.q }}</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-a" :style="{ maxHeight: openFaq === i ? '400px' : '0' }">
                <div class="faq-a-inner">{{ item.a }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ClosingCta
      title-start="Ready to get your team"
      title-em="set up?"
      body="Talk to us and we'll have your account provisioned, numbers configured, and your team live — typically within one business day."
      cta-text="Talk to sales"
      cal-popup
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

useHead({
  title: 'Telroi — Pricing',
  meta: [{ name: 'description', content: 'Telroi pricing — workspace plans for Telroi One from $10/month, with usage-based rates for voice channels, numbers, airtime and AI.' }]
});

const openFaq = ref<number | null>(0);

// ── Live pricing ────────────────────────────────────────────────────────────
// Read from the platform's public pricing endpoint so this page can't drift from
// what we actually charge. The site is prerendered, so this resolves at build
// time and ships as static values; the fallback below keeps the build green if
// the endpoint is unreachable. Keep the fallback in step with the platform
// defaults in server/utils/pricing.ts.
const FALLBACK = {
  ngnPerUsd: 1600,
  plans: { startup: { usdMinor: 1000 }, growth: { usdMinor: 1500 } },
  usage: { channelMonthly: { usdMinor: 200 }, numberMonthly: { usdMinor: 170 } },
  ai: {
    markupPct: 25,
    units: {
      sttPerSecond: { usdNano: 100000 },
      ttsPerCharacter: { usdNano: 15000 },
      llmInputPerToken: { usdNano: 800 },
      llmOutputPerToken: { usdNano: 4000 }
    },
    indicativePerMinute: { usdNano: 15362500 }
  }
};

const { data: remote } = await useAsyncData('public-pricing', async () => {
  try {
    return await $fetch<any>('https://app.telroi.ai/public/pricing', { timeout: 6000 });
  } catch (e) {
    // Loud on purpose: without this a build that can't reach the endpoint still
    // goes green and ships the FALLBACK figures, and a wrong-price deploy looks
    // exactly like a correct one in the log.
    console.warn('[pricing] /public/pricing unreachable at build — using FALLBACK', e);
    return null;
  }
}, { default: () => null });

const api = computed<any>(() => remote.value || FALLBACK);

// Airtime is deliberately NOT read from the endpoint. Call billing charges
// $0.0102/min (VOICE_MICRO_USD_PER_MIN in server/utils/pricing.ts), but the
// endpoint reports voiceMinute from a whole-cent column that can only say
// $0.01. Until the platform can express sub-cent airtime, quoting the endpoint
// here would advertise less than we charge.
const VOICE_USD_PER_MIN = 0.0102;

const minor = (v: any) => (Number(v?.usdMinor) || 0) / 100;
const nano = (v: any) => (Number(v?.usdNano) || 0) / 1e9;

const rates = computed(() => {
  const a = api.value;
  return {
    startup: minor(a.plans?.startup),
    growth: minor(a.plans?.growth),
    channelMonthly: minor(a.usage?.channelMonthly),
    numberMonthly: minor(a.usage?.numberMonthly),
    voiceMinute: VOICE_USD_PER_MIN,
    aiMarkupPct: Number(a.ai?.markupPct) || 0,
    aiPerMinute: nano(a.ai?.indicativePerMinute),
    aiSttPerMinute: nano(a.ai?.units?.sttPerSecond) * 60,
    aiTtsPerMillionChars: nano(a.ai?.units?.ttsPerCharacter) * 1e6,
    aiLlmInPerMillionTokens: nano(a.ai?.units?.llmInputPerToken) * 1e6,
    aiLlmOutPerMillionTokens: nano(a.ai?.units?.llmOutputPerToken) * 1e6
  };
});

// ── Currency ────────────────────────────────────────────────────────────────
// The naira rate is the platform's own ngnPerUsd, not a number kept by hand, so
// the two stay in step when finance moves it.
const currencies = computed(() => [
  { code: 'USD', symbol: '$', flag: '🇺🇸', rate: 1 },
  { code: 'NGN', symbol: '₦', flag: '🇳🇬', rate: Number(api.value.ngnPerUsd) || 1600 }
]);
const currencyCode = ref('USD');
const currency = computed(() => currencies.value.find((c) => c.code === currencyCode.value) || currencies.value[0]);

function formatPrice(usd: number): string {
  if (currency.value.code === 'NGN') return Math.round(usd * currency.value.rate).toLocaleString();
  return Number.isInteger(usd) ? String(usd) : usd.toFixed(2);
}

function formatUsage(usd: number, usdDecimals?: number): string {
  if (currency.value.code === 'NGN') {
    const v = usd * currency.value.rate;
    // Small naira amounts lose their meaning when rounded to whole naira —
    // airtime at ₦16.32 a minute reads as ₦16 and understates the rate.
    return v >= 100 ? Math.round(v).toLocaleString() : v.toFixed(2);
  }
  if (usdDecimals !== undefined) return usd.toFixed(usdDecimals);
  if (usd >= 1) return usd.toFixed(2);
  const trimmed = usd.toFixed(4).replace(/0+$/, '');
  return trimmed.length - trimmed.indexOf('.') <= 2 ? usd.toFixed(2) : trimmed.replace(/\.$/, '');
}

// ── Plans ───────────────────────────────────────────────────────────────────
// The plan fee is charged once per workspace. There is no per-seat billing on
// the platform, and no volume tier that changes the rate by headcount.
const tiers = computed(() => [
  {
    name: 'Startup',
    usd: rates.value.startup,
    price: '',
    period: 'Per workspace, per month',
    fine: 'Core voice, AI answering and full API access. 7-day trial included.',
    cta: 'Start building',
    featured: false
  },
  {
    name: 'Growth',
    usd: rates.value.growth,
    price: '',
    period: 'Per workspace, per month',
    fine: 'Everything in Startup plus the full Telroi One suite. 7-day trial included.',
    cta: 'Start building',
    featured: true
  },
  {
    name: 'Custom',
    usd: 0,
    price: 'Custom',
    period: 'For large, regulated or white-label teams',
    fine: 'Dedicated subdomain, compliance support and custom onboarding.',
    cta: 'Talk to sales',
    featured: false
  }
]);

// Mirrors DEFAULT_FEATURES in the platform's server/utils/entitlements.ts, which
// is what actually gates access. Changing a row here without changing it there
// promises something the product will refuse to do.
// tiers array = [Startup, Growth, Custom]
const features = [
  // ── Core voice — all three plans ─────────────────────────
  { label: 'AI call answering (VAN)',                    tiers: [true,  true,  true] },
  { label: 'Call recording & transcription',             tiers: [true,  true,  true] },
  { label: 'Webhooks & API access',                      tiers: [true,  true,  true] },
  { label: 'Route scoring & fraud detection',            tiers: [true,  true,  true] },
  { label: 'CLI-compliant voice routing',                tiers: [true,  true,  true] },
  { label: 'DID number provisioning',                    tiers: [true,  true,  true] },
  { label: 'Multi-language AI support',                  tiers: [true,  true,  true] },
  // ── Telroi One suite — Growth & Custom ───────────────────
  { label: 'Telroi CRM — contacts, deals, call logs',    tiers: [false, true,  true], sectionBreak: true },
  { label: 'Live Call — website & app call widget',      tiers: [false, true,  true] },
  { label: 'Apps & Integrations',                        tiers: [false, true,  true] },
  { label: 'Desktop dialer (Mac & Windows)',             tiers: [false, true,  true] },
  { label: 'Team messenger',                             tiers: [false, true,  true] },
  { label: 'yourcompany.telroi.ai subdomain',            tiers: [false, true,  true] },
  { label: 'AI call summaries to CRM',                   tiers: [false, true,  true] },
  { label: 'Admin controls & user management',           tiers: [false, true,  true] },
  { label: 'Priority support',                           tiers: [false, true,  true] },
  // ── Custom only ──────────────────────────────────────────
  { label: 'Custom onboarding',                          tiers: [false, false, true], sectionBreak: true },
  { label: 'Dedicated compliance support',               tiers: [false, false, true] },
  { label: 'White-label & on-prem options',              tiers: [false, false, true] }
];

const pricingFaqs = computed(() => [
  {
    q: 'Is the plan fee per user?',
    a: 'No. The plan fee is charged once per workspace, however many people you add. What scales with your usage is the voice infrastructure underneath it — channels, numbers, airtime and AI — which is billed on what you actually consume.'
  },
  {
    q: "What's the difference between Startup and Growth?",
    a: 'Startup covers the core voice platform: AI call answering, recording and transcription, routing, numbers and full API access. Growth adds the Telroi One suite on top — CRM, Live Call, the desktop dialer, team messenger, apps and integrations, your own subdomain, AI call summaries, admin controls and priority support.'
  },
  {
    q: 'How are voice channels, DIDs and airtime billed?',
    a: `These usage rates are the same on every plan: ${currency.value.symbol}${formatUsage(rates.value.channelMonthly)} per voice channel per month, ${currency.value.symbol}${formatUsage(rates.value.numberMonthly)} per DID number per month, and ${currency.value.symbol}${formatUsage(rates.value.voiceMinute)} per minute of airtime. Number and channel fees run on a 30-day cycle from the day each number is provisioned. Partial minutes of airtime are rounded up.`
  },
  {
    q: 'Is AI usage included in the plan?',
    a: `No — AI is billed on what you use. Speech-to-text, text-to-speech and language model calls are charged from your wallet as you use them, which works out to roughly ${currency.value.symbol}${formatUsage(rates.value.aiPerMinute)} for a typical conversational minute. If you would rather not go through us, connect your own provider keys and you pay those providers directly instead.`
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes. Both Startup and Growth begin with a 7-day trial of the plan you pick, self-serve at signup. We collect a card up front but charge nothing until the trial ends. If you do nothing, the workspace drops to Startup rather than switching off. Sandbox API keys for testing Telroi Connect are free and need no card at all.'
  },
  {
    q: 'Can I switch plans later?',
    a: 'Yes, from your workspace settings, and the change takes effect immediately. Switching to a paid plan ends any trial you are on. Because plan fees are debited from your wallet on a monthly anchor rather than invoiced in arrears, it is worth switching close to your billing date if you want to get the most out of the month you have already paid for.'
  },
  {
    q: 'When should I pick the Custom plan?',
    a: 'Custom is for regulated industries, high-volume API deployments, white-label partners, and teams with specific compliance or data residency requirements. Pricing is quoted against your footprint rather than listed here, so talk to our team.'
  },
  {
    q: 'How do I pay?',
    a: 'Telroi runs on a prepaid wallet. You top it up by card or bank transfer — Stripe for USD accounts, Paystack and Monnify for naira accounts, including a dedicated virtual account for transfers — and plan fees, number and channel fees, airtime and AI usage are all debited from that balance. Keeping a working balance matters: if a number subscription comes due against a wallet that cannot cover it, that number is suspended rather than overdrawn.'
  }
]);
</script>

<style scoped>
/* ============ Page header ============ */
.pricing-head { padding: 80px 0 60px; }
.pricing-head h1 {
  font-family: var(--font-display); font-weight: 400;
  font-size: clamp(35px, 4.4vw, 56px);
  line-height: 1.06; letter-spacing: -0.03em;
  margin: 0 0 20px; max-width: 680px;
}
.pricing-head h1 em { font-style: normal; font-weight: 300; color: var(--ink-soft); }
.pricing-head .lede { font-size: 17px; line-height: 1.55; color: var(--ink-soft); max-width: 560px; margin: 0; }

/* Currency switcher */
.currency-switcher {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 28px;
  background: var(--paper-2);
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 4px;
}
.currency-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 16px;
  border-radius: 999px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--ink-soft);
  transition: background 0.15s, color 0.15s;
}
.currency-btn:hover { color: var(--ink); }
.currency-btn.active {
  background: #fff;
  color: var(--ink);
  box-shadow: 0 1px 4px rgba(10,10,11,0.08);
}
.currency-flag { font-size: 17px; line-height: 1; }
.currency-code { font-family: var(--font-mono); letter-spacing: 0.06em; font-size: 12px; }

/* ============ Tier cards ============ */
.tiers { padding-bottom: 100px; }
.tier-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.tier-card {
  position: relative; background: #fff; border: 1px solid var(--rule);
  border-radius: var(--radius-lg); padding: 40px 32px 32px;
  display: flex; flex-direction: column; gap: 0;
  transition: border-color 0.2s, transform 0.2s;
}
.tier-card:hover { border-color: var(--ink); transform: translateY(-2px); }
.tier-card.featured { background: var(--ink); border-color: var(--ink); }
.tier-card.featured:hover { border-color: var(--signal); }
.tier-flag {
  position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
  background: var(--signal); color: #fff;
  font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.1em;
  text-transform: uppercase; padding: 4px 14px; border-radius: 0 0 8px 8px;
}
.tier-name {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--ink-soft); margin-bottom: 20px;
}
.tier-card.featured .tier-name { color: rgba(255,255,255,0.55); }
.tier-price { display: flex; align-items: baseline; gap: 3px; }
.tier-price .symbol { font-size: 19px; color: var(--ink-soft); }
.tier-price .amount {
  font-family: var(--font-display); font-size: 53px;
  letter-spacing: -0.04em; line-height: 1; color: var(--ink);
}
.tier-card.featured .tier-price .symbol,
.tier-card.featured .tier-price .amount { color: #fff; }
.tier-period { font-size: 13px; color: var(--ink-soft); margin: 6px 0 28px; }
.tier-card.featured .tier-period { color: rgba(255,255,255,0.55); }
.tier-fine { font-size: 12.5px; color: var(--ink-soft); margin-top: 16px; }
.tier-card.featured .tier-fine { color: rgba(255,255,255,0.45); }

/* ============ Add-ons strip ============ */
.addons {
  margin-top: 40px; padding: 28px 32px;
  background: var(--paper-2); border-radius: var(--radius-lg);
  border: 1px solid var(--rule);
}
.addons-label {
  font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--ink-soft); margin-bottom: 20px;
}
.addons-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.addon-rate { font-family: var(--font-display); font-size: 19px; letter-spacing: -0.02em; color: var(--ink); }
.addon-meta { font-size: 12.5px; color: var(--ink-soft); margin-top: 4px; }
.addon--highlight .addon-rate { color: #00a872; }
.addon--highlight .addon-meta { color: #00a872; opacity: 0.8; }

/* ============ AI usage note ============ */
.ai-note {
  margin-top: 20px; padding: 28px 32px;
  background: #fff; border: 1px solid var(--rule);
  border-radius: var(--radius-lg);
}
.ai-note-head {
  display: flex; align-items: baseline; justify-content: space-between;
  gap: 24px; flex-wrap: wrap; margin-bottom: 14px;
}
.ai-note-head .addons-label { margin-bottom: 0; }
.ai-note-rate {
  font-family: var(--font-display); font-size: 19px;
  letter-spacing: -0.02em; color: var(--ink);
}
.ai-note-unit { font-family: var(--font-body); font-size: 13px; color: var(--ink-soft); letter-spacing: 0; }
.ai-note-body {
  font-size: 14px; line-height: 1.6; color: var(--ink-soft);
  margin: 0 0 22px; max-width: 720px;
}
.ai-note-body strong { color: var(--ink); font-weight: 500; }
.ai-units {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
  padding-top: 20px; border-top: 1px solid var(--rule-2);
}
.ai-unit { display: flex; flex-direction: column; gap: 3px; }
.ai-unit-rate { font-family: var(--font-mono); font-size: 14px; color: var(--ink); }
.ai-unit-meta { font-size: 12px; color: var(--ink-soft); }

@media (max-width: 700px) {
  .ai-units { grid-template-columns: repeat(2, 1fr); }
  .ai-note { padding: 24px 20px; }
}

/* ============ Feature matrix ============ */
.features-section { padding: 80px 0 100px; background: var(--paper-2); }
.feature-matrix { margin-top: 52px; border: 1px solid var(--rule); border-radius: var(--radius-lg); overflow: hidden; background: #fff; }
.feature-matrix table { width: 100%; border-collapse: collapse; }
.feature-matrix thead { background: var(--paper-2); }
.feature-matrix thead th { padding: 18px 24px; text-align: left; border-bottom: 1px solid var(--rule); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-soft); }
.feature-matrix thead .th-plan { text-align: center; }
.feature-matrix .th-plan-name { color: var(--ink); }
.feature-matrix tbody tr { border-bottom: 1px solid var(--rule-2); }
.feature-matrix tbody tr:last-child { border-bottom: 0; }
.feature-matrix tbody tr:hover { background: var(--paper-2); }
.feature-matrix .td-label { padding: 14px 24px; font-size: 14.5px; color: var(--ink); }
.feature-matrix .td-check { text-align: center; padding: 14px 8px; }
.feature-matrix tbody tr.section-break td { border-top: 2px solid var(--rule); }
.feature-matrix .td-check svg { width: 18px; height: 18px; color: var(--signal); display: inline-block; }
.feature-matrix .td-dash { font-size: 16px; color: var(--rule); line-height: 1; }

@media (max-width: 700px) {
  .feature-matrix thead th { padding: 14px 12px; font-size: 10.5px; }
  .feature-matrix .td-label { padding: 12px 14px; font-size: 13.5px; }
  .feature-matrix .td-check { padding: 12px 4px; }
  .feature-matrix .td-check svg { width: 16px; height: 16px; }
}

/* ============ FAQ section ============ */
.faq-section { padding: 110px 0; background: #fff; }
.faq-wrap { display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: start; }
.faq-list { display: flex; flex-direction: column; }
.faq-item { border-top: 1px solid var(--rule); }
.faq-item:last-child { border-bottom: 1px solid var(--rule); }
.faq-q {
  display: flex; justify-content: space-between; align-items: flex-start;
  gap: 24px; padding: 24px 0; cursor: pointer;
  background: none; border: 0; width: 100%; text-align: left;
  color: var(--ink); font-family: var(--font-display); font-weight: 400;
  font-size: 19px; letter-spacing: -0.015em; line-height: 1.3;
  transition: color 0.2s;
}
.faq-q:hover { color: var(--signal); }
.faq-icon {
  flex-shrink: 0; width: 22px; height: 22px; margin-top: 2px; position: relative;
}
.faq-icon::before, .faq-icon::after {
  content: ""; position: absolute; left: 50%; top: 50%;
  background: var(--ink); border-radius: 1px; transition: transform 0.25s ease, background 0.2s;
}
.faq-icon::before { width: 14px; height: 1.5px; transform: translate(-50%, -50%); }
.faq-icon::after { width: 1.5px; height: 14px; transform: translate(-50%, -50%); }
.faq-item.open .faq-icon::after { transform: translate(-50%, -50%) scaleY(0); }
.faq-item.open .faq-icon::before { background: var(--signal); }
.faq-item.open .faq-q { color: var(--signal); }
.faq-a { max-height: 0; overflow: hidden; transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1); }
.faq-a-inner { padding: 0 36px 28px 0; font-size: 15.5px; line-height: 1.6; color: var(--ink-soft); }
.faq-aside { position: sticky; top: 96px; }
.faq-aside h3 { font-family: var(--font-display); font-weight: 400; font-size: 25px; letter-spacing: -0.02em; margin: 24px 0 12px; }
.faq-aside p { font-size: 15px; color: var(--ink-soft); margin: 0 0 24px; max-width: 320px; }

@media (max-width: 960px) {
  .tier-grid { grid-template-columns: 1fr; }
  .addons-grid { grid-template-columns: repeat(2, 1fr); }
  .faq-wrap { grid-template-columns: 1fr; gap: 48px; }
  .faq-aside { position: static; }
}
</style>
