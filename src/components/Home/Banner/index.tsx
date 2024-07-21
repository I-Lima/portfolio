"use client";

import Image from "next/image";

export default function Banner() {
  function _renderMainComponent() {
    return (
      <>
        <div className="mx-14 my-12 md:my-20 md:mx-12">
          <div className="flex flex-row items-center justify-start">
            <h1 className="pr-6">Hi</h1>
            <div className="relative w-8 h-8">
              <Image
                src="hand.svg"
                alt="hand icon"
                className="animate-wave"
                layout="fill"
              />
            </div>
          </div>

          <div className="flex flex-col pt-12 space-y-4">
            <div className="flex flex-row">
              <p>{"I'm"}</p>

              <p className="font-bold ml-2 text-4xl">Ingrid Lima</p>
            </div>

            <div className="flex flex-col items-start md:flex-row md:items-center ">
              <p className="md:w-[130px]">{"And I'm a"}</p>

              <div className="inline-flex flex-col items-start max-h-10 overflow-hidden md:min-w-[280px]">
                <li>Mobile Developer</li>
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
        <div className="mx-8 my-10 md:my-16">
          <div className="flex flex-row items-center justify-start">
            <h1 className="pr-6">Hi</h1>
            <div className="relative w-8 h-8">
              <Image
                src="hand.svg"
                alt="hand icon"
                className="animate-wave"
                layout="fill"
              />
            </div>
          </div>

          <div className="flex flex-col pt-12 space-y-4">
            <div className="flex flex-row">
              <p>{"I'm"}</p>

              <p className="font-bold ml-2 text-4xl">Ingrid Lima</p>
            </div>

            <div className="flex flex-col items-start md:flex-row md:items-center ">
              <p className="md:w-[130px]">{"And I'm a"}</p>

              <div className="inline-flex flex-col items-start max-h-10 overflow-hidden md:min-w-[280px]">
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
