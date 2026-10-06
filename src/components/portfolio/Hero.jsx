import { useEffect, useRef, useState } from "react";
import profileImage from "../../assets/images/profile-cutout.png";
import Button from "../shared/Button";
import SocialLinks from "../shared/SocialLinks";
import { prefersReducedMotion } from "../shared/pointer";

const phrases = [
  "practical web applications.",
  "reliable REST APIs.",
  "clean, tested backends.",
  "friendly user interfaces.",
];

const longestPhrase = phrases.reduce((a, b) => (b.length > a.length ? b : a));

function useTypewriter(words) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let wordIndex = 0;
    let charIndex = words[0].length;
    let deleting = true;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      setText(word.slice(0, charIndex));

      let wait = deleting ? 35 : 70;
      if (!deleting && charIndex === word.length) {
        deleting = true;
        wait = 2200;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        wait = 350;
      }

      timer = window.setTimeout(tick, wait);
    };

    timer = window.setTimeout(tick, 2600);
    return () => window.clearTimeout(timer);
  }, [words]);

  return text;
}

const floatingBadges = [
  { label: "C#", className: "-left-6 top-10 float-slow" },
  { label: "React", className: "-right-5 top-1/3 float-slower" },
  { label: "SQL", className: "-left-4 bottom-16 float-slower" },
];

export default function Hero() {
  const typed = useTypewriter(phrases);
  const cardRef = useRef(null);
  const sectionRef = useRef(null);

  const tilt = (event) => {
    const card = cardRef.current;
    if (!card || prefersReducedMotion()) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 12}deg)`;
  };

  const resetTilt = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  const moveGlow = (event) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    section.style.setProperty("--hx", `${event.clientX - rect.left}px`);
    section.style.setProperty("--hy", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={moveGlow}
      className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora-blob -left-24 -top-24 h-96 w-96 bg-[var(--site-blob-1)]" />
        <div
          className="aurora-blob right-[-6rem] top-24 h-[28rem] w-[28rem] bg-[var(--site-blob-2)]"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="aurora-blob bottom-[-8rem] left-1/3 h-80 w-80 bg-[var(--site-blob-3)]"
          style={{ animationDelay: "-12s" }}
        />
        <div className="hero-grid absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(520px circle at var(--hx, 70%) var(--hy, 30%), var(--site-spotlight), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:gap-16 lg:gap-20">
        <div className="order-2 max-w-2xl md:order-1">
          <p className="hero-enter inline-flex items-center gap-3 rounded-full border border-primary/25 bg-card/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Hello, I&rsquo;m Deeya Pandey
          </p>

          <h1
            aria-label=".NET Developer building practical web applications."
            className="hero-enter-delay-1 mt-7 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            <span aria-hidden="true" className="block">
              .NET Developer building
            </span>
            {/* Invisible longest phrase reserves height so typing never shifts the layout. */}
            <span aria-hidden="true" className="grid">
              <span className="invisible col-start-1 row-start-1">{longestPhrase}</span>
              <span className="col-start-1 row-start-1">
                <span className="text-gradient">{typed}</span>
                <span className="caret ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] rounded-full bg-accent" />
              </span>
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

        <div
          onPointerMove={tilt}
          onPointerLeave={resetTilt}
          className="hero-enter-delay-2 order-1 mx-auto w-full max-w-[16rem] sm:max-w-[20rem] md:order-2 md:max-w-[23rem] lg:max-w-[24rem]"
        >
          <div
            ref={cardRef}
            className="relative transition-transform duration-300 ease-out [transform-style:preserve-3d]"
          >
            <div
              aria-hidden="true"
              className="bg-aurora absolute -inset-[2px] rounded-[1.1rem] opacity-70 blur-[2px]"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-card p-2 shadow-glow">
              <div
                aria-hidden="true"
                className="absolute inset-x-6 bottom-0 top-1/4 rounded-full bg-[var(--site-blob-1)] blur-3xl"
              />
              <img
                src={profileImage}
                alt="Deeya Pandey"
                fetchPriority="high"
                className="relative h-full w-full object-contain object-bottom"
              />
            </div>

            {floatingBadges.map((badge) => (
              <span
                key={badge.label}
                aria-hidden="true"
                className={`absolute hidden rounded-lg border border-border bg-card/90 px-3 py-1.5 font-mono text-xs font-semibold text-foreground shadow-lg backdrop-blur sm:block ${badge.className}`}
              >
                <span className="text-primary">#</span> {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-10 w-6 justify-center rounded-full border-2 border-border pt-2 transition-colors hover:border-primary">
          <span className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </span>
      </a>
    </section>
  );
}
