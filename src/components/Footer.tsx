
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { practiceAreas, practiceAreaPath } from "@/content/practice-areas";
import { STUDIO } from "@/lib/site";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-properzi-navy text-white">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="/photos/logo-256.webp"
              alt="Studio Legale Properzi"
              width={439}
              height={438}
              loading="lazy"
              className="h-20 md:h-28 w-auto"
            />
            <p className="text-sm mt-4 text-properzi-beige/90">
              Properzi Studio Legale offre servizi legali con eccellenza ed integrità, al servizio del cliente.
            </p>
          </div>

          <div>
            <h3 className="font-cinzel text-xl mb-4 text-properzi-beige">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-properzi-beige transition-colors">
                  Home
                </Link>
              </li>
              {/*<li>
                <Link to="/success-stories" className="hover:text-properzi-beige transition-colors">
                  Casi di Successo
                </Link>
              </li>*/}
              <li>
                <Link to="/contatti" className="hover:text-properzi-beige transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <Link to="/candidature" className="hover:text-properzi-beige transition-colors">
                  Candidature
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-properzi-beige transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-cinzel text-xl mb-4 text-properzi-beige">Aree di Pratica</h3>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link to={practiceAreaPath(area.slug)} className="hover:text-properzi-beige transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-cinzel text-xl mb-4 text-properzi-beige">Informazioni di Contatto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0 text-properzi-beige" aria-hidden="true" />
                <a href={`tel:${STUDIO.phone}`} className="text-white hover:text-properzi-beige transition-colors">
                  <span>{STUDIO.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0 text-properzi-beige" aria-hidden="true" />
                <a href="mailto:vanessa.properzi@libero.it" className="text-white hover:text-properzi-beige transition-colors">
                  <span>vanessa.properzi@libero.it</span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-properzi-beige" aria-hidden="true" />
                <a href={STUDIO.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-properzi-beige transition-colors">
                  <span>{STUDIO.street}<br />{STUDIO.postalCode} {STUDIO.city} ({STUDIO.district})</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-white/70 text-center">
            © {currentYear} Studio Legale Properzi · Avv. Vanessa Properzi · Roma. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
