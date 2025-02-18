import { links, socials } from "@/lib/consts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { SiDiscord, SiX } from "@icons-pack/react-simple-icons";
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
      <div className="flex">
        <Button variant="ghost" size="icon" asChild>
          <Link href={socials.x} target="__blank">
            <SiX className="w-3 h-3" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href={socials.discord} target="__blank">
            <SiDiscord className="w-4 h-4" />
          </Link>
        </Button>

        {/* <Button variant="outline">CONNECT</Button>
          <Button variant="outline">EN</Button> */}
      </div>
    </div>
  );
};

const nav_links = [
  // {
  //   label: "origins",
  //   href: links.origins,
  // },
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
          <Separator orientation="vertical" className="ml-2 h-4" />
          <Socials />
        </>
      )}
    </>
  );
};
