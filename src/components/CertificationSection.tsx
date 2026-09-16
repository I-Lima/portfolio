import React from 'react';
import { Language } from '../types';
import { CERTIFICATIONS } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  ExternalLink, 
  Code2, 
  Sparkles,
  Bug,
  Cpu,
  FileCode2
} from 'lucide-react';

interface CertificationSectionProps {
  currentLang: Language;
}

export const CertificationSection: React.FC<CertificationSectionProps> = ({ currentLang }) => {
  const cert = CERTIFICATIONS[0];

  const qaPrinciples = [
    {
      title: { pt: 'Prevenção Ativa de Defeitos', en: 'Active Defect Prevention' },
      desc: {
        pt: 'Aplicação de testes na raiz do desenvolvimento para prevenir falhas antes mesmo de atingirem ambientes de homologação.',
        en: 'Embedding testing early into development cycles to neutralize defects before staging deployment.'
      },
      icon: Bug
    },
    {
      title: { pt: 'Design de Casos de Teste Estruturados', en: 'Structured Test Case Architecture' },
      desc: {
        pt: 'Técnicas de particionamento de equivalência, análise de valor limite e transição de estados para cobertura máxima.',
        en: 'Equivalence partitioning, boundary value analysis, and state transition techniques for high coverage.'
      },
      icon: FileCode2
    },
    {
      title: { pt: 'Testes Unitários e Automação', en: 'Unit Testing and Automated Quality' },
      desc: {
        pt: 'Liderança em suítes de testes unitários no React Native e Node.js, garantindo estabilidade nas lojas e em produção.',
        en: 'Spearheaded automated unit test suites in React Native and Node.js, ensuring app store stability.'
      },
      icon: Code2
    },
    {
      title: { pt: 'Refatoração Segura e Regressão Zero', en: 'Safe Refactoring and Zero Regression' },
      desc: {
        pt: 'Melhoria contínua de código legado sem quebra de contratos de API ou comportamentos esperados de interface.',
        en: 'Continuous evolutionary code refactoring without breaking API contracts or UI invariants.'
      },
      icon: Cpu
    }
  ];

  return (
    <section id="certificacao" className="py-20 border-t border-white/[0.06] relative bg-[#0a0c12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-b from-[#121520] to-[#0c0e15] border border-[#09C8FF]/30 p-8 sm:p-12 shadow-2xl overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#09C8FF]/[0.06] blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09C8FF]/10 border border-[#09C8FF]/30 text-[#09C8FF] font-mono text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Certificação Internacional Reconhecida</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                ISTQB® Certified Tester Foundation Level (CTFL)
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {cert.description[currentLang]}
              </p>

              {/* Covered Skills */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                  {currentLang === 'pt' ? 'Competências de Qualidade Comprovadas:' : 'Validated QA Competencies:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cert.skillsCovered.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-[#09C8FF] shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link out */}
              <div className="pt-3">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold font-mono text-[#09C8FF] hover:text-[#4cd7ff] transition-colors"
                >
                  <span>{currentLang === 'pt' ? 'Verificar Padrão ISTQB' : 'Verify ISTQB Standard'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Col: Why this matters (Engineering Value Proposition) */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              {qaPrinciples.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.05] hover:border-[#09C8FF]/30 transition-all space-y-1"
                  >
                    <div className="flex items-center gap-2.5 text-zinc-100 text-xs font-bold font-mono">
                      <Icon className="w-4 h-4 text-[#09C8FF]" />
                      <span>{item.title[currentLang]}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed pl-6.5">
                      {item.desc[currentLang]}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
