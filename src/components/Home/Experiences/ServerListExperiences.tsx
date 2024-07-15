import React, { useEffect, useState } from "react";
import { experienceHistoryProps, experienceProps } from "@/types/experiences";
import Image from "next/image";
import experienceServices from "@/services/experienceServices";
import Tag from "@/components/Tag";
import ButtonMore from "../ButtonMore";
const dimensions = {
  height: 0,
  width: 0,
};

const ServerListExperiences = () => {
  const [dataExperience, setDataExperience] = useState<experienceProps[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await experienceServices.getPreviewExperiencesData();
        if (data) setDataExperience(data);
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
      <>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="animate-pulse flex flex-col mt-4 transition-transform bg-customGray h-16 w-3/5" />

          <div className="animate-pulse flex flex-col mt-6 transition-transform w-full items-center">
            <div className="flex flex-row gap-8 w-full justify-center">
              <div className="bg-customGray h-12 w-56" />
              <div className="bg-customGray h-12 w-2/5" />
            </div>

            <div className="mt-4 flex flex-row bg-customGray h-56 w-2/5 justify-center" />

            <div className="mt-4 flex flex-row gap-4">
              <div className="bg-customGray h-10 w-20 rounded" />
              <div className="bg-customGray h-10 w-20 rounded" />
              <div className="bg-customGray h-10 w-20 rounded" />
              <div className="bg-customGray h-10 w-20 rounded" />
              <div className="bg-customGray h-10 w-20 rounded" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="animate-pulse flex flex-col mt-4 transition-transform bg-customGray h-16 w-3/5" />

          <div className="animate-pulse flex flex-col mt-6 transition-transform w-full items-center">
            <div className="flex flex-row gap-8 w-full justify-center">
              <div className="bg-customGray h-12 w-56" />
              <div className="bg-customGray h-12 w-2/5" />
            </div>

            <div className="mt-4 flex flex-row bg-customGray h-56 w-2/5 justify-center" />

            <div className="mt-4 flex flex-row gap-4">
              <div className="bg-customGray h-10 w-20 rounded" />
              <div className="bg-customGray h-10 w-20 rounded" />
              <div className="bg-customGray h-10 w-20 rounded" />
              <div className="bg-customGray h-10 w-20 rounded" />
              <div className="bg-customGray h-10 w-20 rounded" />
            </div>
          </div>
        </div>
      </>
    );
  };

  const _renderError = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/gifs/error.gif"
          alt="error gif"
          width={dimensions.width / 2}
          height={dimensions.width / 2}
        />

        <p>An error has occurred. Try later</p>
      </div>
    );
  };

  const _renderList = (history: experienceHistoryProps[]) => {
    return history.map((historyItem, i) => {
      const tagArray = historyItem.tags || [];

      return (
        <div key={i} className="flex flex-row justify-center mt-12">
          <div>
            <p className="text-customGray">{`(${historyItem.entrance} - ${historyItem.output})`}</p>
          </div>

          <div className="flex flex-col max-w-xl">
            <div className="flex flex-col px-4">
              <div className="flex flex-row">
                <p className="flex-wrap text-2xl mb-2 font-bold">
                  {historyItem.role}
                </p>
              </div>

              <p className="flex flex-wrap text-justify text-lg px-2">
                {historyItem.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-4 px-4 justify-start">
                {tagArray.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  if (isLoading || !dataExperience) return _renderLoading();
  if (isError) return _renderError();

  return (
    <div>
      {dataExperience.map((item, i) => {
        return (
          <div key={i} className="flex justify-center">
            <div className="flex flex-col max-w-3xl">
              <div className={"w-full border-b-2 justify-center"}>
                <h3 className="text-4xl pb-2 text-center font-bold">
                  {item.enterprise}
                </h3>
              </div>

              <div className="flex flex-col px-4">
                {_renderList(item.history)}
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex flex-wrap justify-start px-50">
        <ButtonMore href="/experiences" />
      </div>
    </div>
  );
};

export default ServerListExperiences;
