"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { generateHeroVideo } from '@/app/actions';

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const fetchVideo = async () => {
      try {
        const url = await generateHeroVideo();
        setVideoUrl(url);
      } catch (error) {
        console.error("Failed to generate hero video:", error);
        // Fallback to an image if video fails?
      }
    };
    fetchVideo();
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {videoUrl ? (
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          data-ai-hint="family video"
        />
      ) : (
        <div className="absolute inset-0 bg-secondary flex items-center justify-center">
            <p className="text-foreground/80">Gerando vídeo...</p>
        </div>
      )}
      <div className="absolute inset-0 bg-background/70 bg-gradient-to-t from-background/80 to-transparent" />
      
      <div className={`relative z-10 flex flex-col items-center gap-6 px-4 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl text-foreground">
          Família Caminho
        </h1>
        <p className={`text-lg md:text-xl lg:text-2xl max-w-3xl text-foreground/90 transition-opacity duration-1000 delay-300 font-bold ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          Um Lugar de Amor, Fé e Propósito
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 mt-4 transition-opacity duration-1000 delay-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform font-bold">
            <Link href="#localizacao">Junte-se a Nós</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-lg transform hover:scale-105 transition-transform font-bold">
            <Link href="#agenda">Assistir Culto Online</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
