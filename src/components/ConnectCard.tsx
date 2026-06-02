
import { SectionCard } from "./SectionCard";
import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaUser } from "react-icons/fa";
import { SiDevdotto, SiGmail } from "react-icons/si";
import { LuCodeXml } from "react-icons/lu";
import type {IconType} from "react-icons";
import type { SocialLink } from "../data/portfolioData";
import { CardTitle } from "./CardTitle";

const iconMap: Partial<Record<SocialLink["name"], IconType>> = {
  Email: SiGmail,
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Medium: FaMedium,
  "Dev.to": SiDevdotto,
  "Daily.dev": LuCodeXml,
  Instagram: FaInstagram,
};
type ConnectCardProps = {
  socialLinks?: SocialLink[];
};

export function ConnectCard({ socialLinks = [] }: ConnectCardProps) {
  return (
    <SectionCard
      className="
        relative h-full min-h-[235px] w-full max-h-fit
        rounded-[1.65rem] border border-[#d8ccb6]
        bg-[#f4efe2]/95 p-5 text-[#243026]
        shadow-[0_24px_80px_rgba(0,0,0,0.28)]
        backdrop-blur-md
      "
    >
      {/* header */}
      <CardTitle className="mb-5" icon={FaUser} title="Connect" />

      {/* icons */}
      <div className="mb-6 flex flex-wrap items-center gap-2.5">
        {socialLinks.map((social) => {
          const Icon = iconMap[social.name] ?? LuCodeXml;

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              aria-label={social.name}
              className="
                group inline-flex h-9 w-9 items-center justify-center rounded-full
                border border-[#c8bca7] bg-[#f8f2e6]
                text-[#2e372d] shadow-[0_8px_16px_rgba(0,0,0,0.08)]
                transition-all duration-300
                hover:-translate-y-0.5 hover:border-[#80925f]
                hover:bg-[#eef2e4] hover:text-[#425436]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7f9360]/40
              "
            >
              <Icon
                className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
            </a>
          );
        })}
      </div>

      {/* text */}
      <p className="text-[0.82rem] leading-6 text-[#3f493f]">
        Let&apos;s build, learn, and create together.
      </p>

      {/* decorative leaf */}
      <div className="mt-5 flex justify-center text-[#c7a95f]">
        <span className="text-2xl leading-none">⌁❧⌁</span>
      </div>
    </SectionCard>
  );
}