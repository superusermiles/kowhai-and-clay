import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, InnerPageShell } from "../components";

export const metadata: Metadata = {
  title: "About the Raglan Ceramics Studio | Kōwhai & Clay",
  description:
    "Learn about the Kōwhai & Clay handmade ceramics studio in Raglan, Waikato, and the pottery approach behind each small-batch collection and workshop.",
  keywords: [
    "Raglan ceramics studio",
    "about Kōwhai and Clay",
    "handmade pottery Raglan",
    "Waikato ceramic studio",
    "small-batch ceramics Raglan",
  ],
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  return (
    <InnerPageShell>
      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">About the studio</p>
              <h1 className="mt-4 font-heading text-5xl leading-[0.98] sm:text-6xl">
                About Kōwhai &amp; Clay, a handmade ceramics studio in Raglan.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-iron/76">
                Kōwhai &amp; Clay began as a way of making handmade ceramic tableware that felt both grounded and gently ceremonial. The studio draws on Raglan&apos;s changing weather, softened shoreline tones, and a preference for objects that improve with daily handling.
              </p>
              <Link
                href="/contact/"
                className="mt-8 inline-flex rounded-full bg-iron px-6 py-3 text-sm uppercase tracking-[0.2em] text-limestone transition hover:-translate-y-0.5 hover:bg-umber"
              >
                Commission Enquiry
              </Link>
            </div>
            <div className="overflow-hidden rounded-[28px] shadow-[0_24px_80px_rgba(40,36,33,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1000&h=1200&fit=crop"
                alt="Founder portrait representing the Kōwhai and Clay handmade ceramics studio in Raglan"
                className="h-[560px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="prose-copy mx-auto max-w-[720px] text-lg leading-8 text-iron/78">
          <h2 className="font-heading text-4xl text-iron">A pottery practice grounded in utility and variation</h2>
          <p>
            The work begins with utility. Bowls should feel balanced in the hand. Serving pieces
            should sit easily among linen, timber, and food. Vessels should hold stems or stand on
            their own with equal ease.
          </p>
          <p>
            From there, variation is welcomed. Edges remain slightly softened. Glazes shift with
            the kiln. Iron flecks and warm slips are allowed to speak. The intention is not a rigid
            set, but a family of objects that belong together.
          </p>
          <p>
            Production stays deliberately small so each release can retain that sense of attention.
            Pieces are tested at the table, observed in changing light, and refined through use
            rather than speed.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[32px] shadow-[0_14px_40px_rgba(40,36,33,0.10)]">
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&h=800&fit=crop"
            alt="Shelves of handmade ceramics in a calm Raglan studio interior at Kōwhai and Clay"
            className="h-[520px] w-full object-cover"
          />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="overflow-hidden rounded-[24px] shadow-[0_14px_40px_rgba(40,36,33,0.10)]">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&h=1100&fit=crop"
              alt="Natural materials and handmade pottery textures inspiring the Raglan ceramics studio palette"
              className="h-full min-h-[440px] w-full object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Values</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {[
                ["Craft", "Pieces are refined by hand, not by formula, with each firing informing the next."],
                ["Utility", "Forms are designed to be used often and to age gracefully at the table."],
                ["Variation", "Small shifts in glaze, foot, and edge are treated as part of the work's character."],
                ["Locality", "Raglan's atmosphere and slower pace continue to shape the palette and mood."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[24px] bg-white/75 p-6 shadow-[0_8px_24px_rgba(40,36,33,0.06)]">
                  <h3 className="font-heading text-3xl">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-iron/74">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[980px] rounded-[32px] bg-clay/60 px-8 py-12 text-center shadow-[0_14px_40px_rgba(40,36,33,0.10)] sm:px-12">
          <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
            “The aim is not perfection. It is presence — pieces that make a room feel calmer and a
            table feel more considered.”
          </h2>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.28em] text-umber">
            Kōwhai &amp; Clay studio manifesto
          </p>
        </div>
      </section>
    </InnerPageShell>
  );
}
