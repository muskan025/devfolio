// @ts-nocheck
import { SectionCard } from './SectionCard';

export function ConnectCard({ socialLinks }) {
  return (
    <SectionCard className="self-start rounded-[2rem] border-2 border-[#1d1d1b] bg-[rgba(248,242,235,0.5)] backdrop-blur-md p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)]">
      <div className="mb-4 flex items-center justify-between"><h3 className="text-3xl uppercase">Connect →</h3></div>
      <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4"><div className="inline-flex  flex-wrap gap-2">{socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" title={social.name} aria-label={social.name} className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1d1d1b] text-base hover:bg-[#f6f2e8]">{social.icon}</a>)}</div></div>
    </SectionCard>
  );
}