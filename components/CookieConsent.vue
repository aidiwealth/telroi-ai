<template>
  <Transition name="cc">
    <aside
      v-if="decided === false"
      class="cc"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cc-title"
      aria-describedby="cc-body"
    >
      <div class="cc-card">
        <div class="cc-kicker">Cookies</div>

        <h2 id="cc-title" class="cc-title">You choose what loads.</h2>

        <p id="cc-body" class="cc-body">
          The site works without any of this. Two features load code from other
          companies, so we ask before running them.
        </p>

        <!-- Preferences -->
        <div v-if="panelOpen" class="cc-rows">
          <div class="cc-row">
            <div class="cc-row-text">
              <div class="cc-row-name">Essentials</div>
              <p class="cc-row-note">
                Remembers your language and this choice. Never used to track you.
              </p>
            </div>
            <span class="cc-locked" aria-hidden="true">On</span>
            <span class="cc-sr">Essentials are always on and cannot be turned off.</span>
          </div>

          <div class="cc-row">
            <label class="cc-row-text" for="cc-analytics">
              <span class="cc-row-name">Analytics</span>
              <span class="cc-row-note">
                Google Analytics, so we can see which pages people read. Off by
                default, and turning it off later clears what it stored.
              </span>
            </label>
            <button
              id="cc-analytics"
              type="button"
              class="cc-switch"
              :class="{ 'is-on': draft.analytics }"
              role="switch"
              :aria-checked="draft.analytics"
              @click="draft.analytics = !draft.analytics"
            >
              <span class="cc-knob" />
            </button>
          </div>

          <div class="cc-row">
            <label class="cc-row-text" for="cc-booking">
              <span class="cc-row-name">Booking calendar</span>
              <span class="cc-row-note">
                Loads Cal.com so “Book a demo” can open a calendar. Left off,
                we ask again the first time you use one of those buttons.
              </span>
            </label>
            <button
              id="cc-booking"
              type="button"
              class="cc-switch"
              :class="{ 'is-on': draft.booking }"
              role="switch"
              :aria-checked="draft.booking"
              @click="draft.booking = !draft.booking"
            >
              <span class="cc-knob" />
            </button>
          </div>
        </div>

        <!-- Actions. Refusing is exactly as easy as accepting. -->
        <div class="cc-actions">
          <template v-if="panelOpen">
            <button type="button" class="cc-btn cc-btn-solid" @click="save(draft)">
              Save choices
            </button>
            <button type="button" class="cc-btn cc-btn-quiet" @click="panelOpen = false">
              Back
            </button>
          </template>
          <template v-else>
            <button type="button" class="cc-btn cc-btn-solid" @click="acceptAll">
              Allow
            </button>
            <button type="button" class="cc-btn cc-btn-line" @click="rejectAll">
              Decline
            </button>
            <button type="button" class="cc-btn cc-btn-quiet" @click="openPanel">
              Choose
            </button>
          </template>
        </div>

        <NuxtLink to="/privacy" class="cc-link">Privacy notice</NuxtLink>
      </div>
    </aside>
  </Transition>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';

const { decided, categories, panelOpen, save, acceptAll, rejectAll } = useCookieConsent();

// Edited separately from live consent, so opening the panel and changing your
// mind without saving does not load anything in the meantime.
const draft = reactive({ analytics: false, booking: false });

watch(categories, (c) => {
  draft.analytics = c.analytics;
  draft.booking = c.booking;
}, { immediate: true, deep: true });

function openPanel() {
  draft.analytics = categories.value.analytics;
  draft.booking = categories.value.booking;
  panelOpen.value = true;
}
</script>

<style scoped>
.cc {
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 300;
  width: min(384px, calc(100vw - 32px));
}

.cc-card {
  background: var(--paper);
  border: 1px solid var(--rule);
  border-radius: var(--radius-lg);
  box-shadow: 0 1px 0 rgba(10, 10, 11, 0.03), 0 18px 44px -16px rgba(10, 10, 11, 0.22);
  padding: 22px 22px 18px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
}

/* Matches the section eyebrow used across the site, so this reads as part of
   the page rather than a vendor widget dropped on top of it. */
.cc-kicker {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 10px;
}

.cc-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 19px;
  letter-spacing: -0.01em;
  line-height: 1.2;
  color: var(--ink);
  margin: 0 0 8px;
}

.cc-body {
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--ink-soft);
  margin: 0;
}

/* ---- preference rows ---- */
.cc-rows {
  margin-top: 18px;
  border-top: 1px solid var(--rule-2);
}

.cc-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid var(--rule-2);
}

.cc-row-text {
  flex: 1;
  min-width: 0;
  display: block;
}

.cc-row-name {
  display: block;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 2px;
}

.cc-row-note {
  display: block;
  font-size: 12px;
  line-height: 1.5;
  color: var(--ink-mute);
  margin: 0;
}

.cc-locked {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-mute);
  background: var(--paper-3);
  border-radius: 999px;
  padding: 4px 9px;
  margin-top: 2px;
}

/* ---- switch ---- */
.cc-switch {
  flex-shrink: 0;
  position: relative;
  width: 40px;
  height: 23px;
  margin-top: 1px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  background: var(--paper-3);
  cursor: pointer;
  padding: 0;
  transition: background 0.18s var(--motion-ease), border-color 0.18s var(--motion-ease);
}

.cc-switch.is-on {
  background: var(--signal);
  border-color: var(--signal);
}

.cc-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: var(--paper);
  box-shadow: 0 1px 3px rgba(10, 10, 11, 0.18);
  transition: transform 0.18s var(--motion-ease);
}

.cc-switch.is-on .cc-knob { transform: translateX(17px); }

/* ---- actions ---- */
.cc-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
}

.cc-btn {
  font-family: inherit;
  font-size: 13px;
  border-radius: 999px;
  padding: 9px 15px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}

.cc-btn-solid { background: var(--ink); color: #fff; }
.cc-btn-solid:hover { background: var(--signal); }

.cc-btn-line { background: transparent; border-color: var(--rule); color: var(--ink); }
.cc-btn-line:hover { border-color: var(--ink); }

.cc-btn-quiet { background: transparent; color: var(--ink-soft); margin-left: auto; padding: 9px 4px; }
.cc-btn-quiet:hover { color: var(--ink); }

.cc-link {
  display: inline-block;
  margin-top: 12px;
  font-size: 11.5px;
  color: var(--ink-mute);
  text-decoration: none;
  border-bottom: 1px solid var(--rule);
}
.cc-link:hover { color: var(--ink); border-color: var(--ink-soft); }

.cc-btn:focus-visible,
.cc-switch:focus-visible,
.cc-link:focus-visible {
  outline: 2px solid var(--signal);
  outline-offset: 2px;
}

.cc-sr {
  position: absolute;
  width: 1px; height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.cc-enter-active, .cc-leave-active {
  transition: opacity 0.26s var(--motion-ease), transform 0.26s var(--motion-ease);
}
.cc-enter-from, .cc-leave-to { opacity: 0; transform: translateY(10px); }

@media (max-width: 560px) {
  .cc { bottom: 16px; left: 16px; }
  .cc-card { padding: 18px 18px 16px; }
}

@media (prefers-reduced-motion: reduce) {
  .cc-enter-active, .cc-leave-active,
  .cc-switch, .cc-knob { transition: none; }
}
</style>
