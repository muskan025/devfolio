// @ts-nocheck
import { SectionCard } from './SectionCard';

export function QuoteStrip() {
  return (
    <SectionCard as="blockquote" className="relative overflow-hidden rounded-[1.6rem] border-2 border-[#1d1d1b] bg-[rgba(255,248,235,0.45)] backdrop-blur-md p-4 text-base italic shadow-[0_12px_35px_rgba(0,0,0,0.18)]">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#ffd166]/20 blur-3xl" />
      <p className="relative z-10 leading-7 text-[#2f2a22]">“The wheel of courage will run until you have the will to run the wheel.”<span className="block mt-2 text-xs font-semibold not-italic uppercase tracking-[0.22em] text-[#5f5648]">— Muskan Dodmani</span></p>
    </SectionCard>
  );
}