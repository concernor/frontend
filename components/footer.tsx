import {
  SiFarcaster,
  SiGithub,
  SiTelegram,
} from "@icons-pack/react-simple-icons";
import { SiX } from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Logo } from "./logo";
import Link from "next/link";
import { socials } from "@/lib/consts";
import { MainNav } from "./main-nav";

const Socials = () => (
  <div className="flex items-center">
    <Button asChild size="icon" variant="ghost">
      <a href={socials.x} target="_blank">
        <SiX className="w-3 h-3" />
      </a>
    </Button>

    <Button asChild size="icon" variant="ghost">
      <a href={socials.farcaster} target="_blank">
        <SiFarcaster className="w-4 h-4 " />
      </a>
    </Button>
    {/* <Button asChild size="icon" variant="ghost">
      <a href={socials.discord} target="_blank">
        <SiDiscord className="w-4 h-4" />
      </a>
    </Button> */}
    <Button asChild size="icon" variant="ghost">
      <a href={socials.telegram} target="_blank">
        <SiTelegram className="w-4 h-4" />
      </a>
    </Button>
    <Button asChild size="icon" variant="ghost">
      <a href={socials.github} target="_blank">
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

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 card mb-4">
      <div className="flex justify-between items-center">
        <Logo />
        <MainNav hideButtons className="text-xs" />
      </div>
      <Separator className="mt-1 mb-2 bg-gray-800" />
      <div className="flex justify-between items-center">
        <Socials />
        <Links />
      </div>
    </footer>
  );
};
