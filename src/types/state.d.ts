import { experienceProps } from "./dao";
import { selectedOptionsProps } from "./filter";

export type ExperienceState = {
  experienceData: experienceProps[];
  filterData: filterItem[];
  filter: selectedOptionsProps;
  setExperienceData: (data: experienceProps[]) => void;
  setFilter: (dataFilter: selectedOptionsProps) => void;
};
