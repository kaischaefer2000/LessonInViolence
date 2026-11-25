"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { StaticImageData } from "next/image";
import Img from "./Img";
import { NextIcon, PrevIcon } from "./Lightbox";
import fullScreenIcon from "@/images/merchPictures/fullScreen.png";
import styles from "./MerchProduct.module.css";

export type MerchItem = {
  title: string;
  /** anchor (e.g. merch.html#lim4ticketAnchor) */
  id?: string;
  /** not shown on the page */
  hidden?: boolean;
  /** grid classes of the card */
  columns?: string;
  /** picture shown on the card */
  image: StaticImageData;
  /** shirts: pictures of the front and back, selectable with tabs */
  front?: StaticImageData;
  back?: StaticImageData;
  /** further pictures, only visible in the lightbox */
  morePictures?: StaticImageData[];
  /** show the fullscreen icon that opens the lightbox */
  lightbox?: boolean;
  details: { label: string; value: ReactNode }[];
};

type View = "image" | "front" | "back";

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ");

/** Wrapper row of product cards. */
export function MerchRow({ id, hidden, children }: { id?: string; hidden?: boolean; children: ReactNode }) {
  return (
    <div id={id} className={`row ${styles.products}`} style={hidden ? { display: "none" } : undefined}>
      {children}
    </div>
  );
}

/** Product card with picture(s), details and order button. */
export default function MerchProduct({ item }: { item: MerchItem }) {
  const [view, setView] = useState<View>("image");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const frontButton = useRef<HTMLButtonElement>(null);
  const backButton = useRef<HTMLButtonElement>(null);
  const hasTabs = Boolean(item.front && item.back);

  // a click anywhere else switches back to the normal picture
  useEffect(() => {
    if (!hasTabs) return;
    const reset = (e: MouseEvent) => {
      if (e.target !== frontButton.current && e.target !== backButton.current) setView("image");
    };
    document.addEventListener("click", reset);
    return () => document.removeEventListener("click", reset);
  }, [hasTabs]);

  // pictures in the lightbox, in the order of the former page
  const pictures: { src: StaticImageData; view?: View }[] = hasTabs
    ? [
        { src: item.front!, view: "front" },
        { src: item.back!, view: "back" },
        { src: item.image, view: "image" },
      ]
    : [{ src: item.image, view: "image" }, ...(item.morePictures ?? []).map((src) => ({ src }))];

  const openLightbox = () => setLightboxIndex(Math.max(0, pictures.findIndex((p) => p.view === view)));
  const move = (step: number) =>
    setLightboxIndex((i) => (i === null ? null : (i + step + pictures.length) % pictures.length));

  const sizes = "(max-width: 767px) 80vw, 30vw";

  return (
    <div
      id={item.id}
      className={`${item.columns ?? "col-12 col-sm-10 col-md-4 col-lg-4"} ${styles.product}`}
      style={item.hidden ? { display: "none" } : undefined}
    >
      <div className={styles.prodContainer}>
        <div className={styles.prodImage}>
          {hasTabs && (
            <>
              <button ref={backButton} className={cx(view === "back" && styles.active)} onFocus={() => setView("back")}>
                b<br />a<br />c<br />k
              </button>
              <button ref={frontButton} className={cx(view === "front" && styles.active)} onFocus={() => setView("front")}>
                f<br />r<br />o<br />n<br />t
              </button>
              <Img src={item.front!} alt="" className={cx(styles.alternative, view === "front" && styles.shown)} sizes={sizes} />
              <Img src={item.back!} alt="" className={cx(styles.alternative, view === "back" && styles.shown)} sizes={sizes} />
            </>
          )}
          <Img
            src={item.image}
            alt={item.title}
            className={cx(styles.bgImages, view === "image" && styles.shown, hasTabs && styles.gridOnMobile)}
            sizes={sizes}
          />
          {item.lightbox && (
            <Img
              src={fullScreenIcon}
              className={styles.fullScreenIcon}
              alt="full screen icon"
              onClick={openLightbox}
              sizes="64px"
            />
          )}
          {item.morePictures?.map((src, i) => (
            <Img key={i} src={src} alt="" className={styles.alternative} sizes={sizes} />
          ))}
        </div>

        <div className={`row ${styles.prodDescription}`}>
          <div className={styles.prodTitle}>
            <h3>{item.title}</h3>
          </div>
          <hr />
          <div className={styles.details}>
            {item.details.map((detail) => (
              <div key={detail.label} className={styles.detailsColumn}>
                <div className={styles.label}>
                  <p>{detail.label}</p>
                </div>
                <div className={styles.value}>{detail.value}</div>
              </div>
            ))}
          </div>

          <a href="mailto:order@lessoninviolence.com" className={styles.orderBtn} translate="no">
            Order !
          </a>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIndex(null);
          }}
        >
          <div className={`${styles.lightboxIcon} ${styles.prev}`} onClick={() => move(-1)} role="button" aria-label="Previous picture">
            <PrevIcon />
          </div>
          <Img src={pictures[lightboxIndex].src} alt={item.title} className={styles.lightboxImg} sizes="90vw" placeholder="empty" />
          <div className={`${styles.lightboxIcon} ${styles.next}`} onClick={() => move(1)} role="button" aria-label="Next picture">
            <NextIcon />
          </div>
        </div>
      )}
    </div>
  );
}
