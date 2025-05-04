
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
import emailjs from "@emailjs/browser";
import { Card } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri." }),
  email: z.string().email({ message: "Indirizzo email non valido." }),
  phone: z.string().min(6, { message: "Il numero di telefono deve contenere almeno 6 caratteri." }),
  subject: z.string().min(4, { message: "L'oggetto deve contenere almeno 4 caratteri." }),
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
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    setIsLoading(true);
    
    // Replace with your actual EmailJS details
    emailjs
      .send(
        "service_id", // Service ID - you'll need to provide this
        "template_id", // Template ID - you'll need to provide this
        {
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
        },
        "user_id" // User ID - you'll need to provide this
      )
      .then(
        () => {
          toast.success("Messaggio inviato con successo!");
          form.reset();
          setIsLoading(false);
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Invio del messaggio fallito. Riprova più tardi.");
          setIsLoading(false);
        }
      );
  }

  return (
    <Card className="p-6 shadow-lg border-properzi-beige/20 bg-white">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Mario Rossi" {...field} />
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
                    <Input placeholder="mario.rossi@esempio.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numero di Telefono</FormLabel>
                  <FormControl>
                    <Input placeholder="+39 123 456 7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Oggetto</FormLabel>
                  <FormControl>
                    <Input placeholder="Richiesta di Consulenza Legale" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Messaggio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Per favore, descrivi la tua situazione legale o richiesta..."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full md:w-auto bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Invio in corso..." : "Invia Messaggio"}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default ContactForm;
