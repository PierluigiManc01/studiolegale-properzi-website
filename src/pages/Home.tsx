
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import { Award, Briefcase, Users, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-properzi-navy/5 pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-properzi-navy">
              Expert Legal Solutions for Complex Challenges
            </h1>
            <p className="text-lg md:text-xl mb-8 text-properzi-navy/90">
              At Properzi Studio Legale, we navigate the complexities of law with precision and dedication, 
              ensuring your rights are protected and your goals achieved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors text-lg py-6 px-8">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button variant="outline" className="border-properzi-beige text-properzi-navy hover:bg-properzi-beige/10 transition-colors text-lg py-6 px-8">
                <Link to="/success-stories">Our Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-properzi-navy relative">
                About Properzi Studio Legale
                <span className="absolute bottom-0 left-0 w-24 h-1 bg-properzi-beige"></span>
              </h2>
              <p className="mb-6 text-properzi-navy/90">
                Founded with a vision to provide exceptional legal services, Properzi Studio Legale has emerged as 
                a leading law firm committed to excellence, integrity, and client satisfaction.
              </p>
              <p className="mb-6 text-properzi-navy/90">
                Our attorneys bring decades of combined experience across various legal disciplines, 
                equipped with in-depth knowledge and expertise to navigate the most complex legal challenges.
              </p>
              <p className="text-properzi-navy/90">
                What sets us apart is our unwavering commitment to our clients. We take the time to understand 
                your unique situation and craft personalized legal strategies that align with your objectives.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <div className="bg-properzi-navy/5 p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-properzi-beige mb-2">98%</div>
                <p className="text-properzi-navy">Client Satisfaction Rate</p>
              </div>
              <div className="bg-properzi-navy/5 p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-properzi-beige mb-2">500+</div>
                <p className="text-properzi-navy">Cases Successfully Resolved</p>
              </div>
              <div className="bg-properzi-navy/5 p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-properzi-beige mb-2">25+</div>
                <p className="text-properzi-navy">Years of Experience</p>
              </div>
              <div className="bg-properzi-navy/5 p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-properzi-beige mb-2">85%</div>
                <p className="text-properzi-navy">Case Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-properzi-navy/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-properzi-navy">Our Legal Services</h2>
            <p className="text-properzi-navy/80">
              We offer a comprehensive range of legal services tailored to meet the diverse needs of our clients.
              Our experienced attorneys provide expert guidance and representation in various practice areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-properzi-beige/10 animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Briefcase className="h-8 w-8 text-properzi-beige mb-4" />
                <CardTitle>Corporate Law</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Expert guidance on business formation, mergers and acquisitions, corporate governance, 
                  and compliance matters for businesses of all sizes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in hover:shadow-lg transition-shadow [animation-delay:200ms]">
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-properzi-beige mb-4" />
                <CardTitle>Family Law</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Compassionate representation in divorce, child custody, adoption, and other sensitive family matters 
                  with a focus on amicable resolutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in hover:shadow-lg transition-shadow [animation-delay:400ms]">
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-properzi-beige mb-4" />
                <CardTitle>Litigation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Strategic representation in court proceedings, dispute resolutions, and settlements 
                  with a track record of successful outcomes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in hover:shadow-lg transition-shadow [animation-delay:100ms]">
              <CardHeader className="pb-2">
                <CheckCircle className="h-8 w-8 text-properzi-beige mb-4" />
                <CardTitle>Real Estate Law</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Comprehensive legal services for property purchases, sales, leasing, development, 
                  and real estate litigation matters.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in hover:shadow-lg transition-shadow [animation-delay:300ms]">
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-properzi-beige mb-4" />
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Protection of trademarks, patents, copyrights, and trade secrets, along with 
                  enforcement strategies and litigation support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in hover:shadow-lg transition-shadow [animation-delay:500ms]">
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-properzi-beige mb-4" />
                <CardTitle>Employment Law</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Advice on employment contracts, workplace policies, discrimination claims, 
                  and other employment-related disputes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-properzi-navy relative">
                Get In Touch
                <span className="absolute bottom-0 left-0 w-24 h-1 bg-properzi-beige"></span>
              </h2>
              <p className="mb-6 text-properzi-navy/90">
                Whether you're facing a specific legal issue or have a question about our practice areas, 
                we're here to help. Contact us today to schedule a consultation with one of our experienced attorneys.
              </p>
              
              <div className="space-y-6 mb-6">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-properzi-beige mt-1" />
                  <div>
                    <h3 className="font-medium text-properzi-navy">Expert Legal Counsel</h3>
                    <p className="text-properzi-navy/70">Benefit from our extensive experience and expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-properzi-beige mt-1" />
                  <div>
                    <h3 className="font-medium text-properzi-navy">Personalized Approach</h3>
                    <p className="text-properzi-navy/70">Tailored solutions to meet your unique legal needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-properzi-beige mt-1" />
                  <div>
                    <h3 className="font-medium text-properzi-navy">Client-Centered Service</h3>
                    <p className="text-properzi-navy/70">Your satisfaction and success are our priorities</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button asChild className="bg-properzi-beige hover:bg-properzi-navy text-properzi-navy hover:text-white transition-colors">
                  <a href="tel:+15551234567">
                    Call Now: +1 (555) 123-4567
                  </a>
                </Button>
                <Separator orientation="vertical" className="h-8" />
                <Button asChild variant="outline" className="border-properzi-beige text-properzi-navy hover:bg-properzi-beige/10">
                  <a href="mailto:info@properzistudio.com">
                    Email Us
                  </a>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
