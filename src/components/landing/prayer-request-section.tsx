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

const prayerSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  request: z.string().min(10, { message: 'Seu pedido deve ter pelo menos 10 caracteres.' }),
});

export function PrayerRequestSection() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof prayerSchema>>({
    resolver: zodResolver(prayerSchema),
    defaultValues: {
      name: "",
      request: "",
    },
  });

  const onSubmit = (values: z.infer<typeof prayerSchema>) => {
    startTransition(async () => {
      const result = await submitPrayerRequest(values);
      if (result?.message?.includes("sucesso")) {
        toast({
          title: "Sucesso!",
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          title: "Erro",
          description: result?.message || "Ocorreu um erro ao enviar seu pedido.",
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
    <div className="max-w-2xl mx-auto text-center">
      <div className="space-y-4 mb-8">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-white md:text-4xl">Como Podemos Orar por Você?</h2>
        <p className="text-lg text-primary-foreground/80 font-bold">
          Sua causa é nossa causa. Deixe seu pedido de oração e nossa equipe de intercessão estará orando por você.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-primary-foreground/90 font-bold">Seu Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} className="bg-background/10 text-white placeholder:text-white/60 border-white/40 focus-visible:ring-offset-primary font-bold" />
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
                <FormLabel className="text-primary-foreground/90 font-bold">Pedido de Oração</FormLabel>
                <FormControl>
                  <Textarea placeholder="Descreva seu pedido de oração" rows={5} {...field} className="bg-background/10 text-white placeholder:text-white/60 border-white/40 focus-visible:ring-offset-primary font-bold" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" disabled={isPending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            {isPending ? 'Enviando...' : 'Enviar Pedido de Oração'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
