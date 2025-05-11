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
      errors: validationResult.error.flatten().fieldErrors,
    };
  }
  // event.preventDefault();
  // const formData = new FormData(event.currentTarget);
  // const email = formData.get("email");
  // const password = formData.get("password");
  // const response = fetch("/api/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email, password }),
  // });
  // if (response.ok) {
  //   router.push("/profile");
  // } else {
  //   // TODO: handle error
  //   console.error("Login failed");
  // }
}
