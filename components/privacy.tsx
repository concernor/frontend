import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const PrivacyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="hover:underline hover:cursor-pointer">
        privacy
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription className="py-4 text-md">
            <span>
              We don&apos;t collect any data, and we have absolutely zero
              interest in changing that. Whether you&apos;re a bot or a human,
              where you&apos;re from, or what you do - we simply don&apos;t
              care. And let&apos;s be honest, we don&apos;t need your data to
              improve our UI/UX because we already nailed it.
            </span>
            <span>
              Unlike{" "}
              <a
                className="underline underline-offset-4"
                href="https://x.com/scottshapiro/status/1863691538661883925"
                target="_blank"
              >
                some others
              </a>{" "}
              we actively encourage you to use a VPN and protect your privacy,
              so you can freely share your concerns without worry.
            </span>
            <br />
            <br />

            <span>
              We got plenty of concerns, but your data ain&apos;t one of them.
            </span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
