import { Project, Experience, Education, Certification, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Ingrid Bezerra de Lima',
  shortName: 'Ingrid Lima',
  studioName: 'IL Studio',
  avatarUrl: 'https://avatars.githubusercontent.com/u/83174653?v=4',
  role: {
    pt: 'Desenvolvedora Full Stack e Mobile',
    en: 'Full Stack & Mobile Engineer'
  },
  rolesList: {
    pt: [
      'Desenvolvedora Full Stack',
      'Desenvolvedora Mobile',
      'Desenvolvedora Frontend'
    ],
    en: [
      'Full Stack Developer',
      'Mobile Developer',
      'Frontend Developer'
    ]
  },
  tagline: {
    pt: 'Especialista em React, TypeScript, React Native e arquiteturas modernas de Micro-Frontends com garantia de qualidade certificada.',
    en: 'Specialist in React, TypeScript, React Native and scalable Micro-Frontends architectures with certified quality assurance.'
  },
  bio: {
    pt: 'Desenvolvedora Full Stack com sólida vivência em aplicações Web e Mobile de alta escala. Atuação consistente em ecossistemas React, TypeScript, Node.js e React Native, além de arquiteturas modulares de Micro-Frontends, deploy de aplicativos na Google Play e App Store, esteiras de CI/CD e testes rigorosos com certificação internacional ISTQB® CTFL.',
    en: 'Full Stack Developer with solid experience in high-scale Web and Mobile applications. Strong track record in React, TypeScript, Node.js, and React Native ecosystems, along with modular Micro-Frontend architectures, mobile store deployments (Google Play & App Store), CI/CD pipelines, and rigorous software testing certified by ISTQB® CTFL.'
  },
  location: 'Fortaleza, CE, Brasil',
  email: 'il.sttudio@gmail.com',
  github: 'https://github.com/I-Lima',
  githubUsername: 'I-Lima',
  linkedin: 'https://www.linkedin.com/in/ingridlima-js/',
  medium: 'https://medium.com/@i-lima',
  website: 'https://www.il-studio.dev/',
  status: {
    pt: 'Disponível para projetos e oportunidades',
    en: 'Available for projects & opportunities'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'pomocute',
    title: 'Pomocute',
    category: 'mobile',
    subtitle: {
      pt: 'Aplicativo Pomodoro personalizável em React Native',
      en: 'Customizable Pomodoro productivity app in React Native'
    },
    description: {
      pt: 'Aplicativo mobile intuitivo que potencializa a gestão de foco e produtividade através da técnica Pomodoro, com customização dinâmica de paletas de cores, tempos de ciclo e feedback tátil.',
      en: 'Intuitive mobile app enhancing focus and productivity via the Pomodoro technique, featuring dynamic theme palettes, cycle customization, and haptic feedback.'
    },
    longDescription: {
      pt: 'O Pomocute foi arquitetado para unir estética minimalista e praticidade no dia a dia de estudantes e profissionais. Desenvolvido com React Native e TypeScript, oferece ciclos de foco personalizáveis, modo de pausa curta e longa, armazenamento local de configurações e uma experiência visual elegante com paletas dinâmicas selecionáveis.',
      en: 'Pomocute was engineered to combine minimalist aesthetics with daily productivity for students and engineers. Built with React Native and TypeScript, it features custom focus cycles, short/long breaks, persistent local storage, and an elegant dynamic theme engine.'
    },
    keyHighlights: {
      pt: [
        'Temporizador de alta precisão com gerenciamento de estado resiliente',
        'Motor de personalização dinâmica de temas visuais e durações de ciclo',
        'Armazenamento local rápido e desacoplado para persistência de preferências',
        'Interface limpa, acessível e otimizada para ambas as plataformas iOS e Android'
      ],
      en: [
        'High-precision timer engine with resilient state handling',
        'Dynamic visual theming engine and customizable cycle durations',
        'Fast decoupled local storage for settings persistence',
        'Clean, accessible interface optimized for both iOS and Android platforms'
      ]
    },
    architectureNotes: {
      pt: 'React Native com TypeScript tipado estritamente. Arquitetura modular separando lógica de temporização, componentes atômicos e provedor de temas visuais com persistência offline-first.',
      en: 'React Native with strict TypeScript typing. Modular architecture separating timer core, atomic UI components, and theme providers with offline-first persistence.'
    },
    tags: ['React Native', 'TypeScript', 'Mobile UI', 'AsyncStorage', 'Clean Architecture'],
    role: {
      pt: 'Criadora e Desenvolvedora Mobile',
      en: 'Creator & Mobile Developer'
    },
    status: {
      pt: 'Projeto Pessoal Ativo',
      en: 'Active Personal Project'
    },
    badge: 'Mobile App',
    githubUrl: 'https://github.com/I-Lima/Pomocute',
    accentColor: '#09C8FF',
    iconName: 'Timer'
  },
  {
    id: 'mandacaru-crianca-sabida',
    title: 'Mandacaru - Criança Sabida',
    category: 'web',
    subtitle: {
      pt: 'Plataforma Educacional Interativa Fiel aos Protótipos Figma',
      en: 'Interactive Educational Platform Built Pixel-Perfect from Figma'
    },
    description: {
      pt: 'Aplicação web interativa voltada à educação infantil, desenvolvida com React e TypeScript a partir de protótipos de alta fidelidade concebidos no Figma.',
      en: 'Interactive web application geared toward early childhood education, engineered with React and TypeScript based on high-fidelity Figma prototypes.'
    },
    longDescription: {
      pt: 'Projeto autoral desenvolvido com foco em acessibilidade e engajamento infantil. A interface traduz fielmente o design system concebido no Figma, trazendo componentes lúdicos, animações suaves e navegação intuitiva para crianças e educadores, seguindo boas práticas de componentização e tipagem estrita.',
      en: 'Authorial project crafted with focus on accessibility and child engagement. Faithfully translates Figma design system into production-ready code with playful components, fluid animations, and intuitive navigation for children and educators.'
    },
    keyHighlights: {
      pt: [
        'Implementação pixel-perfect fiel aos protótipos e tokens do Figma',
        'Interface lúdica, responsiva e com alto padrão de acessibilidade para crianças',
        'Componentização modular e reutilizável em React e TypeScript',
        'Design limpo com paleta de cores acolhedora e navegação simplificada'
      ],
      en: [
        'Pixel-perfect implementation mirroring Figma design tokens and layouts',
        'Playful, responsive UI engineered with high accessibility standards for children',
        'Modular and reusable React + TypeScript architecture',
        'Thoughtful welcoming color scheme and simplified navigation'
      ]
    },
    architectureNotes: {
      pt: 'React com TypeScript e Tailwind CSS, estruturação modular orientada a componentes visuais acessíveis e interativos.',
      en: 'React with TypeScript and Tailwind CSS, modular component-driven architecture for accessible and interactive learning.'
    },
    tags: ['React', 'TypeScript', 'Figma', 'UI/UX', 'Tailwind CSS', 'Acessibilidade'],
    role: {
      pt: 'Criadora e Desenvolvedora Frontend',
      en: 'Creator & Frontend Developer'
    },
    status: {
      pt: 'Projeto Pessoal',
      en: 'Personal Project'
    },
    badge: 'Interactive Web',
    githubUrl: 'https://github.com/I-Lima/mandacaru-crianca-sabida',
    accentColor: '#10b981',
    iconName: 'Sparkles'
  },
  {
    id: 'dermatology-app',
    title: 'Dermatology App',
    category: 'mobile',
    subtitle: {
      pt: 'Aplicativo Android Nativo com Kotlin para Clínica Dermatológica',
      en: 'Native Android Application with Kotlin for Dermatology Clinic'
    },
    description: {
      pt: 'Aplicativo Android nativo em Kotlin projetado para simplificar a jornada do paciente: agendamento prático de consultas, catálogo de procedimentos e acompanhamento clínico.',
      en: 'Native Android app in Kotlin designed to streamline patient journeys: practical appointment booking, procedure catalog, and clinical consultation follow-up.'
    },
    longDescription: {
      pt: 'Criado para demonstrar domínio em desenvolvimento nativo Android, o Dermatology App utiliza Kotlin com princípios de arquitetura limpa, componentes do Android Jetpack e Material Design. A interface intuitiva guia o usuário desde a consulta de horários disponíveis até a confirmação de agendamentos.',
      en: 'Developed to showcase native Android proficiency, Dermatology App utilizes Kotlin with Clean Architecture principles, Android Jetpack components, and Material Design. The intuitive interface seamlessly guides patients from doctor schedule inspection to appointment booking.'
    },
    keyHighlights: {
      pt: [
        'Desenvolvimento Android Nativo utilizando Kotlin moderno',
        'Fluxo de agendamento de consultas prático com validação de horários',
        'Design limpo com Material Design focado na experiência humanizada do paciente',
        'Separação de camadas (UI, Domain, Data) garantindo testabilidade do código'
      ],
      en: [
        'Modern Native Android engineering with Kotlin',
        'Streamlined appointment scheduling workflow with time slot validation',
        'Clean Material Design prioritizing human-centered patient experience',
        'Layered architecture (UI, Domain, Data) ensuring high testability'
      ]
    },
    architectureNotes: {
      pt: 'Kotlin nativo com ViewBinding/Jetpack, padrão MVVM para separação de lógica de apresentação e modelos de dados locais.',
      en: 'Native Kotlin with ViewBinding/Jetpack, implementing MVVM pattern for decoupled presentation logic and local data repository.'
    },
    tags: ['Kotlin', 'Android Nativo', 'Mobile', 'Material Design', 'Clean Architecture'],
    role: {
      pt: 'Desenvolvedora Android Nativo',
      en: 'Native Android Developer'
    },
    status: {
      pt: 'Projeto Pessoal',
      en: 'Personal Project'
    },
    badge: 'Native Android',
    githubUrl: 'https://github.com/I-Lima/Dermatology-App-Kotlin',
    accentColor: '#09C8FF',
    iconName: 'Activity'
  },
  {
    id: 'estribado-broker',
    title: 'Estribado Broker API',
    category: 'backend',
    subtitle: {
      pt: 'API RESTful em Spring Boot para Gerenciamento de Ações',
      en: 'Spring Boot RESTful API for Stock Portfolio Management'
    },
    description: {
      pt: 'Microsserviço de alta robustez desenvolvido em Java e Spring Boot com operações CRUD completas para gestão de ativos, cotações e movimentações financeiras.',
      en: 'Robust microservice engineered with Java and Spring Boot providing complete CRUD operations for managing stock positions, valuations, and financial trades.'
    },
    longDescription: {
      pt: 'A Estribado Broker API implementa um serviço financeiro de alta confiabilidade para manipulação de ações (stocks), carteiras de investimento e registros de ordens de compra e venda. Projetada com Spring Boot, JPA/Hibernate e validações estritas de dados, demonstrando forte capacidade no ecossistema corporativo Java.',
      en: 'Estribado Broker API implements a reliable financial service handling stock tickers, investment portfolios, and order execution logs. Built with Spring Boot, JPA/Hibernate, and strict data validation, demonstrating deep competence in the enterprise Java ecosystem.'
    },
    keyHighlights: {
      pt: [
        'Arquitetura em camadas com Spring Boot (Controller, Service, Repository, DTOs)',
        'Operações CRUD otimizadas com persistência relacional e controle de integridade',
        'Tratamento centralizado de exceções e respostas padronizadas no padrão HTTP REST',
        'Testes de integração garantindo robustez nas regras de negócio financeiras'
      ],
      en: [
        'Layered Spring Boot architecture (Controllers, Services, Repositories, DTOs)',
        'Optimized CRUD endpoints with relational persistence and transactional integrity',
        'Centralized exception handling with standardized REST HTTP responses',
        'Integration testing validating business calculations and stock operations'
      ]
    },
    architectureNotes: {
      pt: 'Java 17/11, Spring Boot, Spring Data JPA, Hibernate, validações de DTOs com Bean Validation e documentação OpenAPI.',
      en: 'Java 17/11, Spring Boot, Spring Data JPA, Hibernate, Bean Validation DTOs, and OpenAPI documentation.'
    },
    tags: ['Java', 'Spring Boot', 'REST API', 'JPA / Hibernate', 'Backend', 'SQL'],
    role: {
      pt: 'Desenvolvedora Backend Java',
      en: 'Java Backend Developer'
    },
    status: {
      pt: 'Projeto Pessoal',
      en: 'Personal Project'
    },
    badge: 'Backend API',
    githubUrl: 'https://github.com/I-Lima/Estribado-Broker-API',
    accentColor: '#eab308',
    iconName: 'Server'
  },
  {
    id: 'data-structure-js',
    title: 'Data Structure JS',
    category: 'web',
    subtitle: {
      pt: 'Implementações e Algoritmos de Estruturas de Dados em JavaScript',
      en: 'Data Structures Implementations and Algorithms in JavaScript'
    },
    description: {
      pt: 'Repositório de estudo e referência técnica contendo implementações didáticas e otimizadas de estruturas de dados clássicas e algoritmos fundamentais em JavaScript.',
      en: 'Technical study and reference repository containing clean, optimized implementations of classic data structures and fundamental algorithms in JavaScript.'
    },
    longDescription: {
      pt: 'Desenvolvido para consolidar e compartilhar fundamentos de ciência da computação, este projeto traz implementações práticas de listas encadeadas, pilhas, filas, árvores binárias, grafos e algoritmos de busca e ordenação em JavaScript moderno, com documentação clara e exemplos de complexidade assintótica (Big-O).',
      en: 'Created to master and share computer science fundamentals, this repository provides hands-on implementations of linked lists, stacks, queues, binary trees, graphs, and search/sorting algorithms in modern JavaScript with asymptotic complexity (Big-O) documentation.'
    },
    keyHighlights: {
      pt: [
        'Implementação de estruturas clássicas (Listas, Pilhas, Filas, Árvores e Grafos)',
        'Análise de complexidade temporal e espacial (Notação Big-O) documentada',
        'Código limpo e modular em JavaScript ES6+ seguindo boas práticas de desenvolvimento',
        'Testes práticos de execução e cobertura de casos de borda'
      ],
      en: [
        'Implementation of classic structures (Linked Lists, Stacks, Queues, Trees, Graphs)',
        'Time and space complexity analysis (Big-O notation) documented throughout',
        'Clean modular ES6+ JavaScript following engineering best practices',
        'Practical execution tests and edge-case validations'
      ]
    },
    architectureNotes: {
      pt: 'Módulos independentes em JavaScript ES6+, explorando padrões orientados a objetos e funcionais para manipulação de memória e estruturas lineares e não-lineares.',
      en: 'Independent ES6+ JavaScript modules exploring OOP and functional patterns for memory manipulation across linear and non-linear structures.'
    },
    tags: ['JavaScript', 'Estrutura de Dados', 'Algoritmos', 'Computer Science', 'Big-O'],
    role: {
      pt: 'Autora e Desenvolvedora',
      en: 'Author & Developer'
    },
    status: {
      pt: 'Open Source',
      en: 'Open Source'
    },
    badge: 'Algorithms',
    githubUrl: 'https://github.com/I-Lima/Data-Structure-JS',
    accentColor: '#09C8FF',
    iconName: 'Code2'
  },
  {
    id: 'travel-consumption-kotlin',
    title: 'Travel Consumption',
    category: 'mobile',
    subtitle: {
      pt: 'Aplicativo Android Nativo para Cálculo de Custos de Viagem',
      en: 'Native Android App for Travel Fuel & Trip Cost Calculations'
    },
    description: {
      pt: 'Aplicativo Android nativo desenvolvido em Kotlin para estimar consumo de combustível, quilometragem e custos totais em viagens rodoviárias de forma rápida e precisa.',
      en: 'Native Android app engineered in Kotlin to quickly estimate fuel consumption, mileage, and total travel costs for road trips.'
    },
    longDescription: {
      pt: 'Desenvolvido para oferecer praticidade em viagens, o Travel Consumption permite que motoristas e viajantes calculem despesas com base na distância percorrida, autonomia média do veículo e preço dos combustíveis. O projeto foi concebido seguindo princípios de Clean Code em Kotlin.',
      en: 'Designed for effortless road trip budgeting, Travel Consumption lets drivers calculate fuel expenses based on distance, vehicle autonomy, and fuel prices. Built with Kotlin adhering to Clean Code standards.'
    },
    keyHighlights: {
      pt: [
        'Cálculo dinâmico de consumo e estimativa de gastos de viagem em tempo real',
        'Desenvolvimento 100% nativo em Kotlin com validação estrita de entradas numéricas',
        'Interface limpa e objetiva para uso rápido em deslocamentos',
        'Estruturação desacoplada entre regras de negócio e camada de visualização'
      ],
      en: [
        'Dynamic fuel consumption calculations and real-time trip cost estimates',
        '100% native Android development in Kotlin with strict numeric validation',
        'Clean, straightforward interface designed for on-the-go utility',
        'Decoupled business logic from UI layout components'
      ]
    },
    architectureNotes: {
      pt: 'Kotlin nativo com Jetpack, validação estrita de dados numéricos e layout responsivo com Material Components.',
      en: 'Native Kotlin with Jetpack, strict numeric input validation, and responsive Material Components layout.'
    },
    tags: ['Kotlin', 'Android Nativo', 'Mobile', 'Clean Code', 'Material Design'],
    role: {
      pt: 'Desenvolvedora Android',
      en: 'Android Developer'
    },
    status: {
      pt: 'Projeto Pessoal',
      en: 'Personal Project'
    },
    badge: 'Native Android',
    githubUrl: 'https://github.com/I-Lima/travel-consumption-kotlin',
    accentColor: '#09C8FF',
    iconName: 'Smartphone'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'ffit-fullstack',
    company: 'FFIT - Inovações e Tecnologia',
    role: {
      pt: 'Desenvolvedora Full Stack',
      en: 'Full Stack Engineer'
    },
    period: {
      pt: 'Fev 2022 — Presente',
      en: 'Feb 2022 — Present'
    },
    location: 'Fortaleza, CE (Home Office)',
    type: 'Full-time',
    description: {
      pt: 'Atuação central no desenvolvimento web e mobile em projetos internos e corporativos de grande porte, com foco em arquiteturas modernas, escalabilidade e qualidade certificada.',
      en: 'Core engineering in high-impact web and mobile initiatives, specializing in modern architectures, scalability, and certified quality assurance.'
    },
    highlights: {
      pt: [
        'Projetos Internos: Arquitetura e desenvolvimento contínuo de aplicações web baseadas em Micro-Frontends com React e TypeScript.',
        'Back-end robusto: Implementação e manutenção de microsserviços e APIs com Node.js e TypeScript seguindo arquitetura limpa.',
        'Projeto Externo InterAll (fev 2022 - out 2025): Desenvolvimento do aplicativo mobile React Native + Redux, com publicação bem-sucedida na Google Play Store e Apple App Store.',
        'Testes e Qualidade: Liderança na implementação de testes unitários, aumentando os padrões de confiabilidade e mitigando regressões.',
        'UI/UX: Criação e evolução de layouts no Figma e implementação em código pixel-perfect.',
        'DevOps e Deploy: Gestão de branches no Bitbucket/GitLab e publicação contínua em servidores de produção.'
      ],
      en: [
        'Internal Projects: Core architecture and ongoing evolution of React + TypeScript Micro-Frontend web applications.',
        'Robust Back-end: Built and maintained Node.js and TypeScript microservices and APIs following clean architecture practices.',
        'InterAll Project (Feb 2022 - Oct 2025): Developed React Native mobile app with Redux, successfully publishing and maintaining it on Google Play Store and Apple App Store.',
        'Testing & QA: Spearheaded unit test suites, boosting software reliability metrics and preventing release regressions.',
        'UI/UX: Designed and refined layouts in Figma, translating them into pixel-perfect accessible web & mobile interfaces.',
        'DevOps: Governed Git versioning via Bitbucket/GitLab and executed production deployments via CI/CD.'
      ]
    },
    technologies: [
      'React',
      'TypeScript',
      'React Native',
      'Node.js',
      'Micro-Frontends',
      'Redux',
      'Java 11 / JSF',
      'Unit Tests',
      'Figma',
      'GitLab',
      'Bitbucket',
      'CI/CD'
    ],
    projects: [
      {
        name: 'Projetos Internos (Micro-Frontends e Node.js)',
        period: 'Fev 2022 - Presente',
        details: {
          pt: [
            'Desenvolvimento de aplicações web modulares baseadas em Micro-Frontends utilizando React e TypeScript.',
            'Implementação de back-end em Node.js e TypeScript com boas práticas de arquitetura.',
            'Correção de bugs críticos, refatoração para alta performance e criação de interfaces no Figma.',
            'Deploy contínuo e publicação de aplicações em servidores de produção.'
          ],
          en: [
            'Engineered modular React & TypeScript web applications powered by Micro-Frontends.',
            'Implemented Node.js & TypeScript back-end services following scalable architectural standards.',
            'Resolved critical defects, optimized rendering performance, and designed Figma components.',
            'Executed continuous deployments to production servers.'
          ]
        },
        techs: ['React', 'TypeScript', 'Node.js', 'Micro-Frontends', 'Bitbucket', 'Figma', 'CI/CD']
      },
      {
        name: 'InterAll - Projeto Externo (Mobile e Enterprise)',
        period: 'Fev 2022 - Out 2025',
        details: {
          pt: [
            'Desenvolvimento de aplicativo mobile em React Native e JavaScript, com estado via Redux.js.',
            'Desenvolvimento web corporativo utilizando JSF, Java 11 e Materialize CSS.',
            'Publicação ativa do aplicativo mobile na Google Play Store e Apple App Store.',
            'Liderança na implementação de testes unitários para confiabilidade do ecossistema.'
          ],
          en: [
            'Developed React Native mobile application with centralized state via Redux.js.',
            'Contributed to corporate web application using Java 11, JSF, and Materialize CSS.',
            'Actively managed mobile deployment to Google Play Store and Apple App Store.',
            'Led unit test implementation to substantially elevate product confidence.'
          ]
        },
        techs: ['React Native', 'Redux', 'Node.js', 'Java 11', 'JSF', 'Google Play', 'App Store', 'Testes Unitários']
      }
    ]
  },
  {
    id: 'ffit-intern',
    company: 'FFIT - Inovações e Tecnologia',
    role: {
      pt: 'Estagiária de Desenvolvimento',
      en: 'Software Engineering Intern'
    },
    period: {
      pt: 'Nov 2021 — Fev 2022',
      en: 'Nov 2021 — Feb 2022'
    },
    location: 'Fortaleza, CE (Home Office)',
    type: 'Internship',
    description: {
      pt: 'Início da trajetória profissional na FFIT com foco em desenvolvimento web ágil, arquitetura de Micro-Frontends e fidelidade de design.',
      en: 'Kickstarted software engineering journey at FFIT focused on modern web engineering, Micro-Frontends, and UI fidelity.'
    },
    highlights: {
      pt: [
        'Desenvolvimento de aplicações web utilizando React.js e TypeScript.',
        'Atuação na transição e implementação pioneira de arquitetura de Micro-Frontends.',
        'Implementação fiel das interfaces conforme os protótipos criados no Figma.',
        'Controle de versão e colaboração em equipe por meio do Bitbucket.'
      ],
      en: [
        'Built modern web interfaces using React.js and TypeScript.',
        'Participated in foundational architecture setup for Micro-Frontends.',
        'Delivered pixel-perfect UI according to design prototypes in Figma.',
        'Managed source control and team workflows using Bitbucket.'
      ]
    },
    technologies: ['React.js', 'TypeScript', 'Micro-Frontends', 'Figma', 'Bitbucket', 'Git']
  },
  {
    id: 'pet-uece',
    company: 'PET Computação UECE',
    role: {
      pt: 'Bolsista e Coordenadora de Finanças e DevApps',
      en: 'Scholar & DevApps / Finance Coordinator'
    },
    period: {
      pt: 'Abr 2021 — Nov 2021',
      en: 'Apr 2021 — Nov 2021'
    },
    location: 'Fortaleza, CE (Universidade Estadual do Ceará)',
    type: 'Academic Fellowship',
    description: {
      pt: 'Programa de Educação Tutorial em Computação, exercendo papel estratégico na liderança técnica de desenvolvimento de software e gestão financeira.',
      en: 'Tutorial Education Program in Computer Science, leading software application squads and technical workshops.'
    },
    highlights: {
      pt: [
        'Coordenação da atividade de Desenvolvimento de Aplicativos (DevApps) e da Comissão de Finanças.',
        'Liderança no desenvolvimento do site oficial da conferência SECOMP 2021 do planejamento à entrega.',
        'Atuação como instrutora de WordPress, ministrando treinamentos práticos de desenvolvimento web.',
        'Desenvolvimento de competências em liderança de equipes, organização de eventos e gestão técnica.'
      ],
      en: [
        'Coordinated DevApps engineering chapter and the financial management committee.',
        'Led technical delivery of SECOMP 2021 official conference web portal.',
        'Served as technical instructor teaching practical web development workshops.',
        'Fostered key competencies in team leadership, budget planning, and agile collaboration.'
      ]
    },
    technologies: ['Web Development', 'React', 'WordPress', 'Leadership', 'Event Tech']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Certified Tester Foundation Level (CTFL)',
    issuer: 'ISTQB® (International Software Testing Qualifications Board)',
    code: 'CTFL Certified',
    description: {
      pt: 'Certificação internacional que atesta rigor técnico em garantia de qualidade de software, desenho de casos de teste, prevenção de regressões, testes de caixa preta/branca e boas práticas do ciclo de vida de desenvolvimento.',
      en: 'Global certification validating expertise in software quality assurance, test case architecture, regression prevention, black/white-box test methodologies, and software lifecycle discipline.'
    },
    skillsCovered: [
      'Testes Unitários e de Integração',
      'Prevenção de Defeitos e Regressões',
      'Test-Driven Development (TDD) Mindset',
      'Análise de Cobertura de Código',
      'Ciclo de Vida de Software Ágil'
    ],
    link: 'https://www.istqb.org/'
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Unifametro',
    degree: {
      pt: 'Bacharelado em Ciência da Computação',
      en: 'B.S. in Computer Science'
    },
    period: '2025 — Presente',
    details: {
      pt: 'Formação acadêmica superior com foco em engenharia de software, sistemas distribuídos e inteligência computacional.',
      en: 'Undergraduate degree focused on software engineering, distributed systems, and computer intelligence.'
    }
  },
  {
    institution: 'Universidade Estadual do Ceará (UECE)',
    degree: {
      pt: 'Ciência da Computação (Ciclo Fundamental e PET)',
      en: 'Computer Science (Core Studies & Academic Fellowship)'
    },
    period: '2020 — 2025',
    details: {
      pt: 'Atuação no PET Computação UECE, coordenação de projetos técnicos e liderança da conferência acadêmica SECOMP.',
      en: 'Active member of PET Computação UECE, technical project coordinator, and symposium web lead.'
    }
  }
];

