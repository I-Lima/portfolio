export type filterItem = { value: string; data: Array<string> };
export type selectedOptionsProps = { [key: string]: string[] };
export type setFilterDataProps = {
  data: experienceProps[];
  set: {
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
};
