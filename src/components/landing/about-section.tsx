import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const aboutItems = [
  {
    icon: <Target className="h-10 w-10 text-accent" />,
    title: "Nossa Missão",
    description: "Levar a mensagem de amor e esperança a todos, servindo à comunidade e glorificando a Deus através de nossas ações e palavras.",
  },
  {
    icon: <Eye className="h-10 w-10 text-accent" />,
    title: "Nossa Visão",
    description: "Ser uma igreja relevante e acolhedora, que transforma vidas e impacta a sociedade, sendo um farol de fé e um refúgio para todos que buscam propósito.",
  },
  {
    icon: <Heart className="h-10 w-10 text-accent" />,
    title: "Nossos Valores",
    description: "Fundamentados no amor, na fé, na família, na comunhão e no serviço ao próximo, buscamos viver os ensinamentos de Cristo em nosso dia a dia.",
  },
];

export function AboutSection() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">Quem Somos</h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground font-bold">
          Somos uma família unida pela fé, comprometida em trilhar um caminho de propósito e amor ao próximo. Um lugar onde todos são bem-vindos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {aboutItems.map((item, index) => (
          <Card key={index} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <CardHeader className="items-center space-y-4">
              <div className="bg-accent/10 p-4 rounded-full">
                {item.icon}
              </div>
              <CardTitle className="font-headline text-2xl text-primary">{item.title}</CardTitle>
              <CardDescription className="text-base text-muted-foreground font-bold">{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
