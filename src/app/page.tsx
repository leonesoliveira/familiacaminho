import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { AboutSection } from '@/components/landing/about-section';
import { ScheduleSection } from '@/components/landing/schedule-section';
import { MinistriesSection } from '@/components/landing/ministries-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { LocationSection } from '@/components/landing/location-section';
import { PrayerRequestSection } from '@/components/landing/prayer-request-section';
import { DonateSection } from '@/components/landing/donate-section';
import { ContactSection } from '@/components/landing/contact-section';
import { Footer } from '@/components/landing/footer';
import { SectionWrapper } from '@/components/landing/section-wrapper';
import { ScrollToTopButton } from '@/components/landing/scroll-to-top-button';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SectionWrapper id="quem-somos">
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper id="agenda" className="bg-secondary/50">
          <ScheduleSection />
        </SectionWrapper>
        <SectionWrapper id="ministerios">
          <MinistriesSection />
        </SectionWrapper>
        <SectionWrapper id="testemunhos" className="bg-secondary/50">
          <TestimonialsSection />
        </SectionWrapper>
        <SectionWrapper id="localizacao">
          <LocationSection />
        </SectionWrapper>
        <SectionWrapper id="oracao" className="bg-card">
          <PrayerRequestSection />
        </SectionWrapper>
        <SectionWrapper id="doacao">
          <DonateSection />
        </SectionWrapper>
        <SectionWrapper id="contato" className="bg-secondary/50">
          <ContactSection />
        </SectionWrapper>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
