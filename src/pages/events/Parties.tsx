import { Helmet } from "react-helmet-async";
import { Castle, Cake, Paintbrush, PartyPopper, Table, Camera, Lightbulb, Wand, Grid3x3, Sparkles, Cloud, Home, Gift, Film, IceCream, Baby, Drama, Palette, Music, CircleDot, UserCircle, Headphones, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useImageLoader } from "@/hooks/useImageLoader";

const Parties = () => {
  const { ref: heroRef, isVisible: heroInView } = useIntersectionObserver({ threshold: 0.1 });
  const heroImageLoaded = useImageLoader("/images/events/parties-hero.webp");

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "eventType": "Birthday Party",
    "name": "Birthday Party Entertainment Services Dubai",
    "description": "Complete birthday party entertainment services in Dubai including bouncy castles, magicians, photo booths, DJs, and more for unforgettable celebrations",
    "organizer": {
      "@type": "Organization",
      "name": "Box Entertainment",
      "url": "https://boxentertainment.ae"
    },
    "location": {
      "@type": "Place",
      "name": "Dubai",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    }
  };

  const services = [
    {
      icon: Castle,
      title: "Bouncy Castle",
      description: "Fun inflatable castles and slides perfect for kids' parties",
      link: null
    },
    {
      icon: Cake,
      title: "Birthday Cakes",
      description: "Custom designed celebration cakes for every theme and taste",
      link: null
    },
    {
      icon: Paintbrush,
      title: "Face Painter",
      description: "Professional face painting artists creating magical designs for children",
      link: null
    },
    {
      icon: PartyPopper,
      title: "Balloons",
      description: "Stunning balloon decorations, arches, and bouquets in any color scheme",
      link: null
    },
    {
      icon: Table,
      title: "Table & Stool Hire",
      description: "Quality furniture rental for guests of all ages and party sizes",
      link: null
    },
    {
      icon: Camera,
      title: "Photographer / Videographer",
      description: "Professional photography and videography to capture every special moment",
      link: null
    },
    {
      icon: Camera,
      title: "Photo Booth",
      description: "Interactive photo booths with instant prints and fun props",
      link: "/services/photobooth"
    },
    {
      icon: Lightbulb,
      title: "LED Lighting",
      description: "Dynamic LED uplighting and effects to transform any venue",
      link: "/services/sound-lighting"
    },
    {
      icon: Wand,
      title: "Magicians",
      description: "Captivating magic shows and close-up magic for all ages",
      link: "/services/entertainment/magicians"
    },
    {
      icon: Grid3x3,
      title: "LED Dance Floors",
      description: "Stunning illuminated dance floors that become the party centerpiece",
      link: "/services/dance-floors"
    },
    {
      icon: Sparkles,
      title: "Festoon & Fairy Lights",
      description: "Elegant festoon and fairy light installations for magical ambiance",
      link: "/services/sound-lighting/festoon-lights"
    },
    {
      icon: Cloud,
      title: "Fog Machine",
      description: "Atmospheric fog effects for dramatic entrances and dance floor excitement",
      link: null
    },
    {
      icon: Home,
      title: "Tents",
      description: "Weather-proof tent solutions for outdoor birthday celebrations",
      link: null
    },
    {
      icon: Gift,
      title: "Piñata",
      description: "Colorful piñatas filled with treats for traditional party fun",
      link: null
    },
    {
      icon: Film,
      title: "Outdoor Cinema",
      description: "Big screen movie experiences under the stars for unique celebrations",
      link: "/services/outdoor-cinema"
    },
    {
      icon: IceCream,
      title: "Popcorn & Candyfloss",
      description: "Fresh popcorn and candyfloss machines with unlimited servings",
      link: null
    },
    {
      icon: Baby,
      title: "Soft Play",
      description: "Safe soft play equipment for toddlers and young children",
      link: null
    },
    {
      icon: Drama,
      title: "Puppet Show",
      description: "Interactive puppet performances that entertain and engage kids",
      link: null
    },
    {
      icon: Palette,
      title: "Arts and Crafts",
      description: "Supervised craft stations where children create take-home masterpieces",
      link: null
    },
    {
      icon: Music,
      title: "DJ Services",
      description: "Professional DJs playing age-appropriate music and hosting party games",
      link: "/services/entertainment/djs"
    },
    {
      icon: CircleDot,
      title: "Bubble Machine",
      description: "Magical bubble machines creating enchanting party atmosphere",
      link: null
    },
    {
      icon: UserCircle,
      title: "Mascots",
      description: "Popular character mascots for meet-and-greets and entertainment",
      link: null
    },
    {
      icon: Headphones,
      title: "Silent Headsets",
      description: "Silent disco headsets for noise-conscious venues and unique party experiences",
      link: "/services/silent-headsets"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "All-in-One Party Solution",
      description: "From entertainment to decorations, we handle everything so you can enjoy the celebration"
    },
    {
      icon: CheckCircle,
      title: "Experienced Party Professionals",
      description: "Over 1000+ successful birthday parties across Dubai with delighted families"
    },
    {
      icon: CheckCircle,
      title: "Flexible Packages",
      description: "Custom packages to match your theme, budget, and venue requirements"
    },
    {
      icon: CheckCircle,
      title: "Safety First",
      description: "All equipment meets safety standards with professional supervision throughout"
    }
  ];

  const faqQuestions = [
    {
      question: "What birthday party packages do you offer in Dubai?",
      answer: "We offer fully customizable birthday party packages including entertainment (DJs, magicians, puppeteers), decorations (balloons, lighting), activities (bouncy castles, face painting, photo booths), catering equipment (popcorn, candyfloss machines), and more. Each package is tailored to your theme, age group, and budget."
    },
    {
      question: "How far in advance should I book entertainment for a birthday party?",
      answer: "We recommend booking at least 2-4 weeks in advance for most services, especially during peak seasons (October to May) and weekends. However, we often accommodate last-minute requests depending on availability. Contact us as early as possible to secure your preferred date and services."
    },
    {
      question: "Do you provide entertainment for both children and adult birthday parties?",
      answer: "Yes! We cater to all ages from 1st birthdays to milestone celebrations like 21st, 30th, 50th birthdays and beyond. Our services range from kid-friendly bouncy castles and puppet shows to sophisticated DJ setups, elegant lighting, and photo booth experiences perfect for adult celebrations."
    },
    {
      question: "Can you customize services to match a specific party theme?",
      answer: "Absolutely! We specialize in themed parties. Whether it's princesses, superheroes, tropical luau, retro disco, or any custom theme you envision, we can coordinate entertainment, decorations, lighting colors, and activities to match perfectly. Our team works with you to bring your vision to life."
    },
    {
      question: "What venues do you service for birthday parties in Dubai?",
      answer: "We service all types of venues across Dubai including private villas, community centers, hotel ballrooms, beach clubs, parks, restaurants, and yacht parties. Our equipment is adaptable to both indoor and outdoor settings, and we handle all setup logistics."
    },
    {
      question: "Do you provide setup and cleanup services?",
      answer: "Yes, our team handles complete setup before your party starts and full cleanup after the event ends. You don't need to worry about any technical aspects - just enjoy celebrating with your guests while we take care of everything."
    },
    {
      question: "What's included in your birthday party packages?",
      answer: "Package inclusions vary based on your selections but typically include equipment rental, professional staff/operators, setup and breakdown, and supervision throughout the event. Specific services like photo booth props, DJ music library, lighting effects, and activity supplies are included with each respective service."
    },
    {
      question: "Can you accommodate both indoor and outdoor birthday parties?",
      answer: "Yes, all our services are available for both indoor and outdoor venues. For outdoor events, we use weather-resistant equipment and can provide tents or alternative arrangements. We also have backup plans in place for unexpected weather changes."
    },
    {
      question: "Do you offer entertainment for milestone birthdays (1st, 16th, 21st, 50th)?",
      answer: "Definitely! We love celebrating milestones. For 1st birthdays we focus on safe, sensory-friendly activities. For sweet 16s and 21st birthdays we create trendy, Instagram-worthy experiences. For 50th and beyond, we offer sophisticated entertainment and elegant setups that make the celebration truly special."
    },
    {
      question: "What safety measures do you have in place for children's parties?",
      answer: "Safety is our top priority. All inflatable equipment is secured properly and supervised by trained staff. Face paints are hypoallergenic and non-toxic. Electrical equipment is tested and safely installed. Our team is trained in child safety protocols, and we maintain comprehensive insurance coverage for all our services."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Birthday Party Entertainment Dubai | Kids & Adult Party Services | Box Entertainment</title>
        <meta name="description" content="Complete birthday party entertainment in Dubai: bouncy castles, magicians, DJs, photo booths, face painters, and more. Perfect for kids and adult celebrations. Custom packages available." />
        <meta name="keywords" content="birthday party Dubai, kids party entertainment, birthday DJ Dubai, bouncy castle rental, party magician, birthday photo booth, children's party Dubai, adult birthday party" />
        <link rel="canonical" href="https://boxentertainment.ae/events/parties" />
        <meta property="og:title" content="Birthday Party Entertainment Dubai | Box Entertainment" />
        <meta property="og:description" content="Make birthdays unforgettable with Dubai's best party entertainment. Bouncy castles, magicians, DJs, photo booths, and complete party packages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boxentertainment.ae/events/parties" />
        <meta property="og:image" content="https://boxentertainment.ae/images/events/parties-hero.webp" />
      </Helmet>
      
      <StructuredData data={eventSchema} />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {heroImageLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
            style={{ backgroundImage: "url('/images/events/parties-hero.webp')" }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-12">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: "Events", href: "/events" },
              { label: "Birthday Parties" }
            ]} />
          </div>

          <div className="text-center text-white space-y-6 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Birthday Party <span className="gradient-text">Entertainment</span> Dubai
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Create magical birthday memories with Dubai's most trusted party entertainment services. From bouncy castles to magicians, we make every celebration unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Enquire Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#our-services">Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-20">
        {/* Our Services Section */}
        <section id="our-services" className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Party Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to create the perfect birthday celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const cardContent = (
                <Card className="h-full hover-lift border-border/50 bg-card/50 backdrop-blur-sm transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <ServiceIcon className="w-6 h-6 text-[#D25C84]" />
                    </div>
                    <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );

              return service.link ? (
                <Link key={index} to={service.link} className="block">
                  {cardContent}
                </Link>
              ) : (
                <div key={index}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Why Choose <span className="gradient-text">Box Entertainment</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dubai's trusted partner for unforgettable birthday celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <Card key={index} className="hover-lift border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <BenefitIcon className="w-6 h-6 text-[#D25C84]" />
                    </div>
                    <CardTitle className="font-heading text-2xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* FAQs Section */}
        <FAQSection questions={faqQuestions} title="Birthday Party FAQs" />

        {/* Related Services Section */}
        <section className="mt-20">
          <RelatedServices currentService="birthday-parties" />
        </section>

        {/* Final CTA Section */}
        <section className="mt-20 text-center bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan the <span className="gradient-text">Perfect Birthday Party?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a celebration your guests will be talking about for years to come
          </p>
          <Link to="/contact">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 hover:scale-105 transition-all">
              Get Your Custom Quote
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Parties;
