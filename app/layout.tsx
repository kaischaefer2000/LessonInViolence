import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import Script from "next/script";
import { preload } from "react-dom";
import bloodBg from "@/images/layoutPictures/Blut_6.webp";
import "./globals.css";

const GA_ID = "G-XDYLDJFLCX";

// self-hosted at build time – same weights/styles as the former Google Fonts link
const garamond = EB_Garamond({
  weight: ["400", "600", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lessoninviolence.com"),
  title: { default: "Lesson in Violence | german thrash metal band", template: "Lesson in Violence | %s" },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/assets/LIV_abkuerzung_rot.png", type: "image/png", sizes: "16x16 32x32" }],
    shortcut: "/assets/LIV_abkuerzung_rot.png",
    apple: "/assets/LIV_abkuerzung_rot.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // the blood background of #mainContent is the largest element on most pages – start loading it
  // right away instead of waiting for the CSS
  preload(bloodBg.src, { as: "image", fetchPriority: "high" });

  return (
    <html lang="en" className={garamond.variable}>
      <body>
        {children}
        {/* Google Analytics: loaded when the browser is idle, so it doesn't slow down the page load */}
        <Script id="ga-init" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
      </body>
    </html>
  );
}
