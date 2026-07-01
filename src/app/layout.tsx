import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://linkmydream.com"),
  title: "Najrudin Ansari · Founder, Builder & Ecosystem Creator",
  description:
    "I am a Computer Science student, aspiring entrepreneur, and community builder passionate about creating products and ecosystems that help people learn, build, collaborate, and grow together.",
  keywords: [
    "Najrudin Ansari",
    "startup founder",
    "entrepreneur",
    "Pune startup ecosystem",
    "LinkMyDream",
    "Printizo",
    "community builder",
    "tech founder",
    "product builder",
  ],
  openGraph: {
    title: "Najrudin Ansari · Founder, Builder & Ecosystem Creator",
    description:
      "Building products, communities, and ecosystems that help people create meaningful impact.",
    url: "https://linkmydream.com",
    siteName: "Najrudin Ansari Personal Founder Website",
    images: [
      {
        url: "/images/najrudin-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Najrudin Ansari",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Najrudin Ansari · Founder, Builder & Ecosystem Creator",
    description:
      "Building products, communities, and ecosystems that help people create meaningful impact.",
    images: ["/images/najrudin-portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${geistMono.variable} font-sans antialiased bg-[#090a0f] text-slate-100 min-h-screen selection:bg-blue-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
