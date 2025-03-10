import { Heading } from "@/components/landing/heading";
import { Quests } from "@/components/landing/quests";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { links, socials } from "@/lib/consts";
import { Separator } from "@/components/ui/separator";
// Possible Branding for the DAO.
// The Concernor Commission
// Welcome to the official domain of The Concernor Commission—a playful nod
// to the SEC, but for anxieties. We are here to shine a spotlight on
// crypto&apos;s hidden motives, questionable shilling tactics, and all
// those nagging concerns that keep you awake at night. By blending humor
// with healthy skepticism, The CC serves as a memetically-charged
// “regulatory” body for all things <b>$CONCERN</b>.

const faqs = [
  {
    title: "What is $CONCERN?",
    content: (
      <div className="text-muted-foreground space-y-2">
        <p>
          <b>$CONCERN</b> is a community-driven{" "}
          <strong>ERC20 meme token</strong> operating on the Base blockchain,
          launched through{" "}
          <a
            href="https://flaunch.gg/base/coin/0x8F5A590Be0B27fEb5bFfaab82BBF31d3c7EFe222"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white"
          >
            flaunch
          </a>
          . With a focus on cultural engagement through memes and social
          interaction, <b>$CONCERN</b> aims to build a vibrant community where
          users can connect and share in the fun of meme culture on Base and
          experiment with the new economics flaunch provides.
        </p>
        <p>
          To learn more about the <strong>Tokenomics</strong> you can checkout
          the contract directly on{" "}
          <a
            href="https://basescan.org/token/0x8f5a590be0b27feb5bffaab82bbf31d3c7efe222"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white"
          >
            basescan
          </a>
          . You can also explore our{" "}
          <a
            href="https://docs.flaunch.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white"
          >
            flaunch docs
          </a>{" "}
          and read about <strong>Fixed Price Fair Launch</strong>,
          <strong>Auto Buybacks</strong>, <strong>Dev Revenue</strong>, and the{" "}
          <strong>Memestream</strong> approach for further information on how
          $CONCERN operates.
        </p>
        <p>
          Please note that, although <b>$CONCERN</b> is community-driven, it
          currently does not include any governance features so it is literally
          a valueless token. We encourage everyone to conduct their own research
          (DYOR) before engaging with <b>$CONCERN</b> or any other
          cryptocurrency.
        </p>
      </div>
    ),
  },
  {
    title: "Is $CONCERN a scam?",
    content: (
      <div className="text-muted-foreground space-y-2">
        <p>
          <b>$CONCERN</b> is a fully transparent project launched through{" "}
          <a
            href="https://flaunch.gg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            flaunch.gg
          </a>
          . But remember: transparency alone doesn&apos;t guarantee it&apos;s
          not a scam.
        </p>
        <p>
          Could <b>$CONCERN</b> be a scam? In theory, yes. In crypto, you never
          truly know.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>
            Are you sure you&apos;re on the real website and not a phony copy?
          </li>
          <li>Are you certain the dev isn&apos;t plotting a rug pull?</li>
          <li>
            Do you know for a fact the community won&apos;t vanish tomorrow?
          </li>
          <li>Do you trust the market to be rational?</li>
          <li>Do you know what the future will bring?</li>
          <li>What about the past? Has anything been overlooked?</li>
          <li>And how can you be certain about the present?</li>
        </ul>
        <p className="mt-2">
          The truth is, there are countless unknowns, and the crypto space isn’t
          a friendly, guaranteed return environment — especially for meme
          tokens. You’re more likely to lose your money than become the next
          millionaire. Always question everything, never trust anyone blindly,
          and do your own research (DYOR).
        </p>
        <p className="font-bold mt-2">Stay Concerned.</p>
      </div>
    ),
  },
  {
    title: "I sent $CONCERN to the wrong address. Can I recover it?",
    content: (
      <div className="text-muted-foreground space-y-2">
        <p>
          Once a blockchain transaction is confirmed, it&apos;s final.
          There&apos;s no magical &quot;undo&quot; button or cosmic help desk to
          salvage your tokens from the depths of the blockchain. If you&apos;ve
          sent your <b>$CONCERN</b> to the wrong address, you can go ahead and
          start saying goodbye to your concerns —because they are gone.
        </p>
        <p>
          Look on the bright side: you no longer have to worry about anyone
          scamming you out of those particular tokens. Let this be a valuable
          lesson: always triple-check the address before you click send, or risk
          paying the &quot;learning tax&quot; in the form of lost tokens.
        </p>
      </div>
    ),
  },
];

const FAQs = () => (
  <div className="w-full lg:w-2/3 flex flex-col">
    <div className="flex flex-col gap-4">
      <p className="text-muted-foreground">
        <b>$CONCERN</b> is a valueless memecoin on Base, blending fleeting hype
        with comedic caution to track your worries in real time. It puts a
        spotlight on the doubts that keep you up at night, fostering a playful
        yet brutally honest take on crypto culture.
      </p>

      <blockquote className="text-muted-foreground border-l-2 border-muted-foreground/40 pl-4 font-mono text-sm mt-2 mb-4">
        &quot;In a world where hype reigns supreme, a little <em>concern</em>{" "}
        might be the real alpha.&quot;
      </blockquote>

      <h2 className="font-semibold text-white mt-2 text-lg">
        Frequently Asked Questions (FAQ)
      </h2>
      <p className="text-muted-foreground mb-2">
        Got questions? Great. Keep digging, never take things at face value and
        stay concerned.
      </p>
    </div>
    <Accordion type="single" collapsible>
      {faqs.map(({ title, content }, key) => (
        <AccordionItem key={key} value={title}>
          <AccordionTrigger className="text-white font-semibold text-base">
            {title}
          </AccordionTrigger>
          <AccordionContent className="text-base">{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default function Home() {
  return (
    <>
      <Heading />
      <div className="bg-dotted w-full h-12" />
      <div className="flex flex-col lg:flex-row gap-8">
        <Quests />
        <FAQs />
      </div>
      <div className="flex flex-col gap-4">
        <Separator />
        <h2 className="text-white font-semibold  mb-6 font-mono">[assets]</h2>

        <div className="flex">
          <Link
            href={links.experiments}
            className="w-32 aspect-square flex items-center justify-center font-mono hover:bg-muted-foreground/10 transition-colors border border-dashed border-white/60"
          >
            <p className="text-sm">/experiments</p>
          </Link>
          <Link
            href={socials.zora}
            target="_blank"
            className="w-32 aspect-square flex items-center justify-center font-mono hover:bg-muted-foreground/10 transition-colors border border-dashed border-white/60 border-l-0 "
          >
            <p className="text-sm">/memes</p>
          </Link>
          <Link
            href={links.branding}
            target="_blank"
            className="w-32 aspect-square flex items-center justify-center font-mono hover:bg-muted-foreground/10 transition-colors border border-dashed border-white/60 border-l-0 "
          >
            <p className="text-sm">/branding</p>
          </Link>
        </div>
      </div>
      <div className="bg-dotted w-full h-12" />
    </>
  );
}
