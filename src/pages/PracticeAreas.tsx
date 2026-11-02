import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { practiceAreas, practiceAreaPath } from "@/content/practice-areas";
import { breadcrumbSchema } from "@/lib/schema";

const PracticeAreas = () => (
  <div className="pt-24 md:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56">
    <Seo
      title="Aree di Pratica | Studio Legale Properzi, Roma EUR"
      description="Diritto civile, famiglia, immobiliare, lavoro, successioni e penale: le aree di pratica dello Studio Legale Properzi a Roma EUR, con le domande più frequenti."
      path="/aree-di-pratica"
      jsonLd={[
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Aree di pratica", path: "/aree-di-pratica" },
        ]),
      ]}
    />

    <section className="bg-properzi-navy text-white py-10 pt-16 banner-clip overflow-hidden">
      <div className="container-custom pb-10">
        <h1 className="page-title text-white">Aree di pratica</h1>
        <div className="divider bg-properzi-beige"></div>
        <p className="text-lg text-white/80 max-w-2xl">
          Lo Studio Legale Properzi assiste privati, imprese ed enti a Roma in materia civile, con il supporto di professionisti partner per il diritto penale e gli atti notarili.
        </p>
      </div>
    </section>

    <section className="section-padding bg-white">
      <div className="container-custom">
        <ul className="divide-y divide-properzi-navy/15 border-y border-properzi-navy/15">
          {practiceAreas.map((area) => (
            <li key={area.slug}>
              <Link
                to={practiceAreaPath(area.slug)}
                className="group grid gap-2 py-8 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)_auto] md:items-baseline md:gap-10"
              >
                <h2 className="font-cinzel text-2xl text-properzi-navy">{area.name}</h2>
                <p className="text-properzi-navy/80 leading-relaxed max-w-[60ch]">{area.summary}</p>
                <span className="inline-flex items-center gap-2 font-medium text-properzi-gold group-hover:text-properzi-navy transition-colors">
                  Approfondisci
                  <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default PracticeAreas;
