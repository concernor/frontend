import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TailwindIndicator } from "@/components/layout/tailwind-indicator";
import { socials } from "@/lib/consts";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Concernor",
  description:
    "In a world where hype reigns supreme, a little concern might be the real alpha.",
  metadataBase: new URL("https://concernor.eth.limo"),
  keywords: ["concernor", "meme coin", "base", "crypto", "web3"],
  authors: [{ name: "Concernor", url: socials.x }],
  openGraph: {
    type: "website",
    title: "Concernor",
    description:
      "In a world where hype reigns supreme, a little concern might be the real alpha.",
    url: "https://concernor.eth.limo",
    siteName: "Concernor",
    images: [
      {
        url: "/static/concernor.png",
        width: 120,
        height: 120,
        alt: "Concernor Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Concernor",
    description:
      "In a world where hype reigns supreme, a little concern might be the real alpha.",
    creator: "@concernor",
    images: ["/static/concernor.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/static/concernor.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://concernor.eth.limo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col items-center w-full min-h-screen">
          {children}

          <TailwindIndicator />
        </div>
      </body>
    </html>
  );
}
