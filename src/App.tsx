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
              “The wheel of courage will run until you have the will to run the wheel.” — Muskan Dadlani
            </blockquote>
        </div>
          <aside className="relative rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b] md:min-h-[390px]">
            <p className="absolute right-4 top-3 text-sm">Resume ↓</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">I&apos;m Software Engineer</h2>
            <ul className="mt-5 space-y-3 text-base sm:text-lg">
              <li>• Available to work</li>
              <li>• English / Hindi / Urdu / Konkani / Arabic</li>
              <li>• Explorer, hardworking, and curious</li>
            </ul>

            <div className="mt-8 rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
               <div className="mt-3 grid grid-cols-2 gap-3 text-sm sm:text-base">
                <div>
                  <p className="font-semibold">My time</p>
                  <p></p>
                </div>
                <div>
                  <p className="font-semibold">Your time</p>
                  <p>6:00 PM GST</p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="projects" className="mt-10 rounded-[2rem] border-2 border-[#1d1d1b] bg-[#f9f6ef] p-6 shadow-[5px_5px_0_#1d1d1b]">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-4xl uppercase">Projects →</h3>
            <p className="text-sm">Red / Yellow / Green</p>
          </div>
 <div className="mb-4 grid gap-4 md:grid-cols-[1fr_1.25fr]">
            <article className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
              <p className="text-4xl uppercase">Projects →</p>
            </article>
            <article className="rounded-2xl border-2 border-[#1d1d1b] bg-[#fffdf8] p-4">
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'MongoDB', 'React'].map((skill) => (
                  <span key={skill} className="rounded-full border-2 border-[#1d1d1b] px-4 py-1 text-2xl">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>

         
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
