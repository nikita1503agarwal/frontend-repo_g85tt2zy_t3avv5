import React from 'react';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Marquee from './components/Marquee';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-inter">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur" role="navigation">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
          <a href="#" className="text-sm font-semibold tracking-wide text-cyan-300">SECURITY PORTFOLIO</a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a className="hover:text-white" href="#">Home</a>
            <a className="hover:text-white" href="#capabilities">Capabilities</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Marquee />
        <section id="capabilities">
          <Showcase />
        </section>
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-slate-950 py-6 text-white/60">
        <div className="mx-auto max-w-6xl px-6 text-xs sm:text-sm">
          © {new Date().getFullYear()} Security Portfolio. Built with React, Spline, and Framer Motion.
        </div>
      </footer>
    </div>
  );
};

export default App;
