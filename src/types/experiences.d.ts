export type experienceHistoryProps = {
  role: string;
  description: string;
  tags: string[];
  entrance: string;
  output: string | null;
  project_website: string | null;
  type: string;
};

export type experienceProps = {
  id: string;
  enterprise: string;
  output: number | null;
  company_website: string;
  history: experienceHistoryProps[];
};
