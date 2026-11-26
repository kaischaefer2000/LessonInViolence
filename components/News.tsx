import type { CSSProperties, ReactNode } from "react";
import type { StaticImageData } from "next/image";
import Img from "./Img";
import styles from "./News.module.css";
import { cx } from "./cx";

export type NewsItem = {
  /** "DD.MM.YYYY" */
  date: string;
  /** text of the news */
  text: ReactNode;
  /** picture(s) next to the text */
  aside?: ReactNode;
  /** push the picture to the right edge */
  spaceBetween?: boolean;
  /** layout of the oldest posts: text without picture column */
  layout?: "default" | "textOnly" | "oldest";
};

/** One news box. `dark` alternates the two box styles. */
export function NewsBox({ item, dark }: { item: NewsItem; dark: boolean }) {
  const box = `${dark ? styles.dark : styles.light} ${styles.contentBox}`;
  const date = (
    <p className={styles.postTime}>
      <i>{item.date}</i>
    </p>
  );

  if (item.layout === "oldest") {
    return (
      <div className={box}>
        {date}
        <p>{item.text}</p>
      </div>
    );
  }

  return (
    <div className={box}>
      <div className={styles.dateRow}>{date}</div>
      {item.layout === "textOnly" ? (
        <p>{item.text}</p>
      ) : (
        <div className={cx(styles.contentDevided, item.spaceBetween && styles.spaceBetween)}>
          <p>{item.text}</p>
          {item.aside}
        </div>
      )}
    </div>
  );
}

/** Picture that takes a fixed share of the news box. */
export function NewsPicture({
  src,
  alt,
  width,
  mobileMinWidth,
  intrinsic,
}: {
  src: StaticImageData;
  alt: string;
  /** e.g. "40%" */
  width: string;
  /** minimum width on small screens (below 786px) */
  mobileMinWidth?: string;
  /** rendered size of the former AVIF version if it differs from the original */
  intrinsic?: { width: number; height: number };
}) {
  const style = { "--width": width, "--mobile-min-width": mobileMinWidth } as CSSProperties;
  return (
    <picture className={styles.sized} style={style}>
      <Img src={src} alt={alt} sizes="(max-width: 786px) 90vw, 40vw" {...intrinsic} />
    </picture>
  );
}

/** Album cover / flyer picture. */
export function NewsAlbumCover({
  src,
  alt,
  imgStyle = "plain",
  intrinsic,
}: {
  src: StaticImageData;
  alt: string;
  /** "flyer": fixed width of 20vw */
  imgStyle?: "plain" | "albumCover" | "flyer";
  intrinsic?: { width: number; height: number };
}) {
  const imgClass = {
    plain: undefined,
    albumCover: styles.albumCover,
    flyer: `${styles.albumCover} ${styles.flyerImg}`,
  }[imgStyle];
  return (
    <picture className={styles.albumCover}>
      <Img src={src} alt={alt} className={imgClass} sizes="(max-width: 786px) 90vw, 500px" {...intrinsic} />
    </picture>
  );
}

/** Column of example pictures (casting call). */
export function NewsPictureColumn({ pictures }: { pictures: { src: StaticImageData; alt: string }[] }) {
  return (
    <div className={styles.castingPics}>
      {pictures.map((picture, i) => (
        <picture key={i} className={styles.castingPic}>
          <Img src={picture.src} alt={picture.alt} className={styles.albumCover} sizes="(max-width: 760px) 250px, 20vw" />
        </picture>
      ))}
    </div>
  );
}
