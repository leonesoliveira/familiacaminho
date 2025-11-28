"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { WordRotate } from '@/components/ui/word-rotate';
import { TypingAnimation } from '@/components/ui/typing-animation';

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage ? (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="absolute top-0 left-0 w-full h-full object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-secondary" />
      )}
      <div className="absolute inset-0 bg-background/70 bg-gradient-to-t from-background/80 to-transparent" />
      
      <div className={`relative z-10 flex flex-col items-center gap-6 px-4 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <TypingAnimation 
          className="font-headline text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl text-foreground"
          loop={false}
        >
          Família Caminho
        </TypingAnimation>
        <div className={`text-lg md:text-xl lg:text-2xl max-w-3xl text-foreground/90 transition-opacity duration-1000 delay-300 font-bold ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center items-center">
            <p className="mr-2">Um Lugar de</p>
            <WordRotate
                words={["Amor", "Fé", "Propósito"]}
                className="text-foreground"
            />
          </div>
          <p className="mt-2">Uma família para Deus, corpo para Cristo e um templo para o Espírito.</p>
        </div>
        <div className={`flex flex-col sm:flex-row gap-4 mt-4 transition-opacity duration-1000 delay-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <Link href="#localizacao">
              <InteractiveHoverButton>Junte-se a Nós</InteractiveHoverButton>
          </Link>
          <Link href="#agenda">
              <InteractiveHoverButton>Assistir Culto Online</InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
