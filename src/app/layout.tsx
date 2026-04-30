import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { MotionLayer } from "@/components/animation/motion-layer";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SiteBackground } from "@/components/layout/site-background";
import { JsonLd } from "@/components/seo/json-ld";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { absoluteUrl, publicSameAsLinks, siteConfig, siteStatus } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: `${siteConfig.name} Portfolio`,
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/"
  },
  robots: siteStatus.isIndexable
    ? {
        index: true,
        follow: true
      }
    : {
        index: false,
        follow: false
      },
  formatDetection: {
    email: false,
    telephone: false,
    address: false
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-card.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio preview`
      }
    ],
    locale: siteConfig.locale,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    images: ["/images/og-card.svg"]
  }
};

export const viewport: Viewport = {
  themeColor: "#050a14",
  colorScheme: "dark light"
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  inLanguage: siteConfig.language
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  image: absoluteUrl(siteConfig.profileImage.src),
  url: siteConfig.url,
  homeLocation: {
    "@type": "Place",
    name: siteConfig.location
  },
  sameAs: publicSameAsLinks
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-950"
          >
            Skip to content
          </a>
          <SiteBackground />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <JsonLd data={websiteJsonLd} />
          {siteStatus.hasConfiguredIdentity ? <JsonLd data={personJsonLd} /> : null}
          <MotionLayer />
        </ThemeProvider>
      </body>
    </html>
  );
}
