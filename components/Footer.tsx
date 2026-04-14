export function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 py-10 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-fg-dim">
        <div>© 2026 Cidra · MIT License</div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/sumin220/cidra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg-muted transition"
          >
            GitHub
          </a>
          <a
            href="https://github.com/sumin220/cidra/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg-muted transition"
          >
            Releases
          </a>
          <a
            href="https://github.com/sumin220/cidra/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg-muted transition"
          >
            Issues
          </a>
        </div>
      </div>
    </footer>
  );
}
