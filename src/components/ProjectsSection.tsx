import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCategory, Language } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectReadmeModal } from './ProjectReadmeModal';
import { fetchUserRepositories, GithubRepo, getRepoCategory } from '../services/githubService';
import { 
  Layers, 
  Search, 
  BookOpen, 
  Pin,
  RefreshCw
} from 'lucide-react';

interface ProjectsSectionProps {
  currentLang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRepo, setSelectedRepo] = useState<GithubRepo | null>(null);
  
  // Dynamic GitHub Repos State
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  const loadRepositories = () => {
    setLoading(true);
    fetchUserRepositories().then((data) => {
      setRepos(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadRepositories();
  }, []);

  const categories: { id: ProjectCategory; label: { pt: string; en: string } }[] = [
    { id: 'all', label: { pt: 'Todos', en: 'All' } },
    { id: 'mobile', label: { pt: 'Mobile (React Native / Kotlin)', en: 'Mobile (React Native / Kotlin)' } },
    { id: 'web', label: { pt: 'Web & Frontend', en: 'Web & Frontend' } },
    { id: 'backend', label: { pt: 'Backend & APIs', en: 'Backend & APIs' } }
  ];

  const filteredRepos = repos.filter((repo) => {
    const category = getRepoCategory(repo);
    const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
    
    if (!searchQuery) return matchesCategory;
    
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      repo.name.toLowerCase().includes(query) ||
      (repo.description && repo.description.toLowerCase().includes(query)) ||
      repo.topics.some((t) => t.toLowerCase().includes(query)) ||
      (repo.language && repo.language.toLowerCase().includes(query));
      
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projetos" className="py-20 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#09C8FF]">
              <Layers className="w-3.5 h-3.5" />
              <span>{currentLang === 'pt' ? 'Portfólio' : 'Portfolio'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {currentLang === 'pt' ? 'Projetos' : 'Projects'}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {currentLang === 'pt'
                ? 'Dados dinâmicos sincronizados diretamente com a API do GitHub. Clique em qualquer projeto para abrir a documentação técnica (README.md) no próprio sistema.'
                : 'Dynamic data synchronized directly with the GitHub API. Click on any project to view its technical documentation (README.md) inside the system.'}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-xs font-mono text-zinc-300">
              <span className="inline-flex items-center gap-1 text-[#09C8FF]">
                <Pin className="w-3 h-3" />
                <span>pinned</span>
              </span>
              <span className="text-zinc-600">•</span>
              <span>{repos.length} {currentLang === 'pt' ? 'projetos' : 'projects'}</span>
            </div>

            <button
              type="button"
              onClick={loadRepositories}
              disabled={loading}
              className="p-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/[0.08] text-zinc-400 hover:text-[#09C8FF] transition-colors cursor-pointer active:scale-95"
              title={currentLang === 'pt' ? 'Recarregar dados do GitHub' : 'Refresh GitHub data'}
              aria-label="Recarregar projetos"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#09C8FF]' : ''}`} />
            </button>
          </div>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-[#0c0e15] border border-white/[0.06] mb-8"
        >
          <div className="flex flex-wrap gap-1 w-full sm:w-auto">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-zinc-800 text-[#09C8FF] font-bold border border-[#09C8FF]/30 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat.label[currentLang]}
              </motion.button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'pt' ? 'Buscar por stack, tag ou nome...' : 'Search by stack, tag, or title...'}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#09C8FF] transition-colors"
            />
          </div>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div 
                key={n} 
                className="p-7 rounded-2xl bg-[#0c0e14] border border-white/[0.05] animate-pulse space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/60" />
                  <div className="w-20 h-5 rounded-full bg-zinc-800/40" />
                </div>
                <div className="h-6 w-1/2 bg-zinc-800/50 rounded" />
                <div className="h-4 w-full bg-zinc-800/30 rounded" />
                <div className="h-4 w-4/5 bg-zinc-800/30 rounded" />
                <div className="flex gap-2 pt-2">
                  <div className="w-16 h-5 rounded bg-zinc-800/40" />
                  <div className="w-16 h-5 rounded bg-zinc-800/40" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredRepos.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredRepos.map((repo) => (
                <ProjectCard
                  key={repo.id}
                  repo={repo}
                  currentLang={currentLang}
                  onOpenReadme={(r) => setSelectedRepo(r)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 px-4 rounded-2xl bg-[#0c0e14] border border-white/[0.05]"
          >
            <BookOpen className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-base font-medium text-white mb-1">
              {currentLang === 'pt' ? 'Nenhum projeto encontrado' : 'No projects found'}
            </h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              {currentLang === 'pt'
                ? 'Tente ajustar os filtros ou os termos da busca.'
                : 'Try adjusting your filters or search terms.'}
            </p>
          </motion.div>
        )}

        <ProjectReadmeModal
          repo={selectedRepo}
          currentLang={currentLang}
          onClose={() => setSelectedRepo(null)}
        />

      </div>
    </section>
  );
};
