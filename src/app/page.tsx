"use client";

import Image from "next/image";
import Banner from "@/components/Home/Banner";
import { dimensions } from "../utils/layout";
import About from "@/components/Home/About";
import Experiences from "@/components/Home/Experiences";
import Projects from "@/components/Home/Projects";
import SwitchDarkMode from "@/components/SwitchDarkMode";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center">
      <div className="flex flex-col h-screen max-w-screen pt-24">
        <div className="flex justify-end w-screen pr-20">
          <SwitchDarkMode />
        </div>

        <div>
          <Banner />

          <div className="flex flex-col items-center mt-20">
            <p className="text-3xl mb-2 pb-1" style={{ borderBottomWidth: 1 }}>
              More Information
            </p>

            <Image
              src="arrow.svg"
              alt="arrow icon"
              width={dimensions.width / 80}
              height={dimensions.width / 80}
            />
          </div>
        </div>
      </div>

      <About />

      <Experiences />

      <Projects />
    </main>
  );
}
