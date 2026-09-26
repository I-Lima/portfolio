import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ConsultancySection } from './components/ConsultancySection';
import { MicroFrontendVisualizer } from './components/MicroFrontendVisualizer';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationSection } from './components/CertificationSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CurriculumModal } from './components/CurriculumModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Check saved language preference
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'en' || saved === 'pt') {
      setCurrentLang(saved);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleLang = () => {
    const next = currentLang === 'pt' ? 'en' : 'pt';
    setCurrentLang(next);
    localStorage.setItem('portfolio_lang', next);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 selection:bg-[#09C8FF]/25 selection:text-[#09C8FF] font-sans relative">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#09C8FF] via-sky-400 to-[#09C8FF] origin-left z-[100] shadow-[0_0_8px_rgba(9,200,255,0.6)]"
        style={{ scaleX }}
      />

      <Navbar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenCV={() => setCvModalOpen(true)}
      />

      <main>
        <Hero
          currentLang={currentLang}
          onOpenCV={() => setCvModalOpen(true)}
        />

        <MicroFrontendVisualizer
          currentLang={currentLang}
        />

        <CertificationSection
          currentLang={currentLang}
        />

        <ConsultancySection
          currentLang={currentLang}
        />

        <SkillsSection
          currentLang={currentLang}
        />

        <ExperienceSection
          currentLang={currentLang}
        />

        <ProjectsSection
          currentLang={currentLang}
        />        

        <ContactSection
          currentLang={currentLang}
        />
      </main>

      <Footer
        currentLang={currentLang}
      />

      <CurriculumModal
        isOpen={cvModalOpen}
        currentLang={currentLang}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-zinc-900/90 hover:bg-[#09C8FF] text-zinc-300 hover:text-[#041a24] border border-white/10 hover:border-[#09C8FF] shadow-xl backdrop-blur-md transition-colors cursor-pointer"
          title={currentLang === 'pt' ? 'Voltar ao topo' : 'Back to top'}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
}
