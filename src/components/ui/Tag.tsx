export default function Tag(title: Readonly<{ tag: string }>) {
  return (
    <div
      className="px-2 rounded-xl border-customGreen"
      style={{ border: "3px solid #00D0D0" }}
    >
      <p className="text-customGreen text-xl mx-1">{title.tag}</p>
    </div>
  );
}
