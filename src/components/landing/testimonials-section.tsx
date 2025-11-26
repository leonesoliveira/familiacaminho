"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: "testimonial-1",
    name: "Ana Silva",
    quote: "Na Família Caminho, encontrei mais que uma igreja, encontrei um lar. O amor e o acolhimento que recebi transformaram minha vida.",
  },
  {
    id: "testimonial-2",
    name: "Carlos Pereira",
    quote: "Os ensinamentos são profundos e práticos. Sinto que estou crescendo na minha fé e como pessoa a cada culto.",
  },
  {
    id: "testimonial-3",
    name: "Mariana Costa",
    quote: "Meus filhos amam o ministério infantil! É uma alegria vê-los aprendendo sobre Deus de uma forma tão divertida e segura.",
  },
];

export function TestimonialsSection() {
    const images = PlaceHolderImages.filter(p => testimonials.some(t => t.id === p.id));
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Testemunhos que Edificam</h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
          Veja como Deus tem transformado vidas em nossa comunidade.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => {
            const image = images.find(img => img.id === testimonial.id);
            return(
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                    <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                    <div className="flex items-center gap-4 pt-4">
                        <Avatar>
                            {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-primary">{testimonial.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )})}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
