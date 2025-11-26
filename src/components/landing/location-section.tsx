import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Clock, MapPin } from "lucide-react";

export function LocationSection() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'map-location');
  const address = "Rua da Fé, 123 - Bairro Esperança, Cidade de Deus, 12345-678";

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Faça-nos uma Visita</h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
          Estamos de portas abertas para receber você e sua família. Venha nos conhecer!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          {mapImage && (
            <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                fill
                className="object-cover"
                data-ai-hint={mapImage.imageHint}
              />
               <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors flex items-center justify-center">
                    <span className="text-white text-lg font-bold bg-black/50 px-4 py-2 rounded">Ver no Mapa</span>
               </div>
            </Link>
          )}
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="h-8 w-8 text-accent mt-1 shrink-0" />
            <div>
                <h3 className="text-xl font-semibold text-primary">Endereço</h3>
                <p className="text-muted-foreground">{address}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="h-8 w-8 text-accent mt-1 shrink-0" />
            <div>
                <h3 className="text-xl font-semibold text-primary">Horários dos Cultos</h3>
                <p className="text-muted-foreground">Domingos: 10h e 18h</p>
                <p className="text-muted-foreground">Quartas-feiras: 20h</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
            <Link href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">
              Como Chegar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
