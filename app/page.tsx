import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  Bookmark,
  ChartColumnIncreasing,
  ExternalLink,
  Heart,
  MessageSquare,
  Repeat,
} from "lucide-react";

import Image from "next/image";

const Manifestation = () => (
  <div className="w-full flex flex-col gap-2 card">
    <div className="w-full flex flex-row justify-between items-center">
      <h1 className="font-bold">The Concernooooorrrrr</h1>
      <a
        href="https://x.com/pythianism/status/1867696590301147210"
        target="_blank"
        className="text-xs text-gray-500 flex items-center "
      >
        manifestation
        <ExternalLink className="w-3 h-3 ml-2" />
      </a>
    </div>
    <ol className="list-inside list-decimal text-sm text-left font-[family-name:var(--font-geist-mono)] px-2 pt-2 pb-4">
      <li>very concerned.</li>
      <li>wants you to know he is concerned </li>
      <li>has a bag that can alleviate your concerns</li>
    </ol>
    <div className="flex flex-row ">
      <Button size="icon" variant="ghost" disabled>
        <Heart className="w-4 h-4" />
      </Button>
      <Button size="icon" variant="ghost" disabled>
        <MessageSquare className="w-4 h-4" />
      </Button>
      <Button size="icon" variant="ghost" disabled>
        <Repeat className="w-4 h-4" />
      </Button>
      <Button size="icon" variant="ghost" className="ml-auto" disabled>
        <ChartColumnIncreasing className="w-4 h-4" />
      </Button>
      <Button size="icon" variant="ghost" disabled>
        <Bookmark className="w-4 h-4" />
      </Button>
    </div>
  </div>
);

const Promises = () => (
  <>
    <div className="w-full card">
      <div>stay concerned. buidling the bag.</div>
    </div>

    <div className="w-full flex flex-row items-center justify-end  text-xs sm:text-sm gap-4">
      <a
        href="https://flaunch.gg/base/coin/0x8F5A590Be0B27fEb5bFfaab82BBF31d3c7EFe222"
        className="w-1/3 card "
        target="__blank"
      >
        Ticker is $CONCERN
      </a>

      <div className="card w-1/3 text-center border-gray-400 text-gray-400">
        POC
      </div>

      <div className="w-1/3   card border-gray-400 text-gray-400 ">
        Echo System
      </div>
    </div>
  </>
);

const Meme = () => (
  <div className="w-full card">
    <Image
      src="https://pbs.twimg.com/media/GevxP31WIAAQDdv?format=png&name=medium"
      alt="meme"
      width={757}
      height={1013}
    />
    <Separator className="my-2" />
    <div className="w-full flex flex-row justify-between items-center pt-2">
      <a
        href="https://x.com/JimmyRagosa/status/1867851801652826546"
        target="_blank"
        className="text-xs text-gray-500 flex items-center ml-auto"
      >
        OG meme template
        <ExternalLink className="w-3 h-3 ml-1" />
      </a>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Manifestation />
      <Promises />
      <Meme />
    </>
  );
}
