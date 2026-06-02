import { FaSeedling } from "react-icons/fa";
import { SectionCard } from "./SectionCard";
import { learningItems } from "../data/portfolioData";
import { CARD_CONTAINER, CHIP, MUTED_TEXT } from "../constants/styles";

export function LearningCard() {
  return (
    <SectionCard className={`self-start relative overflow-hidden ${CARD_CONTAINER} bg-[#f4efe2]/95 text-[#243026] border-[#d8ccb6]`}>
      <div className="absolute -right-10 -top-20 h-30 w-32 rounded-full bg-[#ffd166]/30 blur-3xl" />
      <div className="relative z-10">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#506833]/50 bg-[#2f481f] text-[#d9c37f] shadow-[0_8px_18px_rgba(0,0,0,0.18)]"
          >
            <FaSeedling className="text-xs" aria-hidden="true" />
          </span>

          <h4 className="text-[0.95rem] font-semibold uppercase tracking-[0.24em] text-[#2a352b]">
            Current Learning
          </h4>
                    <span className="h-px min-w-10 flex-1 bg-[#d0b36f]/70" />
          <span className={`${CHIP} px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]`}>
            In Progress
          </span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {learningItems.map((item) => (
            <div
              key={item}
              className="group flex items-center gap-2 rounded-full border border-[#c8bca7] bg-[#f8f2e6] px-3.5 py-1.5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-[#8ca069] hover:bg-[#ebf0df] hover:text-[#243026]"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 transition-colors group-hover:bg-[#ffd166]" />
              {item}
            </div>
          ))}
        </div>
        <p className={`mt-4 text-base leading-7 ${MUTED_TEXT}`}>
          Building deeper backend architecture skills and scalable systems with
          curiosity, caffeine, and occasional existential debugging.
        </p>
      </div>
    </SectionCard>
  );
}