import { useEffect, useMemo, useState } from 'react';
import type { JSX } from 'react';
import { FaCode, FaLock, FaNodeJs } from 'react-icons/fa';
import { SiDocker, SiExpress, SiMongodb, SiRedis, SiTailwindcss, SiTypescript, SiReactquery, SiNodedotjs, SiRedux, SiGithub, SiPostman } from 'react-icons/si';
import { TbBrandReact } from 'react-icons/tb';
import { ProjectTimeline } from './ProjectTimeline';
import { Navbar } from './components/navbar';
import { HeroCard } from './components/HeroCard';
import { IntroCard } from './components/IntroCard';
import { QuoteStrip } from './components/QuoteStrip';
import { ProjectsCard } from './components/ProjectsCard';
import { SkillsCard } from './components/SkillsCard';
import { LearningCard } from './components/LearningCard';
import { ConnectCard } from './components/ConnectCard';
import { BlogCard } from './components/BlogCard';
import { languages, projects, socialLinks } from './data/portfolioData';
import {
  SiReact,
} from "react-icons/si";
import { DiAws } from 'react-icons/di';

type SliderSpeed = "slow" | "medium" | "fast";

type BlogPost = { title: string; link: string; pubDate?: string; cover_image: string };

export enum TabKey {
  About = "About",
  Projects = "Growth",
  Blog = "Knowledge logs",
  Contact = "Socialize",
}

// const skills = [

//   { name: "Nodejs", icon: <SiNodedotjs /> },
//   { name: "Express", icon: <SiExpress /> },
//   { name: "TypeScript", icon: <SiTypescript /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
//   { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
//   { name: "BullMQ", icon: <SiRedis className="text-[#E67E22]" /> },
//   { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
//   { name: "Redux", icon: <SiRedux className="text-[#61DAFB]" /> },
//   { name: "AWS S3", icon: <DiAws className="text-[#61DAFB]" /> },
//  ];

const skills = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Mongoose", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "REST APIs", icon: <FaCode /> },
  { name: "JWT Auth", icon: <FaLock /> },
  { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
  { name: "BullMQ", icon: <SiRedis className="text-[#E67E22]" /> },
  // { name: "Docker", icon: <SiDocker /> },
  { name: "AWS S3", icon: <DiAws /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Postman", icon: <SiPostman /> },
];

function HomePage() {
    
  const skillLogos: Record<string, JSX.Element> = {
    'Node.js': <FaNodeJs className="h-4 w-4 text-[#3c873a]" aria-hidden="true" />, 
    Express: <SiExpress className="h-4 w-4 text-[#111111]" aria-hidden="true" />, 
    MongoDB: <SiMongodb className="h-4 w-4 text-[#10aa50]" aria-hidden="true" />, 
    Redis: <SiRedis className="h-4 w-4 text-[#dc382d]" aria-hidden="true" />, 
    BullMQ: <SiRedis className="h-4 w-4 text-[#d97706]" aria-hidden="true" />, 
    Docker: <SiDocker className="h-4 w-4 text-[#2496ed]" aria-hidden="true" />, 
    React: <TbBrandReact className="h-4 w-4 text-[#61dafb]" aria-hidden="true" />, 
    TypeScript: <SiTypescript className="h-4 w-4 text-[#3178c6]" aria-hidden="true" />, 
    Tailwind: <SiTailwindcss className="h-4 w-4 text-[#06b6d4]" aria-hidden="true" />, 
    'Tanstack Query': <SiReactquery className="h-4 w-4 text-[#ff4154]" aria-hidden="true" />,
    
  };

  const [sliderSpeed, setSliderSpeed] = useState<SliderSpeed>('fast');
  const marqueeSkills = useMemo(() => skills, []);  const [latestPost, setLatestPost] = useState<BlogPost | null>(null);
 
 useEffect(() => { const fetchLatestPost = async () => { try { const response = await fetch('https://dev.to/api/articles?username=muskan025&per_page=1'); const data = await response.json(); if (data.length > 0) { setLatestPost({ title: data[0].title, link: data[0].url, pubDate: data[0].published_at, cover_image: data[0].cover_image }); } } catch (error) { console.error('Failed to fetch blog:', error); } }; fetchLatestPost(); }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden px-5 py-7 text-[#2f2a22] sm:px-6">
      <div className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/wild-forest-bg.webp')` }} />
    <div className="fixed inset-0 -z-10 bg-[#07120d]/70" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#030906]/65 via-[#07120d]/35 to-[#020704]/75" />

      <div className="mx-auto w-full max-w-6xl space-y-6">
        <Navbar />

        {/* <section id="about" className="grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-stretch"> */}
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-[1.25fr_0.95fr]">
          <div className="min-w-0">
            <HeroCard />
          </div>
          <div className="min-w-0">
            <IntroCard languages={languages}/>
          </div>
        </section>

        <QuoteStrip />

        <section id="projects" className="grid grid-cols-1 gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-stretch">
          <div className="min-w-0">
            <ProjectsCard projects={projects} />
          </div>

          <div className=" flex flex-col justify-between min-w-0 space-y-6">
            <SkillsCard
              sliderSpeed={sliderSpeed}
              setSliderSpeed={setSliderSpeed}
              marqueeSkills={marqueeSkills}
              skillLogos={skillLogos}
            />
            <LearningCard />
          </div>
        </section>

        <section id="contact" className="grid grid-cols-1 gap-6 lg:grid-cols-[0.65fr_1fr] lg:items-stretch">
          <div className="min-w-0">
            <ConnectCard socialLinks={socialLinks} />
          </div>
          <div className="min-w-0">
            <BlogCard latestPost={latestPost} />
          </div>
        </section>
      </div>
    </main>
  );
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
useEffect(() => { const onPopState = () => setPath(window.location.pathname); window.addEventListener('popstate', onPopState); return () => window.removeEventListener('popstate', onPopState); }, []);
  if (path === '/timeline') return <ProjectTimeline />;

  return <HomePage />;
}

export default App;