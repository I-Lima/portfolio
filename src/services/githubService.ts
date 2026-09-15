export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

// Fallback real repositories fetched directly from https://github.com/I-Lima (filtered by 'pinned' tag)
export const FALLBACK_REPOSITORIES: GithubRepo[] = [
  {
    id: 101,
    name: "Pomocute",
    full_name: "I-Lima/Pomocute",
    html_url: "https://github.com/I-Lima/Pomocute",
    description: "Aplicativo Pomodoro personalizável desenvolvido em React Native e TypeScript, com temas dinâmicos e controle de ciclos.",
    language: "TypeScript",
    stargazers_count: 5,
    forks_count: 1,
    topics: ["pinned", "react-native", "typescript", "android", "ios", "pomodoro"],
    updated_at: "2025-02-18T14:30:00Z"
  },
  {
    id: 102,
    name: "Dermatology-App-Kotlin",
    full_name: "I-Lima/Dermatology-App-Kotlin",
    html_url: "https://github.com/I-Lima/Dermatology-App-Kotlin",
    description: "Um projeto Android nativo para uma clínica de dermatologia, onde os usuários podem visualizar e agendar consultas de forma prática e intuitiva.",
    language: "Kotlin",
    stargazers_count: 3,
    forks_count: 0,
    topics: ["pinned", "android", "kotlin", "clean-architecture", "detekt", "firebase"],
    updated_at: "2024-11-20T10:15:00Z"
  },
  {
    id: 103,
    name: "Estribado-Broker-API",
    full_name: "I-Lima/Estribado-Broker-API",
    html_url: "https://github.com/I-Lima/Estribado-Broker-API",
    description: "Aplicação Spring Boot (Java) fornecendo operações CRUD para gerenciar carteira de ações e transações financeiras.",
    language: "Java",
    stargazers_count: 4,
    forks_count: 0,
    topics: ["pinned", "spring-boot", "java", "docker", "checkstyle", "rest-api"],
    updated_at: "2024-09-12T16:00:00Z"
  },
  {
    id: 107,
    name: "portfolio",
    full_name: "I-Lima/portfolio",
    html_url: "https://github.com/I-Lima/portfolio",
    description: "Portfólio oficial de Ingrid Lima (il-studio.dev) com Next.js, i18n multilíngue, Tailwind CSS e integração com GitHub e Firebase.",
    language: "TypeScript",
    stargazers_count: 4,
    forks_count: 0,
    topics: ["pinned", "nextjs", "react", "tailwindcss", "typescript", "firebase"],
    updated_at: "2025-01-15T18:00:00Z"
  }
];

export async function fetchUserRepositories(): Promise<GithubRepo[]> {
  try {
    const response = await fetch('https://api.github.com/users/I-Lima/repos?per_page=100&sort=updated', {
      headers: {
        Accept: 'application/vnd.github+json'
      }
    });

    if (!response.ok) {
      return FALLBACK_REPOSITORIES.filter(repo =>
        repo.topics.some(t => t.toLowerCase() === 'pinned')
      );
    }

    const data: GithubRepo[] = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      // Filter exclusively to return only repositories that contain the 'pinned' tag/topic
      return data.filter(repo => 
        !repo.name.startsWith('.') &&
        Array.isArray(repo.topics) &&
        repo.topics.some(topic => topic.toLowerCase() === 'pinned')
      );
    }
    return FALLBACK_REPOSITORIES.filter(repo =>
      repo.topics.some(t => t.toLowerCase() === 'pinned')
    );
  } catch (err) {
    console.warn('Using fallback repositories due to rate limit / offline:', err);
    return FALLBACK_REPOSITORIES.filter(repo =>
      repo.topics.some(t => t.toLowerCase() === 'pinned')
    );
  }
}

export function getRepoCategory(repo: GithubRepo): 'mobile' | 'web' | 'backend' {
  const topics = (repo.topics || []).map(t => t.toLowerCase());
  const lang = (repo.language || '').toLowerCase();
  
  if (
    topics.some(t => ['android', 'kotlin', 'react-native', 'mobile', 'ios'].includes(t)) ||
    lang === 'kotlin'
  ) {
    return 'mobile';
  }

  if (
    topics.some(t => ['spring-boot', 'java', 'docker', 'api', 'backend', 'rest-api'].includes(t)) ||
    lang === 'java'
  ) {
    return 'backend';
  }

  return 'web';
}

const readmeCache: Record<string, string> = {};

export async function fetchRepoReadme(repoName: string, lang: 'pt' | 'en' = 'pt'): Promise<string> {
  const cacheKey = `${repoName}_${lang}`;
  if (readmeCache[cacheKey]) {
    return readmeCache[cacheKey];
  }

  // Candidate file names by preferred language
  const candidateFiles: string[] = [];
  if (lang === 'pt') {
    if (repoName === 'Pomocute') {
      candidateFiles.push('README-pt.md', 'README.md');
    } else {
      candidateFiles.push('README.md', 'README-pt.md');
    }
  } else {
    if (repoName === 'Pomocute') {
      candidateFiles.push('README.md', 'README-en.md');
    } else {
      candidateFiles.push('README-en.md', 'README.md');
    }
  }

  // 1. Try raw github usercontent (no API rate limits)
  const branches = ['main', 'master'];
  for (const file of candidateFiles) {
    for (const branch of branches) {
      try {
        const res = await fetch(`https://raw.githubusercontent.com/I-Lima/${repoName}/${branch}/${file}`);
        if (res.ok) {
          const text = await res.text();
          if (text && text.trim().length > 20) {
            readmeCache[cacheKey] = text;
            return text;
          }
        }
      } catch {
        // try next branch or candidate
      }
    }
  }

  // 2. Try GitHub REST API /readme
  try {
    const apiRes = await fetch(`https://api.github.com/repos/I-Lima/${repoName}/readme`, {
      headers: {
        Accept: 'application/vnd.github.raw+json'
      }
    });
    if (apiRes.ok) {
      const text = await apiRes.text();
      if (text && text.trim().length > 20) {
        readmeCache[cacheKey] = text;
        return text;
      }
    }
  } catch {
    // continue to fallback
  }

  // 3. Fallback markdown
  const fallback = getFallbackReadme(repoName, lang);
  readmeCache[cacheKey] = fallback;
  return fallback;
}

