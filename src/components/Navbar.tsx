import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="px-12 py-4 mb-12 bg-black z-50 fixed mx-auto flex items-center justify-between w-full">
      <div>
        <a href="/">
          <Image src="logo.svg" alt="website logo" width={100} height={80} />
        </a>
      </div>

      <div className="hidden md:flex">
        <a href="#about" className="text-customGray ml-4 text-xl">
          About
        </a>
        <a href="#experiences" className="text-customGray ml-4 text-xl">
          Experiences
        </a>
        <a href="#projects" className="text-customGray ml-4 text-xl">
          Projects
        </a>
      </div>

      <div className="md:hidden">
        <button className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
