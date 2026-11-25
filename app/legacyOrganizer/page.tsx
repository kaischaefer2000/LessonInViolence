import type { Metadata } from "next";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import InfoBox from "@/components/InfoBox";
import AudioPlayer from "@/components/AudioPlayer";
import DownloadItem from "@/components/DownloadItem";
import Img from "@/components/Img";
import { tracks } from "@/data/tracks";
import header from "@/images/headers/header_about-us-min.jpg";
import wordmark from "@/images/layoutPictures/LessonInViolence_Wortmarke_rot.png";
import styles from "./organizer.module.css";

/* Hidden page for organizers (not linked, not indexed): full tracks and the band info. */

export const metadata: Metadata = {
  title: "Lesson in Violence | organizer infos",
  robots: { index: false, follow: false },
};

export default function OrganizerPage() {
  return (
    <Page className={styles.page}>
      <Hero title={["A", "b", "o", "u", "t", "", "u", "s"]} background={header.src} titleStyle="hidden" />

      <InfoBox variant="organizer">
        <div className="col-12">
          <Img src={wordmark} alt="lesson in violence logo red" sizes="50vw" />
        </div>
      </InfoBox>

      <div id="mainContent" className="mainContent">
        <div className="mainContentInner">
          <div className="row">
            <div className="col">
              <h3 translate="no">
                Hello organizers, welcome to our hidden download-area for promotional purposes only.
              </h3>
              <div className={`row ${styles.playerContainer}`}>
                <AudioPlayer track={tracks.thrashMetalMankind} download />
                <AudioPlayer track={tracks.scumOfSociety} download />
                <AudioPlayer track={tracks.lessonInViolence} download />
                <AudioPlayer track={tracks.lostInYourself} download />
                <DownloadItem
                  file="/download-items/Bandinfo_LessoninViolence_2022.pdf"
                  preview="/download-items/bandinfo-website.jpg"
                  columns="col-12 col-sm-6 col-lg-8"
                  centered
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
