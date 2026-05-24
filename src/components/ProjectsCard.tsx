// @ts-nocheck
import { FaArrowRight } from 'react-icons/fa';
import { SectionCard } from './SectionCard';
import { CARD_CONTAINER, CARD_HEADER, ICON_CIRCLE, SECTION_TITLE } from '../constants/styles';

export function ProjectsCard({ projects }) {
  return (
    <SectionCard className={`relative overflow-hidden min-h-[360px] lg:min-h-[380px] h-full ${CARD_CONTAINER}`}  style={{ backgroundImage: `url('/forest-river.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-[#08130d]/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#101f16]/30 via-transparent to-[#d0b36f]/20" />
      <div className="relative z-10"><div className={CARD_HEADER}><h3 className={SECTION_TITLE}>Projects →</h3></div>
        <div className="relative inline-flex flex-col rounded-2xl border border-white/20 bg-[#0d1a12]/68 text-[#f7f0dd] backdrop-blur-lg p-3.5"><div className="space-y-2.5">{projects.map((project) => <div key={project.title} className="group flex items-center justify-between gap-4 rounded-xl border border-transparent px-2 py-1 transition-all duration-300 hover:border-[#d0bb85] hover:bg-[#18271e]/90"><p className="text-base font-medium leading-7 whitespace-nowrap">{project.title}</p></div>)}</div>
          <a href="/timeline" className={`${ICON_CIRCLE} h-9 w-9 border-[#95aa72] bg-[#5f7345] text-[#f7f0dd] transition-transform duration-300 group-hover:translate-x-1 absolute right-4 -bottom-4 cursor-pointer hover:bg-[#708954] hover:text-[#fcf5e8]`} aria-label="Open project timeline page"><FaArrowRight className="text-xs transition-transform" /></a>
        </div></div>
    </SectionCard>
  );
}