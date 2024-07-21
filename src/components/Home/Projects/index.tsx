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

      <div className="flex flex-col max-w-screen gap-16 px-2 justify-center items-center">
        {_renderList()}
      </div>

      <div className="flex justify-start px-50 mt-14">
        <ButtonMore onClick={() => window.open(GITHUB.REPOSITORIES)} />
      </div>
    </div>
  );
}
