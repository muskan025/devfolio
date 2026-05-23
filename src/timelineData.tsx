export const timelineData = [
   {
    title: "2026",
    content: (
      <div>
        <h4 className="text-xl font-semibold">Associate Software Engineer</h4>

        <p className="mt-2 text-sm text-neutral-700">
          Built Report module using redis and bullMQ, deployment on EC2.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {["Node.js", "MongoDB", "Redis", "BullMQ","EC2"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/20 px-3 py-1 text-xs"
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
    content: (
      <div>
        <h4 className="text-xl font-semibold">Associate Software Engineer</h4>

        <span>
          <p className="mt-2 text-sm text-neutral-700">
          Built modular RBAC systems and event-driven backend architecture for
          multi-tenant SaaS platforms.
        </p>
         <p className="mt-2 text-sm text-neutral-700">
          Built data upload systems using streams for bulk data upload.
        </p>
        </span>

        <div className="mt-3 flex flex-wrap gap-2">
          {["Node.js", "MongoDB", "RBAC", "Event-Emitters", "Streams"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/20 px-3 py-1 text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
  },

  {
    title: "2024",
    content: (
      <div>
        <h4 className="text-xl font-semibold">Software Engineer Intern</h4>

        <p className="mt-2 text-sm text-neutral-700">
          Developed task management, ticket systems, attendance modules, and
          internal workflow tooling.
        </p>
         <div className="mt-3 flex flex-wrap gap-2">
          {["Node.js", "MongoDB"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/20 px-3 py-1 text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];
