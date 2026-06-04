
// export const timelineData = [
//    {
//     title: "2024-2026",
//     subtitle: "Software Engineer Intern - Associate Software Engineer",
//     content: (
//       <div>
//         <h4 className="font-serif text-xl font-semibold text-[#243026]">
//           BIZNest Saas Platform
//         </h4>

//        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#4f5a4f]">
//           <li>
//             Developed task management, ticket systems, attendance modules, and
//             internal workflow tooling.
//           </li>
//           <li>
//             Built async log system backend using Node.js EventEmitters to
//             capture and persist 15K+ user actions for audit compliance,
//             integrated with department analytics dashboards for
//             traceability.{" "}
//           </li>
//         </ul>
//         <div className="mt-4 flex flex-wrap gap-2.5">
//           {["Node.js", "MongoDB"].map((item) => (
//             <span
//               key={item}
//               className="rounded-full border border-[#cfc1aa] bg-[#fbf6ec] px-3 py-1 text-xs font-medium text-[#2b342a] shadow-[0_8px_18px_rgba(14,20,16,0.06)] transition-colors duration-300 hover:border-[#8ca069] hover:bg-[#eef2e4]"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "2025",
//     subtitle: "Associate Software Engineer",
//     content: (
//       <div>
//         <h4 className="font-serif text-xl font-semibold text-[#243026]">
//           Nomad Platform
//         </h4>

//         <span>
//           <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#4f5a4f]">
//             <li>
//               Designed multi-step host signup flow with interim Google Sheets
//               integration for sales team verification before secure DB commit,
//               including Yup validation layers.{" "}
//             </li>
//             <li>
//               Developed likes, user profile, and reviews backend APIs with
//               structured MongoDB schemas and validation, handling dev-team
//               interactions with error-resilient endpoints.{" "}
//             </li>
//           </ul>
          
//         </span>

//         <div className="mt-4 flex flex-wrap gap-2.5">
//           {["Node.js", "MongoDB", "RBAC", "Event-Emitters", "Streams"].map(
//             (item) => (
//               <span
//                 key={item}
//                 className="rounded-full border border-[#cfc1aa] bg-[#fbf6ec] px-3 py-1 text-xs font-medium text-[#2b342a] shadow-[0_8px_18px_rgba(14,20,16,0.06)] transition-colors duration-300 hover:border-[#8ca069] hover:bg-[#eef2e4]"
//               >
//                 {item}
//               </span>
//             ),
//           )}
//         </div>
//       </div>
//     ),
//   },
//    {
//     title: "2025",
//     subtitle: "Associate Software Engineer",
//     content: (
//       <div>
//         <h4 className="font-serif text-xl font-semibold text-[#243026]">
//           Nomad Admin & Host Portal
//         </h4>

//        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#4f5a4f]">
//           <li>
           
//             Built bulk CSV upload controllers via Node.js streams for
//             large-scale data ingestion (~1K records per batch) with built-in
//             error handling for failed parses. 
//           </li>
//           <li>
//             Implemented image upload and management flows integrated with AWS
//             S3.
//           </li>
//         </ul>

//         <div className="mt-4 flex flex-wrap gap-2.5">
//           {["Node.js", "MongoDB", "Redis", "BullMQ", "EC2"].map((item) => (
//             <span
//               key={item}
//               className="rounded-full border border-[#cfc1aa] bg-[#fbf6ec] px-3 py-1 text-xs font-medium text-[#2b342a] shadow-[0_8px_18px_rgba(14,20,16,0.06)] transition-colors duration-300 hover:border-[#8ca069] hover:bg-[#eef2e4]"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//     ),
//   },
 
// ];

const chipClassName =
  "rounded-full border border-[#cfc1aa] bg-[#fbf6ec] px-3 py-1 text-xs font-medium text-[#2b342a] shadow-[0_8px_18px_rgba(14,20,16,0.06)] transition-colors duration-300 hover:border-[#8ca069] hover:bg-[#eef2e4]";

const projectTracks = [
  {
    date: "2024–2026",
    roleLabel: "Software Engineer Intern → Associate Software Engineer",
    project: "BizNest Operations Suite",
    context: "Internal multi-tenant company management platform",
    description:
      "Worked across company operations modules while transitioning from internship responsibilities to associate-level backend ownership.",
    bullets: [
      "Built modules for task management, ticket workflows, attendance tracking, meetings, leave management, and more.",
      "Built an async audit log system using Node.js EventEmitters to capture and persist user actions for audit traceability.",
      "Built a report generation module using Redis as a message broker and BullMQ for background job processing, enabling report generation, cancellation, retry handling, and more reliable async workflows."
    ],
    tech: ["Node.js", "Streams", "Express", "MongoDB", "EventEmitters", "Redis", "BullMQ"],
  },
  {
    date: "2025",
    roleLabel: "Associate Software Engineer",
    project: "Nomad Spaces",
    context: "Traveler workspace and hospitality discovery platform",
    description:
      "Contributed to backend systems for connecting travelers with coworking spaces, coliving spaces, meeting rooms, and cafes.",
    bullets: [
      "Designed a multi-step host signup flow with temporary Google Sheets verification before secure database commit.",
      "Built backend APIs for likes, user profiles, reviews, and host data with structured MongoDB schemas.",
      "Added Yup validation and error-resilient endpoint handling for dev-team requirements.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Yup", "Google Sheets API"],
  },
  {
    date: "2025",
    roleLabel: "Associate Software Engineer",
    project: "Nomad Admin & Host Portal",
    context: "Admin and host-facing management system for the Nomad ecosystem",
    description:
      "Built backend tools for admin operations, host management, file uploads, and bulk data handling.",
    bullets: [
      "Built bulk CSV upload controllers using Node.js streams for large-scale data ingestion of around 1K records per batch.",
      "Implemented image upload and management flows integrated with AWS S3.",
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