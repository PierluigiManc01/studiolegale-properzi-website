import { Link, useParams } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import FaqList from "@/components/FaqList";
import NotFound from "@/pages/NotFound";
import { getPracticeArea, practiceAreas, practiceAreaPath } from "@/content/practice-areas";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { STUDIO } from "@/lib/site";

const PracticeArea = () => {
  const { slug = "" } = useParams();
  const area = getPracticeArea(slug);

  if (!area) return <NotFound />;

  const path = practiceAreaPath(area.slug);
  const others = practiceAreas.filter((a) => a.slug !== area.slug);

  return (
    <div className="pt-24 md:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56">
      <Seo
        title={area.metaTitle}
        description={area.metaDescription}
        path={path}
        jsonLd={[
          serviceSchema(area),
          faqSchema(area.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Aree di pratica", path: "/aree-di-pratica" },
            { name: area.name, path },
          ]),
        ]}
      />

      <section className="bg-properzi-navy text-white py-10 pt-16 banner-clip overflow-hidden">
        <div className="container-custom pb-10">
          <nav aria-label="Percorso" className="mb-6 text-sm text-white/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-properzi-beige transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/aree-di-pratica" className="hover:text-properzi-beige transition-colors">Aree di pratica</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-properzi-beige">{area.name}</li>
            </ol>
          </nav>
          <h1 className="page-title text-white max-w-4xl text-balance">{area.h1}</h1>
          <div className="divider bg-properzi-beige"></div>
          <p className="text-lg text-white/80 max-w-2xl">{area.summary}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 lg:gap-16">
          <div className="max-w-[68ch]">
            {area.intro.map((paragraph) => (
              <p key={paragraph} className="mb-5 text-lg leading-relaxed text-properzi-navy/90">{paragraph}</p>
            ))}
            {area.partner && (
              <p className="mb-5 leading-relaxed text-properzi-navy/90">{area.partner}</p>
            )}

            <h2 className="section-title mt-10">Di cosa si occupa lo Studio</h2>
            <div className="divider"></div>
            <ul className="space-y-3 text-properzi-navy/90">
              {area.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-properzi-beige" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="section-title mt-14">Domande frequenti</h2>
            <div className="divider"></div>
            <FaqList faqs={area.faqs} />
            <p className="mt-6 text-sm text-properzi-navy/75">
              Le risposte hanno valore informativo generale e non sostituiscono una consulenza sul caso concreto.
            </p>
          </div>

          <aside className="lg:sticky lg:top-40 self-start space-y-8">
            <div className="rounded-lg bg-properzi-navy p-8 text-white shadow-md">
              <h2 className="font-cinzel text-xl text-properzi-beige mb-3">Parliamo del tuo caso</h2>
              <p className="text-white/80 mb-6 text-sm leading-relaxed">
                Studio in {STUDIO.street}, {STUDIO.district}, Roma. Si riceve su appuntamento, {STUDIO.hours.toLowerCase()}.
              </p>
              <Button asChild className="w-full bg-properzi-beige text-properzi-navy hover:bg-white transition-colors mb-3">
                <Link to="/contatti">Prenota una consulenza</Link>
              </Button>
              <a
                href={`tel:${STUDIO.phone}`}
                className="flex items-center justify-center gap-2 py-2 text-properzi-beige hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> {STUDIO.phoneDisplay}
              </a>
            </div>

            <nav aria-label="Altre aree di pratica">
              <h2 className="font-cinzel text-lg text-properzi-navy mb-3">Altre aree di pratica</h2>
              <ul className="space-y-2">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link
                      to={practiceAreaPath(other.slug)}
                      className="group inline-flex items-center gap-2 text-properzi-navy/80 hover:text-properzi-navy transition-colors"
                    >
                      {other.name}
                      <ArrowRight aria-hidden="true" className="h-4 w-4 text-properzi-beige transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default PracticeArea;
