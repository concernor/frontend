import { SiFarcaster, SiGithub } from "@icons-pack/react-simple-icons";
import { SiX } from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Logo } from "./logo";
import { Nav } from "./nav";
import Link from "next/link";

const Socials = () => (
  <div className="flex items-center">
    <Button asChild size="icon" variant="ghost">
      <a href="https://x.com/concernor" target="_blank">
        <SiX className="w-3 h-3" />
      </a>
    </Button>

    <Button asChild size="icon" variant="ghost">
      <a href="https://warpcast.com/concernor.eth" target="_blank">
        <SiFarcaster className="w-4 h-4 " />
      </a>
    </Button>
    {/* <Button asChild size="icon" variant="ghost">
      <a href="https://discord.gg/JBdqYQqwZs" target="_blank">
        <SiDiscord className="w-4 h-4" />
      </a>
    </Button> */}
    <Button asChild size="icon" variant="ghost">
      <a href="https://github.com/concernor" target="_blank">
        <SiGithub className="w-4 h-4" />
      </a>
    </Button>
  </div>
);

const Links = () => (
  <div className="flex gap-2 font-mono text-xs">
    <Link href="/privacy">
      <small>?</small>privacy
    </Link>
    <Separator orientation="vertical" className="h-4" />
    <Link href="/terms">
      <small>!</small>terms
    </Link>
  </div>
);

const nav_links = [
  {
    label: "docs",
    href: "https://concernor.github.io/docs",
    external: true,
  },
];

export const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col gap-2 card border-2 my-4">
      <div className="flex justify-between items-center">
        <Logo />
        <Nav links={nav_links} />
      </div>
      <Separator className="mt-1 mb-2 bg-gray-800" />
      <div className="flex justify-between items-center">
        <Socials />
        <Links />
      </div>
    </footer>
  );
};
