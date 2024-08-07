import Image from "next/image";
import React from "react";

export default function ContentCard({ title, description }) {
  return (
    <div className="p-4 border-2 border-solid border-gray-600 rounded-lg md:w-[600px] w-[300px]">
      <div className="flex md:flex-row flex-col items-start gap-5 justify-between">
        <Image src={"/rocket.png"} alt="rocket" className="p-5" width={200} height={200} /> 
        <div className="flex flex-col md:items-start h-[200px]">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm mt-5">{description.slice(0, 100)}...</p>
        </div>
      </div>
      <button className="w-full border-2 border-solid border-gray-600 rounded-lg mt-5 text-center text-xl font-bold py-3">
        Read
      </button>
    </div>
  );
}
