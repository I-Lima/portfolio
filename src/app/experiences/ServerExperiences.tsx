import { useEffect, useState } from "react";
import experienceServices from "@/services/experienceServices";
import { experienceHistoryProps } from "@/types/experiences";
import Image from "next/image";
import Tag from "@/components/Tag";
import ButtonCustom from "@/components/Experiences/Button";
import { useExperienceStore } from "@/hooks/stateHooks";
const dimensions = {
  height: 0,
  width: 0,
};

const ServerExperiences = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { setExperienceData, filteredExperienceData } = useExperienceStore(
    (state) => state,
  );

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await experienceServices.getAllExperienceData();
        if (data) setExperienceData(data);
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
        <div className="flex flex-col w-full justify-start items-start h-screen">
          <div className="animate-pulse mt-4 transition-transform bg-customGray h-16 w-2/4" />

          <div className="flex w-full mt-8">
            <div className="flex flex-col w-full">
              <div className="animate-pulse mt-4 transition-transform bg-customGray h-10 w-2/5" />
              <div className="animate-pulse mt-4 transition-transform bg-customGray h-10 w-1/5" />

              <div className="animate-pulse transition-transform bg-customGray h-48 w-3/5 mt-8" />
            </div>

            <div className="flex flex-col w-1/2">
              <div className="animate-pulse transition-transform bg-customGray h-12 w-32 mt-8" />

              <div className="animate-pulse transition-transform flex flex-row mt-8 gap-4">
                <div className="bg-customGray h-12 w-32 rounded" />
                <div className="bg-customGray h-12 w-32 rounded" />
                <div className="bg-customGray h-12 w-32 rounded" />
              </div>
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

  const _renderList = (data: experienceHistoryProps[]) => {
    return data.map((item, i) => {
      const tagArray = item.tags || [];

      return (
        <div key={i} className="flex flex-col mt-4 mb-16 w-full pr-16">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-2xl font-bold">{item.role}</p>
              </div>

              <div className="text-xl font-bold mt-1">{`(${item.entrance} - ${item.output})`}</div>

              <div className="mt-4 text-justify text-lg max-w-3xl">
                {item.description}
              </div>
            </div>

            <div className="flex flex-col max-w-xl items-start justify-start w-full">
              <p className="border-b-2 text-2xl w-14">Skills</p>

              <div className="flex flex-wrap gap-4 mt-4 px-4">
                {tagArray.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div>
            </div>
          </div>

          {item.project_website && (
            <div className="flex mt-8">
              <ButtonCustom
                title="Project website"
                onClick={() =>
                  item.project_website && window.open(item.project_website)
                }
              />
            </div>
          )}
        </div>
      );
    });
  };

  if (isError || !filteredExperienceData) return _renderError();
  if (isLoading) return _renderLoading();

  return (
    <div>
      {filteredExperienceData.map((item, i) => {
        if (!item) return null;

        return (
          <div key={i} className="pt-4 pb-6 flex flex-col mb-12">
            <div className="justify-start flex flex-row">
              <h3 className="text-4xl border-b-2 font-bold">
                {item.enterprise}
              </h3>

              {item.company_website && (
                <div className="ml-8">
                  <ButtonCustom
                    title="Company website"
                    onClick={() =>
                      item.company_website && window.open(item.company_website)
                    }
                  />
                </div>
              )}
            </div>

            <div className="mt-6">{_renderList(item.history)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ServerExperiences;
