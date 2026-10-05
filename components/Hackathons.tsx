import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { LuAward, LuMapPin } from "react-icons/lu";
import { hackathons } from "@/data/portfolio";
import Section from "./Section";
import AccordionRow from "./Accordion";
import RowHeader from "./RowHeader";
import TechChip from "./TechChip";
import LiveBadge from "./LiveBadge";

export default function Hackathons() {
  return (
    <Section id="hackathons" title="AI Hackathons">
      {hackathons.map((h) => (
        <AccordionRow
          key={h.name}
          header={
            <RowHeader
              logo={h.logo}
              logoStyle={h.logoStyle}
              name={h.name}
              subtitle={h.organizer}
              dates={`${h.start} – ${h.end}`}
              place={h.mode}
            />
          }
        >
          <div className="rounded-xl border border-line bg-panel p-5 sm:ml-[72px] sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs text-dim">Project built</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {h.project.slug ? (
                    <Link href={`/projects/${h.project.slug}`} className="hover:text-tungsten">
                      {h.project.name}
                    </Link>
                  ) : (
                    h.project.name
                  )}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                {h.project.github && (
                  <a href={h.project.github} target="_blank" rel="noreferrer" aria-label="Project on GitHub" className="text-dim hover:text-ink">
                    <FaGithub className="size-5" />
                  </a>
                )}
                {h.project.live && (
                  <a href={h.project.live} target="_blank" rel="noreferrer" aria-label="Open live demo">
                    <LiveBadge />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-4 text-xs text-dim">Problem solved</p>
            <p className="mt-1 max-w-[72ch] text-sm leading-relaxed text-ink/90 sm:text-base">{h.project.problem}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {h.project.stack.map((t) => (
                <TechChip key={t} name={t} size="sm" />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-5 text-sm">
              <a
                href={h.certificate}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-3.5 py-1.5 font-semibold text-black transition-colors hover:bg-tungsten"
              >
                <LuAward className="size-4" />
                View certificate
              </a>
              <span className="inline-flex items-center gap-1.5 text-dim">
                <LuMapPin className="size-4" />
                {h.mode}
              </span>
            </div>
          </div>
        </AccordionRow>
      ))}
    </Section>
  );
}
