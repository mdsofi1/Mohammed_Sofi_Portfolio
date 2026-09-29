import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { 
  Code, 
  GitBranch, 
  Cpu, 
  Package, 
  Box, 
  Layers, 
  Cloud, 
  FileCode, 
  Activity,
  ArrowRight,
  ArrowDown,
  Info
} from 'lucide-react';
import { GithubIcon } from './Icons';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code,
  GitBranch,
  Github: GithubIcon,
  Cpu,
  Package,
  Box,
  Layers,
  Cloud,
  FileCode,
  Activity
};

export const DevOpsPipeline: React.FC = () => {
  const { pipelineToolchain } = PORTFOLIO_DATA;

  return (
    <section id="workflow" className="py-20 bg-surface/40 border-y border-border-subtle relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>TOOLCHAIN ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technologies & Workflow
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Visual progression of continuous integration, deployment automation, infrastructure orchestration, and observability tools practiced across projects.
          </p>
        </div>

        {/* Pipeline Container */}
        <div className="rounded-2xl bg-surface-card border border-border-subtle p-6 sm:p-8 shadow-xl">
          
          {/* Disclaimer / Clarification Badge */}
          <div className="mb-8 p-3 rounded-lg bg-surface-elevated border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-200">Engineering Note:</strong> Represents the complete toolchain ecosystem practiced across coursework, independent projects, and internship initiatives. Tool combinations are selected specifically based on individual deployment requirements.
            </span>
          </div>

          {/* Desktop & Tablet Toolchain Grid / Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3 relative">
            {pipelineToolchain.map((item, index) => {
              const Icon = iconMap[item.icon] || Code;
              const isLast = index === pipelineToolchain.length - 1;

              return (
                <div 
                  key={item.step} 
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* Step Card */}
                  <div className="w-full p-3 rounded-xl bg-surface-elevated/90 border border-border-subtle group-hover:border-cyan-500/50 group-hover:bg-slate-900 transition-all duration-200 flex flex-col items-center justify-between min-h-[140px] shadow-sm">
                    
                    <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
                      <span className="w-4 h-4 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center font-bold">
                        {item.step}
                      </span>
                      <span className="text-[9px] text-cyan-400/80">STAGE</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-transform my-1">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="font-mono text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-[10px] text-slate-400 line-clamp-2 mt-1 leading-tight">
                        {item.role}
                      </p>
                    </div>

                  </div>

                  {/* Desktop Horizontal Arrow */}
                  {!isLast && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <div className="w-4 h-4 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400">
                        <ArrowRight className="w-2.5 h-2.5 text-cyan-400" />
                      </div>
                    </div>
                  )}

                  {/* Tablet / Mobile Intermediate Connectors */}
                  {!isLast && (
                    <div className="block lg:hidden my-1 text-slate-600">
                      <ArrowDown className="w-3 h-3 text-cyan-500/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Workflow Phases Summary */}
          <div className="mt-8 pt-6 border-t border-border-subtle grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] font-mono text-cyan-400 block font-semibold">1. SOURCE & TRIGGER</span>
              <p className="text-xs text-slate-300 mt-1">Local Git commits pushed to GitHub webhook endpoints.</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] font-mono text-amber-400 block font-semibold">2. BUILD & TEST</span>
              <p className="text-xs text-slate-300 mt-1">Jenkins automated pipeline builds and Maven unit test verification.</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] font-mono text-sky-400 block font-semibold">3. CONTAINER & INFRA</span>
              <p className="text-xs text-slate-300 mt-1">Docker containerization and Kubernetes orchestration on AWS.</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
              <span className="text-[10px] font-mono text-emerald-400 block font-semibold">4. CONFIG & MONITOR</span>
              <p className="text-xs text-slate-300 mt-1">Ansible/Terraform IaC automation with Grafana and PagerDuty telemetry.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
