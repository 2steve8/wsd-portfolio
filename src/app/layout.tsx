import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://williamsteveducay.dev"), // Update to your final custom domain if you connect one
  title: {
    default: "William Steve Ducay | Web Developer & Web Operations Administrator",
    template: "%s | William Steve Ducay Portfolio",
  },
  description:
    "Portfolio of William Steve Ducay, Full-Stack Web Developer and Web Operations Administrator specializing in WordPress, custom PHP, Elementor, React, Next.js, and scalable web architecture.",
  keywords: [
    "William Steve Ducay",
    "Web Developer Philippines",
    "Web Operations Administrator",
    "WordPress Developer San Mateo Rizal",
    "React.js Developer",
    "Next.js Portfolio",
    "Custom PHP & Elementor Expert",
    "Frontend Developer",
    "WooCommerce Specialist",
  ],
  authors: [{ name: "William Steve Ducay", url: "https://github.com" }],
  creator: "William Steve Ducay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://williamsteveducay.dev",
    title: "William Steve Ducay | Web Developer & Web Operations Administrator",
    description:
      "Explore the professional portfolio, production projects, and work history of William Steve Ducay, featuring custom WordPress builds, React apps, and web operations expertise.",
    siteName: "William Steve Ducay Portfolio",
    images: [
      {
        url: "/og-preview.png", // Optional: You can drop a 1200x630 preview image in your /public folder
        width: 1200,
        height: 630,
        alt: "William Steve Ducay - Web Developer & Web Operations Administrator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "William Steve Ducay | Web Developer & Web Operations Administrator",
    description:
      "Full-Stack Web Developer and Web Operations Administrator specializing in WordPress, React, Next.js, and scalable web architecture.",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#070B14] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}