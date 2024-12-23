import { Dock } from "lucide-react";
import { Button } from "./ui/button";
import { Nav } from "./nav";
import { Logo } from "./logo";
import Link from "next/link";
import { Separator } from "./ui/separator";

const nav_links = [
  // {
  //   label: "home",
  //   href: "/",
  // },
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

      <div className="flex items-center">
        <Nav links={nav_links} className="font-sans text-sm" />
        <Separator orientation="vertical" className="h-4 mx-2" />
        <Button
          size="sm"
          variant="outline"
          className="shadow-none"
          // asChild
          disabled
        >
          <Link href="/poc" className="flex items-center gap-1">
            POC
            <Dock className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