/**
 * Calculates years of professional experience dynamically based on start date (November 2021).
 */
export function calculateYearsOfExperience(startDate: Date = new Date(2021, 10, 1)): number {
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  const monthDiff = today.getMonth() - startDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
    years--;
  }
  return Math.max(1, years);
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: {
      pt: 'Frontend e Web',
      en: 'Frontend & Web'
    },
    icon: 'Layout',
    items: [
      { name: 'React.js', level: 'Avançado', highlight: true, years: `${calculateYearsOfExperience()}+ anos` },
      { name: 'TypeScript', level: 'Avançado', highlight: true, years: `${calculateYearsOfExperience()}+ anos` },
      { name: 'Micro-Frontends', level: 'Avançado', highlight: true, years: 'Especialista' },
      { name: 'JavaScript (ES6+)', level: 'Avançado', years: `${calculateYearsOfExperience() + 1}+ anos` },
      { name: 'Redux / Context API', level: 'Avançado', years: `${calculateYearsOfExperience()}+ anos` },
      { name: 'Tailwind CSS', level: 'Avançado', highlight: true },
      { name: 'HTML5 & Modern CSS', level: 'Avançado' }
    ]
  },
  {
    category: {
      pt: 'Mobile Engineering',
      en: 'Mobile Engineering'
    },
    icon: 'Smartphone',
    items: [
      { name: 'React Native', level: 'Avançado', highlight: true, years: `${calculateYearsOfExperience()}+ anos` },
      { name: 'Android Nativo (Kotlin)', level: 'Intermediário', highlight: true },
      { name: 'Google Play Store Deploy', level: 'Avançado', highlight: true },
      { name: 'Apple App Store Publish', level: 'Avançado', highlight: true },
      { name: 'Redux State Management', level: 'Avançado' },
      { name: 'Mobile Push & Offline Sync', level: 'Intermediário' }
    ]
  },
  {
    category: {
      pt: 'Backend & APIs',
      en: 'Backend & APIs'
    },
    icon: 'Server',
    items: [
      { name: 'Node.js', level: 'Avançado', highlight: true, years: `${calculateYearsOfExperience()}+ anos` },
      { name: 'Express / REST APIs', level: 'Avançado', highlight: true },
      { name: 'Java (Spring Boot / Java 11)', level: 'Intermediário', highlight: true },
      { name: 'JSF / Materialize', level: 'Intermediário' },
      { name: 'SQL & Relational DBs', level: 'Intermediário' },
      { name: 'Clean Architecture', level: 'Avançado' }
    ]
  },
  {
    category: {
      pt: 'Qualidade & DevOps',
      en: 'Quality & DevOps'
    },
    icon: 'ShieldCheck',
    items: [
      { name: 'ISTQB® CTFL Certified', level: 'Certificação', highlight: true },
      { name: 'Testes Unitários', level: 'Avançado', highlight: true },
      { name: 'Git (Bitbucket & GitLab)', level: 'Avançado' },
      { name: 'CI/CD Pipelines', level: 'Intermediário' },
      { name: 'Refatoração & Clean Code', level: 'Avançado', highlight: true }
    ]
  },
  {
    category: {
      pt: 'UI/UX e Ferramentas',
      en: 'UI/UX & Tooling'
    },
    icon: 'Figma',
    items: [
      { name: 'Figma (UI/UX Design)', level: 'Avançado', highlight: true },
      { name: 'Design Systems', level: 'Avançado' },
      { name: 'Vite / Webpack', level: 'Avançado' },
      { name: 'WordPress', level: 'Intermediário' },
      { name: 'Postman / API Testing', level: 'Avançado' }
    ]
  }
];

