export type NavLink = { label: string; href: string };
export type Language = { name: string; color: string; proficiency: string; flair: string };
export type Project = { title: string; stack: string[] };
export type Skill = { name: string; color: string };
export type SocialLink = { name: string; href: string };

export const navLinks: NavLink[];
export const languages: Language[];
export const projects: Project[];
export const skills: Skill[];
export const learningItems: string[];
export const socialLinks: SocialLink[];
export const blogPreviewData: {
  viewAllUrl: string;
  latestPostLabel: string;
  loadingText: string;
  fallbackDateText: string;
};