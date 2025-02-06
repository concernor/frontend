import { links, socials } from "@/lib/consts";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Rss } from "lucide-react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

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
    <nav className={cn("flex gap-2 font-mono text-xs", className)}>
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

const nav_links = [
  {
    label: "docs",
    href: links.docs,
    external: true,
  },
];

interface MainNavProps {
  className?: string;
  hideButtons?: boolean;
}

export const MainNav = ({ className, hideButtons }: MainNavProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <Nav links={nav_links} className="font-sans text-sm" />
      {!hideButtons && (
        <>
          <Separator orientation="vertical" className="h-4 ml-2 mr-1" />
          <Button variant="ghost" size="icon" className="shadow-none" asChild>
            <a href={socials.paragraph} target="__blank">
              <Rss className="w-4 h-4" />
            </a>
          </Button>
        </>
      )}
    </div>
  );
};
