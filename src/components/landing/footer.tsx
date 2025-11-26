import Link from "next/link";
import { Cross } from "lucide-react";

const quickLinks = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#agenda", label: "Agenda" },
  { href: "#ministerios", label: "Ministérios" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <Cross className="h-6 w-6 text-accent" />
              <span>Família Caminho</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Um lugar de amor, fé e propósito.
            </p>
          </div>
          <div className="md:mx-auto">
            <h3 className="font-semibold tracking-wider uppercase text-accent">Links Rápidos</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:text-right">
             <h3 className="font-semibold tracking-wider uppercase text-accent">Versículo</h3>
             <p className="mt-4 text-sm italic text-primary-foreground/70">
                &quot;Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.&quot;
             </p>
             <p className="mt-1 text-xs text-primary-foreground/50">João 14:6</p>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {currentYear} Igreja Família Caminho. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
