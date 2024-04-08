"use client";
import Image from "next/image";
import { dimensions } from "../utils/layout";

export default function Banner() {
  return (
    <div className="mb-16 relative flex items-center justify-center">
      <Image
        src="background_blue.svg"
        alt="background image"
        width={dimensions.width / 2}
        height={dimensions.height / 2}
      />

      <div
        className="absolute bg-black p-6 rounded-xl"
        style={{
          height: dimensions.height / 2.45,
          width: dimensions.width / 2.13,
        }}
      >
        <div className="flex flex-row items-center justify-start">
          <h1 className="pr-6 text-4xl">Hi</h1>
          <Image
            src="hand.svg"
            alt="hand icon"
            width={dimensions.width / 34}
            height={dimensions.width / 34}
          />
        </div>

        <div className="flex flex-col pt-12 space-y-4">
          <p className="text-4xl">{"I'm"}</p>
          <p className="text-6xl font-bold">Ingrid Lima</p>
          <div className="flex flex-row">
            <p className="text-4xl flex flex-row items-center">{"And I'm a"}</p>
            <p className="font-bold ml-2 text-5xl">mobile developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
