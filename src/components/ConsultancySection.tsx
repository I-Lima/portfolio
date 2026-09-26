import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Check,
  Code2,
  CheckCheck,
  Calculator,
  Search,
  Sparkles,
  Send
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
  id: 'qa' | 'dev';
  badge: { pt: string; en: string };
  title: { pt: string; en: string };
  icon: React.ElementType;
  period: { pt: string; en: string };
  desc: { pt: string; en: string };
  idealFor: { pt: string; en: string };
  notice?: { pt: string; en: string };
  contactPreset?: { pt: string; en: string };
  items: { pt: string[]; en: string[] };
  actionLabel: { pt: string; en: string };
}

export const ConsultancySection: React.FC<ConsultancySectionProps> = ({ currentLang }) => {
  const [selectedPillar, setSelectedPillar] = useState<string>('mobile');
  const [methodologyTab, setMethodologyTab] = useState<'dev' | 'qa'>('dev');

  const handleSelectServiceContact = (type: 'dev' | 'qa') => {
    const subject = type === 'dev' 
      ? (currentLang === 'pt' ? 'Desenvolvimento de Software / Projeto' : 'Software Development / Project')
      : (currentLang === 'pt' ? 'Consultoria QA / Testes ISTQB' : 'QA / ISTQB Testing Advisory');
    
    const message = type === 'dev'
      ? (currentLang === 'pt'
          ? 'Olá Ingrid,\n\nGostaria de solicitar uma análise prévia e orçamento para um projeto de software.\n\nTipo: [Novo projeto do zero / Ajustes e manutenção em projeto pronto]\nResumo da ideia / Repositório:\nPrazos e detalhes adicionais:'
          : 'Hi Ingrid,\n\nI would like to request an analysis and quote for a software project.\n\nType: [New greenfield project / Enhancements and maintenance on existing codebase]\nProject summary / Repository:\nTarget timeline and details:')
      : (currentLang === 'pt'
          ? 'Olá Ingrid,\n\nGostaria de entender melhor a viabilidade de uma consultoria técnica de qualidade de software (testes/QA ISTQB).\n\nCenário atual da aplicação:\nPrincipais desafios ou pontos de regressão:\nPrazos e formato de interesse:'
          : 'Hi Ingrid,\n\nI would like to explore technical quality consulting (ISTQB testing & QA).\n\nCurrent application landscape:\nMain challenges or regression issues:\nTimeline and preferred format:');

    window.dispatchEvent(new CustomEvent('setContactPreset', {
      detail: { subject, message }
    }));
  };

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
      id: 'qa',
      badge: { pt: 'Garantia de Qualidade & Testes', en: 'Quality Assurance & Testing' },
      title: { pt: 'Consultoria de Qualidade de Software (Testes)', en: 'Software Quality Consulting & Testing' },
      icon: ShieldCheck,
      period: { pt: 'Diagnóstico Pontual ou Advisory Mensal', en: 'Targeted Audit or Monthly Advisory' },
      desc: {
        pt: 'Consultoria técnica fundamentada nas melhores práticas internacionais e certificação ISTQB® CTFL. Estruturação e auditoria de suítes de testes, garantia de cobertura crítica, mitigação de regressões e elevação da confiabilidade das suas entregas.',
        en: 'Technical consulting grounded in international best practices and ISTQB® CTFL certification. Test suite design, mission-critical coverage, regression risk mitigation, and continuous quality workflows.'
      },
      idealFor: { pt: 'Times que precisam de entregas seguras e zero regressão', en: 'Teams requiring reliable releases and zero regression' },
      notice: {
        pt: '💡 Como funciona: Você entra em contato descrevendo os desafios de qualidade. Analiso os fluxos e esteiras para propor um plano de testes sob medida e orçamento possível.',
        en: '💡 How it works: Reach out with your quality challenges. I analyze your test workflows and CI/CD pipelines to propose a tailored test roadmap and viable budget.'
      },
      contactPreset: { pt: 'Consultoria QA / Testes ISTQB', en: 'QA / ISTQB Testing Advisory' },
      actionLabel: { pt: 'Solicitar Consultoria de QA', en: 'Request QA Consulting' },
      items: {
        pt: [
          'Auditoria e diagnóstico de qualidade e cobertura de testes',
          'Implementação de testes unitários e de integração (Jest, React Testing Library)',
          'Estratégias de prevenção de regressões em refatorações críticas',
          'Alinhamento de processos ágeis sob metodologia oficial ISTQB®'
        ],
        en: [
          'Quality assessment & comprehensive test coverage audit',
          'Unit & integration test suites (Jest, React Testing Library)',
          'Regression prevention strategies during critical refactors',
          'Agile QA workflows aligned with official ISTQB® methodology'
        ]
      }
    },
    {
      id: 'dev',
      badge: { pt: 'Engenharia de Software Sob Medida', en: 'Custom Software Engineering' },
      title: { pt: 'Desenvolvedor de Software', en: 'Software Developer' },
      icon: Code2,
      period: { pt: 'Projeto Novo ou Ajustes em Projeto Pronto', en: 'New Project or Existing System Enhancements' },
      desc: {
        pt: 'Possibilidade de desenvolver uma nova aplicação do zero ou atuar diretamente no ajuste, evolução e manutenção de um projeto já pronto. É necessário entrar em contato para que eu possa analisar detalhadamente o escopo, a base de código e os requisitos, definindo um orçamento possível e personalizado.',
        en: 'Available to build a new application from scratch or jump directly into improving, maintaining, and fixing an existing project. Get in touch so I can review your repository, requirements, and scope to define an accurate and viable custom quote.'
      },
      idealFor: { pt: 'Criação de novos apps ou refatoração/evoluções em sistemas existentes', en: 'Building new apps or enhancing/fixing existing systems' },
      notice: {
        pt: '💡 Como funciona: Você entra em contato descrevendo a sua necessidade, eu analiso a arquitetura ou os requisitos do projeto e retorno com uma estimativa de viabilidade, prazos e orçamento possível.',
        en: '💡 How it works: Reach out with your requirements, I will analyze the architecture or specifications, and follow up with feasibility, timeline, and an tailored quote.'
      },
      contactPreset: { pt: 'Desenvolvimento de Software / Projeto', en: 'Software Development / Project' },
      actionLabel: { pt: 'Solicitar Análise de Projeto & Orçamento', en: 'Request Project Analysis & Quote' },
      items: {
        pt: [
          'Desenvolvimento completo de projetos do zero (Web & Mobile)',
          'Ajustes, correções e manutenção em sistemas e código já pronto',
          'Análise técnica prévia do repositório para definição de orçamento viável',
          'Stack moderna: React, TypeScript, React Native, Node.js e Tailwind CSS'
        ],
        en: [
          'End-to-end greenfield development (Web & Mobile)',
          'Bug fixes, enhancements, and maintenance on existing codebases',
          'Preliminary technical analysis to establish a viable custom budget',
          'Modern stack: React, TypeScript, React Native, Node.js, and Tailwind CSS'
        ]
      }
    }
  ];

  interface MethodologyStep {
    step: string;
    icon: React.ElementType;
    badge: { pt: string; en: string };
    title: { pt: string; en: string };
    desc: { pt: string; en: string };
    highlight: { pt: string; en: string };
  }

  const devSteps: MethodologyStep[] = [
    {
      step: '01',
      icon: Send,
      badge: { pt: 'Contato & Demanda', en: 'Contact & Brief' },
      title: { pt: 'Contato Inicial & Envio do Projeto', en: 'Initial Contact & Project Scope' },
      desc: { 
        pt: 'Você entra em contato detalhando sua necessidade: criar um novo software do zero ou realizar ajustes, evolução técnica e manutenção em um projeto já pronto.',
        en: 'Reach out describing your needs: building a brand-new software from scratch or making enhancements, fixes, and maintenance on an existing project.'
      },
      highlight: { pt: 'Novo projeto ou base existente', en: 'New build or existing codebase' }
    },
    {
      step: '02',
      icon: Search,
      badge: { pt: 'Diagnóstico Técnico', en: 'Technical Audit' },
      title: { pt: 'Análise Aprofundada do Projeto', en: 'In-Depth Project Analysis' },
      desc: { 
        pt: 'Realizo a análise técnica detalhada do repositório existente ou dos requisitos do novo sistema, avaliando arquitetura, viabilidade, stack e complexidade.',
        en: 'I conduct a thorough technical analysis of your repository or project specifications, assessing architecture, viability, stack, and complexity.'
      },
      highlight: { pt: 'Inspeção de código e requisitos', en: 'Repository & scope evaluation' }
    },
    {
      step: '03',
      icon: Calculator,
      badge: { pt: 'Proposta & Orçamento', en: 'Proposal & Budget' },
      title: { pt: 'Definição do Orçamento Possível', en: 'Tailored Budget Definition' },
      desc: { 
        pt: 'Com base na análise do projeto, defino um orçamento viável e transparente, estimativa realista de prazos e alinhamento claro das entregas acordadas.',
        en: 'Based on the technical assessment, I define a transparent, realistic custom budget, milestones, and delivery timeline tailored to your goals.'
      },
      highlight: { pt: 'Orçamento viável e transparente', en: 'Viable & transparent quote' }
    },
    {
      step: '04',
      icon: Code2,
      badge: { pt: 'Execução Hands-on', en: 'Hands-on Execution' },
      title: { pt: 'Desenvolvimento ou Ajustes Ágeis', en: 'Development & Surgical Adjustments' },
      desc: { 
        pt: 'Codificação do novo software ou implementação pontual das correções e melhorias no projeto existente com React, TypeScript, Node.js e Clean Code.',
        en: 'Writing clean, resilient code for your new app or implementing precise enhancements on existing codebases using TypeScript, React, and Node.js.'
      },
      highlight: { pt: 'Clean Code & tipagem estrita', en: 'Clean Code & strict types' }
    },
    {
      step: '05',
      icon: CheckCheck,
      badge: { pt: 'Homologação & Entrega', en: 'Validation & Delivery' },
      title: { pt: 'Testes, Validação e Entrega', en: 'Testing, Sign-off & Delivery' },
      desc: { 
        pt: 'Homologação completa com testes automatizados, validação de funcionamento sem quebras e suporte para deploy em produção ou publicação nas lojas.',
        en: 'Comprehensive validation with automated tests, zero-breakage guarantee, joint sign-off, and production deployment or app store release support.'
      },
      highlight: { pt: 'Qualidade e garantia de entrega', en: 'Validated quality & support' }
    }
  ];

  const qaSteps: MethodologyStep[] = [
    {
      step: '01',
      icon: Send,
      badge: { pt: 'Alinhamento & Dores', en: 'Alignment & Discovery' },
      title: { pt: 'Diagnóstico de Dores de Qualidade', en: 'Quality Pain Points Alignment' },
      desc: { 
        pt: 'Conversa inicial para entender o cenário técnico da sua empresa, histórico de incidentes em produção, gargalos na esteira e objetivos do time.',
        en: 'Initial discovery to assess production regressions, delivery bottlenecks, lack of automated test coverage, and reliability targets.'
      },
      highlight: { pt: 'Mapeamento de riscos críticos', en: 'Critical risk identification' }
    },
    {
      step: '02',
      icon: Search,
      badge: { pt: 'Padrão ISTQB® CTFL', en: 'ISTQB® CTFL Standards' },
      title: { pt: 'Auditoria de Cobertura e Riscos', en: 'Code & Regression Risk Audit' },
      desc: { 
        pt: 'Inspeção do repositório e esteiras de teste para identificar zonas cegas sem cobertura, aplicando as melhores práticas internacionais do ISTQB® CTFL.',
        en: 'Deep-dive review of codebase and CI/CD pipelines to map out blind spots and regression risks under certified ISTQB® CTFL methodologies.'
      },
      highlight: { pt: 'Padrão internacional de testes', en: 'International testing standards' }
    },
    {
      step: '03',
      icon: Calculator,
      badge: { pt: 'Estratégia & Escopo', en: 'Strategy & Scope' },
      title: { pt: 'Plano de Testes & Proposta', en: 'Testing Roadmap & Proposal' },
      desc: { 
        pt: 'Definição do formato ideal de consultoria (diagnóstico pontual ou advisory contínuo), estimativa de esforço e proposta orçamentária transparente.',
        en: 'Tailoring the right engagement model (targeted test audit or monthly advisory), effort estimates, and transparent pricing structure.'
      },
      highlight: { pt: 'Diagnóstico pontual ou advisory', en: 'Audit or ongoing advisory' }
    },
    {
      step: '04',
      icon: ShieldCheck,
      badge: { pt: 'Automação & Testes', en: 'Test Automation' },
      title: { pt: 'Criação das Suítes Automatizadas', en: 'Automated Suite Implementation' },
      desc: { 
        pt: 'Implementação de testes unitários e de integração confiáveis e rápidos (Jest, React Testing Library), focados nos componentes e fluxos essenciais.',
        en: 'Writing resilient unit and integration test suites (Jest, Testing Library) targeting mission-critical user journeys and core logic.'
      },
      highlight: { pt: 'Jest & React Testing Library', en: 'Jest & Testing Library' }
    },
    {
      step: '05',
      icon: CheckCheck,
      badge: { pt: 'CI/CD & Autonomia', en: 'CI/CD & Enablement' },
      title: { pt: 'Automação Contínua & Repasse', en: 'CI/CD Automation & Handover' },
      desc: { 
        pt: 'Integração à esteira de CI/CD para prevenção ativa de regressões em cada PR, documentação técnica e transferência de conhecimento para o time.',
        en: 'Hooking tests into automated CI/CD pipelines, clear documentation, and practical knowledge transfer for complete team independence.'
      },
      highlight: { pt: 'Zero regressão garantida', en: 'Zero regression guarantee' }
    }
  ];

  const currentSteps = methodologyTab === 'dev' ? devSteps : qaSteps;

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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
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
        </motion.div>

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
                <motion.button
                  key={pillar.id}
                  id={`consulting-pillar-${pillar.id}`}
                  whileHover={{ scale: 1.015, x: 2 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedPillar(pillar.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-[#111420] border-[#09C8FF] shadow-lg shadow-[#09C8FF]/10 ring-1 ring-[#09C8FF]/40'
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
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Selected Pillar Details */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0c0e15] border border-white/[0.08] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPillar}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
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
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.06 }}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05] text-xs sm:text-sm text-zinc-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#09C8FF] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </motion.div>
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
                    href="#contato"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#09C8FF] hover:bg-[#4cd7ff] text-[#041a24] font-bold text-xs font-mono transition-all shadow-md shadow-[#09C8FF]/20 active:scale-95"
                  >
                    <span>{currentLang === 'pt' ? 'Solicitar Proposta' : 'Request Proposal'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Formatos de Atuação / Modalities */}
        <div className="space-y-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto space-y-2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {currentLang === 'pt' ? 'Formatos Flexíveis de Parceria' : 'Flexible Engagement Models'}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm">
              {currentLang === 'pt'
                ? 'Modelos pensados para atender desde dúvidas pontuais até transformações de fôlego em produtos ativos.'
                : 'Tailored formats designed to solve immediate bottlenecks or support long-term engineering scale.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {modalities.map((mod, idx) => {
              const ModalityIcon = mod.icon;
              return (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ y: -6, borderColor: 'rgba(9, 200, 255, 0.45)' }}
                  className="relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0e121d] to-[#0a0d14] hover:border-[#09C8FF]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#09C8FF]/5 group"
                >
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-[#09C8FF]/30 bg-[#09C8FF]/10 text-[#09C8FF] shadow-inner group-hover:scale-105 transition-transform">
                        <ModalityIcon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono text-[#09C8FF] uppercase tracking-wider block font-semibold">
                          {mod.badge[currentLang]}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {mod.title[currentLang]}
                        </h4>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/90 border border-white/[0.06] text-[11px] font-mono text-zinc-300">
                      <Clock className="w-3.5 h-3.5 text-[#09C8FF]" />
                      <span>{mod.period[currentLang]}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {mod.desc[currentLang]}
                    </p>

                    {/* Notice box for both topics explaining the contact and budget requirement */}
                    {mod.notice && (
                      <div className="p-3.5 rounded-2xl bg-[#09C8FF]/10 border border-[#09C8FF]/25 text-xs text-zinc-200 leading-relaxed">
                        <p className="text-zinc-200">{mod.notice[currentLang]}</p>
                      </div>
                    )}

                    <div className="pt-3 pb-2 border-t border-white/[0.06] space-y-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                        {currentLang === 'pt' ? 'O que contempla este formato:' : 'What this includes:'}
                      </span>
                      <ul className="space-y-2.5">
                        {mod.items[currentLang].map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                            <Check className="w-4 h-4 text-[#09C8FF] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/[0.06] mt-6">
                    <a
                      href="#contato"
                      onClick={() => {
                        setMethodologyTab(mod.id);
                        handleSelectServiceContact(mod.id);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all cursor-pointer bg-[#09C8FF] hover:bg-[#4cd7ff] text-[#041a24] shadow-lg shadow-[#09C8FF]/25 active:scale-95"
                    >
                      <span>{mod.actionLabel[currentLang]}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Metodologia de Trabalho Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0e111a] to-[#0a0c12] border border-white/[0.08] mb-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#09C8FF]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#09C8FF]/10 border border-[#09C8FF]/25 text-[11px] font-mono font-semibold text-[#09C8FF]">
              <Compass className="w-3.5 h-3.5" />
              <span>{currentLang === 'pt' ? 'METODOLOGIA DE TRABALHO' : 'WORK METHODOLOGY'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {currentLang === 'pt' ? 'Como Funciona na Prática' : 'How the Process Works'}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {currentLang === 'pt'
                ? 'Fluxo transparente e estruturado para cada formato de atuação: você entra em contato, analisamos tecnicamente o seu projeto e definimos um orçamento viável antes de iniciar qualquer desenvolvimento.'
                : 'A structured and transparent workflow for each service model: you reach out, we technically evaluate your project, and establish a viable custom quote before starting any work.'}
            </p>
          </div>

          {/* Interactive Flow Switcher (Tabs for Developer vs QA) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 max-w-2xl mx-auto relative z-10">
            <button
              type="button"
              id="methodology-tab-dev"
              onClick={() => setMethodologyTab('dev')}
              className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl border text-xs sm:text-sm font-bold font-mono transition-all cursor-pointer ${
                methodologyTab === 'dev'
                  ? 'bg-[#111624] border-[#09C8FF] text-white shadow-lg shadow-[#09C8FF]/15 ring-1 ring-[#09C8FF]/40'
                  : 'bg-zinc-900/70 border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
              }`}
            >
              <Code2 className={`w-4 h-4 ${methodologyTab === 'dev' ? 'text-[#09C8FF]' : 'text-zinc-400'}`} />
              <span>{currentLang === 'pt' ? 'Desenvolvedor de Software (Projetos & Ajustes)' : 'Software Developer (New & Existing Projects)'}</span>
            </button>

            <button
              type="button"
              id="methodology-tab-qa"
              onClick={() => setMethodologyTab('qa')}
              className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl border text-xs sm:text-sm font-bold font-mono transition-all cursor-pointer ${
                methodologyTab === 'qa'
                  ? 'bg-[#111624] border-[#09C8FF] text-white shadow-lg shadow-[#09C8FF]/15 ring-1 ring-[#09C8FF]/40'
                  : 'bg-zinc-900/70 border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
              }`}
            >
              <ShieldCheck className={`w-4 h-4 ${methodologyTab === 'qa' ? 'text-[#09C8FF]' : 'text-zinc-400'}`} />
              <span>{currentLang === 'pt' ? 'Consultoria de Qualidade (Testes / QA)' : 'Quality Consulting (Testing & QA)'}</span>
            </button>
          </div>

          {/* Context Explanatory Notice */}
          <div className="mb-8 p-4 rounded-2xl bg-[#09C8FF]/5 border border-[#09C8FF]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#09C8FF] shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs text-zinc-300">
                <span className="font-bold text-white block">
                  {methodologyTab === 'dev'
                    ? (currentLang === 'pt' ? 'Fluxo para Novo Projeto ou Ajustes em Código Já Pronto:' : 'Workflow for Greenfield or Existing Codebases:')
                    : (currentLang === 'pt' ? 'Fluxo para Consultoria e Auditoria de Testes:' : 'Workflow for Testing Consulting & Audit:')
                  }
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  {methodologyTab === 'dev'
                    ? (currentLang === 'pt'
                        ? 'Possibilidade de desenvolver uma aplicação nova do zero ou atuar no ajuste, melhoria e manutenção de um projeto já pronto. É necessário entrar em contato para que eu possa analisar o repositório/requisitos e definir um orçamento viável e possível.'
                        : 'Opportunity to develop a brand-new application from scratch or handle enhancements, bug fixes, and maintenance on an existing project. Reach out so I can review the repository/requirements and establish a viable custom budget.')
                    : (currentLang === 'pt'
                        ? 'Consultoria técnica fundamentada nas diretrizes internacionais da certificação ISTQB® CTFL. Mapeamos riscos de regressão, implementamos suítes de testes unitários e de integração e integramos esteiras automatizadas.'
                        : 'Technical consulting grounded in official international ISTQB® CTFL guidelines. We map regression risks, build unit and integration test suites, and automate CI/CD pipelines.')
                  }
                </p>
              </div>
            </div>

            <a
              href="#contato"
              onClick={() => handleSelectServiceContact(methodologyTab)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#09C8FF] hover:bg-[#4cd7ff] text-[#041a24] text-xs font-bold font-mono shrink-0 transition-all shadow-md shadow-[#09C8FF]/20 active:scale-95 cursor-pointer"
            >
              <span>
                {methodologyTab === 'dev'
                  ? (currentLang === 'pt' ? 'Solicitar Análise de Projeto & Orçamento' : 'Request Project Analysis & Quote')
                  : (currentLang === 'pt' ? 'Solicitar Consultoria de QA' : 'Request QA Consulting')
                }
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 5 Steps Grid with Animated Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={methodologyTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {currentSteps.map((s, idx) => {
                const StepIcon = s.icon;
                return (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.07 }}
                    className="p-4 sm:p-5 rounded-2xl bg-[#0c0e15] border border-white/[0.07] hover:border-[#09C8FF]/40 transition-all flex flex-col justify-between group hover:shadow-lg hover:shadow-[#09C8FF]/5"
                  >
                    <div className="space-y-3">
                      {/* Top Bar with Step Number and Icon */}
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-extrabold font-mono text-[#09C8FF]/40 group-hover:text-[#09C8FF] transition-colors">
                          {s.step}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.08] flex items-center justify-center text-[#09C8FF] group-hover:scale-110 transition-transform">
                          <StepIcon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Step Category Badge */}
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#09C8FF] font-semibold block mb-1">
                          {s.badge[currentLang]}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#09C8FF] transition-colors leading-snug">
                          {s.title[currentLang]}
                        </h4>
                      </div>

                      {/* Step Description */}
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {s.desc[currentLang]}
                      </p>
                    </div>

                    {/* Step Highlight Footer */}
                    <div className="pt-3 mt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[11px] font-mono text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#09C8FF] shrink-0" />
                      <span className="truncate">{s.highlight[currentLang]}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Fast Action CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#0c0e15] border border-[#09C8FF]/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#09C8FF] font-semibold">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{currentLang === 'pt' ? 'PRONTO PARA INICIAR SEU PROJETO OU CONSULTORIA?' : 'READY TO START YOUR PROJECT OR ADVISORY?'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {currentLang === 'pt' 
                ? 'Entre em contato para análise prévia e definição de orçamento' 
                : 'Get in touch for preliminary analysis & custom quote'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              {currentLang === 'pt'
                ? 'Seja para construir um novo sistema, aprimorar um projeto existente ou elevar a confiabilidade com suítes de testes: analisamos seu código e requisitos para propor uma solução viável.'
                : 'Whether building a greenfield system, enhancing existing code, or securing reliability with test suites: I analyze your requirements and repository to propose a viable solution.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#contato"
              onClick={() => handleSelectServiceContact(methodologyTab)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#09C8FF] hover:bg-[#4cd7ff] text-[#041a24] font-bold text-sm transition-all shadow-lg shadow-[#09C8FF]/20 cursor-pointer active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{currentLang === 'pt' ? 'Solicitar Análise de Projeto' : 'Request Project Analysis'}</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
