---
project: studiolegale-properzi
audit-date: 2026-11-02
audit-by: guido
url: https://www.studiolegale-properzi.com/
branch: seo/roma-local-ranking
---

# Audit GEO/SEO — Studio Legale Properzi — 2026-11-02

## Sintesi

| | Prima (live) | Dopo (branch, build locale) |
|---|---|---|
| Punteggio GEO/SEO pesato | **21/100** | **~54/100** stimato (il resto è off-site) |
| Lighthouse mobile home | Perf 72 · A11y 95 · BP 100 · SEO 100 | Perf 98 · A11y 96 → 100 dopo fix contrasto · BP 100 · SEO 100 |
| LCP / CLS | 4,5 s / 0 | 2,1 s / 0,016 |
| Peso pagina home | 4,2 MB | 416 KB |
| Pagine indicizzabili | 1 (le altre rispondono 404) | 11 + 404 vera |
| GEO (query target con citazione) | 0/8 | da rimisurare 4-8 settimane dopo il deploy |

Lighthouse SEO 100 era fuorviante: controlla solo i fondamentali della home, non vede che le pagine interne rispondono 404, che l'HTML è vuoto e che il canonical punta a un dominio che fa redirect.

## Problemi critici trovati sul live

1. **`/contact` e `/candidature` rispondono HTTP 404.** Il sito è una SPA su Vercel senza rewrite: React le disegna nel browser, ma Google riceve 404. Sono in sitemap, quindi Search Console le segnala come errori.
2. **L'HTML servito è vuoto** (2,8 KB, `<div id="root"></div>`). GPTBot, ClaudeBot e PerplexityBot non eseguono JavaScript: per gli assistenti AI il sito non ha contenuto. Google lo renderizza, ma in differita e con meno fiducia.
3. **Canonical sbagliato.** Canonical, `og:url`, sitemap, robots e JSON-LD usano `studiolegale-properzi.com`, che fa **redirect 307 (temporaneo)** verso `www.`. Google riceve segnali contraddittori su quale sia l'URL vero.
4. **Brand invisibile.** La ricerca "Studio Legale Properzi Roma" e "avvocato Vanessa Properzi" non restituiscono il sito né alcuna scheda dello studio.
5. **Una sola pagina di contenuto** per sei aree di pratica: nessuna pagina può posizionarsi su "avvocato divorzio Roma", "avvocato sfratto Roma" ecc.
6. **Script di terze parti Lovable** (`cdn.gpteng.co/gptengineer.js`) ancora in produzione, nonostante il commit "removing lovable references".
7. **Telefono rotto**: `tel:+0645435416` (manca il prefisso 39). Su mobile il tap per chiamare fallisce.
8. **Immagini**: `maddalena.png` 2,3 MB e `hero.png` 1,4 MB; l'hero è scaricato anche su mobile dove è nascosto.
9. **Nessuna informativa privacy** pur raccogliendo dati (modulo contatti, CV). Banner cookie in inglese, modale bloccante, e dichiara cookie di analisi/marketing che il sito non usa.

## SEO — checklist

| Check | Prima | Dopo |
|---|---|---|
| Title home | "Studio Legale Properzi \| Avvocato Civilista a Roma" ✓ | "… a Roma EUR" ✓ |
| Description ≤160 | ✓ | ✓ su tutte le pagine |
| Schema Organization/LocalBusiness | `LegalService` base ✓ | `LegalService` con geo, hasMap, areaServed Roma, OfferCatalog ✓ |
| Schema Person (avvocato) | ❌ | ✓ `Person` Vanessa Properzi, collegata con `@id` |
| Schema Service | ❌ | ✓ 6 servizi |
| Schema FAQPage | ❌ | ✓ 7 pagine, 20 risposte |
| BreadcrumbList | ❌ | ✓ su tutte le pagine interne |
| Sitemap.xml | 3 URL, dominio sbagliato, 2 su 3 in 404 | 10 URL `www.`, `lastmod`, generata al build |
| robots → GPTBot / ClaudeBot / PerplexityBot / Google-Extended | solo via `*` ⚠️ | espliciti + OAI-SearchBot, Claude-SearchBot, Applebot-Extended ✓ |
| llms.txt / llms-full.txt | 200 / 404 | 200 / 200 (generato dai contenuti) |
| OG / Twitter | og senza immagine, twitter solo `card` | og:image 1200×630, twitter completo |
| Canonical | dominio non-www ❌ | `www.` coerente ✓ |
| 404 reale | ❌ (SPA) | ✓ `404.html` con `noindex` |

## GEO — AI visibility

Query target **inferite** dal sito (non fornite dal cliente: da confermare).

| Query | Proxy web search | ChatGPT | Claude | Gemini | Chi compare |
|---|---|---|---|---|---|
| Studio Legale Properzi Roma | ❌ | TODO | TODO | TODO | nessuno studio con quel nome |
| avvocato Vanessa Properzi | ❌ | TODO | TODO | TODO | omonime |
| avvocato civilista Roma EUR | ❌ | TODO | TODO | TODO | deQuo (directory) |
| avvocato divorzio separazione Roma EUR | ❌ | TODO | TODO | TODO | deQuo |
| avvocato sfratto morosità Roma | ❌ | TODO | TODO | TODO | dokicasa, idealista, money.it, deQuo |
| avvocato successioni eredità Roma | ❌ | TODO | TODO | TODO | deQuo (tutti i risultati) |
| avvocato cassazionista Roma Piazzale Benito Juarez | ❌ | TODO | TODO | TODO | CV di enti pubblici |
| avvocato recupero crediti Roma sud EUR Torrino | ❌ | TODO | TODO | TODO | nessuno di zona |

