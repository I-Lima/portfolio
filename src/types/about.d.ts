export type aboutSkillProps = {
  name: string;
  url: string;
};

export type aboutLanguageProps = {
  name: string;
  level: string;
};

export type aboutProps = {
  id: string;
  description: string[];
  skills: aboutSkillProps[];
  languages: aboutLanguageProps[];
};
