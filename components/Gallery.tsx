"use client";

import { useState } from "react";
import Img from "./Img";
import Lightbox, { lightboxItemClass, type LightboxContent } from "./Lightbox";
import type { GallerySection, Video } from "@/data/gallery";

/**
 * Concert picture sections of the media page. Clicking a picture opens the
 * lightbox, in which you can browse through all pictures of all sections.
 */
export function PictureGallery({ sections, sectionClassName, headingClassName }: {
  sections: GallerySection[];
  sectionClassName?: string;
  headingClassName?: string;
}) {
  const all = sections.flatMap((section) => section.images.map((src) => ({ src, alt: section.title })));
  const [index, setIndex] = useState<number | null>(null);
  let counter = 0;

  return (
    <>
      {sections.map((section) => (
        <section key={section.title} className={sectionClassName}>
          <h3 id={section.id} className={headingClassName} translate={section.titleNoTranslate ? "no" : undefined}>
            {section.title}
          </h3>
          <div className="row">
            {section.images.map((src) => {
              const i = counter++;
              return (
                <div key={i} className="col-6 col-sm-4 col-md-3">
                  <Img
                    className={lightboxItemClass}
                    src={src}
                    alt={section.title}
                    sizes="(max-width: 575px) 50vw, (max-width: 767px) 33vw, 25vw"
                    onClick={() => setIndex(i)}
                  />
                </div>
              );
            })}
          </div>
        </section>
      ))}
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
        const thumbnail = (
          <Img src={video.thumbnail} alt={video.alt} sizes="(max-width: 767px) 90vw, 30vw" />
        );
        return (
          <div key={video.title} className={`col-12 col-md-4${i >= 3 ? ` ${secondRowClassName}` : ""}`}>
            <h3 translate={video.titleNoTranslate ? "no" : undefined}>{video.title}</h3>{" "}
            <a className={lightboxItemClass} role="button" tabIndex={0} onClick={() => setOpen(content)}>
              {thumbnail}
            </a>
          </div>
        );
      })}
      {open && <Lightbox content={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
