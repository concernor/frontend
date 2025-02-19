export default function Privacy() {
  return (
    <div className="w-full flex flex-col gap-4 text-muted-foreground">
      <h1 className="text-lg font-semibold uppercase text-white">
        Privacy Policy
      </h1>
      <p>
        We don&apos;t collect any data, and we have absolutely zero interest in
        changing that. Whether you&apos;re a bot or a human, where you&apos;re
        from, or what you do - we simply don&apos;t care. And let&apos;s be
        honest, we don&apos;t need your data to improve our UI/UX because we
        already nailed it.
      </p>
      <p>
        Unlike{" "}
        <a
          className="underline underline-offset-4 text-white"
          href="https://x.com/scottshapiro/status/1863691538661883925"
          target="_blank"
        >
          some others
        </a>{" "}
        we actively encourage you to use a VPN and protect your privacy, so you
        can freely share your concerns without worry.
      </p>

      <p>We got plenty of concerns, but your data ain&apos;t one of them.</p>
    </div>
  );
}
