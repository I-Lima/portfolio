import { useState } from "react";
import { MdDarkMode, MdSunny } from "react-icons/md";

function SwitchDarkMode() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex flex-row gap-1 items-center">
      <MdSunny size={36} className="text-black" />

      <div
        onClick={() => setIsOn(!isOn)}
        className={`w-16 h-8 flex items-center border-black border-2 bg-white rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOn ? 'bg-green-500' : ''}`}
      >
        <div
          className={`bg-black w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${isOn ? 'translate-x-7' : ''
            }`}
        ></div>
      </div>

      <MdDarkMode size={36} className="text-white" />
    </div>
  );
}

export default SwitchDarkMode;
