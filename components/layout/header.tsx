import { Logo } from "@/components/layout/logo";
import { MainNav } from "@/components/layout/main-nav";

export const Header = () => (
  <header className="flex w-full items-center py-4 gap-2 ">
    <Logo />

    <MainNav />
  </header>
);
