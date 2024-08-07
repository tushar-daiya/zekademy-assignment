"use client";
import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function AuthLayout({ children }) {
  const router = useRouter();
  const { user } = useAuthContext();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);
  return (
    <div className="flex h-screen md:flex-row flex-col bg-bg">
      <div className="md:w-1/2 w-full md:h-screen h-[50dvh]">
        <Image
          width={1920}
          height={1080}
          src="/bg.webp"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 w-full md:h-screen md:ml-auto md:mr-auto">
        <div className="flex flex-col relative items-center justify-center md:h-screen h-[50dvh] ">
          <p className="text-xl md:block hidden font-bold  absolute top-5 ">
            Journey to a trillion miles start from here
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}
