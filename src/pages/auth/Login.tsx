'use client';

import { useState } from 'react';
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
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

const formSchema = z.object({
  user: z.string().min(1, 'El usuario es obligatorio'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
  rememberMe: z.boolean().default(false).optional(),
});

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Inicializar el formulario con valores guardados si existen
  const savedUser = localStorage.getItem('rememberedUser');

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      user: savedUser || '',
      password: '',
      rememberMe: !!savedUser,
    },
    resolver: zodResolver(formSchema),
    mode: 'onChange', // Validar al cambiar para poder deshabilitar el botón
  });

  const { formState } = form;
  const isFormValid = formState.isValid;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      setError(null);

      // Guardar usuario si rememberMe está activado
      if (data.rememberMe) {
        localStorage.setItem('rememberedUser', data.user);
      } else {
        localStorage.removeItem('rememberedUser');
      }

      // Llamada a la API de login
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     email: data.user,
      //     password: data.password,
      //   }),
      // });

      // const responseData = await response.json();

      // if (!response.ok) {
      //   throw new Error(responseData.message || 'Credenciales inválidas');
      // }

      // Guardar token en localStorage o sessionStorage
      //localStorage.setItem('authToken', responseData.token);

      // Redireccionar al dashboard
      navigate('/home');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
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

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

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
                        type="text"
                        placeholder="Ingresá tu usuario"
                        className="w-full  border border-gray-600"
                        required
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
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Ingresá tu contraseña"
                          className="w-full pr-10 border border-gray-600"
                          required
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between items-center">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="remember-me"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className='border border-gray-300'
                      />
                      <label htmlFor="remember-me" className="text-sm font-medium">
                        Recordarme
                      </label>
                    </div>
                  )}
                />
                <Link to="/forgot-password" className="text-sm text-purple-primary">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <Button
                type="submit"
                className="mt-4 w-full border-radius-4 bg-purple-primary"
                disabled={!isFormValid || isLoading}
              >
                {isLoading ? 'Cargando...' : 'Iniciar sesión'}
              </Button>
            </form>
          </Form>

          <div className="mt-5 space-y-5">
            <p className="text-sm text-center">
              ¿No tienes una cuenta?
              <Link to="/register" className="ml-1 text-purple-700">
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
