// @ts-nocheck
import { SectionCard } from './SectionCard';

export function QuoteStrip() {
  return (
    <SectionCard as="blockquote" className="relative overflow-hidden rounded-[1.6rem] border border-[#d8ccb6] bg-[#f4efe2]/95 p-4 text-base italic text-[#2e392f] shadow-[0_24px_60px_rgba(0,0,0,0.2)] backdrop-blur-md">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#ffd166]/20 blur-3xl" />
      <p className="relative z-10 leading-7 text-[#2f2a22]">“The wheel of courage will run until you have the will to run the wheel.”<span className="block mt-2 text-xs font-semibold not-italic uppercase tracking-[0.22em] text-[#5f5648]">— Muskan Dodmani</span></p>
    </SectionCard>
  );
}