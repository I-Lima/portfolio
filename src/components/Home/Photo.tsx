"use client";
import Image from "next/image";
import { dimensions } from "../utils/layout";
import { PHOTO } from "@/constant/index";

export default function Photo() {
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
