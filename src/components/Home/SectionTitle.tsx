"use client";
import Image from "next/image";
import { dimensions } from "../utils/layout";

export default function SectionTitle({ title }: Readonly<{ title: string }>) {
  return (
    <div className="mb-16 relative flex items-center justify-center">
      <Image
        src="background_blue.svg"
        alt="background image"
        width={dimensions.width / 9}
        height={dimensions.height / 8}
      />

      <div
        className="absolute bg-black py-2 rounded"
        style={{
          height: dimensions.height / 11.2,
          width: dimensions.width / 9.8,
        }}
      >
        <h2 className="text-5xl text-center">{title}</h2>
      </div>
    </div>
  );
}
