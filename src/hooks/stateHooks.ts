import { create } from "zustand";
import { ExperienceState } from "@/types/state";
import { experienceHistoryProps, experienceProps } from "@/types/experiences";
import {
  filterItem,
  filterResultsProps,
  selectedOptionsProps,
  setFilterDataProps,
} from "@/types/filter";

export const useExperienceStore = create<ExperienceState>((set, get) => ({
  experienceData: [] as experienceProps[],
  filteredExperienceData: [] as experienceProps[],
  filterData: [] as filterItem[],
  filter: {} as selectedOptionsProps,
  query: "",
  setExperienceData: (data) => setFilterData({ data, set }),
  setFilterData: (data) => setFilterData({ data, set }),
  setFilter: (filter) => {
    set(() => ({ filter }));
    filterResults({ set, get });
  },
  setQuery: (query) => {
    set(() => ({ query }));
    filterResults({ set, get });
  },
}));

/**
 * Function that sets filter data based on the provided experience data.
 *
 * @param {experienceProps[]} data - The array of experience data to extract tags from.
 * @param {function} set - The function to update the filter and experience data.
 * @return {void} Updates the filter and experience data using the provided set function.
 */
const setFilterData = ({ data, set }: setFilterDataProps): void => {
  const tagSet = new Set<string>();
  const typeSet = new Set<string>();

  data.forEach((experience: experienceProps) => {
    experience.history.forEach((history) => {
      typeSet.add(history.type);
      history.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    });
  });

  const newFilterData: filterItem[] = [
    {
      value: "skill",
      data: Array.from(tagSet),
    },
    {
      value: "type",
      data: Array.from(typeSet),
    },
  ];

  return set(() => ({
    filterData: newFilterData,
    experienceData: data,
    filteredExperienceData: data,
  }));
};

/**
 * Filters the experience data based on the query and filter state.
 *
 * @param {Object} param - An object containing the set function.
 * @param {function} param.set - The function to update the state.
 * @return {void} Updates the filteredExperienceData in the state.
 */
const filterResults = ({ set, get }: filterResultsProps): void => {
  const { experienceData, query, filter } = get();
  const lowerCaseQuery = query.toLowerCase();

  const filteredResults = experienceData
    .filter((exp: experienceProps) => {
      if (query.trim() === "") return true;

      const matchesEnterprise = exp.enterprise
        .toLowerCase()
        .includes(lowerCaseQuery);
      const matchesHistory = exp.history.some(
        (hist) =>
          hist.role.toLowerCase().includes(lowerCaseQuery) ||
          hist.description.toLowerCase().includes(lowerCaseQuery),
      );

      return matchesEnterprise || matchesHistory;
    })
    .map((exp: experienceProps) => {
      if (!filter) return exp;

      const filteredHistory = exp.history.filter(
        (historyItem: experienceHistoryProps) => {
          const hasSkill = filter.skill
            ? filter.skill.some((skill: string) =>
                historyItem.tags.includes(skill),
              )
            : true;
          const hasType = filter.type
            ? filter.type.includes(historyItem.type)
            : true;

          return hasSkill && hasType;
        },
      );

      if (filteredHistory.length > 0) {
        return { ...exp, history: filteredHistory };
      } else {
        return null;
      }
    });

  set({ filteredExperienceData: filteredResults });
};
