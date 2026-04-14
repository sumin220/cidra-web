import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <nav className="w-full max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2.5">
        <Image
          src="/icon.png"
          alt="Cidra"
          width={28}
          height={28}
          className="rounded-[6px]"
        />
        <span className="font-semibold text-[15px] tracking-tight">Cidra</span>
      </Link>
      <div className="flex items-center gap-6 text-[13px] text-fg-muted">
        <a href="#features" className="hover:text-fg transition">
          Features
        </a>
        <a href="#install" className="hover:text-fg transition">
          Install
        </a>
        <a
          href="https://github.com/sumin220/cidra"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fg transition"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
