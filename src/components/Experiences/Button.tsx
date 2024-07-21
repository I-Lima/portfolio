"use client";

export default function ButtonCustom({
  onClick,
  title,
}: Readonly<{ onClick: () => void; title: string }>) {
  return (
    <div
      className="
        rounded-3xl border-black dark:border-white border-2 border-dashed flex w-32 justify-center hover:cursor-pointer transition duration-500 ease-in-out hover:bg-bgBlack hover:text-white dark:hover:bg-bgWhite dark:hover:text-black
        md:w-44
      "
      onClick={onClick}
    >
      <p className="text-center text-xl my-2">{title}</p>
    </div>
  );
}
