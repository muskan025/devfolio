// @ts-nocheck
import { FaArrowRight } from 'react-icons/fa';
import { SectionCard } from './SectionCard';

export function ProjectsCard({ projects }) {
  return (
    <SectionCard className="relative overflow-hidden rounded-[2rem] border-2 border-[#1d1d1b] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)]" style={{ backgroundImage: `url('/forest-river.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9f6ef]/20 via-transparent to-[#d6c3a5]/20" />
      <div className="relative z-10"><div className="mb-4 flex items-center justify-between"><h3 className="text-3xl uppercase">Projects →</h3></div>
        <div className="relative inline-flex flex-col rounded-2xl border-2 border-[#1d1d1b] bg-[rgba(255,248,240,0.28)] backdrop-blur-lg border border-white/20 p-4"><div className="space-y-3">{projects.map((project) => <div key={project.title} className="group flex items-center justify-between gap-4 rounded-xl border border-transparent px-2 py-1 transition-all duration-300 hover:border-[#1d1d1b] hover:bg-[#f4ecdd]"><p className="text-lg font-medium whitespace-nowrap">{project.title}</p></div>)}</div>
          <a href="/timeline" className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1d1d1b] bg-[#fffdf8] transition-transform duration-300 group-hover:translate-x-1 absolute right-4 -bottom-4 cursor-pointer hover:bg-black hover:text-white" aria-label="Open project timeline page"><FaArrowRight className="text-xs transition-transform" /></a>
        </div></div>
    </SectionCard>
  );
}