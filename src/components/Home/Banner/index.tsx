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
        <div className="mx-16 my-12">
          <div className="flex flex-row items-center justify-start">
            <h1 className="pr-6">Hi</h1>
            <Image
              src="hand.svg"
              alt="hand icon"
              width={dimensions.width / 34}
              height={dimensions.width / 34}
              className="animate-wave"
            />
          </div>

          <div className="flex flex-col pt-12 space-y-4">
            <div className="flex flex-row">
              <p className="">{"I'm"}</p>

              <p className="font-bold ml-2 text-4xl">Ingrid Lima</p>
            </div>

            <div className="flex flex-col items-start">
              <p className=" flex flex-row items-center">{"And I'm a"}</p>

              <div className="inline-flex flex-col items-start max-h-10 overflow-hidden ">
                <ul className="block text-left font-bold leading-tight text-3xl">
                  <li>Mobile Developer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="mb-16 relative flex items-center justify-center text-3xl">
      <div className="flex items-center bg-customBlue rounded-xl rotate-2">
        <div className="mx-18 my-2">{_renderMainComponent()}</div>
      </div>

      <div className="absolute bg-bgWhite dark:bg-black rounded-xl border-white">
        <div className="mx-8 my-10">
          <div className="flex flex-row items-center justify-start">
            <h1 className="pr-6">Hi</h1>
            <Image
              src="hand.svg"
              alt="hand icon"
              width={35}
              height={35}
              className="animate-wave"
            />
          </div>

          <div className="flex flex-col pt-12 space-y-4">
            <div className="flex flex-row">
              <p className="">{"I'm"}</p>

              <p className="font-bold ml-2 text-4xl">Ingrid Lima</p>
            </div>

            <div className="flex flex-col items-start">
              <p className=" flex flex-row items-center">{"And I'm a"}</p>

              <div className="inline-flex flex-col items-start max-h-10 overflow-hidden ">
                <ul className="block animate-text-slide text-left font-bold leading-tight [&_li]:block text-3xl">
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
