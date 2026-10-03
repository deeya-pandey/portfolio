export default function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-primary">01. ABOUT</p>

        <h2 className="group/title relative mt-3 inline-block text-3xl font-semibold md:text-4xl">
          About Me
          <span className="absolute -bottom-2 left-0 h-0.5 w-10 bg-primary transition-all duration-300 group-hover/title:w-full" />
        </h2>

        <div className="mt-8 max-w-4xl space-y-5 rounded-xl border border-primary/25 bg-card/30 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-glow md:p-8">
          <p className="text-lg leading-relaxed text-foreground md:text-xl">
            Hi, I’m Deeya — a software developer from Nepal who enjoys turning ideas into practical, reliable software.
          </p>

          <p className="leading-relaxed text-muted-foreground transition-colors duration-300 hover:text-foreground">
            I started my journey in software development with .NET and have worked on real-world applications using C#, ASP.NET Core, SQL, Next.js, and REST APIs. In my current work, I’ve been involved in building and improving a Learning Management System, where I work on backend development, application features, bug fixes, and collaborating with a team to deliver things that actually get used.
          </p>

          <p className="leading-relaxed text-muted-foreground transition-colors duration-300 hover:text-foreground">
            Over time, I became increasingly interested in what happens beyond writing code — how applications are deployed, how servers work, how containers are managed, and how development teams can automate the journey from code to production.
          </p>

          <p className="leading-relaxed text-muted-foreground transition-colors duration-300 hover:text-foreground">
            That curiosity led me toward Linux, Docker, Azure, Terraform, and DevOps.
          </p>

          <p className="leading-relaxed text-muted-foreground transition-colors duration-300 hover:text-foreground">
            Right now, I’m focused on strengthening my foundations in cloud and infrastructure while continuing to grow as a software engineer. I enjoy learning by building things, breaking them, figuring out why they broke, and then making them work better.
          </p>

          <p className="leading-relaxed text-muted-foreground transition-colors duration-300 hover:text-foreground">
            I’m still learning, and that’s something I genuinely enjoy. My goal is to become an engineer who understands not just how to build an application, but also how to deploy it, operate it, automate it, and keep it reliable.
          </p>

          <p className="leading-relaxed text-muted-foreground transition-colors duration-300 hover:text-foreground">
            When I’m not coding, you’ll usually find me learning something new, experimenting with a project, or documenting what I’ve learned along the way.
          </p>

          <p className="border-t border-primary/20 pt-4 font-medium leading-relaxed text-foreground">
            One step, one project, one problem at a time.
          </p>
        </div>
      </div>
    </section>
  );
}