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
  }

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <div className="flex flex-row gap-1 items-center">
      <MdSunny size={36} className="text-black" />

      <div
        onClick={handleToggle}
        className={`w-16 h-8 flex items-center border-black border-2 bg-white rounded-full p-1 cursor-pointer transition-colors duration-300 ${isDark ? 'bg-green-500' : ''}`}
      >
        <div
          className={`bg-black w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${isDark ? 'translate-x-7' : ''
            }`}
        ></div>
      </div>

      <MdDarkMode size={36} className="text-white" />
    </div>
  );
}

export default SwitchDarkMode;
