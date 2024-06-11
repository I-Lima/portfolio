"use client";
import SectionTitle from "../SectionTitle";
import ServerListExperiences from "./ServerListExperiences";

export default function Experiences() {
  const _renderList = ServerListExperiences();

  return (
    <div
      id="experiences"
      className="flex flex-col h-screen max-w-screen w-full px-12 mb-32"
    >
      <div className="flex flex-col items-start">
        <SectionTitle title="Experiences" />
      </div>

      <div className="flex flex-col gap-8 justify-center">{_renderList}</div>
    </div>
  );
}
