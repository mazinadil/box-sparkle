import { Helmet } from "react-helmet-async";
import { Music, Camera, Lightbulb, Mic, Sparkles, PartyPopper, Headphones, Grid3x3 } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import StructuredData from "@/components/StructuredData";

const Services = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Entertainment Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Box Entertainment",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Entertainment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ Services",
            "image": "https://boxentertainment.ae/images/services/dj-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Photo Booth Rental",
            "image": "https://boxentertainment.ae/images/services/photobooth-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sound & Lighting Equipment",
            "image": "https://boxentertainment.ae/images/services/sound-lighting-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Magicians",
            "image": "https://boxentertainment.ae/images/services/magicians-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dancers",
            "image": "https://boxentertainment.ae/images/services/dancers-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Singers & Bands",
            "image": "https://boxentertainment.ae/images/services/singers-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Silent Headsets",
            "image": "https://boxentertainment.ae/images/services/silent-headsets-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LED Letters & Dance Floors",
            "image": "https://boxentertainment.ae/images/services/led-dancefloor-bg.webp"
          }
        }
      ]
    }
  };

  const entertainmentServices = [
    {
      icon: Music,
      title: "DJs",
      description: "Professional DJs for all genres and event types",
      link: "/services/entertainment",
      backgroundImage: "/images/services/dj-bg.webp",
      backgroundAlt: "Professional DJ performing at luxury event in Dubai with colorful stage lights"
    },
    {
      icon: Sparkles,
      title: "Magicians",
      description: "World-class illusionists and close-up magicians",
      link: "/services/entertainment",
      backgroundImage: "/images/services/magicians-bg.webp",
      backgroundAlt: "Professional magician performing close-up magic at elegant Dubai event"
    },
    {
      icon: PartyPopper,
      title: "Dancers",
      description: "Professional dance troupes and solo performers",
      link: "/services/entertainment",
      backgroundImage: "/images/services/dancers-bg.webp",
      backgroundAlt: "Professional dancers performing at luxury event in Dubai"
    },
    {
      icon: Mic,
      title: "Singers & Bands",
      description: "Live music performances for every occasion",
      link: "/services/entertainment",
      backgroundImage: "/images/services/singers-bg.webp",
      backgroundAlt: "Live band performing on stage at premium event in Dubai"
    }
  ];

  const equipmentServices = [
    {
      icon: Camera,
      title: "Photo Booths",
      description: "360°, Mirror, and Original photo booth experiences",
      link: "/services/photobooth",
      backgroundImage: "/images/services/photobooth-bg.webp",
      backgroundAlt: "360-degree photo booth at luxury event in Dubai with LED ring lights"
    },
    {
      icon: Lightbulb,
      title: "Sound & Lighting",
      description: "Professional audio-visual equipment hire",
      link: "/services/sound-lighting",
      backgroundImage: "/images/services/sound-lighting-bg.webp",
      backgroundAlt: "Professional stage lighting and sound equipment setup in Dubai"
    },
    {
      icon: Headphones,
      title: "Silent Headsets",
      description: "Silent disco and corporate headset solutions",
      link: "/services/silent-headsets",
      backgroundImage: "/images/services/silent-headsets-bg.webp",
      backgroundAlt: "Silent disco party with glowing LED wireless headphones in Dubai"
    },
    {
      icon: Grid3x3,
      title: "LED Letters & Dance Floors",
      description: "Light-up letters and premium dance floor hire",
      link: "/services/dance-floors",
      backgroundImage: "/images/services/led-dancefloor-bg.webp",
      backgroundAlt: "Illuminated LED dance floor with LOVE letters at luxury wedding in Dubai"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Entertainment Services Dubai | DJs, Photo Booths & Sound Lighting | Box Entertainment</title>
        <meta name="description" content="Professional entertainment services in Dubai: DJs, Magicians, Photo Booths, Sound & Lighting, Dancers, Singers. Complete event solutions for weddings, corporate events & parties." />
        <link rel="canonical" href="https://boxentertainment.ae/services" />
      </Helmet>
      
      <StructuredData data={serviceSchema} />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive entertainment solutions for every type of event across Dubai
          </p>
        </div>

        {/* Entertainment Services */}
        <section className="mb-20">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              Entertainment <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Talented performers to bring your event to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {entertainmentServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </section>

        {/* Equipment & Technical Services */}
        <section className="mb-20">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              Equipment & <span className="text-secondary">Technical Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              State-of-the-art equipment for professional events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift">
              <h3 className="font-heading text-xl font-semibold mb-2">Outdoor Cinema</h3>
              <p className="text-muted-foreground text-sm">Big screen movie experiences under the stars</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift">
              <h3 className="font-heading text-xl font-semibold mb-2">Karaoke Systems</h3>
              <p className="text-muted-foreground text-sm">Professional karaoke equipment and song libraries</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift">
              <h3 className="font-heading text-xl font-semibold mb-2">Festoon Lighting</h3>
              <p className="text-muted-foreground text-sm">Beautiful fairy and festoon lights for ambiance</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift">
              <h3 className="font-heading text-xl font-semibold mb-2">Emcees</h3>
              <p className="text-muted-foreground text-sm">Professional hosts for corporate and private events</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift">
              <h3 className="font-heading text-xl font-semibold mb-2">Comedians</h3>
              <p className="text-muted-foreground text-sm">Stand-up comedy for entertainment and events</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-lift">
              <h3 className="font-heading text-xl font-semibold mb-2">Saxophonists</h3>
              <p className="text-muted-foreground text-sm">Live saxophone performances for elegant events</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Need a Custom <span className="gradient-text">Package?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We can create bespoke entertainment packages tailored to your specific needs and budget
          </p>
          <a href="/contact">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 hover:scale-105 transition-all">
              Request Custom Quote
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
