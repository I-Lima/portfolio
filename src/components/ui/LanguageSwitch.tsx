"use client";

import { LANGUAGES } from "@/constant/language";
import { useDictionary } from "@/context/DictionaryContext";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function LanguageSwitch() {
  const [open, setOpen] = useState(false);
  const {lang, changeLanguage} = useDictionary();

  const _handleOpen = () => setOpen(!open);

  const src = {
    en: "/images/English.png",
    pt: "/images/Portuguese.png",
  };

  const _renderList = () => {
    return LANGUAGES.map((item, i) => {
      const imageSrc = src[item as keyof typeof src];

      return (
        <div
          key={i}
          className="flex flex-row border-2 rounded-md px-1 py-1 hover:cursor-pointer bg-white items-center justify-center"
          onClick={() => changeLanguage(item)}
        >
          <Image src={imageSrc} alt={item} width={26} height={26} />
        </div>
      );
    })
  }

  return (
    <div className="flex flex-col h-full">
      <div
        className="flex flex-row border-2 rounded-md px-3 py-1 gap-2 hover:cursor-pointer border-customBlue bg-white items-center"
        onClick={() => _handleOpen()}
      >
        <Image src={src[lang as keyof typeof src]} alt="language flag" width={26} height={26} />
        <IoIosArrowDown size={24} color="black" />
      </div>

      <div
        className={`absolute mt-14 right-4 w-24 bg-bgWhite rounded-md z-10 transition duration-150 ease-in ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        {_renderList()}
      </div>
    </div>
  )
}

export default LanguageSwitch;
