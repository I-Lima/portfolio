export type Skill = { url: string; name: string };
export type ExperienceData = {
  role: string;
  description: string;
  tags: string;
  entrance: string;
  output: string | null;
};
export type Experience = {
  enterprise: string;
  data: ExperienceData[];
};
