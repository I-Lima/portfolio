import { MdArrowForward } from "react-icons/md";

interface ButtonMoreProps {
  onClick: () => void;
}

export default function ButtonMore({ onClick }: ButtonMoreProps) {
  return (
    <div
      className="flex flex-row gap-2 px-4 py-2 border-2 border-dashed rounded-xl hover:cursor-pointer"
      onClick={onClick}
    >
      <p className="text-2xl font-bold">More</p>

      <MdArrowForward size={35} />
    </div>
  );
}
