"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

// export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <section
//       className="w-full overflow-hidden rounded-[2rem] border-2 border-[#1d1d1b] bg-[rgba(248,242,235,0.62)] px-3 py-6 backdrop-blur-md shadow-[0_12px_35px_rgba(0,0,0,0.18)] md:px-8"
//       ref={containerRef}
//     >
//       <div className="mx-auto max-w-5xl px-2 pb-6 md:px-6">
//         <h2 className="mb-2 text-2xl font-semibold text-[#2f2a22] md:text-4xl">
//           Journey through my career
//         </h2>
//         <p className="max-w-2xl text-sm text-[#5f5648] md:text-base">
//           A timeline of key roles, projects, and moments that shaped my work as a software engineer.
//         </p>
//       </div>

//       <div ref={ref} className="relative mx-auto max-w-5xl pb-8">
//         {data.map((item, index) => (
//           <div key={index} className="flex justify-start gap-2 pt-8 md:gap-10 md:pt-16">
//             <div className="sticky top-28 z-40 flex max-w-xs self-start md:w-full lg:max-w-sm">
//               <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1d1d1b] bg-[#fffdf8]">
//                 <div className="h-3 w-3 rounded-full bg-[#6b7b4a]" />
//               </div>
//               <h3 className="hidden pl-20 text-3xl font-bold text-[#5f5648] md:block">{item.title}</h3>
//             </div>

//             <div className="w-full pl-16 pr-1 md:pl-4 md:pr-4">
//               <h3 className="mb-3 block text-2xl font-bold text-[#5f5648] md:hidden">{item.title}</h3>
//               <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8]/90 p-5 shadow-[4px_4px_0_#1d1d1b]">
//                 {item.content}
//               </div>
//             </div>
//           </div>
//         ))}

//         <div
//           style={{ height: `${height}px` }}
//           className="absolute left-8 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-[#b6b1a8] to-transparent"
//         >
//           <motion.div
//             style={{ height: heightTransform, opacity: opacityTransform }}
//             className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[#6b7b4a] via-[#f0a64e] to-transparent"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section
      className="relative w-full overflow-hidden rounded-[1.7rem] border border-[#d8ccb6] bg-[#f4efe2]/95 px-4 py-8 text-[#243026] shadow-[0_26px_80px_rgba(0,0,0,0.26)] backdrop-blur-md sm:px-6 md:px-8 md:py-10"
      ref={containerRef}
    >
      <div className="pointer-events-none absolute -left-24 top-16 h-48 w-48 rounded-full bg-[#8ca069]/16 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#d0b36f]/20 blur-3xl" />
      <img
        src="/learning-forest.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[34rem] w-[58%] min-w-[320px] object-contain object-right-bottom opacity-20 mix-blend-multiply"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-3/5 bg-gradient-to-r from-[#f4efe2] via-[#f4efe2]/78 to-[#f4efe2]/30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#efe2cc]/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-1 pb-8 md:px-4">
        <span className="mb-3 inline-flex rounded-full border border-[#cfc1aa] bg-[#fbf6ec]/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6f633f] shadow-[0_8px_20px_rgba(14,20,16,0.06)]">
          Career path
        </span>
        <h2 className="font-serif text-3xl font-semibold leading-tight text-[#243026] md:text-5xl">
          Journey through my career
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#4f5a4f] md:text-base">
A project-based journey through the systems I worked on, often in parallel, while growing from internship responsibilities to backend ownership.        </p>
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-5xl pb-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 pt-9 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-8 md:pt-14"
          >
            <div className="sticky top-28 z-20 self-start md:flex md:items-start">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#d8ccb6] bg-[#fbf6ec] shadow-[0_10px_24px_rgba(45,57,47,0.14)]">
                <div className="absolute inset-1 rounded-full border border-[#d0b36f]/30" />
                <div className="h-3 w-3 rounded-full bg-[#6f7e52] shadow-[0_0_0_5px_rgba(140,160,105,0.14)]" />
              </div>
              <h3 className="hidden pl-7 text-2xl font-semibold tracking-[0.08em] text-[#5a513d] md:block lg:text-3xl">
                {item.title}
              </h3>
            </div>

            <div className="min-w-0 pr-1 md:pr-4">
              <h3 className="mb-3 block text-xl font-semibold tracking-[0.08em] text-[#5a513d] md:hidden">
                {item.title}
              </h3>
              <div className="group rounded-2xl border border-[#d8ccb6] bg-[#fffaf0]/92 p-5 text-[#2f392f] shadow-[0_16px_34px_rgba(30,41,32,0.12),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8ca069]/75 hover:shadow-[0_22px_42px_rgba(30,41,32,0.16),inset_0_1px_0_rgba(255,255,255,0.72)] sm:p-6">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        <div
          style={{ height: `${height}px` }}
          className="absolute left-[1.35rem] top-0 w-px overflow-hidden bg-gradient-to-b from-transparent via-[#d0b36f55] to-transparent md:left-[1.35rem]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-px rounded-full bg-gradient-to-t from-[#8ca06955] via-[#d0b36f99] to-transparent"
          />
        </div>
      </div>
    </section>
  );
};