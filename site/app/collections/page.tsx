import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, InnerPageShell } from "../components";

const collections = [
  {
    title: "Everyday Forms",
    text: "Handmade ceramic cups, bowls, and plates with softened profiles for daily routines and slower breakfasts.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&h=1100&fit=crop",
  },
  {
    title: "Shoreline Serving",
    text: "Serving platters and open ceramic vessels that carry a washed coastal palette with quiet weight.",
    image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?w=900&h=1100&fit=crop",
  },
  {
    title: "Kōwhai Season",
    text: "Short-run ceramic vessels and bud forms tuned to spring stems, pollen tones, and lighter tabletops.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=900&h=1100&fit=crop",
  },
  {
    title: "Fired Earth Editions",
    text: "Richer iron finishes and darker ceramic silhouettes intended for shelves, consoles, and gathered rooms.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=1100&fit=crop",
  },
];

export const metadata: Metadata = {
  title: "Ceramic Collections in Raglan | Kōwhai & Clay",
  description:
    "Browse handmade ceramic collections from Kōwhai & Clay in Raglan, including ceramic tableware, sculptural vessels, and bespoke ceramic commissions.",
  keywords: [
    "handmade ceramic collections Raglan",
    "Raglan ceramic tableware",
    "sculptural ceramic vessels NZ",
    "bespoke ceramics Raglan",
    "small-batch ceramics Waikato",
  ],
  alternates: {
    canonical: "/collections/",
  },
};

export default function CollectionsPage() {
  return (
    <InnerPageShell>
      <section className="relative h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1600&h=800&fit=crop"
          alt="Handmade ceramic collections from the Raglan studio arranged in a warm editorial interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-iron/40" />
        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-end px-5 py-12 text-limestone sm:px-8 lg:px-10 lg:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-limestone/75">Collections</p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl leading-[0.98] sm:text-6xl">
            Handmade ceramic collections in Raglan for daily use, gathered tables, and textured interiors.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-limestone/84">
            Releases stay intentionally small. Each collection explores a mood, a glaze family, and
            a rhythm of use rather than a fixed catalogue.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1280px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Collections" }]} />
          <div className="flex flex-wrap gap-3">
            {["Everyday", "Serving", "Seasonal", "Sculptural", "Commissionable"].map((tag) => (
              <span key={tag} className="rounded-full border border-iron/12 bg-white/70 px-4 py-2 text-sm text-iron/78">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-[1280px] gap-6 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((collection) => (
            <article key={collection.title} className="overflow-hidden rounded-[24px] bg-white/80 shadow-[0_8px_24px_rgba(40,36,33,0.06)]">
              <div className="overflow-hidden">
                <img
                  src={collection.image}
                  alt={`${collection.title} handmade ceramic collection from Kōwhai and Clay in Raglan, Waikato`}
                  className="h-[340px] w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-umber">Collection</p>
                <h2 className="mt-3 font-heading text-3xl">{collection.title}</h2>
                <p className="mt-3 text-base leading-7 text-iron/74">{collection.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[1100px] rounded-[32px] bg-clay/55 px-8 py-12 shadow-[0_14px_40px_rgba(40,36,33,0.10)] sm:px-12 sm:py-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Bespoke commissions</p>
              <h2 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl">
                Need a considered run of handmade ceramic tableware, vessels, or objects for a project?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-iron/76">
                The studio works on limited commission briefs for interiors, hospitality, and private
                collectors seeking quieter, materially grounded ceramics.
              </p>
            </div>
            <Link href="/contact/" className="inline-flex rounded-full bg-iron px-6 py-3 text-sm uppercase tracking-[0.2em] text-limestone transition hover:-translate-y-0.5 hover:bg-umber">
              Start an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}
