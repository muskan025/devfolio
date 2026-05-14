import { useState } from 'react';

export enum TabKey {
  About = "About",
  Projects = "Growth",
  Blog = "Knowledge logs",
  Contact = "Socialize",
}

function App() {
   const projects = [
    { title: 'AudioTrack Classmate', stack: ['Node.js', 'MongoDB', 'React'] },
    { title: 'Language Companion', stack: ['TypeScript', 'Tailwind', 'Framer Motion'] },
    { title: 'Portfolio V2', stack: ['Vite', 'React', 'API Integrations'] },
  ];

  const myTime = new Date();

  return (
    <main className="min-h-screen bg-[#f6f2e8] text-[#1d1d1b]">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:px-8">
        <header className="mb-8 rounded-3xl border-2 border-[#1d1d1b] bg-[#f9f6ef] px-5 py-4 shadow-[4px_4px_0_#1d1d1b]">
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
        <section id="about" className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-4">
            <article className="relative rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b] md:min-h-[390px]">
               <h1 className="mt-8 text-5xl uppercase leading-[0.95] sm:text-6xl md:text-7xl">Welcome</h1>
              <p className="mt-3 text-xl">to</p>
              <p className="mt-3 text-3xl font-medium sm:text-4xl">Nook of مُسکان</p>
              {/* <div className="mt-8 max-w-md rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
                <p className="mb-2 text-sm font-semibold">Tooltip</p>
                <ul className="space-y-1 text-sm sm:text-base">
                  <li>• Origin: Urdu</li>
                  <li>• Transliteration: Muskan</li>
                  <li>• Meaning: Smile ☺</li>
                </ul>
              </div> */}
            </article>

            <blockquote className="rounded-[1.6rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-4 text-sm italic shadow-[5px_5px_0_#1d1d1b] sm:text-base">
              “The wheel of courage will run until you have the will to run the wheel.” — Muskan Dodmani
            </blockquote>
        </div>
            <aside className="rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b] md:min-h-[390px]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-1 text-base">🟢 Available To Work</span>
              <button className="rounded-xl border-2 border-[#1d1d1b] bg-[#fffdf8] px-4 py-1 text-base">Resume ↓</button>
            </div>

<h2 className="mt-4 text-4xl font-semibold leading-none sm:text-5xl">
  <span className=''>I&apos;m{" "}</span>
  <span className="inline-block align-bottom overflow-hidden whitespace-nowrap border-r-2 border-[#1d1d1b] animate-typing">
    Software Engineer
  </span>
</h2>          
<p className="mt-3 text-xl text-[#2b2b29]">Explorer, hardworking, and curious</p>

            <div className="mt-5 rounded-3xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
              <div className="flex flex-wrap gap-2 text-sm sm:text-base">
                {['English', 'Hindi', 'Urdu', 'Konkani', 'Arabic'].map((item) => (
                  <span key={item} className="rounded-full border-2 border-[#1d1d1b] bg-[#f9f6ef] px-3 py-1">
                    {item}
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

       <section id="projects" className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-3xl uppercase">Projects →</h3>
            </div>
            <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
              <div className="space-y-2">
                {projects.map((project) => (
                  <p key={project.title} className="text-lg font-medium">{project.title}</p>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-3xl uppercase">Skills →</h3>
              <p className="text-sm">Red / Yellow / Green</p>
            </div>
            <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
              <div className="flex flex-wrap gap-2">
               {projects[0].stack.map((skill) => (
                  <span key={skill} className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-xl">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </section>
        
        <section id="contact" className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-3xl uppercase">Connect →</h3>
            </div>
            <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
              <div className="flex flex-wrap gap-2">
                <a href="#" className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-base hover:bg-[#f6f2e8]">GitHub</a>
                <a href="#" className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-base hover:bg-[#f6f2e8]">LinkedIn</a>
                <a href="mailto:hello@muskan.dev" className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-base hover:bg-[#f6f2e8]">Email</a>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-3xl uppercase">Blogs →</h3>
              <p className="text-sm">fetched via API</p>
            </div>
            <div className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
              <p className="text-lg font-semibold">Latest writing drops here</p>
              <p className="mt-1 text-sm">Connect your blog API feed to render recent posts.</p>
            </div>
          </article>
        </section>
      </div>
          </main>
  );
}

export default App;
