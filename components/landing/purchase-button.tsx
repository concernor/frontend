import Link from "next/link";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/consts";
import { cn } from "@/lib/utils";

export const PurchaseButton = () => {
  return (
    <Button variant="outline" asChild className="z-50 bg-black px-0 py-0">
      <Link href={links.flaunch} target="__blank">
        <span
          className={cn(
            "px-4 py-2 h-9",
            "border border-input border-white ",
            "block -translate-x-[5px] -translate-y-[5px] bg-dotted  hover:-translate-y-[3px] hover:-translate-x-[2px] active:translate-x-0 active:translate-y-0 transition-all"
          )}
        >
          GET <b>$CONCERN</b>&apos;ED
        </span>
      </Link>
    </Button>
  );
};
