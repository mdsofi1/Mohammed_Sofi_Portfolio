import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  FileDown,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('sending');

    // Simulate sending and trigger mailto
    setTimeout(() => {
      setFormStatus('success');
      // Create mailto link for direct dispatch
      const mailtoUrl = `mailto:${personal.email}?subject=DevOps Role Opportunity from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `Hi Mohammed,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;

      // Reset form after 4 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus('idle');
      }, 4000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-surface/50 border-t border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact & Recruiter Outreach
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Interested in discussing DevOps, Cloud, or Infrastructure engineering opportunities? Let's connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-border-subtle shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Contact Information
              </h3>

              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-surface-elevated/70 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[11px] font-mono text-slate-400 uppercase">Email</span>
                      <a 
                        href={`mailto:${personal.email}`}
                        className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personal.email, 'email')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-surface-elevated/70 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[11px] font-mono text-slate-400 uppercase">Phone</span>
                      <a 
                        href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-surface-elevated/70 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">Location</span>
                    <span className="text-sm font-semibold text-white">
                      {personal.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Verified Links */}
              <div className="pt-2 border-t border-border-subtle flex flex-col gap-3">
                <a
                  href={personal.resumeUrl}
                  download="Mohammed_Sofi_Sarmad_Resume.pdf"
                  className="w-full py-3 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all flex items-center justify-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Verified Resume PDF</span>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-border-subtle shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details below to dispatch a message directly to mdsofisarmad@gmail.com.
              </p>

              {formStatus === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-slate-300">
                    Your email client is opening with your prefilled message to Mohammed Sofi Sarmad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Recruiter"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Message / Role Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mohammed, we reviewed your DevOps & Cloud portfolio and would like to connect regarding an opportunity..."
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-elevated border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full py-3 rounded-lg text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>{formStatus === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