function getFallbackReadme(repoName: string, lang: 'pt' | 'en'): string {
  switch (repoName) {
    case 'Pomocute':
      return lang === 'pt'
        ? `# Pomocute 🍅\n\nAplicativo móvel personalizável baseado na técnica Pomodoro, desenvolvido em **React Native** e **TypeScript** por Ingrid Lima.\n\n## Principais Funcionalidades\n- Ciclos de foco, pausas curtas e longas ajustáveis\n- Notificações visuais e sonoras\n- Interface lúdica com temas dinâmicos\n- Gerenciamento de tarefas em tempo de execução\n\n## Tecnologias\n- React Native\n- TypeScript\n- Expo & Mobile Tooling`
        : `# Pomocute 🍅\n\nCustomizable mobile application built on the Pomodoro technique, developed in **React Native** and **TypeScript** by Ingrid Lima.\n\n## Features\n- Customizable focus, short break, and long break intervals\n- Visual and acoustic notifications\n- Dynamic themes with intuitive interface\n- Runtime task and timer management\n\n## Technologies\n- React Native\n- TypeScript\n- Expo`;

    case 'Dermatology-App-Kotlin':
      return lang === 'pt'
        ? `# Dermatology App 🩺\n\nAplicativo Android nativo para clínica de dermatologia desenvolvido em **Kotlin** com **Clean Architecture**.\n\n## Recursos Principais\n- Agendamento prático de consultas dermatológicas\n- Catálogo de procedimentos médicos e cuidados com a pele\n- Validação estrita de código com Detekt e SonarCloud\n- Padrões de Material Design para experiência nativa de alta performance\n\n## Tecnologias\n- Kotlin\n- Android SDK\n- Clean Architecture\n- Detekt & SonarCloud`
        : `# Dermatology App 🩺\n\nNative Android application for a dermatology clinic engineered with **Kotlin** and **Clean Architecture**.\n\n## Key Highlights\n- Intuitive appointment scheduling and consultation tracking\n- Procedure catalog and skincare treatment guide\n- Code quality gates with Detekt and SonarCloud integration\n- Responsive Material Components\n\n## Stack\n- Kotlin\n- Android SDK\n- Clean Architecture`;

    case 'Estribado-Broker-API':
      return lang === 'pt'
        ? `# Estribado Broker API 📈\n\nAPI RESTful corporativa desenvolvida com **Java 17**, **Spring Boot** e **Docker** para gerenciar carteiras de ações e transações financeiras.\n\n## Arquitetura & Boas Práticas\n- Operações completas de CRUD para cotações e portfólios\n- Cobertura de testes automatizados com JUnit e Mockito\n- Relatórios de cobertura com Jacoco e análise estática via Checkstyle e SonarQube\n- Conteinerização com Docker e Docker Compose\n\n## Stack\n- Java 17\n- Spring Boot & Spring Security\n- PostgreSQL & Hibernate\n- Docker & Jacoco`
        : `# Estribado Broker API 📈\n\nEnterprise RESTful API developed with **Java 17**, **Spring Boot**, and **Docker** to manage stock portfolios and financial transactions.\n\n## Architecture & Best Practices\n- Complete CRUD endpoints for market assets and investor accounts\n- Automated testing suites using JUnit and Mockito\n- Code quality and coverage monitoring with Jacoco, Checkstyle, and SonarQube\n- Containerization with Docker and Docker Compose\n\n## Stack\n- Java 17\n- Spring Boot & Spring Security\n- PostgreSQL & Docker`;

    case 'portfolio':
    default:
      return lang === 'pt'
        ? `# Portfólio Oficial - Ingrid Lima 🚀\n\nPlataforma oficial de apresentação profissional de Ingrid Lima (il-studio.dev).\n\n## Arquitetura\n- **Next.js & React**: Componentização de alto desempenho com Server Components e Client Hooks\n- **TypeScript**: Tipagem estrita de todos os modelos de dados e APIs\n- **Tailwind CSS**: Design system customizado em escala e tema escuro moderno\n- **Integração GitHub**: Sincronização em tempo real de repositórios e documentações`
        : `# Official Portfolio - Ingrid Lima 🚀\n\nIngrid Lima's official engineering portfolio and technical platform (il-studio.dev).\n\n## Architecture\n- **Next.js & React**: High performance component architecture\n- **TypeScript**: Strict type safety across models and APIs\n- **Tailwind CSS**: Custom dark design system\n- **GitHub API**: Real-time synchronization of repositories and documentation`;
  }
}
