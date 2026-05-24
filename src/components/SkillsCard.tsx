// @ts-nocheck
import { SectionCard } from './SectionCard';

export function SkillsCard({ sliderSpeed, setSliderSpeed, sliderSpeeds, marqueeSkills, skillLogos }) {
  return (
               <SectionCard className="min-w-0 rounded-[2rem] border border-[#d8ccb6] bg-[#f4efe2]/95 p-5 text-[#243026] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md">
      <div className="mb-3 flex min-w-0 items-center justify-between"><h3 className="text-sm font-semibold uppercase tracking-[0.22em]">Skills</h3><div className="flex items-center gap-2 overflow-hidden" aria-label="Slider speed controls"><button onClick={() => setSliderSpeed('slow')} className="h-3 w-3 rounded-full border border-[#5f7345] bg-red-500" /><button onClick={() => setSliderSpeed('medium')} className="h-3 w-3 rounded-full border border-[#5f7345] bg-yellow-400" /><button onClick={() => setSliderSpeed('fast')} className="h-3 w-3 rounded-full border border-[#5f7345] bg-green-500" /></div></div>
      <div className="skills-shell min-w-0 overflow-hidden rounded-2xl border border-[#d5c8b2] bg-[#f9f3e7] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_28px_rgba(0,0,0,0.08)]"><div className="skills-marquee" style={{ ['--skills-duration']: `${sliderSpeeds[sliderSpeed]}s` }}>{marqueeSkills.map((tech, index) => <span key={`${tech.name}-${index}`} className="skill-pill whitespace-nowrap rounded-full border border-[#cabda7] px-4 py-1.5 text-sm font-medium"><span className="inline-flex items-center gap-2 cursor-pointer"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#5f7345] bg-[#fff9ef]">{skillLogos[tech.name]}</span>{tech.name}</span></span>)}</div></div>
    </SectionCard>
  );
}