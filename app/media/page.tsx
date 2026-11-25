import type { Metadata } from "next";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import InfoBox from "@/components/InfoBox";
import AudioPlayer from "@/components/AudioPlayer";
import StreamingLinks from "@/components/StreamingLinks";
import { PictureGallery, VideoGallery } from "@/components/Gallery";
import { gallery, videos } from "@/data/gallery";
import { tracks } from "@/data/tracks";
import { defaultKeywords } from "@/data/seo";
import header from "@/images/headers/Noneedfordeath-header.jpg";
import styles from "./media.module.css";

export const metadata: Metadata = {
  title: "Lesson in Violence | Concert pictures & videos",
  description:
    "Go checkout the pictures from our shows. You`ll also find music viedos and demo songs from our new album The Thrashfall of Mankind.",
  keywords: defaultKeywords,
};

export default function MediaPage() {
  return (
    <Page className={styles.page}>
      <Hero title={["M", "E", "D", "I", "A"]} background={header.src} titleStyle="paddedHiddenOnMobile" />

      <InfoBox variant="media">
        <div className="col-12">
          <h3>What do you want to look at?</h3>
        </div>
        <div className="col">
          <ul>
            <li><a href="#live-pictures">Live pictures</a></li>{" "}
            <li><a href="#videoSection">Videos</a></li>{" "}
            <li><a href="#demoTracks">Audio samples</a></li>
          </ul>
        </div>
      </InfoBox>

      <div id="mainContent" className="mainContent">
        <div className="mainContentInner">
          <div className="row">
            <div className="col">
              <h2 id="demoTracks" className={styles.demoTracks} translate="no">
                Audio samples
              </h2>
              <div className={`row ${styles.playerContainer}`}>
                <AudioPlayer track={tracks.noNeedForDeath} />
                <AudioPlayer track={tracks.menKillMen} />
                <AudioPlayer track={tracks.theWorldIsMine} />
              </div>
              <div className={`row ${styles.playerContainer}`}>
                <AudioPlayer track={tracks.thrashMetalMankind} />
                <AudioPlayer track={tracks.lessonInViolence} />
                <AudioPlayer track={tracks.lostInYourself} />
              </div>
              <StreamingLinks
                className={styles.streamingLinks}
                buttonClassName={styles.streamingBtn}
                iconClassName={styles.streamingIcon}
              />
            </div>
          </div>

          <h2 id="live-pictures" translate="no">
            Live pictures
          </h2>
          <PictureGallery sections={gallery} sectionClassName={styles.livePics} />

          <section id="videoSection">
            <h2>Videos</h2>
            <VideoGallery videos={videos} className={styles.videoSection} secondRowClassName={styles.secondRow} />
          </section>
        </div>
      </div>
    </Page>
  );
}
