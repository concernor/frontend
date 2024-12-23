import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
        <div className="font-[family-name:var(--font-geist-sans)] px-4 sm:px-0">
          <div className="max-w-xl mx-auto flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col items-start gap-6 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
