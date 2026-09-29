import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { 
  GraduationCap, 
  Calendar
} from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 bg-surface/40 border-y border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Engineering degree combining computer hardware, operating systems, networking fundamentals, and modern software architectures.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="rounded-2xl bg-surface-card border border-border-subtle p-6 sm:p-8 max-w-4xl shadow-xl">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="p-3 sm:p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0 shadow-inner">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  {education.degree}
                </h3>
                <div className="text-base font-semibold text-cyan-400">
                  {education.institution}
                </div>
                <p className="text-sm text-slate-300 pt-1 leading-relaxed">
                  {education.description}
                </p>

                {/* Core Academic Competencies */}
                <div className="pt-3 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    Operating Systems (Linux Internals)
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    Computer Networks & Protocols
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    Distributed Systems & Cloud Principles
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Metrics Pillar */}
            <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-3 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-8 shrink-0">
              <div className="text-left md:text-right">
                <span className="block text-[11px] font-mono uppercase text-slate-400">Cumulative GPA</span>
                <span className="text-3xl font-extrabold text-emerald-400 font-mono">
                  {education.cgpa}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{education.period}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
