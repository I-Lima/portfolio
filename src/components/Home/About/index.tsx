"use client";
import React from "react";
import SectionTitle from "../SectionTitle";
import ServerListAbout from "./ServerListAbout";

export default function About() {
  const _renderComponent = ServerListAbout();

  return (
    <div
      id="about"
      className="flex flex-col h-screen max-w-screen w-screen px-12 py-8 mb-20"
    >
      <div className="flex flex-col items-start">
        <SectionTitle title="About" />
      </div>

      <div>{_renderComponent()}</div>
    </div>
  );
}
