import type { CSSProperties } from "react";
import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import NextShowBox from "@/components/NextShowBox";
import { defaultKeywords } from "@/data/seo";
import header from "@/images/headers/about-us-header.jpg";
import floEins from "@/images/members/Flo-eins-freigestellt-min.png";
import floEinsLive from "@/images/members/Flo-eins-live-min.jpg";
import roli from "@/images/members/Roli-freigestellt.png";
import roliLive from "@/images/members/Roli-live-neu-min.jpg";
import hotte from "@/images/members/Hotte-freigestellt-min.png";
import hotteLive from "@/images/members/Hotte-live-min.jpg";
import floZwei from "@/images/members/Flo-zwei-freigestellt-min.png";
import floZweiLive from "@/images/members/Flo-zwei-live-min.jpg";
import michi from "@/images/members/Michi-freigestellt-min.png";
import michiLive from "@/images/members/MichiLive.jpeg";
import styles from "./about-us.module.css";

export const metadata: Metadata = {
  title: "Lesson in Violence | german Thrash Metal band",
  description:
    "We are a german Thrash Metal band from Schweinfurt - Frankonia. Lesson in Violence delivers headbanging metal and smashing live shows",
  keywords: defaultKeywords,
};

/** Band members – the picture switches to the live photo on hover. */
const members: { name: string; role: string; picture: StaticImageData; live: StaticImageData }[] = [
  { name: "Florian Negwer", role: "Vocals", picture: floEins, live: floEinsLive },
  { name: "Roland Schäfer", role: "Bass, Backvocals", picture: roli, live: roliLive },
  { name: "Gareth Lathan", role: "Drums", picture: hotte, live: hotteLive },
  { name: "Florian Helbig", role: "Guitar, Backvocals", picture: floZwei, live: floZweiLive },
  { name: "Michael Helbig", role: "Guitar", picture: michi, live: michiLive },
];

export default function AboutUsPage() {
  return (
    <Page>
      <Hero title={["A", "b", "o", "u", "t", "", "u", "s"]} background={header.src} />
      <NextShowBox variant="aboutUs" />

      <main>
        <div id="mainContent" className="mainContent">
          <div className="mainContentInner">
            <section>
              <div className="row">
                <div className={`col ${styles.aboutUsText}`}>
                  <h2>
                    Welcome to the official homepage of
                    <br />
                    <span translate="no">LESSON IN VIOLENCE</span>
                  </h2>

                  <p>
                    We are a <strong>german Thrash Metal</strong> band from <strong>Schweinfurt</strong>, Bavaria.
                    <br />
                    It&apos;s always hard to find a name for your baby. We wanted a name that expresses the message in
                    our music and gives you an idea for what it&apos;s all about. Further should every{" "}
                    <strong>metalhead</strong> know what&apos;s going on by just reading the name of the band. So we
                    helped ourselves by leaning on to one of the greatest <strong>Thrash Metal bands</strong> who have
                    always been a huge influence to us all. <strong>“Lesson in Violence”</strong> was born in summer
                    2019, named after a song by <strong>Exodus</strong>. It is our aim to deliver fuckin good{" "}
                    <strong>Thrash Metal</strong> without any triviality that goes straight through the heart.
                    <br />
                    <br />
                    Violence in music ... and nowhere else!
                    <br />
                    <br />
                    If you like it fast and straight and you prefer some <strong>old-school-thrash-riffings</strong>{" "}
                    without any cosmetics or compromises, then lend us your ears until they bleed!
                    <br />
                    In February 2022 we signed a record deal with Iron Shield Records Berlin and released our first
                    album &quot;The Thrashfall of Mankind&quot; to bring the violence to your home and play shows to
                    expand our range and fuck shit up! In the meantime we played some awesome shows and made many new
                    friends along our way and had some great changes in our lineup to become even more thrashier.
                    <br />
                    As a result, the second album &apos;no need for death&apos; was released in March 2024. It&apos;s
                    even more aggressive and violent, so you should all risk listening to this finest piece of thrash
                    passion. Iron Shield Records is once again our criminal partner.
                  </p>
                </div>
              </div>
            </section>

            <div className={`row ${styles.members}`}>
              {members.map((member, i) => (
                <div key={member.name} className="col-6 col-md ml-0 mr-0 ml-lg-1 mr-lg-1">
                  <div
                    className={[
                      styles.memberPicture,
                      i === 0 && styles.first,
                      i === members.length - 1 && styles.last,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    style={
                      {
                        "--picture": `url("${member.picture.src}")`,
                        "--picture-live": `url("${member.live.src}")`,
                      } as CSSProperties
                    }
                    role="img"
                    aria-label={member.name}
                  ></div>
                  <p>
                    {member.name}
                    <br />
                    <span>{member.role}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Page>
  );
}
