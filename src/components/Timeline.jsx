import React from 'react';
import { Rocket, Cpu, Shield, Network } from 'lucide-react';

const timeline = [
  {
    year: 'Year 1',
    title: 'Aerospace, IoT and Drones',
    icon: Rocket,
    items: [
      'Built a CanSat for NASA challenge',
      'Hands-on with drones and embedded IoT systems',
      'Explored aerospace telemetry and ground control links',
    ],
  },
  {
    year: 'Year 2',
    title: 'ML beginnings + Security pivot',
    icon: Cpu,
    items: [
      'Published paper on drone-based maritime security',
      'Applied CV/ML to aerial and maritime datasets',
    ],
  },
  {
    year: 'Year 3',
    title: 'Security engineering',
    icon: Shield,
    items: [
      'Built dark web intel scrapers and enrichment pipelines',
      'Threat intel normalization and alerting',
    ],
  },
  {
    year: 'Year 4',
    title: 'XDR + Federated Learning',
    icon: Network,
    items: [
      'Designed and built a complete XDR platform',
      'Submitted NeurIPS paper on federated learning for security',
    ],
  },
];

const TimelineCard = ({ entry }) => {
  const Icon = entry.icon;
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200/10 bg-slate-900/60 p-6 backdrop-blur transition hover:border-cyan-400/30 hover:bg-slate-900/80">
      <div className="mb-3 inline-flex items-center gap-2 text-cyan-300">
        <Icon className="h-5 w-5" />
        <span className="text-sm font-medium">{entry.year}</span>
      </div>
      <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-white/80">
        {entry.items.map((item, idx) => (
          <li key={idx} className="leading-relaxed">• {item}</li>
        ))}
      </ul>
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="journey" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">Journey</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          A focused path from aerospace systems and IoT to modern security engineering and ML-driven defense.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {timeline.map((entry, i) => (
            <TimelineCard key={i} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
