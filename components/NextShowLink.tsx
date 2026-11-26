"use client";

import { pickNextShow } from "@/data/showDates";
import { useToday } from "./useToday";

type ShowRef = { date: string; name: string };

/** Content of the "Next show" box; re-picks the show with today's date in the browser. */
export default function NextShowLink({ shows, buildShow }: { shows: ShowRef[]; buildShow: ShowRef }) {
  const today = useToday();
  const show = (today && pickNextShow(shows, today)) || buildShow;
  return (
    <>
      <div className="col-6">
        <a className="red" href="./live.html">
          Next show
        </a>
      </div>
      <div className="col-6">
        <a href="./live.html">
          <span>{show.date}</span>
          <br />
          <span translate="no">{show.name}</span>
        </a>
      </div>
    </>
  );
}
