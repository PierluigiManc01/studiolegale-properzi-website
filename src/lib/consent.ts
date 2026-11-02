// Cookie preference lives in localStorage. Access is wrapped because it can
// throw (private mode, blocked storage) and does not exist during prerender.

export type Consent = "all" | "necessary";

const KEY = "cookie-consent";
const EVENT = "cookie-consent-change";

export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "all" || value === "necessary" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: Consent) {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    // storage unavailable: the choice holds for this page view only
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
}

export function onConsentChange(listener: (value: Consent) => void) {
  const handler = (event: Event) => listener((event as CustomEvent<Consent>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}
