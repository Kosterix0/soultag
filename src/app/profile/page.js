"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();
  return (
    <>
      <h1>Welcome {session?.user?.email}</h1>
      <button
        className="h-10 text-[#f5ece6] hover:bg-[#D0B9A7] bg-[#B08463] transition-all duration-300 cursor-pointer rounded-lg hover:text-[#7f5841] "
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </>
  );
}
