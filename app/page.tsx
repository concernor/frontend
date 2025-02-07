import { Address } from "@/components/address";
import Chart from "@/components/chart";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { coin, links } from "@/lib/consts";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const Status = () => (
  <>
    <div className="w-full card flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center mb-6">
        <Address />

        <Button
          variant="outline"
          size="sm"
          className="border-black shadow-none gap-0 h-8"
          asChild
        >
          <a
            href={links.flaunch}
            className="flex items-center gap-1"
            target="__blank"
          >
            Buy now
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </Button>
      </div>

      <Chart />
      <Separator className="bg-gray-800" />
      <div className="w-full flex flex-row justify-between items-end mt-1">
        <h2 className="text-sm">
          ticker is <b className="text-sm">${coin.ticker}</b>
        </h2>
        <p className="flex flex-col text-xs text-gray-500">
          <small>data by:</small>
          <a
            href="https://x.com/pythianism/status/1867696590301147210"
            target="_blank"
            className="flex items-center "
          >
            gecko terminal
            <ExternalLink className="w-3 h-3 ml-2" />
          </a>
        </p>
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
      <Status />
      <Heading />
      <Meme />
    </>
  );
}
