"use client";

import { useEffect, useState } from "react";

// Static export: the build-time year is baked into the HTML,
// then corrected in the browser so it never goes stale between deploys.
export default function CopyrightYear() {
  // same value on server and client during hydration (inlined at build time)
  const [year, setYear] = useState(Number(process.env.BUILD_YEAR));

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
