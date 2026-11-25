import InfoBox, { type InfoBoxVariant } from "./InfoBox";
import { getNextShow } from "@/data/shows";

/** Info box "Next show" – calculated from data/shows.ts when the site is built. */
export default function NextShowBox({ variant }: { variant?: InfoBoxVariant }) {
  const show = getNextShow();
  if (!show) return null;
  return (
    <InfoBox id="nextShow" variant={variant}>
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
    </InfoBox>
  );
}
