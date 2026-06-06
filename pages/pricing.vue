<template>
  <div>
    <!-- Page header -->
    <section class="pricing-head">
      <div class="wrap">
        <div class="kicker reveal">Pricing</div>
        <h1 class="reveal">Simple, transparent <em>pricing.</em></h1>
        <p class="lede reveal">No hidden fees. Per-user plans for Telroi One, usage-based rates for voice infrastructure. Scale as you grow.</p>

        <!-- Currency switcher -->
        <div class="currency-switcher reveal">
          <button
            v-for="c in currencies"
            :key="c.code"
            class="currency-btn"
            :class="{ active: currency.code === c.code }"
            @click="currency = c"
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
            <a v-else href="https://app.telroi.ai" class="btn" :class="tier.featured ? 'btn-signal' : 'btn-dark'">
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
              <div class="addon-rate">{{ currency.symbol }}{{ formatUsage(2.00) }}</div>
              <div class="addon-meta">per voice channel / month</div>
            </div>
            <div class="addon">
              <div class="addon-rate">{{ currency.symbol }}{{ formatUsage(1.70) }}</div>
              <div class="addon-meta">per DID number / month</div>
            </div>
            <div class="addon">
              <div class="addon-rate">{{ currency.symbol }}{{ formatUsage(0.0102) }}</div>
              <div class="addon-meta">per minute of airtime</div>
            </div>
            <div class="addon addon--highlight">
              <div class="addon-rate">Included</div>
              <div class="addon-meta">Telroi Optimize — on all plans</div>
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
import { ref } from 'vue';

useHead({
  title: 'Telroi — Pricing',
  meta: [{ name: 'description', content: 'Telroi pricing — per-user plans for Telroi One starting at $10, with usage-based rates for voice channels, numbers and airtime.' }]
});

const openFaq = ref<number | null>(0);

const currencies = [
  { code: 'USD', symbol: '$',  flag: '🇺🇸', rate: 1 },
  { code: 'NGN', symbol: '₦', flag: '🇳🇬', rate: 1600 },
];
const currency = ref(currencies[0]);

function formatPrice(usd: number): string {
  const val = Math.round(usd * currency.value.rate);
  return currency.value.code === 'NGN'
    ? val.toLocaleString()
    : String(usd);
}

function formatUsage(usd: number): string {
  const val = usd * currency.value.rate;
  if (currency.value.code === 'NGN') {
    return val >= 1 ? val.toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                    : val.toFixed(2);
  }
  return usd === 0.0102 ? '0.0102' : usd.toFixed(2);
}

const tiers = [
  {
    name: 'Startup',
    usd: 10,
    period: 'Per user per month',
    fine: 'Billed at $7 per user above 10 users.',
    cta: 'Get started',
    featured: false
  },
  {
    name: 'Growth',
    usd: 15,
    period: 'Per user per month',
    fine: 'Billed at $11 per user above 10 users.',
    cta: 'Get started',
    featured: true
  },
  {
    name: 'Custom',
    usd: 0,
    period: 'For large, regulated or white-label teams',
    fine: 'Dedicated subdomain, compliance support and custom onboarding.',
    cta: 'Talk to sales',
    featured: false
  }
];

// features: tiers array = [Startup, Growth, Custom]
const features = [
  // ── All three plans ──────────────────────────────────────
  { label: 'AI call answering (VAN)',               tiers: [true,  true,  true]  },
  { label: 'Call recording & transcription',        tiers: [true,  true,  true]  },
  { label: 'Webhooks & API access',                 tiers: [true,  true,  true]  },
  { label: 'Route scoring & fraud detection',       tiers: [true,  true,  true]  },
  { label: 'CLI-compliant voice routing',           tiers: [true,  true,  true]  },
  { label: 'DID number provisioning',               tiers: [true,  true,  true]  },
  { label: 'Multi-language AI support',             tiers: [true,  true,  true]  },
  // ── Growth & Custom only ─────────────────────────────────
  { label: 'Telroi CRM — contacts, deals, call logs', tiers: [false, true,  true], sectionBreak: true  },
  { label: 'Desktop dialer (Mac & Windows)',        tiers: [false, true,  true]  },
  { label: 'Live Call — website call widget',       tiers: [false, true,  true]  },
  { label: 'yourcompany.telroi.ai subdomain',      tiers: [false, true,  true]  },
  { label: 'AI call summaries to CRM',              tiers: [false, true,  true]  },
  { label: 'Admin controls & user management',      tiers: [false, true,  true]  },
  { label: 'Priority support',                      tiers: [false, true,  true]  },
  // ── Custom only ──────────────────────────────────────────
  { label: 'Custom onboarding',                     tiers: [false, false, true], sectionBreak: true  },
  { label: 'Dedicated compliance support',          tiers: [false, false, true]  },
  { label: 'White-label & on-prem options',         tiers: [false, false, true]  },
];

