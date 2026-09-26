import React from 'react';
import { motion } from 'motion/react';
import { GithubRepo, getRepoCategory } from '../services/githubService';
import { Language } from '../types';
import { 
  FileText, 
  Smartphone, 
  Server, 
  Globe, 
  Timer,
  ChevronRight,
  Code2,
  Sparkles,
  Star,
  GitFork,
  Pin
} from 'lucide-react';

interface ProjectCardProps {
  repo: GithubRepo;
  currentLang: Language;
  onOpenReadme: (repo: GithubRepo) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  repo,
  currentLang,
  onOpenReadme
}) => {
  const category = getRepoCategory(repo);

  const getIcon = () => {
    if (repo.name.toLowerCase().includes('pomo')) {
      return <Timer className="w-5 h-5 text-[#09C8FF]" />;
    }
    if (category === 'mobile') {
      return <Smartphone className="w-5 h-5 text-sky-400" />;
    }
    if (category === 'backend') {
      return <Server className="w-5 h-5 text-amber-400" />;
    }
    return <Code2 className="w-5 h-5 text-[#09C8FF]" />;
  };

  const getCategoryLabel = () => {
    switch (category) {
      case 'mobile':
        return 'MOBILE';
      case 'backend':
        return 'BACKEND & API';
      default:
        return 'WEB APP';
    }
  };

  return (
    <motion.div 
      layout
      whileHover={{ y: -6, borderColor: 'rgba(9, 200, 255, 0.5)' }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpenReadme(repo)}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#0c0e14] border border-white/[0.07] transition-all duration-300 p-6 sm:p-7 shadow-lg hover:shadow-[#09C8FF]/10 cursor-pointer"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#09C8FF]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
            {getIcon()}
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-[#09C8FF]/10 text-[#09C8FF] border border-[#09C8FF]/20">
              <Pin className="w-2.5 h-2.5" />
              pinned
            </span>
            <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-800/80 text-zinc-300 border border-white/[0.06]">
              {getCategoryLabel()}
            </span>
          </div>
        </div>

        <div className="space-y-1 mb-3">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#09C8FF] transition-colors font-mono">
              {repo.name}
            </h3>
            {repo.language && (
              <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.05]">
                {repo.language}
              </span>
            )}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-5">
          {repo.description || (
            currentLang === 'pt' 
              ? 'Repositório de código com documentação técnica detalhada no README.md.' 
              : 'Codebase repository with complete technical documentation in README.md.'
          )}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {repo.topics
            .filter((t) => t.toLowerCase() !== 'pinned')
            .slice(0, 4)
            .map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-300 border border-white/[0.05]"
              >
                #{tag}
              </span>
            ))}
          {repo.topics.filter((t) => t.toLowerCase() !== 'pinned').length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400">
              +{repo.topics.filter((t) => t.toLowerCase() !== 'pinned').length - 4}
            </span>
          )}
        </div>

        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenReadme(repo);
            }}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#09C8FF] hover:text-[#4cd7ff] transition-colors cursor-pointer group/btn"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{currentLang === 'pt' ? 'Ver README.md' : 'View README.md'}</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform text-zinc-500 group-hover/btn:text-[#09C8FF]" />
          </button>

          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1 text-amber-400/90" title="Stars">
              <Star className="w-3 h-3 text-amber-400" />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1 text-zinc-500" title="Forks">
              <GitFork className="w-3 h-3" />
              {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
