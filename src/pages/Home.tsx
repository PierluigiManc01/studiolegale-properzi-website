
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import { Award, Briefcase, Users, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-properzi-navy/5 pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-properzi-navy">
              Soluzioni Legali Esperte per Sfide Complesse
            </h1>
            <p className="text-lg md:text-xl mb-8 text-properzi-navy/90">
              Presso Properzi Studio Legale, navighiamo le complessità della legge con precisione e dedizione, 
              garantendo che i tuoi diritti siano protetti e i tuoi obiettivi raggiunti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors text-lg py-6 px-8">
                <Link to="/contact">Prenota Consulenza</Link>
              </Button>
              <Button variant="outline" className="border-properzi-beige text-properzi-navy hover:bg-properzi-beige/10 transition-colors text-lg py-6 px-8">
                <Link to="/success-stories">I Nostri Casi di Successo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-properzi-navy relative">
                Chi è Properzi Studio Legale
                <span className="absolute bottom-0 left-0 w-24 h-1 bg-properzi-beige"></span>
              </h2>
              <p className="mb-6 text-properzi-navy/90">
                Fondato con la visione di fornire servizi legali eccezionali, Properzi Studio Legale è emerso come 
                uno studio legale leader impegnato nell'eccellenza, nell'integrità e nella soddisfazione del cliente.
              </p>
              <p className="mb-6 text-properzi-navy/90">
                I nostri avvocati apportano decenni di esperienza combinata in varie discipline legali, 
                dotati di conoscenze approfondite ed esperienza per navigare le sfide legali più complesse.
              </p>
              <p className="text-properzi-navy/90">
                Ciò che ci distingue è il nostro incrollabile impegno verso i nostri clienti. Ci prendiamo il tempo per comprendere 
                la tua situazione unica e creare strategie legali personalizzate che si allineano con i tuoi obiettivi.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <div className="bg-properzi-navy/5 p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-properzi-beige mb-2">98%</div>
                <p className="text-properzi-navy">Tasso di Soddisfazione Clienti</p>
              </div>
              <div className="bg-properzi-navy/5 p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-properzi-beige mb-2">500+</div>
                <p className="text-properzi-navy">Casi Risolti con Successo</p>
              </div>
              <div className="bg-properzi-navy/5 p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-properzi-beige mb-2">25+</div>
                <p className="text-properzi-navy">Anni di Esperienza</p>
              </div>
              <div className="bg-properzi-navy/5 p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-properzi-beige mb-2">85%</div>
                <p className="text-properzi-navy">Tasso di Successo dei Casi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-properzi-navy/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-properzi-navy">I Nostri Servizi Legali</h2>
            <p className="text-properzi-navy/80">
              Offriamo una gamma completa di servizi legali su misura per soddisfare le diverse esigenze dei nostri clienti.
              I nostri avvocati esperti forniscono una guida esperta e rappresentanza in vari settori di pratica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-properzi-beige/10 animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Briefcase className="h-8 w-8 text-properzi-beige mb-4" />
                <CardTitle>Diritto Societario</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Guida esperta sulla formazione di imprese, fusioni e acquisizioni, governance aziendale 
                  e questioni di conformità per aziende di tutte le dimensioni.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in hover:shadow-lg transition-shadow [animation-delay:200ms]">
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-properzi-beige mb-4" />
                <CardTitle>Diritto di Famiglia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Rappresentanza compassionevole in casi di divorzio, affidamento dei figli, adozione e altre delicate questioni familiari 
                  con un focus su risoluzioni amichevoli.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in hover:shadow-lg transition-shadow [animation-delay:400ms]">
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-properzi-beige mb-4" />
                <CardTitle>Contenzioso</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Rappresentanza strategica in procedimenti giudiziari, risoluzione di controversie e accordi 
                  con un record di risultati di successo.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in hover:shadow-lg transition-shadow [animation-delay:100ms]">
              <CardHeader className="pb-2">
                <CheckCircle className="h-8 w-8 text-properzi-beige mb-4" />
                <CardTitle>Diritto Immobiliare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Servizi legali completi per acquisti di proprietà, vendite, locazioni, sviluppo 
                  e questioni di contenzioso immobiliare.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in hover:shadow-lg transition-shadow [animation-delay:300ms]">
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-properzi-beige mb-4" />
                <CardTitle>Proprietà Intellettuale</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Protezione di marchi, brevetti, copyright e segreti commerciali, insieme a 
                  strategie di applicazione e supporto per il contenzioso.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in hover:shadow-lg transition-shadow [animation-delay:500ms]">
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-properzi-beige mb-4" />
                <CardTitle>Diritto del Lavoro</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Consulenza su contratti di lavoro, politiche sul posto di lavoro, reclami per discriminazione 
                  e altre controversie legate all'impiego.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-properzi-navy relative">
                Contattaci
                <span className="absolute bottom-0 left-0 w-24 h-1 bg-properzi-beige"></span>
              </h2>
              <p className="mb-6 text-properzi-navy/90">
                Che tu stia affrontando una specifica questione legale o abbia una domanda sulle nostre aree di pratica, 
                siamo qui per aiutarti. Contattaci oggi per programmare una consulenza con uno dei nostri avvocati esperti.
              </p>
              
              <div className="space-y-6 mb-6">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-properzi-beige mt-1" />
                  <div>
                    <h3 className="font-medium text-properzi-navy">Consulenza Legale Esperta</h3>
                    <p className="text-properzi-navy/70">Beneficia della nostra vasta esperienza e competenza</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-properzi-beige mt-1" />
                  <div>
                    <h3 className="font-medium text-properzi-navy">Approccio Personalizzato</h3>
                    <p className="text-properzi-navy/70">Soluzioni su misura per soddisfare le tue esigenze legali uniche</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-properzi-beige mt-1" />
                  <div>
                    <h3 className="font-medium text-properzi-navy">Servizio Centrato sul Cliente</h3>
                    <p className="text-properzi-navy/70">La tua soddisfazione e il tuo successo sono le nostre priorità</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button asChild className="bg-properzi-beige hover:bg-properzi-navy text-properzi-navy hover:text-white transition-colors">
                  <a href="tel:+15551234567">
                    Chiama Ora: +1 (555) 123-4567
                  </a>
                </Button>
                <Separator orientation="vertical" className="h-8" />
                <Button asChild variant="outline" className="border-properzi-beige text-properzi-navy hover:bg-properzi-beige/10">
                  <a href="mailto:info@properzistudio.com">
                    Inviaci un'Email
                  </a>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
