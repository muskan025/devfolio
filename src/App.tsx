import { useEffect, useMemo, useState } from 'react';
import { FaDev, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaNodeJs, FaArrowRight, FaLeaf } from 'react-icons/fa';
import { SiDocker, SiExpress, SiMongodb, SiRedis, SiTailwindcss, SiTypescript, SiGmail, SiDailydotdev, SiReactquery } from 'react-icons/si';
import { TbBrandReact } from 'react-icons/tb';
import { ProjectTimeline } from './ProjectTimeline';

const languages = [
  { name: 'English', color: '#ef4444', proficiency: 'Fluent', flair: 'Nuanced professional communication' },
  { name: 'Hindi', color: '#10b981', proficiency: 'Fluent', flair: 'Native-level comfort in conversation' },
  { name: 'Urdu', color: '#f59e0b', proficiency: 'Fluent', flair: 'Expressive and culturally rich tone' },
  { name: 'Konkani', color: '#8b5cf6', proficiency: 'Fluent', flair: 'Warm day-to-day communication' },
  { name: 'Arabic', color: '#3b82f6', proficiency: 'Beginner', flair: 'Actively learning with consistency' },
];

const sliderSpeeds = {
  slow: 0,
  medium: 15,
  fast: 5,
} as const;

type SliderSpeed = keyof typeof sliderSpeeds;

export enum TabKey {
  About = "About",
  Projects = "Growth",
  Blog = "Knowledge logs",
  Contact = "Socialize",
}

type BlogPost = {
  title: string;
  link: string;
  pubDate?: string;
  cover_image:string
};

