import {
  FlagTriangleRight,
  ScrollText,
  ArrowUpRight,
  LucideSwords,
  ArrowRight,
} from "lucide-react";
import { SiFarcaster } from "@icons-pack/react-simple-icons";

import { links, socials } from "@/lib/consts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quests = [
  {
    icon: <ScrollText className="w-4 h-4" />,
    title: "read the manifesto",
    link: links.manifesto,
    description: "learn concernors stands for",
  },
  {
    icon: <SiFarcaster className="w-4 h-4" />,
    title: "join the /concernors",
    link: "https://warpcast.com/~/channel/concernors",
    description: "join the community and get a role",
    external: true,
  },
  {
    icon: <LucideSwords className="w-4 h-4" />,
    title: "complete the quests",
    link: links.quests,
    description: "complete the quests and get a reward",
    external: true,
    disabled: true,
  },
];

const Quest = ({ quest }: { quest: (typeof quests)[number] }) => (
  <Button
    variant="outline"
    className="justify-start"
    key={quest.title}
    disabled={quest.disabled}
  >
    <Link
      href={quest.link}
      target={quest.external ? "_blank" : undefined}
      className="w-full flex flex-row justify-between items-center gap-2 font-mono text-xs"
    >
      {quest.icon}
      {quest.title}
      {quest.external ? (
        <ArrowUpRight className="w-4 h-4 ml-auto" />
      ) : (
        <ArrowRight className="w-4 h-4 ml-auto" />
      )}
    </Link>
  </Button>
);

export const Origins = () => {
  return (
    <Link
      href={links.origins}
      target="_blank"
      className="w-full flex flex-col justify-start"
    >
      <Button
        variant="outline"
        size="sm"
        className="justify-start font-mono hover:bg-background"
      >
        <FlagTriangleRight className="w-3 h-3" />
        learn the origins
        <ArrowUpRight className="w-4 h-4 ml-auto" />
      </Button>
      <div className="card border-dashed border-t-0 pt-4 pr-2">
        <div className="w-full flex flex-row justify-between items-center">
          <h1 className="font-bold text-sm">The Concernooooorrrrr</h1>
        </div>
        <ol className="list-inside list-decimal text-xs text-left font-[family-name:var(--font-geist-mono)] px-2 pt-2 pb-4">
          <li>very concerned.</li>
          <li>wants you to know he is concerned </li>
          <li>has a bag that can alleviate your concerns</li>
        </ol>
      </div>
    </Link>
  );
};

export const Quests = () => {
  return (
    <div className="w-full lg:w-1/3 flex flex-col gap-2">
      <Origins />

      {quests.map((quest) => (
        <Quest key={quest.title} quest={quest} />
      ))}
    </div>
  );
};
