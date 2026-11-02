import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { trackPointer } from "../shared/pointer";

const exploring = ["Linux", "Docker", "Azure", "DevOps"];

export default function About() {
  return (
    <section id="about" className="section-block">
      <div className="container-page">
        <SectionHeading index="01" eyebrow="ABOUT" title="About Me" />

        <Reveal className="mt-10 md:mt-12">
          <p className="max-w-3xl text-[1.375rem] font-medium leading-[1.4] tracking-[-0.015em] text-foreground md:text-[1.75rem]">
            Hi, I&rsquo;m Deeya &mdash; a software developer from Nepal who
            enjoys turning ideas into practical, reliable software.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="max-w-[42rem] space-y-5 text-[1.0625rem] leading-[1.75] text-muted-foreground">
              <p>
                I started my journey in software development with .NET and have
                worked on real-world applications using C#, ASP.NET Core, SQL,
                Next.js, and REST APIs. In my current work, I&rsquo;ve been
                involved in building and improving a Learning Management System,
                where I work on backend development, application features, bug
                fixes, and collaborating with a team to deliver things that
                actually get used.
              </p>

              <p>
                Over time, I became increasingly interested in what happens
                beyond writing code &mdash; how applications are deployed, how
                servers work, how containers are managed, and how development
                teams can automate the journey from code to production.
              </p>

              <p>
                Right now, I&rsquo;m focused on strengthening my foundations in
                cloud and infrastructure while continuing to grow as a software
                engineer. I enjoy learning by building things, breaking them,
                figuring out why they broke, and then making them work better.
              </p>

              <p>
                I&rsquo;m still learning, and that&rsquo;s something I genuinely
                enjoy. When I&rsquo;m not coding, you&rsquo;ll usually find me
                learning something new, experimenting with a project, or
                documenting what I&rsquo;ve learned along the way.
              </p>

              <p className="!mt-8 border-l-2 border-primary pl-5 font-display text-lg font-medium tracking-[-0.01em] text-foreground">
                One step, one project, one problem at a time.
              </p>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:self-start">
              <div
                onPointerMove={trackPointer}
                className="spotlight card card-hover p-6"
              >
                <p className="eyebrow text-muted-foreground">
                  Currently exploring
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  That curiosity led me toward:
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {exploring.map((item) => (
                    <li key={item} className="chip chip-accent">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                onPointerMove={trackPointer}
                className="spotlight card card-hover bg-secondary/60 p-6 shadow-none"
              >
                <p className="eyebrow">The goal</p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To become an engineer who understands not just how to build an
                  application, but also how to deploy it, operate it, automate
                  it, and keep it reliable.
                </p>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
