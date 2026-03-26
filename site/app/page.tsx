import type { Metadata } from "next";
import Link from "next/link";
import { PrimaryButton, SiteFooter, SiteHeader } from "./components";

type Cta = {
  href: string;
  label: string;
};

type CollectionItem = {
  title: string;
  text: string;
  image: string;
  href: string;
  size: "tall" | "wide" | "standard";
  code: string;
};

type JournalPost = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
};

const collectionItems: CollectionItem[] = [
  {
    title: "Everyday Forms",
    text: "Handmade ceramic bowls, cups, and plates designed for daily use, slower breakfasts, and thoughtful tables.",
    image:
      "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=900&h=1100&fit=crop",
    href: "/collections/",
    size: "tall",
    code: "ED-01",
  },
  {
    title: "Table Objects",
    text: "Serving pieces and sculptural ceramic vessels with limestone glazes and smoke-toned finishes for gathered spaces.",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=900&h=700&fit=crop",
    href: "/collections/",
    size: "wide",
    code: "TO-02",
  },
  {
    title: "Seasonal Vessels",
    text: "Small-batch ceramic vessels shaped by kōwhai bloom, coastal winds, and the pace of the Raglan studio kiln.",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=700&h=900&fit=crop",
    href: "/collections/",
    size: "standard",
    code: "SV-03",
  },
];

const journalPosts: JournalPost[] = [
  {
    title: "Setting a slower morning table",
    excerpt:
      "A few notes on texture, negative space, and choosing handmade ceramics that encourage lingering over the first pour.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=1000&fit=crop",
    date: "08 March 2026",
    slug: "/journal/",
  },
  {
    title: "Objects that hold warmth",
    excerpt:
      "Why clay, linen, and timber continue to anchor the studio's interior references and glaze decisions.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=1000&fit=crop",
    date: "18 February 2026",
    slug: "/journal/",
  },
  {
    title: "The brief life of seasonal stems",
    excerpt:
      "On arranging branch cuttings and small blooms in sculptural ceramic vessels made for impermanence.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=1000&fit=crop",
    date: "02 February 2026",
    slug: "/journal/",
  },
];

export const metadata: Metadata = {
  title: "Handmade Ceramics Studio in Raglan | Kōwhai & Clay",
  description:
    "Discover handmade ceramics in Raglan, New Zealand, including small-batch ceramic tableware, sculptural vessels, custom commissions, and pottery workshops.",
  keywords: [
    "handmade ceramics Raglan",
    "Raglan pottery studio",
    "ceramic tableware New Zealand",
    "pottery workshops Raglan",
    "small-batch ceramics Waikato",
  ],
  alternates: {
    canonical: "/",
  },
};

function SecondaryButton({ href, label }: Cta) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-iron/15 px-6 py-3 text-sm uppercase tracking-[0.2em] text-iron transition duration-300 hover:-translate-y-0.5 hover:border-kowhai hover:bg-white/70"
    >
      {label}
    </Link>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={`max-w-[720px] ${centered ? "mx-auto text-center" : ""}`}>
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">{eyebrow}</p>
      <h2 className="mt-4 font-heading text-4xl leading-tight text-iron sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-iron/76">{body}</p>
    </div>
  );
}

