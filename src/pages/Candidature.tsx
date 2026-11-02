
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { breadcrumbSchema } from "@/lib/schema";
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
import { sendEmail, fileToBase64 } from "@/lib/send-email";
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

  async function onSubmit(values: CandidatureFormValues) {
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      toast.error("Allega il tuo curriculum per procedere.");
      return;
    }

    setIsLoading(true);

    try {
      const content = await fileToBase64(file);
      await sendEmail({
        type: "candidatura",
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
        attachment: { filename: file.name, content },
      });
      toast.success("Candidatura inviata con successo!");
      form.reset();
      setFileName(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Errore invio candidatura:", error);
      toast.error("Invio della candidatura fallito. Riprova più tardi.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="pt-24 md:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56">
      <Seo
        title="Candidature Praticanti | Studio Legale Properzi Roma"
        description="Candidature per praticanti, anche non abilitati, presso lo Studio Legale Properzi a Roma EUR. Esperienza pratica in studio e in tribunale."
        path="/candidature"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Candidature", path: "/candidature" },
          ]),
        ]}
      />
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

          {/* Application Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-properzi-navy p-10 md:p-12 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-cinzel text-properzi-beige mb-4 text-center">Invia la Tua Candidatura</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-properzi-beige">Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Mario Rossi" {...field} className="h-11 text-base border-properzi-beige/30" />
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
                        <FormLabel className="text-properzi-beige">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="mario.rossi@esempio.com" {...field} className="h-11 text-base border-properzi-beige/30" />
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
                        <FormLabel className="text-properzi-beige">Numero di Telefono</FormLabel>
                        <FormControl>
                          <Input placeholder="+39 123 456 7890" {...field} className="h-11 text-base border-properzi-beige/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* CV Upload */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-properzi-beige">Curriculum Vitae *</label>
                    <div
                      className="border-2 border-dashed border-properzi-beige/30 rounded-lg p-6 text-center cursor-pointer hover:border-properzi-beige transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-8 w-8 text-properzi-beige/60 mx-auto mb-2" />
                      {fileName ? (
                        <p className="text-sm text-properzi-beige font-medium">{fileName}</p>
                      ) : (
                        <p className="text-sm text-properzi-beige/70">
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
                        <FormLabel className="text-properzi-beige">Note aggiuntive (opzionale)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Raccontaci brevemente di te..."
                            className="min-h-[120px] text-base border-properzi-beige/30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full h-12 text-base bg-properzi-beige hover:bg-white text-properzi-navy transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? "Invio in corso..." : "Invia Candidatura"}
                  </Button>
                  <p className="text-xs text-properzi-beige/70 text-center">
                    Inviando la candidatura dichiari di aver letto l'
                    <Link to="/privacy" className="underline underline-offset-4 hover:text-white">informativa privacy</Link>.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Candidature;
