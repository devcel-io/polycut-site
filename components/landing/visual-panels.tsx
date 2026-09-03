import Image from "next/image";

import { cn } from "@/lib/utils";

type DemoClip = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

export function DemoClipGrid({
  clips,
  className,
}: {
  clips: DemoClip[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-2 bg-black p-2", className)}>
      {clips.map((clip) => (
        <article
          key={clip.src}
          className="grid gap-2 bg-black text-white sm:grid-cols-[0.95fr_1.05fr] sm:items-center"
        >
          <div className="aspect-video overflow-hidden bg-black">
            <Image
              src={clip.src}
              alt={clip.alt}
              width={560}
              height={315}
              unoptimized
              sizes="(min-width: 1024px) 260px, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-2 px-1 pb-3 sm:px-2 sm:py-3">
            <h3 className="text-sm font-black uppercase leading-none text-[#f579c2]">
              {clip.title}
            </h3>
            <p className="max-w-xs text-xs leading-snug text-white/72">
              {clip.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function RoseSignalBand() {
  return (
    <section className="relative overflow-hidden bg-[#f579c2] py-12">
      <div className="absolute inset-y-0 left-[12%] w-28 -skew-x-[18deg] bg-[#c9c7f6]" />
      <div className="absolute inset-y-0 left-[31%] w-24 -skew-x-[18deg] bg-[#e5e1ff]" />
      <div className="absolute inset-y-0 left-[43%] w-16 -skew-x-[18deg] bg-[#7f4bf2]" />
      <div className="relative mx-auto flex max-w-6xl justify-center px-6">
        <a
          href="#waitlist"
          className="rounded-full bg-white px-8 py-3 text-sm font-black uppercase tracking-normal text-black shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition hover:bg-black hover:text-white"
        >
          Join waiting list
        </a>
      </div>
    </section>
  );
}
