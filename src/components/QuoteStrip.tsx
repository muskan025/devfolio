
import { SectionCard } from './SectionCard';

export function QuoteStrip() {
  return (
    <SectionCard
      as="blockquote"
      className="relative overflow-hidden rounded-[1.6rem] border border-[#d8ccb6] bg-[#f4efe2]/95 px-6 py-5 text-base italic text-[#2e392f] shadow-[0_24px_60px_rgba(0,0,0,0.2)] backdrop-blur-md sm:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff8ea]/90 via-[#f4efe2]/88 to-[#f0e5d0]/82" />
      <img
        src="/quote-mark.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-1/2 h-14 w-16 -translate-y-1/2 object-contain opacity-95 sm:left-7 sm:h-16 sm:w-20"
      />
      <img
        src="/quote-forest.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-full w-[34%] min-w-[190px] object-cover object-right-bottom opacity-80"
      />
      <div className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-r from-[#f4efe2] via-[#f4efe2]/55 to-transparent" />
      <p className="relative z-10 ml-16 max-w-[820px] leading-7 text-[#2f2a22] sm:ml-20">
        “The wheel of courage will run until you have the will to run the wheel.”
        <span className="mt-2 block text-xs font-semibold not-italic uppercase tracking-[0.22em] text-[#5f5648]">
          — Muskan Dodmani
        </span>
      </p>
    </SectionCard>
  );
}