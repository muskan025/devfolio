import { MouseEvent } from "react";
import { FaArrowRight, FaMountain } from "react-icons/fa";
import { SectionCard } from "./SectionCard";
import type { Project } from "../data/portfolioData";
import { CardTitle } from "./CardTitle";
import { navigateToPath } from "../utils/navigation";

type ProjectsCardProps = {
  projects: Project[];
};

export function ProjectsCard({ projects }: ProjectsCardProps) {
   const handleTimelineClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    event.preventDefault();
    navigateToPath('/timeline');
  };

  return (
    <SectionCard
      className="
        relative h-full min-h-[330px] overflow-hidden rounded-[1.45rem]
        border border-[#d9c37f]/35 p-0
        shadow-[0_18px_50px_rgba(0,0,0,0.28)]
      "
    >
      <div className="absolute inset-0">
  <img
    src="/forest-river.webp"
    alt=""
    loading="lazy"
     className="h-full w-full object-cover"
  />
</div>
      {/* overlays */}
      <div className="absolute inset-0 bg-[#07120d]/25" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#07120d]/35 via-transparent to-[#d6b66c]/15" />


      <div className="relative z-10 flex h-full flex-col px-5 py-5">
        {/* header */}
        <CardTitle
          className="mb-4"
          icon={FaMountain}
          iconWrapperClassName="border-[#506833]/50 bg-[#2f481f] text-[#d9c37f] shadow-[0_8px_18px_rgba(0,0,0,0.22)]"
          lineClassName="bg-[#d0b36f]/40"
          title="Projects"
          titleClassName="text-[#f5eddc]"
        />

         
          {/* project list */}
        <div
          className="
            relative ml-0 w-[200px] rounded-[1rem]
            border border-[#d8c9aa]/70 bg-[#f3ead8]/95
            px-5 py-3.5 text-[#1f2119]
            shadow-[0_14px_35px_rgba(0,0,0,0.22)]
            backdrop-blur-md
          "
        >
          <div>
            {projects.map((project, index) => (
              <p
                key={project.title}
              
                className="
                  block py-2 text-[0.88rem] font-medium leading-none
                  tracking-[-0.01em] text-[#202018]
                  transition-colors duration-300 hover:text-[#5f7345]
                "
              >
                {project.title}

                {index !== projects.length - 1 && (
                  <span className="mt-2 block h-px w-full bg-[#8b8067]/25" />
                )}
              </p>
            ))}
          </div>

          <a
            href="/timeline"
              onClick={handleTimelineClick}
            aria-label="Open project timeline page"
            className="
              absolute -bottom-4 -right-3 flex h-10 w-10 items-center justify-center
              rounded-full border border-[#263818]/40 bg-[#5f7345]
              text-[#fff7df] shadow-[0_10px_22px_rgba(0,0,0,0.28)]
              transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#708954]
            "
          >
            <FaArrowRight className="text-xs" />
          </a>
        </div>

        {/* footer */}
<div
  className="
    mt-auto flex w-[300px] items-start gap-2 rounded-[1rem]
    bg-black/40 p-2 text-[#f6edd4]
  "
>          <span className="mt-1 text-2xl leading-none text-[#d0b36f]">❧</span>
          <p className="text-[0.85rem] font-extralight leading-5 tracking-wide">
            Building ideas. Solving problems.
            <br />
            Creating impact.
          </p>
        </div>
       
      </div>
    </SectionCard>
  );
}