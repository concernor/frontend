import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Nav } from "./nav";
import { Logo } from "./logo";
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
          className="border-black shadow-none"
          asChild
        >
          <a
            href="https://flaunch.gg/base/coin/0x8F5A590Be0B27fEb5bFfaab82BBF31d3c7EFe222"
            className="flex items-center gap-1"
            target="__blank"
          >
            $CONCERN
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </Button>
      </div>
    </header>
  );
};
