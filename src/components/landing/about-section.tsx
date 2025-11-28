import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";

export function AboutSection() {
  return (
    <div className="space-y-6 text-center md:text-left">
      <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">Conheça a Família Caminho</h2>
      <blockquote className="max-w-3xl mx-auto md:mx-0">
        <p className="text-lg italic text-muted-foreground font-bold">
          &quot;Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim.&quot;
        </p>
        <footer className="mt-2 text-sm text-muted-foreground/80 font-bold">João 14:6</footer>
      </blockquote>
      <div className="max-w-3xl mx-auto md:mx-0 space-y-4 text-lg text-muted-foreground font-bold">
          <p>
              Movidos pela fé, nosso propósito é amar pessoas, proclamar o evangelho e viver os ensinamentos de Cristo. Queremos ser um farol que ilumina, apontando o Caminho e revelando um Lugar Seguro onde todos podem encontrar esperança, alegria e paz.
          </p>
          <p>
              Os primeiros seguidores de Cristo eram conhecidos como "Seguidores do Caminho", pois acreditavam que Jesus é o único caminho para a salvação. Quer saber mais sobre essa história e o porquê do nosso nome?
          </p>
      </div>
      <Link href="/o-caminho">
        <ShinyButton>Saiba mais sobre nosso nome</ShinyButton>
      </Link>
    </div>
  );
}
