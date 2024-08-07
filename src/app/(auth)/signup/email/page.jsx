"use client";
import { useAuthContext } from "@/context/AuthContext";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
export default function page() {
  async function handleSubmit(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
      throw new Error("Please fill all the fields");
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      return;
    } catch (error) {
      if(error.code === "auth/email-already-in-use"){
        throw new Error("Email already in use");
      }
      throw error;
    }
  }
  return (
    <div className="py-5 px-10 flex flex-col items-center justify-between md:border-gray-200 md:border md:rounded-3xl w-full h-full max-h-[450px] max-w-lg md:bg-bg-light">
      <div>
        <p className="text-3xl font-bold  text-center ">Sign up</p>
      </div>
      <form
        action={async (e) =>
          toast.promise(handleSubmit(e), {
            loading: "Signing up...",
            success: "Signup Successful",
            error: (error) => error.message,
          })
        }
        className="w-full"
      >
        <input
          required
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border-2 border-gray-500 text-white py-3 px-4 bg-bg flex items-center justify-center  rounded-xl"
        />
        <input
          required
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border-2 border-gray-500 mt-5 text-white py-3 px-4 bg-bg flex items-center justify-center  rounded-xl"
        />
        <button
          type="submit"
          className="bg-bg w-full border-2 mt-8 border-gray-500 text-white py-3 flex items-center justify-center  rounded-xl"
        >
          <span className="text-xl font-bold ml-2">Sign up</span>
        </button>
      </form>

      <p className="text-center  text-sm mt-5">
        Already a user?{" "}
        <Link href="/login">
          <span className="text-blue-500">Login in</span>
        </Link>
      </p>
    </div>
  );
}
