

// import { FaCode } from "react-icons/fa";
// import type { JSX } from "react";
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
//   marqueeSkills?: Skill[];
//   skillLogos?: Record<string, JSX.Element>;
// };

// export function SkillsCard({
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
//       {/* <div
//         className="absolute right-7 top-7 flex items-center gap-2"
//         aria-label="Slider speed controls"
//       >
//         <button
//           type="button"
//           onClick={() => setSliderSpeed?.("slow")}
//           className={`h-3.5 w-3.5 rounded-full bg-red-500 ${sliderSpeed === "slow" ? "ring-2 ring-[#263126] ring-offset-2 ring-offset-[#f1eadc]" : ""}`}
//           aria-label="Slow slider"
//         />
//         <button
//           type="button"
//           onClick={() => setSliderSpeed?.("medium")}
//           className={`h-3.5 w-3.5 rounded-full bg-yellow-400 ${sliderSpeed === "medium" ? "ring-2 ring-[#263126] ring-offset-2 ring-offset-[#f1eadc]" : ""}`}
//           aria-label="Medium slider"
//         />
//         <button
//           type="button"
//           onClick={() => setSliderSpeed?.("fast")}
//           className={`h-3.5 w-3.5 rounded-full bg-green-500 ${sliderSpeed === "fast" ? "ring-2 ring-[#263126] ring-offset-2 ring-offset-[#f1eadc]" : ""}`}
//           aria-label="Fast slider"
//         />
//       </div> */}

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
//           relative min-w-0 rounded-[1.35rem]
//           border border-[#d8c8a5]/70 bg-[#fffaf0]/65
//           px-5 py-4
//         "
//       >
//         <div className="skills-marquee grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
//           {/* {marqueeSkills.map((tech, index) => (
//             <span
//               key={`${tech.name}-${index}`}
//               className="
//                 flex h-12 min-w-0 items-center justify-center gap-3
//                 whitespace-nowrap rounded-full border border-[#b9aa8d]/70
//                 bg-[#fbf5e8]
//                 px-4 text-[0.95rem] font-semibold text-[#2b2b25]
//                 shadow-[0_3px_0_rgba(37,31,22,0.85)]
//                 transition-all duration-300
//                 hover:-translate-y-0.5 hover:bg-[#fffaf0]
//               "
//             >
//               <span
//                 className="
//                   flex h-6 w-6 shrink-0 items-center justify-center rounded-full
//                   border border-[#5f7345]/40 bg-[#fff9ef]
//                 "
//               >
//                 {skillLogos[tech.name] || tech.icon}
//               </span>

//               <span className="truncate">{tech.name}</span>
//             </span>
//           ))} */}

//           {marqueeSkills.map((tech, index) => (
//   // <span
//   //   key={`${tech.name}-${index}`}
//   //   title={tech.name}
//   //   className="
//   //     flex h-12 min-w-0 items-center justify-center gap-3
//   //     whitespace-nowrap rounded-full border border-[#b9aa8d]/70
//   //     bg-[#fbf5e8]
//   //     px-4 text-[0.95rem] font-semibold text-[#2b2b25]
//   //     shadow-[0_3px_0_rgba(37,31,22,0.85)]
//   //     transition-all duration-300
//   //     hover:-translate-y-0.5 hover:bg-[#fffaf0]
//   //   "
//   // >
//     <span
//     key={`${tech.name}-${index}`}
//     title={tech.name}
//     className="
//       flex h-8 min-w-0 items-center justify-center gap-1
//       whitespace-nowrap  
//       px-2 text-[0.75rem] font-semibold text-[#2b2b25]
      
//       transition-all duration-300
//       hover:-translate-y-0.5 hover:bg-[#fffaf0]
//     "
//   >
//     <span
//       className="
//         flex h-6 w-6 shrink-0 items-center justify-center rounded-full
//         border border-[#5f7345]/40 bg-[#fff9ef]
//       "
//     >
//       {skillLogos[tech.name] || tech.icon}
//     </span>

//     <span title={tech.name} className="truncate">
//       {tech.name}
//     </span>
//   </span>
// ))}
//         </div>
        
//       </div>
//     </SectionCard>
//   );
// }

import { useMemo, useState } from "react";
import { FaCode } from "react-icons/fa";
import type { JSX } from "react";
import { SectionCard } from "./SectionCard";
import { CardTitle } from "./CardTitle";

