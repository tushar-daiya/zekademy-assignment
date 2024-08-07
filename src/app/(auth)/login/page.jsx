import GoogleButton from "@/components/GoogleButton";
import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";
export default function page() {
  return (
    <div className="py-5 px-10 flex flex-col items-center justify-between md:border-gray-200 md:border md:rounded-3xl w-full h-full max-h-[450px] max-w-lg md:bg-bg-light">
      <div>
        <p className="text-3xl font-bold  text-center ">Login</p>
        <p className="text-xl mt-2  text-center ">Choose a login method</p>
      </div>
      <div className="flex flex-col items-center gap-5 justify-center w-full">
        <GoogleButton text={"Sign in with Google"} />
        <Link
          href={"/login/email"}
          className="bg-bg w-full border-2 border-gray-500 text-white py-3 flex items-center justify-center  rounded-xl"
        >
          <MdEmail size={32} />{" "}
          <span className="text-xl font-bold ml-2">Sign in with Email</span>
        </Link>
      </div>
      <p className="text-center  text-sm mt-5">
        Don't have an account?{" "}
        <Link href="/signup">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </p>
    </div>
  );
}
