"use client";

export default function SectionTitle({ title }: Readonly<{ title: string }>) {
  return (
    <div className="mb-16 flex items-center justify-center">
      <div className="flex items-center bg-customBlue p-6 rounded-lg rotate-2">
        <h2 className="text-4xl invisible">{title}</h2>
      </div>

      <div className="absolute flex p-4 rounded-lg bg-bgWhite dark:bg-bgBlack">
        <h2 className="text-4xl">{title}</h2>
      </div>
    </div>
  );
}
