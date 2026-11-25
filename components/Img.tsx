import ExportedImage, { type ExportedImageProps } from "next-image-export-optimizer";
import { plain } from "@/data/image";

/**
 * Optimized image (WebP in several widths, lazy loading, width/height).
 * Photos (JPG) get a blurred placeholder while loading; PNG/SVG graphics
 * often have transparency, so they get none.
 */
export default function Img(props: ExportedImageProps) {
  const src = typeof props.src === "object" ? plain(props.src) : props.src;
  const isPhoto = /\.jpe?g$/i.test(typeof src === "object" ? src.src : src);
  return <ExportedImage placeholder={isPhoto ? "blur" : "empty"} {...props} src={src} />;
}
