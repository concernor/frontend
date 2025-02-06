"use client";

import { coin } from "@/lib/consts";
import { Button } from "./ui/button";

const shorten = (address: string) =>
  address.slice(0, 8) + "..." + address.slice(-4);

export const Address = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="relative h-8 grow justify-start rounded-[0.5rem] bg-muted/50 text-xs font-normal text-muted-foreground shadow-none overflow-hidden pr-12 font-mono"
      onClick={() => {
        navigator.clipboard.writeText(coin.address);
      }}
    >
      <span className="sm:hidden">{shorten(coin.address)}</span>
      <span className="hidden sm:block">{coin.address}</span>

      <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
        copy
      </kbd>
    </Button>
  );
};
