"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollVelocityContainer, ScrollVelocityRow } from '@/components/ui/scroll-based-velocity';
import { useIsMobile } from '@/hooks/use-mobile';

const ministries = [
  { id: 'ministry-infantil', name: 'Ministério Infantil' },
  { id: 'ministry-louvor', name: 'Louvor e Adoração' },
  { id: 'ministry-jovens', name: 'Jovens' },
  { id: 'ministry-casais', name: 'Casais' },
  { id: 'ministry-social', name: 'Obra Diaconal' },
  { id: 'ministry-discipulado', name: 'Discipulado' },
];

const firstRow = ministries.slice(0, 3);
const secondRow = ministries.slice(3, 6);

const MinistryCard = ({ id, name }: { id: string; name: string }) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-56 md:w-60">
      <CardContent className="p-0">
        <div className="relative h-72 w-full">
          {image && (
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
              sizes="(max-width: 768px) 50vw, 33vw"
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
  const isMobile = useIsMobile();

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">Nossos Ministérios</h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground font-bold">
          Encontre seu lugar para servir e crescer. Juntos, usamos nossos dons para edificar a igreja e abençoar o mundo.
        </p>
      </div>

      {isMobile ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ministries.map((ministry) => (
                <div key={ministry.id} className="mx-auto">
                    <MinistryCard {...ministry} />
                </div>
            ))}
        </div>
      ) : (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
            <ScrollVelocityContainer>
            <ScrollVelocityRow baseVelocity={-2} direction={-1} className="py-2">
                {firstRow.map((ministry) => (
                <div className="mx-2" key={ministry.id}><MinistryCard {...ministry} /></div>
                ))}
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={2} direction={1} className="py-2">
                {secondRow.map((ministry) => (
                <div className="mx-2" key={ministry.id}><MinistryCard {...ministry} /></div>
                ))}
            </ScrollVelocityRow>
            </ScrollVelocityContainer>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      )}
    </div>
  );
}
