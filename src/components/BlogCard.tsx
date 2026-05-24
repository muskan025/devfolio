// @ts-nocheck
import { SectionCard } from './SectionCard';
import { blogPreviewData } from '../data/portfolioData';

export function BlogCard({ latestPost }) {
  return (
    <SectionCard className="rounded-[2rem] border-2 border-[#1d1d1b] bg-[rgba(235,244,248,0.5)] backdrop-blur-md p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)]">
      <div className="mb-4 flex items-center justify-between"><h3 className="text-3xl uppercase">Blogs →</h3><a href={blogPreviewData.viewAllUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-xl border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-1.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d1d1b] hover:text-[#fffdf8]">View All<span className="transition-transform duration-300 group-hover:translate-x-1">→</span></a></div>
      <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">{latestPost ? <div className="relative h-48 overflow-hidden rounded-xl border-2 border-[#1d1d1b] bg-cover bg-center" style={{ backgroundImage: `url(${latestPost.cover_image})` }}><div className="absolute inset-0 bg-black/40" /><div className="absolute bottom-0 left-0 z-10 p-4 text-[#fffdf8]"><p className="text-xs uppercase tracking-wide opacity-80">{blogPreviewData.latestPostLabel}</p><a href={latestPost.link} target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg font-semibold hover:underline">{latestPost.title}</a><p className="mt-1 text-sm opacity-80">{latestPost.pubDate ? new Date(latestPost.pubDate).toLocaleDateString() : blogPreviewData.fallbackDateText}</p></div></div> : <p className="text-sm">{blogPreviewData.loadingText}</p>}</div>
    </SectionCard>
  );
}