import { links } from "@/lib/consts";
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

export const Heading = () => {
  return (
    <div className="w-full flex flex-col gap-2 card">
      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="font-bold">The Concernooooorrrrr</h1>

        <Button variant="ghost" size="sm" asChild>
          <Link href={links.origins} className="font-mono">
            origins
            <ArrowRight className="w-3 h-3" />
          </Link>
        </Button>
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
};
