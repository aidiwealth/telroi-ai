// composables/useCookieConsent.ts
//
// Consent state for the whole site. Two things matter here:
//
//  1. Nothing that needs consent may run before it is given. Both the Google
//     Analytics tag and the Cal.com booking embed are loaded by their own
//     client plugins only when their category is true, and are loaded the
//     moment it flips true without needing a reload.
//  2. A stored choice is only honoured while it still describes the same
//     categories. Bump VERSION when categories change and everyone is asked
//     again, rather than silently inheriting consent for something new.
//
// Categories cover exactly what the site loads and nothing more. A switch that
// controls nothing is worse than no switch, because it tells the visitor a
// comfortable lie about what they are agreeing to.

const STORAGE_KEY = 'telroi.cookie-consent';
const VERSION = 1;

export type ConsentCategories = {
  analytics: boolean;
  booking: boolean;
};

type StoredConsent = {
  version: number;
  decidedAt: string;
  categories: ConsentCategories;
};

const DENY_ALL: ConsentCategories = { analytics: false, booking: false };

export function useCookieConsent() {
  // `decided` stays null until the client has read storage, so the banner never
  // renders during prerender and then vanishes on hydration.
  const decided = useState<boolean | null>('cookie-consent-decided', () => null);
  const categories = useState<ConsentCategories>('cookie-consent-categories', () => ({ ...DENY_ALL }));
  const panelOpen = useState<boolean>('cookie-consent-panel', () => false);

  function read(): StoredConsent | null {
    if (import.meta.server) return null;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as StoredConsent;
      if (parsed?.version !== VERSION) return null;
      return parsed;
    } catch {
      // Storage can be unavailable or the value corrupt. Treat that as "no
      // decision" rather than throwing — worst case the visitor is asked again.
      return null;
    }
  }

  function persist(next: ConsentCategories) {
    if (import.meta.server) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        version: VERSION,
        decidedAt: new Date().toISOString(),
        categories: next
      } satisfies StoredConsent));
    } catch {
      // Consent still applies for this page view even if it cannot be stored.
    }
  }

  /** Called once on mount. Restores a previous decision, or shows the banner. */
  function hydrate() {
    const stored = read();
    if (stored) {
      // Spread over DENY_ALL so a category added later starts denied rather
      // than undefined, even if the version check is somehow bypassed.
      categories.value = { ...DENY_ALL, ...stored.categories };
      decided.value = true;
    } else {
      categories.value = { ...DENY_ALL };
      decided.value = false;
    }
  }

  function save(next: ConsentCategories) {
    categories.value = { ...DENY_ALL, ...next };
    persist(categories.value);
    decided.value = true;
    panelOpen.value = false;
  }

  const acceptAll = () => save({ analytics: true, booking: true });
  const rejectAll = () => save({ ...DENY_ALL });

  /** Reopens the chooser so a decision can be changed later. */
  function reopen() {
    decided.value = false;
    panelOpen.value = true;
  }

  return { decided, categories, panelOpen, hydrate, save, acceptAll, rejectAll, reopen };
}
