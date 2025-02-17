import { Logo } from "@/components/layout/logo";
import { MainNav } from "@/components/layout/main-nav";

export const Header = () => (
  <header className="sticky top-0 z-50 flex w-full items-center py-4 bg-background/80 backdrop-blur-md">
    <Logo />

    <MainNav />
  </header>
);
