import SocialLinks from "../shared/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <a
            href="#home"
            className="font-mono text-base font-semibold text-primary transition-opacity hover:opacity-80"
          >
            &lt;DP /&gt;
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Deeya Pandey · Built with React
          </p>
        </div>

        <SocialLinks />
      </div>
    </footer>
  );
}
