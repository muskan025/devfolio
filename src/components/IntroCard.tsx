
import { SectionCard } from './SectionCard';
import { BORDERED_PANEL, CARD_CONTAINER, SECTION_TITLE } from '../constants/styles';
import { Language } from '../data/portfolioData';

type IntroCardProps = {
  languages: Language[];
  myTime: Date;
};


export function IntroCard({ languages, myTime }: IntroCardProps) {
  return (
    <SectionCard
      as="aside"
      className={`${CARD_CONTAINER} min-h-[220px] h-full border-[#d8ccb6] bg-[#f4efe2]/95 text-[#243026] lg:min-h-[240px]`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 rounded-xl border border-[#d9ccb6] bg-[#f8f3e8] px-4 py-2 text-sm font-medium text-[#2c362e] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/80 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
          Available To Work
        </span>

        <button className="group inline-flex items-center gap-2 rounded-xl border border-[#91a579] bg-gradient-to-b from-[#f7f2e8] to-[#eee4d1] px-4 py-2 text-sm font-semibold text-[#253027] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_16px_rgba(28,38,30,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#708657] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_20px_rgba(28,38,30,0.14)]">
          Resume
          <span className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
        </button>
      </div>

      <div className="mt-6 space-y-3">
       <h2 className="whitespace-nowrap font-serif text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#1f2821] sm:text-[2.25rem] lg:text-[2.35rem]">
  I&apos;m a <span className="text-[#202922]">Software Engineer</span>
</h2>
        <span className="block h-[2px] w-16 rounded-full bg-[#caa65d]/70"></span>
        <p className="text-lg leading-8 text-[#3d4a3f]">Explorer, hardworking, and curious.</p>
      </div>

      <div className="mt-6 rounded-2xl border border-[#d5c8b2] bg-gradient-to-br from-[#f9f3e8] to-[#efe4d0] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_24px_rgba(0,0,0,0.08)]">
        <div className="mb-3 flex items-center justify-between">
          <p className={SECTION_TITLE + ' text-[#2f2a22]'}>Languages</p>
          <p className="text-[11px] text-[#5f5648]">Hover chips</p>
        </div>

        <div className="relative z-50 flex flex-wrap items-center gap-2 overflow-visible pb-1 text-sm">
          {languages.map((language) => (
            <span
              key={language.name}
              className="group relative z-0 cursor-default whitespace-nowrap rounded-full border border-[#cfc1aa] bg-[#fbf6ec] px-3.5 py-1.5 text-sm font-medium text-[#273128] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition-all duration-200 hover:z-[9998] hover:-translate-y-0.5 hover:border-[#8b9f68] hover:bg-[#eef2e4] hover:text-[#253027]"
            >
              <span className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full transition-colors duration-300 group-hover:bg-[#ffd166]"
                  style={{ backgroundColor: language.color }}
                />
                {language.name}
              </span>
              <span className="pointer-events-none absolute left-1/2 top-full z-[9999] mt-2 w-max max-w-48 -translate-x-1/2 scale-95 rounded-xl border border-[#3f4b3d] bg-[#1c2820] px-2.5 py-1.5 text-[10px] text-[#fff9ef] opacity-0 shadow-[0_14px_32px_rgba(0,0,0,0.24)] transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                <span className="block font-semibold text-[#ffd166]">{language.proficiency}</span>
                <span className="mt-1 block leading-relaxed">{language.flair}</span>
                <span className="absolute -top-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-[#1d1d1b] bg-[#1d1d1b]" />
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className={`${BORDERED_PANEL} px-4 py-3 text-center`}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em]">My Time</p>
          <p className="mt-1 text-base font-medium leading-7">
            {myTime.toLocaleTimeString('en-IN', {
              timeZone: 'Asia/Kolkata',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
        <div className={`${BORDERED_PANEL} px-4 py-3 text-center`}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em]">Your Time</p>
          <p className="mt-1 text-base font-medium leading-7">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </SectionCard>
  );
}