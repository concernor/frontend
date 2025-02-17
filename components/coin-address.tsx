"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const COIN_ADDRESS = "0x8f5a590be0b27feb5bffaab82bbf31d3c7efe222";

// const shorten = (address: string) =>
//   address.slice(0, 8) + "..." + address.slice(-4);

export const CoinAddress = () => {
  const { toast } = useToast();

  const handleClick = () => {
    navigator.clipboard.writeText(COIN_ADDRESS);
    toast({
      title: "Copied Coin Address to clipboard.",
    });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="relative mt-auto mb-2 font-mono border-dashed w-full justify-between hover:bg-bg text-muted-foreground overflow-hidden grow"
      onClick={handleClick}
    >
      {/* <span className="sm:hidden">{shorten(COIN_ADDRESS)}</span> */}
      <span className="">{COIN_ADDRESS}</span>
      <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] flex h-5 select-none items-center gap-1 bg-black p-1.5 font-medium opacity-100">
        <Copy className="w-3 h-3" />
      </kbd>
    </Button>
  );
};
