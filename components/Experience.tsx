import { experience } from "@/data/portfolio";
import Section from "./Section";
import AccordionRow from "./Accordion";
import RowHeader, { Badge } from "./RowHeader";
import TechChip from "./TechChip";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div>
        {experience.map((job, i) => (
          <AccordionRow
            key={job.company}
            defaultOpen={i === 0}
            header={
              <RowHeader
                logo={job.logo}
                logoStyle={job.logoStyle}
                name={job.company}
                badge={<Badge>{job.type}</Badge>}
                subtitle={job.role}
                dates={`${job.start} – ${job.end}`}
                place={job.location}
              />
            }
          >
            <ul className="space-y-2 text-sm leading-relaxed text-ink/90 sm:pl-[72px] sm:text-base">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="mt-[0.6em] size-1 shrink-0 rounded-full bg-mute" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2 sm:pl-[72px]">
              {job.stack.map((t) => (
                <TechChip key={t} name={t} size="sm" />
              ))}
            </div>
          </AccordionRow>
        ))}
      </div>
    </Section>
  );
}
