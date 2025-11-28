
"use client";

import { Button } from "@/components/ui/button";
import { Copy, ChevronDown } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function DonatePage() {
    const { toast } = useToast();
    const pixKey = "contato@familiacaminho.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(pixKey);
        toast({
          title: "Copiado!",
          description: "A chave PIX foi copiada para a área de transferência.",
        });
    }


    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-2xl mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-6 rounded-lg bg-card p-8">
                        <div className="text-center">
                            <h3 className="font-headline text-3xl font-bold text-primary">Faça sua Contribuição</h3>
                            <p className="text-muted-foreground mt-4 font-bold">
                                Sua contribuição é um ato de adoração e nos ajuda a expandir o Reino de Deus. Agradecemos sua generosidade.
                            </p>
                        </div>
                        <div className="relative">
                            <svg viewBox="0 0 100 100" className="h-32 w-32 text-primary bg-white p-1 rounded-md">
                                <path fill="currentColor" d="M10 10h25v25h-25z m5 5v15h15v-15z m35 0h25v25h-25z m5 5v15h15v-15z M10 50h25v25h-25z m5 5v15h15v-15z m15 20h5v5h-5z m-10 0h5v5h-5z m-5-5h5v5h-5z m45-20h5v5h-5z m-5 10h5v5h-5z m-10 10h5v5h-5z m0-20h5v5h-5z m-5-5h5v5h-5z m25-5h5v5h-5z m10 0h5v5h-5z m-10 10h5v5h-5z m15 5h5v5h-5z m-5 10h5v5h-5z m-15-5h5v5h-5z m-5 10h5v5h-5z m-10-25h5v5h-5z m0 10h5v5h-5z m-5-5h5v5h-5z m0-10h5v5h-5z m40 30h5v5h-5z m-5-5h5v5h-5z m10-10h5v5h-5z m0 15h5v5h-5z m5 5h5v5h-5z M50 50h5v5h-5z" />
                            </svg>
                        </div>
                        <div className="text-center text-muted-foreground w-full">
                            <p className="text-sm mb-4 font-bold">Aponte a câmera para o QR Code ou utilize os dados abaixo:</p>
                            <div className="bg-background/50 rounded-md p-4 space-y-4">
                                <div>
                                    <h4 className="font-bold text-primary/90 text-sm">Chave PIX (E-mail)</h4>
                                    <div className="flex items-center justify-center gap-2 mt-1">
                                        <span className="font-mono text-primary text-sm break-all">{pixKey}</span>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={copyToClipboard}>
                                                        <Copy className="h-4 w-4" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Copiar chave PIX</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </div>
                                <Collapsible className="border-t border-border pt-4">
                                    <CollapsibleTrigger className="flex justify-between items-center w-full group">
                                    <h4 className="font-bold text-primary/90 text-sm">Dados Bancários</h4>
                                    <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="space-y-1 pt-2 text-left">
                                        <p className="text-primary mt-1 font-bold">Banco Exemplo S.A. (001)</p>
                                        <p className="text-primary mt-1 font-bold">Agência: 0001</p>
                                        <p className="text-primary mt-1 font-bold">Conta Corrente: 12345-6</p>
                                        <p className="text-primary mt-1 font-bold">CNPJ: 00.000.000/0001-00</p>
                                    </CollapsibleContent>
                                </Collapsible>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
