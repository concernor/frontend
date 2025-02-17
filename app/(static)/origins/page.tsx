import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Tweet } from "react-tweet";

export default function Origins() {
  return (
    <div className="origins flex flex-col gap-8">
      {/* How it Started */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-full p-4">
          <div className="sticky top-0 pt-8 pb-4">
            <h2 className="uppercase font-semibold  py-2">How it Started</h2>
            <p className="text-muted-foreground ">
              Discussions has started at 13.12.2024 when Eric Conner criticized
              Bankless guys for being intellectually dishonest and using their
              platform the shill/advertise the Ethereum competitors under the
              disguise of &quot;just asking questions&quot; without disclosing
              about the incentives of themselves as well as the guests.
            </p>
          </div>
        </div>
        <div className="[&_.react-tweet]:bg-background [&_.react-tweet-theme]:!bg-background [&_.react-tweet]:text-foreground [&_.react-tweet]:border">
          <Tweet id="1867397649122705495" />
        </div>
      </div>

      {/* Manifestation of the MEME */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-full p-4">
          <div className="sticky top-0 pt-8 pb-4">
            <h2 className="uppercase font-semibold  py-2">
              Manifestation of the MEME
            </h2>
            <p className="text-muted-foreground">
              This tweet has gathered a lot of reaction and echoed all over CT
              by multiple influential figures and spiked a discussion of
              concerns everyone had. It struck a chord because during the last
              couple of years (even in the last bear market), we have seen many
              people FUDing ETH under the disguise of criticism. Even though the
              criticism was directed towards Bankless, people have resonated
              because it has been a common practice for the podcasters to create
              fud and shill other tokens without disclosing conflict of
              interest.
            </p>
            <p className="text-muted-foreground">
              A day after, the Concernor meme has been manifested by Vance
              Spencer on the tweet he made criticizing the people who act like
              they are concerned but instead use their platform to create a FUD
              and shill their bags. He first described this action as $ETH
              Concern Trolling.
            </p>
          </div>
        </div>
        <div className="[&_.react-tweet]:bg-background [&_.react-tweet-theme]:!bg-background [&_.react-tweet]:text-foreground [&_.react-tweet]:border">
          <Tweet id="1867696590301147210" />
        </div>
      </div>

      {/* Proof of memeability */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-full p-4">
          <div className="sticky top-0 pt-8 pb-4">
            <h2 className="uppercase font-semibold  py-2">
              Proof of memeability
            </h2>
            <p className="text-muted-foreground">
              The tweet has summarized the pattern/behaviour so well, it echoed
              even more around the CT and resulted in Jimmy Ragosa creating what
              we call the OG meme the same day which confirmed the memeability
              of this concept.
            </p>
          </div>
        </div>
        <div className="[&_.react-tweet]:bg-background [&_.react-tweet-theme]:!bg-background [&_.react-tweet]:text-foreground [&_.react-tweet]:border-white [&_.react-tweet]:border [&_.react-tweet]:rounded-none [&_.react-tweet]:font-mono [&_.react-tweet]:text-xs">
          <Tweet id="1867851801652826546" />
        </div>
      </div>

      {/* Birth of concernor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-full p-4">
          <div className="sticky top-0 pt-8 pb-4">
            <h2 className="uppercase font-semibold  py-2">
              Birth of concernor
            </h2>
            <p className="text-muted-foreground">
              After Jimmy&apos;s memes, we really liked the meme and been
              inspired to move forward and do something with it. Didn&apos;t
              know what didn&apos;t know when but we started claiming accounts
              on different platforms and started yapping.
            </p>
          </div>
        </div>
        <div className="[&_.react-tweet]:bg-background [&_.react-tweet-theme]:!bg-background [&_.react-tweet]:text-foreground [&_.react-tweet]:border">
          <Tweet id="1868381722649456723" />
        </div>
      </div>

      <Button variant="outline" asChild>
        <Link href="/">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Link>
      </Button>
    </div>
  );
}
