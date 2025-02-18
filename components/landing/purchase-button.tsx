import Link from "next/link";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/consts";
import { cn } from "@/lib/utils";

export const PurchaseButton = () => {
  return (
    <Button
      variant="outline"
      asChild
      className="z-30 bg-black px-0 py-0 h-8 sm:h-9"
    >
      <Link href={links.flaunch} target="__blank">
        <span
          className={cn(
            "px-4 py-2",
            "border border-input border-white ",
            "block -translate-x-[5px] -translate-y-[5px] bg-dotted  hover:-translate-y-[3px] hover:-translate-x-[2px] active:translate-x-0 active:translate-y-0 transition-all",
            "text-xs sm:text-sm h-8 sm:h-9"
          )}
        >
          GET <b>$CONCERN</b>&apos;ED
        </span>
      </Link>
    </Button>
  );
};
