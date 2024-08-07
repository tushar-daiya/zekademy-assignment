"use client";
import { auth, provider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

export default function GoogleButton({ text }) {
  async function handleGoogleSignup() {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      return error.message;
    }
  }
  return (
    <button
      onClick={async () => {
        toast.promise(handleGoogleSignup(), {
          loading: "Signing up...",
          success: "Signup Successful",
          error: "Signup Failed",
        });
      }}
      className="bg-bg w-full border-2 border-gray-500 text-white py-3 flex items-center justify-center  rounded-xl"
    >
      <FcGoogle size={32} />{" "}
      <span className="text-xl font-bold ml-2">{text}</span>
    </button>
  );
}
