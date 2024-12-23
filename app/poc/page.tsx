import { Button } from "@/components/ui/button";
import { Hexagon, Share } from "lucide-react";

const concerns = [
  "Decentralization",
  "Trustlessness",
  "Transparency",
  "Security",
  "Efficiency",
  "Speed",
  "Authenticity",
  "Identity",
  "Optimization",
  "Ownership",
  "Inclusion",
  "Fairness",
  "Provenance",
  "Accountability",
  "Automation",
  "Verification",
  "pneumonoultramicroscopicsilicovolcanoconiosis",
  "Sustainability",
  "Accessibility",
  "Interoperability",
];

export default function POC() {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {/* <div className="card w-full">Create top level concern</div> */}
      {concerns.map((concern, index) => (
        <div
          key={`concern-${index}`}
          className="card w-full flex flex-col gap-8"
        >
          <div className="w-full flex flex-row justify-between items-start">
            <h1 className="font-bold text-sm uppercase text-wrap break-words w-11/12">
              {concern}
            </h1>
            <div className="text-xs text-gray-500 flex items-center w-1/12">
              123
            </div>
          </div>

          <div className="flex flex-row items-center justify-between gap-2 mt-auto">
            <Button size="sm" className="w-1/2 justify-start">
              <Hexagon className="w-4 h-4" /> Mint
            </Button>
            <Button variant="outline" size="icon" className="">
              <Share className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
