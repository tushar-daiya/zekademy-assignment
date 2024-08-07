"use client";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import React from "react";
import { toast } from "sonner";

export default function SignoutButton() {
  return (
    <button
      onClick={async () =>
        toast.promise(signOut(auth), {
          loading: "Signing out...",
          success: "Signed out successfully",
          error: "Sign out failed",
        })
      }
      className="text-2xl text-blue-primary font-bold cursor-pointer "
    >
      Sign out
    </button>
  );
}
