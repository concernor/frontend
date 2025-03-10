import { Logo } from "@/components/layout/logo";
import { MainNav } from "@/components/layout/main-nav";

export const Header = () => (
  <header className="sticky top-0 z-50 flex flex-col sm:flex-row w-full sm:items-center sm:justify-between py-4 bg-background/80 backdrop-blur-md">
    <Logo />

    <MainNav />
  </header>
);
