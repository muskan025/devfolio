// @ts-nocheck
import { FaArrowRight, FaMountain } from "react-icons/fa";
import { SectionCard } from "./SectionCard";

export function ProjectsCard({ projects }) {
  return (
    <SectionCard
      className="
        relative h-full min-h-[330px] overflow-hidden rounded-[1.45rem]
        border border-[#d9c37f]/35 p-0
        shadow-[0_18px_50px_rgba(0,0,0,0.28)]
      "
      style={{
        backgroundImage: `url('/forest-river.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlays */}
      <div className="absolute inset-0 bg-[#07120d]/25" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#07120d]/35 via-transparent to-[#d6b66c]/15" />


      <div className="relative z-10 flex h-full flex-col px-5 py-5">
        {/* header */}
        <div className="mb-4 flex items-center gap-3">
          <span
            className="
              flex h-9 w-9 items-center justify-center rounded-full
              border border-[#506833]/50 bg-[#2f481f]
              text-[#d9c37f] shadow-[0_8px_18px_rgba(0,0,0,0.22)]
            "
          >
            <FaMountain className="text-s" />
          </span>

          <h3 className="text-[0.95rem] font-semibold uppercase tracking-[0.24em] text-[#f5eddc]">
            Projects
          </h3>

          <span className="h-px flex-1 bg-[#d0b36f]/40" />
        </div>

         
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
              <a
                key={project.title}
                href={project.href || "#"}
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
              </a>
            ))}
          </div>

          <a
            href="/timeline"
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
    mt-auto flex w-[250px] items-start gap-2 rounded-[1rem]
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