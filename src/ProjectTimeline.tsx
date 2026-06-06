// import { timelineData } from "./timelineData";
// import TimelineDemo from "./components/timeline-demo";
// import { FaArrowLeft } from "react-icons/fa";

// export const ProjectTimeline = () => {
//  return (
//     <main className="relative min-h-screen overflow-hidden text-[#2f2a22]">
//       <div className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/wild-forest-bg.png')` }} />
//       <div className="fixed inset-0 -z-10 bg-black/20" />
//       <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

//       <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:px-8">
//         <header className="mb-8 rounded-3xl border-2 border-[#1d1d1b] bg-[rgba(235,244,248,0.5)] px-5 py-4 backdrop-blur-md shadow-[4px_4px_0_#1d1d1b]">
//           <div className="flex items-center justify-between gap-3">
//             <p className="text-sm uppercase tracking-[0.18em]">Muskan.dev • Journey</p>
//             <a href="/" className="inline-flex items-center gap-2 rounded-full border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-1 text-sm shadow-[2px_2px_0_#1d1d1b]">
//               <FaArrowLeft className="text-xs" /> Back to portfolio
//             </a>
//           </div>
//         </header>

//         <TimelineDemo data={timelineData} />
//       </div>
//     </main>
//   );
// };

import { timelineData } from "./timelineData";
import TimelineDemo from "./components/timeline-demo";
import { FaArrowLeft, FaLeaf } from "react-icons/fa";

export const ProjectTimeline = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden px-5 py-7 text-[#2f2a22] sm:px-6">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/wild-forest-bg.png')` }}
      />
      <div className="fixed inset-0 -z-10 bg-[#07120d]/72" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#030906]/70 via-[#07120d]/38 to-[#020704]/78" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(217,195,127,0.12),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(140,160,105,0.14),transparent_32%)]" />

      <div className="mx-auto w-full max-w-6xl space-y-6 pb-20">
        <header className="w-full rounded-2xl border border-[#d9c37f]/30 bg-[#0d1a12]/85 px-5 py-3 text-[#f7f0dd] shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-md">
          <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]"
            >
               <img
            src="/favicon.png"
            alt="Muskan.dev logo"
            className="h-12 w-12.1 rounded-sm object-contain"
          />
              <span>Muskan.dev</span>
            </a>

            <a
              href="/"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#d9c37f]/25 bg-[#182419]/80 px-4 py-2 text-sm font-semibold text-[#f7f0dd] shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#223421] hover:text-[#fff8df]"
            >
              <FaArrowLeft className="text-xs text-[#d9c37f]" /> Back to portfolio
            </a>
          </nav>
        </header>

        <TimelineDemo data={timelineData} />
      </div>
    </main>
  );
};