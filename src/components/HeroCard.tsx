import { FaLeaf } from 'react-icons/fa';
import { SectionCard } from './SectionCard';

export function HeroCard() {
  return (
    <SectionCard className="h-full overflow-hidden rounded-[1.7rem] border border-[#d9c37f]/30 bg-[#0d1a12]/80 p-0 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-md">
      <div className="relative h-full min-h-[330px] overflow-hidden rounded-[1.7rem] lg:min-h-[400px]">
        <img
          src="/welcome-bg.jpeg"
          alt="Cliffside forest landscape at sunset"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06100b]/80 via-[#06100b]/45 to-transparent" />
        <div className="absolute inset-0 bg-[#06100b]/15" />

        <div className="relative z-10 flex h-full min-h-[330px] items-center px-7 py-7 text-left lg:min-h-[400px] lg:px-9">
          <div className="max-w-[560px]">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#e6bf6a]/35 bg-[#0f1a13]/55 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[#e6bf6a]">
              <FaLeaf className="text-[0.62rem]" />
              Welcome
            </p>

            <p className="mt-5 text-lg font-medium text-[#fff7e6]">
              to
            </p>

            <h1 className="mt-1 whitespace-nowrap font-serif text-[2.85rem] font-semibold leading-[0.95] text-[#fffdf8] drop-shadow-[0_6px_22px_rgba(0,0,0,0.65)] sm:text-[3.45rem] lg:text-[3.8rem]">
  Nook of <span lang="ar" className="font-arabic font-semibold">مُسکان</span>
</h1>

            <p className="mt-6 text-[1.25rem] font-semibold leading-tight tracking-[0.03em] text-[#f2d7a1] sm:text-[1.35rem]">
              Explorer. Developer. Dreamer.
            </p>

            <p className="mt-4 max-w-[440px] text-[0.98rem] leading-7 text-[#f9f2e5]/95 sm:text-base">
              I build digital experiences that feel human, thoughtful, and beautifully crafted.
            </p>

            <a
              href="mailto:muskandodmani222@gmail.com"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-[#95aa70]/60 bg-[#6a7b49] px-6 py-2.5 text-sm font-semibold text-[#fffdf8] shadow-[0_10px_22px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#758754] active:translate-y-[2px] active:shadow-none"
            >
              Let&apos;s Connect
              <FaLeaf className="text-[0.65rem] text-[#c4dc91] transition-transform group-hover:rotate-12" />
            </a>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}