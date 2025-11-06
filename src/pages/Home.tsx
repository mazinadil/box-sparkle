import { Helmet } from "react-helmet-async";
import { Camera, Lightbulb, PartyPopper, Sparkles, Star, Quote, Headphones, Grid3x3, Film, Mic2 } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import StructuredData from "@/components/StructuredData";
import FAQSection from "@/components/FAQSection";
import { useState, useEffect } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const servicesSection = useIntersectionObserver({ threshold: 0, rootMargin: '100px', triggerOnce: true });
  const clientsSection = useIntersectionObserver({ threshold: 0.25 });
  const testimonialsSection = useIntersectionObserver({ threshold: 0.25 });

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Box Entertainment",
    "image": "https://boxentertainment.ae/assets/box-logo.webp",
    "url": "https://boxentertainment.ae",
    "telephone": "+971501234567",
    "email": "info@boxentertainment.ae",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  const services = [
    {
      icon: PartyPopper,
      title: "Entertainment",
      description: "DJs, Magicians, Dancers, Bands & Live Performers",
      link: "/services/entertainment",
      backgroundImage: "/images/services/dj-bg.webp",
      backgroundAlt: "Professional entertainment performers including DJs, magicians, and dancers at luxury Dubai events"
    },
    {
      icon: Camera,
      title: "Photo Booths",
      description: "360° booths and mirror photo experiences",
      link: "/services/photobooth",
      backgroundImage: "/images/services/photobooth-bg.webp",
      backgroundAlt: "Modern 360-degree photo booth setup at luxury Dubai event"
    },
    {
      icon: Lightbulb,
      title: "Sound & Lighting",
      description: "Professional audio-visual equipment",
      link: "/services/sound-lighting",
      backgroundImage: "/images/services/sound-lighting-bg.webp",
      backgroundAlt: "Professional stage lighting and sound equipment at Dubai venue"
    },
    {
      icon: Film,
      title: "Outdoor Cinema",
      description: "Big screen movie experiences under the stars",
      link: "/services/outdoor-cinema",
      backgroundImage: "/images/services/outdoor-cinema-bg.webp",
      backgroundAlt: "Outdoor cinema setup with large screen and seating at Dubai event under the stars"
    },
    {
      icon: Mic2,
      title: "Karaoke",
      description: "Professional karaoke systems and song libraries",
      link: "/services/karaoke",
      backgroundImage: "/images/services/karaoke-bg.webp",
      backgroundAlt: "Professional karaoke system setup with microphones and screens at Dubai party"
    },
    {
      icon: Headphones,
      title: "Silent Headsets",
      description: "Silent disco equipment and experiences",
      link: "/services/silent-headsets",
      backgroundImage: "/images/services/silent-headsets-bg.webp",
      backgroundAlt: "Silent disco party with wireless headphones at Dubai event"
    },
    {
      icon: Grid3x3,
      title: "Dance Floors",
      description: "LED and traditional dance floor rentals",
      link: "/services/dance-floors",
      backgroundImage: "/images/services/dance-floors-bg.webp",
      backgroundAlt: "Elegant dance floor setup with professional lighting at luxury Dubai venue"
    },
    {
      icon: Sparkles,
      title: "LED Light Up Letters",
      description: "Illuminated letters and numbers for events",
      link: "/services/led-letters",
      backgroundImage: "/images/services/led-letters-bg.webp",
      backgroundAlt: "Illuminated LED letters spelling LOVE at luxury Dubai wedding venue"
    }
  ];

  const clients = [
    {
      name: "Coca-Cola",
      logo: "/images/clients/coca-cola.jpg",
      alt: "Coca-Cola - Global beverage brand client of Box Entertainment Dubai"
    },
    {
      name: "Hilton Dubai",
      logo: "/images/clients/hilton.jpg",
      alt: "Hilton Dubai Al Habtoor City - Luxury hotel client of Box Entertainment"
    },
    {
      name: "Porsche",
      logo: "/images/clients/porsche.jpg",
      alt: "Porsche - Premium automotive brand client of Box Entertainment Dubai"
    },
    {
      name: "Philips",
      logo: "/images/clients/philips.jpg",
      alt: "Philips - International technology client of Box Entertainment"
    },
    {
      name: "Nakheel",
      logo: "/images/clients/nakheel.jpg",
      alt: "Nakheel - Leading Dubai property developer client of Box Entertainment"
    },
    {
      name: "Mövenpick Hotel",
      logo: "/images/clients/movenpick.jpg",
      alt: "Mövenpick Hotel Jumeirah Beach - Luxury hospitality client of Box Entertainment"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Wedding Client",
      content: "Box Entertainment made our wedding absolutely magical! The DJ was incredible and the photo booth was a huge hit with all our guests.",
      date: "2024-10-15"
    },
    {
      name: "Michael Johnson",
      role: "Corporate Events Manager",
      content: "We've worked with Box Entertainment on multiple corporate events. Their professionalism and attention to detail is outstanding.",
      date: "2024-09-22"
    },
    {
      name: "Fatima Al-Rashid",
      role: "Private Event",
      content: "The magician they provided was phenomenal! Our guests are still talking about it weeks later. Highly recommended!",
      date: "2024-08-30"
    }
  ];

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Box Entertainment Dubai - Event Showcase",
    "description": "Professional entertainment services for events in Dubai featuring DJs, magicians, photo booths, sound & lighting, and live performances",
    "thumbnailUrl": "https://boxentertainment.ae/images/hero-poster.webp",
    "uploadDate": "2025-01-01T00:00:00Z",
    "contentUrl": "https://boxentertainment.ae/videos/box-slider.mp4",
    "duration": "PT30S",
    "embedUrl": "https://boxentertainment.ae/"
  };

  const faqQuestions = [
    {
      question: "What services does Box Entertainment offer?",
      answer: "We offer comprehensive entertainment services including DJs, live bands, magicians, dancers, photo booths, sound & lighting, silent disco headsets, outdoor cinema, karaoke systems, LED letters, and dance floors. We cater to weddings, corporate events, private parties, and special occasions across Dubai."
    },
    {
      question: "How much does event entertainment cost in Dubai?",
      answer: "Pricing varies based on the service, event duration, and specific requirements. Our packages typically range from AED 2,000 to AED 15,000. We offer customized quotes tailored to your event needs and budget. Contact us for a detailed consultation and pricing."
    },
    {
      question: "Do you provide services for weddings and corporate events?",
      answer: "Yes! We specialize in both weddings and corporate events. Our team has extensive experience creating memorable experiences for intimate weddings, grand receptions, corporate galas, product launches, team building events, and conferences. We customize our services to match your event's theme and requirements."
    },
    {
      question: "What areas in Dubai do you cover?",
      answer: "We provide services throughout Dubai and surrounding emirates including Abu Dhabi, Sharjah, and Ajman. We service all major venues, hotels, beaches, and private locations. Our team handles delivery, setup, and breakdown at your chosen venue."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking 2-3 months in advance for peak seasons (October to April) and major holidays. For last-minute bookings, contact us directly as we often have availability. Popular dates like New Year's Eve and Valentine's Day should be booked 4-6 months ahead."
    },
    {
      question: "Do you provide setup and breakdown services?",
      answer: "Absolutely! All our services include professional delivery, setup, technical support during the event, and post-event breakdown and collection. Our experienced technicians ensure everything runs smoothly so you can focus on enjoying your event."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Box Entertainment Dubai | Premium Events & Entertainment Services</title>
        <meta name="description" content="Leading entertainment and events company in Dubai. DJs, Magicians, Photo Booths, Sound & Lighting, Wedding & Corporate Events. Book now for unforgettable experiences." />
        <link rel="canonical" href="https://boxentertainment.ae/" />
      </Helmet>
      
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={videoSchema} />
      {testimonials.map((testimonial, index) => {
        const reviewSchema = {
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Box Entertainment",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            }
          },
          "author": {
            "@type": "Person",
            "name": testimonial.name
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": testimonial.content,
          "datePublished": testimonial.date
        };
        return <StructuredData key={index} data={reviewSchema} />;
      })}
      
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 lg:px-8 py-20" ref={servicesSection.ref}>
        <div className={`text-center mb-12 space-y-4 transition-all duration-700 ${servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
            <Sparkles size={18} className="text-[#D25C84]" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Premium Entertainment <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we deliver exceptional entertainment experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`transition-all duration-500 ${servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * (isMobile ? 50 : 100)}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-card/30 backdrop-blur-sm py-16" ref={clientsSection.ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              Trusted by Dubai's <span className="text-primary">Leading Brands</span>
            </h3>
            <p className="text-muted-foreground">Delivering excellence for over 500+ clients</p>
          </div>
          
            <div className="grid grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className={`relative flex items-center justify-center p-3 sm:p-4 md:p-6 bg-card/50 rounded-lg border border-border/50 hover-lift transition-all duration-500 ${clientsSection.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} group cursor-pointer overflow-hidden`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                <img 
                  src={client.logo} 
                  alt={client.alt}
                  className="w-full h-full max-w-[180px] max-h-[180px] sm:max-w-[200px] sm:max-h-[200px] md:max-w-[150px] md:max-h-[150px] object-contain rounded-xl transition-all duration-300 relative z-10"
                  loading="lazy"
                  width="180"
                  height="180"
                />
                  <div className="absolute inset-0 bg-transparent group-hover:backdrop-grayscale group-active:backdrop-grayscale backdrop-brightness-100 group-hover:backdrop-brightness-75 group-active:backdrop-brightness-70 transition-all duration-300 rounded-lg pointer-events-none"></div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20" ref={testimonialsSection.ref}>
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2">
            <Star size={18} className="text-[#D25C84]" />
            <span className="text-sm font-medium text-secondary">Testimonials</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`hover-lift border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 ${testimonialsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="text-[#D25C84] w-10 h-10 opacity-50" />
                <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
                <div className="flex gap-1 my-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="pt-4 border-t border-border/50">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 lg:px-8">
        <FAQSection questions={faqQuestions} />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Card className="relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
          <CardContent className="relative p-12 text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Ready to Create <span className="gradient-text">Unforgettable Memories?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team today and let's discuss how we can make your event extraordinary
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 hover:scale-105 transition-all">
                  Book Consultation
                </button>
              </a>
              <a href="/contact">
                <button className="inline-flex items-center justify-center px-8 py-4 border border-border bg-card/50 rounded-md font-semibold hover:bg-muted transition-colors">
                  View Portfolio
                </button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
