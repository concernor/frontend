import Link from "next/link";

interface NavProps {
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

export const Nav = ({ links }: NavProps) => {
  return (
    <nav className="flex gap-2 font-mono text-xs">
      {links.map((link, key) =>
        link.external ? (
          <a
            href={link.href}
            key={key}
            target="_blank"
            className="hover:underline"
          >
            {link.label}
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
