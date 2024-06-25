import { create } from "zustand";
import { ExperienceState } from "@/types/state";
import { experienceProps } from "@/types/experiences";
import {
  filterItem,
  selectedOptionsProps,
  setFilterDataProps,
} from "@/types/filter";

export const useExperienceStore = create<ExperienceState>((set) => ({
  experienceData: [] as experienceProps[],
  filterData: [] as filterItem[],
  filter: {} as selectedOptionsProps,
  setExperienceData: (data) => setFilterData({ data, set }),
  setFilter: (dataFilter) => set(() => ({ filter: dataFilter })),
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

  data.forEach((experience) => {
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

  return set(() => ({ filterData: newFilterData, experienceData: data }));
};
