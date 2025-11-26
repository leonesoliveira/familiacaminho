import { Button } from "@/components/ui/button";
import { Handshake, QrCode, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function DonateSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 text-center lg:text-left">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">Doe e Abençoe</h2>
        <p className="text-lg text-muted-foreground font-bold">
          Sua contribuição é um ato de adoração e nos ajuda a expandir o Reino de Deus, apoiando nossos ministérios, missões e a manutenção de nossa casa.
        </p>
        <p className="text-muted-foreground font-bold">
          Cada oferta, por menor que seja, faz uma grande diferença. Agradecemos sua generosidade e parceria.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
          <Link href="#">Contribuir Online</Link>
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-secondary/50 p-8">
        <QrCode className="h-32 w-32 text-primary" />
        <p className="font-semibold text-primary font-bold">Aponte a câmera para o QR Code (PIX)</p>
        <div className="flex items-center gap-4 text-muted-foreground font-bold">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span>Transação Segura</span>
        </div>
      </div>
    </div>
  );
}
