"use client";

import { memo, useEffect, useRef } from "react";
import type { StaticImageData } from "next/image";
import Img from "./Img";
import styles from "./Lightbox.module.css";

export type LightboxContent =
  | { type: "gallery"; images: { src: StaticImageData; alt: string }[]; index: number }
  | { type: "video"; src: string }
  | { type: "youtube"; id: string };

export const lightboxItemClass = styles.item;

const CloseIcon = () => (
  <svg viewBox="0 0 512 512" aria-hidden="true">
    <path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z" />
    <path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z" />
  </svg>
);

export const NextIcon = () => (
  <svg viewBox="0 0 477.175 477.175" aria-hidden="true">
    <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z" />
  </svg>
);

export const PrevIcon = () => (
  <svg viewBox="0 0 477.175 477.175" aria-hidden="true">
    <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" />
  </svg>
);

/** One gallery picture; memoized, so browsing only re-renders the slides whose loading changes. */
const Slide = memo(function Slide({ src, alt, eager }: { src: StaticImageData; alt: string; eager: boolean }) {
  return (
    <section className={styles.imageContainer}>
      <Img src={src} alt={alt} sizes="75vw" placeholder="empty" loading={eager ? "eager" : "lazy"} />
    </section>
  );
});

/** Fullscreen view of a picture gallery, a video or a YouTube video. */
export default function Lightbox({
  content,
  onClose,
  onNavigate,
}: {
  content: LightboxContent;
  onClose: () => void;
  /** new gallery index */
  onNavigate?: (index: number) => void;
}) {
  const count = content.type === "gallery" ? content.images.length : 0;
  const index = content.type === "gallery" ? content.index : 0;
  const prev = () => onNavigate?.(index === 0 ? count - 1 : index - 1);
  const next = () => onNavigate?.(index === count - 1 ? 0 : index + 1);

  // subscribe once; the listener calls the handler of the latest render through the ref
  const keyHandler = useRef<(e: KeyboardEvent) => void>(undefined);
  useEffect(() => {
    keyHandler.current = (e) => {
      if (e.key === "Escape") onClose();
      if (content.type === "gallery" && e.key === "ArrowLeft") prev();
      if (content.type === "gallery" && e.key === "ArrowRight") next();
    };
  });
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => keyHandler.current?.(e);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={styles.lightbox} role="dialog" aria-modal="true">
      <div className={styles.overlay} onClick={onClose}></div>

      {content.type === "gallery" && (
        <div className={styles.inner} style={{ marginLeft: `${index * -100}vw` }}>
          {content.images.map((image, i) => (
            <Slide key={i} src={image.src} alt={image.alt} eager={Math.abs(i - index) <= 1} />
          ))}
        </div>
      )}
      {content.type === "video" && (
        <video autoPlay controls>
          <source src={content.src} type="video/mp4" />
        </video>
      )}
      {content.type === "youtube" && (
        <iframe
          className={styles.youtube}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube video"
          src={`https://www.youtube-nocookie.com/embed/${content.id}`}
        ></iframe>
      )}

      {content.type === "gallery" && (
        <>
          <div className={styles.prevContainer} onClick={prev} role="button" aria-label="Previous picture">
            <div className={styles.arrow}>
              <PrevIcon />
            </div>
          </div>
          <div className={styles.nextContainer} onClick={next} role="button" aria-label="Next picture">
            <div className={styles.arrow}>
              <NextIcon />
            </div>
          </div>
        </>
      )}

      {/* last element, so the prev/next areas don't cover it */}
      <div className={styles.closeIcon} onClick={onClose} role="button" aria-label="Close">
        <CloseIcon />
      </div>
    </div>
  );
}
