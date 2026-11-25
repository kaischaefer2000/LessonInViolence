import ExportedImage, { type ExportedImageProps } from "next-image-export-optimizer";

/**
 * Optimized image (WebP in several widths, lazy loading, width/height).
 * Photos (JPG) get a blurred placeholder while loading; PNG/SVG graphics
 * often have transparency, so they get none.
 */
export default function Img(props: ExportedImageProps) {
  const src = typeof props.src === "object" ? props.src.src : props.src;
  const isPhoto = /\.jpe?g$/i.test(src);
  return <ExportedImage placeholder={isPhoto ? "blur" : "empty"} {...props} />;
}
