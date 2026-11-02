// Content for the practice-area pages and the cards on the home page.
//
// FAQ answers are deliberately 130-170 words and self-contained: that is the
// passage length AI assistants (ChatGPT, Perplexity, Google AI Overviews) quote
// most often. They feed both the visible page and the FAQPage JSON-LD, so the
// two can never drift apart.
//
// Wording follows the Codice Deontologico Forense (art. 17, 35): factual
// information only, no "specialista" (a formal title), no promised outcomes.

export type Faq = { question: string; answer: string };

export type PracticeArea = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  items: string[];
  intro: string[];
  partner?: string;
  faqs: Faq[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "diritto-civile",
    name: "Diritto Civile",
    metaTitle: "Avvocato Civilista a Roma EUR | Studio Legale Properzi",
    metaDescription:
      "Avvocato civilista a Roma EUR: recupero crediti, pignoramenti, contratti, risarcimento danni e responsabilità medica. Avv. Vanessa Properzi, cassazionista.",
    h1: "Avvocato civilista a Roma",
    summary:
      "Assistenza stragiudiziale e contenzioso, responsabilità civile, risarcimento danni, recupero crediti e contrattualistica.",
    items: [
      "Redazione e revisione contratti",
      "Recupero crediti ed esecuzioni (pignoramenti)",
      "Risarcimento danni e infortunistica stradale",
      "Responsabilità medica e professionale",
    ],
    intro: [
      "Lo Studio Legale Properzi assiste privati, professionisti e imprese di Roma nelle controversie di diritto civile, sia nella fase stragiudiziale sia davanti al Tribunale e alla Corte d'Appello. L'Avv. Vanessa Properzi è abilitata al patrocinio davanti alla Corte di Cassazione e alle giurisdizioni superiori, e può quindi seguire la causa fino all'ultimo grado di giudizio.",
      "Il primo obiettivo è valutare se la questione può essere chiusa senza causa: una diffida ben scritta, una negoziazione assistita o una mediazione spesso risolvono in poche settimane ciò che in Tribunale richiederebbe anni. Quando il giudizio è necessario, lo Studio lo imposta fin dall'inizio raccogliendo i documenti e le prove che servono.",
    ],
    faqs: [
      {
        question: "Come si recupera un credito non pagato?",
        answer:
          "Il recupero di un credito parte quasi sempre da una diffida scritta con messa in mora, che fissa un termine per il pagamento e interrompe la prescrizione. Se il debitore non paga e il credito è documentato per iscritto, per esempio con fatture, un contratto o un riconoscimento di debito, si può chiedere al giudice un decreto ingiuntivo ai sensi dell'art. 633 del codice di procedura civile, senza una causa ordinaria preliminare. Il debitore ha quaranta giorni dalla notifica per proporre opposizione; in mancanza, il decreto diventa definitivo. Con il titolo esecutivo si notifica l'atto di precetto e, se il pagamento non arriva, si procede con il pignoramento: presso terzi, per esempio sullo stipendio o sul conto corrente, mobiliare o immobiliare. Attenzione ai termini: il diritto di credito si prescrive in via ordinaria in dieci anni, ma molti crediti periodici, come canoni e interessi, si prescrivono in cinque.",
      },
      {
        question: "Entro quando chiedere il risarcimento per un incidente stradale?",
        answer:
          "Il diritto al risarcimento dei danni da circolazione stradale si prescrive in due anni dal giorno del sinistro; il termine è più lungo se il fatto costituisce reato. La richiesta va inviata per raccomandata o PEC alla compagnia assicurativa, indicando dinamica, danni e dati necessari alla liquidazione, secondo l'art. 148 del Codice delle assicurazioni private. La compagnia ha sessanta giorni per formulare un'offerta in caso di soli danni alle cose, ridotti a trenta se il modulo di constatazione amichevole è firmato da entrambi i conducenti, e novanta giorni in caso di lesioni. Prima di agire in giudizio è di regola obbligatorio tentare la negoziazione assistita tra avvocati. Conviene rivolgersi a un legale già nelle prime settimane: una perizia, le fotografie del luogo e dei veicoli e i certificati medici raccolti per tempo incidono in modo decisivo sull'importo finale del risarcimento.",
      },
      {
        question: "Cosa prevede la legge sulla responsabilità medica?",
        answer:
          "La responsabilità sanitaria è regolata dalla legge 24 del 2017, nota come legge Gelli-Bianco. La struttura sanitaria, pubblica o privata, risponde verso il paziente a titolo contrattuale: il diritto al risarcimento si prescrive in dieci anni, il paziente deve provare il danno e il suo collegamento con la prestazione, mentre spetta alla struttura dimostrare di aver operato correttamente. Il medico dipendente risponde invece a titolo extracontrattuale, con prescrizione di cinque anni e un onere della prova più gravoso per il paziente. Prima della causa è obbligatorio un passaggio preliminare: un accertamento tecnico preventivo con finalità conciliativa, in cui un consulente nominato dal giudice valuta la condotta dei sanitari, oppure in alternativa la mediazione. Per questo il lavoro dell'avvocato comincia dalla raccolta completa della cartella clinica e dal confronto con un medico legale di fiducia, che verifica se esiste un nesso tra l'errore e il danno subito.",
      },
    ],
  },
  {
    slug: "diritto-di-famiglia",
    name: "Diritto di Famiglia",
    metaTitle: "Avvocato Separazione e Divorzio a Roma | Studio Properzi",
    metaDescription:
      "Avvocato per separazione, divorzio e affidamento dei figli a Roma EUR. Negoziazione assistita e amministrazione di sostegno. Studio Legale Properzi.",
    h1: "Avvocato per separazione e divorzio a Roma",
    summary:
      "Separazioni, divorzi, affidamento, tutela dei minori e amministrazione di sostegno.",
    items: [
      "Separazioni e divorzi (consensuali e giudiziali)",
      "Negoziazione assistita",
      "Affidamento e mantenimento dei minori",
      "Ricorsi per amministrazione di sostegno",
    ],
    intro: [
      "Separazione, divorzio e affidamento dei figli sono momenti in cui le decisioni giuridiche pesano sulla vita quotidiana di tutta la famiglia. Lo Studio Legale Properzi segue i propri assistiti a Roma con riservatezza, cercando prima di tutto soluzioni concordate, che sono più rapide, meno costose e più tutelanti per i figli.",
      "Quando l'accordo non è possibile, lo Studio assiste nel giudizio davanti al Tribunale di Roma con il rito unico per persone, minorenni e famiglie introdotto dalla riforma Cartabia. Lo Studio segue anche i ricorsi per amministrazione di sostegno, a tutela delle persone fragili e dei loro familiari.",
    ],
    faqs: [
      {
        question: "Qual è la differenza tra separazione consensuale e giudiziale?",
        answer:
          "Nella separazione consensuale i coniugi si accordano su tutto: affidamento e mantenimento dei figli, assegnazione della casa familiare, eventuale assegno per il coniuge economicamente più debole. L'accordo viene presentato al Tribunale con ricorso congiunto e il giudice si limita a verificarne la conformità alla legge e all'interesse dei figli; in alternativa si può ricorrere alla negoziazione assistita dagli avvocati, senza passare dall'aula. Senza figli minori o non autosufficienti e senza trasferimenti patrimoniali, l'accordo può essere concluso anche in Comune, davanti all'ufficiale dello stato civile. La separazione giudiziale si chiede invece quando l'accordo manca: ciascun coniuge espone le proprie ragioni e decide il giudice, con tempi e costi sensibilmente maggiori. Dal 2023, con la riforma Cartabia, nello stesso ricorso si può chiedere anche il divorzio, che verrà pronunciato una volta decorsi i termini di legge. Una separazione iniziata come giudiziale può inoltre trasformarsi in consensuale in qualunque momento, se le parti trovano un'intesa sulle condizioni.",
      },
      {
        question: "Quanto tempo serve per divorziare dopo la separazione?",
        answer:
          "Dopo la legge 55 del 2015, nota come divorzio breve, si può chiedere il divorzio quando sono trascorsi sei mesi dalla separazione consensuale, o dall'accordo raggiunto con negoziazione assistita, e dodici mesi dalla separazione giudiziale. I termini decorrono dalla data della comparizione dei coniugi davanti al giudice nel procedimento di separazione, non dalla sentenza. Con la riforma Cartabia, in vigore dal 28 febbraio 2023, la domanda di divorzio può essere proposta insieme a quella di separazione nello stesso ricorso: il divorzio diventa procedibile solo quando la separazione è definitiva e i termini sono decorsi, ma si evita di ricominciare da capo. Anche il divorzio può essere congiunto, quando i coniugi concordano sulle condizioni, oppure contenzioso. In presenza di figli minori o non economicamente autosufficienti, le condizioni sono sempre verificate dal giudice o dal pubblico ministero, a tutela dei figli.",
      },
      {
        question: "Come funziona l'affidamento dei figli?",
        answer:
          "La regola, dal 2006, è l'affidamento condiviso: entrambi i genitori mantengono la responsabilità genitoriale e prendono insieme le decisioni di maggiore interesse per i figli, come istruzione, salute e residenza abituale, secondo l'art. 337-ter del codice civile. Il giudice stabilisce i tempi di permanenza presso ciascun genitore, il collocamento prevalente e il contributo al mantenimento, tenendo conto delle esigenze dei figli, del tenore di vita goduto in famiglia e delle risorse di entrambi i genitori. L'affidamento esclusivo a un solo genitore resta un'eccezione, disposta quando quello condiviso risulterebbe contrario all'interesse del minore. I figli che hanno compiuto dodici anni, o anche più piccoli se capaci di discernimento, hanno diritto di essere ascoltati. Gli accordi non sono definitivi: se cambiano le condizioni economiche o le esigenze dei figli, si può chiedere al Tribunale di modificarli.",
      },
    ],
  },
  {
    slug: "diritto-immobiliare",
    name: "Diritto Immobiliare",
    metaTitle: "Avvocato Sfratti, Locazioni e Condominio a Roma | Properzi",
    metaDescription:
      "Avvocato a Roma EUR per sfratti per morosità, locazioni, compravendite, vizi dell'immobile e impugnazione di delibere condominiali. Studio Legale Properzi.",
    h1: "Avvocato per sfratti, locazioni e condominio a Roma",
    summary:
      "Compravendite, locazioni, tutela della proprietà. Supporto contrattuale e condominiale, sfratti e controversie immobiliari.",
    items: [
      "Sfratti per morosità e finita locazione",
      "Redazione contratti (preliminari e locazioni)",
      "Vizi dell'immobile e controversie su appalti",
      "Impugnazione delibere condominiali",
    ],
    intro: [
      "Casa, locazioni e condominio sono tra le materie in cui è più facile perdere un diritto per un termine scaduto o una clausola scritta male. Lo Studio Legale Properzi assiste proprietari, inquilini, acquirenti e condomini di Roma, dalla redazione dei contratti fino al contenzioso.",
      "Lo Studio segue sfratti per morosità e per finita locazione, controversie sui vizi dell'immobile e sugli appalti, impugnazioni di delibere condominiali e la contrattualistica, dai preliminari di compravendita ai contratti di locazione abitativa e commerciale.",
    ],
    faqs: [
      {
        question: "Come funziona lo sfratto per morosità?",
        answer:
          "Lo sfratto per morosità si avvia con l'intimazione di sfratto e la contestuale citazione per la convalida, notificate all'inquilino che non paga il canone; il procedimento di convalida non richiede la mediazione preventiva. Alla prima udienza, se l'inquilino non si presenta o non si oppone, il giudice convalida lo sfratto e fissa la data di rilascio. Nelle locazioni abitative l'inquilino può sanare la morosità pagando in udienza canoni, oneri, interessi e spese, oppure chiedere un termine di grazia fino a novanta giorni, possibilità concessa non più di tre volte in quattro anni. Se l'inquilino si oppone con motivi seri, il giudizio prosegue con rito ordinario, ma il giudice può comunque emettere un'ordinanza di rilascio. Ottenuto il titolo, si notificano precetto e preavviso di rilascio e l'ufficiale giudiziario procede con l'esecuzione. A Roma i tempi dipendono molto dal carico degli uffici: conviene agire presto.",
      },
      {
        question: "Entro quanto si impugna una delibera condominiale?",
        answer:
          "Le delibere dell'assemblea contrarie alla legge o al regolamento di condominio possono essere impugnate davanti al Tribunale entro trenta giorni, come prevede l'art. 1137 del codice civile. Il termine decorre dalla data dell'assemblea per i condomini presenti che hanno votato contro o si sono astenuti, e dalla comunicazione del verbale per gli assenti. Il condominio è materia di mediazione obbligatoria: prima della causa occorre depositare la domanda di mediazione presso un organismo, e il deposito, se avviene entro i trenta giorni, impedisce la decadenza. Le delibere nulle, per esempio quelle con oggetto impossibile o illecito o che incidono sui diritti dei singoli sulle parti di proprietà esclusiva, possono invece essere contestate senza limiti di tempo. Poiché la distinzione tra delibera annullabile e delibera nulla decide se il termine è già scaduto, conviene far esaminare il verbale da un legale appena lo si riceve.",
      },
      {
        question: "Ho scoperto vizi nella casa acquistata: cosa posso fare?",
        answer:
          "Se la casa acquistata presenta vizi che la rendono inidonea all'uso o ne diminuiscono in modo apprezzabile il valore, il compratore può chiedere la risoluzione del contratto o la riduzione del prezzo, oltre al risarcimento del danno, secondo gli articoli 1490 e seguenti del codice civile. I termini sono stretti: il vizio va denunciato al venditore entro otto giorni dalla scoperta e l'azione si prescrive in un anno dalla consegna. Se invece i difetti derivano da lavori di costruzione o ristrutturazione, si applicano le regole dell'appalto: denuncia entro sessanta giorni e azione entro due anni dalla consegna dell'opera. Per i gravi difetti che compromettono la solidità o la funzionalità dell'edificio, l'art. 1669 prevede la responsabilità del costruttore per dieci anni dal compimento dell'opera, con denuncia entro un anno dalla scoperta. Il primo passo utile è una perizia tecnica che documenti i vizi e la loro origine.",
      },
    ],
  },
  {
    slug: "diritto-del-lavoro",
    name: "Diritto del Lavoro",
    metaTitle: "Avvocato del Lavoro a Roma EUR | Studio Legale Properzi",
    metaDescription:
      "Avvocato del lavoro a Roma: impugnazione licenziamenti, differenze retributive, TFR, mobbing e infortuni. Assistenza a lavoratori e aziende. Studio Properzi.",
    h1: "Avvocato del lavoro a Roma",
    summary:
      "Tutela del lavoratore e dell'azienda: licenziamenti, retribuzioni, infortuni e controversie lavorative.",
    items: [
      "Impugnazione licenziamenti e sanzioni disciplinari",
      "Recupero differenze retributive e TFR",
      "Mobbing e infortuni sul lavoro",
      "Contrattualistica e rapporti d'agenzia",
    ],
    intro: [
      "Lo Studio Legale Properzi assiste lavoratori e datori di lavoro di Roma nelle controversie di lavoro: licenziamenti, sanzioni disciplinari, differenze retributive, TFR, infortuni e mobbing, oltre alla contrattualistica e ai rapporti di agenzia.",
      "Nel diritto del lavoro i termini sono brevi e spesso decisivi. Per questo è importante rivolgersi a un legale subito dopo aver ricevuto una lettera di licenziamento o una contestazione disciplinare, portando con sé contratto, buste paga e comunicazioni ricevute.",
    ],
    faqs: [
      {
        question: "Entro quanto si impugna un licenziamento?",
        answer:
          "Il licenziamento va impugnato entro sessanta giorni dalla ricezione della comunicazione scritta, con qualsiasi atto scritto, anche stragiudiziale, che renda nota la volontà del lavoratore di contestarlo, come prevede l'art. 6 della legge 604 del 1966. Una lettera raccomandata o una PEC, preferibilmente redatta da un avvocato, è sufficiente. Attenzione al secondo termine: entro i successivi centottanta giorni bisogna depositare il ricorso in Tribunale, oppure comunicare al datore di lavoro la richiesta di conciliazione o arbitrato; altrimenti l'impugnazione perde efficacia. Le tutele applicabili dipendono dalla data di assunzione, dalle dimensioni dell'azienda e dal motivo del licenziamento: per gli assunti dal 7 marzo 2015 si applica il decreto legislativo 23 del 2015 sulle tutele crescenti, per gli altri l'art. 18 dello Statuto dei lavoratori o la legge 604. Valutare subito questi elementi permette di scegliere la strategia più efficace.",
      },
      {
        question: "Entro quanto si possono chiedere differenze retributive e TFR?",
        answer:
          "I crediti retributivi, come differenze di stipendio, straordinari non pagati, ferie e tredicesima, si prescrivono in cinque anni. Secondo la Corte di Cassazione, con la sentenza n. 26246 del 2022, nei rapporti di lavoro privati che dopo le riforme del 2012 e del 2015 non garantiscono più una piena stabilità del posto, la prescrizione non decorre durante il rapporto ma solo dalla sua cessazione: il lavoratore può quindi rivendicare crediti maturati anche molti anni prima. Anche il trattamento di fine rapporto si prescrive in cinque anni, a partire dalla fine del rapporto. Se il datore di lavoro è insolvente o sottoposto a procedura concorsuale, il TFR e le ultime tre mensilità possono essere richiesti al Fondo di garanzia dell'INPS. Per quantificare le somme dovute occorre confrontare buste paga, contratto collettivo applicabile e orari effettivamente svolti, possibilmente con l'aiuto di un consulente del lavoro.",
      },
      {
        question: "Cosa si intende per mobbing e come si dimostra?",
        answer:
          "La legge italiana non definisce il mobbing con una norma specifica: la giurisprudenza lo ricostruisce come una serie di condotte vessatorie, sistematiche e protratte nel tempo, poste in essere dal datore di lavoro, da superiori o da colleghi, con un intento persecutorio verso il lavoratore. Per ottenere il risarcimento il lavoratore deve dimostrare i singoli comportamenti, la loro durata, il danno alla salute o alla professionalità e il collegamento tra i fatti e il danno. Il fondamento è l'art. 2087 del codice civile, che obbliga il datore di lavoro a tutelare l'integrità fisica e la personalità morale dei dipendenti. Anche quando manca l'intento persecutorio, la Cassazione riconosce la responsabilità del datore per un ambiente di lavoro stressogeno. Sono utili email, ordini di servizio, testimonianze di colleghi e certificazioni mediche: conviene raccoglierle e conservarle con le date, fin dai primi episodi.",
      },
    ],
  },
  {
    slug: "successioni",
    name: "Successioni",
    metaTitle: "Avvocato Successioni ed Eredità a Roma | Studio Properzi",
    metaDescription:
      "Avvocato per successioni ed eredità a Roma EUR: dichiarazione di successione, testamenti, beneficio d'inventario, rinuncia e divisioni ereditarie.",
    h1: "Avvocato per successioni ed eredità a Roma",
    summary:
      "Successioni, divisioni e contenziosi ereditari, conservazione del patrimonio.",
    items: [
      "Pianificazione e dichiarazione successoria e tutela del patrimonio",
      "Redazione e impugnazione testamenti",
      "Accettazione con beneficio d'inventario o rinuncia all'eredità",
    ],
    intro: [
      "Una successione tocca patrimonio, rapporti familiari e scadenze fiscali nello stesso momento. Lo Studio Legale Properzi assiste gli eredi a Roma nella pianificazione, nella dichiarazione di successione, nella divisione dei beni e nelle controversie ereditarie, avvalendosi per gli atti notarili della collaborazione con il Notaio Maddalena Cuomo, partner esterno dello Studio.",
      "L'obiettivo è prevenire il contenzioso tra familiari: quando possibile si cerca una divisione concordata; quando non lo è, lo Studio tutela i diritti dell'assistito davanti al Tribunale.",
    ],
    faqs: [
      {
        question: "Entro quando va presentata la dichiarazione di successione?",
        answer:
          "La dichiarazione di successione va presentata all'Agenzia delle Entrate entro dodici mesi dalla data di apertura della successione, che coincide di regola con la data del decesso. È obbligatoria anche quando non sono dovute imposte, perché serve a trasferire agli eredi la titolarità dei beni, in particolare degli immobili, attraverso le volture catastali. Ne sono esonerati il coniuge e i parenti in linea retta quando l'eredità ha un valore non superiore a centomila euro e non comprende immobili o diritti reali immobiliari. La presentazione della dichiarazione non equivale ad accettare l'eredità: sono due atti distinti, con conseguenze diverse. Prima di presentarla conviene verificare la situazione patrimoniale del defunto, compresi eventuali debiti, mutui e cartelle esattoriali, perché chi accetta risponde dei debiti ereditari anche con il proprio patrimonio personale, salvo che abbia accettato con beneficio d'inventario.",
      },
      {
        question: "Meglio accettare con beneficio d'inventario o rinunciare all'eredità?",
        answer:
          "Dipende dal rapporto tra attivo e passivo dell'eredità. Con l'accettazione con beneficio d'inventario l'erede risponde dei debiti del defunto solo nei limiti del valore dei beni ricevuti, tenendo separato il proprio patrimonio personale. Si fa con una dichiarazione resa davanti a un notaio o al cancelliere del Tribunale, seguita dalla redazione dell'inventario, ed è obbligatoria quando l'erede è un minore o un interdetto. La rinuncia all'eredità, anch'essa resa davanti a notaio o cancelliere, fa perdere sia i beni sia i debiti, e la quota passa agli altri chiamati, spesso ai figli di chi rinuncia. Attenzione: chi è nel possesso dei beni ereditari deve fare l'inventario entro tre mesi dall'apertura della successione, altrimenti è considerato erede puro e semplice. In generale, il diritto di accettare l'eredità si prescrive in dieci anni, ma la scelta va ponderata: l'accettazione, una volta compiuta, non è più revocabile.",
      },
      {
        question: "Come si impugna un testamento?",
        answer:
          "Un testamento può essere contestato per motivi diversi, con azioni e termini diversi. Il testamento olografo che non è interamente scritto a mano o non è sottoscritto dal testatore è nullo; se si sospetta che non sia autentico, se ne contesta la provenienza, di solito con una perizia grafologica. Se il testatore non era in grado di intendere e di volere quando lo ha redatto, o è stato indotto con errore, violenza o dolo, il testamento è annullabile entro cinque anni dal giorno in cui è stata data esecuzione alle disposizioni. Diverso è il caso dei legittimari, cioè coniuge, figli e, in assenza di figli, genitori: se il testamento lede la quota che la legge riserva loro, possono agire con l'azione di riduzione, che si prescrive in dieci anni. Prima della causa è obbligatorio tentare la mediazione, prevista per tutte le controversie in materia di successioni ereditarie.",
      },
    ],
  },
  {
    slug: "diritto-penale",
    name: "Diritto Penale",
    metaTitle: "Avvocato Penalista a Roma EUR | Studio Legale Properzi",
    metaDescription:
      "Difesa penale a Roma con l'Avv. Alessandra Poma, penalista partner dello Studio Legale Properzi: consulenza preventiva, indagini, processo, querele.",
    h1: "Avvocato penalista a Roma",
    summary:
      "In partnership con l'Avv. Alessandra Poma. Difesa in procedimenti penali, consulenza preventiva e tutela legale completa.",
    items: [
      "Difesa in tutte le fasi del procedimento penale",
      "Consulenza preventiva",
      "Assistenza alla persona offesa e querele",
    ],
    partner:
      "L'Avv. Poma riceve presso lo Studio di Piazzale Benito Juarez, previo appuntamento, oltre che nel proprio studio di Piazza Monteleone di Spoleto 8, a Roma.",
    intro: [
      "Per la difesa penale lo Studio Legale Properzi collabora con l'Avv. Alessandra Poma, avvocato penalista e partner esterno dello Studio.",
      "L'attività comprende la consulenza preventiva, l'assistenza alla persona indagata o imputata in tutte le fasi del procedimento e l'assistenza alla persona offesa dal reato, a partire dalla presentazione della querela.",
    ],
    faqs: [
      {
        question: "Ho ricevuto un'informazione di garanzia: cosa devo fare?",
        answer:
          "L'informazione di garanzia, prevista dall'art. 369 del codice di procedura penale, comunica a una persona che nei suoi confronti è in corso un procedimento penale e che il pubblico ministero sta per compiere un atto al quale il difensore ha diritto di assistere. Non è una condanna né un rinvio a giudizio: serve a garantire il diritto di difesa fin dalle indagini. La prima cosa da fare è nominare un difensore di fiducia, altrimenti verrà assegnato un difensore d'ufficio. È sconsigliabile rilasciare dichiarazioni o contattare la persona offesa o eventuali testimoni senza aver prima parlato con il proprio avvocato. Il difensore può esaminare gli atti quando diventano accessibili, svolgere indagini difensive, presentare memorie e valutare già in questa fase la strategia più adatta, compresi i riti alternativi o, per alcuni reati, l'estinzione tramite condotte riparatorie.",
      },
      {
        question: "Entro quanto tempo si può presentare una querela?",
        answer:
          "Per i reati procedibili a querela, come molte ipotesi di lesioni personali lievi, minacce, diffamazione o truffa, la persona offesa deve presentare la querela entro tre mesi dal giorno in cui ha avuto notizia del fatto che costituisce reato, secondo l'art. 124 del codice penale. Per alcuni reati il termine è più lungo: per la violenza sessuale, per esempio, è di dodici mesi. La querela si presenta presso una stazione dei Carabinieri, un ufficio della Polizia di Stato o direttamente alla Procura della Repubblica, anche tramite il proprio avvocato. Dopo la riforma Cartabia diversi reati prima perseguibili d'ufficio sono diventati procedibili a querela, e la querela può essere ritirata, con la remissione, fino alla condanna definitiva. Con l'aiuto del difensore è possibile descrivere i fatti in modo preciso, allegare le prove e chiedere di essere informati dell'eventuale richiesta di archiviazione.",
      },
    ],
  },
];

