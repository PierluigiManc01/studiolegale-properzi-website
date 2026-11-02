import Seo from "@/components/Seo";
import { STUDIO } from "@/lib/site";

const sections: { title: string; body: string[] }[] = [
  {
    title: "Titolare del trattamento",
    body: [
      `Titolare del trattamento è l'${STUDIO.lawyer}, ${STUDIO.name}, ${STUDIO.street}, ${STUDIO.postalCode} ${STUDIO.city}. Per qualsiasi richiesta relativa ai dati personali è possibile scrivere a ${STUDIO.email} o telefonare allo ${STUDIO.phoneDisplay}.`,
    ],
  },
  {
    title: "Quali dati trattiamo",
    body: [
      "Dati di navigazione: i sistemi che ospitano il sito registrano in modo automatico dati tecnici come indirizzo IP, tipo di browser e pagine visitate, necessari al funzionamento e alla sicurezza del sito.",
      "Dati forniti volontariamente: nome, email, telefono e contenuto del messaggio inviati con il modulo di contatto; per le candidature, anche il curriculum allegato e le informazioni in esso contenute.",
    ],
  },
  {
    title: "Finalità e base giuridica",
    body: [
      "I dati inviati con il modulo di contatto sono trattati per rispondere alla richiesta e, se richiesto, fissare una consulenza, sulla base dell'art. 6, par. 1, lett. b) del Regolamento UE 2016/679 (misure precontrattuali adottate su richiesta dell'interessato).",
      "I dati delle candidature sono trattati al solo fine di valutare il profilo per un'eventuale pratica o collaborazione con lo Studio, sulla base dell'art. 6, par. 1, lett. b) del Regolamento e dell'art. 111-bis del Codice in materia di protezione dei dati personali.",
      "I dati di navigazione sono trattati sulla base del legittimo interesse del Titolare a garantire il funzionamento e la sicurezza del sito (art. 6, par. 1, lett. f).",
    ],
  },
  {
    title: "Modalità del trattamento e destinatari",
    body: [
      "I dati sono trattati con strumenti informatici e con misure adeguate a garantirne la riservatezza. I messaggi inviati dal sito sono recapitati alla casella email dello Studio tramite un fornitore del servizio di invio email (Resend); il sito è ospitato da Vercel. Questi fornitori agiscono come responsabili del trattamento e possono trattare i dati anche al di fuori dell'Unione Europea, sulla base delle garanzie previste dagli artt. 45 e 46 del Regolamento (decisione di adeguatezza o clausole contrattuali standard).",
      "I dati non sono diffusi né ceduti a terzi per finalità commerciali.",
    ],
  },
  {
    title: "Conservazione",
    body: [
      "Le richieste di contatto sono conservate per il tempo necessario a gestirle; se ne nasce un incarico professionale, i dati sono conservati per la durata prevista dagli obblighi professionali e di legge. I curricula sono conservati per il tempo necessario alla selezione e comunque non oltre dodici mesi dalla ricezione.",
    ],
  },
  {
    title: "Cookie e servizi di terze parti",
    body: [
      "Il sito non utilizza cookie di profilazione né strumenti di analisi statistica. Memorizza nel browser solo la scelta espressa sul banner dei cookie.",
      "La pagina Contatti può mostrare una mappa di Google Maps, che viene caricata solo dopo il consenso del visitatore: in quel caso Google può impostare propri cookie, secondo la propria informativa privacy.",
    ],
  },
  {
    title: "Diritti dell'interessato",
    body: [
      `In qualsiasi momento è possibile chiedere l'accesso ai propri dati, la rettifica, la cancellazione, la limitazione del trattamento, la portabilità o opporsi al trattamento (artt. 15-22 del Regolamento), scrivendo a ${STUDIO.email}. È inoltre possibile proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).`,
    ],
  },
];

const Privacy = () => (
  <div className="pt-24 md:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56">
    <Seo
      title="Informativa Privacy | Studio Legale Properzi"
      description="Informativa sul trattamento dei dati personali raccolti dal sito dello Studio Legale Properzi di Roma, ai sensi del Regolamento UE 2016/679."
      path="/privacy"
    />
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-[68ch]">
          <h1 className="page-title">Informativa privacy</h1>
          <div className="divider"></div>
          <p className="mb-10 text-properzi-navy/80 leading-relaxed">
            Informativa resa ai sensi degli artt. 13 e 14 del Regolamento UE 2016/679 (GDPR) a chi visita il sito e a chi invia richieste di contatto o candidature. Ultimo aggiornamento: 2 novembre 2026.
          </p>
          {sections.map((section) => (
            <section key={section.title} className="mb-10">
              <h2 className="font-cinzel text-xl md:text-2xl text-properzi-navy mb-3">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mb-3 leading-relaxed text-properzi-navy/85">{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Privacy;
