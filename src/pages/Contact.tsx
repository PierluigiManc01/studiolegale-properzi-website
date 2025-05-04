
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-properzi-navy text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-white/80 mb-0">
              Schedule a consultation with our experienced attorneys to discuss your legal needs
              and explore how we can help you achieve your objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-serif mb-6 text-properzi-navy relative">
                Get In Touch
                <span className="absolute bottom-0 left-0 w-24 h-1 bg-properzi-beige"></span>
              </h2>
              <p className="mb-8 text-properzi-navy/80">
                Have questions or need legal assistance? Our team is here to help. 
                Contact us through any of the methods below or fill out the form to schedule a consultation.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-beige/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-properzi-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Phone</h3>
                    <p className="text-properzi-navy/70 mb-1">Call us directly:</p>
                    <a href="tel:+15551234567" className="text-properzi-beige hover:text-properzi-navy font-medium transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-beige/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-properzi-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Email</h3>
                    <p className="text-properzi-navy/70 mb-1">Send us a message:</p>
                    <a href="mailto:info@properzistudio.com" className="text-properzi-beige hover:text-properzi-navy font-medium transition-colors">
                      info@properzistudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-beige/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-properzi-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Office Location</h3>
                    <p className="text-properzi-navy/70 mb-1">Visit us at:</p>
                    <address className="not-italic text-properzi-navy">
                      123 Legal Avenue, Suite 500<br />
                      New York, NY 10001<br />
                      United States
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-properzi-beige/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-properzi-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-properzi-navy mb-1">Business Hours</h3>
                    <p className="text-properzi-navy/70 mb-1">We're available:</p>
                    <ul className="text-properzi-navy">
                      <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                      <li>Saturday: 10:00 AM - 2:00 PM (By appointment)</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="bg-properzi-navy/5 p-8 rounded-lg">
                <h2 className="text-2xl font-serif mb-6 text-properzi-navy">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-properzi-navy/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-8 text-properzi-navy text-center">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-properzi-beige/30">
                <AccordionTrigger className="text-properzi-navy font-medium">
                  What should I bring to my first consultation?
                </AccordionTrigger>
                <AccordionContent className="text-properzi-navy/80">
                  For your initial consultation, please bring any relevant documents related to your case, 
                  such as contracts, correspondence, court papers, or other materials that might help us 
                  understand your situation. It's also helpful to prepare a timeline of events and a list 
                  of questions you'd like to discuss.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-properzi-beige/30">
                <AccordionTrigger className="text-properzi-navy font-medium">
                  How do your fee structures work?
                </AccordionTrigger>
                <AccordionContent className="text-properzi-navy/80">
                  Our fee structure varies depending on the type of case and services required. We offer 
                  several payment options, including hourly rates, flat fees for specific services, and 
                  contingency arrangements for certain cases. We'll discuss the fee structure applicable 
                  to your situation during your initial consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-properzi-beige/30">
                <AccordionTrigger className="text-properzi-navy font-medium">
                  How long will my case take to resolve?
                </AccordionTrigger>
                <AccordionContent className="text-properzi-navy/80">
                  The timeline for resolution varies significantly depending on the complexity of the case, 
                  the court's schedule, and whether a settlement can be reached. During your consultation, 
                  we'll provide an estimated timeline based on our experience with similar cases, but be 
                  aware that legal matters can sometimes take unexpected turns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-properzi-beige/30">
                <AccordionTrigger className="text-properzi-navy font-medium">
                  Do you offer virtual consultations?
                </AccordionTrigger>
                <AccordionContent className="text-properzi-navy/80">
                  Yes, we offer virtual consultations via video conferencing for clients who prefer remote 
                  meetings. These consultations are secure and confidential, allowing us to discuss your 
                  legal matters conveniently from your home or office.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-properzi-beige/30">
                <AccordionTrigger className="text-properzi-navy font-medium">
                  What areas of law does your firm specialize in?
                </AccordionTrigger>
                <AccordionContent className="text-properzi-navy/80">
                  Properzi Studio Legale specializes in several areas of law, including corporate law, 
                  litigation, family law, real estate law, intellectual property, and employment law. 
                  Our attorneys have extensive experience in these fields and are equipped to handle 
                  complex legal matters across various practice areas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
