import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

export async function render(url: string) {
  // Preload all lazy-loaded page components to ensure they render during SSG
  await Promise.all([
    import('./pages/Home'),
    import('./pages/About'),
    import('./pages/Services'),
    import('./pages/Events'),
    import('./pages/Contact'),
    import('./pages/Blog'),
    import('./pages/Clients'),
    import('./pages/Privacy'),
    import('./pages/Terms'),
    import('./pages/events/Corporate'),
    import('./pages/events/Weddings'),
    import('./pages/events/Parties'),
    import('./pages/events/Proposals'),
    import('./pages/services/OutdoorCinema'),
    import('./pages/services/Karaoke'),
    import('./pages/services/SilentHeadsets'),
    import('./pages/services/DanceFloors'),
    import('./pages/services/LedLetters'),
    import('./pages/services/Entertainment'),
    import('./pages/services/Photobooth'),
    import('./pages/services/SoundLighting'),
    import('./pages/services/entertainment/Magicians'),
    import('./pages/services/entertainment/Comedians'),
    import('./pages/services/entertainment/DJs'),
    import('./pages/services/entertainment/Emcees'),
    import('./pages/services/entertainment/Dancers'),
    import('./pages/services/entertainment/Bands'),
    import('./pages/services/entertainment/Singers'),
    import('./pages/services/entertainment/Saxophonists'),
    import('./pages/services/photobooth/Booth360'),
    import('./pages/services/photobooth/OriginalBooth'),
    import('./pages/services/photobooth/MirrorBooth'),
    import('./pages/services/photobooth/MirrorBoothBackdrop'),
    import('./pages/services/silent-headsets/SilentDisco'),
    import('./pages/services/silent-headsets/CorporateHeadsets'),
    import('./pages/services/silent-headsets/SilentYoga'),
    import('./pages/services/sound-lighting/FestoonLights'),
  ]);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const helmetContext = {};

  const html = ReactDOMServer.renderToString(
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
  
  return html;
}
