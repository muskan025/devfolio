// @ts-nocheck
import { SectionCard } from "./SectionCard";

export function LearningCard() {
  return (
    <SectionCard className="self-start relative overflow-hidden rounded-[2rem] border-2 border-[#1d1d1b] bg-[rgba(255,248,235,0.45)] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)]">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#ffd166]/30 blur-3xl" />
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-2xl uppercase tracking-wide">
            Currently Learning
          </h4>
          <span className="rounded-full border-2 border-[#1d1d1b] bg-[#fffdf8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]">
            In Progress
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          {["AI integration", "AWS EC2", "Docker"].map((item) => (
            <div
              key={item}
              className="group flex items-center gap-2 rounded-full border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-[#1d1d1b] hover:text-[#fffdf8]"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 transition-colors group-hover:bg-[#ffd166]" />
              {item}
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-relaxed text-[#4b463d]">
          Building deeper backend architecture skills and scalable systems with
          curiosity, caffeine, and occasional existential debugging.
        </p>
      </div>
    </SectionCard>
  );
}
