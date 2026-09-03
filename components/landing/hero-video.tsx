"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type HeroVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export function HeroVideo({ src, poster, className }: HeroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "360px 0px" },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-video overflow-hidden border-4 border-[#f579c2] bg-[#171021] shadow-[0_24px_80px_rgba(245,121,194,0.22)]",
        className,
      )}
    >
      <Image
        src={poster}
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 55vw, 100vw"
        className={cn(
          "object-cover transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100",
        )}
      />
      {shouldLoad ? (
        <video
          aria-label="PolyCut demo showing Apple Pencil image annotation"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          onLoadedData={() => setIsLoaded(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
          )}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
      <div
        className="pointer-events-none absolute inset-0 ring-2 ring-inset ring-white/10"
        aria-hidden="true"
      />
    </div>
  );
}
