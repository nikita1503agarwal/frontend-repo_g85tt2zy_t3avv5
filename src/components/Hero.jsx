import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Visual overlays for depth and contrast */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/60 via-slate-950/10 to-slate-950"></div>
      <div className="pointer-events-none absolute -left-20 top-10 z-[1] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 z-[1] h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur"
        >
          <Shield className="h-4 w-4 text-cyan-300" />
          Security Architecture • Automation • ML for Defense
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Futuristic security, engineered with automation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          From drones and IoT to XDR and federated learning — delivering resilient, automated defenses and
          human-centered security architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-2 font-medium text-slate-900 transition hover:from-cyan-300 hover:to-fuchsia-300"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className="mt-6 flex items-center gap-4 text-white/70"
        >
          <a
            href="mailto:security.architect@example.com"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center text-white/70"
      >
        <div className="mx-auto h-8 w-4 rounded-full border border-white/20 p-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-white" />
        </div>
        <p className="mt-2 text-xs">Scroll</p>
      </motion.div>
    </section>
  );
};

export default Hero;
