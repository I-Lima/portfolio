import { experienceReturnProps } from "./experiences";
import { selectedOptionsProps } from "./filter";

export type ExperienceState = {
  experienceData: experienceReturnProps[];
  filteredExperienceData: experienceReturnProps[];
  filterData: filterItem[];
  filter: selectedOptionsProps;
  query: string;
  setExperienceData: (data: experienceReturnProps[]) => void;
  setFilterData: (data: setFilterDataProps) => void;
  setFilter: (filter: selectedOptionsProps) => void;
  setQuery: (query: string) => void;
};
