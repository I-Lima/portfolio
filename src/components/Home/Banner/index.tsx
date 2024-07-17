"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Banner() {
  const [dimensions, setDimensions] = useState({
    height: 700,
    width: 800,
  });

  useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);

  function _renderMainComponent() {
    return (
      <>
        <div className="flex flex-row items-center justify-start">
          <h1 className="pr-6 text-4xl">Hi</h1>
          <Image
            src="hand.svg"
            alt="hand icon"
            width={dimensions.width / 34}
            height={dimensions.width / 34}
            className="animate-wave"
          />
        </div>

        <div className="flex flex-col pt-12 space-y-4">
          <p className="text-4xl">{"I'm"}</p>
          <p className="text-6xl font-bold">Ingrid Lima</p>
          <div className="flex flex-row">
            <p className="text-4xl flex flex-row items-center">{"And I'm a"}</p>
            <p className="font-bold ml-2 text-5xl">mobile developer</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="mb-16 relative flex items-center justify-center">
      <div className="flex items-center bg-customBlue rounded-xl rotate-2">
        <div className="mx-20 my-16">{_renderMainComponent()}</div>
      </div>

      <div className="absolute bg-bgWhite dark:bg-black rounded-xl border-white">
        <div className="mx-16 my-12">
          <div className="flex flex-row items-center justify-start">
            <h1 className="pr-6 text-4xl">Hi</h1>
            <Image
              src="hand.svg"
              alt="hand icon"
              width={dimensions.width / 34}
              height={dimensions.width / 34}
              className="animate-wave"
            />
          </div>

          <div className="flex flex-col pt-12 space-y-4">
            <p className="text-4xl">{"I'm"}</p>

            <p className="text-6xl font-bold">Ingrid Lima</p>

            <div className="flex flex-row items-start">
              <p className="text-4xl flex flex-row items-center">
                {"And I'm a"}
              </p>

              <div className="ml-4 inline-flex flex-col items-start max-h-12 overflow-hidden min-w-[340px]">
                <ul className="block animate-text-slide text-left text-4xl font-bold leading-tight [&_li]:block ">
                  <li>Mobile Developer</li>
                  <li>Front-end Developer</li>
                  <li>Full stack Developer</li>
                  <li aria-hidden="true">Mobile Developer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
