export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-muted-foreground md:flex-row">
        <p>
          © {new Date().getFullYear()} Deeya Pandey
        </p>

        <p className="font-mono">
          Built with React
        </p>
      </div>
    </footer>
  );
}