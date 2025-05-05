
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-properzi-navy/5 pt-20 banner-clip overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold mb-6 text-properzi-navy">
              Properzi Studio Legale
            </h1>
            <p className="text-lg md:text-xl mb-8 text-properzi-navy/90">
              Competenza ed esperienza al servizio della giustizia
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors py-6 px-8">
                <Link to="/contact">Consulenza Legale</Link>
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
              Properzi Studio Legale ha una consolidata esperienza nel settore legale. 
              Offriamo assistenza di alta qualità, personalizzata e specializzata a privati, aziende ed enti pubblici.
            </p>
            <p className="text-properzi-navy/90 leading-relaxed">
              Ci distinguiamo per la nostra dedizione e competenza, fornendo sempre soluzioni accurate 
              e mirate alle specifiche esigenze dei nostri clienti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-properzi-navy/5 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-properzi-beige mb-2">500+</div>
              <p className="text-properzi-navy font-medium">Casi Risolti</p>
            </div>
            <div className="text-center p-6 bg-properzi-navy/5 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-properzi-beige mb-2">25+</div>
              <p className="text-properzi-navy font-medium">Anni di Esperienza</p>
            </div>
            <div className="text-center p-6 bg-properzi-navy/5 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-properzi-beige mb-2">98%</div>
              <p className="text-properzi-navy font-medium">Clienti Soddisfatti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-properzi-navy/5 py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title text-center">Le Nostre Aree di Pratica</h2>
            <div className="divider mx-auto"></div>
            <p className="text-properzi-navy/80">
              Offriamo una gamma completa di servizi legali su misura per soddisfare le diverse esigenze dei nostri clienti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-cinzel font-medium mb-3 text-properzi-navy">Diritto Civile</h3>
              <p className="text-properzi-navy/80 mb-4">Contenziosi, responsabilità civile, risarcimento danni, diritto di proprietà e contrattualistica.</p>
              <Link to="/contact" className="text-properzi-beige hover:text-properzi-navy transition-colors flex items-center gap-1 font-medium">
                Maggiori informazioni <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-cinzel font-medium mb-3 text-properzi-navy">Diritto di Famiglia</h3>
              <p className="text-properzi-navy/80 mb-4">Separazioni, divorzi, affidamento minori, adozioni e tutela dei minori.</p>
              <Link to="/contact" className="text-properzi-beige hover:text-properzi-navy transition-colors flex items-center gap-1 font-medium">
                Maggiori informazioni <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-cinzel font-medium mb-3 text-properzi-navy">Diritto Immobiliare</h3>
              <p className="text-properzi-navy/80 mb-4">Compravendite, locazioni, condomini, diritti reali e controversie immobiliari.</p>
              <Link to="/contact" className="text-properzi-beige hover:text-properzi-navy transition-colors flex items-center gap-1 font-medium">
                Maggiori informazioni <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-cinzel font-medium mb-3 text-properzi-navy">Diritto Penale</h3>
              <p className="text-properzi-navy/80 mb-4">Difesa in procedimenti penali, consulenza preventiva e tutela legale completa.</p>
              <Link to="/contact" className="text-properzi-beige hover:text-properzi-navy transition-colors flex items-center gap-1 font-medium">
                Maggiori informazioni <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-cinzel font-medium mb-3 text-properzi-navy">Diritto del Lavoro</h3>
              <p className="text-properzi-navy/80 mb-4">Contratti di lavoro, licenziamenti, controversie lavorative e previdenza sociale.</p>
              <Link to="/contact" className="text-properzi-beige hover:text-properzi-navy transition-colors flex items-center gap-1 font-medium">
                Maggiori informazioni <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-cinzel font-medium mb-3 text-properzi-navy">Diritto Societario</h3>
              <p className="text-properzi-navy/80 mb-4">Costituzione società, fusioni, acquisizioni, corporate governance e consulenza aziendale.</p>
              <Link to="/contact" className="text-properzi-beige hover:text-properzi-navy transition-colors flex items-center gap-1 font-medium">
                Maggiori informazioni <ArrowRight size={16} />
              </Link>
            </div>
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
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Telefono</h3>
                    <a href="tel:+393357252561" className="text-properzi-navy/70 hover:text-properzi-beige transition-colors">
                      +393357252561
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-properzi-navy flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Email</h3>
                    <a href="mailto:vanessa.properzi@libero.it" className="text-properzi-navy/70 hover:text-properzi-beige transition-colors">
                    vanessa.properzi@libero.it
                    </a>
                  </div>
                </div>
                
                <div href="https://maps.app.goo.gl/uLw9hFkohpKQF1CY7" className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-properzi-navy flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Indirizzo</h3>
                    <address className="not-italic text-properzi-navy/70">
                      Piazzale Benito Juarez 10/11<br />
                      Roma, RM 00144<br />
                      Italia
                    </address>
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
