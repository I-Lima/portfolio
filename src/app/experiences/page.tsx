"use client";
import SectionTitle from "@/components/Home/SectionTitle";
import ServerExperiences from "./ServerExperiences";
import Filter from "@/components/Experiences/Filter";

export default function Experiences() {
  const _renderList = ServerExperiences();

  return (
    <div
      id="experiences"
      className="flex flex-col h-full max-w-screen w-full pt-24 mb-32 px-12"
    >
      <div className="flex flex-row items-start justify-between pr-12">
        <SectionTitle title="Experiences" />

        <div>
          <Filter />
        </div>
      </div>

      <div className="flex flex-col gap-8 justify-center px-10">
        {_renderList}
      </div>
    </div>
  );
}
