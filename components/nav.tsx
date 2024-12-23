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

export const Nav = ({ links, className }: NavProps) => {
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
