"use client";

import SectionTitle from "../SectionTitle";
import ServerListExperiences from "./ServerListExperiences";
import ButtonMore from "../ButtonMore";
import { useRouter } from "next/navigation";

export default function Experiences() {
  const _renderList = ServerListExperiences();
  const route = useRouter();

  return (
    <div id="experiences" className="flex flex-col max-w-screen w-full mb-20">
      <div className="flex flex-col items-start">
        <SectionTitle title="Experiences" />
      </div>

      <div className="flex flex-col gap-8 justify-center md:px-8">
        {_renderList}

        <div className="flex flex-wrap justify-start px-50">
          <ButtonMore onClick={() => route.push("/experiences")} />
        </div>
      </div>
    </div>
  );
}
