import type { Metadata } from "next";
import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

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

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/collections/", label: "Collections" },
  { href: "/workshops/", label: "Workshops" },
  { href: "/journal/", label: "Journal" },
  { href: "/contact/", label: "Contact" },
];

const collectionItems: CollectionItem[] = [
  {
    title: "Everyday Forms",
    text: "Soft-rimmed bowls, cups, and plates designed for daily use and quieter tables.",
    image:
      "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=900&h=1100&fit=crop",
    href: "/collections/",
    size: "tall",
    code: "ED-01",
  },
  {
    title: "Table Objects",
    text: "Serving pieces and centre-table vessels with limestone glazes and smoke-toned finishes.",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=900&h=700&fit=crop",
    href: "/collections/",
    size: "wide",
    code: "TO-02",
  },
  {
    title: "Seasonal Vessels",
    text: "Short runs shaped by kōwhai bloom, coastal winds, and the pace of the studio kiln.",
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
      "A few notes on texture, negative space, and choosing pieces that encourage lingering over the first pour.",
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
      "On arranging branch cuttings and small blooms in vessels that are made for impermanence.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=1000&fit=crop",
    date: "02 February 2026",
    slug: "/journal/",
  },
];

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover small-batch ceramics, tactile workshop experiences, and editorial journal notes from Kōwhai & Clay in Raglan.",
};

function LogoMark({ reversed = false }: { reversed?: boolean }) {
  const wordmark = reversed ? "#F3EEE6" : "#282421";
  const bowl = reversed ? "#F3EEE6" : "#8A5C43";

  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 200 48"
        aria-hidden="true"
        className="h-10 w-[170px] sm:w-[190px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M18 31C18 24.3726 23.3726 19 30 19C36.6274 19 42 24.3726 42 31"
            stroke={bowl}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M24 17C25.8 13.8 28.2 11.8 30 11C31.8 11.8 34.2 13.8 36 17"
            stroke="#D7A91D"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="30" cy="18" r="2.5" fill="#D7A91D" />
        </g>
        <text
          x="56"
          y="31"
          fill={wordmark}
          fontFamily="var(--font-heading), serif"
          fontSize="28"
          fontWeight="600"
          letterSpacing="0.5"
        >
          Kōwhai &amp; Clay
        </text>
      </svg>
    </div>
  );
}

