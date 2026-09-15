import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Code2, 
  Menu, 
  X, 
  FileText, 
  Send, 
  Globe2, 
  Sparkles,
  Github,
  Linkedin
} from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang, onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: currentLang === 'pt' ? 'Projetos' : 'Projects', href: '#projetos' },
    { label: currentLang === 'pt' ? 'Consultoria' : 'Consulting', href: '#consultoria' },
    { label: currentLang === 'pt' ? 'Micro-Frontends' : 'Architecture', href: '#arquitetura' },
    { label: currentLang === 'pt' ? 'Experiência' : 'Experience', href: '#experiencia' },
    { label: currentLang === 'pt' ? 'Skills' : 'Skills', href: '#skills' },
    { label: 'CTFL QA', href: '#certificacao' },
    { label: currentLang === 'pt' ? 'Contato' : 'Contact', href: '#contato' },
  ];

  return (
    <header 
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a 
            href="#"
            id="brand-logo"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#09C8FF] rounded-lg px-1 py-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#09C8FF] group-hover:border-[#09C8FF]/40 group-hover:bg-[#09C8FF]/10 transition-colors">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm tracking-tight text-white font-mono">
                  il-studio<span className="text-[#09C8FF]">.dev</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#09C8FF] animate-pulse" />
              </div>
              <span className="text-[10px] text-zinc-400 tracking-wider uppercase font-medium">
                Ingrid Lima
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] transition-all px-3 py-1.5 rounded-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-2.5">
            <button
              id="lang-toggle-btn"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
              title={currentLang === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
            >
              <Globe2 className="w-3.5 h-3.5 text-[#09C8FF]" />
              <span className="font-semibold uppercase">{currentLang === 'pt' ? 'EN' : 'PT'}</span>
            </button>

            <button
              id="view-cv-btn"
              onClick={onOpenCV}
              className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>{currentLang === 'pt' ? 'Currículo' : 'Resume'}</span>
            </button>

            <a
              id="talk-cta-btn"
              href="#contato"
              className="flex items-center gap-1.5 text-xs font-bold text-[#041a24] bg-[#09C8FF] hover:bg-[#4cd7ff] px-3.5 py-1.5 rounded-lg transition-all shadow-sm shadow-[#09C8FF]/20 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{currentLang === 'pt' ? 'Fale Comigo' : 'Get in touch'}</span>
            </a>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleLang}
              className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-white/10 px-2 py-1.5 rounded-lg"
            >
              {currentLang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e14] border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-[#09C8FF] hover:bg-white/[0.04] px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium text-zinc-200 bg-zinc-900 border border-white/10 rounded-lg"
            >
              <FileText className="w-4 h-4 text-[#09C8FF]" />
              <span>{currentLang === 'pt' ? 'Ver Currículo' : 'View Resume'}</span>
            </button>

            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold text-[#041a24] bg-[#09C8FF] hover:bg-[#4cd7ff] rounded-lg"
            >
              <Send className="w-4 h-4" />
              <span>{currentLang === 'pt' ? 'Contato' : 'Contact'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
