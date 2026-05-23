import { timelineData } from "./timelineData";
import TimelineDemo from "./components/timeline-demo";
import { FaArrowLeft } from "react-icons/fa";

export const ProjectTimeline = () => {
 return (
    <main className="relative min-h-screen overflow-hidden text-[#2f2a22]">
      <div className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/wild-forest-bg.png')` }} />
      <div className="fixed inset-0 -z-10 bg-black/20" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:px-8">
        <header className="mb-8 rounded-3xl border-2 border-[#1d1d1b] bg-[rgba(235,244,248,0.5)] px-5 py-4 backdrop-blur-md shadow-[4px_4px_0_#1d1d1b]">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm uppercase tracking-[0.18em]">Muskan.dev • Journey</p>
            <a href="/" className="inline-flex items-center gap-2 rounded-full border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-1 text-sm shadow-[2px_2px_0_#1d1d1b]">
              <FaArrowLeft className="text-xs" /> Back to portfolio
            </a>
          </div>
        </header>

        <TimelineDemo data={timelineData} />
      </div>
    </main>
  );
};
