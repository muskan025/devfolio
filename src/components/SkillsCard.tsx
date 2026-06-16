// import { FaCode } from "react-icons/fa";
// import type { CSSProperties,JSX } from "react";
// import { SectionCard } from "./SectionCard";
// import { CardTitle } from "./CardTitle";

// type SliderSpeed = "slow" | "medium" | "fast";

// type Skill = {
//   name: string;
//   icon: JSX.Element;
// };

// type SkillsCardProps = {
//   sliderSpeed?: SliderSpeed;
//   setSliderSpeed?: (speed: SliderSpeed) => void;
//   sliderSpeeds?: Record<SliderSpeed, number>;
//   marqueeSkills?: Skill[];
//   skillLogos?: Record<string, JSX.Element>;
// };

// export function SkillsCard({
//   sliderSpeed = "medium",
//   setSliderSpeed,
//   sliderSpeeds = { slow: 0, medium: 15, fast: 20 },
//   marqueeSkills = [],
//   skillLogos = {},
// }: SkillsCardProps) {
//   return (
//     <SectionCard
//       className="
//         relative min-w-0 overflow-hidden rounded-[2rem]
//         border border-[#d8c8a5]/50 bg-[#f1eadc]
//         px-7 py-6
//         shadow-[0_18px_45px_rgba(0,0,0,0.18)]
//       "
//     >
//       {/* speed dots - functionality kept */}
//       <div
//         className="absolute right-7 top-7 flex items-center gap-2"
//         aria-label="Slider speed controls"
//       >
//         <button
//           type="button"
//           onClick={() => setSliderSpeed?.("slow")}
//           className="h-3.5 w-3.5 rounded-full   bg-red-500"
//           aria-label="Slow slider"
//         />
//         <button
//           type="button"
//           onClick={() => setSliderSpeed?.("medium")}
//           className="h-3.5 w-3.5 rounded-full   bg-yellow-400"
//           aria-label="Medium slider"
//         />
//         <button
//           type="button"
//           onClick={() => setSliderSpeed?.("fast")}
//           className="h-3.5 w-3.5 rounded-full   bg-green-500"
//           aria-label="Fast slider"
//         />
//       </div>

//        <CardTitle
//         className="mb-5 pr-24"
//         icon={FaCode}
//         iconClassName="text-xs"
//         lineClassName="flex-1 bg-[#d0b36f]/70"
//         title="Skills"
//         titleClassName="text-[#263126]"
//       />

//       <div
//         className="
//           relative min-w-0 overflow-hidden rounded-[1.35rem]
//           border border-[#d8c8a5]/70 bg-[#fffaf0]/65
//           px-5 py-4
//         "
//       >
//         <div
//           className="skills-marquee flex items-center gap-4"
//           style={{
//             "--skills-duration": `${sliderSpeeds[sliderSpeed]}s`,
//           } as CSSProperties}
//         >
//           {marqueeSkills.map((tech, index) => (
//             <span
//               key={`${tech.name}-${index}`}
//               className="
//                 flex h-12 min-w-[150px] items-center justify-center gap-3
//                 whitespace-nowrap rounded-full border border-[#b9aa8d]/70
//                 bg-[#fbf5e8]
//                 px-6 text-[1rem] font-semibold text-[#2b2b25]
//                 shadow-[0_3px_0_rgba(37,31,22,0.85)]
//                 transition-all duration-300
//                 hover:-translate-y-0.5 hover:bg-[#fffaf0]
//               "
//             >
//               <span
//                 className="
//                   flex h-6 w-6 items-center justify-center rounded-full
//                   border border-[#5f7345]/40 bg-[#fff9ef]
//                 "
//               >
//                 {skillLogos[tech.name] || tech.icon}
//               </span>

//               <span>{tech.name}</span>
//             </span>
//           ))}
//         </div>

//         <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#fffaf0] to-transparent" />
//       </div>
//     </SectionCard>
//   );
// }

import { FaCode } from "react-icons/fa";
import type { JSX } from "react";
import { SectionCard } from "./SectionCard";
import { CardTitle } from "./CardTitle";

