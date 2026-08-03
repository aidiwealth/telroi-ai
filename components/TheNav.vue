<template>
  <header class="nav">
    <div class="wrap">
      <NuxtLink to="/" class="brand" aria-label="Telroi home">
        <img
          src="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/telroi-ll.png"
          alt="Telroi"
          class="brand-logo"
        />
      </NuxtLink>

      <nav class="nav-links" aria-label="Primary">

        <!-- Why Telroi dropdown -->
        <div
          class="nav-item"
          :class="{ open: openDropdown === 'why' }"
          @mouseenter="openDropdown = 'why'"
          @mouseleave="openDropdown = null"
        >
          <button type="button" :aria-expanded="openDropdown === 'why'">
            <span>{{ t('nav.whyTelroi') }}</span>
            <svg class="chev" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="dropdown" role="menu">
            <div class="dd-grid">
              <div>
                <div class="dd-col-label">Products</div>

                <NuxtLink class="dd-link" to="/connect">
                  <span class="dd-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/>
                      <path d="M7 6h4a4 4 0 0 1 4 4"/><path d="M7 18h4a4 4 0 0 0 4-4"/>
                    </svg>
                  </span>
                  <div class="dd-text">
                    <div class="dd-title"><span>Connect</span> <span class="arrow">→</span></div>
                    <p class="dd-desc">Voice connectivity built for carrier-grade scale.</p>
                  </div>
                </NuxtLink>

                <NuxtLink class="dd-link" to="/optimize">
                  <span class="dd-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4v16h16"/><path d="M7 15l4-5 3 3 6-7"/>
                    </svg>
                  </span>
                  <div class="dd-text">
                    <div class="dd-title"><span>Optimize</span> <span class="arrow">→</span></div>
                    <p class="dd-desc">Network-level intelligence, by default.</p>
                  </div>
                </NuxtLink>

                <NuxtLink class="dd-link" to="/van">
                  <span class="dd-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="6" y="3" width="12" height="18" rx="2"/>
                      <path d="M9 8h6"/>
                      <path d="M9 12h6"/>
                      <circle cx="12" cy="17" r="0.9" fill="currentColor"/>
                    </svg>
                  </span>
                  <div class="dd-text">
                    <div class="dd-title"><span>VAN</span> <span class="arrow">→</span></div>
                    <p class="dd-desc">Business numbers, now AI-powered.</p>
                  </div>
                </NuxtLink>
              </div>

              <div>
                <div class="dd-col-label">Resources</div>

                <a class="dd-link" href="https://developers.telroi.ai/api/docs" target="_blank" rel="noopener noreferrer">
                  <span class="dd-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 7 4 12 9 17"/>
                      <polyline points="15 7 20 12 15 17"/>
                    </svg>
                  </span>
                  <div class="dd-text">
                    <div class="dd-title"><span>Developers</span> <span class="arrow">→</span></div>
                    <p class="dd-desc">API-driven voice infrastructure for your stack.</p>
                  </div>
                </a>

                <NuxtLink class="dd-link" to="/#integrations">
                  <span class="dd-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="7" cy="7" r="3"/>
                      <circle cx="17" cy="17" r="3"/>
                      <path d="M10 7h5a4 4 0 0 1 4 4v1"/>
                      <path d="M14 17H9a4 4 0 0 1-4-4v-1"/>
                    </svg>
                  </span>
                  <div class="dd-text">
                    <div class="dd-title"><span>Integrations</span> <span class="arrow">→</span></div>
                    <p class="dd-desc">CRMs, automation tools, AI voice providers.</p>
                  </div>
                </NuxtLink>

                <NuxtLink class="dd-link" to="/customers">
                  <span class="dd-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="9" cy="9" r="3"/>
                      <path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1"/>
                      <circle cx="17" cy="8" r="2.5"/>
                      <path d="M15 14h2a4 4 0 0 1 4 4v1"/>
                    </svg>
                  </span>
                  <div class="dd-text">
                    <div class="dd-title"><span>Customers</span> <span class="arrow">→</span></div>
                    <p class="dd-desc">Banks, fintechs, CPaaS and high-volume businesses.</p>
                  </div>
                </NuxtLink>
              </div>

              <NuxtLink to="/about" class="dd-feature">
                <div class="dd-feature-img">
                  <img src="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/menuimg%20(1).png" alt="" />
                </div>
                <div class="dd-feature-body">
                  <div class="ftitle">What is Telroi?</div>
                  <p>AI-native voice infrastructure-as-a-service that powers platforms worldwide.</p>
                  <span class="dd-feature-cta">Learn about us <span class="arrow">→</span></span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Download Telroi One — direct link to /one page -->
        <div class="nav-item align-right">
          <NuxtLink to="/one">{{ t('nav.download') }}</NuxtLink>
        </div>

        <div class="nav-item">
          <NuxtLink to="/pricing">{{ t('nav.pricing') }}</NuxtLink>
        </div>
      </nav>

      <div class="nav-cta">
        <a href="https://app.telroi.ai/login" class="nav-signin">{{ t('nav.signin') }}</a>
        <button
          type="button"
          class="btn btn-dark"
          data-cal-link="telroiai/30min"
          data-cal-namespace="30min"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        >
          <span>{{ t('nav.cta') }}</span> <span class="arrow">→</span>
        </button>
        <button class="mobile-toggle" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const { t } = useI18n();
