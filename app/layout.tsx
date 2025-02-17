import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { TailwindIndicator } from "@/components/layout/tailwind-indicator";

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
  title: "The Concernooooorrrrr",
  description:
    "very concerned. wants you to know he is concerned. has a bag that can alleviate your concerns.",
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
          <div className="max-w-7xl w-full flex flex-col items-center px-8 min-h-screen">
            <Header />
            <main className="w-full flex flex-col gap-12 mt-8 md:mt-24 flex-grow">
              {children}
            </main>
            <Footer />

            <Toaster />
            <TailwindIndicator />
          </div>
        </div>
      </body>
    </html>
  );
}
