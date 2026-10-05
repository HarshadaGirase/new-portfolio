import { techStack } from "@/data/portfolio";
import Section from "./Section";
import TechChip from "./TechChip";

export default function TechStack() {
  return (
    <Section id="stack" title="Tech Stack">
      <div className="space-y-9 border-b border-line px-5 py-8 sm:px-8">
        {techStack.map(({ group, items }) => (
          <div key={group}>
            <h3 className="mb-4 flex items-center gap-4 text-sm text-dim">
              <span className="shrink-0 font-medium">{group}</span>
              <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
            </h3>
            <ul className="flex flex-wrap gap-3">
              {items.map((t) => (
                <li key={t}>
                  <TechChip name={t} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
