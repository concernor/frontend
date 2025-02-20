import {
  SiDiscord,
  SiFarcaster,
  SiGithub,
  SiTelegram,
} from "@icons-pack/react-simple-icons";
import { SiX } from "@icons-pack/react-simple-icons";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { links, socials } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { PurchaseButton } from "@/components/landing/purchase-button";
const Socials = () => (
  <>
    <Link
      href={socials.x}
      target="__blank"
      className={cn(
        social_link,
        "border-t-2 mt-[-2px] lg:mt-0 lg:border-t-0 lg:border-l-2"
      )}
    >
      <SiX className="w-3 h-3" /> (aka. Twitter)
    </Link>
    <Link
      href={socials.farcaster}
      target="__blank"
      className={cn(social_link, "mt-[-2px] hover:border-b-2")}
    >
      <SiFarcaster className="w-4 h-4" /> Farcaster
    </Link>
    <span
      // href={socials.discord}
      // target="__blank"
      className={cn(
        social_link,
        "ml-[-2px] lg:ml-0 text-muted-foreground hover:bg-background"
      )}
    >
      <SiDiscord className="w-4 h-4" /> Discord (soon)
    </span>
    <Link href={socials.telegram} target="__blank" className={social_link}>
      <SiTelegram className="w-4 h-4" /> Telegram
    </Link>
    <Link
      href={socials.github}
      target="__blank"
      className={cn(social_link, "ml-[-2px] lg:ml-0")}
    >
      <SiGithub className="w-4 h-4" /> Github
    </Link>
  </>
);

const Links = () => (
  <div className="text-xs flex flex-col gap-1">
    <Link target="__blank" href={links.origins}>
      origins
    </Link>
    <Link href={links.manifesto}>manifesto</Link>
    {/* <Link href={links.docs}>docs</Link> */}
  </div>
);

const Legal = () => (
  <div className="flex gap-2 text-xs mt-auto">
    <Link href="/privacy" className="hover:underline hover:underline-offset-2">
      <small>?</small>privacy
    </Link>
    <Separator orientation="vertical" className="h-4 border-white/80" />
    <Link href="/terms" className="hover:underline hover:underline-offset-2">
      <small>!</small>terms
    </Link>
  </div>
);

const Disclaimer = () => (
  <div className="py-8 text-sm text-muted-foreground">
    $CONCERN is a meme coin with no intrinsic value or expectation of financial
    return. <br />
    Concernor is created for entertainment purposes only.
  </div>
);

const social_link = "flex gap-2 items-center p-6  hover:bg-muted-foreground/20";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col mb-24 mt-12">
      <div className="w-full flex flex-col lg:flex-row border-2">
        <div className="w-full lg:w-1/2 grid grid-rows-3 divide-y-2">
          <div className="p-4 w-full flex justify-between items-center h-16">
            <span className="uppercase font-bold pr-4 text-xs sm:text-sm ">
              don&apos;t worry anon
            </span>
            <PurchaseButton />
          </div>
          <div className="w-full h-full p-4 flex flex-col font-mono text-muted-foreground row-span-2">
            <Links />
            <Legal />
          </div>
        </div>
        <div className="w-full lg:w-1/2 grid grid-rows-3 grid-cols-2 text-sm divide-y-2 divide-x-2">
          <Socials />
          <div className=""></div>
        </div>
      </div>
      <Disclaimer />
    </footer>
    // <footer className="flex flex-col gap-2 card mb-4">
    //   <div className="flex justify-between items-center">
    //     <Logo />
    //     <MainNav hideButtons className="text-xs" />
    //   </div>
    //   <Separator className="mt-1 mb-2 bg-gray-800" />
    //   <div className="flex justify-between items-center">
    //     <Socials />
    //     <Links />
    //   </div>
    // </footer>
  );
};
