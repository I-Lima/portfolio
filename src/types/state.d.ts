import { experienceProps } from "./experiences";
import { selectedOptionsProps } from "./filter";

export type ExperienceState = {
  experienceData: experienceProps[];
  filteredExperienceData: experienceProps[];
  filterData: filterItem[];
  filter: selectedOptionsProps;
  query: string;
  setExperienceData: (data: experienceProps[]) => void;
  setFilterData: (data: setFilterDataProps) => void;
  setFilter: (filter: selectedOptionsProps) => void;
  setQuery: (query: string) => void;
};
