import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://kowhai-and-clay.vercel.app";
const ogImage =
  "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&h=1500&fit=crop";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kōwhai & Clay | Ceramics shaped by coast, clay, and quiet ritual",
    template: "%s | Kōwhai & Clay",
  },
  description:
    "Kōwhai & Clay is a Raglan ceramics studio creating small-batch tableware, sculptural vessels, and tactile workshops for thoughtful homes.",
  keywords: [
    "Kōwhai & Clay",
    "Raglan ceramics",
    "New Zealand pottery",
    "ceramics workshops",
    "small-batch tableware",
  ],
  openGraph: {
    title: "Kōwhai & Clay",
    description:
      "Ceramics shaped by coast, clay, and quiet ritual from a studio in Raglan, Aotearoa New Zealand.",
    url: siteUrl,
    siteName: "Kōwhai & Clay",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 1500,
        alt: "Handcrafted ceramic vessels arranged in warm natural light",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kōwhai & Clay",
    description:
      "Small-batch tableware, sculptural vessels, and tactile workshops from Raglan.",
    images: [ogImage],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kōwhai & Clay",
  url: siteUrl,
  image: ogImage,
  description:
    "Ceramics studio in Raglan, Waikato creating small-batch tableware, sculptural vessels, and workshops.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Raglan",
    addressRegion: "Waikato",
    addressCountry: "NZ",
  },
  email: "hello@kowhaiandclay.co.nz",
  sameAs: ["https://instagram.com/kowhaiandclay"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NZ"
      className={`${manrope.variable} ${cormorant.variable} ${plexMono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
