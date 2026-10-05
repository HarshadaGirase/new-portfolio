import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { projects, type Project } from "@/data/portfolio";
import { techIcon } from "@/lib/tech-icons";
import Section from "./Section";
import ProjectVisual from "./ProjectVisual";
import LiveBadge from "./LiveBadge";

function StackIcons({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-2.5">
      {stack.slice(0, 6).map((t) => {
        const { icon: Icon, color } = techIcon(t);
        return (
          <li key={t} title={t}>
            <Icon aria-label={t} className="size-5" style={{ color }} />
          </li>
        );
      })}
      {stack.length > 6 && <li className="text-xs text-dim">+{stack.length - 6}</li>}
    </ul>
  );
}

function ProjectCard({ p, wide }: { p: Project; wide: boolean }) {
  return (
    <article
      className={`group relative flex flex-col gap-5 p-5 sm:p-8 ${
        wide ? "md:grid md:grid-cols-[1.15fr_1fr] md:items-center md:gap-10" : ""
      }`}
    >
      <ProjectVisual
        src={p.image}
        name={p.name}
        className="aspect-[16/9] transition-transform duration-500 group-hover:scale-[1.01]"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold sm:text-2xl">
          <Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0">
            {p.name}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-dim sm:text-base">{p.summary}</p>
        <div className="mt-1 flex items-center justify-between gap-4">
          <StackIcons stack={p.stack} />
          <div className="relative z-10 flex items-center gap-3">
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`} className="text-dim hover:text-ink">
                <FaGithub className="size-5" />
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} live demo`}>
                <LiveBadge />
              </a>
            )}
          </div>
        </div>
        <span className="text-sm text-tungsten opacity-80 transition-opacity group-hover:opacity-100">
          Read the case study
        </span>
      </div>
    </article>
  );
}

export default function Projects() {
  const wide = projects.length === 1;
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.slug} className={`border-b border-line md:odd:border-r ${wide ? "md:col-span-2 md:border-r-0" : ""}`}>
            <ProjectCard p={p} wide={wide} />
          </div>
        ))}
      </div>
    </Section>
  );
}
