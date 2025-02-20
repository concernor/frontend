import { TickerIsConcern } from "@/components/landing/heading";
import { Button } from "@/components/ui/button";
import { links, socials } from "@/lib/consts";
import {
  SiFarcaster,
  SiTelegram,
  SiX,
  // SiDiscord,
  SiGithub,
} from "@icons-pack/react-simple-icons";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";

export default function Links() {
  return (
    <div className="w-full max-w-md flex flex-col gap-4 text-muted-foreground mx-auto mt-24 px-4 md:px-8">
      <TickerIsConcern className="border" />

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className="border-border hover:border-white"
          asChild
        >
          <Link href={socials.x} target="_blank">
            <SiX className="w-3 h-3" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-border hover:border-white"
          asChild
        >
          <Link href={socials.farcaster} target="_blank">
            <SiFarcaster className="w-4 h-4" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-border hover:border-white"
          asChild
        >
          <Link href={socials.telegram} target="_blank">
            <SiTelegram className="w-4 h-4" />
          </Link>
        </Button>
        {/* <Button
          variant="outline"
          size="icon"
          className="border-border hover:border-white"
          disabled
        >
          <Link href={socials.discord} target="_blank">
            <SiDiscord className="w-4 h-4" />
          </Link>
        </Button> */}
        <Button
          variant="outline"
          size="icon"
          className="border-border hover:border-white"
          asChild
        >
          <Link href={socials.github} target="_blank">
            <SiGithub className="w-4 h-4" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="justify-start gap-2 font-mono border-border hover:border-white grow"
          asChild
        >
          <Link href={"/"}>
            <Globe className="w-4 h-4 mr-2" />
            website
            <ArrowRight className="w-4 h-4 ml-auto" />
          </Link>
        </Button>
      </div>
      <Button
        variant="outline"
        size="sm"
        asChild
        className="justify-start gap-2 font-mono border-border hover:border-white"
      >
        <Link href={links.web3bio} target="_blank">
          <LinkIcon className="w-4 h-4" /> web3 bio
          <ArrowUpRight className="w-4 h-4 ml-auto" />
        </Link>
      </Button>
    </div>
  );
}
