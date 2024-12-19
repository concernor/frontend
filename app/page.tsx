import { PrivacyDialog } from "@/components/privacy";
import { TermsDialog } from "@/components/terms";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SiDiscord,
  SiFarcaster,
  SiGithub,
  SiX,
} from "@icons-pack/react-simple-icons";
import {
  Bookmark,
  ChartColumnIncreasing,
  Dock,
  ExternalLink,
  Heart,
  MessageSquare,
  Repeat,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// export const runtime = "edge";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] px-4 sm:px-0">
      <div className="max-w-xl mx-auto flex flex-col min-h-screen">
        <header className="flex justify-between items-center py-4 border border-gray-900 border-2 rounded-lg p-4 mt-4">
          <div className="font-bold">
            <span>.concernor</span>
          </div>
          <nav className="flex gap-2 items-center text-sm">
            <Link href="/">home</Link>
            {/* <a href="https://docs.concernor.eth.limo" target="_blank">
              docs
            </a> */}
            <span className="line-through">docs</span>

            <Button size="sm" variant="ghost" className="" disabled>
              {/* <a href="/"> */}
              POC
              <Dock className="w-4 h-4 ml-1" />
              {/* </a> */}
            </Button>
          </nav>
        </header>
        <main className="flex flex-col items-start gap-6 py-8">
          <div className="w-full flex flex-col gap-2 border border-gray-900 border-1 rounded-lg p-4">
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
          <div className="w-full border border-gray-900 border-1 rounded-lg p-4">
            <div>stay concerned. buidling the bag.</div>
          </div>

          <div className="w-full border border-gray-900 border-1 rounded-lg p-4">
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
        </main>
        <footer className="mt-auto flex flex-col gap-2 p-4 border border-gray-900 border-2 rounded-lg my-4">
          <div className="flex justify-between items-center">
            <div className="font-bold">
              <span>.concernor</span>
            </div>
            <div className="flex gap-2 font-mono text-xs">
              <div className="line-through">docs</div>
            </div>
          </div>
          <Separator className="mt-1 mb-2 bg-gray-800" />
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Button asChild size="icon" variant="ghost">
                <a href="https://x.com/concernor" target="_blank">
                  <SiX className="w-3 h-3" />
                </a>
              </Button>

              <Button asChild size="icon" variant="ghost">
                <a href="https://warpcast.com/concernor.eth" target="_blank">
                  <SiFarcaster className="w-4 h-4 " />
                </a>
              </Button>
              <Button disabled size="icon" variant="ghost">
                {/* <a href="https://docs.concernor.xyz" target="_blank"> */}
                <SiDiscord className="w-4 h-4" />
                {/* </a> */}
              </Button>
              <Button asChild size="icon" variant="ghost">
                <a href="https://github.com/concernor" target="_blank">
                  <SiGithub className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <div>
              <div className="flex gap-2 font-mono text-xs">
                <PrivacyDialog />
                <Separator orientation="vertical" className="h-4" />
                <TermsDialog />
              </div>
            </div>
          </div>
        </footer>
        {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Lore? || Disclosure || Roadmap || Terms || FAQ
        </a>
      </footer> */}
      </div>
    </div>
  );
}
