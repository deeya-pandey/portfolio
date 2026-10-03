const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          className="font-mono text-lg font-semibold text-primary"
        >
          &lt;DP /&gt;
        </a>

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
      </nav>
    </header>
  );
}