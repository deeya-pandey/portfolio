import { useEffect, useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(
    () => window.localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          className="font-mono text-lg font-semibold text-primary"
        >
          &lt;DP /&gt;
        </a>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="font-mono text-sm text-muted-foreground transition hover:text-primary"
              >
                {name}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsDark((currentTheme) => !currentTheme)}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
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
        </div>
      </nav>
    </header>
  );
}