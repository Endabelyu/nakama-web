import { z } from "zod";

export const UserRegisterSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  address: z.string().min(10).optional(),
  phone: z.string().min(10).optional(),
  name: z.string().min(10),
});

export const UserLoginSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
});

export type UserRegister = z.infer<typeof UserRegisterSchema>;
export type UserLogin = z.infer<typeof UserLoginSchema>;
