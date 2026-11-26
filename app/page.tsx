import type { Metadata } from "next";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import NextShowBox from "@/components/NextShowBox";
import NewsList from "@/components/NewsList";
import { NewsBox } from "@/components/News";
import AudioPlayer from "@/components/AudioPlayer";
import LinkButton from "@/components/LinkButton";
import Img from "@/components/Img";
import { news } from "@/data/news";
import { tracks } from "@/data/tracks";
import albumTitle from "@/images/homeAssets/TMM-Albumtitel.png";
import bandPicture from "@/images/homeAssets/Band-black-white-sideways.png";
import jugendhaus2 from "@/images/jugendhaus_pictures/Lesson in Violence_Jugendhaus_2019_2-min.jpg";
import jugendhaus7 from "@/images/jugendhaus_pictures/Lesson in Violence_Jugendhaus_2019_7-min.jpg";
import statti13 from "@/images/statti_pictures/Lesson in Violence_Statti_13.jpg";
import statti11 from "@/images/statti_pictures/Lesson in Violence_Statti_11.jpg";
import bash10 from "@/images/birthdayBash_pictures/Lesson_in_violence_birthday_bash_10.jpg";
import bash9 from "@/images/birthdayBash_pictures/Lesson_in_violence_birthday_bash_9.jpg";
import bash19 from "@/images/birthdayBash_pictures/Lesson_in_violence_birthday_bash_19.jpg";
import bash2 from "@/images/birthdayBash_pictures/Lesson_in_violence_birthday_bash_2.jpg";
import styles from "./home.module.css";
import { BOOKING_EMAIL } from "@/data/site";

export const metadata: Metadata = {
  description:
    "We deliver fucking good thrash metal from Schweinfurt. Go checkout the demo track from our upcoming album The Thrashfall of Mankind",
  keywords:
    "lesson in violence, thrash metal, german thrash metal, lesson in violence schweinfurt, lesson in violence band, thrash metal band, Thrash Metal Mankind",
};

const JUGENDHAUS = "lesson in violence concert at jugendhaus schweinfurt";
const STATTBAHNHOF = "lesson in violence concert at stattbahnhof schweinfurt";
const BIRTHDAY_BASH = "lesson in violence concert at the goregonzola birthday bash";

const concertPictures = [
  { src: jugendhaus2, alt: JUGENDHAUS },
  { src: jugendhaus7, alt: JUGENDHAUS },
  { src: statti13, alt: STATTBAHNHOF },
  { src: statti11, alt: STATTBAHNHOF },
  { src: bash10, alt: BIRTHDAY_BASH },
  { src: bash9, alt: BIRTHDAY_BASH },
  { src: bash19, alt: BIRTHDAY_BASH },
  // shown in the size of the former AVIF version
  { src: bash2, alt: BIRTHDAY_BASH, intrinsic: { width: 564, height: 376 } },
];

export default function HomePage() {
  return (
    <Page bootstrap={5}>
      <Hero
        title="HOME"
        backgroundClassName={styles.heroBackground}
        titleStyle="padded"
      />
      <NextShowBox />

      <div id="mainContent" className={`mainContent ${styles.mainContent}`}>
        <div className="mainContentInner">
          {/* news */}
          <section id="newsSection">
            <div className="row">
              <div className={`col ${styles.heading}`}>
                <h2>
                  News from<span translate="no"> Lesson in Violence</span>
                </h2>
              </div>
            </div>
            <NewsList boxes={news.map((item, i) => <NewsBox key={item.date} item={item} dark={i % 2 === 0} />)} />
          </section>

          {/* The Thrashfall of Mankind */}
          <section>
            <div className={`row ${styles.tmmSection}`}>
              <div className={`col-md-6 col-lg-4 ${styles.tmmLeftSide}`}>
                <div className={`row ${styles.playerContainer}`}>
                  <AudioPlayer track={tracks.thrashMetalMankind} />
                </div>
              </div>
              <div className={`col-md-6 col-lg-8 ${styles.tmmRightSide}`}>
                <Img src={albumTitle} alt="The Trashfall of Mankind album title" sizes="(max-width: 767px) 90vw, 60vw" />
                <p>
                  Thrash Metal Mankind is one of the headbanging tracks of our debut album The Thrashfall of Mankind.
                  <br />
                  Listen to our other <a href="./media.html#mainContent">audio samples</a> from our album. Your
                  interested in booking us for a concert? Send us an E-Mail at{" "}
                  <a href={`mailto:${BOOKING_EMAIL}`}>{BOOKING_EMAIL}</a> and look at our
                  <span translate="no"> technical rider </span> and other information{" "}
                  <a href="./downloads.html">here</a>.
                </p>
              </div>
            </div>
          </section>

          {/* about us preview */}
          <section>
            <div className="row">
              <div className={`col ${styles.heading}`}>
                <h3>
                  This is<span translate="no"> Lesson in Violence</span>
                </h3>
              </div>
            </div>

            <div className={`row ${styles.aboutUsRow}`}>
              <div className="col-12 col-lg-6">
                <picture>
                  <Img
                    src={bandPicture}
                    alt="Lesson in Violence Band standing in front of scaffold"
                    sizes="(max-width: 991px) 100vw, 50vw"
                  />
                </picture>
              </div>

              <div className="col-12 col-lg-6">
                <div className={styles.rightHalfInner}>
                  <h4>
                    <b>Violence in music and nowhere else!</b>
                  </h4>
                  <br />
                  <p>
                    Lesson in Violence represents the best of traditional smashing thrash metal! We are a new german
                    metal band from Schweinfurt/Bavaria. Our vision is to deliver headbanging thrash metal and to teach
                    you metalheads a Lesson in Violence!
                  </p>
                  <LinkButton className={styles.ctaAboutUs} href="./about-us.html">
                    Get to know us &gt;
                  </LinkButton>
                </div>
              </div>
            </div>
          </section>

          {/* media preview */}
          <section>
            <div className="row">
              <div className={`col ${styles.heading}`}>
                <h3>Concert pictures!</h3>
              </div>
            </div>

            <div className="row">
              {concertPictures.map((picture) => (
                <div key={picture.src.src} className="col-6 col-sm-4 col-md-3">
                  <Img
                    src={picture.src}
                    alt={picture.alt}
                    sizes="(max-width: 575px) 50vw, (max-width: 767px) 33vw, 25vw"
                    {...picture.intrinsic}
                  />
                </div>
              ))}

              <LinkButton className={styles.ctaMedia} href="./media.html">
                View all pictures
              </LinkButton>
            </div>
          </section>
        </div>
      </div>
    </Page>
  );
}
