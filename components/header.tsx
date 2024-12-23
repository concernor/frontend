import { Dock } from "lucide-react";
import { Button } from "./ui/button";
import { Nav } from "./nav";
import { Logo } from "./logo";

const nav_links = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "docs",
    href: "https://concernor.github.io/docs",
    external: true,
  },
];

export const Header = () => {
  return (
    <header className="flex justify-between items-center card border-2 mt-4">
      <Logo />

      <div className="flex gap-1 items-center">
        <Nav links={nav_links} />
        <Button size="sm" variant="ghost" className="" disabled>
          {/* <a href="/"> */}
          POC
          <Dock className="w-4 h-4 ml-1" />
          {/* </a> */}
        </Button>
      </div>
    </header>
  );
};
