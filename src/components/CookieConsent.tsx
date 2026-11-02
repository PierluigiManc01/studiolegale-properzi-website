import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { readConsent, writeConsent, type Consent } from "@/lib/consent";

// Non-blocking bottom bar: the site sets no profiling cookies, so there is
// nothing to protect by locking the page behind a modal. The only third-party
// cookies come from the Google Maps embed, which waits for "Accetta tutti".
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
  }, []);

  const choose = (value: Consent) => {
    writeConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Preferenze cookie"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-properzi-navy/10 bg-white/95 backdrop-blur-sm shadow-[0_-8px_24px_-12px_rgba(30,42,53,0.25)] animate-slide-in"
    >
      <div className="container-custom flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-properzi-navy/85 max-w-[75ch]">
          Questo sito usa solo cookie tecnici. Con «Accetta tutti» consenti anche il caricamento di Google Maps nella pagina Contatti, che può impostare cookie di terze parti.{" "}
          <Link to="/privacy" className="underline underline-offset-4 hover:text-properzi-navy">
            Informativa privacy
          </Link>
        </p>
        <div className="flex flex-shrink-0 gap-2">
          <Button variant="outline" onClick={() => choose("necessary")} className="border-properzi-navy/30 text-properzi-navy">
            Solo necessari
          </Button>
          <Button onClick={() => choose("all")} className="bg-properzi-navy text-white hover:bg-properzi-darkNavy">
            Accetta tutti
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
