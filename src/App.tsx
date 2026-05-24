import { useEffect, useMemo, useState } from 'react';
import { FaDev, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaNodeJs } from 'react-icons/fa';
import { SiDocker, SiExpress, SiMongodb, SiRedis, SiTailwindcss, SiTypescript, SiGmail, SiDailydotdev, SiReactquery } from 'react-icons/si';
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
import { languages, projects, skills, socialLinks } from './data/portfolioData.js';

const sliderSpeeds = { slow: 0, medium: 15, fast: 5 } as const;

type SliderSpeed = keyof typeof sliderSpeeds;

type BlogPost = { title: string; link: string; pubDate?: string; cover_image: string };

export enum TabKey {
  About = "About",
  Projects = "Growth",
  Blog = "Knowledge logs",
  Contact = "Socialize",
}


function HomePage() {
    
  const skillLogos: Record<string, JSX.Element> = {
    'Node.js': <FaNodeJs className="h-4 w-4 text-[#3c873a]" aria-hidden="true" />, Express: <SiExpress className="h-4 w-4 text-[#111111]" aria-hidden="true" />, MongoDB: <SiMongodb className="h-4 w-4 text-[#10aa50]" aria-hidden="true" />, Redis: <SiRedis className="h-4 w-4 text-[#dc382d]" aria-hidden="true" />, BullMQ: <SiRedis className="h-4 w-4 text-[#d97706]" aria-hidden="true" />, Docker: <SiDocker className="h-4 w-4 text-[#2496ed]" aria-hidden="true" />, React: <TbBrandReact className="h-4 w-4 text-[#61dafb]" aria-hidden="true" />, TypeScript: <SiTypescript className="h-4 w-4 text-[#3178c6]" aria-hidden="true" />, Tailwind: <SiTailwindcss className="h-4 w-4 text-[#06b6d4]" aria-hidden="true" />, 'Tanstack Query': <SiReactquery className="h-4 w-4 text-[#ff4154]" aria-hidden="true" />,
  };

   const [sliderSpeed, setSliderSpeed] = useState<SliderSpeed>('medium');
  const marqueeSkills = useMemo(() => [...skills, ...skills], []);  const [latestPost, setLatestPost] = useState<BlogPost | null>(null);
 
 useEffect(() => { const fetchLatestPost = async () => { try { const response = await fetch('https://dev.to/api/articles?username=muskan025&per_page=1'); const data = await response.json(); if (data.length > 0) { setLatestPost({ title: data[0].title, link: data[0].url, pubDate: data[0].published_at, cover_image: data[0].cover_image }); } } catch (error) { console.error('Failed to fetch blog:', error); } }; fetchLatestPost(); }, []);
 
  const myTime = new Date();

  return (
       <main className="relative min-h-screen overflow-hidden text-[#2f2a22]">
    <div className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/wild-forest-bg.png')` }} />
      <div className="fixed inset-0 -z-10 bg-black/20" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:px-8">
        <Navbar />
        <section id="about" className="grid gap-4 md:grid-cols-[5fr_4fr]"><div className="flex flex-col gap-4"><HeroCard /><QuoteStrip /></div><IntroCard languages={languages} myTime={myTime} /></section>
        <section id="projects" className="mt-10 grid gap-4 md:grid-cols-[3fr_5fr]"><ProjectsCard projects={projects} /><div className="flex flex-col gap-4 h-full overflow-hidden"><SkillsCard sliderSpeed={sliderSpeed} setSliderSpeed={setSliderSpeed} sliderSpeeds={sliderSpeeds} marqueeSkills={marqueeSkills} skillLogos={skillLogos} /><LearningCard /></div></section>
        <section id="contact" className="mt-6 grid gap-4 md:grid-cols-[4fr_6fr]"><ConnectCard socialLinks={socialLinks} /><BlogCard latestPost={latestPost} /></section>
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
