import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code2, ArrowUp, Heart, Clock } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const [fortalezaTime, setFortalezaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Fortaleza is America/Fortaleza (UTC-3)
      const formatted = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Fortaleza',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      setFortalezaTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#07080b] py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.05]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#09C8FF]">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white font-mono text-sm">
                il-studio<span className="text-[#09C8FF]">.dev</span>
              </div>
              <p className="text-[11px] text-zinc-400">
               {PERSONAL_INFO.role[currentLang]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/[0.05]">
              <Clock className="w-3.5 h-3.5 text-[#09C8FF]" />
              <span>Fortaleza, CE: <strong className="text-zinc-200">{fortalezaTime || '14:30'}</strong> (UTC-3)</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.06] transition-colors cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-[11px] text-zinc-400">
          <p>
            © {new Date().getFullYear()}. {currentLang === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
          <p className="font-mono">
            React • Tailwind CSS • Motion
          </p>
        </div>

      </div>
    </footer>
  );
};
