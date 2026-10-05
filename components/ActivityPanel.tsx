"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { LuChevronDown } from "react-icons/lu";
import type { Day, GithubStats } from "@/lib/github";

const LEVEL = ["#1a1815", "#4a3110", "#7c5213", "#bd7c1d", "#f2a93b"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Group days into Sunday-first week columns, padding the first week. */
function toWeeks(days: Day[]): (Day | null)[][] {
  if (!days.length) return [];
  const first = new Date(days[0].date + "T00:00:00").getDay();
  const cells: (Day | null)[] = [...Array(first).fill(null), ...days];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

function label(d: Day) {
  const date = new Date(d.date + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return `${d.count} contribution${d.count === 1 ? "" : "s"} on ${date}`;
}

function Grid({ weeks, cell, animate }: { weeks: (Day | null)[][]; cell: number; animate?: boolean }) {
  return (
    <div className="flex gap-[3px]">
      {weeks.map((week, w) => (
        <div key={w} className="flex flex-col gap-[3px]">
          {week.map((d, i) =>
            d ? (
              <span
                key={d.date}
                title={label(d)}
                className={`rounded-[2px] ${animate ? "cell-in" : ""}`}
                style={{
                  width: cell,
                  height: cell,
                  background: LEVEL[d.level],
                  animationDelay: animate ? `${w * 12}ms` : undefined,
                }}
              />
            ) : (
              <span key={`pad-${i}`} style={{ width: cell, height: cell }} />
            ),
          )}
        </div>
      ))}
    </div>
  );
}

export default function ActivityPanel({ stats, user }: { stats: GithubStats; user: string }) {
  const [open, setOpen] = useState(false);
  const weeks = toWeeks(stats.days);
  const recent = weeks.slice(-14);

  // Month labels: mark the first week column that starts in a new month.
  const monthMarks = weeks.map((week, i) => {
    const d = week.find(Boolean);
    if (!d) return "";
    const m = new Date(d.date + "T00:00:00").getMonth();
    const prev = weeks[i - 1]?.find(Boolean);
    const pm = prev ? new Date(prev.date + "T00:00:00").getMonth() : -1;
    return m !== pm ? MONTHS[m] : "";
  });

  return (
    <div className="border-b border-line px-5 py-7 sm:px-8">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <a
          href={`https://github.com/${user}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-chip ring-1 ring-line">
            <FaGithub className="size-6" />
          </span>
          <span className="text-base sm:text-lg">
            <span className="font-semibold">GitHub</span>{" "}
            <span className="text-tungsten tabular-nums">{stats.total.toLocaleString()}</span>{" "}
            <span className="text-dim">contributions this year</span>
          </span>
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden sm:block" aria-hidden>
            <Grid weeks={recent} cell={11} />
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="activity-details"
            className="inline-flex items-center gap-1.5 rounded-md bg-ink px-4 py-1.5 text-sm font-semibold text-black transition-colors hover:bg-tungsten"
          >
            {open ? "Less" : "Details"}
            <LuChevronDown className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>

      <div
        id="activity-details"
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-10">
            <dl className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-dim">
              {stats.prs && (
                <div className="flex flex-wrap items-center gap-2">
                  <dt className="sr-only">Open-source pull requests</dt>
                  <dd>
                    <span className="font-semibold text-ink">{stats.prs.total}</span> open-source PRs
                    {stats.prs.orgs.length > 0 && " across"}
                  </dd>
                  {stats.prs.orgs.map((o) => (
                    <a
                      key={o.owner}
                      href={`https://github.com/${o.owner}`}
                      target="_blank"
                      rel="noreferrer"
                      title={o.owner}
                      className="inline-flex items-center gap-1.5 rounded-md border border-line px-2 py-1 text-ink hover:border-tungsten"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://github.com/${o.owner}.png?size=40`}
                        alt=""
                        className="size-4 rounded-full"
                      />
                      {o.count}
                    </a>
                  ))}
                </div>
              )}
              {stats.repos !== null && (
                <div>
                  <dt className="inline">Public repos </dt>
                  <dd className="inline font-semibold text-ink">{stats.repos}</dd>
                </div>
              )}
              {stats.followers !== null && (
                <div>
                  <dt className="inline">Followers </dt>
                  <dd className="inline font-semibold text-ink">{stats.followers}</dd>
                </div>
              )}
            </dl>

            {weeks.length > 0 ? (
              <div className="thin-scroll mt-6 overflow-x-auto pb-3">
                <div className="w-max">
                  <div className="mb-2 flex gap-[3px] text-[11px] text-dim">
                    {monthMarks.map((m, i) => (
                      <span key={i} className="w-[12px] overflow-visible whitespace-nowrap">
                        {m}
                      </span>
                    ))}
                  </div>
                  {open && <Grid weeks={weeks} cell={12} animate />}
                  {!open && <Grid weeks={weeks} cell={12} />}
                  <div className="mt-3 flex items-center justify-between gap-6 text-[11px] text-dim">
                    <span>{stats.total.toLocaleString()} contributions in the last year</span>
                    <span className="flex items-center gap-1">
                      Less
                      {LEVEL.map((c) => (
                        <span key={c} className="size-[10px] rounded-[2px]" style={{ background: c }} />
                      ))}
                      More
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="mt-6 text-sm text-dim">
                Contribution data couldn&apos;t be loaded right now. See the full graph on{" "}
                <a className="text-tungsten underline" href={`https://github.com/${user}`}>
                  GitHub
                </a>
                .
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
