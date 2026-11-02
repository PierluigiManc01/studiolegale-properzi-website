import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";
import Seo from "@/components/Seo";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { practiceAreas, practiceAreaPath, studioFaqs, type PracticeArea } from "@/content/practice-areas";
import { faqSchema, lawyerSchema, legalServiceSchema } from "@/lib/schema";
import { STUDIO } from "@/lib/site";

const PracticeAreaCard = ({ area }: { area: PracticeArea }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="bg-white rounded shadow-sm hover:shadow-md transition-shadow relative h-[270px]"
      style={{ perspective: "1000px" }}
    >
      <div
        className="w-full h-full transition-all duration-500 absolute"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
          aria-hidden={isFlipped}
        >
          <div>
            <h3 className="text-xl font-cinzel font-medium mb-3 text-properzi-navy">
              <Link to={practiceAreaPath(area.slug)} tabIndex={isFlipped ? -1 : 0} className="hover:text-properzi-gold transition-colors">
                {area.name}
              </Link>
            </h3>
            <p className="text-properzi-navy/80 mb-4">{area.summary}</p>
          </div>
          <button
            onClick={() => setIsFlipped(true)}
            tabIndex={isFlipped ? -1 : 0}
            className="text-properzi-gold hover:text-properzi-navy transition-colors flex items-center gap-1 font-medium"
          >
            Maggiori informazioni <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full p-6 bg-properzi-navy text-white flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          aria-hidden={!isFlipped}
        >
          <div>
            <p className="text-xl font-cinzel font-medium mb-3">{area.name}</p>
            <p className="mb-2">La nostra consulenza include:</p>
            <ul className="list-disc pl-5 text-sm mb-4">
              {area.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => setIsFlipped(false)}
              tabIndex={isFlipped ? 0 : -1}
              className="text-properzi-beige hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              <ArrowRight size={16} className="transform rotate-180 mr-1" aria-hidden="true" /> Indietro
            </button>
            <Link
              to={practiceAreaPath(area.slug)}
              tabIndex={isFlipped ? 0 : -1}
              className="text-properzi-beige hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              Approfondisci <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Seo
        title="Studio Legale Properzi | Avvocato Civilista a Roma EUR"
        description="Studio Legale Properzi, Roma EUR: l'Avv. Vanessa Properzi, cassazionista, assiste privati e imprese in diritto civile, famiglia, casa, lavoro e successioni."
        path="/"
        jsonLd={[legalServiceSchema(), lawyerSchema(), faqSchema(studioFaqs)]}
      />
      {/* Hero Section */}
      <section id='home' className="relative min-h-[60vh] md:min-h-[70vh] flex items-center banner-clip overflow-hidden pt-20 md:pt-28 lg:pt-36 xl:pt-48 2xl:pt-64 pb-12">
        <div className="absolute inset-0 bg-properzi-beige md:bg-transparent">
          {/* Only desktop shows the photo: the <source> media query keeps phones from downloading it. */}
          <picture>
            <source
              media="(min-width: 768px)"
              type="image/webp"
              srcSet="/photos/hero-1280.webp 1280w, /photos/hero-2000.webp 2000w"
              sizes="100vw"
            />
            <img
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              alt="L'Avvocato Vanessa Properzi in toga"
              className="hidden md:block w-full h-full object-cover object-left brightness-60"
              style={{ filter: 'opacity(0.5)' }}
            />
          </picture>
        </div>
        <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
          <div className="ml-auto max-w-2xl xl:max-w-3xl 2xl:max-w-4xl text-center md:text-right">
            <h1 className="text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl font-cinzel font-bold mb-6 text-properzi-navy text-balance">
              Studio Legale Properzi — Avvocato Civilista a Roma
            </h1>
            <p className="text-base md:text-xl 2xl:text-2xl mb-8 text-properzi-navy/90">
              L'Avvocato Vanessa Properzi, con il suo Studio all'EUR, coordina un network di professionisti esperti dedicati alla tua tutela legale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-3 relative z-40">
              <Button asChild className="bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors py-4 md:py-6 px-6 md:px-8 2xl:py-8 2xl:px-10 2xl:text-lg">
                <Link to="/contatti">Prenota Consulenza Legale</Link>
              </Button>
              <Button asChild variant="outline" className="border-properzi-navy/40 bg-white/60 text-properzi-navy hover:bg-white py-4 md:py-6 px-6 md:px-8 2xl:py-8 2xl:px-10 2xl:text-lg">
                <a href={`tel:${STUDIO.phone}`}>
                  <Phone className="h-4 w-4" aria-hidden="true" /> {STUDIO.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="section-padding bg-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="section-title text-center">Chi Siamo</h2>
            <div className="divider mx-auto"></div>
            <p className="mb-6 text-properzi-navy/90 leading-relaxed">
              Lo Studio Legale Properzi opera a Roma da più di 20 anni. Da una solida iniziativa dell'Avvocato Vanessa Properzi,
              lo Studio fornisce assistenza di eccellenza, attenta e personalizzata per privati, imprese ed enti.
            </p>
            <p className="text-properzi-navy/90 leading-relaxed">
              Il nostro approccio integra la competenza diretta dello Studio con una stretta collaborazione insieme a professionisti esterni d'eccezione, garantendo così una copertura a 360 gradi nella cura delle tue posizioni.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-properzi-navy/5 rounded-lg">
              <div className="flex items-center justify-center">
                <img
                  src="/photos/avvocati-logo-4.png"
                  alt="Logo dell'Ordine degli Avvocati di Roma"
                  width={250}
                  height={291}
                  loading="lazy"
                  className="max-h-24 w-auto mx-auto"
                />
              </div>
            </div>
            <div className="text-center p-6 bg-properzi-navy/5 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-properzi-gold mb-2">25+</div>
              <p className="text-properzi-navy font-medium">Anni di Esperienza</p>
            </div>
            <div className="text-center p-6 bg-properzi-navy/5 rounded-lg">
              <div className="flex items-center justify-center">
                <img
                  src="/photos/logo_CorteSupremaCassazione.png"
                  alt="Logo della Corte Suprema di Cassazione"
                  width={440}
                  height={134}
                  loading="lazy"
                  className="max-h-24 w-auto mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Staff Section */}
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title text-center">Studio Legale Properzi</h2>
              <div className="divider mx-auto"></div>
              <p className="text-properzi-navy/90 mb-8">
                Lo Studio fa fondamento sull'esperienza, la dedizione e l'alta specializzazione dell'Avvocato Vanessa Properzi.
              </p>
            </div>

            <div className="max-w-md mx-auto mb-16">
              {/* Vanessa - Founder */}
              <div className="bg-properzi-navy/5 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/photos/vanessa.webp"
                    alt="Avvocato Vanessa Properzi"
                    width={960}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-cinzel text-2xl text-properzi-navy font-medium mb-1">Avv. Vanessa Properzi</h3>
                  <p className="text-properzi-gold font-semibold mb-2">Titolare dello Studio - Avvocato Civilista</p>
                  <p className="text-properzi-navy/80 text-sm">Avvocato cassazionista esperta in diritto civile a Roma, da oltre 20 anni tutela con successo i propri assistiti al cuore della capitale.</p>
                </div>
              </div>
            </div>
          </div>

          {/* External Collaborators Section */}
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title text-center">I Nostri Professionisti in Partnership</h2>
              <div className="divider mx-auto"></div>
              <p className="text-properzi-navy/90">
                Lo Studio Legale Properzi si avvale inoltre della stretta collaborazione di professionisti esterni, qualificati e specializzati, per completare tempestivamente e con la massima cura le vostre esigenze in ogni settore.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Ale Poma */}
              <div className="bg-properzi-navy/5 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/photos/alepoma.webp"
                    alt="Avvocato Alessandra Poma"
                    width={600}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-cinzel text-xl text-properzi-navy font-medium">Avv. Alessandra Poma</h3>
                  <p className="text-properzi-gold">Avvocato Penalista - Partner Esterno</p>
                  <p className="text-properzi-navy text-xs mt-2">Studio: P.zza Monteleone di Spoleto, 8; Roma</p>
                </div>
              </div>

              {/* Maddalena */}
              <div className="bg-properzi-navy/5 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/photos/maddalena.webp"
                    alt="Notaio Maddalena Cuomo"
                    width={600}
                    height={752}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-cinzel text-xl text-properzi-navy font-medium">Notaio Maddalena Cuomo</h3>
                  <p className="text-properzi-gold">Notaio - Partner Esterno</p>
                  <p className="text-properzi-navy text-xs mt-2">Studio: Via Paraguay, 5; Roma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="section-padding bg-properzi-navy py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title text-center text-properzi-beige">Le Nostre Aree di Pratica</h2>
            <div className="divider mx-auto"></div>
            <p className="text-properzi-beige/80">
              Offriamo una gamma completa di servizi legali su misura per soddisfare le diverse esigenze dei nostri clienti.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/aree-di-pratica"
              className="inline-flex items-center gap-2 font-medium text-properzi-beige hover:text-white transition-colors"
            >
              Tutte le aree di pratica e le domande frequenti <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-properzi-lightBeige py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">Domande frequenti</h2>
            <div className="divider"></div>
            <FaqList faqs={studioFaqs} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="section-title">Contattaci</h2>
              <div className="divider"></div>
              <p className="mb-6 text-properzi-navy/90">
                Siamo a disposizione per ascoltare le tue esigenze e offrirti la migliore assistenza legale possibile.
              </p>

              <div className="space-y-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-properzi-navy flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Telefono</h3>
                    <a href={`tel:${STUDIO.phone}`} className="text-properzi-navy/70 hover:text-properzi-gold transition-colors">
                      {STUDIO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-properzi-navy flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Email</h3>
                    <a href={`mailto:${STUDIO.email}`} className="text-properzi-navy/70 hover:text-properzi-gold transition-colors">
                      {STUDIO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-properzi-navy flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Indirizzo</h3>
                    <a href={STUDIO.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-properzi-navy/70 hover:text-properzi-gold transition-colors">
                      {STUDIO.street}<br />
                      {STUDIO.postalCode} {STUDIO.city} ({STUDIO.district})<br />
                      Italia
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-cinzel text-properzi-navy mb-6">Richiedi Informazioni</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
