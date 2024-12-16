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
        terms
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription className="py-4 text-md">
            This is a hobby project of mine, a joke, a memecoin. I&apos;m not
            responsible for any of your actions, and you should not use this
            project for any purpose. the reason of this projects existence is to
            create an environment for me to experiment with some of the
            technologies that I was eyeing on for a while. I will do what I
            want, when I want, how I want. meaning I am the benovelent dictator
            of this project. Devs cannot do anything the reason your bags are
            worth 0 is because they always were.
            <br />
            <br />
            With that out of the way, I will listen to your concerns, feedback,
            and suggestions. If they align with my interests and skillset, I may
            consider implementing them. But no promises.
            <br />
            <br />
            I would like to make it clear that there is no roadmap, no planned
            steps on how to proceed, no plans to improve the project, no plans
            to make it useful, and no plans to make it better, this project has
            0 value and do not believe anyone claiming that its worth more. You
            are an adult (hopefully), your bags are your concern, DYOR and have
            fun.
            <br />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
