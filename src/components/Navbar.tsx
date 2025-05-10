
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
        isScrolled ? "bg-properzi-beige shadow-md py-3" : "bg-properzi-beige shadow-md py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/photos/logo.png"
            alt="Properzi Studio Legale"
            className="h-16 md:h-12"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/"
            className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors uppercase tracking-wider text-sm"
          >
            Home
          </Link>
          <Link
            to="/success-stories"
            className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors uppercase tracking-wider text-sm"
          >
            Casi di Successo
          </Link>
          <Link
            to="/contact"
            className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors uppercase tracking-wider text-sm"
          >
            Contatti
          </Link>
          <Button asChild className="bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors uppercase text-xs tracking-wider">
          <Link to="/contact">Prenota Consulenza</Link>
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
              className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors uppercase tracking-wider text-sm py-2"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/success-stories"
              className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors uppercase tracking-wider text-sm py-2"
              onClick={closeMobileMenu}
            >
              Casi di Successo
            </Link>
            <Link
              to="/contact"
              className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors uppercase tracking-wider text-sm py-2"
              onClick={closeMobileMenu}
            >
              Contatti
            </Link>
            <Button asChild className="bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors uppercase text-xs tracking-wider w-full">
              <a href="tel:+123456789">Prenota Consulenza</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
