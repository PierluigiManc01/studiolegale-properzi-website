
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-properzi-navy text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <img
              src="/lovable-uploads/34c2cf6e-cb1d-429d-8b66-846d63dc0d61.png"
              alt="Properzi Studio Legale"
              className="h-16 mb-4 bg-white p-2 rounded"
            />
            <p className="text-sm mt-4 text-properzi-beige/90">
              Properzi Studio Legale offre servizi legali esperti con un impegno
              per l'eccellenza, l'integrità e la soddisfazione del cliente.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4 text-properzi-beige">Link Rapidi</h3>
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
            <h3 className="font-serif text-xl mb-4 text-properzi-beige">Informazioni di Contatto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-properzi-beige" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-properzi-beige" />
                <span>info@properzistudio.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-properzi-beige" />
                <span>123 Legal Avenue, Suite 500<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/70">
              © {currentYear} Properzi Studio Legale. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white hover:text-properzi-beige transition-colors">
                Informativa sulla Privacy
              </a>
              <a href="#" className="text-white hover:text-properzi-beige transition-colors">
                Termini di Servizio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
