import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load route components for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogCategory = lazy(() => import("./pages/BlogCategory"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Clients = lazy(() => import("./pages/Clients"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Events = lazy(() => import("./pages/Events"));
const Corporate = lazy(() => import("./pages/events/Corporate"));
const Weddings = lazy(() => import("./pages/events/Weddings"));
const Parties = lazy(() => import("./pages/events/Parties"));
const Proposals = lazy(() => import("./pages/events/Proposals"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const OutdoorCinema = lazy(() => import("./pages/services/OutdoorCinema"));
const Karaoke = lazy(() => import("./pages/services/Karaoke"));
const SilentHeadsets = lazy(() => import("./pages/services/SilentHeadsets"));
const DanceFloors = lazy(() => import("./pages/services/DanceFloors"));
const LedLetters = lazy(() => import("./pages/services/LedLetters"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Entertainment services
const Magicians = lazy(() => import("./pages/services/entertainment/Magicians"));
const Comedians = lazy(() => import("./pages/services/entertainment/Comedians"));
const DJs = lazy(() => import("./pages/services/entertainment/DJs"));
const Emcees = lazy(() => import("./pages/services/entertainment/Emcees"));
const Dancers = lazy(() => import("./pages/services/entertainment/Dancers"));
const Bands = lazy(() => import("./pages/services/entertainment/Bands"));
const Singers = lazy(() => import("./pages/services/entertainment/Singers"));
const Saxophonists = lazy(() => import("./pages/services/entertainment/Saxophonists"));

// Photobooth services
const Booth360 = lazy(() => import("./pages/services/photobooth/Booth360"));
const OriginalBooth = lazy(() => import("./pages/services/photobooth/OriginalBooth"));
const MirrorBooth = lazy(() => import("./pages/services/photobooth/MirrorBooth"));
const MirrorBoothBackdrop = lazy(() => import("./pages/services/photobooth/MirrorBoothBackdrop"));

// Silent Headsets services
const SilentDisco = lazy(() => import("./pages/services/silent-headsets/SilentDisco"));
const CorporateHeadsets = lazy(() => import("./pages/services/silent-headsets/CorporateHeadsets"));
const SilentYoga = lazy(() => import("./pages/services/silent-headsets/SilentYoga"));

// Sound & Lighting
const FestoonLights = lazy(() => import("./pages/services/sound-lighting/FestoonLights"));

// Category landing pages
const Entertainment = lazy(() => import("./pages/services/Entertainment"));
const Photobooth = lazy(() => import("./pages/services/Photobooth"));
const SoundLighting = lazy(() => import("./pages/services/SoundLighting"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/services" element={<Services />} />
              
              {/* Category landing pages */}
              <Route path="/services/entertainment" element={<Entertainment />} />
              <Route path="/services/photobooth" element={<Photobooth />} />
              <Route path="/services/sound-lighting" element={<SoundLighting />} />
              
              <Route path="/services/:category" element={<Services />} />
              <Route path="/services/outdoor-cinema" element={<OutdoorCinema />} />
              <Route path="/services/karaoke" element={<Karaoke />} />
              <Route path="/services/silent-headsets" element={<SilentHeadsets />} />
              <Route path="/services/dance-floors" element={<DanceFloors />} />
              <Route path="/services/led-letters" element={<LedLetters />} />
              
              {/* Entertainment sub-services */}
              <Route path="/services/entertainment/magicians" element={<Magicians />} />
              <Route path="/services/entertainment/comedians" element={<Comedians />} />
              <Route path="/services/entertainment/djs" element={<DJs />} />
              <Route path="/services/entertainment/emcees" element={<Emcees />} />
              <Route path="/services/entertainment/dancers" element={<Dancers />} />
              <Route path="/services/entertainment/bands" element={<Bands />} />
              <Route path="/services/entertainment/singers" element={<Singers />} />
              <Route path="/services/entertainment/saxophonists" element={<Saxophonists />} />
              
              {/* Photobooth sub-services */}
              <Route path="/services/photobooth/360-booth" element={<Booth360 />} />
              <Route path="/services/photobooth/original-booth" element={<OriginalBooth />} />
              <Route path="/services/photobooth/mirror-booth" element={<MirrorBooth />} />
              <Route path="/services/photobooth/mirror-booth-backdrop" element={<MirrorBoothBackdrop />} />
              
              {/* Silent Headsets sub-services */}
              <Route path="/services/silent-headsets/silent-disco" element={<SilentDisco />} />
              <Route path="/services/silent-headsets/corporate-headsets" element={<CorporateHeadsets />} />
              <Route path="/services/silent-headsets/silent-yoga" element={<SilentYoga />} />
              
              {/* Sound & Lighting sub-services */}
              <Route path="/services/sound-lighting/festoon-lights" element={<FestoonLights />} />
              
              <Route path="/events" element={<Events />} />
              <Route path="/events/corporate" element={<Corporate />} />
              <Route path="/events/weddings" element={<Weddings />} />
              <Route path="/events/parties" element={<Parties />} />
              <Route path="/events/proposals" element={<Proposals />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Blog category and post routes - after fixed routes, before catch-all */}
              <Route path="/:category" element={<BlogCategory />} />
              <Route path="/:category/:slug" element={<BlogPost />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
