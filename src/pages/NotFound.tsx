import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const NotFound = () => (
  <div className="pt-24 md:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56">
    <Seo
      title="Pagina non trovata | Studio Legale Properzi"
      description="La pagina richiesta non esiste o è stata spostata."
      path="/404"
      noindex
    />
    <section className="section-padding bg-white">
      <div className="container-custom max-w-2xl text-center">
        <p className="font-cinzel text-6xl text-properzi-beige mb-4" aria-hidden="true">404</p>
        <h1 className="page-title">Pagina non trovata</h1>
        <p className="mb-8 text-properzi-navy/80">
          La pagina che cerchi non esiste o è stata spostata. Puoi tornare alla home o consultare le aree di pratica dello Studio.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button asChild className="bg-properzi-navy text-white hover:bg-properzi-darkNavy">
            <Link to="/">Torna alla home</Link>
          </Button>
          <Button asChild variant="outline" className="border-properzi-navy/30 text-properzi-navy">
            <Link to="/aree-di-pratica">Aree di pratica</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default NotFound;