const openDropdown = ref<string | null>(null);
</script>

<style scoped>
.nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
}
.nav .wrap {
  display: flex; align-items: center; justify-content: space-between;
  height: 64px;
}
.brand { display: flex; align-items: center; }
.brand-logo { height: 32px; width: auto; display: block; }

.nav-links { display: flex; align-items: center; gap: 4px; }
.nav-links a {
  padding: 8px 14px;
  font-size: 14px;
  color: var(--ink-soft);
  border-radius: 8px;
  transition: color 0.15s, background 0.15s;
}
.nav-links a:hover { color: var(--ink); background: var(--paper-3); }
.nav-cta { display: flex; align-items: center; gap: 10px; }
.nav-signin {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink);
  padding: 8px 10px;
  white-space: nowrap;
  transition: color 0.15s;
}
.nav-signin:hover { color: var(--signal); }
@media (max-width: 720px) { .nav-signin { display: none; } }

.mobile-toggle { display: none; background: none; border: 0; padding: 6px; }
@media (max-width: 960px) {
  .nav-links { display: none; }
  .mobile-toggle { display: block; }
}

/* Dropdowns */
.nav-item { position: relative; }
.nav-item > a,
.nav-item > button {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 14px;
  font-size: 14px;
  color: var(--ink-soft);
  border-radius: 8px;
  background: none; border: 0;
  transition: color 0.15s, background 0.15s;
  cursor: pointer;
  font-family: inherit;
}
.nav-item > a:hover,
.nav-item > button:hover,
.nav-item.open > button { color: var(--ink); background: var(--paper-3); }
.nav-item .chev { transition: transform 0.2s; color: currentColor; }
.nav-item.open .chev { transform: rotate(180deg); }

.dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 720px;
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 16px;
  box-shadow: 0 24px 60px -20px rgba(10,10,11,0.18), 0 1px 0 rgba(10,10,11,0.04);
  padding: 28px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  transition: opacity 0.18s, transform 0.18s, visibility 0.18s;
  z-index: 60;
}
.nav-item.open .dropdown {
  opacity: 1; visibility: visible; transform: translateY(0);
}
.nav-item.align-right .dropdown { left: auto; right: 0; }

.dd-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1.1fr;
  gap: 32px;
}
.dd-grid.two-col { grid-template-columns: 1fr 1fr; }

