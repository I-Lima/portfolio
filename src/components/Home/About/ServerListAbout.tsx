import React, { useEffect, useState } from "react";
import aboutServices from "@/services/aboutServices";
import { aboutProps } from "@/types/about";
import Image from "next/image";
import { GITHUB, LINKEDIN, MAIL, MEDIUM } from "@/constant/urls";
import Photo from "../Photo";
const dimensions = {
  height: 0,
  width: 0,
};

const ServerListAbout = () => {
  const [dataAbout, setDataAbout] = useState<aboutProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await aboutServices.getAboutData();
        if (data) setDataAbout(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    dimensions.height = window.innerHeight;
    dimensions.width = window.innerWidth;

    loadData();
  }, []);

  const _renderLoading = () => {
    return (
      <div className="flex flex-col w-screen gap-20 md:flex-row">
        <div className="animate-pulse flex flex-col mt-4 transition-transform w-2/3 justify-start">
          <div className="flex flex-row items-center ">
            <div className="bg-customGray h-16 w-1/2 mr-24" />
            <div
              className="bg-customGray mt-4"
              style={{
                borderRadius: dimensions.width / 2,
                width: dimensions.width / 7,
                height: dimensions.width / 7,
              }}
            />
          </div>

          <div className="bg-customGray h-48 w-/4 mt-8" />

          <div className="mt-4 flex flex-row gap-4">
            <div className="bg-customGray h-8 w-8 rounded-3xl" />
            <div className="bg-customGray h-8 w-8 rounded-3xl" />
            <div className="bg-customGray h-8 w-8 rounded-3xl" />
          </div>
        </div>

        <div className="animate-pulse flex flex-col mt-4 transition-transform w-2/3 justify-start">
          <div className="bg-customGray h-8 w-56" />

          <div className="mt-4 flex flex-row gap-4">
            <div className="bg-customGray h-20 w-20 rounded" />
            <div className="bg-customGray h-20 w-20 rounded" />
            <div className="bg-customGray h-20 w-20 rounded" />
            <div className="bg-customGray h-20 w-20 rounded" />
            <div className="bg-customGray h-20 w-20 rounded" />
            <div className="bg-customGray h-20 w-20 rounded" />
          </div>
        </div>
      </div>
    );
  };

  const _renderError = () => {
    return (
      <div className="flex flex-col items-start justify-center">
        <Image src="/gifs/error.gif" alt="error gif" width={300} height={300} />

        <p>An error has occurred. Try later</p>
      </div>
    );
  };

  const _description = () => {
    if (isError) return _renderError();

    return (dataAbout?.description || []).map((line, index) => (
      <p
        className="mb-4 text-lg text-justify"
        key={index}
        style={{ whiteSpace: "pre-line" }}
      >
        {line}
      </p>
    ));
  };

  const _skillsList = () => {
    if (isError) return _renderError();

    return (dataAbout?.skills || []).map((skill, i) => (
      <div key={i} className="relative h-8 w-8 md:h-10 md:w-10 lg:w-12 lg:h-12">
        <Image src={skill.url} layout="fill" alt="my skills" />
      </div>
    ));
  };

  const _languagesList = () => {
    if (isError) return _renderError();

    return (dataAbout?.languages || []).map((skill, i) => (
      <div key={i} className="flex flex-row gap-3">
        <Image src={"/" + skill.name + ".png"} width={32} height={32} alt="language flag" />
        <text className="lg:text-lg font-bold">{skill.name} - {skill.level}</text>
      </div>
    ));
  };

  if (isLoading) return _renderLoading();

  return (
    <div
      className="
        flex flex-col justify-center w-full gap-2
        lg:flex-row lg:justify-between lg:px-6
      "
    >
      <div
        className="
          flex flex-col
          lg:max-w-7xl lg:flex-1 lg:mr-10
        "
      >
        <div
          className="
            flex flex-row items-center justify-between
            md:max-w-md
            lg:max-w-xl
          "
        >
          <h2
            className="
              text-3xl mb-4
              md:text-4xl
            "
          >
            {"I'm Ingrid Lima"}
          </h2>

          <Photo />
        </div>

        <div>{_description()}</div>

        <div className="mt-10 grid grid-cols-4 gap-0 max-w-sm">
          <button
            className="relative w-12 h-12 bg-bgBlack rounded-full"
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
            className="relative w-12 h-12 bg-bgBlack rounded-full"
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
            className="relative w-12 h-12 bg-bgBlack rounded-full"
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
            className="relative w-12 h-12 bg-bgBlack rounded-full"
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
      </div>

      <div className="flex flex-col gap-10">
        <div
          className="
            flex flex-col max-w-xl justify-start mt-10
            md:max-w-full
            lg:max-w-lg lg:flex-1
          "
        >
          <h2
            className="
              text-3xl font-bold underline
              lg:text-4xl
            "
          >
            My Skills
          </h2>

          <div className="flex flex-wrap items-center justify-start mt-8 gap-4 ml-4">
            {_skillsList()}
          </div>
        </div>

        <div
          className="
            flex flex-col max-w-xl justify-start mt-10
            md:max-w-full
            lg:max-w-2xl lg:flex-1
          "
        >
          <h2
            className="
              text-3xl font-bold underline
              lg:text-4xl
            "
          >
            My Languages
          </h2>

          <div className="flex flex-col items-start justify-start mt-8 gap-4 ml-4">
            {_languagesList()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerListAbout;
