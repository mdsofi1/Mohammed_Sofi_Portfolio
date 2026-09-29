import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { 
  MapPin, 
  Calendar, 
  CheckCircle2
} from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Hands-on engineering internships focused on cloud infrastructure, CI/CD automation, configuration orchestration, and intelligent system workflows.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experience.map((exp) => {
            const isCurrent = exp.period.includes('Present');

            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Dot Indicator */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 ${
                    isCurrent 
                      ? 'bg-cyan-400 border-background shadow-lg shadow-cyan-400/50' 
                      : 'bg-slate-700 border-background group-hover:bg-cyan-400'
                  } transition-colors`}
                ></div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-border-subtle group-hover:border-cyan-500/40 transition-all duration-300 shadow-md">
                  
                  {/* Top Bar with Title and Dates */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.title}
                        </h3>
                        {isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="text-base font-semibold text-cyan-400 mt-1">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities - Strictly verbatim / improved presentation from resume */}
                  <div className="space-y-3 mt-5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Applied Technologies */}
                  <div className="mt-6 pt-5 border-t border-border-subtle flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2">Core Tech:</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-surface-elevated text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
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
