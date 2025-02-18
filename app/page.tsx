import { Heading } from "@/components/landing/heading";
import { Quests } from "@/components/landing/quests";

const Dump = () => (
  <div className="w-2/3 px-0 lg:px-4 flex flex-col gap-4">
    <div>
      <h2>Primary Concerns</h2>
      <ul className="text-muted-foreground text-sm">
        <li>Privacy & Anonimity</li>
        <li>Freedom of Expression</li>
        <li>Accountability</li>
        <li>Sustainability</li>
      </ul>
    </div>

    <div>
      <h2>What&apos;s a meme coin?</h2>
      <p className="text-muted-foreground">
        Meme coins are a type of cryptocurrency with no intrinsic value, but are
        traded amongst a community who share a common interest/humor. These
        coins are often created as a joke or parody, and are not intended to be
        used as a serious investment!
      </p>
    </div>
    <div>
      <h2>Community</h2>
      <p className="text-muted-foreground">
        The best memecoins are only as good as their community. Community
        participation is both vital, and based. Join your brothers and sisters
        in memes, and together we can spread the word – the based king is coming
        for his throne.
      </p>
    </div>
    <div>
      <h2>ONCHAIN GIVING & ENABLING</h2>
      <p className="text-muted-foreground">
        Concernors seek to use its platform and treasury to give back and
        enable. Whether it would be donating to great causes, or enabling
        builders and artists on Base by providing funding, Mochi strives to be a
        key player in the Base ecosystem and pushes to cultivate the culture
        onchain.
      </p>
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
