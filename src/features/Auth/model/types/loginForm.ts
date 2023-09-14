import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z.string().min(6).max(30),
});

export type LoginFormValues = z.infer<typeof LoginFormSchema>;
