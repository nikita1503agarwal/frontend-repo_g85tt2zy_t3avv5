import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Satellite, Cpu, Shield } from 'lucide-react';

const items = [
  {
    title: 'XDR Platform',
    icon: Lock,
    color: 'from-cyan-400 to-blue-500',
    desc: 'End-to-end detection engineering with real-time correlation and automated response.',
  },
  {
    title: 'CanSat + Drones',
    icon: Satellite,
    color: 'from-fuchsia-400 to-purple-500',
    desc: 'Telemetry, control, and CV-driven insights for aerospace and maritime security.',
  },
  {
    title: 'Applied ML',
    icon: Cpu,
    color: 'from-emerald-400 to-teal-500',
    desc: 'Federated learning and privacy-first pipelines for cross-tenant detection sharing.',
  },
  {
    title: 'Security Automation',
    icon: Shield,
    color: 'from-amber-400 to-orange-500',
    desc: 'Pipeline automation and platform architecture for resilient SecOps.',
  },
];

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0, 6, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

const ShowcaseCard = ({ i }) => {
  const Icon = i.icon;
  return (
    <motion.div
      variants={floatVariants}
      initial="initial"
      animate="animate"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
    >
      <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${i.color} opacity-20 blur-2xl`} />
      <div className="mb-3 inline-flex items-center gap-2 text-white">
        <span className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${i.color} text-slate-900`}>
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="text-lg font-semibold">{i.title}</h3>
      </div>
      <p className="text-sm text-white/70">{i.desc}</p>
    </motion.div>
  );
};

const Showcase = () => {
  return (
    <section className="relative bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Capabilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 max-w-2xl text-white/70"
        >
          A fusion of security engineering, ML, and aerospace systems — focused on automated, human-centered defense.
        </motion.p>

        <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <ShowcaseCard key={i.title} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
