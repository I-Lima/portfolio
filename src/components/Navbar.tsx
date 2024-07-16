"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-12 py-2 mb-12 bg-bgWhite dark:bg-bgBlack z-50 fixed mx-auto flex items-center justify-between w-full">
      <div>
        <a href="/">
          <Image src="logo.svg" alt="website logo" width={100} height={80} />
        </a>
      </div>

      <div className="hidden md:flex dark:text-customGray text-black text-xl">
        <Link
          href="/#about"
          className="ml-2 p-4 hover:bg-customBlue/[.80] hover:text-white transition duration-300 ease-in-out"
          passHref
        >
          About
        </Link>
        <Link
          href="/#experiences"
          className="ml-2 p-4 hover:bg-customBlue/[.80] hover:text-white transition duration-300 ease-in-out"
        >
          Experiences
        </Link>
        <Link
          href="/#projects"
          className=" ml-2 p-4 hover:bg-customBlue/[.80] hover:text-white transition duration-300 ease-in-out"
        >
          Projects
        </Link>
      </div>

      <div className="md:hidden">
        <button className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
