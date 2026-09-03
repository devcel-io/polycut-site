import {
  DemoClipGrid,
  RoseSignalBand,
} from "@/components/landing/visual-panels";
import { LandingSection } from "@/components/landing/landing-section";
import { CredibilitySection } from "@/components/landing/credibility-section";
import { HeroVideo } from "@/components/landing/hero-video";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { WorkflowSection } from "@/components/landing/workflow-section";

const workflowSteps = [
  {
    number: "1",
    title: "Pick",
    description:
      "Import images and set up your label, tags and attributes.",
    src: "/videos/polycut-gallery.gif",
    alt: "PolyCut gallery clip showing image selection",
  },
  {
    number: "2",
    title: "Draw",
    description:
      "Annotate with Apple Pencil. Polygons, bounding boxes, key points and masks stay precise.",
    src: "/videos/polycut-demo-1.gif",
    alt: "PolyCut demo clip showing annotation drawing",
  },
  {
    number: "3",
    title: "Export",
    description:
      "One tap COCO, JSON and Roboflow-ready export for your training pipeline.",
    src: "/videos/polycut-demo-4.gif",
    alt: "PolyCut demo clip showing dataset export",
  },
];

const demoClips = [
  {
    title: "Draw",
    description: "Mark regions directly with Apple Pencil for precise labels.",
    src: "/videos/polycut-demo-1.gif",
    alt: "PolyCut demo clip showing annotation drawing",
  },
  {
    title: "AI assisted annotation SAM2",
    description: "Tighten annotations with assisted tools before export.",
    src: "/videos/polycut-demo-3.gif",
    alt: "PolyCut demo clip showing SAM2 assisted annotation",
  },
  {
    title: "Export",
    description: "Package annotations for COCO and Roboflow-ready pipelines.",
    src: "/videos/polycut-demo-4.gif",
    alt: "PolyCut demo clip showing dataset export",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="w-full bg-black py-10 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase leading-none text-black">
              Early access
            </div>
            <div className="space-y-3">
              <h1 className="text-6xl font-black uppercase leading-[0.82] tracking-normal sm:text-7xl lg:text-8xl">
                PolyCut
              </h1>
              <p className="text-lg font-black uppercase tracking-normal text-white">
                Draw. Label. Export
              </p>
            </div>
            <p className="max-w-xs text-sm leading-tight text-white/78">
              Annotate with Apple Pencil. From sketch to dataset.
            </p>
            <a
              href="#waitlist"
              className="inline-flex w-full max-w-sm items-center justify-center rounded-full bg-[#f579c2] px-8 py-3 text-sm font-black uppercase text-white transition hover:bg-white hover:text-black"
            >
              Join waiting list
            </a>
          </div>
          <HeroVideo
            src="/videos/polycut-hero-demo.mp4"
            poster="/videos/polycut-hero-poster.jpg"
            className="max-w-2xl lg:max-w-none"
          />
        </div>
      </section>

      <LandingSection
        id="why"
        title="Why PolyCut"
        kicker="Annotation power at your fingertips"
        visual={<DemoClipGrid clips={demoClips} />}
      >
        <p>
          Existing annotation tools are web-based, require accounts and feel
          heavy when the work is visual and fast.
        </p>
        <p>
          With <strong className="font-black text-black">PolyCut</strong> you
          can label images on your iPad using your Apple Pencil and export your
          annotated dataset instantly to COCO or Roboflow-ready formats.
        </p>
      </LandingSection>

      <CredibilitySection />

      <WorkflowSection items={workflowSteps} />

      <RoseSignalBand />

      <section id="waitlist" className="w-full bg-black py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="max-w-sm text-6xl font-black uppercase leading-[0.86] tracking-normal sm:text-7xl">
              Be the first
              <span className="block h-2 w-28 bg-white" aria-hidden="true" />
            </h2>
            <p className="max-w-xs text-sm leading-tight text-white/72">
              Join our waiting list for early access and launch benefits.
            </p>
          </div>
          <div className="w-full max-w-xl lg:pt-8">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
