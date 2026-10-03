import profileImage from "../../assets/images/profile.jpeg";
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/deeya-pandey",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/deeyapandey/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Background */}
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 md:grid-cols-[1.25fr_1fr]">

        {/* Left */}
        <div className="order-2 md:order-1">

          <p className="animate-fade-in font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-primary">●</span>{" "}
            Hello, I'm Deeya Pandey
          </p>

          <h1
            className="animate-fade-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl"
            style={{
              animationDelay: "80ms",
              animationFillMode: "both",
            }}
          >
             .NET Developer building{" "}
            <span className="text-primary">practical</span>{" "}
            web applications.
          </h1>

          <p className="mt-5 text-lg md:text-xl">
            <span className="font-mono text-muted-foreground">
              &gt;{" "}
            </span>

            <span className="font-mono text-primary">
              .NET
            </span>
          </p>

          <p
            className="animate-fade-in mt-6 max-w-xl leading-relaxed text-muted-foreground"
            style={{
              animationDelay: "160ms",
              animationFillMode: "both",
            }}
          >
            I'm a Junior .NET Developer from Nepal with hands-on
            experience building and maintaining web applications using
            .NET, React, Next.js, and SQL Server. I'm currently expanding
            my skills in Linux and DevOps.
          </p>

          {/* Buttons */}
          <div
            className="animate-fade-in mt-9 flex flex-wrap gap-3"
            style={{
              animationDelay: "240ms",
              animationFillMode: "both",
            }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              View My Work

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              Let's Connect
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5 font-mono text-sm text-muted-foreground">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                {social.icon}
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="order-1 mx-auto md:order-2">
          <div className="animate-scale-in relative h-64 w-64 md:h-80 md:w-80">

            {/* Glow */}
            <div className="animate-glow absolute -inset-6 rounded-full bg-primary/20 blur-3xl" />

            {/* Profile Card */}
            <div className="relative h-full w-full rounded-[2rem] border border-primary/40 bg-card p-2 shadow-glow">
              <div className="grid h-full w-full place-items-center rounded-[1.6rem] bg-secondary">
                <div className="text-center">
                <img
                src={profileImage}
                alt="Deeya Pandey"
                className="h-32 w-32 rounded-full object-cover"
                />
                  {/* <span className="font-mono text-6xl font-semibold text-primary md:text-7xl">
                    DP
                  </span>

                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    photo coming soon
                  </p> */}
                </div>
              </div>
            </div>

            {/* Floating Technology Tags */}
            <span className="animate-float absolute -left-4 top-6 rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs shadow-sm">
              <span className="text-primary">&lt;Deeya /&gt;</span>
            </span>

            <span
              className="animate-float absolute -right-2 top-14 rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs shadow-sm"
              style={{ animationDelay: "1s" }}
            >
              .NET
            </span>

            <span
              className="animate-float absolute -left-8 bottom-24 rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs shadow-sm"
              style={{ animationDelay: "2s" }}
            >
              React
            </span>

            <span
              className="animate-float absolute right-[-1.5rem] bottom-28 rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs shadow-sm"
              style={{ animationDelay: "0.5s" }}
            >
              Next.js
            </span>

            <span
              className="animate-float absolute left-8 -bottom-3 rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs shadow-sm"
              style={{ animationDelay: "1.5s" }}
            >
              SQL
            </span>

            <span
              className="animate-float absolute right-10 -bottom-4 rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs shadow-sm"
              style={{ animationDelay: "2.5s" }}
            >
              Linux
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}