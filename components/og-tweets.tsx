// import { links } from "@/lib/consts";
import {
  ArrowRight,
  Bookmark,
  ChartColumnIncreasing,
  Heart,
  MessageSquare,
  Repeat,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const OGTweet = () => {
  return (
    <div className="w-full flex flex-col gap-2 card cursor-pointer">
      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="font-bold text-sm">The Concernooooorrrrr</h1>
        <Link href={"/origins"} className="text-xs flex items-center gap-1">
          origins
          <ArrowRight className="w-3 h-3" />
        </Link>
        {/* <Button variant="outline" size="sm" asChild>
            <Link href={"/origins"} className="font-mono">
              origins
              <ArrowRight className="w-3 h-3" />
            </Link>
          </Button> */}
      </div>
      <ol className="list-inside list-decimal text-xs text-left font-[family-name:var(--font-geist-mono)] px-2 pt-2 pb-4">
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
};

export const InitialTweet = () => {
  return (
    <div className="w-full flex flex-col gap-2 card">
      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="font-bold">The Concernooooorrrrr</h1>
      </div>
      <p className="text-xs font-mono pt-2 pb-4">AHHHHH IM CONCERNINNNNGGGGG</p>
      {/* <ol className="list-inside list-decimal text-xs text-left font-[family-name:var(--font-geist-mono)]">
          <li>very concerned.</li>
          <li>wants you to know he is concerned </li>
          <li>has a bag that can alleviate your concerns</li>
        </ol> */}
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
};
