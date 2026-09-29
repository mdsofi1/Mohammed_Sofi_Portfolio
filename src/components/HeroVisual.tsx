import React, { useState } from 'react';
import { 
  GitBranch, 
  Cpu, 
  Package, 
  Box, 
  Layers, 
  Cloud, 
  CheckCircle2, 
  Activity, 
  Terminal as TerminalIcon,
  ShieldCheck,
  Server
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'telemetry' | 'deploy'>('pipeline');

  const pipelineStages = [
    { id: 'git', label: 'Git', icon: GitBranch, color: 'text-orange-400', bg: 'bg-orange-950/30 border-orange-800/40' },
    { id: 'github', label: 'GitHub', icon: GithubIcon, color: 'text-slate-200', bg: 'bg-slate-800/50 border-slate-700/50' },
    { id: 'jenkins', label: 'Jenkins', icon: Cpu, color: 'text-red-400', bg: 'bg-red-950/30 border-red-800/40' },
    { id: 'maven', label: 'Maven', icon: Package, color: 'text-amber-400', bg: 'bg-amber-950/30 border-amber-800/40' },
    { id: 'docker', label: 'Docker', icon: Box, color: 'text-sky-400', bg: 'bg-sky-950/30 border-sky-800/40' },
    { id: 'k8s', label: 'Kubernetes', icon: Layers, color: 'text-blue-400', bg: 'bg-blue-950/30 border-blue-800/40' },
    { id: 'aws', label: 'AWS', icon: Cloud, color: 'text-yellow-400', bg: 'bg-yellow-950/30 border-yellow-800/40' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl border border-border-subtle bg-surface/90 shadow-2xl overflow-hidden backdrop-blur-md">
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-surface-elevated border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50"></div>
          <span className="font-mono text-xs text-slate-400 ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            ci-cd-orchestrator :: prod-pipeline.yaml
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-900/80 p-0.5 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
              activeTab === 'pipeline' 
                ? 'bg-cyan-500/20 text-cyan-300 font-medium' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Workflow
          </button>
          <button
            onClick={() => setActiveTab('deploy')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
              activeTab === 'deploy' 
                ? 'bg-cyan-500/20 text-cyan-300 font-medium' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Console
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
              activeTab === 'telemetry' 
                ? 'bg-cyan-500/20 text-cyan-300 font-medium' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            AWS Cluster
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-6 bg-surface-card">
        
        {/* Pipeline Workflow Tab */}
        {activeTab === 'pipeline' && (
          <div className="space-y-5">
            {/* Live Pipeline Status Banner */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-950/20 border border-emerald-800/30">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-semibold text-emerald-300">
                  PIPELINE STATUS: HEALTHY & AUTOMATED
                </span>
              </div>
              <span className="font-mono text-[11px] text-slate-400">
                Trigger: <span className="text-cyan-400">Webhook Commit</span>
              </span>
            </div>

            {/* Visual Node Flow */}
            <div className="relative py-2">
              {/* Connecting Flow Line */}
              <div className="hidden sm:block absolute top-1/2 left-4 right-4 h-0.5 -translate-y-1/2 bg-gradient-to-r from-cyan-500/20 via-cyan-400/40 to-blue-500/20 z-0"></div>

              {/* Pipeline Nodes Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-2.5 relative z-10">
                {pipelineStages.map((stage) => {
                  const Icon = stage.icon;
                  return (
                    <div 
                      key={stage.id}
                      className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1"
                    >
                      <div className={`w-11 h-11 rounded-lg border ${stage.bg} flex items-center justify-center shadow-lg transition-all group-hover:scale-105 group-hover:border-cyan-400/60`}>
                        <Icon className={`w-5 h-5 ${stage.color}`} />
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-slate-300 mt-2">
                        {stage.label}
                      </span>
                      <span className="font-mono text-[9px] text-emerald-400 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                        PASS
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                <span className="block text-[10px] font-mono text-slate-400 uppercase">Automation</span>
                <span className="font-mono text-sm font-bold text-cyan-400">100% CI/CD</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                <span className="block text-[10px] font-mono text-slate-400 uppercase">Target Cloud</span>
                <span className="font-mono text-sm font-bold text-amber-400">AWS EC2 / S3</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                <span className="block text-[10px] font-mono text-slate-400 uppercase">Configuration</span>
                <span className="font-mono text-sm font-bold text-emerald-400">Ansible & IaC</span>
              </div>
            </div>
          </div>
        )}

        {/* Console / Terminal Tab */}
        {activeTab === 'deploy' && (
          <div className="font-mono text-xs space-y-2 bg-slate-950 p-4 rounded-lg border border-slate-800/80">
            <div className="text-slate-400 flex items-center justify-between pb-2 border-b border-slate-800">
              <span>$ bash deploy-pipeline.sh --auto-approve</span>
              <span className="text-[10px] text-emerald-400">EXEC_OK</span>
            </div>
            <div className="space-y-1.5 text-slate-300 text-[11px]">
              <div className="text-cyan-400">&gt; git clone https://github.com/mdsofi1/jenkins-practice.git</div>
              <div>[INFO] Repository cloned, checking branch main @ commit 4fa90b</div>
              <div className="text-amber-400">&gt; mvn clean compile test package</div>
              <div>[INFO] Tests run: 28, Failures: 0, Errors: 0, Skipped: 0</div>
              <div>[INFO] Building war: target/web-app.war [SUCCESS]</div>
              <div className="text-blue-400">&gt; docker build -t web-app:latest .</div>
              <div>[INFO] Successfully tagged web-app:latest (digest: sha256:7a9e1...)</div>
              <div className="text-emerald-400">&gt; ansible-playbook -i inventory deploy.yml</div>
              <div className="text-emerald-400">[INFO] PLAY RECAP: ok=6 changed=2 unreachable=0 failed=0</div>
              <div className="text-slate-400">[DONE] Deployment verified on Apache Tomcat / Nginx reverse proxy.</div>
            </div>
          </div>
        )}

        {/* Telemetry / Infrastructure Tab */}
        {activeTab === 'telemetry' && (
          <div className="space-y-3 font-mono text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-cyan-400" />
                    AWS EC2 Instances
                  </span>
                  <span className="text-emerald-400">RUNNING</span>
                </div>
                <div className="text-lg font-bold text-slate-100">2 Nodes Active</div>
                <div className="text-[10px] text-slate-400">Ubuntu 22.04 LTS / Tomcat 9</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-amber-400" />
                    Grafana & PagerDuty
                  </span>
                  <span className="text-cyan-400">MONITORED</span>
                </div>
                <div className="text-lg font-bold text-slate-100">0 Incidents</div>
                <div className="text-[10px] text-slate-400">Synthetic health checks 200 OK</div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 text-[11px]">AWS Security & IAM: Minimal Privilege Rules Enforced</span>
              </div>
              <span className="text-[10px] text-slate-500">us-east-1</span>
            </div>
          </div>
        )}

      </div>

      {/* Terminal Status Bar */}
      <div className="px-4 py-2 bg-surface-elevated/70 border-t border-border-subtle flex items-center justify-between font-mono text-[10px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          Git-Ops Engine Active
        </span>
        <span>Environment: Production Simulation</span>
      </div>

    </div>
  );
};
