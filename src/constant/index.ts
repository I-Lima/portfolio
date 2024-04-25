import { Experience, Skill } from "../types/constants";

export const ABOUT_TEXT =
  "I have accumulated solid professional experience in the mobile development field, focusing on React Native and Javascript. Additionally, I have explored personal projects using native Android, where I utilized Kotlin as the primary language. \nI contribute to the community by writing articles on Medium, in which I share my recent experiences and learnings.";

export const SKILL_ELEMENTS: Skill[] = [
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/JavaScript.svg",
    name: "JavaScript",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TypeScript.svg",
    name: "TypeScript",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Dark.svg",
    name: "React",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NodeJS-Dark.svg",
    name: "NodeJS",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Redux.svg",
    name: "Redux",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NextJS-Dark.svg",
    name: "NextJS",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Jest.svg",
    name: "Jest",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Figma-Dark.svg",
    name: "Figma",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TailwindCSS-Dark.svg",
    name: "TailwindCSS",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MaterialUI-Dark.svg",
    name: "MaterialUI",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MySQL-Dark.svg",
    name: "MySQL",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Python-Dark.svg",
    name: "Python",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Git.svg",
    name: "Git",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/GithubActions-Dark.svg",
    name: "GithubActions",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Kotlin-Dark.svg",
    name: "Kotlin",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/AndroidStudio-Dark.svg",
    name: "AndroidStudio",
  },
  {
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Docker.svg",
    name: "Docker",
  },
];

export const EXPERIENCE_LIST: Experience[] = [
  {
    enterprise: "FFIT - Inovações e Tecnologia (Home Office)",
    data: [
      {
        role: "Junior Full Stack Developer outsourced at InterAll",
        description:
          "The project was developed using React Native and JavaScript, employing Redux.js for state management. Additionally, it featured a backend developed in Node.js, with all code control performed on GitLab. I actively participated in the application publishing process on Google Play and the App Store, as well as leading the initiative in the design and implementation of unit tests.",
        tags: "React Native, JS, Redux.js, Node.js, GitLab, Google Play, App Store, Figma, Jest",
        entrance: "mar 2022",
        output: null,
      },
      {
        role: "Internship",
        description:
          "The project was developed using React.js and TypeScript, with full code management done in Bitbucket. My contribution focused on the development of Micro-Frontends, which were designed based on the layout proposed in Figma.",
        tags: "TS, React.js, Bitbucket, Figma, Material UI",
        entrance: "nov 2021",
        output: "fev 2022",
      },
    ],
  },
];
