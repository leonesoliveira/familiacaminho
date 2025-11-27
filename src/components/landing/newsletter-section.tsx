import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="space-y-4">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Fique por Dentro
        </h2>
        <p className="text-lg text-muted-foreground font-bold">
          Inscreva-se e receba as últimas notícias, eventos e mensagens da nossa igreja diretamente no seu e-mail.
        </p>
      </div>
      <form className="mt-8 flex flex-col sm:flex-row items-center gap-4 max-w-lg mx-auto">
        <Input
          type="email"
          placeholder="Digite seu melhor e-mail"
          className="flex-grow text-center sm:text-left"
          aria-label="Email para inscrição"
        />
        <Button type="submit" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
          Receber Informações
        </Button>
      </form>
    </div>
  );
}
