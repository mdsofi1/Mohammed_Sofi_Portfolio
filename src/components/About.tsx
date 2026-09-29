import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { 
  GraduationCap, 
  Terminal, 
  Layers, 
  Workflow, 
  ShieldCheck, 
  Award,
  ArrowUpRight
} from 'lucide-react';

export const About: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  const corePillars = [
    {
      title: "CI/CD & Deployment Automation",
      desc: "Architecting end-to-end continuous integration and deployment pipelines using Jenkins, Git, and GitHub with automated build, test, and artifact packaging.",
      icon: Workflow,
      tag: "Jenkins / Git / Maven"
    },
    {
      title: "Cloud & Container Orchestration",
      desc: "Deploying and managing workloads on AWS cloud (EC2, IAM, S3, VPC) using Docker containerization and Kubernetes orchestration for resilient execution.",
      icon: Layers,
      tag: "AWS / Docker / K8s"
    },
    {
      title: "Infrastructure as Code (IaC)",
      desc: "Writing modular Ansible playbooks and Terraform configurations to provision reproducible environments, configure Nginx/Tomcat, and eliminate manual drift.",
      icon: Terminal,
      tag: "Terraform / Ansible / Bash"
    },
    {
      title: "Linux & Reliability Engineering",
      desc: "Proficient in Linux (Ubuntu) permission architecture, crontab automation, system monitoring, and incident-management workflows with Grafana and PagerDuty.",
      icon: ShieldCheck,
      tag: "Linux / Grafana / PagerDuty"
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface/50 border-y border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            DevOps & Cloud Engineer with Practical Systems Foundations
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            {about.summary}
          </p>
        </div>

        {/* Education & Academic Highlight Banner */}
        <div className="mb-12 p-6 rounded-xl bg-surface-elevated/80 border border-border-subtle backdrop-blur-md shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-lg font-bold text-white">{about.degree}</span>
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    CGPA: {about.cgpa}
                  </span>
                </div>
                <p className="text-sm text-slate-300">
                  {about.university} &bull; <span className="font-mono text-cyan-300">{about.duration}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6 shrink-0">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <div className="text-xs font-mono">
                  <div className="text-white font-semibold">Hands-on Internship Experience</div>
                  <div className="text-slate-400">DevOps Academy & Learners Byte</div>
                </div>
              </div>
              <a
                href="#experience"
                className="ml-auto inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-medium"
              >
                <span>Timeline</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-surface-card border border-border-subtle hover:border-cyan-500/40 transition-all duration-300 group shadow-md"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-slate-900/90 text-slate-300 border border-slate-800">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
