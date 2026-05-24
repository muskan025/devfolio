// @ts-nocheck
import { SectionCard } from './SectionCard';

export function SkillsCard({ sliderSpeed, setSliderSpeed, sliderSpeeds, marqueeSkills, skillLogos }) {
  return (
        <SectionCard className="min-w-0 rounded-[2rem] border border-white/20 bg-[rgba(255,248,235,0.45)] p-6 backdrop-blur-md backdrop-blur-md shadow-[0_8px_32px_rgba(15,23,42,0.18)]]">
      <div className="mb-4 flex min-w-0 items-center justify-between"><h3 className="text-3xl uppercase">Skills</h3><div className="flex items-center gap-2 overflow-hidden" aria-label="Slider speed controls"><button onClick={() => setSliderSpeed('slow')} className="h-3 w-3 rounded-full border border-[#1d1d1b] bg-red-500" /><button onClick={() => setSliderSpeed('medium')} className="h-3 w-3 rounded-full border border-[#1d1d1b] bg-yellow-400" /><button onClick={() => setSliderSpeed('fast')} className="h-3 w-3 rounded-full border border-[#1d1d1b] bg-green-500" /></div></div>
      <div className="skills-shell min-w-0 overflow-hidden rounded-2xl border-2 border-[#1d1d1b] bg-[rgba(240,248,242,0.5)] p-4"><div className="skills-marquee" style={{ ['--skills-duration']: `${sliderSpeeds[sliderSpeed]}s` }}>{marqueeSkills.map((tech, index) => <span key={`${tech.name}-${index}`} className="skill-pill whitespace-nowrap rounded-full border-2 border-[#1d1d1b] px-4 py-1.5 text-base font-medium"><span className="inline-flex items-center gap-2 cursor-pointer"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#1d1d1b] bg-[#fff9ef]">{skillLogos[tech.name]}</span>{tech.name}</span></span>)}</div></div>
    </SectionCard>
  );
}