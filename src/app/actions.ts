'use server';

import { z } from 'zod';

const prayerSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  request: z.string().min(10, { message: 'Seu pedido deve ter pelo menos 10 caracteres.' }),
});

type State = {
    errors?: {
        name?: string[];
        request?: string[];
    };
    message?: string | null;
};

export async function submitPrayerRequest(data: z.infer<typeof prayerSchema>): Promise<State> {
  const validatedFields = prayerSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Por favor, corrija os erros no formulário.',
    };
  }

  try {
    // In a real application, you would save this to a database.
    console.log('Novo pedido de oração recebido:');
    console.log('Nome:', validatedFields.data.name);
    console.log('Pedido:', validatedFields.data.request);

    return { message: 'Seu pedido de oração foi enviado com sucesso!' };
  } catch (error) {
    console.error('Erro ao salvar pedido de oração:', error);
    return { message: 'Ocorreu um erro inesperado no servidor. Tente novamente mais tarde.' };
  }
}
