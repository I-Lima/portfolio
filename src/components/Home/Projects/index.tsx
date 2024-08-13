"use client";

import SectionTitle from "../SectionTitle";
import ButtonMore from "../ButtonMore";
import ServerListProjects from "./ServerListProjects";
import { GITHUB } from "@/constant/urls";
export default function Projects() {
  const _renderList = ServerListProjects();

  return (
    <div id="projects" className="flex flex-col max-w-screen w-full py-8 mb-20">
      <div className="flex flex-col items-start">
        <SectionTitle title="Projects" />
      </div>

      <div
        className="
          grid justify-items-center gap-6
          lg:px-4 lg:ap-4 lg:items-start lg:grid-cols-2
          2xl:grid-cols-3
        "
      >
        {_renderList()}
      </div>

      <div className="flex justify-start px-50 mt-14">
        <ButtonMore onClick={() => window.open(GITHUB.REPOSITORIES)} />
      </div>
    </div>
  );
}
