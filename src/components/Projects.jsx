import React from 'react';
import { Lock, Radar, Satellite, CloudCog } from 'lucide-react';

const projects = [
  {
    title: 'XDR Platform',
    icon: Lock,
    tags: ['Detection Engineering', 'Data Lake', 'Streaming', 'Automation'],
    detail:
      'End-to-end XDR with log ingestion, correlation rules, enrichment, and automated response playbooks.',
  },
  {
    title: 'Maritime Drone Security',
    icon: Radar,
    tags: ['Computer Vision', 'Edge ML', 'Research'],
    detail:
      'Published approach leveraging UAV imagery to detect maritime anomalies for coastal security.',
  },
  {
    title: 'CanSat (NASA)',
    icon: Satellite,
    tags: ['Aerospace', 'Telemetry', 'Embedded'],
    detail:
      'Designed and built a CanSat with robust telemetry, control, and mission operations tooling.',
  },
  {
    title: 'Federated Learning for SecOps',
    icon: CloudCog,
    tags: ['Federated Learning', 'Privacy', 'NeurIPS Submission'],
    detail:
      'FL approach for sharing detection intelligence without moving raw telemetry across tenants.',
  },
];

const Tag = ({ label }) => (
  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
    {label}
  </span>
);

const ProjectCard = ({ p }) => {
  const Icon = p.icon;
  return (
    <div className="group relative flex flex-col rounded-xl border border-slate-200/10 bg-slate-900/60 p-6 backdrop-blur transition hover:border-cyan-400/30 hover:bg-slate-900/80">
      <div className="mb-3 inline-flex items-center gap-2 text-cyan-300">
        <Icon className="h-5 w-5" />
        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
      </div>
      <p className="text-sm text-white/75">{p.detail}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">Selected Projects</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Practical, outcomes-first work across drones, ML, and modern security operations.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