type SliderSpeed = "slow" | "medium" | "fast";

type Skill = {
  name: string;
  icon: JSX.Element;
};

type SkillsCardProps = {
  sliderSpeed?: SliderSpeed;
  setSliderSpeed?: (speed: SliderSpeed) => void;
  marqueeSkills?: Skill[];
  skillLogos?: Record<string, JSX.Element>;
};

export function SkillsCard({
  sliderSpeed = "fast",
  setSliderSpeed,
  marqueeSkills = [],
  skillLogos = {},
}: SkillsCardProps) {
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
      {/* <div
        className="absolute right-7 top-7 flex items-center gap-2"
        aria-label="Slider speed controls"
      >
        <button
          type="button"
          onClick={() => setSliderSpeed?.("slow")}
          className={`h-3.5 w-3.5 rounded-full bg-red-500 ${sliderSpeed === "slow" ? "ring-2 ring-[#263126] ring-offset-2 ring-offset-[#f1eadc]" : ""}`}
          aria-label="Slow slider"
        />
        <button
          type="button"
          onClick={() => setSliderSpeed?.("medium")}
          className={`h-3.5 w-3.5 rounded-full bg-yellow-400 ${sliderSpeed === "medium" ? "ring-2 ring-[#263126] ring-offset-2 ring-offset-[#f1eadc]" : ""}`}
          aria-label="Medium slider"
        />
        <button
          type="button"
          onClick={() => setSliderSpeed?.("fast")}
          className={`h-3.5 w-3.5 rounded-full bg-green-500 ${sliderSpeed === "fast" ? "ring-2 ring-[#263126] ring-offset-2 ring-offset-[#f1eadc]" : ""}`}
          aria-label="Fast slider"
        />
      </div> */}

       <CardTitle
        className="mb-5 pr-24"
        icon={FaCode}
        iconClassName="text-xs"
        lineClassName="flex-1 bg-[#d0b36f]/70"
        title="Skills"
        titleClassName="text-[#263126]"
      />

      <div
        className="
          relative min-w-0 rounded-[1.35rem]
          border border-[#d8c8a5]/70 bg-[#fffaf0]/65
          px-5 py-4
        "
      >
        <div className="skills-marquee grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          {/* {marqueeSkills.map((tech, index) => (
            <span
              key={`${tech.name}-${index}`}
              className="
                flex h-12 min-w-0 items-center justify-center gap-3
                whitespace-nowrap rounded-full border border-[#b9aa8d]/70
                bg-[#fbf5e8]
                px-4 text-[0.95rem] font-semibold text-[#2b2b25]
                shadow-[0_3px_0_rgba(37,31,22,0.85)]
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-[#fffaf0]
              "
            >
              <span
                className="
                  flex h-6 w-6 shrink-0 items-center justify-center rounded-full
                  border border-[#5f7345]/40 bg-[#fff9ef]
                "
              >
                {skillLogos[tech.name] || tech.icon}
              </span>

              <span className="truncate">{tech.name}</span>
            </span>
          ))} */}

          {marqueeSkills.map((tech, index) => (
  <span
    key={`${tech.name}-${index}`}
    title={tech.name}
    className="
      flex h-12 min-w-0 items-center justify-center gap-3
      whitespace-nowrap rounded-full border border-[#b9aa8d]/70
      bg-[#fbf5e8]
      px-4 text-[0.95rem] font-semibold text-[#2b2b25]
      shadow-[0_3px_0_rgba(37,31,22,0.85)]
      transition-all duration-300
      hover:-translate-y-0.5 hover:bg-[#fffaf0]
    "
  >
    <span
      className="
        flex h-6 w-6 shrink-0 items-center justify-center rounded-full
        border border-[#5f7345]/40 bg-[#fff9ef]
      "
    >
      {skillLogos[tech.name] || tech.icon}
    </span>

    <span title={tech.name} className="truncate">
      {tech.name}
    </span>
  </span>
))}
        </div>
        
      </div>
    </SectionCard>
  );
}