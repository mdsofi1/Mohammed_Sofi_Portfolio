import React from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolio';
import { 
  Terminal, 
  CheckCircle2, 
  Workflow, 
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-24 bg-surface/30 border-y border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>FEATURED ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key Infrastructure & Automation Projects
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Real implementations demonstrating CI/CD automation, cloud provisioning with Terraform, configuration management with Ansible, and intelligent automated workflows.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-16">
          {projects.map((proj: Project, index: number) => {
            return (
              <div
                key={proj.id}
                className="rounded-2xl bg-surface-card border border-border-subtle hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-xl"
              >
                {/* Top Header Strip */}
                <div className="p-6 sm:p-8 border-b border-border-subtle bg-surface-elevated/40">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs text-cyan-400 font-bold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/60">
                          PROJECT 0{index + 1}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {proj.name}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-slate-400 mt-1">
                        {proj.subtitle}
                      </p>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-400 transition-all"
                      >
                        <GithubIcon className="w-4 h-4 text-cyan-400" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      {proj.secondaryGithubUrl && (
                        <a
                          href={proj.secondaryGithubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                        >
                          <span>Build Artifacts</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Main Card Body */}
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Description & Contributions */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        System Architecture & Overview
                      </h4>
                      <p className="text-slate-300 text-base leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    {/* Key Contributions */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                        Key Engineering Contributions
                      </h4>
                      <div className="space-y-2.5">
                        {proj.contributions.map((point: string, pIdx: number) => (
                          <div key={pIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Pills */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {proj.technologies.map((tech: string, tIdx: number) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-900 border border-slate-800 text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Workflow Diagram & Terminal Preview */}
                  <div className="lg:col-span-5 space-y-4">
                    
                    {/* Visual Workflow Steps */}
                    <div className="p-4 rounded-xl bg-surface-elevated/70 border border-border-subtle space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                          <Workflow className="w-3.5 h-3.5" />
                          Execution Sequence
                        </span>
                        <span>{proj.workflowSteps.length} Stages</span>
                      </div>

                      <div className="space-y-1.5">
                        {proj.workflowSteps.map((step: string, sIdx: number) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs font-mono text-slate-300"
                          >
                            <span className="w-5 h-5 rounded bg-slate-900 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 border border-slate-800">
                              0{sIdx + 1}
                            </span>
                            <span className="truncate">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Terminal Simulation Snippet */}
                    {proj.terminalSnippet && (
                      <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden font-mono text-xs shadow-inner">
                        <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 border-b border-slate-800 text-[11px] text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <Terminal className="w-3 h-3 text-cyan-400" />
                            deployment-log.sh
                          </span>
                          <span className="text-[10px] text-emerald-400">SUCCESS</span>
                        </div>
                        <div className="p-3 text-[11px] space-y-1 text-slate-300">
                          <div className="text-cyan-400">$ {proj.terminalSnippet.command}</div>
                          {proj.terminalSnippet.outputLines.map((line: string, lIdx: number) => (
                            <div key={lIdx} className="text-slate-400">
                              {line}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
