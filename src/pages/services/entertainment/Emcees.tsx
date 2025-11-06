import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useImageLoader } from "@/hooks/useImageLoader";

const Emcees = () => {
  const emcees = [
    {
      name: "Sarah Williams",
      role: "Corporate Event Host",
      image: "/images/emcees/sarah-williams.webp",
      description: "Award-winning emcee specializing in corporate galas, product launches, and award ceremonies. Known for her eloquence and ability to engage diverse audiences.",
      tags: ["Corporate Events", "Gala Dinners", "Award Ceremonies", "Multilingual"]
    },
    {
      name: "Michael Chen",
      role: "Wedding & Event Specialist",
      image: "/images/emcees/michael-chen.webp",
      description: "Experienced wedding emcee bringing warmth and professionalism to special celebrations. Expert in managing event timelines and creating memorable moments.",
      tags: ["Weddings", "Private Parties", "Celebrations", "Bilingual"]
    },
    {
      name: "Layla Hassan",
      role: "Multilingual Host",
      image: "/images/emcees/layla-hassan.webp",
      description: "Dynamic emcee fluent in English, Arabic, and French. Specializes in international events and multicultural celebrations across Dubai.",
      tags: ["Multilingual", "International Events", "Cultural Events", "Arabic"]
    },
    {
      name: "James Robertson",
      role: "Conference Moderator",
      image: "/images/emcees/james-robertson.webp",
      description: "Professional conference host and panel moderator with extensive experience in tech summits, business forums, and industry conferences.",
      tags: ["Conferences", "Panel Moderation", "Tech Events", "B2B"]
    },
    {
      name: "Priya Sharma",
      role: "Entertainment Host",
      image: "/images/emcees/priya-sharma.webp",
      description: "Vibrant personality bringing energy to festivals, concerts, and entertainment events. Known for her interactive hosting style and crowd engagement.",
      tags: ["Festivals", "Concerts", "Entertainment", "High Energy"]
    },
    {
      name: "Omar Al-Mansouri",
      role: "Luxury Event Host",
      image: "/images/emcees/omar-almansouri.webp",
      description: "Sophisticated emcee for high-end galas, charity events, and exclusive gatherings. Brings elegance and poise to luxury celebrations.",
      tags: ["Luxury Events", "Charity Galas", "VIP Events", "Exclusive"]
    }
  ];

  const faqs = [
    {
      question: "How much does it cost to hire an emcee in Dubai?",
      answer: "Professional emcee services range from AED 2,000 for small private events to AED 8,000+ for large corporate galas and multi-day conferences. Pricing depends on event duration, complexity, and emcee experience. Contact us for a customized quote tailored to your specific event needs."
    },
    {
      question: "What's the difference between an emcee and a DJ?",
      answer: "An emcee (or MC/Master of Ceremonies) is a professional host who guides your event, makes announcements, introduces speakers, and keeps the program flowing smoothly. While DJs focus on music, emcees focus on event hosting and audience engagement. Many events benefit from having both - a DJ for entertainment and an emcee for professional hosting."
    },
    {
      question: "Do your emcees speak multiple languages?",
      answer: "Yes! We have bilingual and multilingual emcees fluent in English, Arabic, French, Hindi, and other languages. This is especially valuable for international corporate events and multicultural celebrations in Dubai. Let us know your language requirements and we'll match you with the perfect emcee."
    },
    {
      question: "How far in advance should I book an emcee?",
      answer: "We recommend booking at least 3-4 weeks in advance for standard events and 8-12 weeks for large corporate conferences, weddings, and peak season events (October-April in Dubai). Early booking ensures availability of your preferred emcee and allows time for proper event preparation."
    },
    {
      question: "Can the emcee help with event planning and scripting?",
      answer: "Absolutely! Our professional emcees work closely with you to understand your event flow, help create detailed run sheets, and prepare customized scripts. They also excel at adapting on-the-fly to keep your event running smoothly if unexpected changes occur. Pre-event consultation is included with all bookings."
    },
    {
      question: "What types of events do your emcees specialize in?",
      answer: "Our emcees specialize in various event types including corporate galas, awards ceremonies, weddings, product launches, conferences, charity events, and private celebrations. Each emcee has specific expertise - we'll match you with an emcee whose experience and style align perfectly with your event requirements and audience."
    }
  ];

  const heroImage = "/images/services/emcees-bg.webp";

  return (
    <>
      <Helmet>
        <title>Professional Emcees Dubai | Wedding & Corporate Event Hosts | Box Entertainment</title>
        <meta name="description" content="Book experienced emcees and professional hosts in Dubai for weddings, corporate galas, and events. Multilingual MCs with expertise in audience engagement and event management." />
        <link rel="canonical" href="https://boxentertainment.ae/services/entertainment/emcees" />
        <meta property="og:title" content="Professional Emcees Dubai | Box Entertainment" />
        <meta property="og:description" content="Book experienced emcees and professional hosts for your Dubai event. Corporate galas, weddings, and conferences." />
        <meta property="og:image" content="https://boxentertainment.ae/images/services/emcees-bg.webp" />
        <meta property="og:url" content="https://boxentertainment.ae/services/entertainment/emcees" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Emcees Dubai | Box Entertainment" />
        <meta name="twitter:description" content="Book experienced emcees and professional hosts for your Dubai event." />
        <meta name="twitter:image" content="https://boxentertainment.ae/images/services/emcees-bg.webp" />
      </Helmet>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Professional Emcees in Dubai",
          description: "Professional emcee and MC services for corporate events, weddings, and galas in Dubai",
          serviceType: ["Wedding Emcee", "Corporate Event Host", "Conference Moderator", "Gala MC"],
          areaServed: {
            "@type": "City",
            name: "Dubai",
            containedInPlace: {
              "@type": "Country",
              name: "UAE"
            }
          },
          provider: {
            "@type": "Organization",
            name: "Box Entertainment",
            url: "https://boxentertainment.ae"
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "AED"
          }
        }}
      />

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/services" },
              { label: "Entertainment", href: "/services/entertainment" },
              { label: "Emcees" }
            ]} 
          />

          {/* Hero Section */}
          <section className="lg:grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl mb-8 lg:mb-0">
              <img
                src={heroImage}
                alt="Professional emcee hosting luxury Dubai event"
                className="w-full h-full object-cover"
                loading="eager"
              />
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  Professional <span className="gradient-text">Emcees</span>
                </h1>
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="hidden lg:block text-5xl md:text-6xl font-heading leading-tight">
                Professional <span className="gradient-text">Emcees</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Elevate your Dubai event with experienced professional hosts
              </p>
              <p className="text-lg text-muted-foreground">
                From corporate galas to elegant weddings, our professional emcees bring expertise and charisma to keep your event flowing seamlessly. With a natural flair for audience engagement and time management, we ensure every moment is memorable and professionally executed.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book an Emcee Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#meet-our-emcees">
                    Meet Our Emcees
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Meet Our Emcees Section */}
          <section id="meet-our-emcees" className="py-20 -mx-4 lg:-mx-8 px-4 lg:px-8 bg-muted/30">
            <div className="container mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="font-heading text-4xl md:text-5xl font-bold">
                  Meet Our <span className="gradient-text">Emcees</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Professional hosts with expertise in corporate events, weddings, and galas
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {emcees.map((emcee, index) => (
                  <EmceeCard key={index} emcee={emcee} />
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book Your Emcee Today
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection 
            questions={faqs}
            title="Frequently Asked Questions About Emcees"
          />

          {/* Related Services */}
          <RelatedServices currentService="emcee" />

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Ready to Elevate Your Event?
              </h2>
              <p className="text-lg text-muted-foreground">
                Contact us today to book a professional emcee for your Dubai event
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

// Hero Image Component with Loading State
const HeroImage = ({ src, alt }: { src: string; alt: string }) => {
  const { isLoaded, error } = useImageLoader(src);

  return (
    <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
      {!isLoaded && (
        <Skeleton className="w-full h-full" />
      )}
      {error ? (
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Image unavailable</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
        />
      )}
    </div>
  );
};

// Emcee Card Component
interface EmceeCardProps {
  emcee: {
    name: string;
    role: string;
    image: string;
    description: string;
    tags: string[];
  };
}

const EmceeCard = ({ emcee }: EmceeCardProps) => {
  const { isLoaded, error } = useImageLoader(emcee.image);

  return (
    <Card className="overflow-hidden hover-lift group backdrop-blur-sm bg-card/50">
      <div className="relative aspect-[3/4] overflow-hidden">
        {!isLoaded && (
          <Skeleton className="w-full h-full" />
        )}
        {error ? (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Image unavailable</p>
          </div>
        ) : (
          <>
            <img
              src={emcee.image}
              alt={`${emcee.name} - Professional Emcee`}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isLoaded ? 'opacity-100 group-hover:scale-110' : 'opacity-0'
              }`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-heading text-2xl font-bold mb-1">{emcee.name}</h3>
              <p className="text-white/90">{emcee.role}</p>
            </div>
          </>
        )}
      </div>
      <CardContent className="p-6 space-y-4">
        <p className="text-muted-foreground">{emcee.description}</p>
        <div className="flex flex-wrap gap-2">
          {emcee.tags.map((tag, index) => (
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

export default Emcees;
