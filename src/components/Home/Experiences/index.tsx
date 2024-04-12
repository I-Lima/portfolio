"use client";
import { useMemo } from "react";
import { EXPERIENCE_LIST } from "@/constant";
import Tag from "./Tag";
import SectionTitle from "../SectionTitle";
import { MdArrowForward } from "react-icons/md";

export default function Experiences() {
  const item = EXPERIENCE_LIST[0];
  const data = useMemo(() => {
    const slicedData = item.data.slice(0, 2);
    return slicedData;
  }, [item.data]);

  const listData = () => {
    return data.map((dataItem, i) => {
      const tagArray = dataItem.tags.split(", ");
      const output = dataItem.output || "Atualmente";
      const visibilityClass = i === 1 ? "hidden" : "flex";
      const paddingTopClass = i === 1 ? "pt-2" : "pt-20";

      return (
        <div
          key={i}
          className="flex justify-center"
          style={{ marginLeft: "-8rem" }} // -100 em px equivalente
        >
          <div className={`mr-4 ${paddingTopClass}`}>
            <p className="text-customGray">{`(${dataItem.entrance} - ${output})`}</p>
          </div>

          <div className="flex flex-col max-w-xl">
            <div
              className={`w-full border-b-2 mb-8 justify-center ${visibilityClass}`}
            >
              <h3 className="text-3xl pb-2 text-center font-bold">
                {item.enterprise}
              </h3>
            </div>

            <div className="flex flex-col px-4">
              <div className="flex flex-row">
                <p className="flex-wrap text-2xl mb-4 font-bold">
                  {dataItem.role}
                </p>
              </div>

              <p className="flex flex-wrap text-justify text-lg px-4">
                {dataItem.description}
              </p>

              <div className="flex flex-wrap gap-4 px-2 mt-4 justify-start">
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

  return (
    <div
      id="experiences"
      className="flex flex-col h-screen max-w-screen w-screen px-12 py-8 mb-32"
    >
      <div className="flex flex-col items-start">
        <SectionTitle title="Experiences" />
      </div>

      <div className="flex flex-col gap-8 justify-center w-full">
        {listData()}

        <div className="flex flex-wrap justify-start px-96">
          <div
            className="flex flex-row gap-2 px-4 py-2 border-2 border-dashed rounded-xl hover:cursor-pointer"
            onClick={() => {}}
          >
            <p className="text-2xl font-bold">More</p>

            <MdArrowForward size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
