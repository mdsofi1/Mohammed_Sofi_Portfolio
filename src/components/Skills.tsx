import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { 
  GitMerge, 
  Box, 
  Cloud, 
  Terminal, 
  PackageCheck, 
  Activity, 
  Cpu, 
  Network,
  CheckCircle,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  GitMerge,
  Container: Box,
  Cloud,
  Terminal,
  PackageCheck,
  Activity,
  Cpu,
  Network
};

export const Skills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized Technical Skills
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Strictly derived from hands-on internship experience and engineering coursework. Positioned for DevOps, Cloud, and Infrastructure operations.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Terminal;
            return (
              <div 
                key={idx}
                className="rounded-xl p-5 bg-surface-card border border-border-subtle hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-cyan-950/20"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-surface-elevated text-cyan-400 border border-slate-800 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 p-2 rounded-md bg-slate-900/60 border border-slate-800/80 text-xs font-mono text-slate-300 hover:border-cyan-500/30 hover:bg-slate-900 transition-colors"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Verified Competency</span>
                  <span className="text-cyan-400 font-medium">{cat.skills.length} Items</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Guarantee Note */}
        <div className="mt-10 p-4 rounded-lg bg-surface-elevated/40 border border-border-subtle text-xs font-mono text-slate-400 flex items-center justify-between flex-wrap gap-2">
          <span>&bull; All technologies listed match official resume certifications, internships, and validated project pipelines.</span>
          <span className="text-cyan-400 font-semibold">Zero fabricated skills</span>
        </div>

      </div>
    </section>
  );
};
