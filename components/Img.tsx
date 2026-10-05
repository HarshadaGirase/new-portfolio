"use client";

import { useEffect, useRef, useState } from "react";

/** <img> that swaps to a fallback when the file isn't there yet. */
export default function Img({
  src,
  alt,
  className,
  style,
  eager = false,
  fallback,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  /** Load immediately (above-the-fold images); everything else loads lazily. */
  eager?: boolean;
  fallback: React.ReactNode;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [state, setState] = useState<"loading" | "ok" | "failed">("loading");

  // The error can fire before hydration, so also check the element on mount.
  useEffect(() => {
    const img = ref.current;
    if (img?.complete) setState(img.naturalWidth > 0 ? "ok" : "failed");
  }, []);

  if (state === "failed") return <>{fallback}</>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      style={style}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`${className ?? ""} ${state === "ok" ? "" : "invisible"}`}
      onLoad={() => setState("ok")}
      onError={() => setState("failed")}
    />
  );
}
