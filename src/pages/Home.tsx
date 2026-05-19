
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Studio Legale Properzi | Avvocato Civilista a Roma</title>
        <meta name="description" content="Studio Legale Properzi a Roma: assistenza legale civile a 360° con l'Avvocato Vanessa Properzi e un network di professionisti qualificati." />
        <link rel="canonical" href="https://studiolegale-properzi.com/" />
        <meta property="og:title" content="Studio Legale Properzi | Avvocato Civilista a Roma" />
        <meta property="og:description" content="Studio Legale a Roma dell'Avvocato Vanessa Properzi. Consulenza e assistenza legale qualificata." />
        <meta property="og:url" content="https://studiolegale-properzi.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section id='home' className="relative min-h-[60vh] md:min-h-[70vh] flex items-center banner-clip overflow-hidden pt-20 md:pt-28 lg:pt-36 xl:pt-48 2xl:pt-64 pb-12">
        <div className="absolute inset-0 bg-properzi-beige md:bg-transparent">
          <img
            src="/photos/hero.png" 
            alt="Hero Background" 
            className="hidden md:block w-full h-full object-cover brightness-60"
            style={{ filter: 'opacity(0.5)' }}
          />
        </div>
        <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
          <div className="ml-auto max-w-2xl xl:max-w-3xl 2xl:max-w-4xl text-center md:text-right"> 
            <h1 className="text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl font-cinzel font-bold mb-6 text-properzi-navy">
              Studio Legale Properzi — Avvocato Civilista a Roma
            </h1>
            <p className="text-base md:text-xl 2xl:text-2xl mb-8 text-properzi-navy/90">
              L'Avvocato Vanessa Properzi, con il suo Studio a Roma, coordina un network di professionisti esperti dedicati alla tua tutela legale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-2 relative z-50"> 
              <Button asChild className="bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors py-4 md:py-6 px-6 md:px-8 2xl:py-8 2xl:px-10 2xl:text-lg">
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
                    src="/photos/vanessa.jpeg" 
                    alt="Avvocato Vanessa Properzi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-cinzel text-2xl text-properzi-navy font-medium mb-1">Avv. Vanessa Properzi</h3>
                  <p className="text-properzi-beige font-semibold mb-2">Titolare dello Studio - Avvocato Civilista</p>
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
                    src="/photos/alepoma.jpeg" 
                    alt="Avvocato Alessandra Poma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-cinzel text-xl text-properzi-navy font-medium">Avv. Alessandra Poma</h3>
                  <p className="text-properzi-beige">Avvocato Penalista - Partner Esterno</p>
                  <p className="text-properzi-navy text-xs mt-2">Studio: P.zza Monteleone di Spoleto, 8; Roma</p>
                </div>        
              </div>
              
              {/* Maddalena */}
              <div className="bg-properzi-navy/5 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/photos/maddalena.png" 
                    alt="Notaio Maddalena Cuomo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-cinzel text-xl text-properzi-navy font-medium">Notaio Maddalena Cuomo</h3>
                  <p className="text-properzi-beige">Notaio - Partner Esterno</p>
                  <p className="text-properzi-navy text-xs mt-2">Studio: Via Paraguay, 5; Roma</p>
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
                        <p className="text-properzi-navy/80 mb-4">Assistenza stragiudiziale e contenzioso, responsabilità civile, risarcimento danni, recupero crediti e contrattualistica.</p>
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
                          <li>Redazione e revisione contratti</li>
                          <li>Recupero crediti ed esecuzioni (pignoramenti)</li>
                          <li>Risarcimento danni e infortunistica stradale</li>
                          <li>Responsabilità medica e professionale</li>
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
                        <p className="text-properzi-navy/80 mb-4">Separazioni, divorzi, affidamento, tutela dei minori e amministrazione di sostegno.</p>
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
                          <li>Separazioni e divorzi (consensuali e giudiziali)</li>
                          <li>Negoziazione assistita</li>
                          <li>Affidamento e mantenimento dei minori</li>
                          <li>Ricorsi per amministrazione di sostegno</li>
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
                        <p className="text-properzi-navy/80 mb-4">Compravendite, locazioni, tutela della proprietà. Supporto contrattuale e condominiale, sfratti e controversie immobiliari.</p>
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
                          <li>Sfratti per morosità e finita locazione</li>
                          <li>Redazione contratti (preliminari e locazioni)</li>
                          <li>Vizi dell'immobile e controversie su appalti</li>
                          <li>Impugnazione delibere condominiali</li>
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
                        <p className="text-sm mb-4">L'avvocato Poma sarà disponibile presso lo studio, previo appuntamento, per fornire consulenza e rappresentanza in procedimenti penali, nonché per la consulenza preventiva e la tutela legale completa.</p>
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
                        <p className="text-properzi-navy/80 mb-4">Tutela del lavoratore e dell'azienda: licenziamenti, retribuzioni, infortuni e controversie lavorative.</p>
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
                          <li>Impugnazione licenziamenti e sanzioni disciplinari</li>
                          <li>Recupero differenze retributive e TFR</li>
                          <li>Mobbing e infortuni sul lavoro</li>
                          <li>Contrattualistica e rapporti d'agenzia</li>
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
                        <p className="text-properzi-navy/80 mb-4">Successioni, divisioni e contenziosi ereditari, conservazione del patrimonio.</p>
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
                          <li>Pianificazione e dichiarazione successoria e tutela del patrimonio</li>
                          <li>Redazione e impugnazione testamenti</li>
                          <li>Accettazione con beneficio d'inventario o rinuncia all'eredità</li>                        </ul>
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
