// export const timelineData = [
//    {
//     title: "2026",
//     content: (
//       <div>
//         <h4 className="text-xl font-semibold">Associate Software Engineer</h4>

//         <p className="mt-2 text-sm text-neutral-700">
//           Built Report module using redis and bullMQ, deployment on EC2.
//         </p>

//         <div className="mt-3 flex flex-wrap gap-2">
//           {["Node.js", "MongoDB", "Redis", "BullMQ","EC2"].map((item) => (
//             <span
//               key={item}
//               className="rounded-full border border-black/20 px-3 py-1 text-xs"
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
//     content: (
//       <div>
//         <h4 className="text-xl font-semibold">Associate Software Engineer</h4>

//         <span>
//           <p className="mt-2 text-sm text-neutral-700">
//           Built modular RBAC systems and event-driven backend architecture for
//           multi-tenant SaaS platforms.
//         </p>
//          <p className="mt-2 text-sm text-neutral-700">
//           Built data upload systems using streams for bulk data upload.
//         </p>
//         </span>

//         <div className="mt-3 flex flex-wrap gap-2">
//           {["Node.js", "MongoDB", "RBAC", "Event-Emitters", "Streams"].map((item) => (
//             <span
//               key={item}
//               className="rounded-full border border-black/20 px-3 py-1 text-xs"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//     ),
//   },

//   {
//     title: "2024",
//     content: (
//       <div>
//         <h4 className="text-xl font-semibold">Software Engineer Intern</h4>

//         <p className="mt-2 text-sm text-neutral-700">
//           Developed task management, ticket systems, attendance modules, and
//           internal workflow tooling.
//         </p>
//          <div className="mt-3 flex flex-wrap gap-2">
//           {["Node.js", "MongoDB"].map((item) => (
//             <span
//               key={item}
//               className="rounded-full border border-black/20 px-3 py-1 text-xs"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//     ),
//   },
// ];

export const timelineData = [
   {
    title: "2024-2026",
    subtitle: "Software Engineer Intern - Associate Software Engineer",
    content: (
      <div>
        <h4 className="font-serif text-xl font-semibold text-[#243026]">
          BIZNest Saas Platform
        </h4>

       <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#4f5a4f]">
          <li>
            Developed task management, ticket systems, attendance modules, and
            internal workflow tooling.
          </li>
          <li>
            Built async log system backend using Node.js EventEmitters to
            capture and persist 15K+ user actions for audit compliance,
            integrated with department analytics dashboards for
            traceability.{" "}
          </li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {["Node.js", "MongoDB"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#cfc1aa] bg-[#fbf6ec] px-3 py-1 text-xs font-medium text-[#2b342a] shadow-[0_8px_18px_rgba(14,20,16,0.06)] transition-colors duration-300 hover:border-[#8ca069] hover:bg-[#eef2e4]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    subtitle: "Associate Software Engineer",
    content: (
      <div>
        <h4 className="font-serif text-xl font-semibold text-[#243026]">
          Nomad Platform
        </h4>

        <span>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#4f5a4f]">
            <li>
              Designed multi-step host signup flow with interim Google Sheets
              integration for sales team verification before secure DB commit,
              including Yup validation layers.{" "}
            </li>
            <li>
              Developed likes, user profile, and reviews backend APIs with
              structured MongoDB schemas and validation, handling dev-team
              interactions with error-resilient endpoints.{" "}
            </li>
          </ul>
          
        </span>

        <div className="mt-4 flex flex-wrap gap-2.5">
          {["Node.js", "MongoDB", "RBAC", "Event-Emitters", "Streams"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-[#cfc1aa] bg-[#fbf6ec] px-3 py-1 text-xs font-medium text-[#2b342a] shadow-[0_8px_18px_rgba(14,20,16,0.06)] transition-colors duration-300 hover:border-[#8ca069] hover:bg-[#eef2e4]"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    ),
  },
   {
    title: "2025",
    subtitle: "Associate Software Engineer",
    content: (
      <div>
        <h4 className="font-serif text-xl font-semibold text-[#243026]">
          Nomad Admin & Host Portal
        </h4>

       <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#4f5a4f]">
          <li>
           
            Built bulk CSV upload controllers via Node.js streams for
            large-scale data ingestion (~1K records per batch) with built-in
            error handling for failed parses. 
          </li>
          <li>
            Implemented image upload and management flows integrated with AWS
            S3.
          </li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-2.5">
          {["Node.js", "MongoDB", "Redis", "BullMQ", "EC2"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#cfc1aa] bg-[#fbf6ec] px-3 py-1 text-xs font-medium text-[#2b342a] shadow-[0_8px_18px_rgba(14,20,16,0.06)] transition-colors duration-300 hover:border-[#8ca069] hover:bg-[#eef2e4]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
  },
 
];
