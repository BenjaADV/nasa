import { z } from 'zod';

export const fuelElementSchema = z.object({
  id: z.string(),
  ec: z.string(),
  code: z.string(),
  pool: z.number(),
  percha: z.string(),
  position: z.number(),
  fechaDeNovedad: z.string(),
  asociatedChannel: z.string(),
  positionInReactor: z.number(),
  uranium: z.number(),
  u235: z.number(),
  u235Final: z.number(),
  quemado: z.number(),
  pu: z.number(),
  estadiaCalendario: z.number(),
  estadiaDPP: z.number(),
  uranioFinal: z.number(),
  observaciones: z.string(),
});

export type FuelElement = z.infer<typeof fuelElementSchema>;
