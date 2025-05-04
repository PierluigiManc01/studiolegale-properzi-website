
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SuccessStories = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-properzi-navy text-white py-12 banner-clip">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="page-title text-white">
              Casi di Successo
            </h1>
            <div className="divider mx-auto bg-properzi-beige"></div>
            <p className="text-lg text-white/80 mb-0">
              Scopri come abbiamo aiutato i nostri clienti a superare sfide legali complesse
            </p>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="section-title text-center">Aree di Intervento</h2>
            <div className="divider mx-auto"></div>
            <p className="text-properzi-navy/80">
              Esplora alcuni dei nostri casi più significativi e scopri come la nostra competenza legale ha fatto 
              la differenza nella vita e nelle attività dei nostri clienti.
            </p>
          </div>

          <Tabs defaultValue="civile" className="mt-10">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-transparent">
              <TabsTrigger value="civile" className="data-[state=active]:bg-properzi-navy data-[state=active]:text-white border border-properzi-navy">
                Diritto Civile
              </TabsTrigger>
              <TabsTrigger value="famiglia" className="data-[state=active]:bg-properzi-navy data-[state=active]:text-white border border-properzi-navy">
                Diritto di Famiglia
              </TabsTrigger>
              <TabsTrigger value="immobiliare" className="data-[state=active]:bg-properzi-navy data-[state=active]:text-white border border-properzi-navy">
                Diritto Immobiliare
              </TabsTrigger>
              <TabsTrigger value="societario" className="data-[state=active]:bg-properzi-navy data-[state=active]:text-white border border-properzi-navy">
                Diritto Societario
              </TabsTrigger>
            </TabsList>

            <TabsContent value="civile" className="animate-fade-in">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-properzi-navy/5 p-6 rounded-lg">
                  <h3 className="text-xl font-cinzel text-properzi-navy mb-3">Risarcimento per Danno Biologico</h3>
                  <p className="mb-4 text-properzi-navy/80">
                    Abbiamo ottenuto un significativo risarcimento per un cliente che ha subito gravi lesioni a seguito di 
                    un incidente stradale. La nostra assistenza completa ha incluso la raccolta di prove mediche, la dimostrazione della 
                    responsabilità della controparte e la quantificazione del danno biologico e morale.
                  </p>
                  <div className="flex justify-between text-sm border-t border-properzi-beige/20 pt-4 mt-4">
                    <span className="text-properzi-beige font-medium">Valore della causa:</span>
                    <span className="text-right">€120.000</span>
                  </div>
                </div>
                
                <div className="bg-properzi-navy/5 p-6 rounded-lg">
                  <h3 className="text-xl font-cinzel text-properzi-navy mb-3">Inadempimento Contrattuale</h3>
                  <p className="mb-4 text-properzi-navy/80">
                    Abbiamo rappresentato un'azienda in una controversia per inadempimento contrattuale contro un fornitore che 
                    non aveva rispettato i termini di consegna causando gravi danni economici. Il caso si è concluso con un accordo 
                    transattivo favorevole per il nostro cliente.
                  </p>
                  <div className="flex justify-between text-sm border-t border-properzi-beige/20 pt-4 mt-4">
                    <span className="text-properzi-beige font-medium">Risultato:</span>
                    <span className="text-right">Accordo transattivo di €85.000</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="famiglia">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-properzi-navy/5 p-6 rounded-lg">
                  <h3 className="text-xl font-cinzel text-properzi-navy mb-3">Affidamento dei Minori</h3>
                  <p className="mb-4 text-properzi-navy/80">
                    Abbiamo assistito un genitore in una complessa causa di affidamento, riuscendo a dimostrare che 
                    l'affidamento condiviso con collocamento prevalente presso il nostro cliente rappresentava la soluzione 
                    migliore per il benessere dei figli minori.
                  </p>
                  <div className="flex justify-between text-sm border-t border-properzi-beige/20 pt-4 mt-4">
                    <span className="text-properzi-beige font-medium">Durata del procedimento:</span>
                    <span className="text-right">8 mesi</span>
                  </div>
                </div>
                
                <div className="bg-properzi-navy/5 p-6 rounded-lg">
                  <h3 className="text-xl font-cinzel text-properzi-navy mb-3">Divisione Patrimoniale</h3>
                  <p className="mb-4 text-properzi-navy/80">
                    In un caso di divorzio con significativi beni immobiliari e attività imprenditoriali, abbiamo negoziato 
                    un accordo equo per la divisione del patrimonio che ha tutelato gli interessi economici del nostro cliente 
                    preservando la continuità aziendale.
                  </p>
                  <div className="flex justify-between text-sm border-t border-properzi-beige/20 pt-4 mt-4">
                    <span className="text-properzi-beige font-medium">Patrimonio coinvolto:</span>
                    <span className="text-right">€1.5 milioni</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="immobiliare">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-properzi-navy/5 p-6 rounded-lg">
                  <h3 className="text-xl font-cinzel text-properzi-navy mb-3">Contestazione di Vizi Costruttivi</h3>
                  <p className="mb-4 text-properzi-navy/80">
                    Abbiamo rappresentato un condominio in una causa contro la società costruttrice per gravi vizi 
                    costruttivi dell'edificio. La nostra azione ha portato al risarcimento dei danni e all'esecuzione 
                    delle opere di ripristino necessarie.
                  </p>
                  <div className="flex justify-between text-sm border-t border-properzi-beige/20 pt-4 mt-4">
                    <span className="text-properzi-beige font-medium">Risarcimento ottenuto:</span>
                    <span className="text-right">€350.000 + opere di ripristino</span>
                  </div>
                </div>
                
                <div className="bg-properzi-navy/5 p-6 rounded-lg">
                  <h3 className="text-xl font-cinzel text-properzi-navy mb-3">Vendita Immobiliare Contestata</h3>
                  <p className="mb-4 text-properzi-navy/80">
                    Abbiamo difeso un venditore in una controversia relativa a una vendita immobiliare contestata 
                    dall'acquirente per presunti vizi occulti. La causa si è conclusa con il rigetto della domanda avversaria 
                    e la conferma della validità del contratto di compravendita.
                  </p>
                  <div className="flex justify-between text-sm border-t border-properzi-beige/20 pt-4 mt-4">
                    <span className="text-properzi-beige font-medium">Valore dell'immobile:</span>
                    <span className="text-right">€420.000</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="societario">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-properzi-navy/5 p-6 rounded-lg">
                  <h3 className="text-xl font-cinzel text-properzi-navy mb-3">Acquisizione Aziendale</h3>
                  <p className="mb-4 text-properzi-navy/80">
                    Abbiamo assistito una società cliente nell'acquisizione di un'azienda concorrente, gestendo la due diligence, 
                    la negoziazione e la redazione dei contratti di acquisizione, garantendo la tutela degli interessi del nostro 
                    cliente e la sicurezza dell'operazione.
                  </p>
                  <div className="flex justify-between text-sm border-t border-properzi-beige/20 pt-4 mt-4">
                    <span className="text-properzi-beige font-medium">Valore dell'operazione:</span>
                    <span className="text-right">€2.8 milioni</span>
                  </div>
                </div>
                
                <div className="bg-properzi-navy/5 p-6 rounded-lg">
                  <h3 className="text-xl font-cinzel text-properzi-navy mb-3">Ristrutturazione Societaria</h3>
                  <p className="mb-4 text-properzi-navy/80">
                    Abbiamo guidato una società in crisi attraverso un processo di ristrutturazione aziendale, consentendole 
                    di superare le difficoltà finanziarie attraverso accordi con i creditori e una riorganizzazione interna, 
                    evitando procedure concorsuali e preservando posti di lavoro.
                  </p>
                  <div className="flex justify-between text-sm border-t border-properzi-beige/20 pt-4 mt-4">
                    <span className="text-properzi-beige font-medium">Debito ristrutturato:</span>
                    <span className="text-right">€3.5 milioni</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors">
              <a href="/contact" className="flex items-center gap-2">
                Richiedi una consulenza <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-properzi-navy/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="section-title text-center">Cosa Dicono i Nostri Clienti</h2>
            <div className="divider mx-auto"></div>
            <p className="text-properzi-navy/80">
              Le opinioni di chi ha già scelto la nostra consulenza legale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="italic text-properzi-navy/70 mb-4">
                "Lo studio Properzi ha gestito la mia causa di risarcimento danni con grande professionalità. 
                L'avvocato è stato sempre disponibile e mi ha tenuto costantemente aggiornato. Grazie al suo intervento 
                ho ottenuto il massimo risarcimento possibile."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-properzi-navy/20 flex items-center justify-center mr-3">
                  <span className="font-cinzel text-properzi-navy font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-medium text-properzi-navy">Marco B.</h4>
                  <p className="text-sm text-properzi-navy/60">Cliente privato</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="italic text-properzi-navy/70 mb-4">
                "La consulenza ricevuta per la mia azienda è stata impeccabile. Lo studio ha elaborato contratti 
                su misura per le nostre esigenze e ci ha assistito in una delicata trattativa commerciale con risultati eccellenti."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-properzi-navy/20 flex items-center justify-center mr-3">
                  <span className="font-cinzel text-properzi-navy font-bold">L</span>
                </div>
                <div>
                  <h4 className="font-medium text-properzi-navy">Laura T.</h4>
                  <p className="text-sm text-properzi-navy/60">Amministratore delegato</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="italic text-properzi-navy/70 mb-4">
                "Ho affrontato un difficile divorzio con l'assistenza dello Studio Properzi. L'avvocato ha mostrato 
                grande empatia e professionalità, trovando soluzioni eque che hanno tutelato me e i miei figli."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-properzi-navy/20 flex items-center justify-center mr-3">
                  <span className="font-cinzel text-properzi-navy font-bold">G</span>
                </div>
                <div>
                  <h4 className="font-medium text-properzi-navy">Giulia R.</h4>
                  <p className="text-sm text-properzi-navy/60">Cliente privato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
