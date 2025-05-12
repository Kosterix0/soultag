"use client";

import { signin } from "@/lib/actions/auth";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SignForm from "@/components/SignForm";

export default function Signin() {
  const [state, action, pending] = useActionState(signin);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/");
    }
  }, [state?.success, router]);

  return (
    <main className="flex items-center justify-center w-full sm:h-[calc(100vh-5rem)] h-full px-6 ">
      <SignForm action={action} state={state} pending={pending} />
    </main>
  );
}
