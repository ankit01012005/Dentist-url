import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Fraunces, Allura } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";
import Providers from "@/components/Providers";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap", weight: ["500", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", style: ["italic"], weight: ["500"], preload: false });
const script = Allura({ subsets: ["latin"], variable: "--nf-script", display: "swap", weight: "400", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: { default: site.seo.title, template: site.seo.titleTemplate },
  description: site.seo.description,
  keywords: site.seo.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.seo.locale,
    url: site.seo.siteUrl,
    siteName: site.business.fullName,
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: site.seo.ogImage, width: 1200, height: 630, alt: site.business.fullName }],
  },
  twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description, images: [site.seo.ogImage] },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: site.theme.brandDark,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeVars = {
    "--brand": site.theme.brand,
    "--brand-dark": site.theme.brandDark,
    "--accent": site.theme.accent,
    "--bg": site.theme.background,
  } as React.CSSProperties;

  return (
    <html lang="en-IN" style={themeVars} className={`${jakarta.variable} ${inter.variable} ${fraunces.variable} ${script.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <JsonLd />
      </head>
      <body className="min-h-dvh">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-dark focus:px-5 focus:py-3 focus:text-white">
          {site.labels.skipToContent}
        </a>
        <Providers>
          <AnnouncementBar />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <FloatingActions />
        </Providers>
      </body>
    </html>
  );
}
