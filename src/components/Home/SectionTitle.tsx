"use client";

export default function SectionTitle({ title }: Readonly<{ title: string }>) {
  return (
    <div className="mb-12 flex items-center justify-center">
      <div className="flex items-center bg-customBlue p-4 rounded-lg rotate-2">
        <h2 className="text-3xl invisible">{title}</h2>
      </div>

      <div className="absolute flex p-3 rounded-lg bg-bgWhite dark:bg-bgBlack">
        <h2 className="text-3xl">{title}</h2>
      </div>
    </div>
  );
}
