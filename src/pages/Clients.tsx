import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Hotel, Users, Star, Trophy, Heart } from "lucide-react";
import StructuredData from "@/components/StructuredData";

const Clients = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Box Entertainment",
    "description": "Trusted by leading brands, hotels, and organizations across Dubai for exceptional event entertainment",
    "url": "https://boxentertainment.ae/clients",
    "logo": "https://boxentertainment.ae/box-logo.png"
  };

  const clientCategories = [
    {
      icon: Building2,
      title: "Corporate Clients",
      description: "Leading tech companies, financial institutions, multinational corporations, and government entities trust us for their events.",
      count: "200+"
    },
    {
      icon: Hotel,
      title: "Hospitality Partners",
      description: "5-star hotels, luxury resorts, premium venues, and beach clubs choose us for consistent excellence.",
      count: "50+"
    },
    {
      icon: Users,
      title: "Private Events",
      description: "High-profile weddings, celebrity events, exclusive parties, and VIP gatherings made unforgettable.",
      count: "1000+"
    }
  ];

  const testimonials = [
    {
      quote: "Box Entertainment transformed our annual corporate gala into an unforgettable experience. Their professionalism and attention to detail are unmatched.",
      author: "Sarah Johnson",
      position: "Events Director",
      company: "Fortune 500 Company"
    },
    {
      quote: "We've partnered with Box Entertainment for over 5 years. Their consistency, quality, and innovative entertainment solutions make them our go-to provider.",
      author: "Ahmed Al Mansouri",
      position: "General Manager",
      company: "Luxury Hotel Dubai"
    },
    {
      quote: "From planning to execution, Box Entertainment exceeded all expectations for our wedding. They made our special day truly magical.",
      author: "Emily & James",
      position: "Wedding Couple",
      company: "Private Client"
    }
  ];

  const stats = [
    {
      icon: Star,
      number: "10+",
      label: "Years Experience"
    },
    {
      icon: Trophy,
      number: "500+",
      label: "Prestigious Clients"
    },
    {
      icon: Heart,
      number: "5000+",
      label: "Successful Events"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Clients | Box Entertainment Dubai - Trusted by Leading Brands</title>
        <meta 
          name="description" 
          content="Discover the leading brands, hotels, and organizations that trust Box Entertainment for their events in Dubai. Join our prestigious client list."
        />
        <link rel="canonical" href="https://boxentertainment.ae/clients" />
      </Helmet>

      <StructuredData data={organizationSchema} />

      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Our <span className="gradient-text">Clients</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Trusted by Dubai's most prestigious brands, hotels, and organizations to deliver exceptional entertainment experiences
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-card/50 to-background border-y border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-border/50 backdrop-blur-sm">
                  <CardContent className="pt-8 pb-8">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <div className="text-4xl lg:text-5xl font-heading font-bold mb-2 gradient-text">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Categories */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
                Who We <span className="gradient-text">Serve</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From corporate giants to intimate celebrations, we bring expertise and excellence to every event
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clientCategories.map((category, index) => (
                <Card key={index} className="group hover-lift transition-all duration-300 border-border/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-heading font-bold mb-2 text-primary">
                      {category.count}
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
                Client <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear what our clients have to say about their experiences with Box Entertainment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <svg className="w-10 h-10 text-primary/30" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-6c0-2.2 1.8-4 4-4V8z"/>
                      </svg>
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-sm text-primary">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
              Join Our Prestigious <span className="gradient-text">Client List</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the same level of excellence that has made us Dubai's trusted entertainment partner
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Clients;
