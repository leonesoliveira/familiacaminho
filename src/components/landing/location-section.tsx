import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";

export function LocationSection() {
  const addressText = "R. Clotildes Torres, 39 – Alto do Mateus, João Pessoa – PB";
  const mapAddress = "R. Cel. Joca Velho - Alto do Mateus, João Pessoa - PB, 58090-220";
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.582875150937!2d-34.9126600249767!3d-7.05835939293112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ad2b044f59c87f%3A0x10b67d0254045585!2sR.%20Cel.%20Joca%20Velho%20-%20Alto%20do%20Mateus%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058090-220!5e0!3m2!1spt-BR!2sbr!4v1718811802932!5m2!1spt-BR!2sbr`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapAddress)}`;

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">Faça-nos uma Visita</h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground font-bold">
          Estamos de portas abertas para receber você e sua família. Venha nos conhecer!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg border">
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Igreja Família Caminho"
          ></iframe>
        </div>
        <div className="space-y-6">
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto font-bold">
                <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    Ver no Mapa
                </Link>
            </Button>
          <div className="flex items-start gap-4">
            <MapPin className="h-8 w-8 text-accent mt-1 shrink-0" />
            <div>
                <h3 className="font-headline text-xl font-semibold text-primary">Endereço</h3>
                <p className="text-muted-foreground font-bold">{addressText}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="h-8 w-8 text-accent mt-1 shrink-0" />
            <div>
                <h3 className="font-headline text-xl font-semibold text-primary">Horários dos Cultos</h3>
                <p className="text-muted-foreground font-bold">Domingos: 10h e 18h</p>
                <p className="text-muted-foreground font-bold">Quartas-feiras: 20h</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto font-bold">
            <Link href={googleMapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
              Como Chegar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
