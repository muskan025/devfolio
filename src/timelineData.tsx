export const timelineData = [
  {
    title: "2025",
    content: (
      <div>
        <h4 className="text-xl font-semibold">Associate Software Engineer</h4>

        <p className="mt-2 text-sm text-neutral-700">
          Built modular RBAC systems and event-driven backend architecture for
          multi-tenant SaaS platforms.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {["Node.js", "MongoDB", "RBAC", "EventEmitters"].map((item) => (
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
      </div>
    ),
  },
];
