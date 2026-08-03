<template>
  <section class="download-section" id="download">
    <div class="wrap">
      <div class="sec-head reveal">
        <div class="kicker">Telroi One</div>
        <h2 class="sec-title">
          <span>Your whole team,</span> <span>one app to download.</span>
        </h2>
        <p class="sec-lede">
          Telroi One is the desktop app for your team: dialer, CRM, live call widget and AI call handling in one place.
          Download on Mac or Windows and be live within minutes.
        </p>
      </div>

      <div class="dl-grid">
        <div class="dl-card reveal">
          <div class="dl-head">
            <div class="dl-os-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 12.04c-.03-3.16 2.58-4.67 2.69-4.74-1.46-2.14-3.74-2.43-4.55-2.47-1.94-.2-3.78 1.14-4.77 1.14-.99 0-2.5-1.11-4.11-1.08-2.12.03-4.07 1.23-5.16 3.12-2.2 3.82-.56 9.47 1.59 12.57 1.05 1.52 2.3 3.22 3.93 3.16 1.58-.06 2.17-1.02 4.08-1.02 1.91 0 2.45 1.02 4.12 1 1.7-.03 2.78-1.55 3.82-3.07 1.2-1.76 1.69-3.47 1.71-3.56-.04-.02-3.28-1.26-3.31-5.05zM14.05 3.07c.87-1.06 1.46-2.53 1.3-4-1.25.05-2.77.83-3.67 1.89-.8.93-1.51 2.43-1.32 3.87 1.4.11 2.82-.71 3.69-1.76z"/>
              </svg>
            </div>
            <div class="meta">
              <h3>Telroi One for Mac</h3>
              <div class="sub">macOS · Intel &amp; Apple Silicon</div>
            </div>
          </div>
          <ol class="dl-steps">
            <li>Download the latest Telroi One for macOS below.</li>
            <li>Drag Telroi One into your Applications folder.</li>
            <li>Open Telroi One from your Mac's Applications list.</li>
            <li>Log in with the credentials your admin set up, or contact support.</li>
          </ol>
          <a class="dl-btn" href="https://messenger.telroi.ai/communicator4/darwin_intel64/latest">
            <span>Download Telroi One for Mac</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </div>

        <div class="dl-card reveal reveal-delay-1">
          <div class="dl-head">
            <div class="dl-os-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 5.5L11 4.4v7.1H3V5.5zm0 13l8 1.1v-7H3v5.9zM12 4.3L22 3v8.5H12V4.3zM12 12.5h10V21l-10-1.4v-7.1z"/>
              </svg>
            </div>
            <div class="meta">
              <h3>Telroi One for Windows</h3>
              <div class="sub">Windows · x64</div>
            </div>
          </div>
          <ol class="dl-steps">
            <li>Download the latest Telroi One for Windows below.</li>
            <li>Open the .exe file and follow the installation process.</li>
            <li>Open Telroi One from your Windows application menu.</li>
            <li>Log in with the credentials your admin set up, or contact support.</li>
          </ol>
          <a class="dl-btn" href="https://messenger.telroi.ai/communicator4/win_x64/latest">
            <span>Download Telroi One for Windows</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.download-section { padding: 110px 0; background: #fff; }
.dl-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 56px;
}
.dl-card {
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: var(--radius);
  padding: 36px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s, transform 0.2s;
}
.dl-card:hover { border-color: var(--ink); transform: translateY(-2px); }
.dl-head {
  display: flex; align-items: center; gap: 16px;
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--rule);
}
.dl-os-icon {
  width: 44px; height: 44px;
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  background: var(--paper-3);
  border-radius: 10px;
  color: var(--ink);
}
.dl-head .meta { flex: 1; }
.dl-head h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 24px;
  letter-spacing: -0.02em;
  margin: 0 0 4px;
}
.dl-head .sub {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-soft);
}
.dl-steps {
  list-style: none;
  counter-reset: dl;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}
.dl-steps li {
  counter-increment: dl;
  display: flex;
  gap: 14px;
  font-size: 14.5px;
  line-height: 1.5;
  color: var(--ink);
}
.dl-steps li::before {
  content: counter(dl);
  flex-shrink: 0;
  width: 22px; height: 22px;
  border-radius: 50%;
  background: var(--paper-3);
  color: var(--signal);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  display: flex; align-items: center; justify-content: center;
  margin-top: 1px;
}
.dl-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  padding: 14px 22px;
  background: var(--ink);
  color: #fff;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.15s, transform 0.15s;
  align-self: flex-start;
}
.dl-btn:hover { background: #000; transform: translateY(-1px); }
.dl-btn svg { width: 14px; height: 14px; }

@media (max-width: 820px) {
  .dl-grid { grid-template-columns: 1fr; }
  .dl-card { padding: 28px; }
}
</style>
