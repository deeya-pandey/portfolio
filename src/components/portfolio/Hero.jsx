import profileImage from "../../assets/images/profile-cutout.png";
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
      className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-56 w-1/3 border-b border-l border-primary/10"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 md:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="order-1 max-w-2xl">
          <p className="hero-enter inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/80 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 shadow-sm backdrop-blur dark:bg-neutral-900/80 dark:text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-primary ring-4 ring-primary/15" />
            Hello, I'm Deeya Pandey
          </p>

          <h1 className="hero-enter-delay-1 mt-7 text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">.NET Developer building</span>
            <span className="block">
              <span className="text-primary">practical</span> web applications.
            </span>
          </h1>

          <p className="hero-enter-delay-2 mt-6 font-mono text-lg text-primary md:text-xl">
            <span className="mr-2 text-muted-foreground">&gt;</span>.NET
          </p>

          <p className="hero-enter-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm a Junior .NET Developer from Nepal with hands-on
            experience building and maintaining web applications using
            .NET, React, Next.js, and SQL Server.
          </p>

          <div className="hero-enter-delay-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
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
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white/70 px-5 py-3 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary dark:border-neutral-700 dark:bg-neutral-900/70"
            >
              Let's Connect
            </a>
          </div>

          <div className="hero-enter-delay-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-neutral-200/80 pt-5 font-mono text-sm text-muted-foreground dark:border-neutral-800">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                {social.icon}
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-enter-delay-2 order-2 mx-auto w-full max-w-[20rem] sm:max-w-[22rem] md:max-w-[23rem] lg:max-w-[24rem]">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-primary/20 bg-secondary/70 p-2 shadow-[0_18px_50px_rgba(20,83,45,0.12)]">
            <img
              src={profileImage}
              alt="Deeya Pandey"
              className="h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}