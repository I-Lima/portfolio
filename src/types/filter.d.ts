import { experienceProps } from "./experiences";
import { ExperienceState } from "./state";

export type filterItem = { value: string; data: Array<string> };
export type selectedOptionsProps = { [key: string]: string[] };
type set = {
  (
    partial:
      | ExperienceState
      | Partial<ExperienceState>
      | ((
          state: ExperienceState,
        ) => ExperienceState | Partial<ExperienceState>),
    replace?: boolean | undefined,
  ): void;
  (arg0: () => { experienceData: experienceProps[] }): void;
};
export type setFilterDataProps = {
  data: experienceProps[];
  set: set;
};

export type filterResultsProps = {
  set: set;
  get: () => ExperienceState;
};
