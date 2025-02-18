"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { coin } from "@/lib/consts";

const shorten = (address: string) =>
  address.slice(0, 10) + "......" + address.slice(-10);

export const CoinAddress = () => {
  const { toast } = useToast();

  const handleClick = () => {
    navigator.clipboard.writeText(coin.address);
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
      <span className="sm:hidden">{shorten(coin.address)}</span>
      <span className="hidden sm:block">{coin.address}</span>
      <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] flex h-5 select-none items-center gap-1 bg-black p-1.5 font-medium opacity-100">
        <Copy className="w-3 h-3" />
      </kbd>
    </Button>
  );
};
