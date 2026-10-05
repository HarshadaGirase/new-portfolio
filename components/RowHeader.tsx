import Logo from "./Logo";

/** Logo · name + badge · subtitle on the left, dates + place on the right. */
export default function RowHeader({
  logo,
  name,
  badge,
  subtitle,
  dates,
  place,
}: {
  logo: string;
  name: string;
  badge?: React.ReactNode;
  subtitle: string;
  dates: string;
  place: string;
}) {
  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <Logo src={logo} name={name} />
      <div className="flex min-w-0 flex-1 flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-base font-semibold sm:text-lg">{name}</span>
            {badge}
          </div>
          <p className="text-sm text-dim sm:text-base">{subtitle}</p>
        </div>
        <div className="shrink-0 text-sm md:text-right">
          <p className="font-semibold tabular-nums">{dates}</p>
          <p className="text-xs text-dim sm:text-sm">{place}</p>
        </div>
      </div>
    </div>
  );
}

export function Badge({ children, tone = "muted" }: { children: React.ReactNode; tone?: "muted" | "warm" }) {
  return (
    <span
      className={`rounded-md border px-2 py-0.5 text-xs ${
        tone === "warm" ? "border-tungsten/40 bg-tungsten-soft text-tungsten" : "border-line bg-chip text-dim"
      }`}
    >
      {children}
    </span>
  );
}
