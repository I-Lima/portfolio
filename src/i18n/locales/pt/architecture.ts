export const architecture = {
  badge: 'Arquitetura Corporativa',
  title: 'Ecossistema de Micro-Frontends',
  subtitle: 'Experiência prática na transição e manutenção de sistemas modulares escaláveis, com deploys independentes, design system unificado e esteiras CI/CD desacopladas.',
  clickPrompt: 'Clique nos nós para inspecionar as atribuições e vantagens arquiteturais:',
  benefitsTitle: 'Benefícios & Impacto de Engenharia',
  responsibilitiesTitle: 'Atribuições & Responsabilidades',
  techsTitle: 'Tecnologias Utilizadas',
  nodes: {
    shell: {
      title: 'Host Application (Container Shell)',
      tech: 'React 19, TypeScript, Dynamic Remotes Loader',
      role: 'Casca orquestradora que gerencia roteamento centralizado, estado de autenticação de sessão, navegação global e injeção assíncrona dos micro-frontends.',
      benefits: [
        'Deploys autônomos sem indisponibilidade da aplicação inteira',
        'Isolamento total de falhas em tempo de execução',
        'Compartilhamento de contexto de autenticação sem vazamento de escopo',
      ],
    },
    mfeA: {
      title: 'MFE 1: Gestão & Operações Corporativas',
      tech: 'React, TypeScript, Redux Toolkit',
      role: 'Módulo de negócio isolado responsável pelas regras operacionais, formulários complexos e fluxos transacionais da empresa.',
      benefits: [
        'Esteira de CI/CD e versionamento independente no Bitbucket',
        'Suíte própria de testes unitários com garantia de qualidade CTFL',
        'Atualizações contínuas sem afetar outros domínios da empresa',
      ],
    },
    mfeB: {
      title: 'MFE 2: Relatórios & BI Interativo',
      tech: 'React, TypeScript, Visualização de Dados',
      role: 'Módulo de telemetria analítica com painéis de dados em tempo real e exportação de relatórios corporativos.',
      benefits: [
        'Carga sob demanda via lazy-loading otimizando First Contentful Paint',
        'Gráficos dinâmicos e exportações assíncronas em background',
        'Renderização condicional baseada no perfil e permissões de acesso',
      ],
    },
    sharedUI: {
      title: 'Shared Design System & Figma Tokens',
      tech: 'Figma to Code, Tailwind / CSS Tokens, Component Library',
      role: 'Biblioteca de componentes visuais fiéis aos protótipos do Figma, padronizando botões, tipografia, inputs e diálogos entre todos os times.',
      benefits: [
        'Fidelidade pixel-perfect entre protótipo e implementação',
        'Acessibilidade e usabilidade corporativa unificada',
        'Redução drástica no tempo de desenvolvimento de novas telas',
      ],
    },
    backend: {
      title: 'Node.js & Java Microservices Gateway',
      tech: 'Node.js, Express, TypeScript, Java 11 / Spring Boot',
      role: 'Camada de APIs resiliente com autenticação centralizada, regras de negócio robustas e comunicação REST otimizada.',
      benefits: [
        'APIs organizadas com Clean Architecture e tipagem estrita em TypeScript',
        'Integração eficiente com serviços legados em Java e novas APIs Node.js',
        'Cobertura de testes e validação preventiva de dados',
      ],
    },
  },
};

export default architecture;
