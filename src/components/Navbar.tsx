import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="p-4 mb-12">
      <div className="container mx-auto flex items-center justify-between bg-black fixed">
        <div>
          <a href="/">
            <Image src="logo.svg" alt="website logo" width={100} height={80} />
          </a>
        </div>

        <div className="hidden md:flex">
          <a href="/" className="text-customGray ml-4">
            About
          </a>
          <a href="/" className="text-customGray ml-4">
            Experiences
          </a>
          <a href="/" className="text-customGray ml-4">
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
      </div>
    </nav>
  );
}