export const getPracticeArea = (slug: string) =>
  practiceAreas.find((area) => area.slug === slug);

export const practiceAreaPath = (slug: string) => `/aree-di-pratica/${slug}`;

// General questions shown on the home page.
export const studioFaqs: Faq[] = [
  {
    question: "Dove si trova lo Studio Legale Properzi e come si prenota una consulenza?",
    answer:
      "Lo Studio Legale Properzi si trova a Roma, in Piazzale Benito Juarez 10/11, nel quartiere EUR, CAP 00144. Lo Studio riceve dal lunedì al venerdì, dalle 9:00 alle 18:00, su appuntamento. Per prenotare una consulenza si può telefonare allo 06 4543 5416, scrivere a vanessa.properzi@libero.it oppure compilare il modulo di contatto presente sul sito, descrivendo brevemente la questione: lo Studio ricontatta per fissare l'incontro. Al primo appuntamento è utile portare tutti i documenti relativi al caso, come contratti, lettere, notifiche, verbali o sentenze, così da poter valutare subito i termini in scadenza e le possibili strade. Per le questioni penali riceve, previo appuntamento, l'Avv. Alessandra Poma, partner esterno dello Studio, anche nel proprio studio di Piazza Monteleone di Spoleto 8; per gli atti notarili lo Studio collabora con il Notaio Maddalena Cuomo, con studio in Via Paraguay 5, a Roma.",
  },
  {
    question: "Di quali materie si occupa lo Studio Legale Properzi?",
    answer:
      "Lo Studio Legale Properzi si occupa principalmente di diritto civile, con assistenza sia stragiudiziale sia in giudizio per privati, imprese ed enti. Le aree di attività comprendono il diritto civile in senso stretto, cioè contratti, recupero crediti, pignoramenti, risarcimento danni, infortunistica stradale e responsabilità medica e professionale; il diritto di famiglia, con separazioni, divorzi, negoziazione assistita, affidamento e mantenimento dei figli e amministrazione di sostegno; il diritto immobiliare, con sfratti, locazioni, compravendite, vizi dell'immobile e impugnazione di delibere condominiali; il diritto del lavoro, con impugnazione dei licenziamenti, differenze retributive, TFR e mobbing; le successioni, con dichiarazione di successione, testamenti, accettazione con beneficio d'inventario e divisioni ereditarie. Per il diritto penale lo Studio opera in partnership con l'Avv. Alessandra Poma, penalista. Ogni area ha una pagina dedicata sul sito, con le domande più frequenti e i termini di legge da conoscere.",
  },
  {
    question: "Chi è l'Avvocato Vanessa Properzi?",
    answer:
      "L'Avv. Vanessa Properzi è la titolare dello Studio Legale Properzi di Roma. Avvocato civilista iscritta all'Ordine degli Avvocati di Roma, è abilitata al patrocinio davanti alla Corte di Cassazione e alle altre giurisdizioni superiori: può quindi assistere i propri clienti in tutti i gradi di giudizio, dal Tribunale fino alla Suprema Corte. Esercita la professione a Roma da oltre vent'anni, assistendo privati, imprese ed enti in materia civile, di famiglia, immobiliare, di lavoro e successoria. Lo Studio si fonda sul suo lavoro diretto e personale con ciascun assistito, integrato dalla collaborazione stabile con professionisti esterni: l'Avv. Alessandra Poma per il diritto penale e il Notaio Maddalena Cuomo per gli atti notarili. Questa organizzazione permette di seguire le questioni che toccano più ambiti, per esempio una successione con immobili in locazione o una separazione con profili patrimoniali, con un unico punto di riferimento.",
  },
];
