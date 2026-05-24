// @ts-nocheck
import { SectionCard } from './SectionCard';
import { blogPreviewData } from '../data/portfolioData';
import { BORDERED_PANEL, BUTTON, CARD_CONTAINER, CARD_HEADER, SECTION_TITLE } from '../constants/styles';

export function BlogCard({ latestPost }) {
  return (
   <SectionCard className={`${CARD_CONTAINER} h-full bg-[rgba(235,244,248,0.5)] backdrop-blur-md`}>      <div className={CARD_HEADER}><h3 className={SECTION_TITLE}>Blogs →</h3><a href={blogPreviewData.viewAllUrl} target="_blank" rel="noopener noreferrer" className={BUTTON}>View All<span className="transition-transform duration-300 group-hover:translate-x-1">→</span></a></div>
      <div className={BORDERED_PANEL}>{latestPost ? <div className="relative h-48 overflow-hidden rounded-xl border-2 border-[#1d1d1b] bg-cover bg-center" style={{ backgroundImage: `url(${latestPost.cover_image})` }}><div className="absolute inset-0 bg-black/40" /><div className="absolute bottom-0 left-0 z-10 p-4 text-[#fffdf8]"><p className="text-xs uppercase tracking-wide opacity-80">{blogPreviewData.latestPostLabel}</p><a href={latestPost.link} target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg font-semibold hover:underline">{latestPost.title}</a><p className="mt-1 text-sm opacity-80">{latestPost.pubDate ? new Date(latestPost.pubDate).toLocaleDateString() : blogPreviewData.fallbackDateText}</p></div></div> : <p className="text-sm">{blogPreviewData.loadingText}</p>}</div>
    </SectionCard>
  );
}