"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitPrayerRequest } from "@/app/actions";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const prayerSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  request: z.string().min(10, { message: 'Sua mensagem deve ter pelo menos 10 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um e-mail válido.' }),
});

const socialLinks = [
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
];

export function ContactSection() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof prayerSchema>>({
    resolver: zodResolver(prayerSchema),
    defaultValues: {
      name: "",
      request: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof prayerSchema>) => {
    startTransition(async () => {
      const result = await submitPrayerRequest({name: values.name, request: values.request});
      if (result?.message?.includes("sucesso")) {
        toast({
          title: "Sucesso!",
          description: "Sua mensagem foi enviada com sucesso!",
        });
        form.reset();
      } else {
        toast({
          title: "Erro",
          description: result?.message || "Ocorreu um erro ao enviar sua mensagem.",
          variant: "destructive",
        });
        if (result.errors) {
            if(result.errors.name) form.setError('name', { type: 'server', message: result.errors.name[0] });
            if(result.errors.request) form.setError('request', { type: 'server', message: result.errors.request[0] });
        }
      }
    });
  };

  return (
    <div className="space-y-12">
       <div className="text-center space-y-4">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-card-foreground md:text-4xl">Fale Conosco</h2>
        <p className="text-lg max-w-3xl mx-auto text-card-foreground/80 font-bold">
          Quer saber mais sobre nós? Preencha o formulário abaixo com suas informações ou nos envie um E-mail que responderemos o mais breve possível.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="text-left">
                  <FormLabel className="text-card-foreground/90 font-bold">Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} className="bg-background/80 text-foreground placeholder:text-foreground/60 border-border focus-visible:ring-offset-background font-bold" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="text-left">
                  <FormLabel className="text-card-foreground/90 font-bold">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu e-mail" {...field} className="bg-background/80 text-foreground placeholder:text-foreground/60 border-border focus-visible:ring-offset-background font-bold" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="request"
              render={({ field }) => (
                <FormItem className="text-left">
                  <FormLabel className="text-card-foreground/90 font-bold">Mensagem</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Digite sua mensagem..." rows={5} {...field} className="bg-background/80 text-foreground placeholder:text-foreground/60 border-border focus-visible:ring-offset-background font-bold" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" disabled={isPending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              {isPending ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>
        </Form>
        
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                <Button
                    key={link.label}
                    asChild
                    variant="outline"
                    className="h-24 flex-col gap-2 text-primary hover:bg-accent/20 hover:border-accent font-bold"
                    aria-label={link.ariaLabel}
                >
                    <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                    <span>{link.label}</span>
                    </Link>
                </Button>
                ))}
            </div>

            <div className="space-y-4 text-left">
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-accent"/>
                    <a href="mailto:contato@familiacaminho.com" className="text-muted-foreground font-bold hover:text-primary">contato@familiacaminho.com</a>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-accent"/>
                    <a href="tel:+5511999998888" className="text-muted-foreground font-bold hover:text-primary">+55 (11) 99999-8888</a>
                </div>
                <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-accent"/>
                    <span className="text-muted-foreground font-bold">R. Clotildes Torres, 39 – Alto do Mateus, João Pessoa – PB</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
