import { useEffect, useRef, useState } from "react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function getInitialTheme() {
  const stored = window.localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function Navbar() {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const isFirstThemeRender = useRef(true);

  useEffect(() => {
    const root = document.documentElement;
    let timer;

    // Cross-fade colours on a user toggle, but never on the first paint.
    if (!isFirstThemeRender.current) {
      root.classList.add("theme-transition");
      timer = window.setTimeout(() => root.classList.remove("theme-transition"), 400);
    }
    isFirstThemeRender.current = false;

    root.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", isDark ? "dark" : "light");

    return () => window.clearTimeout(timer);
  }, [isDark]);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = links
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setHasScrolled(window.scrollY > 8);
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the page behind the open mobile menu from scrolling.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        hasScrolled || isMenuOpen
          ? "border-border/80 bg-background/80 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent"
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-primary/70"
        style={{ transform: `scaleX(${progress})` }}
      />

      <nav
        aria-label="Primary"
        className="container-page flex h-[var(--header-height)] items-center justify-between"
      >
        <a
          href="#home"
          className="font-mono text-base font-semibold tracking-tight text-primary transition-opacity duration-200 hover:opacity-75"
        >
          &lt;DP /&gt;
        </a>

        <div className="flex items-center gap-2 md:gap-3">
          <ul className="hidden items-center gap-0.5 md:flex lg:gap-1">
            {links.map(([name, id]) => {
              const isActive = activeSection === id;

              return (
                <li key={name}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {name}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary transition-[opacity,transform] duration-300 ${
                        isActive ? "opacity-100" : "scale-0 opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <span aria-hidden="true" className="mx-1 hidden h-5 w-px bg-border md:block" />

          <button
            type="button"
            onClick={() => setIsDark((current) => !current)}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
            className="icon-button"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[18px] w-[18px]"
            >
              {isDark ? (
                <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </>
              ) : (
                <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" />
              )}
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="icon-button md:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="h-[18px] w-[18px]"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!isMenuOpen}
        className="menu-in border-t border-border/70 md:hidden"
      >
        <ul className="container-page py-3">
          {links.map(([name, id]) => (
            <li key={name}>
              <a
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeSection === id ? "true" : undefined}
                className={`flex items-center justify-between rounded-lg px-3 py-3 text-[0.9375rem] font-medium transition-colors duration-200 ${
                  activeSection === id
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`h-1 w-1 rounded-full ${
                      activeSection === id ? "bg-primary" : "bg-border-strong"
                    }`}
                  />
                  {name}
                </span>
                <span aria-hidden="true" className="text-xs opacity-60">
                  &rarr;
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
