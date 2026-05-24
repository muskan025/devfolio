// @ts-nocheck
import { FaLeaf } from 'react-icons/fa';
import { SectionCard } from './SectionCard';

export function HeroCard() {
  return (
    <SectionCard className="relative overflow-hidden rounded-[2rem] border-2 border-[#1d1d1b] p-5 shadow-[0_12px_35px_rgba(0,0,0,0.18)] min-h-[220px] lg:min-h-[240px] h-full" style={{ backgroundImage: `url('/welcome-bg.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent" />
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#ffd166]/20 blur-3xl" />
      <div className="relative z-10 max-w-[65%] text-left">
        <h1 className="font-serif text-5xl leading-tight sm:text-6xl md:text-7xl text-[#fffdf8]">Welcome</h1>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#fffdf8]">to</p>
        <p className="mt-1 font-serif text-4xl font-semibold leading-tight sm:text-5xl text-[#fffdf8]">Nook of مُسکان</p>
        <div className="mt-6">
          <p className="mb-4 text-base font-medium leading-7 text-[#fffdf8]">Explorer. Developer. Dreamer.</p>
          <p className="max-w-md text-base leading-7 text-[#f5efe4]/90">I build digital experiences that feel human, thoughtful, and beautifully crafted.</p>
        </div>
        <a href="mailto:muskandodmani222@gmail.com" className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#1d1d1b] bg-gradient-to-br from-[#6b7b4a] to-[#46542f] px-6 py-2.5 text-sm font-medium text-[#fffdf8] shadow-[3px_3px_0_#1d1d1b] transition-all hover:translate-y-[2px] hover:shadow-[1px_1px_0_#1d1d1b] active:translate-y-[3px] active:shadow-none">Let's Connect <FaLeaf className="text-xs text-[#b8d28a] transition-transform group-hover:rotate-12" /></a>
      </div>
    </SectionCard>
  );
}