import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const pools = {
  "ETH/CONCERN":
    "https://app.uniswap.org/explore/pools/base/0x21e0cce154e0e737b4076f27e479699cbfff653348d064c98c30bcb75dccb167",
  "FLNCHY/CONCERN":
    "https://app.uniswap.org/explore/pools/base/0xaeFfEAa004ad149DeF5B8BaAB4118d37FfB89361",
};

export default function Manifesto() {
  return (
    <div className="w-full flex flex-col gap-3 text-muted-foreground">
      <h1 className="text-white text-xl font-bold uppercase">Experiments</h1>
      <p className="">
        Our primary focus is expanding liquidity and trading volume for $CONCERN
        to maximize buyback potential through trading fees. While in an ideal
        world{" "}
        <a
          className="underline text-white"
          href="https://aerodrome.finance/"
          target="_blank"
        >
          Aerodrome
        </a>{" "}
        pool would provide more sustainable LP yields, we&apos;re currently
        focused on building strong fundamentals in some base pools before we can
        have a seat on big boys table.
      </p>
      <p className="">
        Additionally, we&apos;re exploring ways to bring new utility features
        and integrations for $CONCERN to create more engaging ways for the
        community to participate beyond just trading, with the goal of driving
        organic demand through actual usage.
      </p>

      <div className="mt-8">
        <h2 className="text-lg font-bold uppercase text-white mb-4">
          Uniswap LP&apos;s <br />
          <small className="text-muted-foreground">
            Please be aware of the{" "}
            <a
              href="https://www.kraken.com/learn/what-is-impermanent-loss"
              className="underline text-white"
              target="_blank"
            >
              Impermanent Loss
            </a>{" "}
            and risks before providing liquidity.
          </small>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="border border-dashed border-white flex flex-col gap-2 p-4">
            <div className="flex justify-between">
              <h3 className="uppercase text-white flex flex-col gap-1">
                ETH/CONCERN
                <span className="text-xs text-muted-foreground">
                  (1.3% fee per trade)
                </span>
              </h3>

              <Button variant="outline" size="sm" asChild>
                <Link href={pools["ETH/CONCERN"]} target="_blank">
                  Uniswap V4 pool <ArrowUpRight className="w-3 h-3" />
                </Link>
              </Button>
            </div>
            <p className="text-sm">
              This pool provides an alternative to the flETH/CONCERN pool for
              trading $CONCERN. It features a 0.3% fee that goes directly to LP
              providers, plus implements the{" "}
              <a
                href="https://btcacc.com/"
                className="underline text-white"
                target="_blank"
              >
                btc/acc hook
              </a>{" "}
              which adds an additional 1% fee per trade to automatically market
              buy $cbBTC. This helps traders accumulate Bitcoin exposure while
              trading meme coins.
            </p>
            <p className="text-sm">
              Ideal for concernors who are bullish on both $CONCERN and $ETH and
              doesn&apos;t care which they have more at one given time. It
              enables strategic profit-taking by selling $CONCERN during price
              increases and accumulating $CONCERN during dips, all while earning
              LP fees and helping more speculative concernors to stack sats via
              automated $cbBTC purchases.
            </p>
            <div className="mt-auto">
              <Badge
                className="border-dashed border-red-500 text-xs text-red-500 font-normal tracking-wider"
                variant="outline"
              >
                high-risk
              </Badge>
            </div>
          </div>
          <div className="border border-dashed border-white flex flex-col gap-2 p-4">
            <div className="flex justify-between">
              <h3 className="uppercase text-white flex flex-col gap-1">
                FLNCHY/CONCERN
                <span className="text-xs text-muted-foreground">
                  (0.1% fee per trade)
                </span>
              </h3>

              <Button variant="outline" size="sm" asChild>
                <Link href={pools["FLNCHY/CONCERN"]} target="_blank">
                  Uniswap V3 pool <ArrowUpRight className="w-3 h-3" />
                </Link>
              </Button>
            </div>
            <p className="text-sm">
              This pool serves as an additional price oracle for $CONCERN while
              aiming to capture some of $FLNCHY&apos;s trading volume. When
              traders buy/sell $FLNCHY, the $CONCERN/$FLNCHY ratio shifts,
              creating arbitrage opportunities against the flETH/CONCERN pool.
              And arbitrage bots will step up to re-balance the pool by
              buying/selling $CONCERN.
            </p>
            <p className="text-sm">
              The pool charges a minimal 0.1% fee per trade which is distributed
              to Liquidity Providers. This makes it an ideal choice for traders
              looking to maintain balanced positions in both $CONCERN and
              $FLNCHY tokens, effectively serving as a self-rebalancing
              portfolio mechanism.
            </p>
            <div className="mt-auto flex gap-2">
              <Badge
                className="border-dashed border-red-500 text-xs text-red-500 font-normal tracking-wider"
                variant="outline"
              >
                high-risk
              </Badge>
              <Badge
                className="border-dashed border-red-500 text-xs text-red-500 font-normal tracking-wider"
                variant="outline"
              >
                under-review
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <blockquote className="italic text-muted-foreground border-l-4 pl-4 mb-4 border-l-red-500">
          Please do not put any money unless you know what you are doing and
          accept the risks of losing your funds.
        </blockquote>
        <blockquote className="italic text-muted-foreground border-l-4 pl-4">
          PS: Stay tuned for comprehensive guides, tools, and frameworks to help
          concernors master LP strategies. We&apos;ll provide detailed tutorials
          on position management, risk assessment, and yield optimization
          techniques.
        </blockquote>
      </div>
    </div>
  );
}
