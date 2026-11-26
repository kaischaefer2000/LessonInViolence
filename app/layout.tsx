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
        {/* Google Analytics: the gtag script (~170 KB, ~700 ms CPU on phones) is only loaded on the
            first interaction or 5 s after the page load, so it doesn't block the page while it starts */}
        <Script id="ga-init" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');
(function () {
  var events = ['pointerdown', 'keydown', 'touchstart', 'scroll'];
  var timer;
  function load() {
    events.forEach(function (e) { removeEventListener(e, load); });
    clearTimeout(timer);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
    document.head.appendChild(s);
  }
  events.forEach(function (e) { addEventListener(e, load, { once: true, passive: true }); });
  timer = setTimeout(load, 5000);
})();`}
        </Script>
      </body>
    </html>
  );
}
