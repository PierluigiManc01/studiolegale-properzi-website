
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const SuccessStories = () => {
  const handleCVSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Il tuo CV è stato inviato con successo!");
    // Reset the form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-properzi-navy text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              I Nostri Casi di Successo
            </h1>
            <p className="text-lg text-white/80 mb-0">
              Scopri come abbiamo aiutato i nostri clienti a superare sfide legali e ottenere risultati positivi 
              attraverso la nostra esperienza legale dedicata e il nostro approccio personalizzato.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center animate-slide-in">
            <h2 className="text-3xl font-serif mb-4 text-properzi-navy">Casi di Studio Significativi</h2>
            <p className="text-properzi-navy/80">
              Esplora alcuni dei nostri casi più significativi e scopri come la nostra competenza legale ha fatto 
              la differenza nella vita e nelle attività dei nostri clienti.
            </p>
          </div>

          <Tabs defaultValue="corporate" className="animate-fade-in">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <TabsTrigger value="corporate" className="data-[state=active]:bg-properzi-beige data-[state=active]:text-properzi-navy">
                <Briefcase className="mr-2 h-4 w-4" />
                Diritto Societario
              </TabsTrigger>
              <TabsTrigger value="litigation" className="data-[state=active]:bg-properzi-beige data-[state=active]:text-properzi-navy">
                <FileText className="mr-2 h-4 w-4" />
                Contenzioso
              </TabsTrigger>
              <TabsTrigger value="family" className="data-[state=active]:bg-properzi-beige data-[state=active]:text-properzi-navy">
                <Users className="mr-2 h-4 w-4" />
                Diritto di Famiglia
              </TabsTrigger>
            </TabsList>

            <TabsContent value="corporate" className="animate-slide-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-properzi-beige/10">
                  <CardHeader>
                    <CardTitle>Fusione Internazionale di Successo</CardTitle>
                    <CardDescription>Transazione Transfrontaliera da $50M</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Abbiamo guidato un'azienda tecnologica di medie dimensioni attraverso una complessa fusione internazionale 
                      del valore di $50 milioni. Il nostro team legale ha navigato gli ostacoli normativi in tre 
                      giurisdizioni, garantendo la conformità mentre salvaguardava gli interessi del nostro cliente.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Sfida:</span>
                      <span className="text-right">Molteplici giurisdizioni e quadri normativi</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Risultato:</span>
                      <span className="text-right">Fusione riuscita con ritardi normativi minimi</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-properzi-beige/10">
                  <CardHeader>
                    <CardTitle>Ristrutturazione Aziendale</CardTitle>
                    <CardDescription>Strategia di Rilancio Finanziario</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Il nostro studio ha assistito una catena di negozi al dettaglio in difficoltà con una completa ristrutturazione 
                      aziendale che ha evitato il fallimento e preservato oltre 500 posti di lavoro. Abbiamo sviluppato un piano 
                      strategico di riorganizzazione del debito che ha permesso una ripresa sostenibile.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Sfida:</span>
                      <span className="text-right">Fallimento imminente e pressione dei creditori</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Risultato:</span>
                      <span className="text-right">Completa ripresa dell'attività entro 18 mesi</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="litigation" className="animate-slide-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-properzi-beige/10">
                  <CardHeader>
                    <CardTitle>Difesa della Proprietà Intellettuale</CardTitle>
                    <CardDescription>Caso di Violazione di Brevetto</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Abbiamo difeso con successo un produttore di dispositivi medici contro accuse di violazione di brevetto 
                      da parte di un concorrente più grande. Il nostro team di contenzioso ha confutato la validità delle rivendicazioni 
                      brevettuali dell'attore, ottenendo un completo rigetto del caso.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Sfida:</span>
                      <span className="text-right">Richiesta di risarcimento di $15M da leader del settore</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Risultato:</span>
                      <span className="text-right">Rigetto del caso e accordo sulla contro-richiesta</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-properzi-beige/10">
                  <CardHeader>
                    <CardTitle>Risoluzione Controversia Edilizia</CardTitle>
                    <CardDescription>Storia di Successo in Arbitrato</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Il nostro team di contenzioso ha rappresentato uno sviluppatore immobiliare in una complessa controversia 
                      edilizia che coinvolgeva violazioni contrattuali e reclami per lavori difettosi. Attraverso un arbitrato 
                      strategico, abbiamo ottenuto un esito favorevole per il nostro cliente.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Sfida:</span>
                      <span className="text-right">Molteplici parti e ambiguità contrattuali</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Risultato:</span>
                      <span className="text-right">Recupero di $4.2M attraverso accordo negoziato</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="family" className="animate-slide-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-properzi-beige/10">
                  <CardHeader>
                    <CardTitle>Accordo di Divorzio con Patrimonio Elevato</CardTitle>
                    <CardDescription>Risoluzione Equa</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Abbiamo rappresentato un cliente in un divorzio con patrimonio elevato che coinvolgeva complesse valutazioni 
                      aziendali e divisione dei beni. Attraverso una negoziazione abile, abbiamo ottenuto un accordo equo 
                      senza contenziosi prolungati, preservando i rapporti familiari.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Sfida:</span>
                      <span className="text-right">Complessa valutazione e divisione dei beni</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Risultato:</span>
                      <span className="text-right">Accordo amichevole e interessi aziendali preservati</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-properzi-beige/10">
                  <CardHeader>
                    <CardTitle>Affidamento Internazionale di Minori</CardTitle>
                    <CardDescription>Risoluzione Transfrontaliera</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Il nostro team di diritto di famiglia ha risolto con successo una complessa controversia internazionale 
                      sull'affidamento dei figli che coinvolgeva disposizioni della Convenzione dell'Aia. Abbiamo ottenuto un 
                      accordo favorevole che ha dato priorità al benessere del bambino proteggendo i diritti genitoriali del nostro cliente.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Sfida:</span>
                      <span className="text-right">Conflitti giurisdizionali e diritto internazionale</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Risultato:</span>
                      <span className="text-right">Accordo di affidamento congiunto con chiari diritti di visita</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Intern Stories Section */}
      <section className="section-padding bg-properzi-navy/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center animate-slide-in">
            <h2 className="text-3xl font-serif mb-4 text-properzi-navy">La Vita presso Properzi Studio</h2>
            <p className="text-properzi-navy/80">
              Ascolta dai nostri tirocinanti e membri del team le loro esperienze lavorative presso Properzi Studio Legale 
              e come il nostro ambiente collaborativo nutre il talento legale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-properzi-beige/10 animate-fade-in">
              <CardHeader>
                <div className="h-14 w-14 rounded-full bg-properzi-navy/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif text-properzi-beige">M</span>
                </div>
                <CardTitle>Michael Rodriguez</CardTitle>
                <CardDescription>Tirocinante Estate 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-properzi-navy/80 italic">
                  "Il mio tirocinio presso Properzi Studio Legale è stato trasformativo. Ho avuto l'opportunità di lavorare 
                  direttamente con avvocati senior su casi significativi, ricevendo un mentoring che è andato oltre 
                  la conoscenza teorica all'applicazione pratica della legge."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in [animation-delay:200ms]">
              <CardHeader>
                <div className="h-14 w-14 rounded-full bg-properzi-navy/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif text-properzi-beige">S</span>
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Da Assistente Legale ad Associata</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-properzi-navy/80 italic">
                  "Ciò che è iniziato come una posizione estiva si è evoluto in una carriera gratificante. I partner hanno riconosciuto 
                  il mio potenziale e hanno supportato il mio percorso durante la facoltà di giurisprudenza. Le opportunità di 
                  sviluppo professionale qui sono impareggiabili, con chiari percorsi di crescita."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in [animation-delay:400ms]">
              <CardHeader>
                <div className="h-14 w-14 rounded-full bg-properzi-navy/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif text-properzi-beige">D</span>
                </div>
                <CardTitle>David Chen</CardTitle>
                <CardDescription>Da Tirocinante di Ricerca ad Associato Junior</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-properzi-navy/80 italic">
                  "La cultura collaborativa presso Properzi Studio Legale lo distingue da altri studi. I partner sono mentori 
                  accessibili genuinamente investiti nella tua crescita. L'ambiente di lavoro stimolante è bilanciato da 
                  colleghi di supporto che celebrano i successi reciproci."
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* CV Submission Section */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-slide-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-serif mb-4 text-properzi-navy">Unisciti al Nostro Team</h3>
                <p className="mb-4 text-properzi-navy/80">
                  Siamo sempre alla ricerca di persone di talento da far entrare nel nostro studio. Che tu sia uno studente di giurisprudenza 
                  in cerca di opportunità di tirocinio o un professionista esperto alla ricerca della tua prossima mossa di carriera, 
                  ci piacerebbe sentirti.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-properzi-beige mt-1" />
                    <div>
                      <h4 className="font-medium text-properzi-navy">Sviluppo Professionale</h4>
                      <p className="text-sm text-properzi-navy/70">Mentoring da parte di leader del settore e opportunità di apprendimento continuo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-6 w-6 text-properzi-beige mt-1" />
                    <div>
                      <h4 className="font-medium text-properzi-navy">Casistica Stimolante</h4>
                      <p className="text-sm text-properzi-navy/70">Lavoro su questioni legali diverse e complesse in varie aree di pratica</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-properzi-beige mt-1" />
                    <div>
                      <h4 className="font-medium text-properzi-navy">Ambiente Collaborativo</h4>
                      <p className="text-sm text-properzi-navy/70">Cultura di team che valorizza prospettive diverse</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleCVSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefono</Label>
                      <Input id="phone" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Posizione di Interesse</Label>
                      <Input id="position" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Lettera di Presentazione</Label>
                    <Textarea id="message" rows={4} placeholder="Parlaci di te e del tuo interesse per Properzi Studio Legale" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cv">Curriculum Vitae</Label>
                    <Input id="cv" type="file" accept=".pdf,.doc,.docx" required className="cursor-pointer" />
                    <p className="text-xs text-properzi-navy/60 mt-1">Formati accettati: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                  <Button type="submit" className="w-full bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors">
                    Invia Candidatura
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
