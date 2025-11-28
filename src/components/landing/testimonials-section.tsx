"use client";

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useIsMobile } from "@/hooks/use-mobile";


const testimonials = [
  {
    id: "testimonial-1",
    name: "Ana Silva",
    username: "@ana_silva",
    quote: "Na Família Caminho, encontrei mais que uma igreja, encontrei um lar. O amor e o acolhimento que recebi transformaram minha vida.",
  },
  {
    id: "testimonial-2",
    name: "Carlos Pereira",
    username: "@carlos_pereira",
    quote: "Os ensinamentos são profundos e práticos. Sinto que estou crescendo na minha fé e como pessoa a cada culto.",
  },
  {
    id: "testimonial-3",
    name: "Mariana Costa",
    username: "@mariana_costa",
    quote: "Meus filhos amam o ministério infantil! É uma alegria vê-los aprendendo sobre Deus de uma forma tão divertida e segura.",
  },
  {
    id: "testimonial-4",
    name: "José Santos",
    username: "@jose_santos",
    quote: "Um lugar de paz e renovo. Sou grato por fazer parte desta família.",
  },
  {
    id: "testimonial-5",
    name: "Fernanda Lima",
    username: "@fernanda_lima",
    quote: "A comunidade é incrível e os eventos são sempre edificantes. Recomendo de coração!",
  },
  {
    id: "testimonial-6",
    name: "Paulo Rocha",
    username: "@paulo_rocha",
    quote: "Encontrei meu propósito e meu lugar de servir. A Família Caminho é uma bênção.",
  },
];

const images = PlaceHolderImages.filter(p => testimonials.some(t => t.id === p.id));
const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const TestimonialCard = ({
  id,
  name,
  username,
  quote,
}: {
  id: string,
  name: string
  username: string
  quote: string
}) => {
  const image = images.find(img => img.id === id);
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-border bg-card hover:bg-card/95"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Avatar>
          {image && <AvatarImage src={image.imageUrl} alt={name} data-ai-hint={image.imageHint} />}
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-primary">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-muted-foreground">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-foreground/80">{quote}</blockquote>
    </figure>
  )
}

export function TestimonialsSection() {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">Testemunhos que Edificam</h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground font-bold">
          Veja como Deus tem transformado vidas em nossa comunidade.
        </p>
      </div>
      <div className="relative flex h-[450px] w-full flex-col md:flex-row items-center justify-center overflow-hidden rounded-lg">
        <Marquee pauseOnHover vertical className="[--duration:30s]">
          {firstRow.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className={cn("[--duration:30s]", isMobile && "hidden")}>
          {secondRow.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
      </div>
    </div>
  );
}
