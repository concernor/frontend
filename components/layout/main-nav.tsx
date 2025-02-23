import { links, socials } from "@/lib/consts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, Sparkle } from "lucide-react";
import Link from "next/link";
import { SiFarcaster, SiX } from "@icons-pack/react-simple-icons";
import { Separator } from "../ui/separator";

interface NavProps {
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
  className?: string;
}

const Nav = ({ links, className }: NavProps) => {
  return (
    <nav className={cn("ml-auto flex gap-2 uppercase text-xs", className)}>
      {links.map((link, key) => (
        <Link
          key={key}
          href={link.href}
          target={link.external ? "__blank" : undefined}
          className="text-muted-foreground hover:text-white flex gap-1 justify-center items-center"
        >
          {link.label}
          {link.external && <ExternalLink className="w-3 h-3" />}
        </Link>
      ))}
    </nav>
  );
};

const Socials = () => {
  return (
    <div className="flex gap-2">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" asChild>
          <Link href={socials.farcaster} target="_blank">
            <SiFarcaster className="w-4 h-4" />
          </Link>
        </Button>

        <Button variant="ghost" size="icon" asChild>
          <Link href={socials.zora} target="_blank">
            <Sparkle className="w-4 h-4" />
          </Link>
        </Button>
        <Separator orientation="vertical" className="h-4 mx-1" />
        <Button variant="ghost" size="icon" asChild>
          <Link href={socials.x} target="_blank">
            <SiX className="w-3 h-3" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const nav_links = [
  {
    label: "manifesto",
    href: links.manifesto,
  },
  // {
  //   label: "02 docs",
  //   href: links.docs,
  //   external: true,
  // },
];

interface MainNavProps {
  hideButtons?: boolean;
}

export const MainNav = ({ hideButtons }: MainNavProps) => {
  return (
    <>
      <Nav links={nav_links} />

      {!hideButtons && (
        <>
          {/* <Separator orientation="vertical" className="ml-2 h-4" /> */}
          <span className="text-muted-foreground mx-2">-</span>
          <Socials />
        </>
      )}
    </>
  );
};
