import { Download, ScissorsLineDashed, TabletSmartphone } from "lucide-react";

const featureItems = [
  {
    title: "iPad and Apple Pencil support",
    description:
      "Built for direct pen input, so precise masks and polygon edits feel natural on the canvas.",
    icon: TabletSmartphone,
  },
  {
    title: "SAM2, GrabCut and offline tools",
    description:
      "Combine assisted segmentation with local editing workflows when you need speed without losing control.",
    icon: ScissorsLineDashed,
  },
  {
    title: "COCO and Roboflow export",
    description:
      "Export annotations for COCO datasets or Roboflow projects so your labels move cleanly into training pipelines.",
    icon: Download,
  },
];

export function CredibilitySection() {
  return (
    <section id="features" className="w-full bg-[#f579c2] py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-8 flex flex-col gap-3 text-black sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl text-4xl font-black uppercase leading-[0.9] tracking-normal sm:text-5xl">
            Built for real annotation work
            <span className="text-white">_</span>
          </h2>
          <p className="max-w-sm text-sm font-medium leading-tight">
            The essentials for going from raw images to usable training data,
            without heavy browser tooling.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {featureItems.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="border-2 border-black bg-black p-5 text-white"
            >
              <div className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                <Icon size={20} strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black uppercase leading-none">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-tight text-white/70">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
