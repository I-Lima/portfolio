export type aboutProps = {
  section: string;
  msgError: string;
  name: string;
  skills: string;
  languages: string;
};
export type bannerProps = {
  hi: string;
  myName: string;
  iAm: string;
};
export type contactProps = {
  section: string;
  description: string;
};
export type experiencesProps = {
  section: string;
  more: string;
};
export type homeProps = {
  moreInfo: string;
};
export type projectsProps = {
  section: string;
  more: string;
};
export type footerProps = {
  developedBy: string;
};

export type dictionariesProps = {
  about: aboutProps;
  banner: bannerProps;
  contact: contactProps;
  experiences: experiencesProps;
  home: homeProps;
  projects: projectsProps;
  footer: footerProps;
};
