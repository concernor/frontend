import { PrivacyDialog } from "@/components/privacy";
import { TermsDialog } from "@/components/terms";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  // SiDiscord,
  // SiFarcaster,
  SiGithub,
  SiX,
} from "@icons-pack/react-simple-icons";

export default function Home() {
  return (
    <div className="flex flex-col max-w-xl min-h-screen mx-auto py-4 px-4 gap-16 sm:py-12 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      {/* <header className="flex flex-col gap-2 py-4">
        <div className="font-bold">
          <span>.concernor</span>
        </div>
      </header> */}
      <main className="flex flex-col gap-8 row-start-2 items-start p-4 sm:p-0 max-w-xl mt-12">
        <h1 className="text-3xl font-bold">The Concernooooorrrrr</h1>

        <ol className="list-inside list-decimal text-sm text-left font-[family-name:var(--font-geist-mono)]">
          <li>very concerned.</li>
          <li>wants you to know he is concerned </li>
          <li>has a bag that can alleviate your concerns</li>
        </ol>

        <div className="w-full flex justify-between items-center flex-row">
          <div>stay concerned. buidling the bag.</div>

          <div className="flex gap-1">
            <Button asChild size="icon">
              <a href="https://github.com/concernor" target="_blank">
                <SiGithub className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="icon">
              <a href="https://x.com/concernor" target="_blank">
                <SiX className="w-3 h-3" />
              </a>
            </Button>
            {/* <Button asChild size="icon" className="bg-[#8a63d2]">
              <a href="https://docs.concernor.xyz" target="_blank">
                <SiFarcaster className="w-4 h-4 " />
              </a>
            </Button>
            <Button asChild size="icon" className="bg-[#7289da]">
              <a href="https://docs.concernor.xyz" target="_blank">
                <SiDiscord className="w-4 h-4" />
              </a>
            </Button> */}
          </div>
        </div>
      </main>
      <footer className="mt-auto flex flex-col gap-2 p-4 border border-gray-900 border-1 sm:border-2 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="font-bold">
            {/* <span className="w-1 h-1 bg-gray-900  inline-block mr-[2px]" /> */}
            <span>.concernor</span>
          </div>
          <div className="flex gap-2 font-mono text-xs">
            <div className="line-through">docs</div>
          </div>
        </div>
        <Separator className="mt-1 mb-2 bg-gray-800" />
        <div className="flex justify-between items-center">
          <div></div>
          <div>
            <div className="flex gap-2 font-mono text-xs">
              <PrivacyDialog />
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
  );
}
