import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const TermsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="hover:underline hover:cursor-pointer">
        <small>!</small>terms
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription className="py-4 text-sm flex flex-col gap-2">
            <span>
              Concernor is a personal hobby project, created purely for fun and
              experimentation. It&apos;s important to understand that this is a
              meme project, essentially a joke, and should not be taken
              seriously or used for any practical purpose.
            </span>
            <span>
              As the creator, I&apos;m using this project to explore and learn
              about various technologies I&apos;ve been interested in.
              There&apos;s no roadmap, no planned improvements, and no intention
              to make it useful or valuable. This project has <b>zero</b>{" "}
              monetary value, and you should not believe anyone claiming
              otherwise. tldr; DO NOT BUY IT!
            </span>
            <span>
              While I&apos;m open to hearing your concerns, feedback, and
              suggestions, please understand that I may or may not implement
              them based on my personal interests, available time and current
              skillset. This project started primarily for my own learning,
              enjoyment and bring fun to the wider community.
            </span>
            <span>
              I want to emphasize that I bear no responsibility for any actions
              taken by users of this project. As an adult (hopefully),
              you&apos;re responsible for your own decisions this is why we are
              here... Always do your own research (DYOR) and remember that this
              is meant to be fun, not a serious investment or utility.
            </span>
            <span>
              With that said the project may change and evolve with time, in any
              way depending on how the meme evolves. There are no guarantees of
              consistency or continuity. If you choose to participate, do so
              with the understanding that this is a whimsical, experimental
              project with no inherent value or purpose beyond exploration and
              amusement.
            </span>
            <span>
              Enjoy Concernor for what it is - a meme, a joke, and a playground
              for technological tinkering. Have fun, but always remember: your
              investments are your responsibility, and they held no intrinsic
              value from the start.
            </span>
            <span>Now lets get concerned together!</span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
