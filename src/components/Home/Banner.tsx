import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex flex-col h-screen max-w-screen max-h-screen pt-24">
      <div className="mb-16">
        <Image
          src="bgd_home.svg"
          alt="background image"
          width={850}
          height={850}
        />
      </div>

      <div className="flex flex-col items-center">
        <p className="text-3xl mb-2 pb-1" style={{ borderBottomWidth: 1 }}>
          More Informations
        </p>

        <Image src="arrow.svg" alt="arrow icon" width={32} height={40} />
      </div>
    </div>
  );
}
