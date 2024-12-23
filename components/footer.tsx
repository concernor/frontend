import { SiGithub } from "@icons-pack/react-simple-icons";
import { SiDiscord, SiFarcaster, SiX } from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { TermsDialog } from "./terms";
import { PrivacyDialog } from "./privacy";
import { Logo } from "./logo";
import { Nav } from "./nav";

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
    <Button asChild size="icon" variant="ghost">
      <a href="https://discord.gg/JBdqYQqwZs" target="_blank">
        <SiDiscord className="w-4 h-4" />
      </a>
    </Button>
    <Button asChild size="icon" variant="ghost">
      <a href="https://github.com/concernor" target="_blank">
        <SiGithub className="w-4 h-4" />
      </a>
    </Button>
  </div>
);

const Links = () => (
  <div className="flex gap-2 font-mono text-xs">
    <PrivacyDialog />
    <Separator orientation="vertical" className="h-4" />
    <TermsDialog />
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