type SliderSpeed = "slow" | "medium" | "fast";

type Skill = {
  name: string;
  icon: JSX.Element;
};

type SkillCategoryKey = "backend" | "database" | "frontend" | "tools";

type SkillCategory = {
  key: SkillCategoryKey;
  label: string;
  description: string;
  skills: string[];
};

type SkillsCardProps = {
  sliderSpeed?: SliderSpeed;
  setSliderSpeed?: (speed: SliderSpeed) => void;
  marqueeSkills?: Skill[];
  skillLogos?: Record<string, JSX.Element>;
};

const skillCategories: SkillCategory[] = [
  {
    key: "backend",
    label: "Backend",
    description: "APIs, auth, and server-side systems",
    skills: ["Node.js", "Express.js", "TypeScript", "JWT Auth"],
  },
  {
    key: "database",
    label: "Database & Queues",
    description: "Data modeling, caching, and async jobs",
    skills: ["MongoDB", "Mongoose", "Redis", "BullMQ"],
  },
  {
    key: "frontend",
    label: "Frontend",
    description: "Interfaces, state, and styling",
    skills: ["React", "Redux", "Tailwind"],
  },
  {
    key: "tools",
    label: "Tools & Cloud",
    description: "Workflow, testing, containers, and storage",
    skills: ["GitHub", "Postman", "AWS S3"],
  },
];

export function SkillsCard({
  marqueeSkills = [],
  skillLogos = {},
}: SkillsCardProps) {
  const [activeCategory, setActiveCategory] = useState<SkillCategoryKey>("backend");

  const skillsByName = useMemo(
    () => new Map(marqueeSkills.map((skill) => [skill.name, skill])),
    [marqueeSkills]
  );

  const selectedCategory =
    skillCategories.find((category) => category.key === activeCategory) ?? skillCategories[0];

  const getSkillIcon = (skillName: string) => {
    return skillLogos[skillName] || skillsByName.get(skillName)?.icon || <FaCode />;
  };

  return (
    <SectionCard
      className="
        relative min-w-0 overflow-hidden rounded-[2rem]
        border border-[#d8c8a5]/50 bg-[#f1eadc]
        px-7 py-6
        shadow-[0_18px_45px_rgba(0,0,0,0.18)]
      "
    >
      <CardTitle
        className="mb-4 pr-10"
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
          p-3.5 sm:p-4
        "
      >
        <div className="mb-4 flex flex-wrap gap-2" aria-label="Skill categories">
          {skillCategories.map((category) => {
            const isActive = category.key === activeCategory;

            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                className={`
                  rounded-full border px-3 py-1.5 text-[0.72rem] font-bold
                  transition-all duration-200 sm:text-xs
                  ${
                    isActive
                      ? "border-[#5f7345] bg-[#5f7345] text-[#fff7e8] shadow-[0_3px_0_rgba(37,49,38,0.75)]"
                      : "border-[#d8c8a5]/80 bg-[#fbf5e8] text-[#4b4030] hover:-translate-y-0.5 hover:border-[#9aa36f] hover:bg-[#fffaf0]"
                  }
                `}
                aria-pressed={isActive}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="rounded-[1rem] border border-[#e1d3b7]/70 bg-[#f8efdD]/65 p-3 shadow-inner">
          {/* <p className="mb-3 text-sm font-semibold leading-snug text-[#5b503f]">
            {selectedCategory.description}
          </p> */}

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {selectedCategory.skills.map((skillName) => (
              <div
                key={skillName}
                title={skillName}
                className="
                  flex min-w-0 items-center gap-2.5 rounded-xl
                  border border-[#d6c5a4]/75 bg-[#fffaf0]
                  px-3 py-2 text-sm font-bold text-[#2b2b25]
                  shadow-[0_2px_0_rgba(95,82,55,0.55)]
                  transition-all duration-200 hover:-translate-y-0.5 hover:border-[#9aa36f]
                "
              >
                <span
                  className="
                    flex h-7 w-7 shrink-0 items-center justify-center rounded-full
                    border border-[#5f7345]/35 bg-[#f3ead8] text-base text-[#5f7345]
                  "
                  aria-hidden="true"
                >
                  {getSkillIcon(skillName)}
                </span>

                <span className="min-w-0 whitespace-normal leading-tight">{skillName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}