function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  return (
    <header
      className={`$${""}sticky top-0 z-50 border-b transition-colors ${
        transparent
          ? "border-white/20 bg-limestone/85 supports-[backdrop-filter]:bg-limestone/70 backdrop-blur"
          : "border-clay/80 bg-limestone/95 supports-[backdrop-filter]:bg-limestone/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Kōwhai and Clay home">
          <LogoMark />
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-iron/80 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="relative transition hover:text-iron">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <PrimaryButton href="/contact/" label="Commission Enquiry" />
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/contact/"
            className="rounded-full border border-iron/15 px-4 py-2 text-xs uppercase tracking-[0.24em] text-iron"
          >
            Enquire
          </Link>
        </div>
      </div>
    </header>
  );
}

function PrimaryButton({ href, label }: Cta) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-iron px-6 py-3 text-sm uppercase tracking-[0.2em] text-limestone transition duration-300 hover:-translate-y-0.5 hover:bg-umber hover:shadow-[0_14px_40px_rgba(40,36,33,0.12)]"
    >
      {label}
    </Link>
  );
}

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
            Handmade in Raglan, Aotearoa
          </p>
          <h1 className="mt-5 max-w-xl font-heading text-5xl leading-[0.95] text-iron sm:text-6xl lg:text-[4rem]">
            Ceramics shaped by coast, clay, and quiet ritual.
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-9 text-iron/76">
            Small-batch tableware and sculptural objects designed for thoughtful homes, slow
            tables, and gathered spaces.
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
              alt="Tall ceramic vessels displayed in warm natural studio light"
              className="h-[520px] w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[44%] overflow-hidden rounded-[24px] border-8 border-limestone shadow-[0_14px_40px_rgba(40,36,33,0.10)]">
            <img
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=700&h=900&fit=crop"
              alt="Ceramic vessels and natural styling in a close cropped arrangement"
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
              alt={`${item.title} ceramic collection presented in a warm styled setting`}
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
          alt="Hands shaping clay in a tactile studio process"
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
            alt="Creative workshop environment with warm natural light and handmade materials"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-iron/45" />
          <div className="relative flex h-full max-w-3xl flex-col justify-end px-7 py-10 text-limestone sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-limestone/75">
              Weekend workshops
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl">
              Learn in a studio shaped by experimentation, conversation, and clay.
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
              alt={`${post.title} editorial image featuring ceramics and natural styling`}
              className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-umber">{post.date}</p>
            <h3 className="mt-3 font-heading text-3xl leading-tight text-iron">{post.title}</h3>
            <p className="mt-3 text-base leading-7 text-iron/72">{post.excerpt}</p>
            <Link href={post.slug} className="mt-5 inline-flex text-sm uppercase tracking-[0.2em] text-iron">
              Read Journal
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function NewsletterCard() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[980px] rounded-[32px] bg-clay/55 px-7 py-10 text-center shadow-[0_14px_40px_rgba(40,36,33,0.10)] sm:px-12 sm:py-14">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Studio notes</p>
        <h2 className="mt-4 font-heading text-4xl text-iron sm:text-5xl">
          Occasional letters on new drops, workshop dates, and the textures shaping the season.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-iron/76">
          Join a considered mailing list for first access to collections, slow-table inspiration,
          and updates from the Raglan studio.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <input
            aria-label="Email address"
            type="email"
            placeholder="Email address"
            className="w-full max-w-sm rounded-[16px] border border-white/70 bg-white px-5 py-3 text-iron placeholder:text-iron/45"
          />
          <button className="rounded-full bg-iron px-6 py-3 text-sm uppercase tracking-[0.2em] text-limestone transition duration-300 hover:-translate-y-0.5 hover:bg-umber">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

function CenteredFooter() {
  return (
    <footer className="border-t border-clay px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        <LogoMark />
        <p className="mt-4 max-w-lg text-base leading-7 text-iron/72">
          Small-batch ceramics and tactile gatherings shaped in Raglan for thoughtful homes and
          slower rituals.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-iron/78">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 space-y-2 text-sm text-iron/72">
          <p>hello@kowhaiandclay.co.nz</p>
          <p>@kowhaiandclay</p>
          <p>Raglan, Waikato, New Zealand</p>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main>
      <SiteHeader transparent />
      <HeroSplitEditorial />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-8 rounded-[32px] bg-white/75 px-7 py-8 shadow-[0_8px_24px_rgba(40,36,33,0.06)] lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Founder note</p>
            <h2 className="mt-4 max-w-2xl font-heading text-4xl leading-tight text-iron sm:text-5xl">
              Made to be handled often, gathered around, and lived with over time.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-iron/76">
              Each piece begins with a practical gesture: a bowl that holds warmth comfortably, a
              platter that sits quietly at the centre of a table, or a vessel with enough presence
              to change a room without demanding it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-[24px] bg-limestone px-5 py-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-umber">Drops</p>
              <p className="mt-3 font-heading text-3xl text-iron">Small-batch</p>
            </div>
            <div className="rounded-[24px] bg-limestone px-5 py-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-umber">Finishes</p>
              <p className="mt-3 font-heading text-3xl text-iron">Hand-finished</p>
            </div>
            <div className="rounded-[24px] bg-limestone px-5 py-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-umber">Studio</p>
              <p className="mt-3 font-heading text-3xl text-iron">Raglan based</p>
            </div>
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
            image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&h=900&fit=crop"
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

      <NewsletterCard />
      <CenteredFooter />
    </main>
  );
}
