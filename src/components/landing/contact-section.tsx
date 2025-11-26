import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const contactLinks = [
  {
    icon: <Instagram className="h-6 w-6" />,
    label: "Instagram",
    href: "#",
    ariaLabel: "Siga-nos no Instagram",
  },
  {
    icon: <Youtube className="h-6 w-6" />,
    label: "YouTube",
    href: "#",
    ariaLabel: "Inscreva-se em nosso canal no YouTube",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    href: "mailto:contato@familiacaminho.com",
    ariaLabel: "Envie-nos um email",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    label: "Telefone",
    href: "tel:+5511999998888",
    ariaLabel: "Ligue para nós",
  },
];

export function ContactSection() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Fale Conosco</h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
          Estamos aqui para ouvir você. Entre em contato, siga-nos nas redes sociais ou venha nos visitar.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {contactLinks.map((link) => (
          <Button
            key={link.label}
            asChild
            variant="outline"
            className="h-24 flex-col gap-2 text-primary hover:bg-accent/20 hover:border-accent"
            aria-label={link.ariaLabel}
          >
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
              <span>{link.label}</span>
            </Link>
          </Button>
        ))}
      </div>
      <div className="text-center text-muted-foreground flex items-center justify-center gap-2">
        <MapPin className="h-5 w-5"/>
        <span>Rua da Fé, 123 - Bairro Esperança, Cidade de Deus</span>
      </div>
    </div>
  );
}
