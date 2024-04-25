"use client";
import { GITHUB, LINKEDIN, MAIL, MEDIUM } from "@/constant/urls";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-screen max-w-screen bg-customBlue h-56 items-center flex flex-col justify-center gap-12 mt-32">
      <div className="flex flex-row gap-6 max-w-sm">
        <Image
          src="linkedin_icon_transparent.svg"
          alt="linkedin icon"
          width={50}
          height={50}
          onClick={() => window.open(LINKEDIN)}
          className="hover:cursor-pointer"
        />

        <Image
          src="github_icon_transparent.svg"
          alt="github icon"
          width={50}
          height={50}
          onClick={() => window.open(GITHUB.PROFILE)}
          className="hover:cursor-pointer"
        />

        <Image
          src="medium_icon_transparent.svg"
          alt="medium icon"
          width={50}
          height={50}
          onClick={() => window.open(MEDIUM)}
          className="hover:cursor-pointer"
        />

        <Image
          src="mail_icon_transparent.svg"
          alt="mail icon"
          width={50}
          height={50}
          onClick={() => window.open(MAIL)}
          className="hover:cursor-pointer"
        />
      </div>

      <div className="flex flex-row gap-2">
        <p className="text-center self-center">Developed by </p>

        <Image src="logoWithStroke.svg" width={100} height={50} alt="logo" />

        <p className="text-center self-center">© {currentYear}</p>
      </div>
    </div>
  );
}
