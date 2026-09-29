import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { 
  Terminal, 
  Mail, 
  FileDown, 
  ArrowUp
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-card border-t border-border-subtle py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-sm">
                {personal.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              DevOps & Cloud Engineer specializing in CI/CD automation, AWS cloud infrastructure, Docker, Kubernetes, Terraform, Ansible, and Linux systems.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{personal.availabilityStatus}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <span className="text-slate-200 uppercase font-semibold text-[11px] block">
              Navigation
            </span>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
              <li><a href="#workflow" className="hover:text-cyan-400 transition-colors">DevOps Workflow</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#github" className="hover:text-cyan-400 transition-colors">Engineering GitHub</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <span className="text-slate-200 uppercase font-semibold text-[11px] block">
              Recruiter Connect
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={personal.resumeUrl}
                download="Mohammed_Sofi_Sarmad_Resume.pdf"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/mdsofi1</span>
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personal.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-[11px] text-center sm:text-left">
            &copy; {new Date().getFullYear()} Mohammed Sofi Sarmad. All engineering data verified against official resume.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-elevated border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all text-xs"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
