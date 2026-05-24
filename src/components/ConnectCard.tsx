// @ts-nocheck
import { SectionCard } from './SectionCard';
import { BORDERED_PANEL, CARD_CONTAINER, CARD_HEADER, ICON_CIRCLE, SECTION_TITLE } from '../constants/styles';

export function ConnectCard({ socialLinks }) {
  return (
   <SectionCard className={`${CARD_CONTAINER} h-full bg-[rgba(248,242,235,0.5)] backdrop-blur-md`}>      <div className={CARD_HEADER}><h3 className={SECTION_TITLE}>Connect →</h3></div>
      <div className={BORDERED_PANEL}><div className="inline-flex  flex-wrap gap-2">{socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" title={social.name} aria-label={social.name} className={ICON_CIRCLE}>{social.icon}</a>)}</div></div>
    </SectionCard>
  );
}