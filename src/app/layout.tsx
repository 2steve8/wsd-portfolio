import { PERSONAL_INFO } from "@/data/portfolioData";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wsd-portfolio.vercel.app"),
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
  description:
    "Senior Web Developer and Web Operations Administrator with 8+ years specializing in custom WordPress architectures, PHP themes, Elementor, React/Next.js, and high-performance web systems.",
  openGraph: {
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    description:
      "Explore production platforms, custom WordPress themes, e-commerce architectures, and web operations workflows.",
    url: "https://wsd-portfolio.vercel.app",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} Portfolio Preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    description:
      "Explore production platforms, custom WordPress themes, e-commerce architectures, and web operations workflows.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#070B14] text-slate-100">{children}</body>
    </html>
  );
}