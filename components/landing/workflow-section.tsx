import Image from "next/image";

type WorkflowItem = {
  number: string;
  title: string;
  description: string;
  src: string;
  alt: string;
};

type WorkflowSectionProps = {
  items: WorkflowItem[];
};

export function WorkflowSection({ items }: WorkflowSectionProps) {
  return (
    <section id="how-it-works" className="w-full bg-black py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl space-y-10 px-6 sm:px-8">
        <div className="space-y-3">
          <h2 className="font-black uppercase leading-[0.9] tracking-normal text-4xl sm:text-5xl">
            How it works
            <span className="text-[#f579c2]">_</span>
          </h2>
        </div>
        <div className="grid gap-3 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.number}
              className="border-2 border-[#f579c2] bg-black text-white"
            >
              <div className="aspect-video overflow-hidden bg-[#171021]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={560}
                  height={315}
                  unoptimized
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-5 p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-5xl font-black leading-none text-[#f579c2]">
                    {item.number}
                  </span>
                  <h3 className="text-right text-sm font-black uppercase leading-none">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs leading-snug text-white/72">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
