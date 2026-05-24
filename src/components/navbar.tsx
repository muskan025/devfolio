// // @ts-nocheck
// import { SectionCard } from './SectionCard';
// import { navLinks } from '../data/portfolioData';

// export function Navbar() {
//   return (
//  <SectionCard
//       as="header"
//       className="w-full rounded-2xl border border-[#d9c37f]/35 bg-[#0d1a12]/85 px-5 py-3 text-[#f7f0dd] shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-md"
//     >      <nav className="flex flex-wrap items-center justify-between gap-3">
//         <p className="text-sm font-medium uppercase tracking-[0.25em]">Muskan.dev</p>
//         <ul className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] md:gap-6">
//           {navLinks.map((link) => (<li key={link.href}><a href={link.href} className="transition-colors hover:text-[#d9c37f]">{link.label}</a></li>))}
//         </ul>
//         <button className="rounded-full border border-white/20 bg-[#102217]/70 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-[#f7f0dd] transition-colors hover:bg-[#1a3323]">Mode</button>
//       </nav>
//     </SectionCard>
//   );
// }

// @ts-nocheck
import { SectionCard } from './SectionCard';
import { navLinks } from '../data/portfolioData';
import { FaLeaf } from 'react-icons/fa';

export function Navbar() {
  return (
    <SectionCard
      as="header"
      className="w-full rounded-2xl border border-[#d9c37f]/35 bg-[#0d1a12]/85 px-5 py-3 text-[#f7f0dd] shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-md"
    >
      <nav className="flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.22em]"
        >
          <FaLeaf className="text-[15px] text-[#b9d77a]" />
          <span>Muskan.dev</span>
        </a>

        {/* Links */}
        <ul className="hidden items-center gap-7 text-[14px] font-medium md:flex">
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

        {/* Mode */}
        <button className="flex items-center gap-2 rounded-xl border border-[#d9c37f]/25 bg-[#182419]/80 px-4 py-2 text-[14px] font-medium text-[#f7f0dd] transition-colors hover:bg-[#223421]">
          <span className="text-[#d9c37f]">☼</span>
          <span>Mode</span>
        </button>
      </nav>
    </SectionCard>
  );
}
