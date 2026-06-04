export type NavLink = {
  label: string;
  href: string;
};

export type Language = {
  name: string;
  color: string;
  proficiency: string;
  flair: string;
};

export type Project = {
  title: string;
  stack: string[];
};

export type SocialLink = {
  name: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const languages: Language[] = [
  {
    name: "English",
    color: "#ef4444",
    proficiency: "Fluent",
    flair: "Comfortable with work communication",
  },
  {
    name: "Hindi",
    color: "#10b981",
    proficiency: "Fluent",
    flair: "Comfortable in everyday conversations",
  },
  {
    name: "Urdu",
    color: "#f59e0b",
    proficiency: "Fluent",
    flair: "Comfortable in casual conversations",
  },
  {
    name: "Konkani",
    color: "#8b5cf6",
    proficiency: "Fluent",
    flair: "Comfortable in local conversations",
  },
  {
    name: "Arabic",
    color: "#3b82f6",
    proficiency: "Beginner",
    flair: "Learning gradually",
  },
];

export const projects: Project[] = [
  { title: "BIZNest SaaS Platform ", stack: ["Amazon S3", "Node.js Streams", "Redis", "BullMQ", "Event Emitters"] },
  {
    title: "Nomad Platform",
    stack: ["Google Sheets API", "Amazon S3", "Node.js Streams"],
  },
  { title: "Nomad Admin & Host Portal", stack: ["TypeScript", "Amazon S3", "Node.js Streams" ] },
];

export const learningItems = ["AI integration", "Docker"];

export const socialLinks: SocialLink[] = [
  { name: "Email", href: "mailto:muskandodmani222@gmail.com" },
  { name: "GitHub", href: "https://github.com/muskan025" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muskan-dodmani/" },
  { name: "Medium", href: "https://medium.com/@muskandodmani222" },
  { name: "Dev.to", href: "https://dev.to/muskan025" },
  { name: "Daily.dev", href: "https://app.daily.dev/muskan025" },
  { name: "Instagram", href: "https://www.instagram.com/poetry_frames_786/" },
];

export const blogPreviewData = {
  viewAllUrl: "https://dev.to/muskan025",
  latestPostLabel: "Latest Post",
  loadingText: "Loading latest post...",
  fallbackDateText: "Recently published",
};