⚠️ **Limite del metodo.** Senza API Perplexity/OpenAI ho usato la ricerca web come proxy: misura l'organico, non le citazioni di ChatGPT/Perplexity (solo l'8% delle citazioni di ChatGPT viene dalla top-10 organica). Vale come trend, non come misura assoluta. Lo strumento di ricerca usato è inoltre USA-centrico: rifare le stesse query da Google.it in incognito per il dato locale.

**Lettura:** su Roma vince una directory, **deQuo.it**, presente in quasi tutte le query. È la fonte che gli AI e Google stanno usando per "avvocato X Roma". Un profilo completo lì vale oggi più di qualunque modifica al sito.

### Presenza nelle fonti citate dagli AI

| Fonte | Presenza | Nota |
|---|---|---|
| Google Business Profile | da verificare | il link Maps esiste; serve categoria, foto, recensioni, orari, sito `www.` |
| deQuo.it | ❌ | domina le SERP romane per tutte le aree |
| Albo Ordine Avvocati Roma | presumibilmente ✓ | fonte di verifica, non di scoperta |
| Reddit (r/Roma, r/legaladviceitaly) | ❌ | partecipazione utile solo se autentica, mai spam |
| Wikipedia | n/a | nessuna voce pertinente, non forzare |
| YouTube | ❌ | brevi video "cosa fare se ricevo uno sfratto" funzionano bene nel settore |

### Citabilità (FAQ)

Prima: 0 FAQ. Dopo: 20 risposte, media 141 parole, **20/20 nella finestra 130-167**, ognuna autoconclusiva, con articoli di legge, termini in giorni e importi: il formato che gli assistenti citano.

## Punteggio pesato

| Categoria | Peso | Prima | Dopo (on-site) |
|---|---|---|---|
| Citabilità & visibilità AI | 25% | 5 | 45 |
| Segnali di autorità brand | 20% | 10 | 10 (off-site) |
| Contenuto & E-E-A-T | 20% | 30 | 65 |
| Fondamenti tecnici | 15% | 35 | 90 |
| Dati strutturati | 10% | 40 | 90 |
| Platform-specific | 10% | 20 | 55 |
| **Totale** | | **21** | **~54** |

Il tetto ora è l'autorità del brand, che non si sposta dal codice.

## Raccomandazioni off-site (in ordine di impatto su "Roma")

1. **Google Business Profile**: rivendicare/verificare, categoria principale "Avvocato" + secondarie (Avvocato civilista, Avvocato divorzista), sito `https://www.studiolegale-properzi.com/`, orari, foto dello studio e di Vanessa, descrizione con le aree. Chiedere recensioni ai clienti soddisfatti (consentito, senza incentivi). Per "avvocato + Roma" il local pack pesa più del sito.
2. **Vercel → Domains**: impostare `studiolegale-properzi.com` come redirect **308 permanente** verso `www.` (oggi è 307). Il `vercel.json` del branch copre il caso, ma la regola di dominio in dashboard ha precedenza.
3. **Search Console**: dopo il deploy, inviare la nuova sitemap e chiedere l'indicizzazione delle 6 pagine aree di pratica. Verificare anche la proprietà `www.`.
4. **deQuo + directory**: profilo deQuo completo; poi PagineGialle, Avvocato360, Avvocati.it. NAP **identico** al sito: "Piazzale Benito Juarez 10/11, 00144 Roma", "06 4543 5416".
5. **Email di dominio** (es. `studio@studiolegale-properzi.com`) al posto di libero.it: segnale di fiducia e coerenza del brand.
6. Rimisurare le 8 query a 4 e 8 settimane dal deploy.

## Da far confermare all'Avv. Properzi prima del merge

- Contenuti legali delle 20 FAQ (scritti su norma vigente, da rileggere).
- "più di 20 anni" (testo) vs "25+" (riquadro): quale è giusto? Le FAQ dicono "oltre vent'anni".
- "Iscritta all'Ordine degli Avvocati di Roma" (dedotto dal logo in pagina).
- Collaborazione con il Notaio Cuomo sulle successioni e con l'Avv. Poma sull'assistenza alla persona offesa.
- Informativa privacy: conservazione CV 12 mesi, fornitori citati (Resend, Vercel).
- Codice deontologico (art. 35): il testo esistente "alta specializzazione" e "tutela con successo" è stato lasciato; valutare di sostituirlo, il titolo di "specialista" è riservato.

## Rebuild feasibility

- **Rebuild effort**: 3/10 — vetrina 5 pagine + 2 form con invio email.
- **Tipo**: vetrina.
- **Funzionalità**: modulo contatti, candidature con CV (Resend), mappa.
- **Tempo stimato**: 1-2 settimane.
- **Note**: questo branch evita il rebuild; un passaggio a Next.js/Astro avrebbe senso solo con un blog legale.

## File raw

- Lighthouse live: scratchpad di sessione `live/lh-mobile.json` (non versionato)
- Lighthouse branch: `lh-local-home.json`, `lh-local-…diritto-di-famiglia.json` (non versionati)
