import type { Metadata } from "next";
import Link from "next/link";

const faqs = [
  {
    question: "Do you take commission work?",
    answer:
      "Yes. The studio accepts a limited number of commission briefs for homes, hospitality settings, and interior projects each season.",
  },
  {
    question: "How do workshop bookings work?",
    answer:
      "Selected weekend dates are released in small groups. Private sessions can also be arranged for celebrations or team gatherings.",
  },
  {
    question: "Can I visit the studio?",
    answer:
      "Visits are by appointment so the studio can keep a calm making rhythm while welcoming collectors and workshop guests well.",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kōwhai & Clay for commissions, studio visits, and ceramics workshop bookings in Raglan.",
};

export default function ContactPage() {
  return (
    <main className="bg-limestone text-iron">
      <section className="relative h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&h=800&fit=crop"
          alt="Warm contact banner image with styled ceramics and natural light"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-iron/40" />
        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-end px-5 py-12 text-limestone sm:px-8 lg:px-10 lg:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-limestone/75">Contact</p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl leading-[0.98] sm:text-6xl">
            For commissions, workshops, and studio appointments.
          </h1>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] bg-white/82 p-7 shadow-[0_14px_40px_rgba(40,36,33,0.10)] sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Send a note</p>
            <div className="mt-6 grid gap-5">
              <label className="grid gap-2 text-sm text-iron/74">
                Name
                <input className="rounded-[16px] border border-iron/12 bg-limestone px-4 py-3" />
              </label>
              <label className="grid gap-2 text-sm text-iron/74">
                Email
                <input type="email" className="rounded-[16px] border border-iron/12 bg-limestone px-4 py-3" />
              </label>
              <label className="grid gap-2 text-sm text-iron/74">
                Project or workshop interest
                <input className="rounded-[16px] border border-iron/12 bg-limestone px-4 py-3" />
              </label>
              <label className="grid gap-2 text-sm text-iron/74">
                Message
                <textarea rows={6} className="rounded-[16px] border border-iron/12 bg-limestone px-4 py-3" />
              </label>
            </div>
            <button className="mt-6 rounded-full bg-iron px-6 py-3 text-sm uppercase tracking-[0.2em] text-limestone transition hover:-translate-y-0.5 hover:bg-umber">
              Prepare Enquiry
            </button>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] bg-clay/45 p-7 shadow-[0_8px_24px_rgba(40,36,33,0.06)]">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Studio details</p>
              <div className="mt-5 space-y-3 text-lg leading-8 text-iron/76">
                <p>Raglan, Waikato, New Zealand</p>
                <p>hello@kowhaiandclay.co.nz</p>
                <p>@kowhaiandclay</p>
                <p>By appointment, workshops on selected weekends</p>
              </div>
              <Link href="mailto:hello@kowhaiandclay.co.nz" className="mt-6 inline-flex text-sm uppercase tracking-[0.2em] text-iron">
                Email the studio
              </Link>
            </div>
            <div className="overflow-hidden rounded-[28px] shadow-[0_14px_40px_rgba(40,36,33,0.10)]">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&h=900&fit=crop"
                alt="Studio exterior or interior mood image supporting contact page"
                className="h-[280px] w-full object-cover"
              />
            </div>
            <div className="rounded-[28px] bg-white/82 p-7 shadow-[0_8px_24px_rgba(40,36,33,0.06)]">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Visit map</p>
              <div className="mt-4 flex min-h-[180px] items-center justify-center rounded-[24px] border border-dashed border-iron/18 bg-limestone text-center text-base leading-7 text-iron/60">
                Raglan studio visits are arranged by appointment to keep the making schedule calm and intentional.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[980px] rounded-[32px] bg-white/82 p-8 shadow-[0_14px_40px_rgba(40,36,33,0.10)] sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Frequently asked</p>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-[20px] border border-iron/10 bg-limestone px-5 py-4">
                <summary className="cursor-pointer list-none font-heading text-2xl">{faq.question}</summary>
                <p className="mt-3 text-base leading-7 text-iron/74">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
