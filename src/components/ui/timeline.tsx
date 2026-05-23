"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

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
      className="w-full overflow-hidden rounded-[2rem] border-2 border-[#1d1d1b] bg-[rgba(248,242,235,0.62)] px-3 py-6 backdrop-blur-md shadow-[0_12px_35px_rgba(0,0,0,0.18)] md:px-8"
      ref={containerRef}
    >
      <div className="mx-auto max-w-5xl px-2 pb-6 md:px-6">
        <h2 className="mb-2 text-2xl font-semibold text-[#2f2a22] md:text-4xl">
          Journey through my career
        </h2>
        <p className="max-w-2xl text-sm text-[#5f5648] md:text-base">
          A timeline of key roles, projects, and moments that shaped my work as a software engineer.
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-5xl pb-8">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start gap-2 pt-8 md:gap-10 md:pt-16">
            <div className="sticky top-28 z-40 flex max-w-xs self-start md:w-full lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1d1d1b] bg-[#fffdf8]">
                <div className="h-3 w-3 rounded-full bg-[#6b7b4a]" />
              </div>
              <h3 className="hidden pl-20 text-3xl font-bold text-[#5f5648] md:block">{item.title}</h3>
            </div>

            <div className="w-full pl-16 pr-1 md:pl-4 md:pr-4">
              <h3 className="mb-3 block text-2xl font-bold text-[#5f5648] md:hidden">{item.title}</h3>
              <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8]/90 p-5 shadow-[4px_4px_0_#1d1d1b]">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-[#b6b1a8] to-transparent"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[#6b7b4a] via-[#f0a64e] to-transparent"
          />
        </div>
      </div>
    </section>
  );
};