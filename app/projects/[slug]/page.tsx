import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaGithub } from "react-icons/fa6";
import { LuHouse, LuUndo2 } from "react-icons/lu";
import { profile, projects } from "@/data/portfolio";
import Frame from "@/components/Frame";
import TechChip from "@/components/TechChip";
import ProjectVisual from "@/components/ProjectVisual";
import LiveBadge from "@/components/LiveBadge";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.name} — ${profile.name}`, description: p.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null;

  return (
    <Frame>
      <article className="mx-auto max-w-[920px] px-5 pt-10 pb-24 sm:px-10">
        <nav className="inline-flex items-center gap-1 rounded-full bg-chip p-1 ring-1 ring-line">
          <Link href="/" aria-label="Home" className="grid size-9 place-items-center rounded-full hover:bg-line">
            <LuHouse className="size-4" />
          </Link>
          <Link href="/#projects" aria-label="Back to projects" className="grid size-9 place-items-center rounded-full hover:bg-line">
            <LuUndo2 className="size-4" />
          </Link>
        </nav>

        <header className="rise mt-12 flex items-start justify-between gap-6">
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">{p.name}</h1>
          <div className="flex shrink-0 items-center gap-3 pt-2">
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" aria-label="Open live demo">
                <LiveBadge />
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Source on GitHub"
                className="grid size-10 place-items-center rounded-full ring-1 ring-line hover:ring-ink"
              >
                <FaGithub className="size-5" />
              </a>
            )}
          </div>
        </header>

        <ul className="rise mt-8 flex flex-wrap gap-2.5 [animation-delay:0.1s]">
          {p.stack.map((t) => (
            <li key={t}>
              <TechChip name={t} />
            </li>
          ))}
        </ul>

        <ProjectVisual src={p.image} name={p.name} className="rise mt-10 aspect-[16/9] [animation-delay:0.2s]" />

        <div className="mt-12 max-w-[68ch] space-y-6 text-lg leading-relaxed text-ink/75">
          {p.description.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>

        {p.features.length > 0 && (
          <section className="mt-12 max-w-[72ch]">
            <h2 className="text-xl font-semibold">Features</h2>
            <ul className="mt-5 space-y-3 text-ink/85">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span aria-hidden className="mt-[0.65em] size-1.5 shrink-0 bg-tungsten" />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-16 flex justify-end border-t border-line pt-8">
          {next ? (
            <Link href={`/projects/${next.slug}`} className="text-right">
              <span className="text-sm text-dim">Next</span>
              <span className="block font-display text-3xl hover:text-tungsten">{next.name}</span>
            </Link>
          ) : (
            <Link href="/#projects" className="text-right">
              <span className="text-sm text-dim">Back to</span>
              <span className="block font-display text-3xl hover:text-tungsten">All projects</span>
            </Link>
          )}
        </div>
      </article>
    </Frame>
  );
}
