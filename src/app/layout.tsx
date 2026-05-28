import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

/* ============ FONTS ============ */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

/* ============ SEO METADATA ============ */
export const metadata: Metadata = {
  metadataBase: new URL("https://mrestates.in"),
  title: {
    default: "MR Estates – Luxury Living | Premium Real Estate",
    template: "%s | MR Estates",
  },
  description:
    "MR Estates – Luxury Living. India's most prestigious luxury real estate firm. Discover premium residential plots, villa developments, and timeless living experiences crafted with unparalleled elegance.",
  keywords: [
    "luxury real estate India",
    "premium residential plots",
    "luxury homes",
    "MR Estates",
    "luxury living",
    "premium property",
    "residential development",
    "villa plots",
    "luxury real estate Ahmedabad",
    "luxury real estate Mumbai",
  ],
  authors: [{ name: "MR Estates", url: "https://mrestates.in" }],
  creator: "MR Estates",
  publisher: "MR Estates",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mrestates.in",
    siteName: "MR Estates – Luxury Living",
    title: "MR Estates – Luxury Living | Premium Real Estate",
    description:
      "Crafting timeless real estate experiences with unparalleled elegance, precision, and vision.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MR Estates – Luxury Living",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MR Estates – Luxury Living",
    description: "Crafting timeless real estate experiences with unparalleled elegance.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.json",
};

/* ============ JSON-LD STRUCTURED DATA ============ */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "MR Estates – Luxury Living",
  description:
    "India's most prestigious luxury real estate firm offering premium residential plots and villa developments.",
  url: "https://mrestates.in",
  logo: "https://mrestates.in/logo.png",
  telephone: "+91-98765-43210",
  email: "info@mrestates.in",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  sameAs: [
    "https://instagram.com/mrestates",
    "https://facebook.com/mrestates",
  ],
};

/* ============ ROOT LAYOUT ============ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-richblack text-warmwhite font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
