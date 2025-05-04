
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-properzi-navy text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Contattaci
            </h1>
            <p className="text-lg text-white/80 mb-0">
              Prenota una consulenza con i nostri avvocati esperti per discutere le tue esigenze legali
              ed esplorare come possiamo aiutarti a raggiungere i tuoi obiettivi.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-serif mb-6 text-properzi-navy relative">
                Mettiti in Contatto
                <span className="absolute bottom-0 left-0 w-24 h-1 bg-properzi-beige"></span>
              </h2>
              <p className="mb-8 text-properzi-navy/80">
                Hai domande o hai bisogno di assistenza legale? Il nostro team è qui per aiutarti. 
                Contattaci attraverso uno dei metodi seguenti o compila il modulo per programmare una consulenza.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-beige/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-properzi-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Telefono</h3>
                    <p className="text-properzi-navy/70 mb-1">Chiamaci direttamente:</p>
                    <a href="tel:+15551234567" className="text-properzi-beige hover:text-properzi-navy font-medium transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-beige/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-properzi-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Email</h3>
                    <p className="text-properzi-navy/70 mb-1">Inviaci un messaggio:</p>
                    <a href="mailto:info@properzistudio.com" className="text-properzi-beige hover:text-properzi-navy font-medium transition-colors">
                      info@properzistudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-beige/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-properzi-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Sede dello Studio</h3>
                    <p className="text-properzi-navy/70 mb-1">Vieni a trovarci:</p>
                    <address className="not-italic text-properzi-navy">
                      123 Legal Avenue, Suite 500<br />
                      New York, NY 10001<br />
                      Stati Uniti
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-beige/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-properzi-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Orari di Apertura</h3>
                    <p className="text-properzi-navy/70 mb-1">Siamo disponibili:</p>
                    <ul className="text-properzi-navy">
                      <li>Lunedì - Venerdì: 9:00 - 18:00</li>
                      <li>Sabato: 10:00 - 14:00 (Su appuntamento)</li>
                      <li>Domenica: Chiuso</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Ottieni Indicazioni
                  </a>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="bg-properzi-navy/5 p-8 rounded-lg">
                <h2 className="text-2xl font-serif mb-6 text-properzi-navy">Inviaci un Messaggio</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-properzi-navy/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-8 text-properzi-navy text-center">Domande Frequenti</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-properzi-beige/30">
                <AccordionTrigger className="text-properzi-navy font-medium">
                  Cosa dovrei portare alla mia prima consulenza?
                </AccordionTrigger>
                <AccordionContent className="text-properzi-navy/80">
                  Per la consulenza iniziale, porta tutti i documenti rilevanti relativi al tuo caso, 
                  come contratti, corrispondenza, documenti di tribunale o altri materiali che potrebbero aiutarci 
                  a comprendere la tua situazione. È anche utile preparare una cronologia degli eventi e un elenco 
                  di domande che vorresti discutere.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-properzi-beige/30">
                <AccordionTrigger className="text-properzi-navy font-medium">
                  Come funzionano le vostre strutture di tariffazione?
                </AccordionTrigger>
                <AccordionContent className="text-properzi-navy/80">
                  La nostra struttura tariffaria varia a seconda del tipo di caso e dei servizi richiesti. Offriamo 
                  diverse opzioni di pagamento, tra cui tariffe orarie, tariffe fisse per servizi specifici e 
                  accordi di contingenza per determinati casi. Discuteremo della struttura tariffaria applicabile 
                  alla tua situazione durante la consulenza iniziale.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-properzi-beige/30">
                <AccordionTrigger className="text-properzi-navy font-medium">
                  Quanto tempo ci vorrà per risolvere il mio caso?
                </AccordionTrigger>
                <AccordionContent className="text-properzi-navy/80">
                  Il tempo necessario per la risoluzione varia significativamente a seconda della complessità del caso, 
                  del calendario del tribunale e della possibilità di raggiungere un accordo. Durante la consulenza, 
                  forniremo una tempistica stimata basata sulla nostra esperienza con casi simili, ma tieni presente 
                  che le questioni legali possono talvolta prendere svolte inaspettate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-properzi-beige/30">
                <AccordionTrigger className="text-properzi-navy font-medium">
                  Offrite consulenze virtuali?
                </AccordionTrigger>
                <AccordionContent className="text-properzi-navy/80">
                  Sì, offriamo consulenze virtuali tramite videoconferenza per i clienti che preferiscono incontri 
                  a distanza. Queste consulenze sono sicure e confidenziali, permettendoci di discutere le tue 
                  questioni legali comodamente da casa tua o dall'ufficio.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-properzi-beige/30">
                <AccordionTrigger className="text-properzi-navy font-medium">
                  In quali aree del diritto è specializzato il vostro studio?
                </AccordionTrigger>
                <AccordionContent className="text-properzi-navy/80">
                  Properzi Studio Legale è specializzato in diverse aree del diritto, tra cui diritto societario, 
                  contenzioso, diritto di famiglia, diritto immobiliare, proprietà intellettuale e diritto del lavoro. 
                  I nostri avvocati hanno una vasta esperienza in questi campi e sono attrezzati per gestire 
                  questioni legali complesse in varie aree di pratica.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
