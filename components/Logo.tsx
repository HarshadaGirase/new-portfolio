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
export default function Logo({ src, name, size = 56 }: { src: string; name: string; size?: number }) {
  return (
    <div
      className="shrink-0 overflow-hidden rounded-full bg-chip ring-1 ring-line"
      style={{ width: size, height: size }}
    >
      <Img
        src={src}
        alt={`${name} logo`}
        className="size-full object-cover"
        fallback={
          <span className="grid size-full place-items-center font-pixel text-lg text-tungsten">
            {initials(name)}
          </span>
        }
      />
    </div>
  );
}
