import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    // Check saved language preference
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'en' || saved === 'pt') {
      setCurrentLang(saved);
    }
  }, []);

  const handleToggleLang = () => {
    const next = currentLang === 'pt' ? 'en' : 'pt';
    setCurrentLang(next);
    localStorage.setItem('portfolio_lang', next);
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 selection:bg-[#09C8FF]/25 selection:text-[#09C8FF] font-sans">
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
    </div>
  );
}
