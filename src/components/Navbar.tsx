
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/34c2cf6e-cb1d-429d-8b66-846d63dc0d61.png"
            alt="Properzi Studio Legale"
            className="h-12 md:h-14"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/success-stories"
            className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors"
          >
            Casi di Successo
          </Link>
          <Link
            to="/contact"
            className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors"
          >
            Contatti
          </Link>
          <Button className="bg-properzi-beige hover:bg-properzi-navy text-properzi-navy hover:text-properzi-beige transition-colors">
            <a href="tel:+123456789">Prenota Consulenza</a>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="text-properzi-navy"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/success-stories"
              className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Casi di Successo
            </Link>
            <Link
              to="/contact"
              className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Contatti
            </Link>
            <Button className="bg-properzi-beige hover:bg-properzi-navy text-properzi-navy hover:text-properzi-beige transition-colors w-full">
              <a href="tel:+123456789">Prenota Consulenza</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