.dd-link {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 12px;
  /* Horizontal pull only. A negative vertical margin here collapsed against the
     next item's margin-top (4px + -12px), so the hover rectangles overlapped by
     8px instead of sitting apart. */
  margin: 0 -12px;
  border-radius: 10px;
  transition: background 0.15s;
}
.dd-link:hover { background: var(--paper-3); }
/* Hold the first item where it sat before the vertical pull was removed. */
.dd-col-label + .dd-link { margin-top: -12px; }
.dd-link + .dd-link { margin-top: 6px; }
.dd-icon {
  flex-shrink: 0;
  width: 36px; height: 36px;
  border-radius: 9px;
  background: var(--paper-3);
  border: 1px solid var(--rule);
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink);
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}
.dd-icon svg { width: 18px; height: 18px; }
.dd-link:hover .dd-icon {
  background: #fff;
  border-color: var(--signal);
  color: var(--signal);
}
/* Telroi One icon gets a subtle signal tint at rest to signal it's the suite */
.dd-icon--signal {
  background: rgba(26,75,114,0.06);
  border-color: rgba(26,75,114,0.2);
  color: var(--signal);
}
.dd-link:hover .dd-icon--signal {
  background: var(--signal);
  border-color: var(--signal);
  color: #fff;
}
.dd-text { flex: 1; min-width: 0; }
.dd-col-label {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin: 0 0 16px;
  padding: 0 0 12px;
  border-bottom: 1px solid var(--rule);
}
.dd-link .dd-title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 0 0 2px;
  display: flex; align-items: center; gap: 6px;
}
.dd-link .dd-title .arrow {
  opacity: 0; transform: translateX(-4px);
  transition: opacity 0.15s, transform 0.15s;
  font-size: 14px;
}
.dd-link:hover .dd-title .arrow { opacity: 1; transform: translateX(0); }
.dd-link .dd-desc {
  font-size: 13px;
  color: var(--ink-soft);
  line-height: 1.5;
  margin: 0;
}

.dd-feature {
  display: flex; flex-direction: column;
  background: var(--paper-3);
  border-radius: 14px;
  overflow: hidden;
  padding: 14px 14px 4px;
  transition: transform 0.18s, box-shadow 0.18s;
}
.dd-feature:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px -16px rgba(10,10,11,0.18);
}
.dd-feature-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--paper-2);
  border-radius: 10px;
}
.dd-feature-img img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s var(--motion-ease);
}
.dd-feature:hover .dd-feature-img img { transform: scale(1.03); }
.dd-feature-body {
  padding: 16px 6px 12px;
  display: flex; flex-direction: column; gap: 6px;
}
.dd-feature .ftitle {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.015em;
  color: var(--ink);
  line-height: 1.25;
}
.dd-feature p {
  font-size: 13px;
  line-height: 1.5;
  color: var(--ink-soft);
  margin: 0;
}
.dd-feature-cta {
  display: inline-flex; align-items: center; gap: 6px;
  margin-top: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--ink);
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
  align-self: flex-start;
  transition: color 0.15s, border-color 0.15s, gap 0.15s;
}
.dd-feature-cta .arrow { transition: transform 0.18s; }
.dd-feature:hover .dd-feature-cta {
  color: var(--signal);
  border-color: var(--signal);
  gap: 10px;
}
.dd-feature:hover .dd-feature-cta .arrow { transform: translateX(2px); }

/* Download dropdown — OS step layout */
.dd-os { display: flex; flex-direction: column; gap: 16px; }
.dd-os h5 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  display: flex; align-items: center; gap: 10px;
  color: var(--ink);
}
.dd-os h5 svg { width: 18px; height: 18px; color: var(--ink-soft); }
.dd-os ol {
  list-style: none;
  counter-reset: ddo;
  margin: 0; padding: 0;
  display: flex; flex-direction: column; gap: 8px;
}
.dd-os li {
  counter-increment: ddo;
  display: flex; gap: 10px;
  font-size: 13px;
  color: var(--ink-soft);
  line-height: 1.4;
}
.dd-os li::before {
  content: counter(ddo);
  flex-shrink: 0;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid var(--rule);
  color: var(--signal);
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  display: flex; align-items: center; justify-content: center;
  margin-top: 1px;
}
.dl-btn-sm {
  margin-top: 4px;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 9px 16px;
  background: var(--ink);
  color: #fff;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 500;
  align-self: flex-start;
  transition: background 0.15s, transform 0.15s;
}
.dl-btn-sm,
.dl-btn-sm span,
.dl-btn-sm svg { color: #fff; }
.dl-btn-sm:hover { background: #000; transform: translateY(-1px); }
.dl-btn-sm:hover,
.dl-btn-sm:hover span,
.dl-btn-sm:hover svg { color: #fff; }
.dl-btn-sm svg { width: 12px; height: 12px; }

@media (max-width: 1100px) {
  .dropdown { min-width: 620px; padding: 22px; }
  .dd-grid { gap: 24px; }
}
</style>
