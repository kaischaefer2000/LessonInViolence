import type { ReactNode } from "react";
import styles from "./InfoBox.module.css";

export type InfoBoxVariant = "default" | "aboutUs" | "media" | "organizer";

/** Black box that overlaps the bottom of the header picture. */
export default function InfoBox({
  variant = "default",
  id,
  children,
}: {
  variant?: InfoBoxVariant;
  id?: string;
  children: ReactNode;
}) {
  const variantClass = variant === "default" ? "" : ` ${styles[variant]}`;
  return (
    <section id={id}>
      <div className="container-fluid">
        <div id={styles.infoBox} className={`row${variantClass}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
