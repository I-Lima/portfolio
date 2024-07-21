"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdSunny } from "react-icons/md";

function SwitchDarkMode() {
  const [isDark, setIsDark] = useState(false);
  const { setTheme, theme } = useTheme();

  const handleToggle = () => {
    setIsDark(!isDark);
    setTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <div className="flex flex-row gap-1 items-center">
      <MdSunny className="text-black w-8 h-8" />

      <div
        onClick={handleToggle}
        className="w-12 h-6 flex items-center border-black border-2 bg-white rounded-full p-1 cursor-pointer"
      >
        <div
          className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-linear ${
            isDark ? "translate-x-5" : ""
          }`}
        ></div>
      </div>

      <MdDarkMode className="text-white w-8 h-8" />
    </div>
  );
}

export default SwitchDarkMode;
