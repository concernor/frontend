import { cn } from "@/lib/utils";
import Image from "next/image";
import { CoinAddress } from "@/components/coin-address";
import { PurchaseButton } from "@/components/landing/purchase-button";
import { TickerMarquee } from "@/components/landing/ticker-marquee";

const TickerIsConcern = () => (
  <div className="p-4 flex flex-col gap-2">
    <TickerMarquee />
    <div className="flex justify-center py-2">
      <Image
        width={120}
        height={120}
        src="/static/concernor-head.png"
        alt="concernor mascot"
        className="grow-0"
      />
    </div>
    <TickerMarquee reverse />
    <CoinAddress />

    <div className="flex justify-between gap-4 items-center text-xs">
      <p className="text-xs text-muted-foreground">
        we are <span className="text-[#0f5dff] font-bold">based</span> and{" "}
        <span className="text-[#EB88EF]">𝑓launched</span>
      </p>
      <PurchaseButton />
    </div>
  </div>
);

const Tokenomics = () => (
  <div className="p-4 flex flex-col ml-[-2px] lg:ml-0">
    <h2 className="text-sm border-b font-mono border-white/30 pb-1 grow-0">
      tokenomics
    </h2>
    <p className="text-xs text-muted-foreground pt-1">
      alleviates your concerns
    </p>
    <table className="w-full text-xs mt-auto text-muted-foreground">
      <tbody>
        <tr className="border-b">
          <td>launch</td>
          <td className="text-right text-white">fair & stealth</td>
        </tr>
        <tr className="border-b">
          <td>initial supply</td>
          <td className="text-right">100b</td>
        </tr>
        <tr className="border-b">
          <td>team allocation</td>
          <td className="text-right text-white">none</td>
        </tr>
        <tr className="border-b">
          <td>special interests</td>
          <td className="text-right text-white">none</td>
        </tr>
        <tr className="border-b">
          <td>fee share team/community %</td>
          <td className="text-right">10/90%</td>
        </tr>
        <tr className="border-b">
          <td>buyback</td>
          <td className="text-right text-green-600">manual</td>
        </tr>
        <tr className="border-b">
          <td>progressive bid wall</td>
          <td className="text-right text-red-600">off</td>
        </tr>
        <tr className="">
          <td>total burned</td>
          <td className="text-right text-white">2%</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const NFTRelease = () => (
  <div
    className={cn(
      "p-4 flex flex-col items-center justify-center gap-2",
      "border-t-2 lg:border-t-0 md:col-span-2 lg:col-span-1 py-12 ml-[-2px] lg:ml-0"
    )}
  >
    <h3 className="uppercase font-mono text-sm text-muted-foreground">
      NFT in progress
    </h3>
    <span className="loader w-[120px]"></span>
  </div>
);

export const Heading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x-2 border-2">
      <TickerIsConcern />
      <Tokenomics />
      <NFTRelease />
    </div>
  );
};
