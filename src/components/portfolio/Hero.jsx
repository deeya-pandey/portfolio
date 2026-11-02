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

const orbitBadges = [
  { label: "C#", angle: "20deg" },
  { label: "React", angle: "110deg" },
  { label: ".NET", angle: "200deg" },
  { label: "SQL", angle: "290deg" },
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
      className="relative isolate overflow-hidden pt-[calc(var(--header-height)+3.5rem)] pb-20 md:pt-[calc(var(--header-height)+5.5rem)] md:pb-28 lg:pb-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 32rem at 85% -10%, var(--site-halo), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(480px circle at var(--hx, 70%) var(--hy, 30%), var(--site-spotlight), transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container-page relative grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-12 lg:gap-20">
        <div className="order-2 max-w-2xl md:order-1">
          <p className="hero-enter inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 py-1.5 pl-3 pr-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground shadow-soft backdrop-blur sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Hello, I&rsquo;m Deeya Pandey
          </p>

          <h1
            aria-label=".NET Developer building practical web applications."
            className="hero-enter-delay-1 mt-7 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-[3.25rem] md:text-[3.5rem] lg:text-[4.25rem]"
          >
            <span aria-hidden="true" className="block">
              .NET Developer building
            </span>
            {/* Invisible longest phrase reserves height so typing never shifts the layout. */}
            <span aria-hidden="true" className="grid">
              <span className="invisible col-start-1 row-start-1">{longestPhrase}</span>
              <span className="col-start-1 row-start-1">
                <span className="text-gradient">{typed}</span>
                <span className="caret ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] rounded-full bg-primary" />
              </span>
            </span>
          </h1>

          <p className="hero-enter-delay-2 mt-7 inline-flex items-center gap-2 font-mono text-sm text-primary md:text-[0.9375rem]">
            <span className="text-muted-foreground">&gt;</span>
            .NET · React · SQL Server
          </p>

          <p className="hero-enter-delay-2 mt-4 max-w-[34rem] text-[1.0625rem] leading-[1.7] text-muted-foreground md:text-lg">
            I&rsquo;m a Junior .NET Developer from Nepal with hands-on experience
            building and maintaining web applications using .NET, React,
            Next.js, and SQL Server.
          </p>

          <div className="hero-enter-delay-3 mt-9 flex flex-wrap gap-3">
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
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>

            <Button href="#contact" variant="outline">
              Let&rsquo;s Connect
            </Button>
          </div>

          <SocialLinks className="hero-enter-delay-3 mt-10 border-t border-border pt-6" />
        </div>

        <div
          onPointerMove={tilt}
          onPointerLeave={resetTilt}
          className="hero-enter-delay-2 order-1 mx-auto w-full max-w-[15rem] sm:max-w-[19rem] md:order-2 md:max-w-[16.5rem] lg:max-w-[21rem] xl:max-w-[24rem]"
        >
          <div
            ref={cardRef}
            className="portrait relative aspect-[4/5] transition-transform duration-500 ease-out [transform-style:preserve-3d]"
          >
            {/* Orbit ring sits deepest; chips counter-spin so labels stay upright. */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[46%] aspect-square w-[116%] -translate-x-1/2 md:w-[106%] lg:w-[116%] -translate-y-1/2 [transform:translateZ(-40px)]"
            >
              <div className="orbit absolute inset-0 rounded-full border border-dashed border-border-strong">
                {orbitBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className="absolute inset-0"
                    style={{ transform: `rotate(${badge.angle})` }}
                  >
                    <span
                      className="absolute left-1/2 top-0"
                      style={{ transform: `translate(-50%, -50%) rotate(-${badge.angle})` }}
                    >
                      <span className="orbit-chip block rounded-md border border-border bg-card px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground shadow-soft sm:text-[11px]">
                        <span className="text-primary">#</span> {badge.label}
                      </span>
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <img
              src={profileImage}
              alt="Deeya Pandey"
              fetchPriority="high"
              className="portrait-cutout absolute inset-0 h-full w-full object-contain object-bottom [transform:translateZ(30px)]"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-3 w-40 rounded-xl border border-border bg-card/95 p-3 font-mono text-[10.5px] leading-relaxed shadow-glow backdrop-blur sm:-left-8 sm:w-48 sm:text-[11.5px] [transform:translateZ(60px)]"
            >
              <div className="mb-2 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-border-strong" />
                <span className="h-2 w-2 rounded-full bg-border-strong" />
                <span className="h-2 w-2 rounded-full bg-border-strong" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> whoami
              </p>
              <p className="text-foreground">deeya &middot; Kathmandu</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-9 w-[22px] justify-center rounded-full border border-border-strong pt-2 transition-colors duration-200 hover:border-primary">
          <span className="h-1.5 w-[3px] animate-bounce rounded-full bg-primary" />
        </span>
      </a>
    </section>
  );
}
