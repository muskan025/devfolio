
const chipClassName =
  "rounded-full border border-[#cfc1aa] bg-[#fbf6ec] px-3 py-1 text-xs font-medium text-[#2b342a] shadow-[0_8px_18px_rgba(14,20,16,0.06)] transition-colors duration-300 hover:border-[#8ca069] hover:bg-[#eef2e4]";

const projectTracks = [
  {
    date: "2024–2026",
    roleLabel: "Software Engineer Intern → Associate Software Engineer",
    project: "BIZ Nest Operations Suite",
    context: "Internal company management platform",
    description:
      "Worked across the core SaaS platform while transitioning from intern to backend owner. Two systems I built here went beyond standard CRUD — they required thinking about async behavior, decoupling, and failure handling.",
    bullets: [
      // "Built modules for task management, ticket workflows, attendance tracking, meetings, leave management, and more.",
      // "Built an async audit log system using Node.js EventEmitters to capture and persist user actions for audit traceability.",
      // "Built a report generation module using Redis as a message broker and BullMQ for background job processing, enabling report generation, cancellation, retry handling, and more reliable async workflows."
      "Moved report generation off the main thread into a BullMQ + Redis job queue — API responds instantly with a job ID, worker processes in background, client polls for status. Added cancellation and retry so failed or abandoned jobs don't silently disappear.",
      "Decoupled audit logging from controllers using Node.js EventEmitters — core handlers emit events, listeners persist them separately. 500+ daily events logged with no added latency to requests.",
      
    ],
    tech: ["Node.js", "Streams", "Express", "MongoDB", "EventEmitters", "Redis", "BullMQ"],
  },
  {
    date: "2025",
    roleLabel: "Associate Software Engineer",
    project: "Nomad Spaces",
    context: "Traveler workspace and hospitality discovery platform",
    description:
      "Built backend APIs for a platform connecting travelers with coworking and coliving spaces. Most of the work here was around data validation, structured schemas, and a signup flow that needed a non-technical team in the middle of it.",
    bullets: [
      "Built a two-phase host onboarding flow — form data goes to Google Sheets first for sales team review, then commits to MongoDB after approval. Yup validation at both stages.",
"Developed profile, likes, and reviews APIs with structured MongoDB schemas, keeping response shapes stable for frontend integration."
    ],
    tech: ["Node.js", "Express", "MongoDB", "Yup", "Google Sheets API"],
  },
  {
    date: "2025",
    roleLabel: "Associate Software Engineer",
    project: "Nomad Admin & Host Portal",
    context: "Admin and host-facing management system for the Nomad ecosystem",
    description:
      "Backend tooling for admin operations and host management. The two problems worth noting here were about scale and developer experience — one around memory, one around making errors actually useful.",
    bullets: [
      "Replaced in-memory CSV loading with Node.js Streams — memory stays flat at any file size, and row-level isolation means one bad record doesn't kill the batch.",
"Failed rows return with specific skip reasons, successful inserts with record-level confirmation. Debugging a malformed upload went from a back-and-forth conversation to a self-explanatory response.",
"Built AWS S3 image upload with file type validation and structured key naming so files stay retrievable as the app scales across multiple upload sources."
    ],
    tech: ["Node.js", "MongoDB", "Streams", "AWS S3", "Error Handling"],
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