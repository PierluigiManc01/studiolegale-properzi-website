
import { useState } from "react";
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
import { sendEmail } from "@/lib/send-email";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri." }),
  email: z.string().email({ message: "Indirizzo email non valido." }),
  phone: z.string().min(6, { message: "Il numero di telefono deve contenere almeno 6 caratteri." }),
  message: z.string().min(10, { message: "Il messaggio deve contenere almeno 10 caratteri." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsLoading(true);

    try {
      await sendEmail({
        type: "consulenza",
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      });
      toast.success("Messaggio inviato con successo!");
      form.reset();
    } catch (error) {
      console.error("Errore invio email:", error);
      toast.error("Invio del messaggio fallito. Riprova più tardi.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Messaggio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descrivi la tua richiesta per una consulenza legale"
                  className="min-h-[120px] border-properzi-navy/20"
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
          {isLoading ? "Invio in corso..." : "Invia Messaggio"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
