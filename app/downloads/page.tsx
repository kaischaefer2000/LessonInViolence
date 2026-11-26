import type { Metadata } from "next";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import DownloadItem from "@/components/DownloadItem";
import { downloads, organizerMaterialUrl } from "@/data/downloads";
import { defaultKeywords } from "@/data/seo";
import header from "@/images/headers/header-downloads-version-2.webp";
import styles from "./downloads.module.css";

export const metadata: Metadata = {
  title: "Picture & Info-Downloads",
  description:
    "Intrested in our band? Go checkout the pictures and demo songs for download. You`ll also find a bandinfo and a technical rider",
  keywords: defaultKeywords,
};

export default function DownloadsPage() {
  return (
    <Page>
      <Hero title="About us" background={header.src} titleStyle="hidden" />

      <div id="mainContent" className="mainContent">
        <div className="mainContentInner">
          <div className="row">
            <div className="col">
              <h2 className={styles.heading}>MATERIAL FOR ORGANIZERS</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              Find all the material for organizers at our{" "}
              <a href={organizerMaterialUrl} target="blank">
                one drive page
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h2 className={styles.heading}>PICTURES &amp; LOGOS</h2>
            </div>
          </div>

          <div className="row">
            {downloads.map((item) => (
              <DownloadItem key={item.file} file={item.file} preview={item.preview} />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}
