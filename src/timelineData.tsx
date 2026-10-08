
const chipClassName =
  "rounded-full border border-[#cfc1aa] bg-[#fbf6ec] px-3 py-1 text-xs font-medium text-[#2b342a] shadow-[0_8px_18px_rgba(14,20,16,0.06)] transition-all duration-300 hover:border-[#8ca069] hover:bg-[#eef2e4] active:scale-95 active:border-[#8ca069] active:bg-[#eef2e4]";

const projectTracks = [
  {
    date: "2024–2026",
    roleLabel: "Software Engineer Intern → Associate Software Engineer → Senior Associate",
    project: "BIZ Nest Operations Suite",
    context: "Internal company management platform",
    description:
      "Build features across BIZ Nest's internal SaaS platform, connecting React interfaces and state management to Node.js APIs and MongoDB. Recent work includes payroll and payslips, alongside performance improvements and reliable background jobs.",
    bullets: [
      "Built the HR payroll workflow end to end: HR configures compensation in a React interface, backend services calculate pay using deductions, leave, and attendance, and the system generates and emails payslips to employees—replacing spreadsheets.",
      "Built the React payroll and reporting interfaces around clear feature state and API boundaries. Used TanStack Query to cache and refresh server data, Redux Toolkit for shared client state, and memoized derived table data to avoid unnecessary recalculation.",
      "Moved report generation off the request path into a BullMQ + Redis job queue. The React client can poll job status; added cancellation and retry so long-running reports don't block the API.",
      "Decoupled audit logging from controllers using Node.js EventEmitters — core handlers emit events, listeners persist them separately. 500+ daily events logged with no added latency to requests.",
      "Reduced latency in a core internal module from 9–10 seconds to ~200 ms by rewriting queries as MongoDB aggregation pipelines and fetching only the required fields.",
    ],
    tech: ["React", "Redux Toolkit", "TanStack Query", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "BullMQ", "EventEmitters"],
  },
  {
    date: "2025",
    roleLabel: "Associate Software Engineer",
    project: "Nomad Spaces",
    context: "Traveler workspace and hospitality discovery platform",
    description:
      "Built the React frontend and Node.js APIs for a platform connecting travelers with coworking and coliving spaces. Shipped host onboarding, profile, likes, and reviews experiences, with a two-phase onboarding flow reviewed by the sales team.",
    bullets: [
      "Built React screens and reusable form patterns for host onboarding, profiles, likes, and reviews, then connected them to validated Express APIs and structured MongoDB schemas.",
      "Implemented two-phase host onboarding: submit details to Google Sheets for sales review, then save approved hosts to MongoDB with Yup validation at both stages.",
      "Used TanStack Query to cache API data and coordinate loading, refresh, and mutation states; kept shared client state focused with Redux Toolkit to reduce duplicate state and unnecessary UI updates.",
    ],
    tech: ["React", "Redux Toolkit", "TanStack Query", "TypeScript", "Node.js", "Express", "MongoDB", "Yup", "Google Sheets API"],
  },
  {
    date: "2025",
    roleLabel: "Associate Software Engineer",
    project: "Nomad Admin & Host Portal",
    context: "Admin and host-facing management system for the Nomad ecosystem",
    description:
      "Built the React admin and host portal alongside its Node.js APIs, connecting management screens to CSV imports, record-level results, and AWS S3 image uploads.",
    bullets: [
      "Built React screens for admin and host management, with CSV upload feedback that surfaces successful records and row-level skip reasons from the API.",
      "Replaced in-memory CSV loading with Node.js Streams and row-level error isolation, so one malformed record doesn't fail the whole batch; returned actionable results for each row.",
      "Improved portal performance by lazy loading admin views and using TanStack Query caching to avoid needless refetches and rerenders.",
      "Built AWS S3 image upload with file type validation and structured key naming so files stay retrievable as the app scales across multiple upload sources.",
    ],
    tech: ["React", "Redux Toolkit", "TanStack Query", "TypeScript", "Node.js", "Express", "MongoDB", "Streams", "AWS S3", "Error Handling"],
  },
];

export const timelineData = projectTracks.map((track) => ({
  title: track.date,
  content: (
    <article>
      <div className="mb-2 inline-flex rounded-full border border-[#cfc1aa] bg-[#fbf6ec] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#5f684f]">
        {track.roleLabel}
      </div>

      <h4 className="font-display text-xl font-semibold text-[#243026]">
        {track.project}
      </h4>

      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7650]">
        {track.context}
      </p>

      <p className="mt-2 text-sm leading-6 text-[#4f5a4f]">
        {track.description}
      </p>

      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#4f5a4f]">
        {track.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2.5">
        {track.tech.map((item) => (
          <span key={item} className={chipClassName}>
            {item}
          </span>
        ))}
      </div>
    </article>
  ),
}));
