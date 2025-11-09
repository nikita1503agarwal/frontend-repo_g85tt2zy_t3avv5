import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'Dark web intel',
  'XDR',
  'Drone CV',
  'Federated Learning',
  'Automation',
  'Telemetry',
  'Threat Hunting',
  'SecOps',
];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden bg-slate-950 py-6">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent)]" />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="flex min-w-max gap-8 text-white/60"
      >
        {[...logos, ...logos].map((l, idx) => (
          <span key={idx} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
            {l}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
