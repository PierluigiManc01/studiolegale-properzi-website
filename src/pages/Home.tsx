
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id='home' className="relative h-[60vh] md:h-[70vh] flex items-center banner-clip overflow-hidden">
        <div className="absolute inset-0 bg-properzi-beige md:bg-transparent">
          <img
            src="/photos/hero.png" 
            alt="Hero Background" 
            className="hidden md:block w-full h-full object-cover brightness-60"
            style={{ filter: 'opacity(0.5)' }}
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="ml-auto max-w-2xl text-center md:text-right"> 
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-cinzel font-bold mb-6 text-properzi-navy">
              Properzi Studio Legale
            </h1>
            <p className="text-base md:text-xl mb-8 text-properzi-navy/90">
              Competenza ed esperienza al servizio della giustizia
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-2"> 
              <Button asChild className="bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors py-4 md:py-6 px-6 md:px-8">
                <Link to="/contact">Prenota Consulenza Legale</Link>
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
            <div className="flex items-center justify-center">
          <img 
            src="/photos/avvocati-logo-4.png" 
            alt="Corte Suprema di Cassazione Logo" 
            className="max-h-24 mx-auto"
          />
              </div>
            </div>
            <div className="text-center p-6 bg-properzi-navy/5 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-properzi-beige mb-2">25+</div>
              <p className="text-properzi-navy font-medium">Anni di Esperienza</p>
            </div>
            <div className="text-center p-6 bg-properzi-navy/5 rounded-lg">
              <div className="flex items-center justify-center">
          <img 
            src="/photos/logo_CorteSupremaCassazione.png" 
            alt="Corte Suprema di Cassazione Logo" 
            className="max-h-24 mx-auto"
          />
              </div>
            </div>
          </div>
          
          {/* Staff Section */}
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title text-center">Il Nostro Team</h2>
              <div className="divider mx-auto"></div>
              <p className="text-properzi-navy/90">
          Professionisti qualificati e dedicati al servizio delle vostre esigenze legali.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {/* Vanessa */}
              <div className="bg-properzi-navy/5 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-square overflow-hidden">
            <img 
              src="/photos/vanessa.jpeg" 
              alt="Nome Avvocato" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-cinzel text-xl text-properzi-navy font-medium">Vanessa Properzi</h3>
            <p className="text-properzi-beige">Avvocato Civilista</p>
          </div>
              </div>
              
              {/* Ale Poma */}
              <div className="bg-properzi-navy/5 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-square overflow-hidden">
            <img 
              src="/photos/cover.jpeg" 
              alt="Nome Avvocato" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-cinzel text-xl text-properzi-navy font-medium">Alessandra Poma</h3>
            <p className="text-properzi-beige">Avvocato Penalista</p>
          </div>
              </div>
              {/* Maddalena */}
              <div className="bg-properzi-navy/5 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-square overflow-hidden">
            <img 
              src="/photos/maddalena.png" 
              alt="Nome Avvocato" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-cinzel text-xl text-properzi-navy font-medium">Maddalena Cuomo</h3>
            <p className="text-properzi-beige">Notaio</p>
          </div>
              </div>

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
            {/* Diritto Civile - Flippable Card */}
            {(() => {
              const [isFlipped, setIsFlipped] = useState(false);
              
              return (
                <div 
                  className="bg-white rounded shadow-sm hover:shadow-md transition-shadow relative h-[250px]"
                  style={{ perspective: "1000px" }}
                >
                  <div 
                    className="w-full h-full transition-all duration-500 absolute"
                    style={{ 
                      transformStyle: "preserve-3d", 
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                    }}
                  >
                    {/* Front Side */}
                    <div 
                      className="absolute w-full h-full p-6 flex flex-col justify-between"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div>
                        <h3 className="text-xl font-cinzel font-medium mb-3 text-properzi-navy">Diritto Civile</h3>
                        <p className="text-properzi-navy/80 mb-4">Contenziosi, responsabilità civile, risarcimento danni, diritto di proprietà e contrattualistica.</p>
                      </div>
                      <button 
                        onClick={() => setIsFlipped(true)}
                        className="text-properzi-beige hover:text-properzi-navy transition-colors flex items-center gap-1 font-medium"
                      >
                        Maggiori informazioni <ArrowRight size={16} />
                      </button>
                    </div>
                    
                    {/* Back Side */}
                    <div 
                      className="absolute w-full h-full p-6 bg-properzi-navy text-white flex flex-col justify-between"
                      style={{ 
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                      }}
                    >
                      <div>
                        <h3 className="text-xl font-cinzel font-medium mb-3">Diritto Civile</h3>
                        <p className="mb-2">La nostra consulenza include:</p>
                        <ul className="list-disc pl-5 text-sm mb-4">
                          <li>Controversie contrattuali</li>
                          <li>Responsabilità civile</li>
                          <li>Risarcimento danni</li>
                          <li>Tutela della proprietà</li>
                        </ul>
                      </div>
                      <button 
                        onClick={() => setIsFlipped(false)}
                        className="text-properzi-beige hover:text-white transition-colors flex items-center gap-1 font-medium"
                      >
                        <ArrowRight size={16} className="transform rotate-180 mr-1" /> Torna indietro
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
            {/*Diritto di Famiglia*/}
            {(() => {
              const [isFlipped, setIsFlipped] = useState(false);
              
              return (
                <div 
                  className="bg-white rounded shadow-sm hover:shadow-md transition-shadow relative h-[250px]"
                  style={{ perspective: "1000px" }}
                >
                  <div 
                    className="w-full h-full transition-all duration-500 absolute"
                    style={{ 
                      transformStyle: "preserve-3d", 
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                    }}
                  >
                    {/* Front Side */}
                    <div 
                      className="absolute w-full h-full p-6 flex flex-col justify-between"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div>
                        <h3 className="text-xl font-cinzel font-medium mb-3 text-properzi-navy">Diritto di Famiglia</h3>
                        <p className="text-properzi-navy/80 mb-4">Separazioni, divorzi, affidamento minori e tutela dei minori.</p>
                      </div>
                      <button 
                        onClick={() => setIsFlipped(true)}
                        className="text-properzi-beige hover:text-properzi-navy transition-colors flex items-center gap-1 font-medium"
                      >
                        Maggiori informazioni <ArrowRight size={16} />
                      </button>
                    </div>
                    
                    {/* Back Side */}
                    <div 
                      className="absolute w-full h-full p-6 bg-properzi-navy text-white flex flex-col justify-between"
                      style={{ 
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                      }}
                    >
                      <div>
                        <h3 className="text-xl font-cinzel font-medium mb-3">Diritto di Famiglia</h3>
                        <p className="mb-2">La nostra consulenza include:</p>
                        <ul className="list-disc pl-5 text-sm mb-4">
                          <li>Controversie contrattuali</li>
                          <li>Responsabilità civile</li>
                          <li>Risarcimento danni</li>
                          <li>Tutela della proprietà</li>
                        </ul>
                      </div>
                      <button 
                        onClick={() => setIsFlipped(false)}
                        className="text-properzi-beige hover:text-white transition-colors flex items-center gap-1 font-medium"
                      >
                        <ArrowRight size={16} className="transform rotate-180 mr-1" /> Torna indietro
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
            {/*Diritto Immobiliare*/}
            {(() => {
              const [isFlipped, setIsFlipped] = useState(false);
              
              return (
                <div 
                  className="bg-white rounded shadow-sm hover:shadow-md transition-shadow relative h-[250px]"
                  style={{ perspective: "1000px" }}
                >
                  <div 
                    className="w-full h-full transition-all duration-500 absolute"
                    style={{ 
                      transformStyle: "preserve-3d", 
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                    }}
                  >
                    {/* Front Side */}
                    <div 
                      className="absolute w-full h-full p-6 flex flex-col justify-between"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div>
                        <h3 className="text-xl font-cinzel font-medium mb-3 text-properzi-navy">Diritto Immobiliare</h3>
                        <p className="text-properzi-navy/80 mb-4">Compravendite, locazioni, condomini, diritti reali e controversie immobiliari.</p>
                      </div>
                      <button 
                        onClick={() => setIsFlipped(true)}
                        className="text-properzi-beige hover:text-properzi-navy transition-colors flex items-center gap-1 font-medium"
                      >
                        Maggiori informazioni <ArrowRight size={16} />
                      </button>
                    </div>
                    
                    {/* Back Side */}
                    <div 
                      className="absolute w-full h-full p-6 bg-properzi-navy text-white flex flex-col justify-between"
                      style={{ 
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                      }}
                    >
                      <div>
                        <h3 className="text-xl font-cinzel font-medium mb-3">Diritto Immobiliare</h3>
                        <p className="mb-2">La nostra consulenza include:</p>
                        <ul className="list-disc pl-5 text-sm mb-4">
                          <li>Controversie contrattuali</li>
                          <li>Responsabilità civile</li>
                          <li>Risarcimento danni</li>
                          <li>Tutela della proprietà</li>
                        </ul>
                      </div>
                      <button 
                        onClick={() => setIsFlipped(false)}
                        className="text-properzi-beige hover:text-white transition-colors flex items-center gap-1 font-medium"
                      >
                        <ArrowRight size={16} className="transform rotate-180 mr-1" /> Torna indietro
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
            {/*Diritto Penale*/}
            {(() => {
              const [isFlipped, setIsFlipped] = useState(false);
              
              return (
                <div 
                  className="bg-white rounded shadow-sm hover:shadow-md transition-shadow relative h-[250px]"
                  style={{ perspective: "1000px" }}
                >
                  <div 
                    className="w-full h-full transition-all duration-500 absolute"
                    style={{ 
                      transformStyle: "preserve-3d", 
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                    }}
                  >
                    {/* Front Side */}
                    <div 
                      className="absolute w-full h-full p-6 flex flex-col justify-between"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div>
                        <h3 className="text-xl font-cinzel font-medium mb-3 text-properzi-navy">Diritto Penale</h3>
                        <p className="text-properzi-navy/80 mb-4">In partnership con l’avv. Alessandra Poma<br/>Difesa in procedimenti penali, consulenza preventiva e tutela legale completa.</p>
                      </div>
                      <button 
                        onClick={() => setIsFlipped(true)}
                        className="text-properzi-beige hover:text-properzi-navy transition-colors flex items-center gap-1 font-medium"
                      >
                        Maggiori informazioni <ArrowRight size={16} />
                      </button>
                    </div>
                    
                    {/* Back Side */}
                    <div 
                      className="absolute w-full h-full p-6 bg-properzi-navy text-white flex flex-col justify-between"
                      style={{ 
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                      }}
                    >
                      <div>
                        <h3 className="text-xl font-cinzel font-medium mb-3">Diritto Penale</h3>
                        <p className="mb-2">La nostra consulenza include:</p>
                        <ul className="list-disc pl-5 text-sm mb-4">
                          <li>Controversie contrattuali</li>
                          <li>Responsabilità civile</li>
                          <li>Risarcimento danni</li>
                          <li>Tutela della proprietà</li>
                        </ul>
                      </div>
                      <button 
                        onClick={() => setIsFlipped(false)}
                        className="text-properzi-beige hover:text-white transition-colors flex items-center gap-1 font-medium"
                      >
                        <ArrowRight size={16} className="transform rotate-180 mr-1" /> Torna indietro
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
            {/*Diritto del Lavoro*/}
            {(() => {
              const [isFlipped, setIsFlipped] = useState(false);
              
              return (
                <div 
                  className="bg-white rounded shadow-sm hover:shadow-md transition-shadow relative h-[250px]"
                  style={{ perspective: "1000px" }}
                >
                  <div 
                    className="w-full h-full transition-all duration-500 absolute"
                    style={{ 
                      transformStyle: "preserve-3d", 
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                    }}
                  >
                    {/* Front Side */}
                    <div 
                      className="absolute w-full h-full p-6 flex flex-col justify-between"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div>
                        <h3 className="text-xl font-cinzel font-medium mb-3 text-properzi-navy">Diritto del Lavoro</h3>
                        <p className="text-properzi-navy/80 mb-4">Contratti di lavoro, licenziamenti, controversie lavorative e previdenza sociale.</p>
                      </div>
                      <button 
                        onClick={() => setIsFlipped(true)}
                        className="text-properzi-beige hover:text-properzi-navy transition-colors flex items-center gap-1 font-medium"
                      >
                        Maggiori informazioni <ArrowRight size={16} />
                      </button>
                    </div>
                    
                    {/* Back Side */}
                    <div 
                      className="absolute w-full h-full p-6 bg-properzi-navy text-white flex flex-col justify-between"
                      style={{ 
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                      }}
                    >
                      <div>
                        <h3 className="text-xl font-cinzel font-medium mb-3">Diritto del Lavoro</h3>
                        <p className="mb-2">La nostra consulenza include:</p>
                        <ul className="list-disc pl-5 text-sm mb-4">
                          <li>Controversie contrattuali</li>
                          <li>Responsabilità civile</li>
                          <li>Risarcimento danni</li>
                          <li>Tutela della proprietà</li>
                        </ul>
                      </div>
                      <button 
                        onClick={() => setIsFlipped(false)}
                        className="text-properzi-beige hover:text-white transition-colors flex items-center gap-1 font-medium"
                      >
                        <ArrowRight size={16} className="transform rotate-180 mr-1" /> Torna indietro
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
            {/*Successioni*/}
            {(() => {
              const [isFlipped, setIsFlipped] = useState(false);
              
              return (
                <div 
                  className="bg-white rounded shadow-sm hover:shadow-md transition-shadow relative h-[250px]"
                  style={{ perspective: "1000px" }}
                >
                  <div 
                    className="w-full h-full transition-all duration-500 absolute"
                    style={{ 
                      transformStyle: "preserve-3d", 
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                    }}
                  >
                    {/* Front Side */}
                    <div 
                      className="absolute w-full h-full p-6 flex flex-col justify-between"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div>
                        <h3 className="text-xl font-cinzel font-medium mb-3 text-properzi-navy">Successioni</h3>
                        <p className="text-properzi-navy/80 mb-4">Costituzione società, fusioni, acquisizioni, corporate governance e consulenza aziendale.</p>
                      </div>
                      <button 
                        onClick={() => setIsFlipped(true)}
                        className="text-properzi-beige hover:text-properzi-navy transition-colors flex items-center gap-1 font-medium"
                      >
                        Maggiori informazioni <ArrowRight size={16} />
                      </button>
                    </div>
                    
                    {/* Back Side */}
                    <div 
                      className="absolute w-full h-full p-6 bg-properzi-navy text-white flex flex-col justify-between"
                      style={{ 
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                      }}
                    >
                      <div>
                        <h3 className="text-xl font-cinzel font-medium mb-3">Successioni</h3>
                        <p className="mb-2">La nostra consulenza include:</p>
                        <ul className="list-disc pl-5 text-sm mb-4">
                          <li>Controversie contrattuali</li>
                          <li>Responsabilità civile</li>
                          <li>Risarcimento danni</li>
                          <li>Tutela della proprietà</li>
                        </ul>
                      </div>
                      <button 
                        onClick={() => setIsFlipped(false)}
                        className="text-properzi-beige hover:text-white transition-colors flex items-center gap-1 font-medium"
                      >
                        <ArrowRight size={16} className="transform rotate-180 mr-1" /> Torna indietro
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
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
                    <a href="tel:+0645435416" className="text-properzi-navy/70 hover:text-properzi-beige transition-colors">
                      +0645435416
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
                
                <a href="https://maps.app.goo.gl/uLw9hFkohpKQF1CY7" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-properzi-navy flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Indirizzo</h3>
                    <a href="https://maps.app.goo.gl/uLw9hFkohpKQF1CY7" className="text-properzi-navy/70 hover:text-properzi-beige transition-colors">
                      Piazzale Benito Juarez 10/11<br />
                      Roma, RM 00144<br />
                      Italia
                    </a>
                  </div>
                </a>
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
