const isDev = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // static HTML export into out/ (live.html, media.html, ... – same URLs as before)
  output: isDev ? undefined : "export",
  trailingSlash: false,
  images: {
    loader: "custom",
    imageSizes: [64, 128, 256, 384],
    deviceSizes: [640, 828, 1080, 1440, 1920],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    BUILD_YEAR: String(new Date().getFullYear()),
    nextImageExportOptimizer_imageFolderPath: "images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
  // `npm run dev`: make the .html links work like on the real server
  ...(isDev && {
    async rewrites() {
      return [
        { source: "/index.html", destination: "/" },
        { source: "/:page.html", destination: "/:page" },
      ];
    },
  }),
};

export default nextConfig;
