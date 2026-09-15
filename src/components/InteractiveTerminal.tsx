import React, { useState } from 'react';
import { Language } from '../types';
import { Terminal, Check, Copy, Play, Sparkles } from 'lucide-react';

interface InteractiveTerminalProps {
  currentLang: Language;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ currentLang }) => {
  const [activeCommand, setActiveCommand] = useState<'stack' | 'about' | 'qa' | 'contact'>('about');
  const [copied, setCopied] = useState(false);

  const commandData = {
    about: {
      cmd: 'cat engineer.json',
      output: JSON.stringify({
        name: "Ingrid Bezerra de Lima",
        alias: "I-Lima",
        role: "Full Stack, Front-end Stack & Mobile Engineer",
        focus: ["React", "TypeScript", "React Native", "Node.js", "Micro-Frontends"],
        location: "Fortaleza, CE, Brasil",
        status: "Open to opportunities",
        certification: "ISTQB® CTFL",
        education: "B.S. Computer Science"
      }, null, 2)
    },
    stack: {
      cmd: 'npm list --depth=0',
      output: `il-studio@2.4.0 /workspace/ingrid-lima
├── react@19.0.0 (Production & Micro-Frontends)
├── react-native (Mobile iOS & Android Store Apps)
├── typescript@5.8.0 (Strict Typing & Enterprise Quality)
├── nodejs & express (REST APIs & Microservices)
├── redux-toolkit (Complex State Architecture)
├── spring-boot (Java 11/17 Backend Services)
├── kotlin (Android Native Architecture)
└── tailwindcss (Design Systems & Fluid Motion)`
    },
    qa: {
      cmd: 'npm run test:ctfl -- --coverage',
      output: `PASS tests/architecture.spec.ts
PASS tests/microfrontends.spec.ts
PASS tests/mobile-store-ready.spec.ts
PASS tests/istqb-quality-gates.spec.ts

Test Suites: 4 passed, 4 total
Tests:       48 passed, 48 total
Snapshots:   0 total
Time:        1.42s
Coverage:    98.4% Statements | 96.1% Branches
[ISTQB® CTFL] Certified software testing principles strictly applied.`
    },
    contact: {
      cmd: 'curl -s api/contact',
      output: JSON.stringify({
        email: "il.sttudio@gmail.com",
        github: "https://github.com/I-Lima",
        medium: "https://medium.com/@i-lima",
        linkedin: "https://linkedin.com/in/ingridlima-js",
        studio: "https://www.il-studio.dev/"
      }, null, 2)
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commandData[activeCommand].output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0c0d13] border border-white/[0.08] shadow-2xl overflow-hidden font-mono text-xs">
      <div className="flex items-center justify-between px-4 py-3 bg-[#11131b] border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-[#09C8FF]/80" />
          <span className="text-[11px] text-zinc-400 ml-2 font-mono flex items-center gap-1">
            <Terminal className="w-3 h-3 text-[#09C8FF]" />
            ingrid@il-studio: ~/workspace
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] px-2 py-1 rounded transition-colors cursor-pointer"
            title="Copiar saída"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[#09C8FF]" />
                <span className="text-[#09C8FF]">Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 px-4 py-2.5 bg-[#0e1017] border-b border-white/[0.04]">
        <span className="text-[11px] text-zinc-400 mr-1 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#09C8FF]" />
          {currentLang === 'pt' ? 'Comandos rápidos:' : 'Quick commands:'}
        </span>
        {(['about', 'stack', 'qa', 'contact'] as const).map((key) => (
          <button
            key={key}
            onClick={() => setActiveCommand(key)}
            className={`px-2.5 py-1 rounded text-[11px] transition-all cursor-pointer ${
              activeCommand === key
                ? 'bg-[#09C8FF]/15 text-[#09C8FF] border border-[#09C8FF]/40 font-semibold'
                : 'text-zinc-400 hover:text-zinc-200 bg-white/[0.03] hover:bg-white/[0.07] border border-transparent'
            }`}
          >
            ${' '}{commandData[key].cmd.split(' ')[0]} {commandData[key].cmd.split(' ')[1]}
          </button>
        ))}
      </div>

      <div className="p-4 sm:p-5 text-zinc-300 bg-[#0a0b10] min-h-[220px] overflow-x-auto selection:bg-[#09C8FF]/30 selection:text-white">
        <div className="flex items-center gap-2 text-[#09C8FF] mb-2">
          <span className="text-zinc-400">$</span>
          <span className="font-semibold text-zinc-100">{commandData[activeCommand].cmd}</span>
          <span className="w-2 h-4 bg-[#09C8FF] animate-pulse ml-0.5 inline-block" />
        </div>
        <pre className="text-zinc-300 leading-relaxed text-[12px] whitespace-pre font-mono">
          {commandData[activeCommand].output}
        </pre>
      </div>
    </div>
  );
};
