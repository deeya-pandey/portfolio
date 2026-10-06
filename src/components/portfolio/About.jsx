import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { trackPointer } from "../shared/pointer";

const exploring = ["Linux", "Docker", "Azure", "DevOps"];

export default function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" eyebrow="ABOUT" title="About Me" />

        <Reveal className="mt-10">
          <p className="max-w-3xl text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            Hi, I&rsquo;m Deeya &mdash; a software developer from Nepal who
            enjoys turning ideas into practical, reliable software.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
            <div className="space-y-5 leading-relaxed text-muted-foreground">
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

              <p className="border-l-2 border-accent pl-5 font-display text-lg font-medium">
                <span className="text-gradient">One step, one project, one problem at a time.</span>
              </p>
            </div>

            <aside className="space-y-4">
              <div
                onPointerMove={trackPointer}
                className="spotlight rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Currently exploring
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  That curiosity led me toward:
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {exploring.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1.5 font-mono text-xs text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                onPointerMove={trackPointer}
                className="spotlight relative overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-6"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  The goal
                </p>

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
