import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, CheckCircle2, Copy, ExternalLink, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Flutter Project Inquiry',
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
      
      // Trigger festive confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0284C7', '#38BDF8', '#00D2B8', '#6366F1']
      });

      // Construct mailto URL as active fallback
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi Nehal,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;

      setFormData({ name: '', email: '', subject: 'Flutter Project Inquiry', message: '' });
    }, 800);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-900/40 border-t border-slate-800/60">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-flutter-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-flutter-500/10 text-flutter-400 border border-flutter-500/20 inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Let's build something useful, scalable and beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Info Cards (5 cols) */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-3xl bg-dark-850/90 border border-slate-800/80 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Contact Details</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm actively open to full-time roles, Flutter engineering contracts, and technical collaborations. Feel free to reach out anytime!
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800/80 flex items-center justify-between group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-flutter-500/10 border border-flutter-500/30 flex items-center justify-center text-flutter-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Direct Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-slate-200 hover:text-flutter-400 truncate block">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors ml-2 flex-shrink-0"
                  title="Copy email address"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-dark-950 border border-slate-800/80 flex items-center justify-between group hover:border-flutter-500/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">LinkedIn Profile</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-sky-400 transition-colors">
                      Nehal Shinde
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-dark-950 border border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-500 block">Current Location</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form (7 cols) */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-dark-850/90 border border-slate-800/80 shadow-xl space-y-6"
            >
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-flutter-400" />
                <span>Send a Message</span>
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-flutter-500/10 border border-flutter-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-flutter-500/20 text-flutter-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank You!</h4>
                  <p className="text-xs text-slate-300">
                    Your message has been initiated. If your mail client didn't launch automatically, please email me directly at <a href={`mailto:${personalInfo.email}`} className="text-flutter-400 font-bold underline">{personalInfo.email}</a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
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
                        className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-flutter-500 text-sm transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-flutter-500 text-sm transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-flutter-500 text-sm transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-flutter-500 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-sm font-semibold rounded-xl bg-gradient-to-r from-flutter-500 via-sky-500 to-cyan-500 text-white shadow-xl shadow-flutter-500/20 hover:shadow-flutter-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
