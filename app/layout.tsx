import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

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
  title: "Lesson in Violence | german thrash metal band",
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/assets/LIV_abkuerzung_rot.png", type: "image/png", sizes: "16x16 32x32" }],
    shortcut: "/assets/LIV_abkuerzung_rot.png",
    apple: "/assets/LIV_abkuerzung_rot.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={garamond.variable}>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XDYLDJFLCX" />
    </html>
  );
}