function HomePage() {
   const projects = [
    { title: 'AudioTrack Classmate', stack: ['Node.js', 'MongoDB', 'React'] },
    { title: 'Language Companion', stack: ['TypeScript', 'Tailwind', 'Framer Motion'] },
    { title: 'Portfolio V2', stack: ['Vite', 'React', 'API Integrations'] },
  ];

  const techStack = [
    { name: 'Node.js', color: '#3b82f6' },
    { name: 'Express', color: '#ef4444' },
      { name: 'MongoDB', color: '#10b981' },
    {name: 'Redis', color: '#f59e0b' },
    {name: 'BullMQ', color: '#f59e0b' },
    {name: 'Docker', color: '#10b981' },
    { name: 'React', color: '#ef4444' },
    { name: 'TypeScript', color: '#f59e0b' },
    { name: 'Tailwind', color: '#8b5cf6' },
    {name: 'Tanstack Query', color: '#3b82f6' },
  ]
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

  const socialLinks = [
    { name: 'Email', href: 'mailto:muskandodmani222@gmail.com', icon: <SiGmail className="h-4 w-4" aria-hidden="true" /> },
    { name: 'GitHub', href: 'https://github.com/muskan025', icon: <FaGithub className="h-4 w-4" aria-hidden="true" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/muskan-dodmani/', icon: <FaLinkedin className="h-4 w-4" aria-hidden="true" /> },
    { name: 'Medium', href: 'https://medium.com/@muskandodmani222', icon: <FaMedium className="h-4 w-4" aria-hidden="true" /> },
    { name: 'Dev.to', href: 'https://dev.to/muskan025', icon: <FaDev className="h-4 w-4" aria-hidden="true" /> },
    { name: 'Daily.dev', href: 'https://app.daily.dev/muskan025', icon: <SiDailydotdev className="h-4 w-4" aria-hidden="true" /> },
    { name: 'Instagram', href: 'https://www.instagram.com/poetry_frames_786/', icon: <FaInstagram className="h-4 w-4" aria-hidden="true" /> },
  ];

   const [sliderSpeed, setSliderSpeed] = useState<SliderSpeed>('medium');
  const marqueeSkills = useMemo(() => [...techStack, ...techStack], [techStack]);
  const [latestPost, setLatestPost] = useState<BlogPost | null>(null);
 
useEffect(() => {
  const fetchLatestPost = async () => {
    try {
      // Example using Dev.to API
      const response = await fetch(
        "https://dev.to/api/articles?username=muskan025&per_page=1"
      );

      const data = await response.json();

      if (data.length > 0) {
        setLatestPost({
          title: data[0].title,
          link: data[0].url,
          pubDate: data[0].published_at,
          cover_image: data[0].cover_image
        });
      }
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    }
  };

  fetchLatestPost();
}, []);

  const myTime = new Date();

  return (
    <main className="relative min-h-screen overflow-hidden text-[#2f2a22]">
  {/* Background Image */}
  <div
    className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url('/wild-forest-bg.png')`,
    }}
  />

  {/* Dark cinematic overlay */}
  <div className="fixed inset-0 -z-10 bg-black/20" />

  {/* Optional warm gradient overlay */}
  <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

  <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:px-8">
        <header className="mb-8 rounded-3xl border-2 border-[#1d1d1b] bg-[rgba(235,244,248,0.5)] backdrop-blur-md px-5 py-4 shadow-[4px_4px_0_#1d1d1b]">
          <nav className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm uppercase tracking-[0.18em]">Muskan.dev</p>
            <ul className="flex items-center gap-3 text-sm md:gap-6 md:text-base">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
            <button className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-sm">Mode</button>
          </nav>
        </header>
        <section id="about" className="grid gap-4 md:grid-cols-[5fr_4fr]">
            <div className="flex flex-col gap-4">
           <article
  className="relative overflow-hidden rounded-[2rem] border-2 border-[#1d1d1b] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)] md:min-h-[390px]"
  style={{
    backgroundImage: `url('/welcome-bg.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* cinematic overlays */}
  <div className="absolute inset-0 bg-black/25" />
  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent" />

  {/* glow */}
  <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#ffd166]/20 blur-3xl" />

  {/* content */}
 <div className="relative z-10 max-w-[65%] text-left">
    <h1 className="text-5xl uppercase tracking-wide sm:text-6xl md:text-7xl text-[#fffdf8]">
      Welcome
    </h1>

    <p className="mt-3 text-lg font-medium text-[#fffdf8]">to</p>

    <p className="mt-1 text-4xl font-medium sm:text-5xl text-[#fffdf8]">
      Nook of مُسکان
    </p>

    <div className="mt-6">
      <p className="mb-4 text-xl text-[#fffdf8]">
        Explorer. Developer. Dreamer.
      </p>

      <p className="max-w-md text-base leading-relaxed text-[#f5efe4]/90 font-light">
        I build digital experiences that feel human,
        thoughtful, and beautifully crafted.
      </p>
    </div>

    {/* Let's Connect Button */}
    <a 
      href="mailto:muskandodmani222@gmail.com"
      className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#1d1d1b] bg-gradient-to-br from-[#6b7b4a] to-[#46542f] px-6 py-2.5 text-sm font-medium text-[#fffdf8] shadow-[3px_3px_0_#1d1d1b] transition-all hover:translate-y-[2px] hover:shadow-[1px_1px_0_#1d1d1b] active:translate-y-[3px] active:shadow-none"
    >
      Let's Connect
      <FaLeaf className="text-xs text-[#b8d28a] transition-transform group-hover:rotate-12" />
    </a>
  </div>
</article>

           <blockquote className="relative overflow-hidden rounded-[1.6rem] border-2 border-[#1d1d1b] bg-[rgba(255,248,235,0.45)] backdrop-blur-md p-4 text-sm italic shadow-[0_12px_35px_rgba(0,0,0,0.18)] sm:text-base">
  
  {/* soft cinematic glow */}
  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#ffd166]/20 blur-3xl" />

  <p className="relative z-10 leading-relaxed text-[#2f2a22]">
    “The wheel of courage will run until you have the will to run the wheel.”
    <span className="block mt-2 text-xs not-italic uppercase tracking-[0.12em] text-[#5f5648]">
      — Muskan Dodmani
    </span>
  </p>
</blockquote>
        </div>
            <aside className="rounded-[2rem] border-2 border-[#1d1d1b] bg-[rgba(248,242,235,0.5)]  backdrop-blur-md p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)] md:min-h-[390px]">
            <div className="flex flex-wrap items-center justify-between gap-3">
<span className="rounded-full border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-1 text-base flex items-center gap-2">
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
  </span>
  Available To Work
</span>              <button className="rounded-xl border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-1 text-base">Resume ↓</button>
            </div>

<h2 className="mt-4 text-2xl font-semibold leading-none sm:text-3xl">
  <span className=''>I&apos;m a{" "}</span>
  <span className="inline-block align-bottom overflow-hidden whitespace-nowrap border-r-2 border-[#1d1d1b] animate-typing">
    Software Engineer
  </span>
</h2>          
<p className="mt-3 text-xl text-[#2b2b29]">Explorer, hardworking, and curious</p>

             <div className="mt-4 rounded-2xl border-2 border-[#1d1d1b] bg-gradient-to-br from-[#fffdf8] to-[#f4ecdd] p-3.5">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2f2a22]">Languages</p>
                <p className="text-[10px] text-[#5f5648]">Hover chips</p>
              </div>
        <div className="relative z-50 flex flex-wrap items-center gap-2 pb-1 text-xs sm:text-sm overflow-visible">
                {languages.map((language) => (
                  <span
                    key={language.name}
                    className="group relative z-0 cursor-default whitespace-nowrap rounded-full border-2 border-[#1d1d1b] bg-[#f9f6ef]/80 backdrop-blur-md px-3 py-1 font-medium transition-all duration-200 hover:z-[9998] hover:-translate-y-0.5 hover:bg-[#1d1d1b] hover:text-[#fff9ef]"
                  >
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full transition-colors duration-300 group-hover:bg-[#ffd166]" style={{ backgroundColor: language.color }}  />
                      {language.name}
                    </span>
                    <span className="pointer-events-none absolute left-1/2 top-full z-[9999] mt-2 w-max max-w-48 -translate-x-1/2 scale-95 rounded-xl border-2 border-[#1d1d1b] bg-[#1d1d1b] px-2.5 py-1.5 text-[10px] text-[#fff9ef] opacity-0 shadow-[3px_3px_0_#6f6352] transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                      <span className="block font-semibold text-[#ffd166]">{language.proficiency}</span>
                      <span className="mt-1 block leading-relaxed">{language.flair}</span>
                      <span className="absolute -top-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-[#1d1d1b] bg-[#1d1d1b]" />
                    </span>
                  </span>
                ))}
              </div>
            </div>
            
           <div className="mt-5 grid gap-3 sm:grid-cols-2">
  <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-3 text-center">
    <p className="text-sm uppercase tracking-wide">My Time</p>
    <p className="mt-1 text-lg font-medium">
     {myTime.toLocaleTimeString("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
})}
    </p>
  </div>

  <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-3 text-center">
    <p className="text-sm uppercase tracking-wide">Your Time</p>
    <p className="mt-1 text-lg font-medium">
      {new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </p>
  </div>
</div>
          </aside>
        </section>

       <section id="projects" className="mt-10 grid gap-4 md:grid-cols-[3fr_5fr]">
          <article
  className="relative overflow-hidden rounded-[2rem] border-2 border-[#1d1d1b] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)]"
  style={{
    backgroundImage: `url('/forest-river.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

 {/* cinematic overlay */}
<div className="absolute inset-0 bg-black/20" />

{/* soft warm tint */}
<div className="absolute inset-0 bg-gradient-to-br from-[#f9f6ef]/20 via-transparent to-[#d6c3a5]/20" />

  <div className="relative z-10">
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-3xl uppercase">Projects →</h3>
    </div>

    <div className="relative inline-flex flex-col rounded-2xl border-2 border-[#1d1d1b] bg-[rgba(255,248,240,0.28)]
backdrop-blur-lg
border border-white/20 p-4">
      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex items-center justify-between gap-4 rounded-xl border border-transparent px-2 py-1 transition-all duration-300 hover:border-[#1d1d1b] hover:bg-[#f4ecdd]"
          >
            <p className="text-lg font-medium whitespace-nowrap">
              {project.title}
            </p>
          </div>
        ))}
      </div>
      <a
              href="/timeline"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1d1d1b] bg-[#fffdf8] transition-transform duration-300 group-hover:translate-x-1 absolute right-4 -bottom-4 cursor-pointer hover:bg-black hover:text-white"
              aria-label="Open project timeline page"
            >
              <FaArrowRight className="text-xs transition-transform" />
            </a>
    </div>
  </div>
</article>

        <div className="flex flex-col gap-4 h-full overflow-hidden">

  {/* Skills Card */}
  <article className="rounded-[2rem]   bg-[rgba(255,248,235,0.45)]
backdrop-blur-md backdrop-blur-md p-6 border border-white/20
shadow-[0_8px_32px_rgba(15,23,42,0.18)]]">
  
    
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-3xl uppercase">Skills</h3>

      <div className="flex items-center gap-2 overflow-hidden" aria-label="Slider speed controls">
        <button
          onClick={() => setSliderSpeed('slow')}
          className="h-3 w-3 rounded-full border border-[#1d1d1b] bg-red-500"
        />
        <button
          onClick={() => setSliderSpeed('medium')}
          className="h-3 w-3 rounded-full border border-[#1d1d1b] bg-yellow-400"
        />
        <button
          onClick={() => setSliderSpeed('fast')}
          className="h-3 w-3 rounded-full border border-[#1d1d1b] bg-green-500"
        />
      </div>
    </div>

    <div className="skills-shell overflow-hidden rounded-2xl border-2 border-[#1d1d1b] bg-[rgba(240,248,242,0.5)] p-4">
      <div
        className="skills-marquee"
        style={{
          ['--skills-duration' as string]: `${sliderSpeeds[sliderSpeed]}s`,
        }}
      >
        {marqueeSkills.map((tech, index) => (
          <span
            key={`${tech.name}-${index}`}
            className="skill-pill whitespace-nowrap rounded-full border-2 border-[#1d1d1b] px-4 py-1.5 text-base font-medium"
          >
            <span className="inline-flex items-center gap-2 cursor-pointer">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#1d1d1b] bg-[#fff9ef]">
                {skillLogos[tech.name]}
              </span>

              {tech.name}
            </span>
          </span>
        ))}
      </div>
    </div>
  </article>

  {/* Currently Learning */}
  <article className="self-start relative overflow-hidden rounded-[2rem] border-2 border-[#1d1d1b] bg-[rgba(255,248,235,0.45)] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)]">

    {/* glowing blur */}
    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#ffd166]/30 blur-3xl" />

    <div className="relative z-10">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-2xl uppercase tracking-wide">
          Currently Learning
        </h4>

        <span className="rounded-full border-2 border-[#1d1d1b] bg-[#fffdf8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]">
          In Progress
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {[
          'AI integration',
          'AWS EC2',
          'Docker',
          
        ].map((item) => (
          <div
            key={item}
            className="group flex items-center gap-2 rounded-full border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-[#1d1d1b] hover:text-[#fffdf8]"
          >
            <span className="h-2 w-2 rounded-full bg-green-500 transition-colors group-hover:bg-[#ffd166]" />

            {item}
          </div>
        ))}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-[#4b463d]">
        Building deeper backend architecture skills and scalable systems with curiosity, caffeine, and occasional existential debugging.
      </p>
    </div>
  </article>
</div>
        </section>
         
        <section id="contact" className="mt-6 grid gap-4 md:grid-cols-[4fr_6fr]">
          <article className="self-start rounded-[2rem] border-2 border-[#1d1d1b] bg-[rgba(248,242,235,0.5)] backdrop-blur-md p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-3xl uppercase">Connect →</h3>
            </div>
            <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
              <div className="inline-flex  flex-wrap gap-2">
               {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    aria-label={social.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1d1d1b] text-base hover:bg-[#f6f2e8]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border-2 border-[#1d1d1b] bg-[rgba(235,244,248,0.5)] backdrop-blur-md p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)]">
            <div className="mb-4 flex items-center justify-between">
  <h3 className="text-3xl uppercase">Blogs →</h3>

 <a
  href="https://dev.to/muskan025"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 rounded-xl border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-1.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d1d1b] hover:text-[#fffdf8]"
>
  View All
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>
</div>
            <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
             {latestPost ? (
 <div
  className="relative h-48 overflow-hidden rounded-xl border-2 border-[#1d1d1b] bg-cover bg-center"
  style={{
    backgroundImage: `url(${latestPost.cover_image})`,
  }}
>
  <div className="absolute inset-0 bg-black/40" />

  <div className="absolute bottom-0 left-0 z-10 p-4 text-[#fffdf8]">
    <p className="text-xs uppercase tracking-wide opacity-80">
      Latest Post
    </p>

    <a
      href={latestPost.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-1 block text-lg font-semibold hover:underline"
    >
      {latestPost.title}
    </a>

    <p className="mt-1 text-sm opacity-80">
      {latestPost.pubDate
        ? new Date(latestPost.pubDate).toLocaleDateString()
        : "Recently published"}
    </p>
  </div>
</div>
) : (
  <p className="text-sm">Loading latest post...</p>
)}
            </div>
          </article>
        </section>
      </div>
          </main>
  );
}

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  if (path === "/timeline") {
    return <ProjectTimeline />;
  }

  return <HomePage />;
}

export default App;
