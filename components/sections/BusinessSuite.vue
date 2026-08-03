<template>
  <section class="biz-suite" id="business">
    <div class="wrap">
      <div class="biz-inner">
        <div class="biz-text reveal">
          <div class="kicker">{{ t('biz.kicker') }}</div>
          <h2 class="sec-title">
            {{ t('biz.title') }}<br/><span>{{ t('biz.titleEm') }}</span>
          </h2>
          <p class="sec-lede">
            {{ t('biz.lede') }}
          </p>
          <ul class="biz-list">
            <li>
              <span class="biz-dot"/>
              <div><strong>{{ t('biz.crm') }}:</strong> {{ t('biz.crm.desc') }}</div>
            </li>
            <li>
              <span class="biz-dot"/>
              <div><strong>{{ t('biz.desktop') }}:</strong> {{ t('biz.desktop.desc') }}</div>
            </li>
            <li>
              <span class="biz-dot"/>
              <div><strong>{{ t('biz.livecall') }}:</strong> {{ t('biz.livecall.desc') }}</div>
            </li>
            <li>
              <span class="biz-dot"/>
              <div><strong>{{ t('biz.van') }}:</strong> {{ t('biz.van.desc') }}</div>
            </li>
          </ul>
          <NuxtLink to="/one" class="closing-link">
            <span>{{ t('biz.cta') }}</span> <span class="arrow">→</span>
          </NuxtLink>
        </div>

        <div class="biz-cards reveal reveal-delay-1">
          <!-- CRM card -->
          <div class="biz-card biz-card--crm">
            <div class="biz-card-label">CRM</div>
            <div class="biz-card-row">
              <div class="biz-avatar biz-avatar--a">JM</div>
              <div class="biz-card-info">
                <strong>James Mensah</strong>
                <span>+233 50 ··· 7821 · Call logged · 4m 12s</span>
              </div>
              <span class="biz-tag biz-tag--green">Deal open</span>
            </div>
            <div class="biz-card-row">
              <div class="biz-avatar biz-avatar--b">AO</div>
              <div class="biz-card-info">
                <strong>Adaeze Okafor</strong>
                <span>+234 80 ··· 3349 · AI summary ready</span>
              </div>
              <span class="biz-tag biz-tag--blue">Follow-up</span>
            </div>
            <div class="biz-card-row">
              <div class="biz-avatar biz-avatar--c">KN</div>
              <div class="biz-card-info">
                <strong>Kwame Nkrumah</strong>
                <span>+254 72 ··· 0041 · Missed · VAN answered</span>
              </div>
              <span class="biz-tag biz-tag--ink">Qualified</span>
            </div>
          </div>

          <!-- Desktop dialer card -->
          <div class="biz-card biz-card--dialer">
            <div class="biz-card-label">Desktop</div>
            <div class="biz-dialer-number">+1 (800) TEL-ROI8</div>
            <div class="biz-dialer-status">
              <span class="biz-pulse"/>
              <span>Line active · 01:42</span>
            </div>
            <div class="biz-dialer-grid">
              <span v-for="k in ['1','2','3','4','5','6','7','8','9','*','0','#']" :key="k" class="biz-key">{{ k }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped>
.biz-suite { padding: 110px 0; background: #fff; }

.biz-inner {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: center;
}

/* Left text */
.biz-text .sec-title { margin: 24px 0 20px; font-size: clamp(32px, 4vw, 48px); }
.biz-text .sec-title em { font-style: italic; color: var(--signal); }
.biz-text .sec-lede { margin: 0 0 32px; max-width: 420px; }

.biz-list {
  list-style: none; padding: 0; margin: 0 0 36px;
  display: flex; flex-direction: column; gap: 14px;
}
.biz-list li {
  display: flex; align-items: flex-start; gap: 12px;
  font-size: 15px; line-height: 1.5;
  color: var(--ink-soft);
  padding-bottom: 14px;
  border-bottom: 1px solid var(--rule);
}
.biz-list li:last-child { border-bottom: 0; padding-bottom: 0; }
.biz-list li strong { color: var(--ink); }
.biz-dot {
  flex-shrink: 0; margin-top: 7px;
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--signal);
}

/* Right cards */
.biz-cards {
  display: flex; flex-direction: column; gap: 18px;
}

.biz-card {
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 16px;
  padding: 22px 24px;
  box-shadow: 0 12px 32px -16px rgba(10,10,11,0.12);
}
.biz-card-label {
  font-family: var(--font-mono);
  font-size: 10px; letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 16px;
}

/* CRM card */
.biz-card--crm { display: flex; flex-direction: column; gap: 0; }
.biz-card-row {
  display: flex; align-items: center; gap: 12px;
  padding: 11px 0;
  border-bottom: 1px solid var(--rule);
}
.biz-card-row:last-child { border-bottom: 0; }
.biz-avatar {
  flex-shrink: 0;
  width: 34px; height: 34px; border-radius: 50%;
  font-size: 11px; font-weight: 600;
  display: flex; align-items: center; justify-content: center;
}
.biz-avatar--a { background: rgba(26,75,114,0.12); color: var(--signal); }
.biz-avatar--b { background: rgba(77,131,179,0.12); color: #4d83b3; }
.biz-avatar--c { background: rgba(10,10,11,0.06); color: var(--ink-soft); }
.biz-card-info {
  flex: 1; min-width: 0;
  display: flex; flex-direction: column; gap: 2px;
}
.biz-card-info strong { font-size: 13.5px; color: var(--ink); }
.biz-card-info span { font-size: 11.5px; color: var(--ink-soft); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.biz-tag {
  flex-shrink: 0;
  font-size: 10.5px; font-weight: 500;
  padding: 3px 9px; border-radius: 999px;
}
.biz-tag--green { background: rgba(0,210,138,0.10); color: #00a872; }
.biz-tag--blue  { background: rgba(26,75,114,0.10); color: var(--signal); }
.biz-tag--ink   { background: rgba(10,10,11,0.06);  color: var(--ink-soft); }

/* Dialer card */
.biz-card--dialer { display: flex; flex-direction: column; gap: 14px; }
.biz-dialer-number {
  font-family: var(--font-display);
  font-size: 22px; letter-spacing: -0.02em;
  color: var(--ink);
}
.biz-dialer-status {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; color: var(--ink-soft);
}
.biz-pulse {
  width: 7px; height: 7px; border-radius: 50%;
  background: #00d28a;
  animation: pulse 1.6s ease-in-out infinite;
}
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

.biz-dialer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
.biz-key {
  display: flex; align-items: center; justify-content: center;
  height: 34px; border-radius: 8px;
  background: var(--paper-2);
  font-family: var(--font-display);
  font-size: 16px; color: var(--ink);
  cursor: default;
  transition: background 0.12s;
}

@media (max-width: 960px) {
  .biz-inner { grid-template-columns: 1fr; gap: 52px; }
}
</style>
