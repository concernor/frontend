import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";

export default function StaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl w-full flex flex-col items-center px-4 md:px-8 min-h-screen">
      <Header />
      <main className="w-full flex flex-col gap-12 mt-8 md:mt-24 flex-grow">
        {children}
      </main>
      <Footer />

      <Toaster />
    </div>
  );
}
