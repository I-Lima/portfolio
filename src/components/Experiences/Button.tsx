"use client";

export default function ButtonCustom({
  onClick,
  title,
}: Readonly<{ onClick: () => void; title: string }>) {
  return (
    <div
      className="rounded-3xl border-black dark:border-white border-2 border-dashed flex w-44 justify-center hover:cursor-pointer"
      onClick={onClick}
    >
      <p className="text-center text-xl my-2">{title}</p>
    </div>
  );
}
