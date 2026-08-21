
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
        isScrolled ? "bg-properzi-beige shadow-md py-2 md:py-3 lg:py-4 xl:py-5" : "bg-transparent py-4 md:py-6 lg:py-8 xl:py-10"
      )}
    >
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center"
        >
          <img
            src="/photos/logo.png"
            alt="Properzi Studio Legale"
            className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10 xl:space-x-14 2xl:space-x-16">
          <Link
            to="/"
            className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors uppercase tracking-wider text-sm lg:text-base xl:text-lg 2xl:text-xl"
          >
            Home
          </Link>
          {/*<Link
            to="/success-stories"
            className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors uppercase tracking-wider text-sm lg:text-base xl:text-lg 2xl:text-xl"
          >
            Casi di Successo
          </Link>*/}
          <Link
            to="/contact"
            className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors uppercase tracking-wider text-sm lg:text-base xl:text-lg 2xl:text-xl"
          >
            Contatti
          </Link>
          <Link
            to="/candidature"
            className="text-properzi-navy hover:text-properzi-beige font-medium transition-colors uppercase tracking-wider text-sm lg:text-base xl:text-lg 2xl:text-xl"
          >
            Candidature
          </Link>
          <Button asChild className="bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors uppercase text-xs lg:text-sm xl:text-base 2xl:text-lg tracking-wider px-4 py-2 lg:px-6 lg:py-5 xl:px-8 xl:py-6 2xl:px-10 2xl:py-7">
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
            aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-properzi-beige shadow-lg animate-fade-in" style={{ minHeight: '60vh' }}>
          <div className="w-full px-4 md:px-8 lg:px-12 flex items-center justify-between py-4">
            <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
              <img
                src="/photos/logo.png"
                alt="Properzi Studio Legale"
                className="h-16"
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMobileMenu}
              className="text-properzi-navy"
              aria-label="Chiudi menu"
            >
              <X />
            </Button>
          </div>
          <div className="w-full px-4 md:px-8 lg:px-12 py-8 flex flex-col space-y-6">
            <Link
              to="/"
              className="text-properzi-navy hover:text-properzi-navy/70 font-medium transition-colors uppercase tracking-wider text-lg py-2"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-properzi-navy hover:text-properzi-navy/70 font-medium transition-colors uppercase tracking-wider text-lg py-2"
              onClick={closeMobileMenu}
            >
              Contatti
            </Link>
            <Link
              to="/candidature"
              className="text-properzi-navy hover:text-properzi-navy/70 font-medium transition-colors uppercase tracking-wider text-lg py-2"
              onClick={closeMobileMenu}
            >
              Candidature
            </Link>
            <Button asChild className="bg-properzi-navy hover:bg-properzi-navy/80 text-white transition-colors uppercase text-sm tracking-wider w-full py-4">
              <Link to="/contact" onClick={closeMobileMenu}>Prenota Consulenza</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
