import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type LandingSectionProps = {
  id?: string;
  title: string;
  kicker?: string;
  children: ReactNode;
  visual?: ReactNode;
  tone?: "light" | "dark";
  reverse?: boolean;
};

export function LandingSection({
  id,
  title,
  kicker,
  children,
  visual,
  tone = "light",
  reverse = false,
}: LandingSectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      id={id}
      className={cn(
        "w-full py-14 sm:py-20",
        isDark ? "bg-black text-white" : "bg-white text-black",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center",
          reverse && "lg:grid-cols-[1.05fr_0.95fr]",
        )}
      >
        <div className={cn("space-y-6", reverse && "lg:order-2")}>
          <div className="space-y-3">
            {kicker ? (
              <p
                className={cn(
                  "text-xs font-black uppercase tracking-normal",
                  isDark ? "text-[#f579c2]" : "text-[#7c3aed]",
                )}
              >
                {kicker}
              </p>
            ) : null}
            <h2 className="font-black uppercase leading-[0.9] tracking-normal text-4xl sm:text-5xl">
              {title}
              <span className={isDark ? "text-[#f579c2]" : "text-[#7c3aed]"}>
                _
              </span>
            </h2>
          </div>
          <div
            className={cn(
              "max-w-md space-y-4 text-sm leading-tight",
              isDark ? "text-white/78" : "text-black/78",
            )}
          >
            {children}
          </div>
        </div>
        {visual ? <div className={reverse ? "lg:order-1" : ""}>{visual}</div> : null}
      </div>
    </section>
  );
}

type ProcessListProps = {
  items: Array<{
    title: string;
    description: string;
  }>;
};

export function ProcessList({ items }: ProcessListProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.title} className="space-y-2">
          <h3 className="text-sm font-black uppercase text-white">
            {item.title}
          </h3>
          <p className="max-w-xs text-xs leading-snug text-white/72">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
