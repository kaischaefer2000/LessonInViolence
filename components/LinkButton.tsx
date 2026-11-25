"use client";

import type { ReactNode } from "react";

/** A <button> that navigates to another page (keeps the look of the former buttons). */
export default function LinkButton({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <button className={className} onClick={() => (window.location.href = href)}>
      {children}
    </button>
  );
}
