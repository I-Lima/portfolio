"use client";

import { GITHUB, LINKEDIN, MAIL, MEDIUM } from "@/constant/urls";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-screen max-w-screen bg-customBlue h-56 items-center flex flex-col justify-center gap-12">
      <div className="flex flex-row gap-6 max-w-sm">
        <button
          className="relative w-12 h-12"
          onClick={() => window.open(LINKEDIN)}
        >
          <Image
            src="linkedin_icon_transparent.svg"
            alt="linkedin icon"
            layout="fill"
            objectFit="cover"
          />
        </button>

        <button
          className="relative w-12 h-12"
          onClick={() => window.open(GITHUB.PROFILE)}
        >
          <Image
            src="github_icon_transparent.svg"
            alt="github icon"
            layout="fill"
            objectFit="cover"
          />
        </button>

        <button
          className="relative w-12 h-12"
          onClick={() => window.open(MEDIUM)}
        >
          <Image
            src="medium_icon_transparent.svg"
            alt="medium icon"
            layout="fill"
            objectFit="cover"
          />
        </button>

        <button
          className="relative w-12 h-12"
          onClick={() => window.open(MAIL)}
        >
          <Image
            src="mail_icon_transparent.svg"
            alt="mail icon"
            layout="fill"
            objectFit="cover"
          />
        </button>
      </div>

      <div className="flex flex-row gap-2 text-white">
        <p className="text-center self-center">Developed by </p>

        <Image src="logoWithStroke.svg" width={100} height={50} alt="logo" />

        <p className="text-center self-center">© {currentYear}</p>
      </div>
    </div>
  );
}
