import type { LogoStyle } from "@/data/portfolio";
import Img from "./Img";

function initials(name: string) {
  return name
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/** Round logo; shows the organisation's initials until a real logo is added. */
export default function Logo({
  src,
  name,
  size = 52,
  logoStyle,
}: {
  src: string;
  name: string;
  size?: number;
  logoStyle?: LogoStyle;
}) {
  const cropLeft = logoStyle?.crop === "left";
  return (
    <div
      className="shrink-0 overflow-hidden rounded-full bg-chip ring-1 ring-line"
      style={{ width: size, height: size, background: logoStyle?.bg }}
    >
      <Img
        src={src}
        alt={`${name} logo`}
        className={
          cropLeft
            ? "h-full w-auto max-w-none object-cover object-left p-1.5"
            : "size-full object-cover"
        }
        style={
          logoStyle?.zoom
            ? { transform: `scale(${logoStyle.zoom})`, transformOrigin: logoStyle.focus ?? "center" }
            : undefined
        }
        fallback={
          <span className="grid size-full place-items-center font-pixel text-lg text-tungsten">
            {initials(name)}
          </span>
        }
      />
    </div>
  );
}
