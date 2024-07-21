"use client";

import Image from "next/image";
import { PHOTO } from "@/constant/urls";

export default function Photo() {
  return (
    <div className="relative flex items-center justify-center mb-16">
      <div className="bg-customBlue w-36 h-36 mr-2 mt-2 rounded-full md:w-40 md:h-40" />

      <div className="absolute w-32 h-32 md:w-36 md:h-36">
        <Image
          src={PHOTO}
          alt="developer photo"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
