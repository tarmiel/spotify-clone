import { z } from 'zod';

export const RegisterFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6).max(30),
    confirmPassword: z.string(),
    username: z.string().min(1).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type RegisterFormValues = z.infer<typeof RegisterFormSchema>;
