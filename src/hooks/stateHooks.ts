import { create } from "zustand";
import { ExperienceState } from "@/types/state";
import { experienceProps } from "@/types/experiences";
import { selectedOptionsProps } from "@/types/filter";

export const useExperienceStore = create<ExperienceState>((set) => ({
  experienceData: [] as experienceProps[],
  filter: {} as selectedOptionsProps,
  setExperienceData: (data) => set(() => ({ experienceData: data })),
  setFilter: (dataFilter) => set(() => ({ filter: dataFilter })),
}));
