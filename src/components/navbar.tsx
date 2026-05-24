// @ts-nocheck
import { SectionCard } from './SectionCard';
import { navLinks } from '../data/portfolioData';

export function Navbar() {
  return (
    <SectionCard as="header" className="mb-8 rounded-3xl border-2 border-[#1d1d1b] bg-[rgba(235,244,248,0.5)] backdrop-blur-md px-5 py-4 shadow-[4px_4px_0_#1d1d1b]">
      <nav className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm uppercase tracking-[0.18em]">Muskan.dev</p>
        <ul className="flex items-center gap-3 text-sm md:gap-6 md:text-base">
          {navLinks.map((link) => (<li key={link.href}><a href={link.href} className="hover:underline">{link.label}</a></li>))}
        </ul>
        <button className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-sm">Mode</button>
      </nav>
    </SectionCard>
  );
}