
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
              Properzi Studio Legale provides expert legal services with a commitment
              to excellence, integrity, and client satisfaction.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4 text-properzi-beige">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-properzi-beige transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-properzi-beige transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-properzi-beige transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4 text-properzi-beige">Contact Information</h3>
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
              © {currentYear} Properzi Studio Legale. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white hover:text-properzi-beige transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-properzi-beige transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
