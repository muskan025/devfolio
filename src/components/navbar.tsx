
import type { MouseEvent,ReactNode } from 'react';
import { SectionCard } from './SectionCard';
import { navLinks } from '../data/portfolioData';
import { navigateToPath } from '../utils/navigation';

type NavbarProps = {
  logoHref?: string;
  children?: ReactNode;
};

function HomeNavbarContent() {
  const handleJourneyClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    event.preventDefault();
    navigateToPath('/timeline');
  };

  return (
    <>
      <ul className="hidden items-center gap-7 text-sm font-semibold md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="transition-colors hover:text-[#d9c37f]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/timeline"
            onClick={handleJourneyClick}
        className="inline-flex items-center gap-2 rounded-xl border border-[#d9c37f]/25 bg-[#182419]/80 px-4 py-2 text-sm font-semibold text-[#f7f0dd] transition-colors hover:bg-[#223421]"
      >
        <span>Journey</span>
        <span aria-hidden="true">↗</span>
      </a>
    </>
  );
}

export function Navbar({ logoHref = '#home', children }: NavbarProps) {
  return (
    <SectionCard
      as="header"
      className="w-full rounded-2xl border border-[#d9c37f]/30 bg-[#0d1a12]/85 px-5 py-3 text-[#f7f0dd] shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-md"
    >
      <nav className="flex items-center justify-between gap-4">
        <a
          href={logoHref}
          className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]"
        >
          <img
            src="/favicon.png"
            alt="Muskan.dev logo"
            className="h-12 w-12.1 rounded-sm object-contain"
          />
          <span>Muskan.dev</span>
        </a>

        {children ?? <HomeNavbarContent />}
      </nav>
    </SectionCard>
  );
}