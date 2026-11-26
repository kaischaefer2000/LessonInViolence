"use client";

import { useEffect, useState } from "react";
import { startOfToday } from "@/data/showDates";

/**
 * Static export: dates are calculated at build time. This returns null during
 * the server render and hydration (so the HTML matches), then today's date in
 * the visitor's browser – shows switch to "over" without a new build.
 */
export function useToday(): Date | null {
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(startOfToday());
  }, []);

  return today;
}
