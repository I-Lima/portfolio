import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { GithubRepo, fetchRepoReadme } from '../services/githubService';
import { Language } from '../types';
import { 
  X, 
  Copy, 
  Check, 
  FileText, 
  Star, 
  GitFork, 
  Pin, 
  Code2, 
  Sparkles,
  Calendar,
  Layers,
  BookOpen
} from 'lucide-react';

interface ProjectReadmeModalProps {
  repo: GithubRepo | null;
  currentLang: Language;
  onClose: () => void;
}

export const ProjectReadmeModal: React.FC<ProjectReadmeModalProps> = ({
  repo,
  currentLang,
  onClose
}) => {
  const [selectedLang, setSelectedLang] = useState<'pt' | 'en'>(currentLang);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    setSelectedLang(currentLang);
  }, [currentLang]);

  useEffect(() => {
    if (!repo) return;
    let isMounted = true;
    setLoading(true);

    fetchRepoReadme(repo.name, selectedLang)
      .then((markdown) => {
        if (isMounted) {
          setContent(markdown);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to load README:', err);
        if (isMounted) {
          setContent(
            selectedLang === 'pt'
              ? `# ${repo.name}\n\nNão foi possível carregar o arquivo README.md neste momento.`
              : `# ${repo.name}\n\nCould not load README.md at this moment.`
          );
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [repo, selectedLang]);

  if (!repo) return null;

  const handleCopy = () => {
    if (!content) return;
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resolveImageUrl = (src?: string) => {
    if (!src) return '';
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      return src;
    }
    const cleanPath = src.replace(/^\.\//, '').replace(/^\//, '');
    return `https://raw.githubusercontent.com/I-Lima/${repo.name}/master/${cleanPath}`;
  };

  const formattedDate = new Date(repo.updated_at).toLocaleDateString(
    selectedLang === 'pt' ? 'pt-BR' : 'en-US',
    { month: 'short', day: 'numeric', year: 'numeric' }
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0b0d13] border border-white/10 shadow-2xl overflow-hidden text-zinc-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 sm:px-7 py-4 bg-[#0f111a] border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#09C8FF]/10 border border-[#09C8FF]/30 flex items-center justify-center text-[#09C8FF] shrink-0">
              <FileText className="w-5 h-5" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-400">I-Lima /</span>
                <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-1.5">
                  {repo.name}
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-[#09C8FF]/15 text-[#09C8FF] border border-[#09C8FF]/30">
                    <Pin className="w-2.5 h-2.5" />
                    pinned
                  </span>
                </h2>
              </div>
              <p className="text-[11px] font-mono text-zinc-400 flex items-center gap-3 mt-0.5">
                <span className="text-[#09C8FF] font-medium">README.md</span>
                {repo.language && <span>• {repo.language}</span>}
                <span className="hidden sm:inline">• Atualizado em {formattedDate}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <div className="flex items-center p-0.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono">
              <button
                type="button"
                onClick={() => setSelectedLang('pt')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  selectedLang === 'pt'
                    ? 'bg-[#09C8FF] text-[#041a24] font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="README em Português"
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setSelectedLang('en')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  selectedLang === 'en'
                    ? 'bg-[#09C8FF] text-[#041a24] font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="README in English"
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              disabled={loading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 border border-white/10 hover:border-[#09C8FF]/40 transition-all cursor-pointer disabled:opacity-50"
              title={selectedLang === 'pt' ? 'Copiar conteúdo Markdown' : 'Copy Markdown'}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">{selectedLang === 'pt' ? 'Copiado!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{selectedLang === 'pt' ? 'Copiar' : 'Copy'}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="px-5 sm:px-7 py-2.5 bg-[#090b10] border-b border-white/[0.05] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5" />
              {repo.stargazers_count} {selectedLang === 'pt' ? 'estrelas' : 'stars'}
            </span>
            <span className="flex items-center gap-1 text-zinc-400">
              <GitFork className="w-3.5 h-3.5 text-zinc-500" />
              {repo.forks_count} forks
            </span>
            <span className="flex items-center gap-1 text-zinc-400">
              <Calendar className="w-3.5 h-3.5 text-zinc-500" />
              {formattedDate}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {repo.topics.slice(0, 5).map((t) => (
              <span 
                key={t}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-white/[0.04]"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-4">
          {loading ? (
            <div className="space-y-4 py-8 animate-pulse">
              <div className="h-7 w-2/3 bg-zinc-800/60 rounded-lg" />
              <div className="h-4 w-full bg-zinc-800/40 rounded" />
              <div className="h-4 w-5/6 bg-zinc-800/40 rounded" />
              <div className="h-4 w-4/6 bg-zinc-800/40 rounded" />
              <div className="h-32 w-full bg-zinc-900/60 rounded-xl border border-white/5 mt-6" />
              <div className="h-5 w-1/3 bg-zinc-800/50 rounded-lg mt-6" />
              <div className="h-4 w-full bg-zinc-800/40 rounded" />
            </div>
          ) : (
            <div className="markdown-body prose prose-invert max-w-none">
              <Markdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-xl sm:text-2xl font-bold text-white border-b border-white/10 pb-3 mb-4 mt-6 first:mt-0 font-mono tracking-tight flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-[#09C8FF] shrink-0" />
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-lg sm:text-xl font-bold text-[#09C8FF] border-b border-white/[0.07] pb-2 mb-3 mt-6 font-mono">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-base font-semibold text-zinc-100 mb-2 mt-4 font-mono">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-sm font-semibold text-zinc-200 mb-2 mt-3 font-mono">
                      {children}
                    </h4>
                  ),
                  p: ({ children }) => (
                    <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-1.5 mb-4 text-zinc-300 text-sm pl-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-1.5 mb-4 text-zinc-300 text-sm pl-2">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-sm text-zinc-300 leading-relaxed">
                      {children}
                    </li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#09C8FF] pl-4 py-2 my-4 bg-[#09C8FF]/5 text-zinc-300 italic text-sm rounded-r-xl border-t border-b border-r border-white/[0.04]">
                      {children}
                    </blockquote>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-[#0c0d14] p-4 rounded-xl border border-white/10 font-mono text-xs overflow-x-auto text-zinc-200 mb-5 shadow-inner">
                      {children}
                    </pre>
                  ),
                  code: ({ children, className }) => {
                    const isInline = !className;
                    if (isInline) {
                      return (
                        <code className="bg-zinc-900 text-[#09C8FF] px-1.5 py-0.5 rounded font-mono text-xs border border-white/5">
                          {children}
                        </code>
                      );
                    }
                    return <code>{children}</code>;
                  },
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-5 rounded-xl border border-white/10 shadow-lg">
                      <table className="w-full text-xs text-left border-collapse bg-[#0c0d14]">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-zinc-900/90 text-zinc-200 font-semibold font-mono border-b border-white/10">
                      {children}
                    </thead>
                  ),
                  th: ({ children }) => (
                    <th className="p-3 border border-white/5 font-semibold text-zinc-200">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="p-3 border border-white/5 text-zinc-300 leading-relaxed">
                      {children}
                    </td>
                  ),
                  img: ({ src, alt }) => {
                    const resolved = resolveImageUrl(src);
                    return (
                      <div className="my-5 flex flex-col items-center">
                        <img 
                          src={resolved} 
                          alt={alt || ''} 
                          referrerPolicy="no-referrer"
                          className="max-w-full rounded-xl border border-white/10 shadow-xl max-h-[450px] object-contain" 
                        />
                        {alt && (
                          <span className="text-[11px] font-mono text-zinc-400 mt-1.5 italic">
                            {alt}
                          </span>
                        )}
                      </div>
                    );
                  },
                  a: ({ href, children }) => {
                    if (href?.includes('README-en') || href?.includes('README-pt')) {
                      return (
                        <button
                          type="button"
                          onClick={() => {
                            if (href.includes('README-en')) setSelectedLang('en');
                            else setSelectedLang('pt');
                          }}
                          className="text-[#09C8FF] hover:underline cursor-pointer font-medium inline-flex items-center gap-1 font-mono text-xs"
                        >
                          <BookOpen className="w-3 h-3" />
                          {children}
                        </button>
                      );
                    }
                    return (
                      <a 
                        href={href} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[#09C8FF] hover:text-[#4cd7ff] underline underline-offset-2 inline-flex items-center gap-1"
                      >
                        {children}
                      </a>
                    );
                  }
                }}
              >
                {content}
              </Markdown>
            </div>
          )}
        </div>

        <div className="px-5 sm:px-7 py-3.5 bg-[#0e1017] border-t border-white/[0.08] flex items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-[#09C8FF] animate-pulse" />
            <span className="hidden sm:inline">
              {selectedLang === 'pt' 
                ? 'Documentação carregada dinamicamente via GitHub API' 
                : 'Documentation loaded dynamically via GitHub API'}
            </span>
            <span className="sm:hidden">README.md</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors cursor-pointer"
          >
            {selectedLang === 'pt' ? 'Fechar' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
