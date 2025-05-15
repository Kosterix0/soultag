"use server";

import { SignupFormSchema, SigninFormSchema } from "@/lib/definitions";
const URL = process.env.BASE_URL;

export async function signup(state, formData) {
  const validation = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
  }

  const { name, email, password } = validation.data;

  try {
    const res = await fetch(`${URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return { errors: errorData, name, email, password };
    }

    return { success: true };
  } catch (error) {
    console.error("Error during signup:", error);
    return {
      errors: { general: "Failed to connect to the server" },
      name,
      email,
      password,
    };
  }
}

export async function signin(state, formData) {
  const validation = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      email: formData.get("email"),
      password: formData.get("password"),
    };
  }

  return {
    success: true,
    credentials: validation.data,
  };
}
