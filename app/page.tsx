import { Heading } from "@/components/landing/heading";
import { Quests } from "@/components/landing/quests";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const dump_data = [
  {
    title: "Primary Concerns",
    content: (
      <ul className="text-muted-foreground text-sm">
        <li>Privacy & Anonimity</li>
        <li>Freedom of Expression</li>
        <li>Accountability</li>
        <li>Sustainability</li>
      </ul>
    ),
  },
  {
    title: "What's a meme coin?",
    content: (
      <p className="text-muted-foreground">
        Meme coins are a type of cryptocurrency with no intrinsic value, but are
        traded amongst a community who share a common interest/humor. These
        coins are often created as a joke or parody, and are not intended to be
        used as a serious investment!
      </p>
    ),
  },
  {
    title: "Community",
    content: (
      <p className="text-muted-foreground">
        The best memecoins are only as good as their community. Community
        participation is both vital, and based. Join your brothers and sisters
        in memes, and together we can spread the word – the based king is coming
        for his throne.
      </p>
    ),
  },
  {
    title: "Onchain Giving & Enabling",
    content: (
      <p className="text-muted-foreground">
        Concernors seek to use its platform and treasury to give back and
        enable. Whether it would be donating to great causes, or enabling
        builders and artists on Base by providing funding, Mochi strives to be a
        key player in the Base ecosystem and pushes to cultivate the culture
        onchain.
      </p>
    ),
  },
];

const how_to_buy_data = [
  {
    title: "Introduction",
    content: (
      <ul className="text-muted-foreground text-sm">
        <li>Privacy & Anonimity</li>
        <li>Freedom of Expression</li>
        <li>Accountability</li>
        <li>Sustainability</li>
      </ul>
    ),
  },
  {
    title: "Add Base network to your wallet",
    content: (
      <p className="text-muted-foreground">
        Meme coins are a type of cryptocurrency with no intrinsic value, but are
        traded amongst a community who share a common interest/humor. These
        coins are often created as a joke or parody, and are not intended to be
        used as a serious investment!
      </p>
    ),
  },
  {
    title: "Bridge your ETH to Base",
    content: (
      <p className="text-muted-foreground">
        The best memecoins are only as good as their community. Community
        participation is both vital, and based. Join your brothers and sisters
        in memes, and together we can spread the word – the based king is coming
        for his throne.
      </p>
    ),
  },
  {
    title: "Swap your ETH for $CONCERN",
    content: (
      <p className="text-muted-foreground">
        Concernors seek to use its platform and treasury to give back and
        enable. Whether it would be donating to great causes, or enabling
        builders and artists on Base by providing funding, Mochi strives to be a
        key player in the Base ecosystem and pushes to cultivate the culture
        onchain.
      </p>
    ),
  },
];

const Dump = () => (
  <div className="w-full lg:w-2/3 px-0 lg:px-4 flex flex-col gap-8">
    <div>
      <h2 className="font-semibold text-white mb-4">WE ARE CONCERNOOORS</h2>
      <div className="flex flex-col gap-4 text-muted-foreground">
        <p>
          $CONCERN is a unique memecoin on Base, merging viral meme culture with
          real utility. At the heart of a dynamic SocialFi ecosystem, $CONCERN
          powers staking, token launches, and trading with innovative features
          like user profiling and NFT PFPs.
        </p>
        <p>
          All of this makes Bepe the ultimate fully integrated, social DeFi
          platform.
        </p>

        <p>You’re not still fading are you anon?</p>
      </div>
    </div>
    <div>
      <h2 className="font-semibold">How to buy $CONCERN</h2>
      <Accordion type="single" collapsible>
        {how_to_buy_data.map(({ title, content }, key) => (
          <AccordionItem key={key} value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    <div>
      <h2 className="font-semibold">FAQ&apos;s</h2>
      <Accordion type="single" collapsible>
        {dump_data.map(({ title, content }, key) => (
          <AccordionItem key={key} value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Heading />
      <div className="bg-dotted w-full h-12" />
      <div className="flex flex-col lg:flex-row gap-8">
        <Quests />
        <Dump />
      </div>
      <div className="bg-dotted w-full h-12" />
    </>
  );
}
