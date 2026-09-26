import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { SKILL_CATEGORIES, LANGUAGES } from '../data/portfolioData';
import { 
  Code2, 
  Languages as LanguagesIcon, 
  Layout, 
  Smartphone, 
  Server, 
  ShieldCheck, 
  Figma, 
} from 'lucide-react';

interface SkillsSectionProps {
  currentLang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'stack' | 'languages'>('stack');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4 text-sky-400" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4 text-[#09C8FF]" />;
      case 'Server':
        return <Server className="w-4 h-4 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#09C8FF]" />;
      case 'Figma':
        return <Figma className="w-4 h-4 text-pink-400" />;
      default:
        return <Code2 className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#09C8FF]">
              <Code2 className="w-3.5 h-3.5" />
              <span>{currentLang === 'pt' ? 'Habilidades e Formação' : 'Skills & Education'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {currentLang === 'pt' ? 'Stack Tecnológica e Formação' : 'Tech Stack & Background'}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {currentLang === 'pt'
                ? 'Conjunto abrangente de tecnologias modernas e sólidas bases em Ciência da Computação.'
                : 'Comprehensive modern toolset backed by solid foundations in Computer Science.'}
            </p>
          </div>

          <div className="flex p-1 rounded-xl bg-zinc-900 border border-white/[0.08] self-start md:self-auto">
            <button
              onClick={() => setActiveTab('stack')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'stack'
                  ? 'bg-[#09C8FF] text-[#041a24] font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {currentLang === 'pt' ? 'Tecnologias' : 'Technologies'}
            </button>
            <button
              onClick={() => setActiveTab('languages')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'languages'
                  ? 'bg-[#09C8FF] text-[#041a24] font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {currentLang === 'pt' ? 'Idiomas' : 'Languages'}
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'stack' ? (
            <motion.div 
              key="stack"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {SKILL_CATEGORIES.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4, borderColor: 'rgba(9, 200, 255, 0.4)' }}
                  className="p-6 rounded-2xl bg-[#0c0e14] border border-white/[0.07] transition-all space-y-4 shadow-md group"
                >
                  <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.06]">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-[#09C8FF] transition-colors">
                      {cat.category[currentLang]}
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    {cat.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/50 border border-white/[0.03] text-xs font-mono hover:bg-zinc-800/60 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-zinc-200">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#09C8FF]" />
                          )}
                          <span className={skill.highlight ? 'font-semibold text-white' : ''}>
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-zinc-400 text-[11px]">
                          {skill.years || skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="languages"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {LANGUAGES.map((lang, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02, borderColor: 'rgba(9, 200, 255, 0.4)' }}
                  className="p-5 rounded-2xl bg-[#0c0e14] border border-white/[0.07] text-center space-y-3 transition-all cursor-default"
                >
                  <div className="flex justify-center">
                    {lang.flagImage ? (
                      <img 
                        src={lang.flagImage} 
                        alt={lang.name[currentLang]} 
                        className="w-10 h-10 object-contain rounded-lg shadow-sm"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="text-3xl">{lang.flag}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {lang.name[currentLang]}
                    </h3>
                    <p className="text-xs font-mono text-[#09C8FF] mt-1">
                      {lang.level[currentLang]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
