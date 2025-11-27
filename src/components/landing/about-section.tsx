import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function AboutSection() {
  return (
    <div className="space-y-6 text-center">
      <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">Conheça a Família Caminho</h2>
      <blockquote className="max-w-3xl mx-auto">
        <p className="text-lg italic text-muted-foreground font-bold">
          &quot;Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim.&quot;
        </p>
        <footer className="mt-2 text-sm text-muted-foreground/80 font-bold">João 14:6</footer>
      </blockquote>
      <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground font-bold">
          <p>
              Movidos pela fé, nosso propósito é amar pessoas, proclamar o evangelho e viver os ensinamentos de Cristo. Queremos ser um farol que ilumina, apontando o Caminho e revelando um Lugar Seguro onde todos podem encontrar esperança, alegria e paz.
          </p>
          <p>
              Venha nos conhecer, traga sua família e amigos. Será um prazer receber vocês em nossa casa!
          </p>
      </div>
    </div>
  );
}
