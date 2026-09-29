import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { 
  ArrowUpRight,
  FolderGit2
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const GitHubSection: React.FC = () => {
  const { githubRepositories, personal } = PORTFOLIO_DATA;

  return (
    <section id="github" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>OPEN SOURCE & CODEBASES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering on GitHub
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Explore my projects, automation experiments and engineering work on GitHub.
            </p>
          </div>

          {/* GitHub Profile CTA */}
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-md shrink-0"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400" />
            <span>github.com/mdsofi1</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubRepositories.map((repo, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-card border border-border-subtle hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-slate-400 group-hover:text-cyan-400 transition-colors">
                    <FolderGit2 className="w-4 h-4" />
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {repo.category}
                    </span>
                  </div>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                    title={`Open ${repo.name} on GitHub`}
                    aria-label={`Open repository ${repo.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-mono text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2"
                >
                  {repo.name}
                </a>

                <p className="text-xs text-slate-300 leading-relaxed min-h-[40px]">
                  {repo.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  {repo.language}
                </span>

                <span className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors">
                  Public Repository
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
