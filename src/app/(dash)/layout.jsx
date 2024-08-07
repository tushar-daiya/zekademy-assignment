"use client";
import SignoutButton from "@/components/SignoutButton";
import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function DashLayout({ children }) {
  const router = useRouter();
  const { user } = useAuthContext();
  useEffect(() => {
    if (!user) {
      router.push("/signup");
    }
  }, [user]);
  if (user) {
    return (
      <>
        <div className="flex items-center justify-between h-16 px-10 bg-bg-light border-b-2 border-solid border-gray-600">
          <Image src={"/logo.png"} alt="logo" width={88} height={65} />
          <SignoutButton />
        </div>
        {children}
      </>
    );
  } else {
    return <div>loading</div>;
  }
}
