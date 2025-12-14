import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import LeadMagnetCTA from '@/components/LeadMagnetCTA';
import ResidsSection from '@/components/ResidsSection';
import AISection from '@/components/AISection';
import AxeusSection from '@/components/AxeusSection';
import PublicationsSection from '@/components/PublicationsSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <LeadMagnetCTA />
        <ResidsSection />
        <AISection />
        <AxeusSection />
        <PublicationsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}