import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Terms of Service | Box Entertainment Dubai</title>
        <meta name="description" content="Terms of Service for Box Entertainment. Read our terms and conditions for using our entertainment services in Dubai." />
        <link rel="canonical" href="https://boxentertainment.ae/terms" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} />

        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <div>
            <p className="text-muted-foreground mb-6">
              <strong>Last Updated:</strong> October 28, 2025
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms") govern your use of Box Entertainment's services and website. By booking our services or using our website, you agree to these Terms.
            </p>
          </div>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">1. Services</h2>
            <div className="text-muted-foreground space-y-3">
              <p>
                Box Entertainment provides professional entertainment services including but not limited to: DJs, live performers, photo booths, sound and lighting equipment, and event production services in Dubai and surrounding areas.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">2. Booking and Payment</h2>
            <div className="text-muted-foreground space-y-3">
              <h3 className="font-semibold text-lg text-foreground">Booking Confirmation</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>All bookings are subject to availability and confirmation</li>
                <li>A deposit is required to secure your booking date</li>
                <li>Final payment is due 7 days before the event unless otherwise agreed</li>
              </ul>
              
              <h3 className="font-semibold text-lg text-foreground mt-4">Payment Terms</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Deposit: 50% of total service cost (non-refundable)</li>
                <li>Balance: Due 7 days before event date</li>
                <li>Accepted payment methods: Bank transfer, credit card, cash</li>
                <li>Late payments may result in service cancellation</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">3. Cancellation Policy</h2>
            <div className="text-muted-foreground space-y-3">
              <h3 className="font-semibold text-lg text-foreground">Client Cancellations</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>More than 30 days before event:</strong> 50% deposit refund</li>
                <li><strong>15-30 days before event:</strong> 25% deposit refund</li>
                <li><strong>Less than 15 days before event:</strong> No refund</li>
              </ul>
              
              <h3 className="font-semibold text-lg text-foreground mt-4">Box Entertainment Cancellations</h3>
              <p>
                In the unlikely event we must cancel, you will receive a full refund or alternative date options.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">4. Event Requirements</h2>
            <div className="text-muted-foreground space-y-3">
              <h3 className="font-semibold text-lg text-foreground">Client Responsibilities</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Provide accurate event information (date, time, location, guest count)</li>
                <li>Ensure venue access for setup and breakdown</li>
                <li>Provide adequate power supply for equipment</li>
                <li>Obtain necessary permits and venue permissions</li>
                <li>Ensure safe working conditions for our staff</li>
              </ul>
              
              <h3 className="font-semibold text-lg text-foreground mt-4">Setup and Breakdown</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Setup time: Typically 2-3 hours before event start</li>
                <li>Breakdown time: Up to 2 hours after event end</li>
                <li>Additional fees may apply for restricted access times</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">5. Equipment and Damage</h2>
            <div className="text-muted-foreground space-y-3">
              <p>
                All equipment remains the property of Box Entertainment. Clients are responsible for any damage or loss of equipment during the event period. Replacement costs will be invoiced if damage occurs.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">6. Force Majeure</h2>
            <div className="text-muted-foreground space-y-3">
              <p>
                We are not liable for failure to perform services due to circumstances beyond our control including but not limited to: natural disasters, government restrictions, venue closures, illness, or technical failures.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">7. Liability</h2>
            <div className="text-muted-foreground space-y-3">
              <ul className="list-disc ml-6 space-y-1">
                <li>Our liability is limited to the total amount paid for services</li>
                <li>We maintain public liability insurance for all events</li>
                <li>We are not responsible for guest injuries or property damage not directly caused by our equipment or staff</li>
                <li>Clients must inform us of any venue restrictions or safety concerns</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">8. Intellectual Property</h2>
            <div className="text-muted-foreground space-y-3">
              <p>
                All content on our website, including text, images, logos, and videos, is protected by copyright and trademark laws. We may use photos and videos from your event for promotional purposes unless you request otherwise in writing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">9. Changes to Services</h2>
            <div className="text-muted-foreground space-y-3">
              <p>
                Any changes to booked services must be requested in writing at least 14 days before the event. Changes are subject to availability and may incur additional fees.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">10. Governing Law</h2>
            <div className="text-muted-foreground space-y-3">
              <p>
                These Terms are governed by the laws of the United Arab Emirates. Any disputes will be resolved in the courts of Dubai.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 p-4 bg-card/50 border border-border/50 rounded-lg">
              <p className="font-semibold">Box Entertainment</p>
              <p>Dubai, United Arab Emirates</p>
              <p>Email: info@boxentertainment.ae</p>
              <p>Phone: +971 50 123 4567</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">12. Acceptance of Terms</h2>
            <div className="text-muted-foreground space-y-3">
              <p>
                By booking our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. We reserve the right to update these Terms at any time.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
