import { z } from "zod";

export const SignupFormSchema = z.object({
  email: z.string().email({ message: "Invalid email!" }),
  password: z
    .string()
    .min(6, { message: "Password must have min 6 characters!" }),
});
