"use client";

import { useEffect } from "react";
import Image from "next/image";
import { PHOTO } from "@/constant/urls";
const dimensions = {
  height: 0,
  width: 0,
};

export default function Photo() {
  useEffect(() => {
    dimensions.height = window.innerHeight;
    dimensions.width = window.innerWidth;
  }, []);

  return (
    <div className="relative flex items-center justify-center mb-16">
      <div
        className="bg-customBlue w-36 h-36 mr-2 mt-2"
        style={{
          borderRadius: "50%",
        }}
      />

      <div className="absolute w-32 h-32">
        <Image
          src={PHOTO}
          alt="developer photo"
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
}