const pricingFaqs = [
  {
    q: 'What does "per user" mean?',
    a: 'A user is anyone on your team with a Telroi One seat — agents, supervisors, admins with access to the CRM, dialer, or Live Call widget. API-only usage via Telroi Connect is not seat-based; it is billed by usage (channels, DIDs, airtime).'
  },
  {
    q: 'How are voice channels, DIDs and airtime billed?',
    a: "These usage-based charges apply across every plan: $2 per voice channel per month, $1.70 per DID number per month, and $0.0102 per minute of airtime. You're never charged for unused capacity."
  },
  {
    q: 'Can I switch plans later?',
    a: 'Yes. You can upgrade or downgrade at any time. Plan changes prorate to the day, so you only pay for the time on each plan.'
  },
  {
    q: "What's the difference between Startup and Growth?",
    a: 'Both plans include the full Telroi One suite and API access — there is no feature gating. Growth includes a higher service tier, priority support response times, and is recommended for teams that depend on voice as a primary channel.'
  },
  {
    q: 'When should I pick the Custom plan?',
    a: 'Custom is for regulated industries (banks, healthcare), high-volume API deployments, white-label partners, and teams with specific compliance or data residency requirements. Our team scopes pricing based on your specific footprint.'
  },
  {
    q: 'Do you offer a free trial or sandbox?',
    a: "Yes. Sandbox API keys are free for testing Telroi Connect — no credit card required. For Telroi One, talk to our team and we'll provision a trial account within a day."
  },
  {
    q: 'How do I pay?',
    a: 'We accept all major credit cards, ACH transfers, and wire transfers. Plan fees are invoiced monthly in advance; usage-based charges are billed monthly in arrears. Annual prepay options are available with a discount.'
  }
];
</script>

<style scoped>
/* ============ Page header ============ */
.pricing-head { padding: 80px 0 60px; }
.pricing-head h1 {
  font-family: var(--font-display); font-weight: 400;
  font-size: clamp(40px, 5vw, 64px);
  line-height: 1.06; letter-spacing: -0.03em;
  margin: 0 0 20px; max-width: 680px;
}
.pricing-head h1 em { font-style: italic; font-weight: 300; color: var(--ink-soft); }
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
.tier-price .symbol { font-size: 22px; color: var(--ink-soft); }
.tier-price .amount {
  font-family: var(--font-display); font-size: 60px;
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
.addon-rate { font-family: var(--font-display); font-size: 22px; letter-spacing: -0.02em; color: var(--ink); }
.addon-meta { font-size: 12.5px; color: var(--ink-soft); margin-top: 4px; }
.addon--highlight .addon-rate { color: #00a872; }
.addon--highlight .addon-meta { color: #00a872; opacity: 0.8; }

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
.faq-aside h3 { font-family: var(--font-display); font-weight: 400; font-size: 28px; letter-spacing: -0.02em; margin: 24px 0 12px; }
.faq-aside p { font-size: 15px; color: var(--ink-soft); margin: 0 0 24px; max-width: 320px; }

@media (max-width: 960px) {
  .tier-grid { grid-template-columns: 1fr; }
  .addons-grid { grid-template-columns: repeat(2, 1fr); }
  .faq-wrap { grid-template-columns: 1fr; gap: 48px; }
  .faq-aside { position: static; }
}
</style>
