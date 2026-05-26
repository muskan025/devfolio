// @ts-nocheck
import { SectionCard } from "./SectionCard";

export function SkillsCard({
  sliderSpeed = "medium",
  setSliderSpeed,
  sliderSpeeds = { slow: 0, medium: 15, fast: 5 },
  marqueeSkills = [],
  skillLogos = {},
}) {
  return (
    <SectionCard
      className="
        relative min-w-0 overflow-hidden rounded-[2rem]
        border border-[#d8c8a5]/50 bg-[#f1eadc]
        px-7 py-6
        shadow-[0_18px_45px_rgba(0,0,0,0.18)]
      "
    >
      {/* speed dots - functionality kept */}
      <div
        className="absolute right-7 top-7 flex items-center gap-2"
        aria-label="Slider speed controls"
      >
        <button
          type="button"
          onClick={() => setSliderSpeed?.("slow")}
          className="h-3.5 w-3.5 rounded-full border border-[#5f7345] bg-red-500"
          aria-label="Slow slider"
        />
        <button
          type="button"
          onClick={() => setSliderSpeed?.("medium")}
          className="h-3.5 w-3.5 rounded-full border border-[#5f7345] bg-yellow-400"
          aria-label="Medium slider"
        />
        <button
          type="button"
          onClick={() => setSliderSpeed?.("fast")}
          className="h-3.5 w-3.5 rounded-full border border-[#5f7345] bg-green-500"
          aria-label="Fast slider"
        />
      </div>

      <h3
        className="
          mb-5 text-[1rem] font-semibold uppercase
          tracking-[0.32em] text-[#263126]
        "
      >
        Skills
      </h3>

      <div
        className="
          relative min-w-0 overflow-hidden rounded-[1.35rem]
          border border-[#d8c8a5]/70 bg-[#fffaf0]/65
          px-5 py-4
        "
      >
        <div
          className="skills-marquee flex items-center gap-4"
          style={{
            ["--skills-duration"]: `${sliderSpeeds[sliderSpeed]}s`,
          }}
        >
          {marqueeSkills.map((tech, index) => (
            <span
              key={`${tech.name}-${index}`}
              className="
                flex h-12 min-w-[150px] items-center justify-center gap-3
                whitespace-nowrap rounded-full border border-[#b9aa8d]/70
                bg-[#fbf5e8]
                px-6 text-[1rem] font-semibold text-[#2b2b25]
                shadow-[0_3px_0_rgba(37,31,22,0.85)]
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-[#fffaf0]
              "
            >
              <span
                className="
                  flex h-6 w-6 items-center justify-center rounded-full
                  border border-[#5f7345]/40 bg-[#fff9ef]
                "
              >
                {skillLogos[tech.name] || tech.icon}
              </span>

              <span>{tech.name}</span>
            </span>
          ))}
        </div>

        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#fffaf0] to-transparent" />
      </div>
    </SectionCard>
  );
}