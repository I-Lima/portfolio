"use client";

import Banner from "@/components/Home/Banner/index";
import About from "@/components/Home/About";
import Experiences from "@/components/Home/Experiences";
import Projects from "@/components/Home/Projects";
import { FaArrowDown } from "react-icons/fa";
import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-center px-6">
      <div className="flex flex-col h-screen max-w-screen pt-24">
        <div className="flex flex-col items-center justify-center h-full">
          <Banner />

          <div className="flex flex-col items-center mt-20">
            <p className="text-3xl mb-5 pb-1" style={{ borderBottomWidth: 1 }}>
              More Information
            </p>

            <div className="flex flex-col items-center motion-safe:animate-bounce">
              <div className="h-8 border-2 border-dashed w-1" />
              <FaArrowDown className="text-black dark:text-white text-3xl" />
            </div>
          </div>
        </div>
      </div>

      <About />

      <Experiences />

      <Projects />

      <Contact />
    </main>
  );
}
