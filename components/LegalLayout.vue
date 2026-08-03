<template>
  <section class="legal">
    <div class="wrap">
      <!-- Header -->
      <div class="legal-head reveal">
        <div class="kicker">{{ kicker }}</div>
        <h1>
          <span>{{ titleStart }}</span> <em>{{ titleEm }}</em>
        </h1>
        <p v-if="lede" class="lede">{{ lede }}</p>
      </div>

      <!-- Two-column body -->
      <div class="legal-grid">
        <aside class="legal-aside reveal">
          <div class="aside-label">In this document</div>
          <ol>
            <li v-for="sec in sections" :key="sec.id">
              <a :href="`#${sec.id}`">{{ sec.title }}</a>
            </li>
          </ol>
          <div class="updated-note">
            <span class="dot" />Updated · {{ lastUpdated }}
          </div>
        </aside>

        <div class="legal-body reveal">
          <section
            v-for="(sec, i) in sections"
            :key="sec.id"
            :id="sec.id"
            class="legal-section"
            :class="{ 'first-section': i === 0 }"
          >
            <div class="section-kicker">{{ String(i + 1).padStart(2, '0') }}</div>
            <h2>{{ sec.title }}</h2>
            <div class="section-content">
              <template v-for="(blk, bi) in sec.blocks" :key="bi">
                <p v-if="blk.type === 'p'">{{ blk.text }}</p>
                <h3 v-else-if="blk.type === 'h3'">{{ blk.text }}</h3>
                <ul v-else-if="blk.type === 'ul'">
                  <li v-for="(item, ii) in blk.items" :key="ii">{{ item }}</li>
                </ul>
                <p v-else-if="blk.type === 'note'" class="note">{{ blk.text }}</p>
              </template>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface LegalBlock {
  type: 'p' | 'h3' | 'ul' | 'note';
  text?: string;
  items?: string[];
}
export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

defineProps<{
  kicker: string;
  titleStart: string;
  titleEm: string;
  lede?: string;
  lastUpdated: string;
  sections: LegalSection[];
}>();
</script>

<style scoped>
.legal { padding: 80px 0 110px; }

.legal-head {
  max-width: 720px;
  margin-bottom: 72px;
}
.legal-head h1 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(40px, 5.5vw, 64px);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0 0 18px;
}
.legal-head h1 em {
  font-style: normal;
  font-weight: 300;
  color: var(--ink-soft);
  margin-left: 8px;
}
.legal-head .lede {
  font-size: 17px;
  line-height: 1.55;
  color: var(--ink-soft);
  margin: 0;
}

.legal-grid {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 80px;
  align-items: start;
}

/* ============ Aside (sticky TOC) ============ */
.legal-aside { position: sticky; top: 100px; }
.aside-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 16px;
}
.legal-aside ol {
  counter-reset: ref;
  list-style: none;
  margin: 0; padding: 0;
}
.legal-aside li {
  counter-increment: ref;
  padding: 9px 0;
  border-top: 1px solid var(--rule-2);
  font-size: 13.5px;
}
.legal-aside li:last-child { border-bottom: 1px solid var(--rule-2); }
.legal-aside li a {
  color: var(--ink-soft);
  display: flex;
  align-items: baseline;
  gap: 10px;
  transition: color 0.15s;
}
.legal-aside li a::before {
  content: "0" counter(ref);
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--signal);
  flex-shrink: 0;
}
.legal-aside li a:hover { color: var(--ink); }

.updated-note {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  margin-top: 28px;
  background: var(--paper-3);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
}
.updated-note .dot {
  width: 6px; height: 6px;
  background: var(--signal);
  border-radius: 999px;
}

/* ============ Body ============ */
.legal-section {
  padding-top: 56px;
  margin-top: 56px;
  border-top: 1px solid var(--rule);
}
.legal-section.first-section {
  padding-top: 0;
  margin-top: 0;
  border-top: 0;
}
.section-kicker {
  font-family: var(--font-mono);
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  color: var(--signal);
  margin-bottom: 14px;
}
.legal-section h2 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 30px;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin: 0 0 22px;
  color: var(--ink);
}
.section-content h3 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.015em;
  margin: 30px 0 10px;
  color: var(--ink);
}
.section-content p {
  font-size: 15.5px;
  line-height: 1.65;
  color: var(--ink-soft);
  margin: 0 0 16px;
}
.section-content p.note {
  background: var(--signal-soft);
  border-left: 3px solid var(--signal);
  padding: 14px 18px;
  border-radius: 4px;
  font-size: 14.5px;
  color: var(--ink);
}
.section-content ul {
  margin: 16px 0 24px;
  padding: 0;
  list-style: none;
}
.section-content ul li {
  position: relative;
  padding: 8px 0 8px 22px;
  font-size: 15px;
  line-height: 1.55;
  color: var(--ink);
  border-top: 1px solid var(--rule-2);
}
.section-content ul li:last-child { border-bottom: 1px solid var(--rule-2); }
.section-content ul li::before {
  content: "";
  position: absolute;
  left: 4px;
  top: 16px;
  width: 6px; height: 6px;
  background: var(--signal);
  border-radius: 999px;
}

@media (max-width: 900px) {
  .legal-grid { grid-template-columns: 1fr; gap: 40px; }
  .legal-aside { position: static; }
}
</style>
