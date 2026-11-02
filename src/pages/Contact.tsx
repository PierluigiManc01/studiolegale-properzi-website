import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { legalServiceSchema, breadcrumbSchema } from "@/lib/schema";
import { readConsent, writeConsent, onConsentChange } from "@/lib/consent";
import { STUDIO } from "@/lib/site";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.581207628962!2d12.466200000000001!3d41.8296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a5a1b93b46f%3A0x3f570dd94ddfd0ad!2sPiazzale%20Benito%20Juarez%2C%2010%2F11%2C%2000144%20Roma%20RM%2C%20Italy!5e0!3m2!1sit!2sit!4v1719417523292!5m2!1sit!2sit";

// Google Maps sets third-party cookies, so the iframe waits for consent.
const StudioMap = () => {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(readConsent() === "all");
    return onConsentChange((value) => setAllowed(value === "all"));
  }, []);

  if (allowed) {
    return (
      <iframe
        title="Mappa: Studio Legale Properzi, Piazzale Benito Juarez 10/11, Roma"
        src={MAP_SRC}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 bg-properzi-lightBeige px-6 text-center">
      <MapPin className="h-8 w-8 text-properzi-navy" aria-hidden="true" />
      <p className="max-w-md text-properzi-navy/85">
        {STUDIO.street}, {STUDIO.postalCode} {STUDIO.city} ({STUDIO.district}). La mappa è fornita da Google Maps, che può impostare cookie di terze parti.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={() => writeConsent("all")} className="bg-properzi-navy text-white hover:bg-properzi-darkNavy">
          Mostra la mappa
        </Button>
        <Button asChild variant="outline" className="border-properzi-navy/30 text-properzi-navy">
          <a href={STUDIO.mapsUrl} target="_blank" rel="noopener noreferrer">Apri in Google Maps</a>
        </Button>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="pt-24 md:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56">
      <Seo
        title="Contatti | Studio Legale Properzi, Avvocato a Roma EUR"
        description="Studio Legale Properzi, Piazzale Benito Juarez 10/11, Roma EUR. Tel. 06 4543 5416, email e modulo per prenotare una consulenza con l'Avv. Vanessa Properzi."
        path="/contatti"
        jsonLd={[
          legalServiceSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contatti", path: "/contatti" },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="bg-properzi-navy text-white py-10 pt-20 banner-clip overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="page-title text-white">
              Contatti dello Studio
            </h1>
            <div className="divider mx-auto bg-properzi-beige"></div>
            <p className="text-lg text-white/80 mb-0">
              Studio Legale Properzi, Piazzale Benito Juarez 10/11, Roma EUR
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-title">Informazioni di Contatto</h2>
              <div className="divider"></div>
              <p className="mb-8 text-properzi-navy/80">
                Hai domande o hai bisogno di assistenza legale? Il nostro team è qui per aiutarti.
                Contattaci attraverso uno dei metodi seguenti o compila il modulo per programmare una consulenza.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-navy flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Telefono</h3>
                    <p className="text-properzi-navy/70 mb-1">Chiamaci direttamente:</p>
                    <a href={`tel:${STUDIO.phone}`} className="text-properzi-gold hover:text-properzi-navy font-medium transition-colors">
                      {STUDIO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-navy flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Email</h3>
                    <p className="text-properzi-navy/70 mb-1">Inviaci un messaggio:</p>
                    <a href={`mailto:${STUDIO.email}`} className="text-properzi-gold hover:text-properzi-navy font-medium transition-colors">
                      {STUDIO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-navy flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Sede dello Studio</h3>
                    <p className="text-properzi-navy/70 mb-1">Vieni a trovarci:</p>
                    <a href={STUDIO.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-properzi-gold hover:text-properzi-navy font-medium transition-colors">
                      {STUDIO.street}<br />
                      {STUDIO.postalCode} {STUDIO.city} ({STUDIO.district})<br />
                      Italia
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-navy flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Orari di Apertura</h3>
                    <p className="text-properzi-navy/70 mb-1">Siamo disponibili:</p>
                    <ul className="text-properzi-navy">
                      <li>Lunedì - Venerdì: 9:00 - 18:00</li>
                      <li>Sabato - Domenica: Chiuso</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl font-cinzel text-properzi-navy mb-6">Richiedi Informazioni</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-10">
        <div className="container-custom">
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
            <StudioMap />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
