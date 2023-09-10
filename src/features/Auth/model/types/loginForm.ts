import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(30),
});

export type LoginFormValues = z.infer<typeof LoginFormSchema>;
