export const architecture = {
  badge: 'Enterprise Architecture',
  title: 'Micro-Frontends Ecosystem',
  subtitle: 'Hands-on experience architecting and maintaining scalable modular systems, featuring independent deployments, unified design system, and decoupled CI/CD pipelines.',
  clickPrompt: 'Click on nodes to inspect architectural responsibilities and benefits:',
  benefitsTitle: 'Engineering Benefits & Impact',
  responsibilitiesTitle: 'Role & Architectural Responsibilities',
  techsTitle: 'Technologies Used',
  nodes: {
    shell: {
      title: 'Host Application (Container Shell)',
      tech: 'React 19, TypeScript, Dynamic Remotes Loader',
      role: 'Orchestration shell managing unified routing, global auth session, cross-cutting telemetry, and asynchronous micro-app mounting.',
      benefits: [
        'Autonomous zero-downtime releases per business module',
        'Runtime failure isolation preventing cascade crashes',
        'Secure shared authentication without leaking scope',
      ],
    },
    mfeA: {
      title: 'MFE 1: Enterprise Operations & Core',
      tech: 'React, TypeScript, Redux Toolkit',
      role: 'Decoupled domain module governing business rules, dense operational forms, and transactional flows.',
      benefits: [
        'Isolated CI/CD pipelines and versioning via Bitbucket',
        'Autonomous unit test suite satisfying ISTQB CTFL rigor',
        'Rapid continuous deployment cycles without cross-team lock',
      ],
    },
    mfeB: {
      title: 'MFE 2: Analytics & Executive Dashboards',
      tech: 'React, TypeScript, Data Visualization',
      role: 'Telemetry analytics module serving real-time metrics dashboards and enterprise report exports.',
      benefits: [
        'On-demand lazy loading maximizing First Contentful Paint',
        'High-density charts and background async reporting',
        'Fine-grained role-based view and action gating',
      ],
    },
    sharedUI: {
      title: 'Shared Design System & Figma Tokens',
      tech: 'Figma to Code, Tailwind / CSS Tokens, Component Library',
      role: 'Shared UI design system derived from Figma prototypes, enforcing visual consistency across all micro-apps.',
      benefits: [
        'Pixel-perfect alignment between Figma and code',
        'Unified enterprise accessibility standards',
        'Accelerated screen development velocity',
      ],
    },
    backend: {
      title: 'Node.js & Java Microservices Gateway',
      tech: 'Node.js, Express, TypeScript, Java 11 / Spring Boot',
      role: 'Resilient backend API gateway handling authentication, robust business validation, and high-throughput REST endpoints.',
      benefits: [
        'APIs architected with Clean Architecture and strict TypeScript typing',
        'Seamless bridging between Java legacy backends and Node.js microservices',
        'High test coverage and automated contract validation',
      ],
    },
  },
};

export default architecture;
