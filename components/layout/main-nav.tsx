import { links, socials } from "@/lib/consts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { SiDiscord, SiX } from "@icons-pack/react-simple-icons";

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
    <nav
      className={cn(
        "mx-auto flex gap-2 font-mono text-sm uppercase",
        className
      )}
    >
      {links.map((link, key) =>
        link.external ? (
          <a
            href={link.href}
            key={key}
            target="_blank"
            className="hover:underline flex items-center gap-1"
          >
            {link.label}
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <Link key={key} href={link.href} className="hover:underline">
            {link.label}
          </Link>
        )
      )}
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
  {
    label: "manifesto",
    href: links.manifesto,
  },
  {
    label: "origins",
    href: links.origins,
  },
  // {
  //   label: "docs",
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
      <Nav links={nav_links} className="font-sans text-sm" />

      {!hideButtons && <Socials />}
    </>
  );
};
