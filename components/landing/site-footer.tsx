import { Github, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    label: "Twitter / X",
    href: "https://x.com/polycut_",
    icon: Twitter,
  },
  {
    label: "GitHub",
    status: "Coming soon",
    icon: Github,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@PolyCutApp",
    icon: Youtube,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/12 bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-7">
          <div className="flex items-center gap-3">
            <Image
              src="/polycut-logo-gradient.png"
              alt=""
              width={34}
              height={34}
              className="rounded-sm"
            />
            <p className="text-xl font-black uppercase leading-none">PolyCut</p>
          </div>
          <p className="max-w-sm text-xs leading-tight text-white/55">
            Draw precise labels on iPad and export datasets for your training
            pipeline.
          </p>

          <nav aria-label="Social links" className="flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, status, icon: Icon }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/25 px-4 text-sm font-black text-white transition hover:border-[#f579c2] hover:bg-[#f579c2] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f579c2]"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={19} strokeWidth={2.2} />
                  <span>{label === "Twitter / X" ? "@polycut_" : "@PolyCutApp"}</span>
                </a>
              ) : (
                <span
                  key={label}
                  className="inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-sm font-black text-white/45"
                  aria-label={`${label} ${status}`}
                  title={`${label} ${status}`}
                >
                  <Icon size={19} strokeWidth={2.2} />
                  <span>{status}</span>
                </span>
              ),
            )}
          </nav>
        </div>

        <div className="overflow-hidden border border-white/12 bg-white/5">
          <Image
            src="/og.png"
            alt="PolyCut social preview with Draw. Label. Export. artwork"
            width={1200}
            height={630}
            className="h-auto w-full"
          />
        </div>
      </div>
    </footer>
  );
}
