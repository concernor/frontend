import { Marquee } from "@/components/ui/marquee";

interface TickerMarqueeProps {
  reverse?: boolean;
}

function TickerMessage() {
  return (
    <h2 className="uppercase text-sm font-extralight">
      ticker is <b className="font-bold">$CONCERN</b>
    </h2>
  );
}

export function TickerMarquee({ reverse = false }: TickerMarqueeProps) {
  return (
    <Marquee reverse={reverse} className="[--duration:20s]">
      {[1, 2, 3, 4].map((i) => (
        <TickerMessage key={`m-${i}`} />
      ))}
    </Marquee>
  );
}
