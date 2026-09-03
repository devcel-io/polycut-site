import { Twitter } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Why", href: "#why" },
  { label: "Features", href: "#features" },
  { label: "How", href: "#how-it-works" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/88 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-5 px-6 sm:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="PolyCut home">
          <Image
            src="/polycut-logo-gradient.png"
            alt=""
            width={34}
            height={34}
            className="rounded-sm"
            priority
          />
          <span className="text-sm font-black uppercase leading-none">
            PolyCut
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 text-xs font-black uppercase text-white/70 sm:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[#f579c2]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://x.com/polycut_"
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center gap-2 rounded-full border border-white/20 px-3 text-xs font-black text-white transition hover:border-[#f579c2] hover:bg-[#f579c2] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f579c2] md:inline-flex"
            aria-label="Follow PolyCut on Twitter / X"
          >
            <Twitter size={15} strokeWidth={2.2} />
            <span>@polycut_</span>
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase text-black transition hover:bg-[#f579c2]"
          >
            Join waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
