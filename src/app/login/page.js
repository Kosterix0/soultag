"use client";

import { signin } from "@/lib/actions/auth";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SignForm from "@/components/SignForm";
import { useSession, signIn } from "next-auth/react";

export default function Signin() {
  const [state, action, pending] = useActionState(signin);
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (state?.success && state?.credentials) {
      signIn("credentials", {
        email: state.credentials.email,
        password: state.credentials.password,
        redirect: false,
      }).then((res) => {
        if (res?.ok && session.status == "authenticated") router.push("/");
      });
    }
  }, [state, session.status, router]);

  return (
    <main className="flex items-center justify-center w-full sm:h-[calc(100vh-5rem)] h-full px-6 ">
      <SignForm action={action} state={state} pending={pending} />
    </main>
  );
}
