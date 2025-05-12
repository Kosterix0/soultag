"use client";

import Link from "next/link";

export default function SignForm({ isSignup, action, state, pending }) {
  const MODE = isSignup ? "Sign Up" : "Sign In";

  return (
    <>
      <form
        action={action}
        className="flex flex-col gap-3 w-full max-w-sm bg-[#714329] p-8 rounded-lg shadow-xl shadow-[#714329]"
      >
        <h1 className="self-center text-2xl font-semibold text-[#f5ece6] ">
          {MODE}
        </h1>
        {isSignup && (
          <>
            <label htmlFor="name" className="text-[#f5ece6] text-sm">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John"
              className="text-[#f5ece6] pl-2 rounded-md border-[#ffffff62] border"
              required
            />
            {state?.errors?.name && (
              <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
            )}
          </>
        )}

        <label htmlFor="email" className="text-[#f5ece6] text-sm ">
          Email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="example@abc.com"
          className="text-[#f5ece6] pl-2 border-1 rounded-md border-[#ffffff62]"
          required
        />
        {state?.errors?.email && (
          <p className="text-red-500">{state.errors.email}</p>
        )}

        <label htmlFor="password" className="text-[#f5ece6] text-sm ">
          Password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="text-[#f5ece6] pl-2 border-1 rounded-md border-[#ffffff62]"
          required
        />
        {state?.errors?.password && (
          <p className="text-red-500">{state.errors.password}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="h-10 text-[#f5ece6] hover:bg-[#D0B9A7] bg-[#B08463] transition-all duration-300 cursor-pointer rounded-lg hover:text-[#7f5841] "
        >
          {pending ? "Submitting..." : `${MODE}`}
        </button>

        {state?.errors?.general && (
          <p className="text-red-500 text-center mt-4">
            {state.errors.general}
          </p>
        )}
        {isSignup ? (
          <p className="self-center text-[#f5ece6] text-sm ">
            You already have account?
          </p>
        ) : (
          <p className="self-center text-[#f5ece6] text-sm ">
            Don't have an account?
          </p>
        )}
        <Link
          href={isSignup ? "/login" : "register"}
          className="self-center text-md p-2 text-[#f5ece6] hover:bg-[#D0B9A7]  transition-all duration-300 cursor-pointer rounded-lg hover:text-[#7f5841] "
        >
          {isSignup ? "Sign In!" : "Create Account!"}
        </Link>
      </form>
    </>
  );
}
