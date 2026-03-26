import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, InnerPageShell } from "../components";
import { ContactForm } from "./contact-form";

const faqs = [
  {
    question: "Do you take commission work?",
    answer:
      "Yes. The studio accepts a limited number of commission briefs for homes, hospitality settings, and interior projects each season.",
  },
  {
    question: "How do pottery workshop bookings work?",
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
  title: "Contact the Raglan Ceramics Studio | Kōwhai & Clay",
  description:
    "Contact Kōwhai & Clay in Raglan for handmade ceramic commissions, studio visits, and pottery workshop bookings.",
  keywords: [
    "contact Raglan ceramics studio",
    "ceramic commissions Raglan",
    "pottery workshop bookings Waikato",
    "Kōwhai and Clay contact",
    "Raglan pottery workshop enquiry",
  ],
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <InnerPageShell>
      <section className="relative h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&h=800&fit=crop"
          alt="Handmade ceramics contact banner with warm natural light and studio styling"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-iron/40" />
        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-end px-5 py-12 text-limestone sm:px-8 lg:px-10 lg:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-limestone/75">Contact</p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl leading-[0.98] sm:text-6xl">
            Contact the Raglan ceramics studio for commissions, workshops, and appointments.
          </h1>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[28px] bg-white/82 p-7 shadow-[0_14px_40px_rgba(40,36,33,0.10)] sm:p-8">
              <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Send an enquiry</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-iron/74">
                Share your project, preferred timing, and contact details below. The form sends directly to the
                studio inbox, with a ready-to-send email draft available if you prefer to review the wording first.
              </p>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] bg-clay/45 p-7 shadow-[0_8px_24px_rgba(40,36,33,0.06)]">
                <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Studio details</h2>
                <div className="mt-5 space-y-3 text-lg leading-8 text-iron/76">
                  <p>Raglan, Waikato, New Zealand</p>
                  <p>hello@kowhaiandclay.co.nz</p>
                  <p>@kowhaiandclay</p>
                  <p>By appointment, workshops on selected weekends</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="mailto:hello@kowhaiandclay.co.nz"
                    className="inline-flex rounded-full bg-iron px-5 py-3 text-sm uppercase tracking-[0.2em] text-limestone transition duration-300 hover:-translate-y-0.5 hover:bg-umber"
                  >
                    Email the studio
                  </Link>
                  <Link
                    href="https://instagram.com/kowhaiandclay"
                    className="inline-flex rounded-full border border-iron/14 px-5 py-3 text-sm uppercase tracking-[0.2em] text-iron transition duration-300 hover:-translate-y-0.5 hover:border-umber hover:text-umber"
                  >
                    Follow on Instagram
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-[28px] shadow-[0_14px_40px_rgba(40,36,33,0.10)]">
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&h=900&fit=crop"
                  alt="Handmade ceramic tableware image supporting contact details for Kōwhai and Clay in Raglan"
                  className="h-[280px] w-full object-cover"
                />
              </div>
              <div className="rounded-[28px] bg-white/82 p-7 shadow-[0_8px_24px_rgba(40,36,33,0.06)]">
                <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-umber">What happens next</h2>
                <div className="mt-4 space-y-3 text-base leading-7 text-iron/68">
                  <p>1. Complete the enquiry form with your project, timing, and contact details.</p>
                  <p>2. Choose the direct studio submission, review the email draft, or continue via Instagram DM.</p>
                  <p>3. Kōwhai &amp; Clay replies with availability, lead times, and the most suitable next step.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[980px] rounded-[32px] bg-white/82 p-8 shadow-[0_14px_40px_rgba(40,36,33,0.10)] sm:p-10">
          <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-umber">Frequently asked</h2>
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
    </InnerPageShell>
  );
}