export const LANGUAGES = [
  { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'Nativo', en: 'Native' }, flag: '🇧🇷', flagImage: '/images/Portuguese.webp' },
  { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'Intermediário (Leitura técnica fluente)', en: 'Intermediate (Fluent technical reading)' }, flag: '🇺🇸', flagImage: '/images/English.webp' },
  { name: { pt: 'Espanhol', en: 'Spanish' }, level: { pt: 'Intermediário', en: 'Intermediate' }, flag: '🇪🇸', flagImage: '/images/Spanish.webp' },
  { name: { pt: 'Alemão', en: 'German' }, level: { pt: 'Básico', en: 'Basic' }, flag: '🇩🇪', flagImage: '/images/German.webp' }
];

export const STATS = [
  {
    get value() {
      return `${calculateYearsOfExperience()}+`;
    },
    label: { pt: 'Anos de Experiência', en: 'Years Experience' },
    detail: { pt: 'Atuando em Web e Mobile', en: 'In Web & Mobile apps' }
  },
  {
    value: 'CTFL',
    label: { pt: 'Qualidade Certificada', en: 'Certified QA' },
    detail: { pt: 'ISTQB® Foundation Level', en: 'ISTQB® Foundation Level' }
  },
  {
    value: 'iOS e Android',
    label: { pt: 'Publicação nas Lojas', en: 'Store Deployments' },
    detail: { pt: 'App Store & Google Play', en: 'App Store & Google Play' }
  },
  {
    value: 'MFE',
    label: { pt: 'Micro-Frontends', en: 'Micro-Frontends' },
    detail: { pt: 'Arquitetura modular em prod', en: 'Modular prod architectures' }
  }
];
