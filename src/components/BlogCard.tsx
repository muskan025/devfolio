
import { SectionCard } from './SectionCard';
import { blogPreviewData } from '../data/portfolioData';
import { BUTTON, CARD_CONTAINER, CARD_HEADER, SECTION_TITLE } from '../constants/styles';

type BlogPost = { title: string; link: string; pubDate?: string; cover_image: string };

type BlogCardProps = {
  latestPost?: BlogPost | null;
};

export function BlogCard({latestPost = null}:{latestPost?: BlogPost | null}) {
  return (
  <SectionCard className={`${CARD_CONTAINER} h-full bg-[#f4efe2]/95 text-[#243026] border-[#d8ccb6]`}>
      <div className={CARD_HEADER}>
        <h3 className={SECTION_TITLE}>Blogs →</h3>
        <a href={blogPreviewData.viewAllUrl} target="_blank" rel="noopener noreferrer" className={BUTTON}>
          View All
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>

      <div className="rounded-2xl border border-[#d5c8b2] bg-[#f9f3e7] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_28px_rgba(0,0,0,0.08)]">
        {latestPost ? (
          <article
            className="group relative min-h-[9.5rem] overflow-hidden rounded-xl border border-[#d6c8b0] bg-[#1c2335] bg-cover bg-center"
            style={{ backgroundImage: latestPost.cover_image ? `url(${latestPost.cover_image})`: undefined }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1021]/90 via-[#0b1021]/72 to-[#0b1021]/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_50%)]" />

            <div className="relative z-10 flex h-full flex-col justify-end p-4 lg:p-5 text-[#fffdf8]">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#f1d28b]">
                {blogPreviewData.latestPostLabel}
              </p>

              <a
                href={latestPost.link || blogPreviewData.viewAllUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block max-w-3xl text-lg font-semibold leading-snug tracking-[0.01em] text-[#fffcf2] transition-colors duration-300 hover:text-[#f4dca4]"
              >
                {latestPost.title || blogPreviewData.latestPostLabel}
              </a>

              <p className="mt-3 text-sm font-medium text-[#efe4c9]/90">
                {latestPost.pubDate ? new Date(latestPost.pubDate).toLocaleDateString() : blogPreviewData.fallbackDateText}
              </p>
            </div>
          </article>
        ) : (
          <p className="text-sm leading-7 text-[#4f5a4f]">{blogPreviewData.loadingText}</p>
        )}
      </div>
    </SectionCard>
  );
}