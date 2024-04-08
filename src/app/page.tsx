"use client";

import Image from "next/image";
import Banner from "@/components/Home/Banner";
import { dimensions } from "../components/utils/layout";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center">
      <div className="flex flex-col h-screen max-w-screen max-h-screen pt-24">
        <Banner />

        <div className="flex flex-col items-center mt-20">
          <p className="text-3xl mb-2 pb-1" style={{ borderBottomWidth: 1 }}>
            More Informations
          </p>

          <Image
            src="arrow.svg"
            alt="arrow icon"
            width={dimensions.width / 80}
            height={dimensions.width / 80}
          />
        </div>
      </div>
    </main>
  );
}
