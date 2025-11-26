"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogoIcon } from "@/components/icons/LogoIcon";

const navItems = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#agenda", label: "Agenda" },
  { href: "#ministerios", label: "Ministérios" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold text-primary">
          <LogoIcon className="h-8 w-8 text-accent" />
          <span>Família Caminho</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-bold text-foreground/80 transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
          <Button asChild variant="ghost" className="hover:bg-accent/20 font-bold">
            <Link href="#doacao">Contribuir</Link>
          </Button>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
             <Link href="#localizacao">Junte-se a Nós</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                 <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        <LogoIcon className="h-8 w-8 text-accent" />
                        <span>Família Caminho</span>
                    </Link>
                 </div>
                <nav className="mt-8 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-bold text-foreground/80 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button asChild variant="outline" size="lg" className="mt-4 font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="#doacao">Contribuir</Link>
                  </Button>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="#localizacao">Junte-se a Nós</Link>                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
