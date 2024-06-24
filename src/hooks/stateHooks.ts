import { create } from "zustand";
import { ExperienceState } from "@/types/state";
import { selectedOptions } from "@/components/Experiences/Filter";
import { experienceProps } from "@/types/experiences";

export const useExperienceStore = create<ExperienceState>((set) => ({
  experienceData: [] as experienceProps[],
  filter: {} as selectedOptions,
  setExperienceData: (data) => set(() => ({ experienceData: data })),
  setFilter: (dataFilter) => set(() => ({ filter: dataFilter })),
}));
