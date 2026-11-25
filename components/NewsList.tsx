"use client";

import { Fragment, useState, type ReactNode } from "react";
import styles from "./News.module.css";

const STEP = 3;

/**
 * Shows the first three news boxes and reveals three more with every click
 * on "Show more...". All boxes are in the HTML (for search engines), the
 * hidden ones just aren't displayed.
 */
export default function NewsList({ boxes }: { boxes: ReactNode[] }) {
  const [visible, setVisible] = useState(STEP);

  return (
    <>
      {boxes.map((box, i) => (
        <Fragment key={i}>
          {i === visible && (
            <button className={styles.showMoreBtn} onClick={() => setVisible((v) => v + STEP)}>
              Show more...
            </button>
          )}
          <div className={i >= visible ? styles.hiddenNews : undefined}>{box}</div>
        </Fragment>
      ))}
    </>
  );
}
