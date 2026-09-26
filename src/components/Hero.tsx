import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Language } from '../types';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import { InteractiveTerminal } from './InteractiveTerminal';
import { 
  ArrowUpRight, 
  Sparkles, 
  Compass,
  MapPin, 
  ShieldCheck, 
  FileText,
  Github,
  Linkedin,
  MessageCircle,
  BookOpen,
  Mail
} from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onOpenCV: () => void;
}

const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const match = value.match(/^(\d+)(.*)$/);
  const targetNum = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : '';

  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || targetNum === null) return;
    const duration = 1400; // ms
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * targetNum));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(targetNum);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, targetNum]);

  if (targetNum === null) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenCV }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const currentRoles = PERSONAL_INFO.rolesList[currentLang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % currentRoles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentRoles.length]);

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#09C8FF]/[0.05] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-sky-500/[0.03] blur-[110px] rounded-full pointer-events-none" />

      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#09C8FF]/10 border border-[#09C8FF]/25 text-xs text-[#09C8FF] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#09C8FF] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#09C8FF] -ml-4" />
            <span>{PERSONAL_INFO.status[currentLang]}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-white/[0.06] text-xs text-zinc-400 font-mono">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-white/[0.06] text-xs text-zinc-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#09C8FF]" />
            <span>ISTQB® CTFL Certified</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#09C8FF]/40 p-0.5 bg-zinc-900 shadow-xl shadow-[#09C8FF]/10 group-hover:border-[#09C8FF] transition-colors">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#09C8FF] border-2 border-[#08090d] flex items-center justify-center text-[10px] font-bold text-[#041a24]">
                  ✓
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-semibold text-zinc-300">
                    {currentLang === 'pt' ? 'Olá' : 'Hello'}
                  </span>
                  <img
                    src="/images/hand.svg"
                    alt="Wave"
                    className="w-5 h-5 animate-bounce inline-block"
                  />
                  <span className="text-xs font-mono text-zinc-400">
                    {currentLang === 'pt' ? '— meu nome é' : '— my name is'}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {PERSONAL_INFO.shortName}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 text-base sm:text-xl font-mono">
              <span className="text-zinc-400">
                {currentLang === 'pt' ? 'Eu sou' : 'I am a'}
              </span>
              <span className="font-bold text-[#09C8FF] bg-[#09C8FF]/10 px-2.5 py-0.5 rounded-lg border border-[#09C8FF]/25 transition-all duration-300">
                {currentRoles[currentRoleIndex % currentRoles.length]}
              </span>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio[currentLang]}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                { name: 'React', color: 'text-sky-400 border-sky-400/20 bg-sky-400/10' },
                { name: 'TypeScript', color: 'text-blue-400 border-blue-400/20 bg-blue-400/10' },
                { name: 'React Native', color: 'text-[#09C8FF] border-[#09C8FF]/20 bg-[#09C8FF]/10' },
                { name: 'Node.js', color: 'text-[#09C8FF] border-[#09C8FF]/20 bg-[#09C8FF]/10' },
                { name: 'Micro-Frontends', color: 'text-purple-400 border-purple-400/20 bg-purple-400/10' },
                { name: 'Redux', color: 'text-violet-400 border-violet-400/20 bg-violet-400/10' },
                { name: 'Java / Spring', color: 'text-amber-400 border-amber-400/20 bg-amber-400/10' },
                { name: 'Kotlin', color: 'text-orange-400 border-orange-400/20 bg-orange-400/10' },
                { name: 'Figma', color: 'text-pink-400 border-pink-400/20 bg-pink-400/10' },
              ].map((tech) => (
                <motion.span
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  className={`text-xs font-mono font-medium px-2.5 py-1 rounded-md border ${tech.color} cursor-default`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#09C8FF] hover:bg-[#4cd7ff] text-[#041a24] font-bold text-sm transition-all shadow-md shadow-[#09C8FF]/20 hover:shadow-[#09C8FF]/30 cursor-pointer active:scale-95"
              >
                <span>{currentLang === 'pt' ? 'Ver Projetos e GitHub' : 'Explore Projects & GitHub'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#consultoria"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 hover:border-[#09C8FF]/40 text-zinc-200 hover:text-white font-medium text-sm transition-all cursor-pointer active:scale-95"
              >
                <Compass className="w-4 h-4 text-[#09C8FF]" />
                <span>{currentLang === 'pt' ? 'Consultorias' : 'Consulting'}</span>
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white font-medium text-sm transition-all cursor-pointer active:scale-95"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>{currentLang === 'pt' ? 'Currículo Completo' : 'Complete Resume'}</span>
              </button>
            </div>

            <div className="flex items-center gap-4 pt-2 text-zinc-400 text-xs">
              <span className="font-mono text-zinc-400 uppercase tracking-wider">
                {currentLang === 'pt' ? 'Redes:' : 'Social:'}
              </span>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[#09C8FF] flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[#09C8FF] flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={PERSONAL_INFO.medium} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[#09C8FF] flex items-center gap-1.5 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Medium</span>
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-[#09C8FF] flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>E-mail</span>
              </a>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <InteractiveTerminal currentLang={currentLang} />
          </motion.div>

        </div>

        {/* Scroll-triggered Animated Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(9, 200, 255, 0.4)' }}
              className="p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-white/[0.06] transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#09C8FF] group-hover:text-[#4cd7ff] transition-colors">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">
                {stat.label[currentLang]}
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5">
                {stat.detail[currentLang]}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

