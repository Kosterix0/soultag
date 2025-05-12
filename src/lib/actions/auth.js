"use server";

import { SignupFormSchema } from "@/lib/definitions";

export async function signup(state, formData) {
  const validation = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validation.data;

  try {
    const res = await fetch("http://localhost:3001/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return { errors: errorData };
    }

    return { success: true };
  } catch (error) {
    console.error("Error during signup:", error);
    return {
      errors: { general: "Failed to connect to the server" },
    };
  }
}
