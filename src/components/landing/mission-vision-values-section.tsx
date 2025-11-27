"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const items = [
  {
    title: "Nossa Missão",
    description: "Levar a mensagem transformadora de Jesus a todos, servindo com amor, compaixão e graça, e equipando cada pessoa para viver seu propósito em Cristo.",
  },
  {
    title: "Nossa Visão",
    description: "Ser uma igreja relevante e acolhedora, que impacta nossa cidade e o mundo, sendo reconhecida como um farol de esperança, fé e unidade.",
  },
  {
    title: "Nossos Valores",
    description: "Adoração, Palavra, Comunhão, Serviço e Evangelismo. Estes pilares guiam cada passo que damos como corpo de Cristo, refletindo nosso compromisso com Deus e com o próximo.",
  },
];

export function MissionVisionValuesSection() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-card-foreground md:text-4xl">Nosso Fundamento</h2>
        <p className="text-lg max-w-3xl mx-auto text-card-foreground/80 font-bold">
          O que nos move, o que buscamos e no que acreditamos.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.title} className="md:basis-1/2 lg:basis-1/1">
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col items-center justify-center text-center bg-background/50">
                  <CardHeader className="items-center">
                    <CardTitle className="font-headline text-2xl text-card-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80 font-bold">{item.description}</p>
                  </CardContent>
                </Card>
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
