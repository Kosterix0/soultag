import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z.string().min(3, { message: "Name must have min 3 characters!" }),
  email: z.string().email({ message: "Invalid email!" }),
  password: z
    .string()
    .min(6, { message: "Password must have min 6 characters!" }),
});
