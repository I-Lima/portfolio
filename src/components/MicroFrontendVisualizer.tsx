import React, { useState } from 'react';
import { Language } from '../types';
import { 
  Layers, 
  Boxes, 
  Cpu, 
  GitBranch, 
  Server, 
  ShieldCheck, 
  Layout, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface MicroFrontendVisualizerProps {
  currentLang: Language;
}

export const MicroFrontendVisualizer: React.FC<MicroFrontendVisualizerProps> = ({ currentLang }) => {
  const [selectedNode, setSelectedNode] = useState<string>('shell');

  const nodeDetails: Record<string, {
    title: { pt: string; en: string };
    tech: string;
    role: { pt: string; en: string };
    benefits: { pt: string[]; en: string[] };
  }> = {
    shell: {
      title: {
        pt: 'Host Application (Container Shell)',
        en: 'Host Application (Container Shell)'
      },
      tech: 'React 19, TypeScript, Dynamic Remotes Loader',
      role: {
        pt: 'Casca orquestradora que gerencia roteamento centralizado, estado de autenticação de sessão, navegação global e injeção assíncrona dos micro-frontends.',
        en: 'Orchestration shell managing unified routing, global auth session, cross-cutting telemetry, and asynchronous micro-app mounting.'
      },
      benefits: {
        pt: [
          'Deploys autônomos sem indisponibilidade da aplicação inteira',
          'Isolamento total de falhas em tempo de execução',
          'Compartilhamento de contexto de autenticação sem vazamento de escopo'
        ],
        en: [
          'Autonomous zero-downtime releases per business module',
          'Runtime failure isolation preventing cascade crashes',
          'Secure shared authentication without leaking scope'
        ]
      }
    },
    mfeA: {
      title: {
        pt: 'MFE 1: Gestão e Operações Corporativas',
        en: 'MFE 1: Enterprise Operations & Core'
      },
      tech: 'React, TypeScript, Redux Toolkit',
      role: {
        pt: 'Módulo de negócio isolado responsável pelas regras operacionais, formulários complexos e fluxos transacionais da empresa.',
        en: 'Decoupled domain module governing business rules, dense operational forms, and transactional flows.'
      },
      benefits: {
        pt: [
          'Esteira de CI/CD e versionamento independente no Bitbucket',
          'Suíte própria de testes unitários com garantia de qualidade CTFL',
          'Atualizações contínuas sem afetar outros domínios da empresa'
        ],
        en: [
          'Isolated CI/CD pipelines and versioning via Bitbucket',
          'Autonomous unit test suite satisfying ISTQB CTFL rigor',
          'Rapid continuous deployment cycles without cross-team lock'
        ]
      }
    },
    mfeB: {
      title: {
        pt: 'MFE 2: Relatórios e BI Interativo',
        en: 'MFE 2: Analytics & Executive Dashboards'
      },
      tech: 'React, TypeScript, Visualização de Dados',
      role: {
        pt: 'Módulo dedicado ao processamento e renderização de métricas e dashboards analíticos de alto desempenho.',
        en: 'Dedicated analytics module rendering responsive charts, reporting grids, and real-time metrics.'
      },
      benefits: {
        pt: [
          'Carregamento assíncrono (lazy loading) sob demanda para poupar banda',
          'Memória e bundles otimizados com refatoração focada em performance',
          'Zero colisão de estilos graças ao escopo encapsulado'
        ],
        en: [
          'On-demand code splitting saving initial client bandwidth',
          'Optimized bundle size through proactive code refactoring',
          'Zero CSS bleeding via modular encapsulation'
        ]
      }
    },
    designSystem: {
      title: {
        pt: 'Shared Design System e Figma Tokens',
        en: 'Shared Design System & Figma Tokens'
      },
      tech: 'Figma to Code, Tailwind / CSS Tokens, Component Library',
      role: {
        pt: 'Biblioteca de componentes visuais fiéis aos protótipos do Figma, padronizando botões, tipografia, inputs e diálogos entre todos os times.',
        en: 'Shared UI design system derived from Figma prototypes, enforcing visual consistency across all micro-apps.'
      },
      benefits: {
        pt: [
          'Fidelidade pixel-perfect entre protótipo e implementação',
          'Acessibilidade e usabilidade corporativa unificada',
          'Redução drástica no tempo de desenvolvimento de novas telas'
        ],
        en: [
          'Pixel-perfect alignment between Figma and code',
          'Unified enterprise accessibility standards',
          'Accelerated screen development velocity'
        ]
      }
    },
    backend: {
      title: {
        pt: 'Node.js e Java Microservices Gateway',
        en: 'Node.js & Java Microservices Gateway'
      },
      tech: 'Node.js, Express, TypeScript, Java 11 / Spring Boot',
      role: {
        pt: 'Camada de APIs resiliente com autenticação centralizada, regras de negócio robustas e comunicação REST otimizada.',
        en: 'Resilient backend API gateway handling authentication, robust business validation, and high-throughput REST endpoints.'
      },
      benefits: {
        pt: [
          'APIs organizadas com Clean Architecture e tipagem estrita em TypeScript',
          'Integração eficiente com serviços legados em Java e novas APIs Node.js',
          'Cobertura de testes e validação preventiva de dados'
        ],
        en: [
          'APIs architected with Clean Architecture and strict TypeScript typing',
          'Seamless bridging between Java legacy backends and Node.js microservices',
          'High test coverage and automated contract validation'
        ]
      }
    }
  };

  const active = nodeDetails[selectedNode] || nodeDetails.shell;

  return (
    <section id="arquitetura" className="py-20 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-3 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#09C8FF]">
            <Boxes className="w-3.5 h-3.5" />
            <span>{currentLang === 'pt' ? 'Especialidade de Engenharia' : 'Engineering Focus'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {currentLang === 'pt' ? 'Arquitetura de Micro-Frontends' : 'Micro-Frontends Architecture'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {currentLang === 'pt'
              ? 'Conhecimento prático vivenciado na FFIT em projetos internos corporativos: estruturação de aplicações modulares em React e TypeScript para alta escalabilidade, isolamento de domínios e deploys desacoplados.'
              : 'Real-world expertise cultivated at FFIT across enterprise platforms: architecting modular React and TypeScript applications for high scalability, domain isolation, and decoupled deployments.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div 
              onClick={() => setSelectedNode('shell')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                selectedNode === 'shell'
                  ? 'bg-[#09C8FF]/10 border-[#09C8FF]/80 shadow-lg shadow-[#09C8FF]/15'
                  : 'bg-zinc-900/40 border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#09C8FF]/20 text-[#09C8FF] flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Host Container (Shell Application)</h3>
                    <p className="text-xs text-zinc-400 font-mono">React + TypeScript • Auth, Router, Remotes Orchestrator</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#09C8FF]/20 text-[#09C8FF] font-semibold">
                  Orquestrador
                </span>
              </div>
            </div>

            <div className="flex justify-around px-8 text-zinc-600 text-xs font-mono">
              <span>↓ Dynamic Mount</span>
              <span>↓ Dynamic Mount</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => setSelectedNode('mfeA')}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  selectedNode === 'mfeA'
                    ? 'bg-sky-500/10 border-sky-400/80 shadow-lg shadow-sky-500/10'
                    : 'bg-zinc-900/40 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Layout className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">MFE: Operações Core</h4>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono">
                  React, TS, Redux • Deploy Independente
                </p>
              </div>

              <div 
                onClick={() => setSelectedNode('mfeB')}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  selectedNode === 'mfeB'
                    ? 'bg-purple-500/10 border-purple-400/80 shadow-lg shadow-purple-500/10'
                    : 'bg-zinc-900/40 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">MFE: BI & Dashboards</h4>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono">
                  React, TS • Lazy Loaded Analytics
                </p>
              </div>
            </div>

            <div className="flex justify-center text-zinc-600 text-xs font-mono">
              <span>↓ Tokens & Components</span>
            </div>

            <div 
              onClick={() => setSelectedNode('designSystem')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                selectedNode === 'designSystem'
                  ? 'bg-pink-500/10 border-pink-400/80 shadow-lg shadow-pink-500/10'
                  : 'bg-zinc-900/40 border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Design System Compartilhado (Figma Tokens)</h3>
                    <p className="text-xs text-zinc-400 font-mono">UI Kit, Acessibilidade, Componentes Atômicos Pixel-Perfect</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-pink-400/20 text-pink-300">
                  Figma / UI
                </span>
              </div>
            </div>

            <div className="flex justify-center text-zinc-600 text-xs font-mono">
              <span>↓ RESTful APIs & Gateways</span>
            </div>

            <div 
              onClick={() => setSelectedNode('backend')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                selectedNode === 'backend'
                  ? 'bg-amber-500/10 border-amber-400/80 shadow-lg shadow-amber-500/10'
                  : 'bg-zinc-900/40 border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Backend & APIs (Node.js & Java)</h3>
                    <p className="text-xs text-zinc-400 font-mono">Node.js + TypeScript, Java 11/Spring, Bitbucket CI/CD</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300">
                  Microservices
                </span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-900/80 border border-white/[0.08] space-y-5 sticky top-24">
            <div>
              <span className="text-[11px] font-mono text-[#09C8FF] uppercase tracking-wider block mb-1">
                {currentLang === 'pt' ? 'Módulo Selecionado:' : 'Selected Architectural Node:'}
              </span>
              <h3 className="text-xl font-bold text-white">
                {active.title[currentLang]}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                {active.tech}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {active.role[currentLang]}
            </p>

            <div className="space-y-3 pt-2 border-t border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                {currentLang === 'pt' ? 'Ganhos Práticos de Engenharia:' : 'Practical Engineering Benefits:'}
              </span>
              <ul className="space-y-2">
                {active.benefits[currentLang].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check className="w-4 h-4 text-[#09C8FF] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05] text-[11px] font-mono text-zinc-400 flex items-center justify-between">
              <span>{currentLang === 'pt' ? 'Padrão corporativo FFIT' : 'FFIT Enterprise Standard'}</span>
              <span className="text-[#09C8FF] font-semibold">Production Tested</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
