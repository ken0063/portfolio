import { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { Footer } from './components/Footer';

// Lazy load below-the-fold sections
const AboutSection = lazy(() => import('./sections/AboutSection').then(m => ({ default: m.AboutSection })));
const PortfolioSection = lazy(() => import('./sections/PortfolioSection').then(m => ({ default: m.PortfolioSection })));

function App() {
  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-primary) font-primary overflow-x-hidden selection:bg-(--color-accent-current) selection:text-(--bg-primary)">
      <Navbar />

      <main className="w-full relative z-10">
        <HeroSection />
        
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-(--text-muted)">Loading...</div>}>
          <AboutSection />
          <PortfolioSection />
        </Suspense>


      </main>

      <Footer />
    </div>
  );
}

export default App;
