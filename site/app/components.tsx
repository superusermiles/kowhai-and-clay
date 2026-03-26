import Link from "next/link";
import type { ReactNode } from "react";

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/collections/", label: "Collections" },
  { href: "/workshops/", label: "Workshops" },
  { href: "/journal/", label: "Journal" },
  { href: "/contact/", label: "Contact" },
];

export function LogoMark({ reversed = false }: { reversed?: boolean }) {
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

export function PrimaryButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-iron px-6 py-3 text-sm uppercase tracking-[0.2em] text-limestone transition duration-300 hover:-translate-y-0.5 hover:bg-umber hover:shadow-[0_14px_40px_rgba(40,36,33,0.12)]"
    >
      {label}
    </Link>
  );
}

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        transparent
          ? "border-white/20 bg-limestone/85 supports-[backdrop-filter]:bg-limestone/70 backdrop-blur"
          : "border-clay/80 bg-limestone/95 supports-[backdrop-filter]:bg-limestone/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Kōwhai and Clay home">
          <LogoMark />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm text-iron/80 lg:flex">
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

export function SiteFooter() {
  return (
    <footer className="border-t border-clay/70 bg-iron px-5 py-12 text-limestone sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-limestone/65">Kōwhai &amp; Clay</p>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl">
            Handmade ceramics in Raglan for collected homes, workshop guests, and custom projects.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-limestone/76">
            Small-batch tableware, sculptural vessels, pottery workshops, and quiet commissions from
            the Waikato coast.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-limestone/65">Explore</h3>
            <nav aria-label="Footer" className="mt-4 flex flex-col gap-3 text-sm text-limestone/80">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-limestone/65">Studio</h3>
            <div className="mt-4 space-y-3 text-sm leading-7 text-limestone/80">
              <p>Raglan, Waikato, New Zealand</p>
              <p>
                <Link href="mailto:hello@kowhaiandclay.co.nz" className="transition hover:text-white">
                  hello@kowhaiandclay.co.nz
                </Link>
              </p>
              <p>Workshops on selected weekends</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-iron/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="contents">
            {item.href ? (
              <Link href={item.href} className="transition hover:text-iron">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
            {index < items.length - 1 ? <span aria-hidden="true">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function InnerPageShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="bg-limestone text-iron">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
