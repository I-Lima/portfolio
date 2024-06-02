export type aboutSkillProps = {
  name: string;
  url: string;
};

export type aboutProps = {
  id: string;
  description: string[];
  skills: aboutSkillProps[];
};
