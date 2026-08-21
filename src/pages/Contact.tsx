
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="pt-24 md:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56">
      <Helmet>
        <title>Contatti | Studio Legale Properzi Roma</title>
        <meta name="description" content="Contatta lo Studio Legale Properzi a Roma: telefono, email e indirizzo per prenotare una consulenza con l'Avvocato Vanessa Properzi." />
        <link rel="canonical" href="https://studiolegale-properzi.com/contact" />
        <meta property="og:title" content="Contatti | Studio Legale Properzi Roma" />
        <meta property="og:description" content="Prenota una consulenza con lo Studio Legale Properzi a Roma." />
        <meta property="og:url" content="https://studiolegale-properzi.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-properzi-navy text-white py-10 pt-20 banner-clip overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="page-title text-white">
              Contattaci
            </h1>
            <div className="divider mx-auto bg-properzi-beige"></div>
            <p className="text-lg text-white/80 mb-0">
              Siamo a tua disposizione per offrirti la migliore consulenza legale
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
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Telefono</h3>
                    <p className="text-properzi-navy/70 mb-1">Chiamaci direttamente:</p>
                    <a href="tel:+0645435416" className="text-properzi-beige hover:text-properzi-navy font-medium transition-colors">
                      +0645435416
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-navy flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Email</h3>
                    <p className="text-properzi-navy/70 mb-1">Inviaci un messaggio:</p>
                    <a href="mailto:vanessa.properzi@libero.it" className="text-properzi-beige hover:text-properzi-navy font-medium transition-colors">
                    vanessa.properzi@libero.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-navy flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Sede dello Studio</h3>
                    <p className="text-properzi-navy/70 mb-1">Vieni a trovarci:</p>
                    <a href="https://maps.app.goo.gl/uLw9hFkohpKQF1CY7" target="_blank" rel="noopener noreferrer" className="text-properzi-beige hover:text-properzi-navy font-medium transition-colors">
                      Piazzale Benito Juarez 10/11<br />
                      Roma, RM 00144<br />
                      Italia
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-navy flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
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
                <h3 className="text-xl font-cinzel text-properzi-navy mb-6">Richiedi Informazioni</h3>
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
            <iframe
              title="Studio Legale Properzi Indirizzo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.581207628962!2d12.466200000000001!3d41.8296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a5a1b93b46f%3A0x3f570dd94ddfd0ad!2sPiazzale%20Benito%20Juarez%2C%2010%2F11%2C%2000144%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2sit!4v1719417523292!5m2!1sen!2sit"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
