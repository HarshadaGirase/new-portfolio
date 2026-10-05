import { education } from "@/data/portfolio";
import Section from "./Section";
import RowHeader, { Badge } from "./RowHeader";

export default function Education() {
  return (
    <Section id="education" title="Education">
      {education.map((e) => (
        <div key={e.college} className="border-b border-line px-5 py-5 sm:px-8">
          <RowHeader
            logo={e.logo}
            name={e.college}
            badge={<Badge>{e.degree.includes("Master") ? "MCA" : "Degree"}</Badge>}
            subtitle={e.degree}
            dates={`${e.start} – ${e.end}`}
            place={e.location}
          />
        </div>
      ))}
    </Section>
  );
}
