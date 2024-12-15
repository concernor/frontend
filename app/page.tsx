import { Button } from "@/components/ui/button";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">The Concernooooorrrrr</h1>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>very concerned.</li>
          <li>wants you to know he is concerned </li>
          <li>has a bag that can alleviate your concerns</li>
        </ol>

        <div className="w-full flex justify-between items-center flex-col sm:flex-row">
          <div>stay concerned. buidling the bag.</div>

          <div className="flex gap-1">
            <Button asChild size="icon">
              <a href="https://x.com/concernor" target="_blank">
                <SiX className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="icon">
              <a href="https://github.com/concernor" target="_blank">
                <SiGithub className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </main>
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
