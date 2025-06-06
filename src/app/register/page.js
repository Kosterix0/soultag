"use client";

import { signup } from "@/lib/actions/auth";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SignForm from "@/components/SignForm";

export default function Signup() {
  const [state, action, pending] = useActionState(signup);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/");
    }
  }, [state?.success, router]);

  return (
    <main className="flex items-center justify-center w-full sm:h-[calc(100vh-5rem)] h-full px-6 ">
      <SignForm isSignup action={action} state={state} pending={pending} />
    </main>
  );
}
