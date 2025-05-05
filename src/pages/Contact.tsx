
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-properzi-navy text-white py-12 banner-clip">
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
                    <a href="tel:+393357252561" className="text-properzi-beige hover:text-properzi-navy font-medium transition-colors">
                      +39 3357252561
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
                    <address href="https://maps.app.goo.gl/uLw9hFkohpKQF1CY7" className="not-italic text-properzi-navy">
                      Piazzale Benito Juarez 10/11<br />
                      Roma, RM 00144<br />
                      Italia
                    </address>
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
          <div className="h-80 w-full bg-properzi-navy/10 flex items-center justify-center">
            <p className="text-properzi-navy font-medium">Mappa dello Studio (Google Maps)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
