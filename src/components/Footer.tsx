
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-properzi-navy text-white">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/lovable-uploads/34c2cf6e-cb1d-429d-8b66-846d63dc0d61.png"
              alt="Properzi Studio Legale"
              className="h-16 mb-4 bg-white p-2 rounded"
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
              <li>
                <Link to="/success-stories" className="hover:text-properzi-beige transition-colors">
                  Casi di Successo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-properzi-beige transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-cinzel text-xl mb-4 text-properzi-beige">Informazioni di Contatto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-properzi-beige" />
                <span href="+393357252561">+(39) 3357252561</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-properzi-beige" />
                <span href="vanessa.properzi@libero.it">vanessa.properzi@libero.it</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-properzi-beige" />
                <span href="https://maps.app.goo.gl/uLw9hFkohpKQF1CY7">Piazzale Benito Juarez 10/11<br />Roma, RM 00144</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-white/70 text-center">
            © {currentYear} Properzi Studio Legale. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
