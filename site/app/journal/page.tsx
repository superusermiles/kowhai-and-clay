import type { Metadata } from "next";

const posts = [
  {
    title: "The objects we return to most often",
    excerpt:
      "A look at the pieces that stay on the table, move from room to room, and quietly become part of daily life.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop",
    date: "12 March 2026",
  },
  {
    title: "Material cues from winter interiors",
    excerpt:
      "Gathering references from smoked olive textiles, weathered timber, and darker fired surfaces.",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=1200&h=800&fit=crop",
    date: "27 February 2026",
  },
  {
    title: "On glaze trials and small adjustments",
    excerpt:
      "How a few degrees in the kiln and a slower cooling cycle can alter the mood of a collection.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop",
    date: "11 February 2026",
  },
];

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Read editorial journal entries from Kōwhai & Clay on interiors, material references, and ceramic process.",
};

export default function JournalPage() {
  const [featured, ...rest] = posts;

  return (
    <main className="bg-limestone px-5 py-14 text-iron sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-[720px]">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Journal</p>
          <h1 className="mt-4 font-heading text-5xl leading-[0.98] sm:text-6xl">
            Notes from the studio, the table, and the interiors that influence both.
          </h1>
          <p className="mt-5 text-lg leading-8 text-iron/76">
            An editorial index of references, seasonal observations, and small practical details
            that shape the next firing.
          </p>
        </div>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="overflow-hidden rounded-[32px] bg-white/80 shadow-[0_14px_40px_rgba(40,36,33,0.10)]">
            <img
              src={featured.image}
              alt="Featured journal image with coffee, ceramics, and editorial tabletop styling"
              className="h-[420px] w-full object-cover"
            />
            <div className="p-7 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-umber">{featured.date}</p>
              <h2 className="mt-4 font-heading text-4xl leading-tight">{featured.title}</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-iron/74">{featured.excerpt}</p>
            </div>
          </article>
          <div className="flex flex-col gap-6">
            {rest.map((post) => (
              <article key={post.title} className="grid gap-5 rounded-[24px] bg-white/80 p-5 shadow-[0_8px_24px_rgba(40,36,33,0.06)] sm:grid-cols-[220px_1fr]">
                <img
                  src={post.image}
                  alt={`${post.title} journal image with warm interior and ceramics context`}
                  className="h-[180px] w-full rounded-[20px] object-cover sm:h-full"
                />
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-umber">{post.date}</p>
                  <h3 className="mt-3 font-heading text-3xl leading-tight">{post.title}</h3>
                  <p className="mt-3 text-base leading-7 text-iron/74">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
