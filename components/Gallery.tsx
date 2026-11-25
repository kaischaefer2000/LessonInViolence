"use client";

import { useMemo, useState } from "react";
import Img from "./Img";
import Lightbox, { lightboxItemClass, type LightboxContent } from "./Lightbox";
import { cx } from "./cx";
import type { GallerySection, Video } from "@/data/gallery";

/**
 * Concert picture sections of the media page. Clicking a picture opens the
 * lightbox, in which you can browse through all pictures of all sections.
 */
export function PictureGallery({ sections, sectionClassName }: {
  sections: GallerySection[];
  sectionClassName?: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const all = useMemo(
    () => sections.flatMap((section) => section.images.map((src) => ({ src, alt: section.title }))),
    [sections],
  );

  // the grid doesn't depend on the lightbox index, so browsing doesn't re-render it
  const grid = useMemo(() => {
    let start = 0;
    return sections.map((section) => {
      const first = start;
      start += section.images.length;
      return (
        <section key={section.title} className={sectionClassName}>
          <h3 id={section.id} translate={section.titleNoTranslate ? "no" : undefined}>
            {section.title}
          </h3>
          <div className="row">
            {section.images.map((src, j) => (
              <div key={first + j} className="col-6 col-sm-4 col-md-3">
                <Img
                  className={lightboxItemClass}
                  src={src}
                  alt={section.title}
                  sizes="(max-width: 575px) 50vw, (max-width: 767px) 33vw, 25vw"
                  onClick={() => setIndex(first + j)}
                />
              </div>
            ))}
          </div>
        </section>
      );
    });
  }, [sections, sectionClassName]);

  return (
    <>
      {grid}
      {index !== null && (
        <Lightbox
          content={{ type: "gallery", images: all, index }}
          onClose={() => setIndex(null)}
          onNavigate={setIndex}
        />
      )}
    </>
  );
}

/** Video thumbnails; clicking one plays the video in the lightbox. */
export function VideoGallery({ videos, className, secondRowClassName }: {
  videos: Video[];
  className?: string;
  secondRowClassName?: string;
}) {
  const [open, setOpen] = useState<LightboxContent | null>(null);

  return (
    <div className={`${className} row`}>
      {videos.map((video, i) => {
        const content: LightboxContent =
          "youtubeId" in video ? { type: "youtube", id: video.youtubeId } : { type: "video", src: video.videoSrc };
        return (
          <div key={video.title} className={cx("col-12 col-md-4", i >= 3 && secondRowClassName)}>
            <h3 translate={video.titleNoTranslate ? "no" : undefined}>{video.title}</h3>{" "}
            <a className={lightboxItemClass} role="button" tabIndex={0} onClick={() => setOpen(content)}>
              <Img src={video.thumbnail} alt={video.alt} sizes="(max-width: 767px) 90vw, 30vw" />
            </a>
          </div>
        );
      })}
      {open && <Lightbox content={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
