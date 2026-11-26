import InfoBox, { type InfoBoxVariant } from "./InfoBox";
import NextShowLink from "./NextShowLink";
import { getNextShow, getShows } from "@/data/shows";

/** Info box "Next show" – calculated from data/shows.ts at build time and corrected in the browser. */
export default function NextShowBox({ variant }: { variant?: InfoBoxVariant }) {
  const buildShow = getNextShow();
  if (!buildShow) return null;
  // only the small fields go to the client
  const shows = getShows().map(({ date, name }) => ({ date, name }));
  return (
    <InfoBox id="nextShow" variant={variant}>
      <NextShowLink shows={shows} buildShow={{ date: buildShow.date, name: buildShow.name }} />
    </InfoBox>
  );
}
