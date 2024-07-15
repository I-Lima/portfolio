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
    <div className="mb-16 relative flex items-center justify-center">
      <div
        className="bg-customBlue mr-4 mt-4"
        style={{
          width: dimensions.width / 7,
          height: dimensions.width / 7,
          borderRadius: dimensions.width / 14,
        }}
      />

      <Image
        src={PHOTO}
        alt="developer photo"
        width={dimensions.width / 8}
        height={dimensions.width / 8}
        style={{
          position: "absolute",
          borderRadius: 125,
        }}
      />
    </div>
  );
}
