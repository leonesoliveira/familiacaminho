import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Church, Users, Sparkles } from "lucide-react";
import Link from "next/link";

const events = [
  {
    title: "Culto de Domingo",
    details: "Domingo, 10h e 18h",
    description: "Um momento de louvor, adoração e Palavra para começar a semana abençoado.",
  },
  {
    title: "Culto da Família",
    details: "Quarta-feira, 20h",
    description: "Um encontro especial no meio da semana para fortalecer os laços familiares e a fé.",
  },
  {
    title: "Grupos Pequenos",
    details: "Diversos dias e horários",
    description: "Conecte-se com outras pessoas em um ambiente de comunhão e estudo bíblico.",
  },
  {
    title: "Eventos Especiais",
    details: "Confira a programação",
    description: "Fique por dentro de conferências, workshops e celebrações especiais.",
  },
];

export function ScheduleSection() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">Agenda de Cultos e Eventos</h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground font-bold">
          Participe de nossos encontros. Há sempre um lugar para você em nossa família.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <Card key={event.title} className="flex flex-col">
            <CardHeader>
                <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                <CardDescription className="font-semibold font-bold text-muted-foreground">{event.details}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground font-bold">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            Ver Agenda Completa
        </Button>
      </div>
    </div>
  );
}