function HeroSplitEditorial() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(216,194,174,0.42),_transparent_38%),linear-gradient(180deg,_#f5f0e9_0%,_#f3eee6_100%)] px-5 pb-18 pt-10 sm:px-8 lg:px-10 lg:pb-24 lg:pt-14">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">
            Handmade ceramics in Raglan, Aotearoa
          </p>
          <h1 className="mt-5 max-w-xl font-heading text-5xl leading-[0.95] text-iron sm:text-6xl lg:text-[4rem]">
            Handmade ceramics studio in Raglan for thoughtful homes and gathered tables.
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-9 text-iron/76">
            Small-batch ceramic tableware, sculptural vessels, and pottery workshops shaped by coast,
            clay, and quiet ritual.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/collections/" label="View Collections" />
            <SecondaryButton href="/workshops/" label="Book a Workshop" />
          </div>
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-clay bg-white/55 px-5 py-3 text-sm text-iron/72 shadow-[0_8px_24px_rgba(40,36,33,0.06)]">
            <span className="h-2.5 w-2.5 rounded-full bg-kowhai" />
            Raglan, Aotearoa New Zealand
          </div>
        </div>
        <div className="relative min-h-[500px]">
          <div className="ml-auto w-[82%] overflow-hidden rounded-[28px] shadow-[0_24px_80px_rgba(40,36,33,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&h=1500&fit=crop"
              alt="Handmade ceramic vessels from a Raglan ceramics studio in warm natural light"
              className="h-[520px] w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[44%] overflow-hidden rounded-[24px] border-8 border-limestone shadow-[0_14px_40px_rgba(40,36,33,0.10)]">
            <img
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=700&h=900&fit=crop"
              alt="Small-batch ceramic vessels styled for a New Zealand pottery collection"
              className="h-[260px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CollectionBentoGrid({ items }: { items: CollectionItem[] }) {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2 md:auto-rows-[260px]">
      {items.map((item) => {
        const sizeClass =
          item.size === "tall"
            ? "md:row-span-2"
            : item.size === "wide"
              ? "md:col-span-1"
              : "";

        return (
          <Link
            key={item.title}
            href={item.href}
            className={`group relative overflow-hidden rounded-[24px] bg-clay/35 shadow-[0_8px_24px_rgba(40,36,33,0.06)] ${sizeClass}`}
          >
            <img
              src={item.image}
              alt={`${item.title} handmade ceramic collection from Kōwhai and Clay in Raglan`}
              className="h-full min-h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-iron/72 via-iron/18 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-limestone/80">
                {item.code}
              </p>
              <h3 className="mt-3 font-heading text-3xl text-limestone">{item.title}</h3>
              <p className="mt-3 max-w-md text-base leading-7 text-limestone/84">{item.text}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function ImageTextBand({
  title,
  body,
  image,
  cta,
}: {
  title: string;
  body: string;
  image: string;
  cta?: Cta;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
      <div className="overflow-hidden rounded-[24px] shadow-[0_14px_40px_rgba(40,36,33,0.10)]">
        <img
          src={image}
          alt="Potter shaping handmade ceramics in a Raglan studio process"
          className="h-[420px] w-full object-cover"
        />
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Studio process</p>
        <h2 className="mt-4 font-heading text-4xl leading-tight text-iron sm:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-iron/76">{body}</p>
        {cta ? <div className="mt-8"><SecondaryButton {...cta} /></div> : null}
      </div>
    </div>
  );
}

function WorkshopBanner() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[32px]">
        <div className="relative h-[520px]">
          <img
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1600&h=900&fit=crop"
            alt="Pottery workshop in Raglan with handmade ceramics and warm natural light"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-iron/45" />
          <div className="relative flex h-full max-w-3xl flex-col justify-end px-7 py-10 text-limestone sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-limestone/75">
              Weekend workshops
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl">
              Raglan pottery workshops shaped by experimentation, conversation, and clay.
            </h2>
            <p className="mt-5 text-lg leading-8 text-limestone/84">
              Small group sessions balance practical technique with a slower approach to making,
              glazing, and gathering around the worktable.
            </p>
            <div className="mt-8">
              <Link
                href="/workshops/"
                className="inline-flex items-center justify-center rounded-full bg-limestone px-6 py-3 text-sm uppercase tracking-[0.2em] text-iron transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Workshops
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JournalCardGrid({ posts }: { posts: JournalPost[] }) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.title}
          className="group overflow-hidden rounded-[24px] bg-white/80 shadow-[0_8px_24px_rgba(40,36,33,0.06)] transition duration-300 hover:-translate-y-1"
        >
          <div className="overflow-hidden">
            <img
              src={post.image}
              alt={`${post.title} journal feature with handmade ceramics and editorial styling`}
              className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-umber">{post.date}</p>
            <h3 className="mt-3 font-heading text-3xl leading-tight text-iron">{post.title}</h3>
            <p className="mt-3 text-base leading-7 text-iron/74">{post.excerpt}</p>
            <Link
              href={post.slug}
              className="mt-5 inline-flex text-sm uppercase tracking-[0.2em] text-iron transition hover:text-umber"
            >
              Read Journal
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function NewsletterSection() {
  return (
    <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
      <div className="mx-auto max-w-[1100px] rounded-[32px] bg-white/82 px-8 py-12 shadow-[0_14px_40px_rgba(40,36,33,0.10)] sm:px-12 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Studio notes</p>
            <h2 className="mt-4 font-heading text-4xl leading-tight text-iron sm:text-5xl">
              Occasional letters on new ceramic drops, workshop dates, and the textures shaping the season.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-iron/76">
              Join a considered mailing list for first access to collections, slow-table inspiration,
              and updates from the Raglan studio.
            </p>
          </div>
          <form className="grid gap-4 rounded-[28px] bg-limestone p-6 shadow-[0_8px_24px_rgba(40,36,33,0.06)] sm:p-7">
            <label className="grid gap-2 text-sm text-iron/74">
              Email address
              <input
                type="email"
                placeholder="you@example.com"
                className="rounded-[16px] border border-iron/12 bg-white px-4 py-3"
                aria-label="Email address"
              />
            </label>
            <button className="inline-flex items-center justify-center rounded-full bg-iron px-6 py-3 text-sm uppercase tracking-[0.2em] text-limestone transition duration-300 hover:-translate-y-0.5 hover:bg-umber">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="bg-limestone text-iron">
      <SiteHeader transparent />
      <HeroSplitEditorial />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionIntro
            eyebrow="Founder note"
            title="Made to be handled often, gathered around, and lived with over time."
            body="Each piece begins with a practical gesture: a bowl that holds warmth comfortably, a platter that sits quietly at the centre of a table, or a vessel with enough presence to change a room without demanding it."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Drops", "Small-batch"],
              ["Finishes", "Hand-finished"],
              ["Studio", "Raglan based"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[24px] bg-white/80 p-6 shadow-[0_8px_24px_rgba(40,36,33,0.06)]">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-umber">{label}</p>
                <p className="mt-3 font-heading text-3xl text-iron">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionIntro
            eyebrow="Featured collections"
            title="A considered mix of utility, sculpture, and seasonal variation."
            body="Collections are released in small groups, with glazes and forms shifting slightly from one firing to the next. The result is cohesive, but never identical."
          />
          <CollectionBentoGrid items={collectionItems} />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <ImageTextBand
            title="The studio works slowly, favouring touch, repetition, and close attention to finish."
            body="Forms are refined through test throws, hand-built adjustments, and glaze trials that respond to changing light. That pace makes room for subtle details: softened rims, iron-speckled surfaces, and pieces that feel calm in the hand."
            image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=900&fit=crop"
            cta={{ href: "/about/", label: "Read the Studio Story" }}
          />
        </div>
      </section>

      <WorkshopBanner />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionIntro
            eyebrow="From the journal"
            title="Editorial notes on objects, interiors, and the rituals that shape them."
            body="The journal gathers references from the studio and beyond: table settings, material studies, and small domestic details that influence the next collection."
          />
          <JournalCardGrid posts={journalPosts} />
        </div>
      </section>

      <NewsletterSection />
      <SiteFooter />
    </main>
  );
}
