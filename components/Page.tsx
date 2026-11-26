import type { ReactNode } from "react";
import Footer from "./Footer";
import { cx } from "./cx";

/**
 * Page wrapper. The original home page was built with Bootstrap 5, all other
 * pages with Bootstrap 4 – the "bs4"/"bs5" class selects the matching grid and
 * typography defaults from app/globals.css.
 */
export default function Page({
  bootstrap = 4,
  className,
  children,
}: {
  bootstrap?: 4 | 5;
  /** page specific class on the wrapper */
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx(bootstrap === 5 ? "bs5" : "bs4", className)}>
      {/* main landmark for screen readers – no styling of its own */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
