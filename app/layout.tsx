import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { MobileVersion } from "@/components/mobile/mobile-version";
import { ViewportOptimizer } from "@/components/viewport-optimizer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://miguelalvarez.dev'),
  title: {
    default: "Miguel Álvarez - Designer & Developer",
    template: "%s | Miguel Álvarez"
  },
  description: "Diseñador y desarrollador web especializado en crear experiencias digitales excepcionales. Portafolio profesional con proyectos de diseño UI/UX y desarrollo web moderno.",
  keywords: [
    "diseñador web",
    "desarrollador web", 
    "UI/UX designer",
    "React developer",
    "Next.js",
    "TypeScript",
    "diseño web",
    "desarrollo web",
    "portafolio",
    "Miguel Álvarez",
    "Lanzarote",
    "España"
  ],
  authors: [{ name: "Miguel Álvarez", url: "https://miguelalvarez.dev" }],
  creator: "Miguel Álvarez",
  publisher: "Miguel Álvarez",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://miguelalvarez.dev",
    siteName: "Miguel Álvarez - Designer & Developer",
    title: "Miguel Álvarez - Designer & Developer",
    description: "Diseñador y desarrollador web especializado en crear experiencias digitales excepcionales.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Miguel Álvarez - Designer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Álvarez - Designer & Developer",
    description: "Diseñador y desarrollador web especializado en crear experiencias digitales excepcionales.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://miguelalvarez.dev",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${merriweather.variable}`}>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <ViewportOptimizer />
        <CustomCursor />
        
        {/* VERSIÓN MÓVIL */}
        <MobileVersion />
        
        {/* VERSIÓN DESKTOP - CÓDIGO ORIGINAL INTACTO */}
        <main className="relative desktop-version">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
