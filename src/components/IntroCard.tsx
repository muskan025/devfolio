// @ts-nocheck
import { SectionCard } from './SectionCard';
import { BORDERED_PANEL, CARD_CONTAINER, CHIP, SECTION_TITLE } from '../constants/styles';

export function IntroCard({ languages, myTime }) {
  return (
 <SectionCard as="aside" className={`${CARD_CONTAINER} bg-[rgba(248,242,235,0.5)]  backdrop-blur-md min-h-[220px] lg:min-h-[240px] h-full`}>      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className={`${CHIP} flex items-center gap-2`}><span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span><span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span></span>Available To Work</span>
        <button className="rounded-xl border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-1 text-sm font-medium">Resume ↓</button>
      </div>
      <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight sm:text-3xl"><span>I&apos;m a </span><span className="inline-block align-bottom overflow-hidden whitespace-nowrap border-r-2 border-[#1d1d1b] animate-typing">Software Engineer</span></h2>
      <p className="mt-3 text-base leading-7 text-[#2b2b29]">Explorer, hardworking, and curious</p>
      <div className="mt-4 rounded-2xl border-2 border-[#1d1d1b] bg-gradient-to-br from-[#fffdf8] to-[#f4ecdd] p-3.5"><div className="mb-2 flex items-center justify-between"><p className={SECTION_TITLE + ' text-[#2f2a22]'}>Languages</p><p className="text-[10px] text-[#5f5648]">Hover chips</p></div>
        <div className="relative z-50 flex flex-wrap items-center gap-2 pb-1 text-sm overflow-visible">{languages.map((language) => <span key={language.name} className="group relative z-0 cursor-default whitespace-nowrap rounded-full border-2 border-[#1d1d1b] bg-[#f9f6ef]/80 backdrop-blur-md px-3 py-1 text-sm font-medium transition-all duration-200 hover:z-[9998] hover:-translate-y-0.5 hover:bg-[#1d1d1b] hover:text-[#fff9ef]"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full transition-colors duration-300 group-hover:bg-[#ffd166]" style={{ backgroundColor: language.color }} />{language.name}</span><span className="pointer-events-none absolute left-1/2 top-full z-[9999] mt-2 w-max max-w-48 -translate-x-1/2 scale-95 rounded-xl border-2 border-[#1d1d1b] bg-[#1d1d1b] px-2.5 py-1.5 text-[10px] text-[#fff9ef] opacity-0 shadow-[3px_3px_0_#6f6352] transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"><span className="block font-semibold text-[#ffd166]">{language.proficiency}</span><span className="mt-1 block leading-relaxed">{language.flair}</span><span className="absolute -top-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-[#1d1d1b] bg-[#1d1d1b]" /></span></span>)}</div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2"><div className={`${BORDERED_PANEL} px-4 py-3 text-center`}><p className="text-xs font-semibold uppercase tracking-[0.22em]">My Time</p><p className="mt-1 text-base font-medium leading-7">{myTime.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })}</p></div><div className={`${BORDERED_PANEL} px-4 py-3 text-center`}><p className="text-xs font-semibold uppercase tracking-[0.22em]">Your Time</p><p className="mt-1 text-base font-medium leading-7">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p></div></div>
    </SectionCard>
  );
}