
import { timelineData } from "./timelineData";
import TimelineDemo from "./components/timeline-demo";
import { Navbar } from "./components/navbar";
import { FaArrowLeft } from "react-icons/fa";

export const ProjectTimeline = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden px-5 py-7 text-[#2f2a22] sm:px-6">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/wild-forest-bg.webp')` }}
      />
      <div className="fixed inset-0 -z-10 bg-[#07120d]/70" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#030906]/65 via-[#07120d]/35 to-[#020704]/75" />

      <div className="mx-auto w-full max-w-6xl space-y-6 pb-20">
        <Navbar logoHref="/">
          <a
            href="/"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#d9c37f]/25 bg-[#182419]/80 px-4 py-2 text-sm font-semibold text-[#f7f0dd] shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#223421] hover:text-[#fff8df]"
          >
            <FaArrowLeft className="text-xs text-[#d9c37f]" /> Back to portfolio
          </a>
        </Navbar>

        <TimelineDemo data={timelineData} />
      </div>
    </main>
  );
};