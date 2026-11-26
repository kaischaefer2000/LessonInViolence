import type { Metadata } from "next";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import NextShowBox from "@/components/NextShowBox";
import ShowAccordion from "@/components/ShowAccordion";
import { getShows, isOver } from "@/data/shows";
import { defaultKeywords } from "@/data/seo";
import header from "@/images/headers/header-lim-3-k.jpeg";
import styles from "./live.module.css";

export const metadata: Metadata = {
  title: "concert dates and locations",
  description:
    "You want to experience headbanging trash metal? Come to one of our shows! You can find dates, locations and other performing bands here",
  keywords: defaultKeywords,
};

export default function LivePage() {
  return (
    <Page>
      <Hero title="LIVE" background={header.src} titleStyle="padded" />
      <NextShowBox />

      <div id="mainContent" className="mainContent">
        <div className="mainContentInner">
          <div className="row">
            <div className={`col ${styles.heading}`}>
              <h2>Experience us live!</h2>
            </div>
          </div>

          {getShows().map((show) => (
            <ShowAccordion key={show.date + show.name} show={show} over={isOver(show)} />
          ))}
        </div>
      </div>
    </Page>
  );
}
