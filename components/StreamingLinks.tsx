import { Fragment } from "react";
import platforms from "@/data/streaming.json";

/** Buttons linking to the album on the streaming platforms (icons as inline SVG). */
export default function StreamingLinks({
  className,
  buttonClassName,
  iconClassName,
}: {
  className: string;
  buttonClassName: string;
  iconClassName: string;
}) {
  return (
    <div className={`row ${className}`}>
      <div>
        <p>Go listen to the complete album on your favorite streaming platform!</p>
      </div>
      <div>
        {platforms.map((platform) => (
          <Fragment key={platform.name}>
            <a href={platform.href} target="blank">
              <button className={buttonClassName}>
                <svg
                  className={iconClassName}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={platform.viewBox}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d={platform.path}
                    {...("evenOdd" in platform ? { fillRule: "evenodd" as const, clipRule: "evenodd" as const } : {})}
                  />
                </svg>
                {platform.name}
              </button>
            </a>{" "}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
