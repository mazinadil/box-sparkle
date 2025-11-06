import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { useImageLoader } from "@/hooks/useImageLoader";

const Dancers = () => {
  const dancers = [
    {
      name: "Sophia Martinez",
      role: "Contemporary & Ballet Specialist",
      image: "/images/dancers/sophia-martinez.webp",
      description: "Classically trained ballet dancer with 12+ years performing across Dubai's premier venues. Known for elegant contemporary performances that blend technical precision with artistic expression.",
      tags: ["Contemporary", "Ballet", "Luxury Events", "Choreography"]
    },
    {
      name: "Marcus Johnson",
      role: "Hip-Hop & Street Dance Expert",
      image: "/images/dancers/marcus-johnson.webp",
      description: "High-energy hip-hop specialist bringing urban dance culture to Dubai events. Expert in breaking, popping, and commercial choreography for product launches and corporate entertainment.",
      tags: ["Hip-Hop", "Street Dance", "Corporate Events", "High Energy"]
    },
    {
      name: "Laila Al-Rashid",
      role: "Traditional & Cultural Dance",
      image: "/images/dancers/laila-alrashid.webp",
      description: "Specializing in traditional Arabic and cultural dance forms. Brings authentic performances to weddings and cultural celebrations with elegant traditional costumes and choreography.",
      tags: ["Arabic Dance", "Cultural", "Weddings", "Traditional"]
    },
    {
      name: "Isabella Romano",
      role: "Latin & Salsa Professional",
      image: "/images/dancers/isabella-romano.webp",
      description: "Passionate Latin dance specialist trained in salsa, bachata, and samba. Brings vibrant energy and rhythm to celebrations, perfect for international events and themed parties.",
      tags: ["Latin Dance", "Salsa", "Bachata", "International"]
    },
    {
      name: "The LED Collective",
      role: "LED & Specialty Performers",
      image: "/images/dancers/led-collective.webp",
      description: "Cutting-edge LED dance troupe creating mesmerizing visual spectacles. Specializing in LED costumes, glow shows, and futuristic performances for corporate galas and luxury events.",
      tags: ["LED Dancers", "Visual Effects", "Specialty Acts", "Modern"]
    },
    {
      name: "Fire Fusion Dancers",
      role: "Fire & Acrobatic Performance",
      image: "/images/dancers/fire-fusion.webp",
      description: "Thrilling fire dance performances combining acrobatics with dramatic fire manipulation. Perfect for outdoor events, beach parties, and celebrations seeking unforgettable entertainment.",
      tags: ["Fire Shows", "Acrobatics", "Outdoor Events", "Spectacular"]
    }
  ];

  const faqs = [
    {
      question: "How much does it cost to hire dancers in Dubai?",
      answer: "Professional dancer pricing ranges from AED 1,500 for solo performances at small events to AED 8,000+ for full dance troupes at large corporate galas. Pricing depends on performance duration, number of dancers, choreography complexity, and costume requirements. Contact us for a customized quote."
    },
    {
      question: "What dance styles do your performers specialize in?",
      answer: "Our dancers specialize in diverse styles including contemporary ballet, hip-hop, Latin dance (salsa, bachata), traditional Arabic dance, cultural performances, and specialty acts like LED dancing and fire shows. We can match dancers to your event's theme and audience preferences."
    },
    {
      question: "How far in advance should I book dancers?",
      answer: "We recommend booking at least 3-4 weeks in advance for standard performances and 6-8 weeks for large events requiring custom choreography or multiple dancers. Peak season (October-April) and weekends require earlier booking to ensure availability."
    },
    {
      question: "Do dancers provide their own costumes and music?",
      answer: "Yes, all our dancers come with professional performance costumes appropriate to their dance style. They can perform to provided music or work with your DJ to synchronize choreography. Custom costume requests can be accommodated with advance notice."
    },
    {
      question: "Can dancers perform at outdoor venues?",
      answer: "Absolutely! Our dancers perform at both indoor and outdoor venues including beaches, rooftop terraces, gardens, and poolside locations across Dubai. We ensure appropriate choreography and costumes for outdoor conditions."
    },
    {
      question: "Do you offer choreographed group performances?",
      answer: "Yes, we offer professionally choreographed group performances with 2-10+ dancers. Perfect for opening acts, intermission entertainment, or feature performances at corporate events, weddings, and galas. Custom choreography available for brand activations and themed events."
    }
  ];

  const DancerCard = ({ dancer }: { dancer: typeof dancers[0] }) => {
    const { isLoaded, error } = useImageLoader(dancer.image);

    return (
      <Card className="overflow-hidden backdrop-blur-sm bg-card/50 hover-lift group">
        <div className="relative aspect-[3/4] overflow-hidden">
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          {!error && (
            <img
              src={dancer.image}
              alt={`${dancer.name} - ${dancer.role}`}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="font-heading text-2xl mb-1">{dancer.name}</h3>
            <p className="text-sm text-white/90">{dancer.role}</p>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-4">{dancer.description}</p>
          <div className="flex flex-wrap gap-2">
            {dancer.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Professional Dancers Dubai | Wedding & Corporate Dance Performances | Box Entertainment</title>
        <meta name="description" content="Book professional dancers in Dubai for weddings, corporate events, and parties. Contemporary, ballet, hip-hop, Latin, traditional Arabic dance, LED & fire shows. Expert choreography." />
        <link rel="canonical" href="https://boxentertainment.ae/services/entertainment/dancers" />
      </Helmet>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Professional Dancers in Dubai",
          description: "Professional dance performances for events in Dubai including contemporary, ballet, hip-hop, Latin, and specialty acts",
          serviceType: ["Wedding Dancers", "Corporate Entertainment", "Ballet Performance", "Hip-Hop Dance", "Cultural Dance", "LED Dancers", "Fire Shows"],
          areaServed: {
            "@type": "City",
            name: "Dubai",
            containedInPlace: "UAE"
          },
          provider: {
            "@type": "Organization",
            name: "Box Entertainment"
          }
        }}
      />

      <StructuredData data={faqSchema} />

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/services" },
              { label: "Entertainment", href: "/services/entertainment" },
              { label: "Dancers" }
            ]} 
          />

          {/* Hero Section */}
          <section className="lg:grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl mb-8 lg:mb-0">
              <img
                src="/images/services/dancers-bg.webp"
                alt="Professional dancers performing at luxury Dubai event"
                className="object-cover w-full h-full"
              />
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  Professional <span className="gradient-text">Dancers</span>
                </h1>
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="hidden lg:block text-5xl md:text-6xl font-heading font-bold">
                Professional <span className="gradient-text">Dancers</span>
              </h1>
              <p className="text-2xl text-muted-foreground">
                Elevate your Dubai event with captivating dance performances
              </p>
              <p className="text-lg text-muted-foreground">
                From contemporary ballet to high-energy hip-hop, our professional dancers deliver breathtaking performances that captivate audiences. Specializing in weddings, corporate events, and luxury celebrations across Dubai with diverse styles including traditional, cultural, and specialty acts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book Dancers Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#meet-our-dancers">
                    Meet Our Dancers
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Meet Our Dancers Section */}
          <section id="meet-our-dancers" className="py-20 -mx-4 lg:-mx-8 px-4 lg:px-8 bg-muted/30">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                  Meet Our <span className="gradient-text">Dancers</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From classical ballet to cutting-edge LED performances, our talented dancers bring expertise and passion to every event
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dancers.map((dancer, index) => (
                  <DancerCard key={index} dancer={dancer} />
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book Your Dancers
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
                <HelpCircle size={18} className="text-primary" />
                <span className="text-sm font-medium text-primary">FAQ</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Related Services */}
          <RelatedServices currentService="dancers" />

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dancers;
