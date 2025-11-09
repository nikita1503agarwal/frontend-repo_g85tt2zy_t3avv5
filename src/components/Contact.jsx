import React from 'react';
import { Mail, Send, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_10%_30%,rgba(236,72,153,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold sm:text-4xl">Let’s build secure systems together</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Focused on automation in SecOps and resilient security architectures.
              Open to roles in detection engineering, platform security, and security architecture.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="mailto:security.architect@example.com"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-2 font-medium text-slate-900 transition hover:from-cyan-300 hover:to-fuchsia-300"
              >
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10"
              >
                <FileDown className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <div>
              <label className="text-sm text-white/80">Your email</label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="mt-3">
              <label className="text-sm text-white/80">Message</label>
              <textarea
                rows="4"
                placeholder="Let’s talk about security automation, detection engineering, or architecture..."
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-2 font-medium text-slate-900 transition hover:from-cyan-300 hover:to-fuchsia-300"
            >
              <Send className="h-4 w-4" /> Send
            </button>
            <p className="mt-2 text-center text-xs text-white/50">Form is a demo — use the email button to contact directly.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
