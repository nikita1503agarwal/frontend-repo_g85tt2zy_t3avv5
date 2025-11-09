import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-slate-950"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
          <Shield className="h-4 w-4 text-cyan-300" />
          Security Architecture • Automation • ML for Defense
        </div>

        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Designing secure systems from drones to XDR
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Senior engineer with a four-year journey across aerospace, IoT, and applied ML — now focused
          on building automated security pipelines and modern security architecture.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-900 transition hover:bg-cyan-400"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-6 flex items-center gap-4 text-white/70">
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
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center text-white/70">
        <div className="mx-auto h-8 w-4 rounded-full border border-white/20 p-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-white"></div>
        </div>
        <p className="mt-2 text-xs">Scroll</p>
      </div>
    </section>
  );
};

export default Hero;
