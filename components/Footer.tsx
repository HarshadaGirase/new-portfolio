import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { LuMail } from "react-icons/lu";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const links = [
    { label: "GitHub", href: profile.links.github, icon: FaGithub },
    { label: "X", href: profile.links.x, icon: FaXTwitter },
    { label: "LinkedIn", href: profile.links.linkedin, icon: FaLinkedinIn },
    { label: "LeetCode", href: profile.links.leetcode, icon: SiLeetcode },
    ...(profile.links.email
      ? [{ label: "Email", href: `mailto:${profile.links.email}`, icon: LuMail }]
      : []),
  ];
  return (
    <footer className="px-5 pt-14 pb-24 sm:px-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm text-dim">
            ~/harshada <span className="text-live">on</span> <span className="text-tungsten">main</span>
          </p>
          <p className="mt-1 font-display text-6xl leading-none tracking-tight sm:text-8xl">
            Harshada<span className="text-tungsten">.</span>
            <span className="text-mute">dev</span>
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <span className="inline-flex w-fit items-center gap-2 rounded-md border border-live/30 bg-live/10 px-3 py-1.5 text-sm text-live">
            <span className="size-1.5 rounded-full bg-live" />
            open_to_build
          </span>
          <p className="text-dim md:text-right">
            {profile.title}
            <br />
            Full-stack and voice AI
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6 text-sm text-dim md:flex-row md:items-center md:justify-between">
        <p>// © {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with Next.js and Tailwind</p>
      </div>

      <ul className="mt-8 flex flex-wrap gap-3">
        {links.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-3.5 py-2 text-sm transition-colors hover:border-tungsten hover:text-tungsten"
            >
              <Icon className="size-4" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
