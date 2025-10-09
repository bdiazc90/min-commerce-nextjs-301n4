'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Schema de validación con Zod
const formSchema = z.object({
  nombre: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres.',
  }),
  correo: z.email({
    message: 'Ingresa un correo electrónico válido.',
  }),
  telefono: z.string().min(9, {
    message: 'El teléfono debe tener al menos 9 dígitos.',
  }),
});

export default function CheckoutPage() {
  // Configurar react-hook-form con Zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: '',
      correo: '',
      telefono: '',
    },
  });

  // Handler del submit
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    // enviar a una API
  }

  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-4xl font-bold mb-8">Checkout</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Juan Pérez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="correo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="juan@ejemplo.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="999 999 999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Finalizar Compra
          </Button>
        </form>
      </Form>
    </div>
  );
}
