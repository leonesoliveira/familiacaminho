import Image from 'next/image';
import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { AboutSection } from '@/components/landing/about-section';
import { ScheduleSection } from '@/components/landing/schedule-section';
import { MinistriesSection } from '@/components/landing/ministries-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { LocationSection } from '@/components/landing/location-section';
import { DonateSection } from '@/components/landing/donate-section';
import { ContactSection } from '@/components/landing/contact-section';
import { Footer } from '@/components/landing/footer';
import { SectionWrapper } from '@/components/landing/section-wrapper';
import { ScrollToTopButton } from '@/components/landing/scroll-to-top-button';
import { NewsletterSection } from '@/components/landing/newsletter-section';
import { MissionVisionValuesSection } from '@/components/landing/mission-vision-values-section';
import { PlaceHolderImages } from '@/lib/placeholder-images';


export default function Home() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SectionWrapper id="quem-somos">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <AboutSection />
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                {aboutImage && (
                    <Image
                        src={aboutImage.imageUrl}
                        alt={aboutImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={aboutImage.imageHint}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                )}
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper id="nossos-valores" className="bg-card">
          <MissionVisionValuesSection />
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
        <SectionWrapper id="doacao">
          <DonateSection />
        </SectionWrapper>
        <SectionWrapper id="contato" className="bg-card">
          <ContactSection />
        </SectionWrapper>
        <SectionWrapper id="newsletter">
          <NewsletterSection />
        </SectionWrapper>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
