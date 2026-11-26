/*
 * Date helpers for the shows – kept free of image imports so client
 * components can use them without bundling all flyers.
 */

/** Date of a show ("DD.MM.YYYY") as Date object (local time, start of the day). */
export function showDate(show: { date: string }): Date {
  const [day, month, year] = show.date.split(".").map(Number);
  return new Date(year, month - 1, day);
}

export function startOfToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

/** A show is over from the day after the concert on. */
export function isOver(show: { date: string }, today = startOfToday()): boolean {
  return showDate(show) < today;
}

/** The next upcoming show – or the latest show if there is none planned. Expects newest first. */
export function pickNextShow<T extends { date: string }>(showsNewestFirst: T[], today = startOfToday()): T | undefined {
  const upcoming = showsNewestFirst.filter((show) => !isOver(show, today));
  return upcoming.length > 0 ? upcoming[upcoming.length - 1] : showsNewestFirst[0];
}
