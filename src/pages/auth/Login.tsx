'use client';

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
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { zodResolver } from '@hookform/resolvers/zod';
import { LogInIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

const formSchema = z.object({
  user: z.string(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      user: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  }); 

  const navigate = useNavigate();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    navigate('/');
  };

  return (
    <div className="h-screen flex">
      <div
        className="w-2/3 h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/images/login-bg.jpg')" }}
      />
      <div className="w-1/3 h-full flex items-center justify-center">
        <div className="max-w-xs w-full flex flex-col items-center">
          <div className="self-start items-center mb-20 ml-0">
            <img
              src="/src/assets/images/nucleoelectrica_logo.png"
              alt="Logo"
              className="h-8 w-auto object-contain"
            />
          </div>

          <h2 className="self-start text-2xl font-semibold mt-4 mb-10">¡Bienvenido!</h2>

          <Form {...form}>
            <form className="w-full space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="user"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usuario</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Ingresá tu usuario o correo electrónico"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Ingresá tu contraseña"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Switch id="remember-me" />
                  <label htmlFor="remember-me" className="text-sm font-medium">
                    Recordarme
                  </label>
                </div>
                <Link to="#" className="text-sm text-purple-primary">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <Button type="submit" className="mt-4 w-full border-radius-4 bg-purple-primary">
                Iniciar sesión
              </Button>
            </form>
          </Form>

          <div className="mt-5 space-y-5">
            <p className="text-sm text-center">
              ¿No tienes una cuenta?
              <Link to="#" className="ml-1 text-purple-700">
                Registrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
