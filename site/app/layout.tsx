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
  title: "Kōwhai & Clay | Handmade Ceramics Studio & Pottery Workshops in Raglan",
  description:
    "Kōwhai & Clay is a Raglan ceramics studio creating handmade ceramic tableware, sculptural vessels, pottery workshops, and custom hospitality ceramics in Waikato.",
  keywords: [
    "handmade ceramics Raglan",
    "Raglan ceramics studio",
    "pottery workshops Raglan",
    "Waikato pottery workshop",
    "custom hospitality ceramics New Zealand",
    "handmade ceramic tableware NZ",
    "small-batch ceramics Waikato",
    "sculptural ceramic vessels New Zealand",
    "ceramic commissions Raglan",
    "Raglan pottery studio",
    "Kōwhai & Clay",
  ],
  openGraph: {
    title: "Kōwhai & Clay | Handmade Ceramics Studio & Pottery Workshops in Raglan",
    description:
      "Explore handmade ceramic tableware, sculptural vessels, pottery workshops, and custom ceramic commissions from Kōwhai & Clay in Raglan, New Zealand.",
    url: siteUrl,
    siteName: "Kōwhai & Clay",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 1500,
        alt: "Handmade ceramic vessels from the Kōwhai and Clay Raglan ceramics studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kōwhai & Clay | Handmade Ceramics Studio & Pottery Workshops in Raglan",
    description:
      "Handmade ceramic tableware, sculptural vessels, commissions, and pottery workshops from Raglan, Waikato.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kōwhai & Clay",
  image: ogImage,
  description:
    "Handmade ceramics studio in Raglan, Waikato offering small-batch tableware, sculptural vessels, custom commissions, and pottery workshops.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Raglan",
    addressRegion: "Waikato",
    addressCountry: "NZ",
  },
  telephone: "+64 21 000 0000",
  email: "hello@kowhaiandclay.co.nz",
  url: siteUrl,
  sameAs: ["https://instagram.com/kowhaiandclay"],
  areaServed: "New Zealand",
  priceRange: "$$",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
