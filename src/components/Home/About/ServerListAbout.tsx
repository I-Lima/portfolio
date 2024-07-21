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
      <div className="flex flex-row w-screen gap-20">
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
      <Image key={i} src={skill.url} width={36} height={36} alt="my skills" />
    ));
  };

  if (isLoading) return _renderLoading();

  return (
    <div className="flex flex-col justify-center w-full gap-4">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-3xl mb-4">{"I'm Ingrid Lima"}</h2>

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

      <div className="flex flex-col max-w-xl justify-start mt-10">
        <h2 className="text-3xl font-bold underline">My Skills</h2>
        <div className="flex flex-wrap items-center justify-start mt-8 gap-4 ml-4">
          {_skillsList()}
        </div>
      </div>
    </div>
  );
};

export default ServerListAbout;
