import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Privacy Policy | Box Entertainment Dubai</title>
        <meta name="description" content="Privacy Policy for Box Entertainment. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://boxentertainment.ae/privacy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <div>
            <p className="text-muted-foreground mb-6">
              <strong>Last Updated:</strong> October 28, 2025
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Box Entertainment ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Personal Information</h3>
                <p>When you contact us or request our services, we may collect:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Event details and preferences</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication history with our team</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">How We Use Your Information</h2>
            <div className="text-muted-foreground space-y-2">
              <p>We use the information we collect to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Provide and manage our entertainment services</li>
                <li>Process your bookings and payments</li>
                <li>Communicate with you about your events</li>
                <li>Send promotional materials (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Information Sharing</h2>
            <div className="text-muted-foreground space-y-3">
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business</li>
                <li><strong>Entertainment Partners:</strong> Performers and suppliers necessary to fulfill your booking</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Your Rights</h2>
            <div className="text-muted-foreground space-y-2">
              <p>You have the right to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-card/50 border border-border/50 rounded-lg">
              <p className="font-semibold">Box Entertainment</p>
              <p>Dubai, United Arab Emirates</p>
              <p>Email: info@boxentertainment.ae</p>
              <p>Phone: +971 50 123 4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
