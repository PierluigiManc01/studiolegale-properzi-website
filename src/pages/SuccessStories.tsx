
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
    toast.success("Your CV has been submitted successfully!");
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
              Our Success Stories
            </h1>
            <p className="text-lg text-white/80 mb-0">
              Discover how we've helped our clients overcome legal challenges and achieve successful outcomes 
              through our dedicated legal expertise and personalized approach.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center animate-slide-in">
            <h2 className="text-3xl font-serif mb-4 text-properzi-navy">Notable Case Studies</h2>
            <p className="text-properzi-navy/80">
              Explore some of our most significant cases and learn how our legal expertise has made 
              a difference in the lives and businesses of our clients.
            </p>
          </div>

          <Tabs defaultValue="corporate" className="animate-fade-in">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <TabsTrigger value="corporate" className="data-[state=active]:bg-properzi-beige data-[state=active]:text-properzi-navy">
                <Briefcase className="mr-2 h-4 w-4" />
                Corporate Law
              </TabsTrigger>
              <TabsTrigger value="litigation" className="data-[state=active]:bg-properzi-beige data-[state=active]:text-properzi-navy">
                <FileText className="mr-2 h-4 w-4" />
                Litigation
              </TabsTrigger>
              <TabsTrigger value="family" className="data-[state=active]:bg-properzi-beige data-[state=active]:text-properzi-navy">
                <Users className="mr-2 h-4 w-4" />
                Family Law
              </TabsTrigger>
            </TabsList>

            <TabsContent value="corporate" className="animate-slide-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-properzi-beige/10">
                  <CardHeader>
                    <CardTitle>Successful International Merger</CardTitle>
                    <CardDescription>$50M Cross-Border Transaction</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      We guided a mid-sized technology company through a complex international merger 
                      valued at $50 million. Our legal team navigated regulatory hurdles across three 
                      jurisdictions, ensuring compliance while safeguarding our client's interests.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Challenge:</span>
                      <span className="text-right">Multiple jurisdictions and regulatory frameworks</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Outcome:</span>
                      <span className="text-right">Successful merger with minimal regulatory delay</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-properzi-beige/10">
                  <CardHeader>
                    <CardTitle>Corporate Restructuring</CardTitle>
                    <CardDescription>Financial Turnaround Strategy</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Our firm assisted a struggling retail chain with a comprehensive corporate restructuring 
                      that prevented bankruptcy and preserved over 500 jobs. We developed a strategic debt 
                      reorganization plan that enabled sustainable recovery.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Challenge:</span>
                      <span className="text-right">Imminent bankruptcy and creditor pressure</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Outcome:</span>
                      <span className="text-right">Complete business recovery within 18 months</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="litigation" className="animate-slide-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-properzi-beige/10">
                  <CardHeader>
                    <CardTitle>Intellectual Property Defense</CardTitle>
                    <CardDescription>Patent Infringement Case</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      We successfully defended a medical device manufacturer against claims of patent 
                      infringement from a larger competitor. Our litigation team disproved the validity 
                      of the plaintiff's patent claims, securing a complete dismissal of the case.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Challenge:</span>
                      <span className="text-right">$15M infringement claim from industry leader</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Outcome:</span>
                      <span className="text-right">Case dismissal and counter-claim settlement</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-properzi-beige/10">
                  <CardHeader>
                    <CardTitle>Construction Dispute Resolution</CardTitle>
                    <CardDescription>Arbitration Success Story</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Our litigation team represented a real estate developer in a complex construction 
                      dispute involving contractual breaches and defective work claims. Through strategic 
                      arbitration, we secured a favorable outcome for our client.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Challenge:</span>
                      <span className="text-right">Multiple parties and contractual ambiguities</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Outcome:</span>
                      <span className="text-right">$4.2M recovery through negotiated settlement</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="family" className="animate-slide-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-properzi-beige/10">
                  <CardHeader>
                    <CardTitle>High-Asset Divorce Settlement</CardTitle>
                    <CardDescription>Equitable Resolution</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      We represented a client in a high-asset divorce involving complex business valuations 
                      and property division. Through skilled negotiation, we secured an equitable settlement 
                      without protracted litigation, preserving family relationships.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Challenge:</span>
                      <span className="text-right">Complex asset valuation and division</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Outcome:</span>
                      <span className="text-right">Amicable settlement and preserved business interests</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-properzi-beige/10">
                  <CardHeader>
                    <CardTitle>International Child Custody</CardTitle>
                    <CardDescription>Cross-Border Resolution</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Our family law team successfully resolved a complex international child custody dispute 
                      involving Hague Convention provisions. We secured a favorable arrangement that prioritized 
                      the child's well-being while protecting our client's parental rights.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Challenge:</span>
                      <span className="text-right">Jurisdictional conflicts and international law</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-properzi-beige font-medium">Outcome:</span>
                      <span className="text-right">Joint custody arrangement with clear visitation rights</span>
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
            <h2 className="text-3xl font-serif mb-4 text-properzi-navy">Life at Properzi Studio</h2>
            <p className="text-properzi-navy/80">
              Hear from our interns and team members about their experiences working at Properzi Studio Legale 
              and how our collaborative environment nurtures legal talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-properzi-beige/10 animate-fade-in">
              <CardHeader>
                <div className="h-14 w-14 rounded-full bg-properzi-navy/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif text-properzi-beige">M</span>
                </div>
                <CardTitle>Michael Rodriguez</CardTitle>
                <CardDescription>Summer Intern 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-properzi-navy/80 italic">
                  "My internship at Properzi Studio Legale was transformative. I had the opportunity to work 
                  directly with senior attorneys on meaningful cases, receiving mentorship that went beyond 
                  theoretical knowledge to practical application of the law."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in [animation-delay:200ms]">
              <CardHeader>
                <div className="h-14 w-14 rounded-full bg-properzi-navy/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif text-properzi-beige">S</span>
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Legal Assistant to Associate</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-properzi-navy/80 italic">
                  "What began as a summer position evolved into a fulfilling career. The partners recognized my 
                  potential and supported my journey through law school. The professional development opportunities 
                  here are unmatched, with clear pathways for growth."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="border-properzi-beige/10 animate-fade-in [animation-delay:400ms]">
              <CardHeader>
                <div className="h-14 w-14 rounded-full bg-properzi-navy/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif text-properzi-beige">D</span>
                </div>
                <CardTitle>David Chen</CardTitle>
                <CardDescription>Research Intern to Junior Associate</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-properzi-navy/80 italic">
                  "The collaborative culture at Properzi Studio Legale sets it apart from other firms. Partners 
                  are accessible mentors genuinely invested in your growth. The challenging work environment is 
                  balanced with supportive colleagues who celebrate each other's successes."
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* CV Submission Section */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-slide-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-serif mb-4 text-properzi-navy">Join Our Team</h3>
                <p className="mb-4 text-properzi-navy/80">
                  We're always looking for talented individuals to join our firm. Whether you're a law student 
                  seeking internship opportunities or an experienced professional looking for your next career move, 
                  we'd love to hear from you.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-properzi-beige mt-1" />
                    <div>
                      <h4 className="font-medium text-properzi-navy">Professional Development</h4>
                      <p className="text-sm text-properzi-navy/70">Mentorship from industry leaders and continuous learning opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-6 w-6 text-properzi-beige mt-1" />
                    <div>
                      <h4 className="font-medium text-properzi-navy">Challenging Caseload</h4>
                      <p className="text-sm text-properzi-navy/70">Work on diverse and complex legal matters across practice areas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-properzi-beige mt-1" />
                    <div>
                      <h4 className="font-medium text-properzi-navy">Collaborative Environment</h4>
                      <p className="text-sm text-properzi-navy/70">Supportive team culture that values diverse perspectives</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleCVSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position of Interest</Label>
                      <Input id="position" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Cover Letter</Label>
                    <Textarea id="message" rows={4} placeholder="Tell us about yourself and your interest in Properzi Studio Legale" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cv">Resume/CV</Label>
                    <Input id="cv" type="file" accept=".pdf,.doc,.docx" required className="cursor-pointer" />
                    <p className="text-xs text-properzi-navy/60 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                  <Button type="submit" className="w-full bg-properzi-navy hover:bg-properzi-beige text-white hover:text-properzi-navy transition-colors">
                    Submit Application
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
