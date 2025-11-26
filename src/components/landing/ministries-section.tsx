import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const ministries = [
  { id: 'ministry-infantil', name: 'Ministério Infantil' },
  { id: 'ministry-louvor', name: 'Louvor e Adoração' },
  { id: 'ministry-jovens', name: 'Jovens' },
  { id: 'ministry-casais', name: 'Casais' },
  { id: 'ministry-social', name: 'Ação Social' },
  { id: 'ministry-discipulado', name: 'Discipulado' },
];

export function MinistriesSection() {
  const images = PlaceHolderImages.filter(p => ministries.some(m => m.id === p.id));

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">Nossos Ministérios</h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground font-bold">
          Encontre seu lugar para servir e crescer. Juntos, usamos nossos dons para edificar a igreja e abençoar o mundo.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ministries.map((ministry) => {
          const image = images.find(img => img.id === ministry.id);
          return (
            <Card key={ministry.id} className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative h-60 w-full">
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
                  <h3 className="font-headline absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {ministry.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
