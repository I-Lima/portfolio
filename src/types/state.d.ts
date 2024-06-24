import { experienceProps } from "./dao";
import { selectedOptions } from "../components/Experiences/Filter";

export type ExperienceState = {
  experienceData: experienceProps[];
  filter: selectedOptions;
  setExperienceData: (data: experienceProps[]) => void;
  setFilter: (dataFilter: selectedOptions) => void;
};
