"use client";

import { signup } from "@/lib/actions/auth";
import { useActionState } from "react";

export default function SignupForm() {
  const [state, action] = useActionState(signup);

  return (
    <>
      <form
        action={action}
        className="flex flex-col gap-4 w-full max-w-sm bg-[#714329] p-8 rounded-lg shadow-xl shadow-[#714329]"
      >
        <h1 className="self-center text-2xl font-semibold text-[#f5ece6] ">
          Sign Up
        </h1>
        <label htmlFor="name" className="text-[#f5ece6] text-sm ">
          name:
        </label>
        <input
          type="text"
          name="name"
          placeholder="John"
          className="text-[#f5ece6] pl-2 border-1 rounded-md border-[#ffffff62]"
          required
        />
        {state?.errors?.name && <p>{state.errors.name}</p>}
        <label htmlFor="email" className="text-[#f5ece6] text-sm ">
          email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="example@abc.com"
          className="text-[#f5ece6] pl-2 border-1 rounded-md border-[#ffffff62]"
          required
        />
        {state?.errors?.email && <p>{state.errors.email}</p>}

        <label htmlFor="password" className="text-[#f5ece6] text-sm ">
          password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="text-[#f5ece6] pl-2 border-1 rounded-md border-[#ffffff62]"
          required
        />
        {state?.errors?.password && <p>{state.errors.password}</p>}

        <button
          type="submit"
          className="h-10 text-[#f5ece6] hover:bg-[#D0B9A7] bg-[#B08463] transition-all duration-300 cursor-pointer rounded-lg hover:text-[#7f5841] "
        >
          Submit
        </button>
      </form>
    </>
  );
}
