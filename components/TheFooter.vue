<template>
  <footer>
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-brand">
          <NuxtLink to="/" class="brand">
            <img
              src="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/telroi-ll.png"
              alt="Telroi"
              class="brand-logo"
            />
          </NuxtLink>
          <p>{{ t('foot.brand') }}</p>

          <!-- Language switcher -->
          <div class="lang-switcher" :class="{ open: langOpen }" ref="langWrap">
            <button
              type="button"
              class="lang-trigger"
              aria-haspopup="listbox"
              :aria-expanded="langOpen"
              @click.stop="langOpen = !langOpen"
            >
              <span class="lang-flag">{{ currentLangOpt.flag }}</span>
              <span class="lang-current">{{ t(`lang.${currentLang}`) }}</span>
              <svg class="lang-chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 15 12 9 18 15"/>
              </svg>
            </button>
            <div class="lang-menu" role="listbox">
              <button
                v-for="opt in langOptions"
                :key="opt.code"
                type="button"
                class="lang-option"
                :class="{ 'is-active': currentLang === opt.code }"
                @click="selectLang(opt.code)"
              >
                <span class="lang-flag">{{ opt.flag }}</span>
                <span>{{ t(`lang.${opt.code}`) }}</span>
                <svg v-if="currentLang === opt.code" class="lang-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12l5 5L20 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="foot-col">
          <h6>{{ t('foot.col.products') }}</h6>
          <NuxtLink to="/connect">Telroi Connect</NuxtLink>
          <NuxtLink to="/optimize">Telroi Optimize</NuxtLink>
          <NuxtLink to="/van">Telroi VAN</NuxtLink>
          <NuxtLink to="/one">Telroi One</NuxtLink>
        </div>
        <div class="foot-col">
          <h6>Developers</h6>
          <a href="https://developers.telroi.ai/api/docs" target="_blank" rel="noopener noreferrer">API documentation</a>
          <a href="https://developers.telroi.ai/api/docs#authentication" target="_blank" rel="noopener noreferrer">Authentication</a>
          <a href="https://developers.telroi.ai/api/docs#sendVoiceOtp" target="_blank" rel="noopener noreferrer">Voice OTP</a>
          <a href="https://developers.telroi.ai/api/docs#createCall" target="_blank" rel="noopener noreferrer">Voice calls</a>
          <a href="https://developers.telroi.ai/api/docs#synthesizeSpeech" target="_blank" rel="noopener noreferrer">Speech (TTS &amp; STT)</a>
          <a href="https://status.telroi.ai/status" target="_blank" rel="noopener noreferrer">Status</a>
        </div>
        <div class="foot-col">
          <h6>{{ t('foot.col.company') }}</h6>
          <NuxtLink to="/about">{{ t('foot.company.about') }}</NuxtLink>
          <NuxtLink to="/customers">{{ t('foot.company.customers') }}</NuxtLink>
          <NuxtLink to="/pricing">{{ t('foot.company.pricing') }}</NuxtLink>
        </div>
        <div class="foot-col">
          <h6>{{ t('foot.col.resources') }}</h6>
          <NuxtLink to="/security">{{ t('foot.resources.security') }}</NuxtLink>
          <NuxtLink to="/compliance">{{ t('foot.resources.compliance') }}</NuxtLink>
          <NuxtLink to="/privacy">{{ t('foot.resources.privacy') }}</NuxtLink>
          <NuxtLink to="/terms">Terms of use</NuxtLink>
        </div>
      </div>

      <div class="foot-bottom">
        <span>{{ t('foot.copyright') }}</span>
        <span class="tagline">{{ t('foot.tagline') }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import type { Lang } from '~/utils/translations';

const { t, setLang, currentLang } = useI18n();

const langOpen = ref(false);
const langWrap = ref<HTMLElement | null>(null);

const langOptions: { code: Lang; flag: string }[] = [
  { code: 'en-US', flag: '🇺🇸' },
  { code: 'en-GB', flag: '🇬🇧' },
  { code: 'es-ES', flag: '🇪🇸' },
  { code: 'fr-FR', flag: '🇫🇷' },
];

const currentLangOpt = computed(() =>
  langOptions.find(o => o.code === currentLang.value) ?? langOptions[0]
);

function selectLang(code: Lang) {
  setLang(code);
  langOpen.value = false;
}

function handleClickOutside(e: MouseEvent) {
  if (langWrap.value && !langWrap.value.contains(e.target as Node)) {
    langOpen.value = false;
  }
}
function handleEscape(e: KeyboardEvent) {
  if (e.key === 'Escape') langOpen.value = false;
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscape);
});
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
footer { background: #fff; padding: 72px 0 40px; }
.foot-grid {
  display: grid;
  grid-template-columns: 1.4fr repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 64px;
}
.foot-brand .brand { display: flex; margin-bottom: 18px; }
.brand-logo { height: 36px; width: auto; display: block; }
.foot-brand p { font-size: 14px; color: var(--ink-soft); max-width: 280px; }
.foot-col h6 {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin: 0 0 18px;
}
.foot-col a {
  display: block;
  font-size: 14px;
  color: var(--ink);
  padding: 6px 0;
  transition: color 0.15s;
}
.foot-col a:hover { color: var(--signal); }
.foot-bottom {
  padding-top: 28px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 13px;
  color: var(--ink-soft);
}
.foot-bottom .tagline {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.1em;
}

/* Language switcher */
.lang-switcher { position: relative; margin-top: 24px; display: inline-block; }
.lang-trigger {
  display: inline-flex; align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid var(--rule);
  border-radius: 10px;
  background: #fff;
  font-family: inherit;
  font-size: 13.5px;
  color: var(--ink);
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 0.15s;
}
.lang-trigger:hover { border-color: var(--ink); }
.lang-flag { font-size: 17px; line-height: 1; flex-shrink: 0; }
.lang-current { flex: 1; text-align: left; }
.lang-chev { transition: transform 0.2s; color: var(--ink-soft); flex-shrink: 0; }
.lang-switcher.open .lang-chev { transform: rotate(180deg); }

.lang-menu {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  min-width: 220px;
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 12px;
  box-shadow: 0 20px 50px -16px rgba(10,10,11,0.16);
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px);
  transition: opacity 0.18s, transform 0.18s, visibility 0.18s;
  z-index: 30;
}
.lang-switcher.open .lang-menu { opacity: 1; visibility: visible; transform: translateY(0); }

.lang-option {
  display: flex; align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 16px;
  background: transparent;
  border: 0;
  text-align: left;
  font-family: inherit;
  font-size: 13.5px;
  color: var(--ink);
  cursor: pointer;
  transition: background 0.15s;
  border-bottom: 1px solid var(--rule-2);
}
.lang-option:last-child { border-bottom: 0; }
.lang-option:hover { background: var(--paper-3); }
.lang-check { width: 16px; height: 16px; color: var(--signal); margin-left: auto; flex-shrink: 0; }
.lang-option.is-active { background: var(--signal-soft); color: var(--signal); }

@media (max-width: 900px) {
  .foot-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  .foot-brand { grid-column: 1 / -1; }
}
@media (max-width: 520px) {
  .foot-grid { grid-template-columns: 1fr; }
}
</style>
