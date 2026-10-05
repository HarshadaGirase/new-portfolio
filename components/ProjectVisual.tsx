import Img from "./Img";

/** Project screenshot, or a quiet waveform plate until one is added. */
export default function ProjectVisual({ src, name, className = "" }: { src: string; name: string; className?: string }) {
  const bars = Array.from({ length: 48 }, (_, i) =>
    Math.round(18 + 62 * Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.17))),
  );
  return (
    <div className={`relative overflow-hidden rounded-xl bg-panel ring-1 ring-line ${className}`}>
      <Img
        src={src}
        alt={`${name} screenshot`}
        className="size-full object-cover object-top"
        fallback={
          <div className="flex size-full flex-col items-center justify-center gap-5 bg-[radial-gradient(ellipse_at_center,#1d150b_0%,#0d0c0b_70%)]">
            <div aria-hidden className="flex h-24 items-center gap-[3px]">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-full bg-tungsten/70"
                  style={{ height: `${h}%`, opacity: 0.35 + (h / 100) * 0.65 }}
                />
              ))}
            </div>
            <span className="font-pixel text-xl text-ink/80">{name}</span>
          </div>
        }
      />
    </div>
  );
}
