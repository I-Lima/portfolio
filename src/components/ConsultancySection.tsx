import React, { useState } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Boxes, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  ArrowUpRight, 
  CheckCircle2, 
  Calendar, 
  MessageSquare, 
  FileText,
  Clock,
  Compass,
  Check
} from 'lucide-react';

interface ConsultancySectionProps {
  currentLang: Language;
}

interface ServicePillar {
  id: string;
  icon: React.ElementType;
  badge: { pt: string; en: string };
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  highlights: { pt: string[]; en: string[] };
  technologies: string[];
}

interface Modality {
  title: { pt: string; en: string };
  period: { pt: string; en: string };
  desc: { pt: string; en: string };
  idealFor: { pt: string; en: string };
  items: { pt: string[]; en: string[] };
  recommended?: boolean;
}

export const ConsultancySection: React.FC<ConsultancySectionProps> = ({ currentLang }) => {
  const [selectedPillar, setSelectedPillar] = useState<string>('mobile');

  const pillars: ServicePillar[] = [
    // {
    //   id: 'mfe',
    //   icon: Boxes,
    //   badge: { pt: 'Arquitetura & Escala', en: 'Architecture & Scale' },
    //   title: { 
    //     pt: 'Arquitetura Web e Micro-Frontends', 
    //     en: 'Web Architecture & Micro-Frontends' 
    //   },
    //   description: {
    //     pt: 'Diagnóstico e reestruturação de aplicações web monolíticas para arquiteturas modulares escaláveis com React e TypeScript. Implementação de Design Systems baseados em tokens no Figma e governança eficiente para múltiplas equipes.',
    //     en: 'Diagnostic and modernization of monolithic web applications into decoupled, scalable Micro-Frontend systems using React and TypeScript. Design token automation from Figma and cross-team code governance.'
    //   },
    //   highlights: {
    //     pt: [
    //       'Estratégias de desacoplamento e isolamento de runtime',
    //       'Integração com Design Systems compartilhados e Figma tokens',
    //       'Deploy independente e esteiras CI/CD otimizadas por módulo',
    //       'Padronização de tipagem estrita e state management desacoplado'
    //     ],
    //     en: [
    //       'Decoupled runtime isolation and independent deployment',
    //       'Shared Design System alignment and token pipelines from Figma',
    //       'Modular CI/CD workflows and zero cross-team blockers',
    //       'Strict TypeScript typings and resilient state patterns'
    //     ]
    //   },
    //   technologies: ['React', 'TypeScript', 'Module Federation', 'Redux / Zustand', 'Tailwind CSS', 'Figma']
    // },
    {
      id: 'mobile',
      icon: Smartphone,
      badge: { pt: 'Mobile & Lojas', en: 'Mobile & App Stores' },
      title: { 
        pt: 'Engenharia Mobile e Publicação nas Lojas', 
        en: 'Mobile Engineering & App Store Deployments' 
      },
      description: {
        pt: 'Consultoria técnica para desenvolvimento, evolução e homologação de aplicativos React Native e Android (Kotlin). Da estruturação de código até o processo de submissão e conformidade na Google Play Store e Apple App Store.',
        en: 'End-to-end technical consulting for React Native and native Android (Kotlin) applications. Clean code design, offline resiliency, and strict compliance for Google Play Store and Apple App Store launches.'
      },
      highlights: {
        pt: [
          'Auditoria e preparação para aprovação nas lojas (Play Store & App Store)',
          'Arquitetura offline-first e persistência segura (AsyncStorage / SQLite)',
          'Otimização de tempo de inicialização e responsividade nativa',
          'Resolução de rejeições de conformidade e políticas das lojas'
        ],
        en: [
          'App Store & Google Play compliance, certificates, and release readiness',
          'Offline-first synchronization and reliable local storage caching',
          'Startup time optimization and native 60fps frame rendering',
          'Handling store submission rejections and security reviews'
        ]
      },
      technologies: ['React Native', 'Kotlin / Android', 'Redux Toolkit', 'App Store Connect', 'Google Play Console']
    },
    {
      id: 'qa',
      icon: ShieldCheck,
      badge: { pt: 'Padrão ISTQB® CTFL', en: 'ISTQB® CTFL Standards' },
      title: { 
        pt: 'Qualidade de Software, Testes e Certificação CTFL', 
        en: 'Software Quality, Testing & CTFL Standards' 
      },
      description: {
        pt: 'Consultoria embasada na certificação internacional ISTQB® CTFL. Estruturação de suítes de testes unitários e de integração, análise de risco de regressão e implantação de boas práticas de qualidade em times ágeis.',
        en: 'Quality advisory backed by official ISTQB® CTFL certification. Designing comprehensive automated unit test suites, regression risk mitigation, and institutionalizing quality-first workflows.'
      },
      highlights: {
        pt: [
          'Criação de suítes de testes unitários em React, Node.js e React Native',
          'Estratégia de refatoração segura com garantia de regressão zero',
          'Auditoria de cobertura de código e mapeamento de cenários críticos',
          'Alinhamento com padrões internacionais de testes do ISTQB®'
        ],
        en: [
          'High-confidence unit & integration test suites in React, Node, and RN',
          'Safe code refactoring strategies ensuring zero business logic regression',
          'Risk-based test coverage mapping for mission-critical paths',
          'Adherence to international ISTQB® testing process methodologies'
        ]
      },
      technologies: ['Jest', 'Testing Library', 'Node.js', 'ISTQB® CTFL', 'CI/CD Pipelines']
    },
    {
      id: 'audit',
      icon: Zap,
      badge: { pt: 'Performance & Diagnóstico', en: 'Performance & Audit' },
      title: { 
        pt: 'Auditoria de Código e Performance (Web & Mobile)', 
        en: 'Code Review & Performance Auditing' 
      },
      description: {
        pt: 'Análise aprofundada de bases de código legadas para detectar gargalos de performance, desperdício de re-renders, vazamentos de memória e inconsistências arquiteturais, entregando um plano de ação detalhado.',
        en: 'Deep-dive review of existing codebases to uncover performance bottlenecks, unnecessary re-renders, memory leaks, and structural inconsistencies, delivering a clear and prioritized action roadmap.'
      },
      highlights: {
        pt: [
          'Mapeamento de gargalos de renderização e otimização de Core Web Vitals',
          'Redução de tamanho de bundle e tempos de carregamento',
          'Identificação de vulnerabilidades, dependências obsoletas e débitos técnicos',
          'Entrega de relatório executivo com plano de ação priorizado'
        ],
        en: [
          'Identifying render bottlenecks and optimizing Core Web Vitals metrics',
          'Bundle size trimming, tree-shaking improvements, and lazy loading',
          'Technical debt, dependency vulnerability, and anti-pattern assessment',
          'Executive diagnostic report with prioritized quick wins and structural refactors'
        ]
      },
      technologies: ['React DevTools Profiler', 'Bundle Analyzer', 'Lighthouse', 'TypeScript', 'Clean Code']
    }
  ];

  const modalities: Modality[] = [
    {
      title: { pt: 'Diagnóstico & Auditoria Pontual', en: 'Targeted Audit & Diagnostic' },
      period: { pt: '1 a 2 semanas', en: '1 to 2 weeks' },
      desc: {
        pt: 'Ideal para equipes com problemas pontuais de performance, regressões recorrentes ou preparando um produto para lançamento.',
        en: 'Ideal for teams experiencing performance issues, recurring bugs, or preparing a product for major launch.'
      },
      idealFor: { pt: 'Diagnóstico rápido e plano de ação', en: 'Fast diagnosis and execution roadmap' },
      items: {
        pt: [
          'Análise aprofundada do repositório e arquitetura',
          'Relatório detalhado de riscos e oportunidades',
          'Reunião técnica de apresentação dos achados',
          'Roadmap priorizado de correções'
        ],
        en: [
          'Comprehensive repository and architecture review',
          'Detailed executive risk and opportunity assessment',
          'Technical presentation walkthrough with key stakeholders',
          'Prioritized action roadmap with remediation guidance'
        ]
      }
    },
    {
      title: { pt: 'Advisory Técnico & Mentoria', en: 'Technical Advisory & Mentorship' },
      period: { pt: 'Mensal / Recorrente', en: 'Monthly / Retainer' },
      desc: {
        pt: 'Apoio contínuo para líderes técnicos e equipes que precisam de validação de decisões arquiteturais e elevação de padrões.',
        en: 'Ongoing support for tech leads and engineering teams needing senior architectural validation and code quality standards.'
      },
      idealFor: { pt: 'Evolução contínua e governança técnica', en: 'Continuous code governance and leveling' },
      recommended: true,
      items: {
        pt: [
          'Sessões semanais ou quinzenais de alinhamento',
          'Code review de Pull Requests críticas',
          'Mentoria sobre padrões React and TypeScript',
          'Canal direto assíncrono para dúvidas arquiteturais'
        ],
        en: [
          'Weekly or bi-weekly sync & architecture design reviews',
          'In-depth review of critical Pull Requests and contracts',
          'Mentorship on React and TypeScript',
          'Asynchronous direct channel for architecture questions'
        ]
      }
    },
    {
      title: { pt: 'Hands-on / Módulo Crítico', en: 'Hands-on Critical Module Delivery' },
      period: { pt: 'Por Escopo / Sprint', en: 'Scope / Sprint-based' },
      desc: {
        pt: 'Atuação prática direta no código para destravar um módulo complexo, reestruturar a suíte de testes ou publicar o app nas lojas.',
        en: 'Direct hands-on engineering to unblock a complex module, overhaul the test suite, or drive mobile app store publishing.'
      },
      idealFor: { pt: 'Implementações de alta complexidade', en: 'High-complexity critical implementations' },
      items: {
        pt: [
          'Desenvolvimento focado no módulo crítico',
          'Implementação de suítes de testes completas',
          'Homologação de builds e esteira de publicação',
          'Documentação técnica e repasse para o time interno'
        ],
        en: [
          'Hands-on engineering on the target critical module',
          'Automated unit & integration test coverage',
          'Production-ready store deployment and build config',
          'Full handover documentation and team knowledge transfer'
        ]
      }
    }
  ];

  const steps = [
    {
      step: '01',
      title: { pt: 'Alinhamento & Escopo', en: 'Discovery & Scope' },
      desc: { 
        pt: 'Conversa inicial para entender o cenário técnico da sua empresa, objetivos de negócio, dores da equipe e prazos.',
        en: 'Initial session to understand your technical landscape, business drivers, pain points, and target timeline.'
      }
    },
    {
      step: '02',
      title: { pt: 'Imersão & Diagnóstico', en: 'Deep Dive & Assessment' },
      desc: { 
        pt: 'Inspeção do repositório, arquitetura de componentes, esteiras de testes e métricas para identificar causas-raiz.',
        en: 'Repository review, component architecture inspection, testing pipelines, and telemetry analysis.'
      }
    },
    {
      step: '03',
      title: { pt: 'Execução & Orientação', en: 'Execution & Advisory' },
      desc: { 
        pt: 'Aplicação das melhorias acordadas, seja através de mentoria consultiva, documentação ou implementação hands-on.',
        en: 'Execution of agreed improvements via consultative mentoring, architectural guides, or hands-on delivery.'
      }
    },
    {
      step: '04',
      title: { pt: 'Validação & Autonomia', en: 'Validation & Handover' },
      desc: { 
        pt: 'Garantia de que os objetivos foram atingidos com testes automatizados, repasse técnico e autonomia completa para o time.',
        en: 'Verification via automated tests, knowledge transfer, and ensuring full independence for your team.'
      }
    }
  ];

  const activePillarData = pillars.find((p) => p.id === selectedPillar) || pillars[0];
  const ActiveIcon = activePillarData.icon;

  const prefilledEmailSubject = encodeURIComponent(
    currentLang === 'pt' 
      ? 'Consulta sobre Consultoria Técnica - IL Studio' 
      : 'Technical Consulting Inquiry - IL Studio'
  );
  const prefilledEmailBody = encodeURIComponent(
    currentLang === 'pt'
      ? `Olá, \n\nGostaria de entender melhor a viabilidade de uma consultoria técnica para o meu projeto/empresa.\n\nContexto do projeto:\nObjetivo principal:\nPrazos e formato de interesse:\n\nAguardo seu retorno!`
      : `Hello,\n\nI would like to explore technical consulting for my project/company.\n\nProject context:\nMain objective:\nTimeline and preferred format:\n\nLooking forward to hearing from you!`
  );

  return (
    <section id="consultoria" className="py-20 border-t border-white/[0.06] relative bg-[#090b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09C8FF]/10 border border-[#09C8FF]/30 text-xs font-mono font-semibold text-[#09C8FF]">
            <Compass className="w-3.5 h-3.5" />
            <span>{currentLang === 'pt' ? 'CONSULTORIA TÉCNICA ESPECIALIZADA' : 'SPECIALIZED TECHNICAL CONSULTING'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {currentLang === 'pt' 
              ? 'Acelere seu produto com arquitetura sólida e qualidade certificada' 
              : 'Scale your engineering with proven architecture & certified quality'}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {currentLang === 'pt'
              ? 'Assessoria e atuação técnica para empresas, startups e times que buscam evoluir sistemas web e mobile com padrão de excelência, esteiras de testes automatizados e zero regressão.'
              : 'Consulting and advisory services for engineering teams aiming to modernize web and mobile products with senior craftsmanship, automated testing, and zero regression.'}
          </p>
        </div>

        {/* Pillars Navigation and Interactive Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Pillar Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block px-1">
              {currentLang === 'pt' ? 'Áreas de Especialidade' : 'Specialization Domains'}
            </span>

            {pillars.map((pillar) => {
              const isSelected = pillar.id === selectedPillar;
              const PillarIcon = pillar.icon;

              return (
                <button
                  key={pillar.id}
                  id={`consulting-pillar-${pillar.id}`}
                  onClick={() => setSelectedPillar(pillar.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#111420] border-[#09C8FF]/50 shadow-lg shadow-[#09C8FF]/5 ring-1 ring-[#09C8FF]/30'
                      : 'bg-[#0c0e15] border-white/[0.06] hover:border-white/20 hover:bg-zinc-900/60'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-[#09C8FF]/20 text-[#09C8FF] border border-[#09C8FF]/40'
                      : 'bg-zinc-900 text-zinc-400 border border-white/[0.08]'
                  }`}>
                    <PillarIcon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`text-[11px] font-mono font-semibold ${
                        isSelected ? 'text-[#09C8FF]' : 'text-zinc-400'
                      }`}>
                        {pillar.badge[currentLang]}
                      </span>
                    </div>

                    <h3 className={`text-sm sm:text-base font-bold transition-colors ${
                      isSelected ? 'text-white' : 'text-zinc-300'
                    }`}>
                      {pillar.title[currentLang]}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Pillar Details */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0c0e15] border border-white/[0.08] shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#09C8FF]/15 text-[#09C8FF] border border-[#09C8FF]/30 flex items-center justify-center">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#09C8FF] uppercase tracking-wider block">
                    {activePillarData.badge[currentLang]}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {activePillarData.title[currentLang]}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {activePillarData.description[currentLang]}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                {currentLang === 'pt' ? 'O que está incluído:' : 'What is delivered:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activePillarData.highlights[currentLang].map((highlight, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05] text-xs sm:text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#09C8FF] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                {currentLang === 'pt' ? 'Stack & Tecnologias Aplicadas:' : 'Stack & Technologies:'}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activePillarData.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{currentLang === 'pt' ? 'Agenda aberta para novas consultorias' : 'Accepting new consulting engagements'}</span>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=${prefilledEmailSubject}&body=${prefilledEmailBody}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#09C8FF] hover:bg-[#4cd7ff] text-[#041a24] font-bold text-xs font-mono transition-all shadow-md shadow-[#09C8FF]/20"
              >
                <span>{currentLang === 'pt' ? 'Solicitar Proposta' : 'Request Proposal'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Formatos de Atuação / Modalities */}
        <div className="space-y-6 mb-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {currentLang === 'pt' ? 'Formatos Flexíveis de Parceria' : 'Flexible Engagement Models'}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm">
              {currentLang === 'pt'
                ? 'Modelos pensados para atender desde dúvidas pontuais até transformações de fôlego em produtos ativos.'
                : 'Tailored formats designed to solve immediate bottlenecks or support long-term engineering scale.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modalities.map((mod, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 ${
                  mod.recommended
                    ? 'bg-[#0e121c] border-[#09C8FF]/40 shadow-xl shadow-[#09C8FF]/5 ring-1 ring-[#09C8FF]/20'
                    : 'bg-[#0c0e14] border-white/[0.08] hover:border-white/20'
                }`}
              >
                {mod.recommended && (
                  <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#09C8FF] text-[#041a24] text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                    {currentLang === 'pt' ? 'Mais Procurado' : 'Most Popular'}
                  </span>
                )}

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#09C8FF] uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {mod.period[currentLang]}
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      {mod.title[currentLang]}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {mod.desc[currentLang]}
                  </p>

                  <div className="pt-2 pb-2 border-t border-white/[0.06] space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      {currentLang === 'pt' ? 'Entregáveis:' : 'Deliverables:'}
                    </span>
                    <ul className="space-y-2">
                      {mod.items[currentLang].map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-[#09C8FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.06] mt-6">
                  <a
                    href="#contato"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all ${
                      mod.recommended
                        ? 'bg-[#09C8FF] hover:bg-[#4cd7ff] text-[#041a24] shadow-md shadow-[#09C8FF]/20'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10'
                    }`}
                  >
                    <span>{currentLang === 'pt' ? 'Iniciar Conversa' : 'Get in Touch'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Steps Process */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0e111a] to-[#0a0c12] border border-white/[0.08] mb-12">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#09C8FF]">
              {currentLang === 'pt' ? 'METODOLOGIA DE TRABALHO' : 'WORK METHODOLOGY'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {currentLang === 'pt' ? 'Como Funciona na Prática' : 'How the Process Works'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div key={idx} className="space-y-2.5 relative">
                <span className="text-3xl font-extrabold font-mono text-[#09C8FF]/30">
                  {s.step}
                </span>
                <h4 className="text-base font-bold text-white">
                  {s.title[currentLang]}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {s.desc[currentLang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fast Action CTA Banner */}
        <div className="rounded-3xl bg-[#0c0e15] border border-[#09C8FF]/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#09C8FF] font-semibold">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{currentLang === 'pt' ? 'PRONTO PARA EVOLUIR SEU PRODUTO?' : 'READY TO ELEVATE YOUR PRODUCT?'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {currentLang === 'pt' 
                ? 'Agende uma conversa preliminar de 30 minutos sem compromisso' 
                : 'Schedule a preliminary 30-minute introductory call'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              {currentLang === 'pt'
                ? 'Analisamos seus desafios técnicos atuais e traçamos a melhor rota de consultoria para o momento da sua empresa.'
                : 'We assess your current engineering bottlenecks and map out the most effective advisory roadmap.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#09C8FF] hover:bg-[#4cd7ff] text-[#041a24] font-bold text-sm transition-all shadow-lg shadow-[#09C8FF]/20 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{currentLang === 'pt' ? 'Entrar em Contato' : 'Get in Touch'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
