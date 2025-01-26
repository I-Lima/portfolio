"use client";
import { MdArrowForward } from "react-icons/md";

interface ButtonMoreProps {
  onClick: () => void;
}

const ButtonMore: React.FC<ButtonMoreProps> = ({ onClick }) => {
  return (
    <div
      className="flex flex-row gap-2 px-2 py-1 border-2 border-dashed rounded-xl transition duration-500 ease-in-out hover:cursor-pointer hover:bg-bgBlack hover:text-white dark:hover:bg-bgWhite dark:hover:text-black"
      onClick={onClick}
    >
      <p className="text-2xl font-bold">More</p>
      <MdArrowForward size={35} />
    </div>
  );
};

export default ButtonMore;
