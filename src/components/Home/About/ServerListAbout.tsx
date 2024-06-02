import aboutServices from "@/services/aboutServices";
import { aboutProps } from "@/types/dao";
import Image from "next/image";
import { GITHUB, LINKEDIN, MAIL, MEDIUM } from "@/constant/urls";
import Photo from "../Photo";
import React, { useEffect, useState } from "react";
import { dimensions } from "@/utils/layout";

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
          style={{ marginBottom: "10px", whiteSpace: "pre-line" }}
        >
          {line}
        </p>
      )
    );
  };

  const _skillsList = () => {
    if (isError) return _renderError();

    return (dataAbout?.skills || []).map((skill, i) => (
      <Image key={i} src={skill.url} width={50} height={50} alt="my skills" />
    ));
  };

  return () => {
    if (isLoading) return _renderLoading();
    
    return (
      <div className="flex flex-row justify-between px-12 gap-4">
        <div className="flex-1 flex-col max-w-4xl mr-10">
          <div className="flex flex-row items-center justify-start">
            <h2 className="text-4xl mr-24 mb-4">{"I'm Ingrid Lima"}</h2>

            <Photo />
          </div>

          <div className="flex flex-col">
            { _description() }
          </div>

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
            { _skillsList() }
          </div>
        </div>
      </div>
    )
  }
}

export default ServerListAbout;