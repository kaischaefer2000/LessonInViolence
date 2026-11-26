import type { StaticImageData } from "next/image";

/**
 * Static image import without Next's inline base64 blur data.
 * ExportedImage builds its blur placeholder from the generated 10px WebP and
 * never reads `blurDataURL`, but the field would still be serialized into the
 * HTML of every page that passes the image to a client component.
 */
export const plain = ({ src, width, height }: StaticImageData): StaticImageData => ({ src, width, height });
