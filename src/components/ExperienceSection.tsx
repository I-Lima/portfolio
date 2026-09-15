import React, { useState } from 'react';
import { Language, Experience } from '../types';
import { EXPERIENCES } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink, 
  Building2, 
  Search,
  Filter,
  Layers,
  ChevronRight
} from 'lucide-react';

interface ExperienceSectionProps {
  currentLang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentLang }) => {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCES[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'fullstack' | 'intern' | 'academic'>('all');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    // Type matching
    if (typeFilter === 'fullstack' && !exp.role.pt.includes('Full Stack')) return false;
    if (typeFilter === 'intern' && !exp.role.pt.includes('Estagiária')) return false;
    if (typeFilter === 'academic' && !exp.company.includes('PET')) return false;

    // Search query matching
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      exp.company.toLowerCase().includes(q) ||
      exp.role[currentLang].toLowerCase().includes(q) ||
      exp.description[currentLang].toLowerCase().includes(q) ||
      exp.technologies.some(t => t.toLowerCase().includes(q))
    );
  });

  const selectedExp = EXPERIENCES.find((e) => e.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section id="experiencia" className="py-20 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-3 max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#09C8FF]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{currentLang === 'pt' ? 'Trajetória Profissional' : 'Professional Timeline'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {currentLang === 'pt' ? 'Experiência' : 'Experience'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {currentLang === 'pt'
              ? 'Carreira focada em engenharia de software de alta performance, arquiteturas escaláveis em Micro-Frontends e aplicações móveis em produção.'
              : 'Engineering trajectory focused on high-performance web systems, Micro-Frontends architectures, and production-grade mobile applications.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-[#0c0e15] border border-white/[0.06] mb-8">
          
          <div className="flex flex-wrap gap-1 w-full sm:w-auto">
            <button
              onClick={() => setTypeFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                typeFilter === 'all'
                  ? 'bg-zinc-800 text-white font-bold border border-white/10'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {currentLang === 'pt' ? 'Todas' : 'All'} ({EXPERIENCES.length})
            </button>
            <button
              onClick={() => setTypeFilter('fullstack')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                typeFilter === 'fullstack'
                  ? 'bg-zinc-800 text-white font-bold border border-white/10'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Full Stack
            </button>
            <button
              onClick={() => setTypeFilter('intern')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                typeFilter === 'intern'
                  ? 'bg-zinc-800 text-white font-bold border border-white/10'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {currentLang === 'pt' ? 'Estágio' : 'Internship'}
            </button>
            <button
              onClick={() => setTypeFilter('academic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                typeFilter === 'academic'
                  ? 'bg-zinc-800 text-white font-bold border border-white/10'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {currentLang === 'pt' ? 'Acadêmico' : 'Academic'}
            </button>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'pt' ? 'Busque por empresa, cargo ou descrição...' : 'Search by company, role, or description...'}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#09C8FF] transition-colors"
            />
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-4 space-y-2">
            {filteredExperiences.map((exp) => {
              const isSelected = exp.id === selectedExp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-zinc-900/90 border-[#09C8FF]/50 shadow-lg shadow-[#09C8FF]/5 text-white'
                      : 'bg-[#0c0e14] border-white/[0.06] text-zinc-400 hover:bg-zinc-900/40 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-white">
                      {exp.company}
                    </span>
                    {exp.period.pt.includes('Presente') && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#09C8FF]/10 text-[#09C8FF] border border-[#09C8FF]/20 font-bold">
                        {currentLang === 'pt' ? 'Atualmente' : 'Current'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-zinc-300 font-medium">
                    {exp.role[currentLang]}
                  </p>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
                    <span>{exp.period[currentLang]}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-[#09C8FF]' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Experience Detail Panel */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#0c0e14] border border-white/[0.08] shadow-xl space-y-6">
            
            {/* Header info */}
            <div className="border-b border-white/[0.06] pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedExp.role[currentLang]}
                  </h3>
                  <div className="flex items-center gap-2 text-[#09C8FF] font-medium text-sm mt-1">
                    <Building2 className="w-4 h-4" />
                    <span>{selectedExp.company}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-white/[0.06] self-start sm:self-auto">
                  {selectedExp.period[currentLang]}
                </div>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-4">
                {selectedExp.description[currentLang]}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                {currentLang === 'pt' ? 'Principais Entregas e Responsabilidades' : 'Key Responsibilities & Impact'}
              </h4>
              <ul className="space-y-2.5">
                {selectedExp.highlights[currentLang].map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#09C8FF] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                {currentLang === 'pt' ? 'Tecnologias e Ferramentas' : 'Technologies & Tools'}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedExp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-200 border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* External Links matching original buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
              {selectedExp.company.includes('FFIT') && (
                <a
                  href="https://ffit.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors"
                >
                  <span>{currentLang === 'pt' ? 'Site da Empresa (FFIT)' : 'Company Website (FFIT)'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {selectedExp.id === 'ffit-fullstack' && (
                <a
                  href="https://interall.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#09C8FF]/10 border border-[#09C8FF]/30 hover:bg-[#09C8FF]/20 text-xs font-semibold text-[#09C8FF] transition-colors"
                >
                  <span>{currentLang === 'pt' ? 'Projeto InterAll em Produção' : 'InterAll Project in Production'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
