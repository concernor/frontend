import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Tweet } from "react-tweet";

export default function Origins() {
  return (
    <div data-theme="light" className="origins flex flex-col gap-4">
      <div className="card prose prose-p:text-sm">
        <h2 className="uppercase text-base">How it Started</h2>
        <p>
          Discussions has started at 13.12.2024 when Eric Conner criticized
          Bankless guys for being intellectually dishonest and using their
          platform the shill/advertise the Ethereum competitors under the
          disguise of “just asking questions” without disclosing about the
          incentives of themselves as well as the guests.
        </p>
      </div>
      <Tweet id="1867397649122705495" />

      <Separator />
      <div className="card prose prose-p:text-sm">
        <h2 className="uppercase text-base">Manifestation of the MEME</h2>
        <p>
          This tweet has gathered a lot of reaction and echoed all over CT by
          multiple influential figures and spiked a discussion of concerns
          everyone had. It struck a chord because during the last couple of
          years (even in the last bear market), we have seen many people FUDing
          ETH under the disguise of criticism. Even though the criticism was
          directed towards Bankless, people have resonated because it has been a
          common practice for the podcasters to create fud and shill other
          tokens without disclosing conflict of interest.
        </p>

        <p>
          A day after, the Concernor meme has been manifested by Vance Spencer
          on the tweet he made criticizing the people who act like they are
          concerned but instead use their platform to create a FUD and shill
          their bags. He first described this action as $ETH Concern Trolling.
        </p>
      </div>
      <Tweet id="1867696590301147210" />
      <Separator />
      <div className="card prose prose-p:text-sm">
        <h2 className="uppercase text-base">Proof of memeability</h2>
        <p>
          The tweet has summarized the pattern/behaviour so well, it echoed even
          more around the CT and resulted in Jimmy Ragosa creating what we call
          the OG meme the same day which confirmed the memeability of this
          concept.
        </p>
      </div>
      <Tweet id="1867851801652826546" />

      <Separator />
      <div className="card prose prose-p:text-sm">
        <h2 className="uppercase text-base">Birth of concernor</h2>
        <p>
          After Jimmy&apos;s memes, we really liked the meme and been inspired
          to move forward and do something with it. Didn&apos;t know what
          didn&apos;t know when but we started claiming accounts on different
          platforms and started yapping.
        </p>
      </div>

      <Tweet id="1868381722649456723" />

      <Button variant="outline" asChild>
        <Link href="/">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Link>
      </Button>
    </div>
  );
}
