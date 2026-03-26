"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

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

function buttonClasses(kind: "primary" | "secondary" | "inverse") {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kowhai";

  if (kind === "primary") {
    return `${base} border border-umber bg-umber text-limestone shadow-[0_8px_24px_rgba(40,36,33,0.08)] hover:border-[#744d39] hover:bg-[#744d39] hover:shadow-[0_14px_40px_rgba(40,36,33,0.14)]`;
  }

  if (kind === "inverse") {
    return `${base} border border-limestone/70 bg-limestone text-iron shadow-[0_8px_24px_rgba(40,36,33,0.1)] hover:bg-white hover:shadow-[0_14px_40px_rgba(40,36,33,0.16)]`;
  }

  return `${base} border border-clay bg-transparent text-umber shadow-[0_8px_24px_rgba(40,36,33,0.04)] hover:border-umber hover:bg-clay/18 hover:shadow-[0_8px_24px_rgba(40,36,33,0.08)]`;
}

export function LogoMark({ reversed = false }: { reversed?: boolean }) {
  const wordmark = reversed ? "#F3EEE6" : "#282421";
  const bowl = reversed ? "#F3EEE6" : "#8A5C43";

  return (
    <div className="flex items-center">
      <svg
        viewBox="0 0 320 120"
        aria-hidden="true"
        className="h-5 w-[148px] sm:h-[1.35rem] sm:w-[160px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M28 68C28 59.7157 34.7157 53 43 53C51.2843 53 58 59.7157 58 68"
            stroke={bowl}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M35 47C37.25 43 40.25 40.5 43 39.5C45.75 40.5 48.75 43 51 47"
            stroke="#D7A91D"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="43" cy="48.5" r="2.5" fill="#D7A91D" />
        </g>
        <text
          x="84"
          y="67"
          fill={wordmark}
          fontFamily="var(--font-heading), serif"
          fontSize="29"
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
    <Link href={href} className={buttonClasses("primary")}>
      {label}
    </Link>
  );
}

export function OutlineButton({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className={buttonClasses("secondary")}>
      {label}
    </Link>
  );
}

export function InverseButton({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className={buttonClasses("inverse")}>
      {label}
    </Link>
  );
}

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        transparent
          ? "border-white/15 bg-limestone/84 supports-[backdrop-filter]:bg-limestone/68 backdrop-blur"
          : "border-clay/80 bg-limestone/95 supports-[backdrop-filter]:bg-limestone/82 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Kōwhai and Clay home" onClick={() => setIsOpen(false)}>
          <LogoMark />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm text-iron/80 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="relative transition hover:text-umber">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <PrimaryButton href="/contact/" label="Commission Enquiry" />
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center rounded-full border border-clay px-4 py-2 text-xs uppercase tracking-[0.24em] text-iron transition hover:border-umber hover:text-umber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kowhai lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>
      {isOpen ? (
        <div id="mobile-menu" className="border-t border-clay/70 bg-limestone px-5 py-6 sm:px-8 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-3xl leading-none text-iron transition hover:text-umber"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/contact/" label="Commission Enquiry" />
            <OutlineButton href="/workshops/" label="Book a Workshop" />
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-clay/45 bg-iron px-5 py-12 text-limestone sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <LogoMark reversed />
          <h2 className="mt-5 font-heading text-3xl sm:text-4xl">
            Handmade ceramics in Raglan for collected homes, workshop guests, and custom projects.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-limestone/76">
            Small-batch tableware, sculptural vessels, pottery workshops, and quiet commissions from
            the Waikato coast.
          </p>
          <div className="mt-7">
            <InverseButton href="/contact/" label="Commission Enquiry" />
          </div>
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
              <Link href={item.href} className="transition hover:text-umber">
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
