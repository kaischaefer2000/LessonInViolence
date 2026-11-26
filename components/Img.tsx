import ExportedImage, { type ExportedImageProps } from "next-image-export-optimizer";
import { plain } from "@/data/image";

/**
 * Optimized image (WebP in several widths, lazy loading, width/height).
 * No blurred placeholder: it is a separate 10px image per photo that the browser
 * loads right away – even for pictures far below the fold – and on the HTTP/1.1
 * server these extra requests delay the important ones.
 */
export default function Img(props: ExportedImageProps) {
  const src = typeof props.src === "object" ? plain(props.src) : props.src;
  return <ExportedImage placeholder="empty" {...props} src={src} />;
}
