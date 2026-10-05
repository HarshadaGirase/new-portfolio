"use client";

import { useId, useState } from "react";
import { LuChevronDown } from "react-icons/lu";

/** A full-width row whose body expands below the header when clicked. */
export default function AccordionRow({
  header,
  children,
  defaultOpen = false,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="group flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-panel sm:px-8"
      >
        <div className="min-w-0 flex-1">{header}</div>
        <LuChevronDown
          aria-hidden
          className={`size-5 shrink-0 text-dim transition-transform duration-300 group-hover:text-ink ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={id}
        className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-6 sm:px-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
