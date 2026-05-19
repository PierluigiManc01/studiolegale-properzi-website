
import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Upload, Briefcase, Scale, Users } from "lucide-react";

const candidatureSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri." }),
  email: z.string().email({ message: "Indirizzo email non valido." }),
  phone: z.string().min(6, { message: "Il numero di telefono deve contenere almeno 6 caratteri." }),
  message: z.string().optional(),
});

type CandidatureFormValues = z.infer<typeof candidatureSchema>;

const Candidature = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<CandidatureFormValues>({
    resolver: zodResolver(candidatureSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Il file non deve superare i 5MB.");
        e.target.value = "";
        setFileName(null);
        return;
      }
      setFileName(file.name);
    } else {
      setFileName(null);
    }
  };

  function onSubmit(values: CandidatureFormValues) {
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      toast.error("Allega il tuo curriculum per procedere.");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_syt5b2e",
        "template_z1rltbc",
        formRef.current!,
        "3lw5HEIBzvyKlfMli"
            )
      .then(
        () => {
          toast.success("Candidatura inviata con successo!");
          form.reset();
          setFileName(null);
          if (fileInputRef.current) fileInputRef.current.value = "";
          setIsLoading(false);
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Invio della candidatura fallito. Riprova più tardi.");
          setIsLoading(false);
        }
      );
  }

  return (
    <div className="pt-24 md:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56">
      <Helmet>
        <title>Candidature Praticanti | Studio Legale Properzi Roma</title>
        <meta name="description" content="Candidature per praticanti, anche non abilitati, presso lo Studio Legale Properzi a Roma. Esperienza pratica in studio e in tribunale." />
        <link rel="canonical" href="https://studiolegale-properzi.com/candidature" />
        <meta property="og:title" content="Candidature Praticanti | Studio Legale Properzi" />
        <meta property="og:description" content="Unisciti allo Studio Legale Properzi a Roma: praticanti coinvolti subito nelle attività di studio e udienze." />
        <meta property="og:url" content="https://studiolegale-properzi.com/candidature" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-properzi-navy text-white py-10 pt-20 banner-clip overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="page-title text-white">
              Candidature Praticanti
            </h1>
            <div className="divider mx-auto bg-properzi-beige"></div>
            <p className="text-lg text-white/80 mb-0">
              Unisciti al nostro studio e inizia il tuo percorso professionale
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title text-center">Cresci Con Noi</h2>
            <div className="divider mx-auto"></div>
            <p className="text-properzi-navy/80 text-lg leading-relaxed mt-6">
              Lo Studio Legale Properzi accoglie praticanti, anche non abilitati, offrendo un'esperienza 
              formativa concreta e stimolante. I nostri praticanti vengono inseriti fin da subito nelle 
              responsabilità giornaliere dello studio e coinvolti direttamente nelle udienze in tribunale, 
              per apprendere sul campo le dinamiche della professione forense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center p-6">
              <div className="h-14 w-14 rounded-full bg-properzi-navy flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-cinzel text-lg text-properzi-navy font-medium mb-2">Pratica Immediata</h3>
              <p className="text-properzi-navy/70 text-sm">
                Responsabilità reali fin dal primo giorno, con affiancamento costante
              </p>
            </div>
            <div className="text-center p-6">
              <div className="h-14 w-14 rounded-full bg-properzi-navy flex items-center justify-center mx-auto mb-4">
                <Scale className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-cinzel text-lg text-properzi-navy font-medium mb-2">Esperienza in Tribunale</h3>
              <p className="text-properzi-navy/70 text-sm">
                Partecipazione diretta alle udienze per imparare la pratica forense
              </p>
            </div>
            <div className="text-center p-6">
              <div className="h-14 w-14 rounded-full bg-properzi-navy flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-cinzel text-lg text-properzi-navy font-medium mb-2">Team Collaborativo</h3>
              <p className="text-properzi-navy/70 text-sm">
                Un ambiente che valorizza la crescita professionale e personale
              </p>
            </div>
          </div>

          {/* Email Application Instructions */}
          <div className="max-w-xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-cinzel text-properzi-navy mb-6 text-center">Invia la Tua Candidatura</h3>
              <div className="text-center space-y-4 text-properzi-navy/80">
                <p>
                  Per inviare la candidatura, ti invitiamo a mandare un'email all'indirizzo:
                </p>
                <a href="mailto:vanessa.properzi@libero.it" className="text-lg font-bold text-properzi-beige hover:underline block">
                  vanessa.properzi@libero.it
                </a>
                <div className="bg-properzi-navy/5 p-4 rounded-md text-sm inline-block text-left mt-4 border border-properzi-navy/10">
                  <p className="mb-2"><strong>Oggetto da inserire:</strong></p>
                  <code className="block w-full max-w-full whitespace-normal break-words text-center sm:text-left text-xs sm:text-sm text-properzi-navy font-semibold px-3 py-2 bg-white rounded border border-properzi-navy/20">
                    CANDIDATURA praticante dal sito - Nome Cognome
                  </code>
                </div>
                <p className="mt-4 text-sm font-medium text-properzi-navy">
                  * È obbligatorio allegare il proprio Curriculum Vitae.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form (Temporarily disabled for future use) */}
          {false && (
          <div className="max-w-xl mx-auto mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-cinzel text-properzi-navy mb-6 text-center">Invia la Tua Candidatura tramite form</h3>
              <Form {...form}>
                <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Mario Rossi" {...field} className="border-properzi-navy/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="mario.rossi@esempio.com" {...field} className="border-properzi-navy/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Numero di Telefono</FormLabel>
                        <FormControl>
                          <Input placeholder="+39 123 456 7890" {...field} className="border-properzi-navy/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* CV Upload */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Curriculum Vitae *</label>
                    <div
                      className="border-2 border-dashed border-properzi-navy/20 rounded-lg p-6 text-center cursor-pointer hover:border-properzi-beige transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-8 w-8 text-properzi-navy/40 mx-auto mb-2" />
                      {fileName ? (
                        <p className="text-sm text-properzi-navy font-medium">{fileName}</p>
                      ) : (
                        <p className="text-sm text-properzi-navy/60">
                          Clicca per caricare il CV (PDF, DOC, DOCX — max 5MB)
                        </p>
                      )}
                      <input
                        ref={fileInputRef}
                        type="file"
                        name="cv"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Note aggiuntive (opzionale)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Raccontaci brevemente di te..."
                            className="min-h-[100px] border-properzi-navy/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? "Invio in corso..." : "Invia Candidatura"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Candidature;
