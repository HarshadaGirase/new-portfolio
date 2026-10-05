export default function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-live/10 px-2 py-0.5 text-xs text-live ring-1 ring-live/30">
      <span className="relative flex size-1.5">
        <span className="ping-dot absolute inset-0 rounded-full bg-live" />
        <span className="relative size-1.5 rounded-full bg-live" />
      </span>
      Live
    </span>
  );
}
