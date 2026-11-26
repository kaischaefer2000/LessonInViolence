import { Fragment } from "react";
import Header from "./Header";
import styles from "./Hero.module.css";
import { cx } from "./cx";

type TitleStyle = "default" | "padded" | "paddedHiddenOnMobile" | "hidden";

const titleClass: Record<TitleStyle, string | undefined> = {
  default: undefined,
  padded: styles.padded,
  paddedHiddenOnMobile: `${styles.padded} ${styles.hiddenOnMobile}`,
  hidden: styles.hidden,
};

/**
 * Header picture with the navigation and the vertical page title
 * (e.g. "HOME" → H O M E, one letter per line). A space in `title`
 * creates an empty line.
 */
export default function Hero({
  title,
  background,
  backgroundClassName,
  titleStyle = "default",
}: {
  title: string;
  /** header picture (URL) */
  background?: string;
  /** alternatively a CSS class that sets the header picture */
  backgroundClassName?: string;
  titleStyle?: TitleStyle;
}) {
  return (
    <div
      className={cx(styles.heroBackground, backgroundClassName)}
      style={background ? { backgroundImage: `url("${background}")` } : undefined}
    >
      <Header />
      <section>
        <div className="container-fluid">
          <div className={`row ${styles.hero}`}>
            <div className="col">
              <h1 className={titleClass[titleStyle]}>
                {[...title].map((letter, i) => (
                  <Fragment key={i}>
                    {i > 0 && <br />}
                    {letter === " " ? "" : letter}
                  </Fragment>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
