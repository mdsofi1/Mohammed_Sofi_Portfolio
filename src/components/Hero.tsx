import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { HeroVisual } from './HeroVisual';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Recruiter Quick Status Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-elevated border border-emerald-800/40 text-emerald-300 text-xs font-mono shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personal.availabilityStatus}</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {personal.location}
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              {personal.phone}
            </span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Recruiter Elevator Pitch & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-cyan-400 font-mono text-sm tracking-wide font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>ENGINEERING PORTFOLIO</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personal.name}
              </h1>
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                {personal.title}
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              {personal.heroDescription}
            </p>

            {/* Target Roles Tags for Recruiters */}
            <div className="space-y-2 pt-1">
              <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                Targeted Specializations:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {personal.targetRoles.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Prominent Action Buttons Required by Specification */}
            <div className="pt-2 flex flex-wrap gap-3 items-center">
              
              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download Resume */}
              <a
                href={personal.resumeUrl}
                download="Mohammed_Sofi_Sarmad_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold bg-surface-elevated text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>

              {/* GitHub & LinkedIn Social Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                  title="View GitHub (mdsofi1)"
                  aria-label="View GitHub profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                  title="View LinkedIn Profile"
                  aria-label="View LinkedIn profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Recruiter Guarantee Points */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Hands-on CI/CD Pipelines
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                AWS & Linux Infrastructure
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Ansible & Terraform IaC
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual - DevOps / Cloud Workflow Engine */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <HeroVisual />
          </div>

        </div>

      </div>
    </section>
  );
};
