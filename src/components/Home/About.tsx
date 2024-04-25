"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Photo from "./Photo";
import { GITHUB, LINKEDIN, MAIL, MEDIUM } from "@/constant/urls";
import { SKILL_ELEMENTS, ABOUT_TEXT } from "@/constant/index";

export default function About() {
  const _skillsList = () => {
    return SKILL_ELEMENTS.map((skill, i) => {
      return (
        <Image key={i} src={skill.url} width={50} height={50} alt="my skills" />
      );
    });
  };

  const _aboutText = () => {
    return ABOUT_TEXT.split("\n").map((line, index) => {
      return (
        <p
          className="mb-4 text-lg text-justify"
          key={index}
          style={{ marginBottom: "10px" }}
        >
          {line}
        </p>
      );
    });
  };

  return (
    <div
      id="about"
      className="flex flex-col h-screen max-w-screen w-screen px-12 py-8 mb-20"
    >
      <div className="flex flex-col items-start">
        <SectionTitle title="About" />
      </div>

      <div className="flex flex-row justify-between px-12 gap-4">
        <div className="flex-1 flex-col max-w-4xl mr-10">
          <div className="flex flex-row items-center justify-start">
            <h2 className="text-4xl mr-24 mb-4">{"I'm Ingrid Lima"}</h2>

            <Photo />
          </div>

          <div className="flex flex-col">{_aboutText()}</div>

          <div className="mt-20 grid grid-cols-4 gap-0 max-w-sm">
            <Image
              src="linkedin_icon.svg"
              alt="linkedin icon"
              width={50}
              height={50}
              onClick={() => window.open(LINKEDIN)}
              className="hover:cursor-pointer"
            />

            <Image
              src="github_icon.svg"
              alt="github icon"
              width={50}
              height={50}
              onClick={() => window.open(GITHUB.PROFILE)}
              className="hover:cursor-pointer"
            />

            <Image
              src="medium_icon.svg"
              alt="medium icon"
              width={50}
              height={50}
              onClick={() => window.open(MEDIUM)}
              className="hover:cursor-pointer"
            />

            <Image
              src="mail_icon.svg"
              alt="mail icon"
              width={50}
              height={50}
              onClick={() => window.open(MAIL)}
              className="hover:cursor-pointer"
            />
          </div>
        </div>

        <div className="flex-1 flex-col max-w-2xl justify-start">
          <h2 className="text-4xl font-bold underline">My Skills</h2>

          <div className="flex flex-wrap items-center justify-start mt-8 gap-4 ">
            {_skillsList()}
          </div>
        </div>
      </div>
    </div>
  );
}
