import type { Metadata } from "next";
import { Breadcrumbs, InnerPageShell, InverseButton } from "../components";

const formats = [
  {
    title: "Intro to Wheel Throwing",
    text: "A foundational pottery workshop covering centring, cylinders, and trimming with generous tutor guidance.",
  },
  {
    title: "Hand-Build a Serving Set",
    text: "Shape platters, bowls, and small dishes with a focus on proportion, finish, and glaze choices.",
  },
  {
    title: "Private Studio Session",
    text: "Tailored gatherings for friends, creative teams, or special occasions wanting a slower shared ceramics experience.",
  },
];

export const metadata: Metadata = {
  title: "Pottery Workshops in Raglan | Kōwhai & Clay",
  description:
    "Explore pottery workshops in Raglan at Kōwhai & Clay, from wheel throwing and hand-building to private ceramic studio sessions in Waikato.",
  keywords: [
    "pottery workshops Raglan",
    "ceramics workshop Waikato",
    "wheel throwing Raglan",
    "private pottery workshop NZ",
    "Raglan pottery classes",
  ],
  alternates: {
    canonical: "/workshops/",
  },
};

export default function WorkshopsPage() {
  return (
    <InnerPageShell>
      <section className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&h=900&fit=crop"
          alt="Pottery workshop space in Raglan with handmade ceramics tools and warm studio atmosphere"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-iron/48" />
        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-end px-5 py-12 text-limestone sm:px-8 lg:px-10 lg:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-limestone/75">Workshops</p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl leading-[0.98] sm:text-6xl">
            Pottery workshops in Raglan designed for curiosity, confidence, and slower making.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-limestone/84">
            Classes stay intimate so the studio can support technique, experimentation, and the
            simple pleasure of working with clay at a thoughtful pace.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workshops" }]} />
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[24px] bg-white/75 p-7 shadow-[0_8px_24px_rgba(40,36,33,0.06)]">
              <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-umber">What to expect</h2>
              <p className="mt-4 text-lg leading-8 text-iron/76">
                Sessions include demonstration, hands-on making time, glazing guidance, and a calm
                studio setting with tea, local treats, and enough room to ask practical questions.
              </p>
            </div>
            <div className="rounded-[24px] bg-white/75 p-7 shadow-[0_8px_24px_rgba(40,36,33,0.06)]">
              <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Who it suits</h2>
              <p className="mt-4 text-lg leading-8 text-iron/76">
                Beginners, returning makers, and private groups looking for a tactile experience that
                values process as much as the finished piece.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-[1280px] gap-6 md:grid-cols-3">
          {formats.map((format) => (
            <article key={format.title} className="rounded-[24px] bg-clay/45 p-7 shadow-[0_8px_24px_rgba(40,36,33,0.06)]">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-umber">Format</p>
              <h2 className="mt-4 font-heading text-3xl leading-tight">{format.title}</h2>
              <p className="mt-4 text-base leading-7 text-iron/74">{format.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-[1280px] gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-[28px] shadow-[0_14px_40px_rgba(40,36,33,0.10)]">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&h=800&fit=crop"
              alt="Ceramics class table setup with tools ready for a Raglan pottery workshop"
              className="h-[360px] w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-[28px] shadow-[0_14px_40px_rgba(40,36,33,0.10)]">
            <img
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1000&h=800&fit=crop"
              alt="Small group pottery workshop in a warm collaborative studio setting in Raglan"
              className="h-[360px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[1100px] rounded-[32px] bg-iron px-8 py-12 text-limestone shadow-[0_24px_80px_rgba(40,36,33,0.12)] sm:px-12 sm:py-14">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-limestone/70">Booking</p>
          <h2 className="mt-4 max-w-2xl font-heading text-4xl leading-tight sm:text-5xl">
            Reserve a place for a selected weekend pottery workshop or plan a private studio gathering.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-limestone/82">
            Dates are released in small groups to keep sessions intimate and paced well.
          </p>
          <div className="mt-8">
            <InverseButton href="/contact/" label="Book a Workshop" />
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}
