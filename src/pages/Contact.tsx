import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StructuredData from "@/components/StructuredData";

const Contact = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Box Entertainment",
      "telephone": "+971501234567",
      "email": "info@boxentertainment.ae",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Contact Box Entertainment Dubai | Book Your Event Today</title>
        <meta name="description" content="Contact Box Entertainment Dubai for event bookings and inquiries. Phone: +971 50 123 4567 | Email: info@boxentertainment.ae. Get instant quotes via WhatsApp." />
        <link rel="canonical" href="https://boxentertainment.ae/contact" />
        <script src="https://link.msgsndr.com/js/form_embed.js" />
      </Helmet>
      
      <StructuredData data={contactSchema} />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to make your event extraordinary? Contact us today for a personalized consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0" style={{ minHeight: '660px' }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/JjoT06LwkZ8Lfe12GAle"
                style={{ width: '100%', height: '100%', minHeight: '660px', border: 'none', borderRadius: '3px' }}
                id="inline-JjoT06LwkZ8Lfe12GAle" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="660"
                data-layout-iframe-id="inline-JjoT06LwkZ8Lfe12GAle"
                data-form-id="JjoT06LwkZ8Lfe12GAle"
                title="Form 0"
              />
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Phone</h3>
                    <a href="tel:+971501234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +971 50 123 4567
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 9am-8pm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Email</h3>
                    <a href="mailto:info@boxentertainment.ae" className="text-muted-foreground hover:text-primary transition-colors">
                      info@boxentertainment.ae
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">24/7 email support</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      Dubai, United Arab Emirates
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Serving all of Dubai & UAE</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
