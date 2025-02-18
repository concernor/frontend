import { Logo } from "@/components/layout/logo";
import { MainNav } from "@/components/layout/main-nav";

export const Header = () => (
  <header className="sticky top-0 z-50 flex w-full items-center py-4 bg-background/80 backdrop-blur-md px-2 sm:px-4 md:px-8">
    <Logo />

    <MainNav />
  </header>
);
