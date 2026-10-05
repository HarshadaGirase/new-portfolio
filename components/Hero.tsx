import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { LuFileText, LuMail } from "react-icons/lu";
import { profile } from "@/data/portfolio";
import Img from "./Img";

const socials = [
  { label: "GitHub", href: profile.links.github, icon: FaGithub },
  { label: "X", href: profile.links.x, icon: FaXTwitter },
  { label: "LeetCode", href: profile.links.leetcode, icon: SiLeetcode },
  { label: "LinkedIn", href: profile.links.linkedin, icon: FaLinkedinIn },
  {
    label: "Email",
    href: profile.links.email ? `mailto:${profile.links.email}` : undefined,
    icon: LuMail,
  },
];

function BannerFallback() {
  // Shown until /public/images/banner.jpg exists: a dim tungsten light leak.
  return (
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_40%,#5a3a12_0%,#1c140a_38%,#000_75%)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_90%,#2a1a08_0%,transparent_50%)]" />
    </div>
  );
}

export default function Hero() {
  return (
    <header className="relative">
      {/* Banner */}
      <div className="relative h-52 overflow-hidden sm:h-72 lg:h-[340px]">
        <div className="banner-in absolute inset-0">
          <BannerFallback />
          <Img
            src={profile.banner}
            alt=""
            className="absolute inset-0 size-full object-cover"
            fallback={null}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        <p className="rise absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display text-2xl tracking-wide text-ink/90 [animation-delay:1.1s] sm:text-4xl">
          {profile.bannerQuote}
        </p>
        {/* Letterbox bars that pull open on load */}
        <div aria-hidden className="letterbox absolute inset-x-0 top-0 h-1/2 bg-black" />
        <div aria-hidden className="letterbox-b absolute inset-x-0 bottom-0 h-1/2 bg-black" />
      </div>

      {/* Profile */}
      <div className="relative px-5 pb-8 sm:px-10">
        <div className="rise -mt-16 size-32 overflow-hidden rounded-full border-4 border-black bg-chip [animation-delay:1s] sm:-mt-24 sm:size-48">
          <Img
            src={profile.photo}
            alt={profile.name}
            className="size-full object-cover"
            fallback={
              <span className="grid size-full place-items-center font-display text-5xl italic text-tungsten sm:text-7xl">
                HG
              </span>
            }
          />
        </div>

        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="rise [animation-delay:1.15s]">
            <h1 className="font-display text-5xl italic leading-none tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 flex flex-wrap items-center gap-x-2 text-sm text-dim sm:text-base">
              {profile.tagline.map((t, i) => (
                <span key={t} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="size-1 bg-mute" />}
                  {t}
                </span>
              ))}
            </p>
          </div>

          <div className="rise flex flex-col gap-3 [animation-delay:1.3s] md:items-end">
            <ul className="flex flex-wrap gap-2.5">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href ?? "#"}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    title={href ? label : `${label} coming soon`}
                    className="grid size-11 place-items-center rounded-full border border-line bg-chip text-ink transition-colors hover:border-tungsten hover:text-tungsten"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2.5">
              {profile.openToWork && (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="glow inline-flex items-center gap-2 rounded-full bg-[#1a1208] px-4 py-2 text-sm text-ink"
                >
                  <span className="relative flex size-2">
                    <span className="ping-dot absolute inset-0 rounded-full bg-tungsten" />
                    <span className="relative size-2 rounded-full bg-tungsten" />
                  </span>
                  Open to opportunities
                </a>
              )}
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-ink"
              >
                <LuFileText className="size-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
