import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, CheckCircle2, Copy, ExternalLink, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import GlassCard from './GlassCard';

export default function ContactRedesign() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Flutter Technical Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0284C7', '#38BDF8', '#00D2B8', '#6366F1']
      });

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi Nehal,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;

      setFormData({ name: '', email: '', subject: 'Flutter Technical Inquiry', message: '' });
    }, 800);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Refined Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-flutter-500/10 text-flutter-400 border border-flutter-500/20 inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Let's build something useful, scalable and beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <GlassCard className="p-8 space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Contact Details</h3>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  I'm actively open to full-time roles, Flutter engineering contracts, and technical collaborations. Feel free to reach out anytime!
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#050A14] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-flutter-500/10 border border-flutter-500/30 flex items-center justify-center text-flutter-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Direct Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs font-mono font-bold text-white hover:text-flutter-400 truncate block">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  data-cursor="COPY"
                  className="p-2.5 rounded-xl bg-[#0A101E] hover:bg-slate-700 text-slate-300 hover:text-white transition-colors ml-2"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
                className="p-4 rounded-2xl bg-[#050A14] border border-white/10 flex items-center justify-between group hover:border-flutter-500/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">LinkedIn Profile</span>
                    <span className="text-xs font-mono font-bold text-white group-hover:text-sky-400 transition-colors">
                      Nehal Shinde
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#050A14] border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">Current Location</span>
                  <span className="text-xs font-mono font-bold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

            </GlassCard>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <MessageSquare className="w-5 h-5 text-flutter-400" />
                <h3 className="text-xl font-bold text-white tracking-tight">Send a Message</h3>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-flutter-500/10 border border-flutter-500/30 text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-flutter-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Message Initiated!</h4>
                  <p className="text-xs font-grotesk text-slate-300">
                    If your email client didn't launch automatically, please email me directly at <a href={`mailto:${personalInfo.email}`} className="text-flutter-400 font-bold underline">{personalInfo.email}</a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xl bg-[#050A14] text-white hover:bg-[#0A101E] border border-white/10"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#050A14] border border-white/10 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-flutter-500 font-grotesk text-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#050A14] border border-white/10 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-flutter-500 font-grotesk text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-medium text-slate-300">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Opportunity / Technical Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-[#050A14] border border-white/10 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-flutter-500 font-grotesk text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-slate-300">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, or engineering role..."
                      className="w-full px-4 py-3 rounded-xl bg-[#050A14] border border-white/10 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-flutter-500 font-grotesk text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="SEND"
                    className="w-full py-4 text-xs font-mono font-bold uppercase tracking-widest rounded-2xl bg-gradient-to-r from-flutter-500 via-sky-500 to-flutter-cyan text-white shadow-xl shadow-flutter-500/25 hover:shadow-flutter-500/40 hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}
