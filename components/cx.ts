/** Joins CSS class names, skipping empty / false ones. */
export const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(" ");
