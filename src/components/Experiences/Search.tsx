import { useExperienceStore } from "@/hooks/stateHooks";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const { query, setQuery } = useExperienceStore((state) => state);

  const _handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex justify-end items-center">
        <button
          className="flex bg-customBlue w-10 h-10 items-center justify-center rounded-3xl absolute mr-1"
          type="submit"
        >
          <FaSearch size={26} className="m-1 text-black" />
        </button>

        <input
          className="w-96 h-12 bg-white rounded-2xl pl-4 text-black"
          placeholder="Search by enterprise, role or description..."
          type="text"
          name="search"
          id="search"
          autoComplete="off"
          onChange={_handleInputChange}
          value={query}
        />
      </div>
    </form>
  );
}
