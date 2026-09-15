import React, { useState } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO, EXPERIENCES, CERTIFICATIONS, EDUCATION, LANGUAGES } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Mail, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin,
  ShieldCheck
} from 'lucide-react';

interface CurriculumModalProps {
  isOpen: boolean;
  currentLang: Language;
  onClose: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({
  isOpen,
  currentLang,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCV = `
INGRID BEZERRA DE LIMA
Fortaleza, CE, Brasil
E-mail: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}
Portfólio: ${PERSONAL_INFO.website}

RESUMO PROFISSIONAL
${PERSONAL_INFO.bio.pt}

EXPERIÊNCIAS PROFISSIONAIS
1. FFIT - Inovações e Tecnologia (Fev 2022 - Presente)
   Cargo: Desenvolvedora Full Stack
   - Desenvolvimento de aplicações web baseadas em Micro-Frontends com React e TypeScript.
   - Implementação de back-end em Node.js e TypeScript com arquitetura limpa.
   - Projeto InterAll: App mobile React Native + Redux publicado na Google Play Store e Apple App Store.
   - Liderança na implementação de testes unitários e qualidade de software.
   - Criação de UI no Figma e deploy contínuo em produção.

2. FFIT - Inovações e Tecnologia (Nov 2021 - Fev 2022)
   Cargo: Estagiária de Desenvolvimento
   - Aplicações web em React.js e TypeScript sob arquitetura de Micro-Frontends.
   - Implementação fiel de interfaces desenhadas no Figma e versionamento Bitbucket.

3. PET Computação UECE (Abr 2021 - Nov 2021)
   Cargo: Bolsista e Coordenadora de DevApps e Finanças
   - Liderança técnica no site oficial da SECOMP 2021.
   - Instrutora de WordPress e capacitação técnica.

CERTIFICAÇÃO
- ISTQB® Certified Tester Foundation Level (CTFL)

FORMAÇÃO ACADÊMICA
- Bacharelado em Ciência da Computação - Unifametro (2025 - Presente)
- Início na Universidade Estadual do Ceará (UECE) (2020 - 2025)

PROJETOS PESSOAIS DESTACADOS
- Pomocute: App React Native + TypeScript com personalização de temas e timer Pomodoro.
- Dermatology App: App Android Nativo com Kotlin para agendamento de clínica dermatológica.
- Estribado Broker API: Microsserviço RESTful em Spring Boot (Java) para gestão de ações.

IDIOMAS
- Português (Nativo), Inglês (Intermediário), Espanhol (Intermediário), Alemão (Básico)
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0e1017] border border-white/10 shadow-2xl p-6 sm:p-10 space-y-8 text-zinc-100 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#09C8FF]/10 text-[#09C8FF] border border-[#09C8FF]/25">
              Currículo Oficial • Ingrid Lima
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#09C8FF]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (currentLang === 'pt' ? 'Copiado!' : 'Copied!') : (currentLang === 'pt' ? 'Copiar Texto' : 'Copy Text')}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#09C8FF] hover:bg-[#4cd7ff] text-xs font-bold text-[#041a24] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{currentLang === 'pt' ? 'Imprimir / PDF' : 'Print / PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-2"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-8 font-sans">
          
          <div className="border-b border-white/[0.08] pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-lg font-medium text-[#09C8FF] mt-1">
              {PERSONAL_INFO.role[currentLang]}
            </p>

            {/* Contacts Row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-zinc-500" />
                linkedin.com/in/ingridlima-js
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-zinc-500" />
                github.com/I-Lima
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-zinc-500" />
                il-studio.dev
              </span>
            </div>
          </div>

          {/* About / Resumo */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 font-mono">
              {currentLang === 'pt' ? 'Resumo Profissional' : 'Professional Summary'}
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {PERSONAL_INFO.bio[currentLang]}
            </p>
          </div>

          {/* Experiências */}
          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 font-mono">
              {currentLang === 'pt' ? 'Experiências Profissionais' : 'Professional Experience'}
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-2 border-l-2 border-[#09C8FF]/40 pl-4 py-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-bold text-white">
                    {exp.role[currentLang]} • <span className="text-zinc-300 font-normal">{exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-[#09C8FF]">
                    {exp.period[currentLang]}
                  </span>
                </div>

                <p className="text-xs text-zinc-400">
                  {exp.description[currentLang]}
                </p>

                <ul className="space-y-1 pt-1">
                  {exp.highlights[currentLang].map((h, i) => (
                    <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                      <span className="text-[#09C8FF] mt-1">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1 pt-2">
                  {exp.technologies.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certificação CTFL */}
          <div className="space-y-3 pt-2">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 font-mono">
              {currentLang === 'pt' ? 'Certificação' : 'Certification'}
            </h2>
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-[#09C8FF]/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#09C8FF] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-white">
                  ISTQB® Certified Tester Foundation Level (CTFL)
                </h3>
                <p className="text-xs text-zinc-300 mt-1">
                  {CERTIFICATIONS[0].description[currentLang]}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 font-mono">
                {currentLang === 'pt' ? 'Formação Acadêmica' : 'Education'}
              </h2>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-0.5">
                  <div className="font-bold text-white">{edu.degree[currentLang]}</div>
                  <div className="text-zinc-400">{edu.institution} ({edu.period})</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 font-mono">
                {currentLang === 'pt' ? 'Idiomas' : 'Languages'}
              </h2>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {LANGUAGES.map((l, i) => (
                  <div key={i} className="text-zinc-300">
                    <span className="font-medium text-white">{l.name[currentLang]}:</span> {l.level[currentLang]}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
