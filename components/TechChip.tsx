import { techIcon } from "@/lib/tech-icons";

export default function TechChip({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  const { icon: Icon, color } = techIcon(name);
  const pad = size === "sm" ? "px-2.5 py-1 text-xs" : "px-3.5 py-2 text-sm";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg border border-line bg-chip text-ink transition-colors hover:border-[#3a3835] ${pad}`}
    >
      <Icon aria-hidden className="size-4 shrink-0" style={{ color }} />
      {name}
    </span>
  );
}
