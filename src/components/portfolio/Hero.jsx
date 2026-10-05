import profileImage from "../../assets/images/profile-cutout.png";
import Button from "../shared/Button";
import SocialLinks from "../shared/SocialLinks";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-56 w-1/3 border-b border-l border-primary/10"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:gap-16 lg:gap-20">
        <div className="order-2 max-w-2xl md:order-1">
          <p className="hero-enter inline-flex items-center gap-3 rounded-full border border-primary/20 bg-card/80 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary ring-4 ring-primary/15" />
            Hello, I&rsquo;m Deeya Pandey
          </p>

          <h1 className="hero-enter-delay-1 mt-7 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">.NET Developer building</span>
            <span className="block">
              <span className="text-primary">practical</span> web applications.
            </span>
          </h1>

          <p className="hero-enter-delay-2 mt-6 font-mono text-base text-primary md:text-lg">
            <span className="mr-2 text-muted-foreground">&gt;</span>
            .NET · React · SQL Server
          </p>

          <p className="hero-enter-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I&rsquo;m a Junior .NET Developer from Nepal with hands-on experience
            building and maintaining web applications using .NET, React,
            Next.js, and SQL Server.
          </p>

          <div className="hero-enter-delay-3 mt-8 flex flex-wrap gap-3">
            <Button href="#projects" variant="primary" className="group">
              View My Work
              <svg
                aria-hidden="true"
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
            </Button>

            <Button href="#contact" variant="outline">
              Let&rsquo;s Connect
            </Button>
          </div>

          <SocialLinks className="hero-enter-delay-3 mt-8 border-t border-border pt-5" />
        </div>

        <div className="hero-enter-delay-2 order-1 mx-auto w-full max-w-[16rem] sm:max-w-[20rem] md:order-2 md:max-w-[23rem] lg:max-w-[24rem]">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-primary/20 bg-secondary/70 p-2 shadow-glow">
            <img
              src={profileImage}
              alt="Deeya Pandey"
              fetchPriority="high"
              className="h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
