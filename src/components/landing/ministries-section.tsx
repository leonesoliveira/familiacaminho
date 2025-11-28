
"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const ministries = [
  { id: 'ministry-infantil', name: 'Ministério Infantil' },
  { id: 'ministry-louvor', name: 'Louvor e Adoração' },
  { id: 'ministry-jovens', name: 'Jovens' },
  { id: 'ministry-casais', name: 'Casais' },
  { id: 'ministry-social', name: 'Obra Diaconal' },
  { id: 'ministry-discipulado', name: 'Discipulado' },
];

const MinistryCard = ({ id, name }: { id: string; name: string }) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative h-72 w-full">
          {image && (
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="font-headline absolute bottom-4 left-4 text-lg font-bold text-white">
            {name}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export function MinistriesSection() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">Nossos Ministérios</h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground font-bold">
          Encontre seu lugar para servir e crescer. Juntos, usamos nossos dons para edificar a igreja e abençoar o mundo.
        </p>
      </div>

       <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
      >
        <CarouselContent>
          {ministries.map((ministry) => (
            <CarouselItem key={ministry.id} className="sm:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <MinistryCard {...ministry} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
