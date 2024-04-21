export default function Tag(title: Readonly<{ tag: string }>) {
  return (
    <div className="px-2 border-2 rounded-lg border-customGreen">
      <p className="text-customGreen">{title.tag}</p>
    </div>
  );
}
