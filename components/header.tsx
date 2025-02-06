import { Logo } from "./logo";
import { MainNav } from "./main-nav";

export const Header = () => {
  return (
    <header className="flex justify-between items-center card mt-4">
      <Logo />

      <MainNav />
    </header>
  );
};
